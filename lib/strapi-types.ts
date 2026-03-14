export interface StrapiBlockChild {
  type: string;
  text?: string;
}

export interface StrapiBlock {
  type: string;
  children: StrapiBlockChild[];
}

export interface StrapiImageData {
  id: number;
  url: string;
  alternativeText: string | null;
  width: number;
  height: number;
}

export interface StrapiHero {
  id: number;
  title: string;
  subtitle: string;
}

export interface StrapiBanner {
  id: number;
  title: string;
  subtitle: string | null;
}

export interface StrapiTitleSubtitle {
  id: number;
  title: string;
  sub_title: string;
}

export interface StrapiInfo {
  id: number;
  title: string;
  subtitle: string;
}

// Single Types
export interface StrapiHome {
  id: number;
  documentId: string;
  hero: StrapiHero & { background_image: any };
  impact_count: { 
    id: number; 
    title: string; 
    numbers: Array<{ id: number; number: string; text: string }> 
  };
  co_person: Array<{ id: number; title: string; sub_title: string }>;
  Core_Offerings_components: Array<{ id: number; title: string; subtitle: string; image: any }>;
  core_value_component: { 
    id: number; 
    description: string; 
    icons: Array<{ id: number; icon: any; text: string }> 
  };
  banner: Array<{ 
    id: number; 
    title: string; 
    subtitle: string; 
    image: any; 
    button: Array<{ id: number; text: string }> 
  }>;
  Technical_Competencies_component: { 
    id: number; 
    title: string; 
    title_subtile: Array<{ id: number; title: string; sub_title: string }>;
    side_image: any;
    button: Array<{ id: number; text: string }>;
  };
}

export interface StrapiInnovation {
  id: number;
  documentId: string;
  hero_section: Array<StrapiHero & { background_image: any }>;
  Toolkit: {
    id: number;
    title: string;
    pillar_element: Array<{
      id: number;
      title: string;
      image: any;
      title_subtile: Array<{ id: number; title: string; sub_title: string }>;
    }>;
  };
  Concept_to_Reality: Array<{
    id: number;
    title: string;
    title_subtile_image: Array<{
      id: number;
      title: string;
      subtitle: string;
      image: any;
      button: { id: number; text: string };
    }>;
  }>;
  banner: Array<{
    id: number;
    title: string;
    subtitle: string;
    image: any;
    button: { id: number; text: string };
  }>;
  innovation: Array<{
    id: number;
    title: string;
    subtitle: string;
    image: any;
    button: { id: number; text: string };
  }>;
}

export interface StrapiOperativeManagement {
  id: number;
  documentId: string;
  hero_section: StrapiHero[];
  title_subtile: StrapiTitleSubtitle[];
  Global_Efficiency: Array<{ id: number; title: string }>;
  Managed_Services: Array<{ id: number; title: string }>;
  banner: StrapiBanner[];
  operative_management_info: StrapiInfo[];
}

export interface StrapiStrategicConsulting {
  id: number;
  documentId: string;
  hero_section: StrapiHero[];
  Strategic_Excellence: { id: number; title: string };
  banner: StrapiBanner[];
  Strategic_info: StrapiInfo[];
}

export interface StrapiTotalTalentSolution {
  id: number;
  documentId: string;
  hero_section: StrapiHero[];
  MBS_Lifecycle: { id: number; title: string };
  talent_progess: { id: number; title: string };
  banner: StrapiBanner[];
  total_talent_info: StrapiInfo[];
}

export interface StrapiWorkspaceSolution {
  id: number;
  documentId: string;
  hero_section: StrapiHero;
  title_subtile: StrapiTitleSubtitle;
  Workspaces_pillar: { id: number; title: string };
  banner: StrapiBanner[];
  Workspaces_info: StrapiInfo;
}

export interface StrapiBlog {
  id: number;
  documentId: string;
  Title: string;
  Content: StrapiBlock[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  Image: StrapiImageData;
  // Fallbacks for older structure if needed
  attributes?: {
    title: string;
    content: string;
    image: {
      data: {
        attributes: StrapiImageData;
      };
    };
  };
}

export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
