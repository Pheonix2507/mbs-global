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
  button?: Array<{ id: number; text: string }>;
  background_image?: any;
}

export interface StrapiBanner {
  id: number;
  title: string;
  subtitle: string | null;
  image?: any;
  button?: any;
}

export interface StrapiTitleSubtitle {
  id: number;
  title: string;
  sub_title: string;
  swipe_element?: Array<{ id: number; title: string; subtitle: string }>;
}

export interface StrapiInfo {
  id: number;
  title: string;
  subtitle: string;
  image?: any;
  button?: any;
}

export interface StrapiPillar {
  id: number;
  title: string;
  pillar_element: Array<{
    id: number;
    title: string;
    image: any;
    title_subtile: StrapiTitleSubtitle[];
  }>;
}

export interface StrapiProgress {
  id: number;
  title: string;
  title_subtile_image: Array<{
    id: number;
    title: string;
    subtitle: string;
    image: any;
    button: any;
  }>;
}

export interface StrapiSwipe {
  id: number;
  title_subtile: StrapiTitleSubtitle;
}

// Single Types
export interface StrapiHome {
  id: number;
  documentId: string;
  hero: StrapiHero;
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
  banner: StrapiBanner;
  Technical_Competencies_component: { 
    id: number; 
    title: string; 
    title_subtile: StrapiTitleSubtitle[];
    side_image: any;
    button: Array<{ id: number; text: string }>;
  };
}

export interface StrapiInnovation {
  id: number;
  documentId: string;
  hero_section: StrapiHero;
  title_subtile: StrapiTitleSubtitle;
  Pillar: StrapiPillar;
  info: StrapiInfo;
  banner: StrapiBanner;
}

export interface StrapiOperativeManagement {
  id: number;
  documentId: string;
  hero_section: StrapiHero;
  title_subtile: StrapiTitleSubtitle;
  Pillar: StrapiPillar[];
  progress: StrapiProgress;
  banner: StrapiBanner;
  info: StrapiInfo;
}

export interface StrapiStrategicConsulting {
  id: number;
  documentId: string;
  hero_section: StrapiHero;
  title_subtile: StrapiTitleSubtitle;
  Pillar: StrapiPillar;
  swipe: StrapiSwipe;
  info: StrapiInfo;
  banner: StrapiBanner;
}

export interface StrapiTotalTalentSolution {
  id: number;
  documentId: string;
  hero_section: StrapiHero;
  progress: StrapiProgress;
  Pillar: StrapiPillar;
  info: StrapiInfo;
  banner: StrapiBanner;
}

export interface StrapiWorkspaceSolution {
  id: number;
  documentId: string;
  hero_section: StrapiHero;
  title_subtile: StrapiTitleSubtitle;
  Pillar: StrapiPillar;
  info: StrapiInfo;
  banner: StrapiBanner;
}

export interface StrapiDataAnalyticsCloudAI {
  id: number;
  documentId: string;
  hero_section: StrapiHero;
  progress: StrapiProgress;
  Strategic_Business_Outcomes: {
    id: number;
    title: string;
    card: Array<{ id: number; title: string; subtitle: string; image: any; button: any }>;
  };
  Result_section: StrapiTitleSubtitle;
  banner: StrapiBanner;
}

export interface StrapiDigitalInfraOp {
  id: number;
  documentId: string;
  hero_section: StrapiHero;
  progress: StrapiProgress;
  Strategic_Business_Outcomes: {
    id: number;
    title: string;
    card: Array<{ id: number; title: string; subtitle: string; image: any; button: any }>;
  };
  Result_section: StrapiTitleSubtitle;
  banner: StrapiBanner;
}

export interface StrapiBusinessInformation {
  id: number;
  documentId: string;
  hero_section: StrapiHero;
  Pillar: StrapiPillar;
  Guides: StrapiTitleSubtitle[];
  banner: StrapiBanner;
}

export interface StrapiPlatformProductEngineering {
  id: number;
  documentId: string;
  hero_section: StrapiHero;
  progress: StrapiProgress;
  Result_section: StrapiTitleSubtitle;
  number_growth: Array<{ id: number; number: string; text: string; description: string }>;
  banner: StrapiBanner;
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
