import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const authHeader = req.headers.get("authorization");

    if (authHeader !== `Bearer ${process.env.REVALIDATE_SECRET}`) {
      return new Response("Unauthorized", { status: 401 });
    }
    const body = await req.json();

    let model = body.model || body.uid || "unknown";

    // Normalize: api::blog.blog -> blog, or plugin::upload.file -> file
    if (model.includes("::")) {
      model = model.split("::")[1].split(".")[0];
    } else if (model.includes(".")) {
      model = model.split(".")[0];
    }

    // 🔥 match your fetch tags
    const tag = `strapi-${model}`;

    revalidateTag(tag, "max");

    return NextResponse.json({ revalidated: true, tag });
  } catch (err) {
    return NextResponse.json({ error: "Revalidation failed" }, { status: 500 });
  }
}
