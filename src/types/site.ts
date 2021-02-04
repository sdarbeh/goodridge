/// --------------- METADATA
export interface Metadata {
  app_name: string;
  version: string;
}
export interface MetadataReturn extends Site {
  id: string;
  created_at: string;
  updated_at: string;
}

/// --------------- SITE
export interface Site {
  intro_slogan: string;
  job_title: string;
  job_description: string;
  recent_activities: string;
  recent_languages: string[];
  work_status: string;
}
export interface SiteReturn extends Site {
  created_at: string;
  updated_at: string;
}

/// --------------- MESSAGE
export interface Project {
  name: string;
  title: string;
  description: string;
  languages: string[];
  is_featured: boolean;
}
export interface ProjectReturn extends Project {
  id: string;
  github?: string;
  website?: string;
  images: string[];
  likes: number;
  github_clicks: number;
  page_clicks: number;
  website_clicks: number;
  created_at: string;
  updated_at: string;
}

/// --------------- MESSAGE
export interface Message {
  name: string;
  email: string;
  phone: string;
  message: string;
}
export interface MessageReturn extends Message {
  id: string;
  responded: boolean;
  status_visits: number;
  created_at: string;
  updated_at: string;
}

/// --------------- SOCIAL
export interface Social {
  name: string;
  website: string;
  image_url: string;
}
export interface SocialReturn extends Social {
  id: string;
  created_at: string;
  updated_at: string;
}