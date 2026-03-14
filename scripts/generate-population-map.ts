import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const STRAPI_PATH = "../../my-strapi-project"; // Relative to this script in mbs-freelance/scripts
const API_DIR = path.resolve(__dirname, STRAPI_PATH, "src/api");
const COMPONENTS_DIR = path.resolve(__dirname, STRAPI_PATH, "src/components");
const OUTPUT_FILE = path.resolve(__dirname, "../lib/population-map.json");

interface StrapiAttribute {
  type: string;
  component?: string;
  repeatable?: boolean;
  relation?: string;
  target?: string;
  [key: string]: any;
}

interface StrapiSchema {
  info: {
    singularName: string;
    pluralName: string;
  };
  attributes: Record<string, StrapiAttribute>;
}

const componentsCache: Record<string, any> = {};

function loadComponentSchema(componentName: string) {
  if (componentsCache[componentName]) return componentsCache[componentName];

  const [category, name] = componentName.split(".");
  const filePath = path.join(COMPONENTS_DIR, category, `${name}.json`);

  if (!fs.existsSync(filePath)) {
    console.warn(`Component file not found: ${filePath}`);
    return null;
  }

  const schema = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  componentsCache[componentName] = schema;
  return schema;
}

function buildPopulate(attributes: Record<string, StrapiAttribute>, visited = new Set<string>()): any {
  const populate: any = {};

  for (const [key, attr] of Object.entries(attributes)) {
    // 1. Handle Components
    if (attr.type === "component") {
      const componentSchema = loadComponentSchema(attr.component!);
      if (componentSchema && componentSchema.attributes) {
        // Prevent infinite recursion for nested components (though Strapi usually forbids this, safety first)
        if (visited.has(attr.component!)) {
            populate[key] = { populate: "*" };
            continue;
        }
        const newVisited = new Set(visited);
        newVisited.add(attr.component!);
        
        const nestedPopulate = buildPopulate(componentSchema.attributes, newVisited);
        
        // Ensure media fields inside components are populated
        // Strapi v5 often needs "*" or specific fields. "*" usually covers the component fields.
        // But if we have nested media or nested components, we need recursive populate.
        if (Object.keys(nestedPopulate).length > 0) {
            populate[key] = { populate: nestedPopulate };
        } else {
            populate[key] = { populate: "*" };
        }
      } else {
        populate[key] = { populate: "*" };
      }
    } 
    // 2. Handle Media
    else if (attr.type === "media") {
      populate[key] = { populate: "*" };
    }
    // 3. Handle Dynamic Zones
    else if (attr.type === "dynamiczone") {
        const dzPopulate: any = {};
        attr.components?.forEach((compName: string) => {
             const compSchema = loadComponentSchema(compName);
             if (compSchema && compSchema.attributes) {
                 const compPopulate = buildPopulate(compSchema.attributes, visited);
                 Object.assign(dzPopulate, compPopulate);
             }
        });
        populate[key] = { populate: Object.keys(dzPopulate).length > 0 ? dzPopulate : "*" };
    }
    // 4. Handle Relations (optional, but good for completeness)
    else if (attr.type === "relation") {
        // For now, just populate the relation top-level. 
        // Deep relation population might be complex depending on requirements.
        populate[key] = { populate: "*" };
    }
  }

  return Object.keys(populate).length > 0 ? populate : "*";
}

function main() {
  const populationMap: Record<string, any> = {};

  if (!fs.existsSync(API_DIR)) {
    console.error("API directory not found. Please check STRAPI_PATH.");
    process.exit(1);
  }

  const apis = fs.readdirSync(API_DIR);

  for (const apiName of apis) {
    const schemaPath = path.join(API_DIR, apiName, "content-types", apiName, "schema.json");
    if (fs.existsSync(schemaPath)) {
      const schema: StrapiSchema = JSON.parse(fs.readFileSync(schemaPath, "utf-8"));
      const singularName = schema.info.singularName;
      const pluralName = schema.info.pluralName;
      
      const populate = buildPopulate(schema.attributes);
      populationMap[singularName] = populate;
      if (pluralName && pluralName !== singularName) {
        populationMap[pluralName] = populate;
      }
    }
  }

  // Ensure lib directory exists
  const libDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(libDir)) {
    fs.mkdirSync(libDir, { recursive: true });
  }

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(populationMap, null, 2));
  console.log(`Population map generated at: ${OUTPUT_FILE}`);
}

main();
