import { Router } from 'express';
import BlogTagCtrl from '../controllers/BlogTagCtrl';
class BlogTagRoutes {
    router = Router();
    blogTagCtrl = new BlogTagCtrl();
    constructor() {
        this.intializeRoutes();
    }
    intializeRoutes() {
        this.router.route('/:id').get(this.blogTagCtrl.getAllBlogTags);
        // this.router.route("/:id").get(this.blogTagCtrl.getBlogDetails);
    }
}
export default new BlogTagRoutes().router;