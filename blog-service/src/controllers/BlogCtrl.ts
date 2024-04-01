import { Request, Response, NextFunction } from 'express';
import BlogRepo from './../repositories/BlogRepo';
import BlogTagRepo from './../repositories/BlogTagRepo';

import { apiErrorHandler } from './../handlers/errorHandler';
import { AddBlogRequest, BlogTagRequest, AddBlogResponse, UpdateBlogRequest, BlogResponse } from './types/BlogTypes';
import { IBlogTag } from '../models/Blog_Tag';
import { StatusCodes } from 'http-status-codes';
export default class BlogCtrl {
    constructor() { }
    async getAllBlogs(req: Request, res: Response, next: NextFunction) {
        try {
            const blogList = await BlogRepo.getAllBlogs();
            res.json(blogList);
        } catch (error) {
            apiErrorHandler(error, StatusCodes.INTERNAL_SERVER_ERROR, req, res, `Fetch All Blogs failed: ${(error as Error).message}`);
        }
    }
    async getBlogDetails(req: Request, res: Response, next: NextFunction) {
        try {
            const blogDetails = await BlogRepo.getById(req.params.id);
            if (blogDetails) {
                return res.json(blogDetails);
            } else {
                res.status(StatusCodes.NOT_FOUND).send(`Blog ${req.params.id} not found.`);
            }
        } catch (error) {
            apiErrorHandler(error, StatusCodes.INTERNAL_SERVER_ERROR, req, res, `Blog ${req.params.id} is failed.: ${(error as Error).message}`);
        }
    }
    async getAllBlogPages(req: Request, res: Response, next: NextFunction) {
        console.log(req.params);
        try {
            // Trang hiện tại (mặc định là trang 1)
            const currentPage: number = req.params.page ? parseInt(req.params.page as string) : 1;

            // Số lượng blog trên mỗi trang (mặc định là 10)
            const blogsPerPage: number = req.query.limit ? parseInt(req.query.limit as string) : 1;

            // Tính toán offset cho truy vấn
            const offset = (currentPage - 1) * blogsPerPage;

            // Lấy dữ liệu blog phân trang từ BlogRepo
            const blogList = await BlogRepo.getPaginatedBlogs(blogsPerPage, offset);

            // Trả về kết quả phân trang
            res.json(blogList);
        } catch (error) {
            apiErrorHandler(error, StatusCodes.INTERNAL_SERVER_ERROR, req, res, `Fetch All BlogPages failed: ${(error as Error).message}`);
        }
    }
    async addBlog(req: Request, res: Response, next: NextFunction) {
        try {
            const addBlogReq: AddBlogRequest = {
                slug: req.body.slug,
                title: req.body.title,
                content: req.body.content,
                user_id: req.body.user_id
            };
            const newBlog = await BlogRepo.addBlog({
                content: addBlogReq.content,
                slug: addBlogReq.slug,
                title: addBlogReq.title,
                time_read: 0,
                user_id: addBlogReq.user_id,
                created_at: new Date(),
            });
            const tagsReq = req.body.tags;
            const blogTagsReq = (): BlogTagRequest[] => {
                if (tagsReq) {
                    return tagsReq.map((tag: { id: string; }) => {
                        return { blog_id: newBlog.id, tag_id: tag.id };
                    });
                }
                return [];
            }
            const blogTagData = blogTagsReq().map((blogTagReq) => ({
                blog_id: blogTagReq.blog_id, tag_id: blogTagReq.tag_id
            })) as IBlogTag[];
            const newBlogTag = await BlogTagRepo.addBlogTags(blogTagData);

            const resp: AddBlogResponse = {
                id: newBlog.id,
                // content: newBlog.content,
                // slug: newBlog.slug,
                // title: newBlog.title,
                // time_read: newBlog.time_read,
                // user_id: newBlog.user_id,
                // created_at: newBlog.created_at,
                // tags: newBlogTagResponse.map((blogTag) => ({ tag_name: blogTag.tag?.tag_name || '', id: blogTag.tag_id })),
            };
            res.status(StatusCodes.OK).json(resp);
        } catch (error) {
            console.log(error);
            if ((error as Error).name === 'SequelizeUniqueConstraintError') {
                return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Slug is already existed' });
            }
            apiErrorHandler(error, StatusCodes.INTERNAL_SERVER_ERROR, req, res, `Add Blog or BlogTag failed: ${(error as Error).message}`);
        }
    }
    async updateBlog(req: Request, res: Response, next: NextFunction) {
        console.log(req.params);
        try {
            const updateBlogReq: UpdateBlogRequest = {
                id: req.params.id,
                slug: req.body.slug,
                title: req.body.title,
                content: req.body.content,
                created_at: req.body.created_at,
            };
            const blog = await BlogRepo.getById(updateBlogReq.id);
            if (!blog) {
                return apiErrorHandler(new Error('Blog not found'), StatusCodes.NOT_FOUND, req, res, `Update Blog failed: Blog ${updateBlogReq.id} not found`);
            }
            const updatedBlogs = await BlogRepo.updateBlog(updateBlogReq.id, updateBlogReq);
            const tagsReq = req.body.tags;
            const updateBlogTagsReq: string[] = tagsReq.map((tag: { id: string; }) => tag.id);
            await BlogTagRepo.updateBlogTags(updateBlogReq.id, updateBlogTagsReq);
            const updatedBlogTags = await BlogTagRepo.getAllBlogTags(updateBlogReq.id);
            const updateBlogResp: BlogResponse = {
                id: updateBlogReq.id,
                content: updateBlogReq.content,
                slug: updateBlogReq.slug,
                title: updateBlogReq.title,
                time_read: blog.time_read,
                user_id: blog.user_id,
                created_at: blog.created_at,
                tags: updatedBlogTags.map((blogTag) => ({ tag_name: blogTag.tag?.tag_name || '', id: blogTag.tag_id })),
            };
            res.status(StatusCodes.OK).json(updateBlogResp);
        } catch (error) {
            apiErrorHandler(error, StatusCodes.INTERNAL_SERVER_ERROR, req, res, `Update Blog failed: ${(error as Error).message}`);
        }
    }
    async deleteBlog(req: Request, res: Response, next: NextFunction) {
        try {
            await BlogRepo.deleteBlog(req.params.id);
            res.status(StatusCodes.OK).json('Delete Blog successfully');
        } catch (error) {
            apiErrorHandler(error, StatusCodes.INTERNAL_SERVER_ERROR, req, res, `Delete Blog failed: ${(error as Error).message}`);
        }
    }
}