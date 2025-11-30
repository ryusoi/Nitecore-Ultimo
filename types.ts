
export type Language = 'en' | 'fa' | 'zh' | 'es';

export interface Translation {
  [key: string]: string;
}

export interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string; 
  brand: 'Nitecore' | 'Wuben' | 'Olight' | 'Victorinox' | 'SharperImage' | 'Other';
  price: number; // Stored in USD, converted to Rials in UI
  category: 'flashlight' | 'knife' | 'tactical' | 'accessory' | 'tech' | 'bag' | 'power';
  description: Record<Language, string>;
  specs: Record<string, string | number>;
  images: string[];
  videoUrl?: string;
  features: Record<Language, string[]>;
  stock: number;
  reviews?: Review[];
}

export interface WatchdogLog {
  timestamp: number;
  level: 'info' | 'warn' | 'error';
  message: string;
  code?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
  // Use any[] for flexibility with raw Gemini GroundingChunk data structure
  sources?: any[];
}