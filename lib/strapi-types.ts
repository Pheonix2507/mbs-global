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
