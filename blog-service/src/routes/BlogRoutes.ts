import { Router } from 'express';
import BlogCtrl from '../controllers/BlogCtrl';
class BlogRoutes {
    router = Router();
    blogCtrl = new BlogCtrl();
    constructor() {
        this.intializeRoutes();
    }
    intializeRoutes() {
        this.router.route('/all').get(this.blogCtrl.getAllBlogs);
        this.router.route('/:id').get(this.blogCtrl.getBlogDetails);
        this.router.route('/').get(this.blogCtrl.getAllBlogPages);
        this.router.route('/').post(this.blogCtrl.addBlog);
        this.router.route('/:id').put(this.blogCtrl.updateBlog);
        this.router.route('/:id').delete(this.blogCtrl.deleteBlog);
        this.router.route('/tag/:tagName').get(this.blogCtrl.getBlogByTagName);
    }
}
export default new BlogRoutes().router;