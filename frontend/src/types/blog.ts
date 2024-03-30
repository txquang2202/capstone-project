export type Blog = {
  id: string;
  slug: string;
  user_id: string;
  title: string;
  content: string;
  time_read: number | null;
  created_at: Date;
};
