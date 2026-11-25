export interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  source: "Google" | "WhatsApp";
  service?: string;
  avatar?: string;
}
