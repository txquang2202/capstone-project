import { Request, Response, NextFunction } from "express";
import BlogTagRepo from "./../repositories/BlogTagRepo";
import { apiErrorHandler } from "./../handlers/errorHandler";

export default class BlogTagCtrl {
    constructor() {}
    async getAllBlogTags(req: Request, res: Response, next: NextFunction) {
        
        console.log(req.params.id);
        try {
            const blogTagList = await BlogTagRepo.getAllBlogTags(req.params.id);
            res.json(blogTagList);


        } catch (error) {
            apiErrorHandler(error, req, res, `Fetch All BlogTags failed: ${(error as Error).message}`);
        }
    }
    async getBlogDetails(req: Request, res: Response, next: NextFunction) {
        try {
            const blogTagDetails = await BlogTagRepo.getById(req.params.id);
            if (blogTagDetails) {
                return res.json(blogTagDetails);
            } else {
                res.status(404).send(`Blog ${req.params.id} not found.`);
            }
        } catch (error) {
            apiErrorHandler(error, req, res, `Blog ${req.params.id} is failed.: ${(error as Error).message}`);
        }
    }
}