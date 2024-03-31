import { Request, Response, NextFunction } from 'express';
import BlogRepo from './../repositories/BlogRepo';
import BlogTagRepo from './../repositories/BlogTagRepo';

import { apiErrorHandler } from './../handlers/errorHandler';
import { AddBlogRequest, AddBlogResponse, AddBlogTagRequest } from './types/BlogTypes';

export default class BlogCtrl {
    constructor() { }
    async getAllBlogs(req: Request, res: Response, next: NextFunction) {


        try {
            const blogList = await BlogRepo.getAllBlogs();
            res.json(blogList);


        } catch (error) {
            apiErrorHandler(error, req, res, `Fetch All Blogs failed: ${(error as Error).message}`);
        }
    }
    async getBlogDetails(req: Request, res: Response, next: NextFunction) {
        try {
            const blogDetails = await BlogRepo.getById(req.params.id);
            if (blogDetails) {
                return res.json(blogDetails);
            } else {
                res.status(404).send(`Blog ${req.params.id} not found.`);
            }
        } catch (error) {
            apiErrorHandler(error, req, res, `Blog ${req.params.id} is failed.: ${(error as Error).message}`);
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
            apiErrorHandler(error, req, res, `Fetch All BlogPages failed: ${(error as Error).message}`);
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
            const blogTagsReq = (): AddBlogTagRequest[] => {
                if (req.body.tag_ids) {
                    return req.body.tag_ids.map((tag_id: string) => {
                        return { blog_id: newBlog.id, tag_id: tag_id };
                    });
                }
                return [];
            }
            // Add tags to blog
            const newBlogTag = BlogTagRepo.addBlogTags([...blogTagsReq().map((blogTag) => {
                return { blog_id: blogTag.blog_id, tag_id: blogTag.tag_id };
            })]);
            const resp: AddBlogResponse = {
                id: newBlog.id,
                content: newBlog.content,
                slug: newBlog.slug,
                title: newBlog.title,
                time_read: newBlog.time_read,
                user_id: newBlog.user_id,
                created_at: newBlog.created_at,
                tag_ids: blogTagsReq().map((blogTag) => blogTag.tag_id),
            };
            res.status(200).json(resp);
        } catch (error) {
            console.log(error);
            apiErrorHandler(error, req, res, `Add Blog or BlogTag failed: ${(error as Error).message}`);
        }
    }
    async updateBlog(req: Request, res: Response, next: NextFunction) {
        console.log(req.params);
        try {
            const updatedBlog = await BlogRepo.updateBlog(req.params.id, req.body);
            res.json(updatedBlog);
        } catch (error) {
            apiErrorHandler(error, req, res, `Update Blog failed: ${(error as Error).message}`);
        }
    }
    async deleteBlog(req: Request, res: Response, next: NextFunction) {
        try {
            await BlogRepo.deleteBlog(req.params.id);
            res.status(204).send();
        } catch (error) {
            apiErrorHandler(error, req, res, `Delete Blog failed: ${(error as Error).message}`);
        }
    }
}