export type Blog = {
  id: string;
  slug: string;
  user_id?: string | null;
  title: string;
  content: string;
  time_read: number | null;
  created_at: Date;
};

export type Tag = {
  id: string;
  tag_name: string;
};

export type BlogTag = {
  blog_id?: string | null;
  tag_id?: string | null;
  tag?: Tag;
};
