import { Request, Response, NextFunction } from 'express';
import TagRepo from './../repositories/TagRepo';
import { apiErrorHandler } from './../handlers/errorHandler';

export default class TagCtrl {
    constructor() { }
    async getAllTags(req: Request, res: Response, next: NextFunction) {

        console.log(req.params.id);
        try {
            const blogTagList = await TagRepo.getAllTags();
            res.json(blogTagList);
        } catch (error) {
            apiErrorHandler(error, req, res, `Fetch All BlogTags failed: ${(error as Error).message}`);
        }
    }
    async getTagByID(req: Request, res: Response, next: NextFunction) {
        try {
            const blogTagDetails = await TagRepo.getTagById(req.params.id);
            if (blogTagDetails) {
                return res.json(blogTagDetails);
            } else {
                res.status(404).send(`Tag ${req.params.id} not found.`);
            }
        } catch (error) {
            apiErrorHandler(error, req, res, `Tag ${req.params.id} is failed.: ${(error as Error).message}`);
        }
    }
}