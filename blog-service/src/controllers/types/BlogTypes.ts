import e = require("express");

export type AddBlogRequest = {
    slug: string;
    user_id: string;
    title: string;
    content: string;
};
export type AddBlogResponse = {
    id: string;
    slug: string;
    user_id: string;
    title: string;
    content: string;
    time_read: number;
    created_at: Date;
    tag_ids: string[];
};
export type AddBlogTagRequest = {
    tag_id: string;
    blog_id: string;
};