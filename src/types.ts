export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  title: string;
  description: string;
  icon: string;
}

export interface PlanFeature {
  name: string;
  included: boolean | string;
}

export interface MarketingPlan {
  name: string;
  subtitle: string;
  isPopular: boolean;
  features: PlanFeature[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  content: string[];
}
