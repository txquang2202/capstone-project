import e = require("express");
import { TagResponse } from "./TagTypes";
import exp = require("constants");


export type AddBlogRequest = {
    slug: string;
    user_id: string;
    title: string;
    content: string;
};
export type BlogResponse = {
    id: string;
    slug: string;
    user_id: string;
    title: string;
    content: string;
    time_read: number;
    created_at: Date;
    tags: TagResponse[];
};
export type AddBlogResponse = {
    id: string;
};
export type BlogTagRequest = {
    tag_id: string;
    blog_id: string;
};
export type UpdateBlogRequest = {
    id: string;
    slug: string;
    title: string;
    content: string;
    created_at: Date;
};

export type BlogsResponse = {
    totalItems: number;
    totalPages: number;
    blogs: BlogResponse[];
};

export type BlogTagResponse = {
    tag_id: string;
    blog_id: string;
    tag_name: string;
};