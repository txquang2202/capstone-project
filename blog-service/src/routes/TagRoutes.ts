import { Router } from 'express';
import TagCtrl from '../controllers/TagCtrl';
class BlogTagRoutes {
    router = Router();
    tagCtrl = new TagCtrl();
    constructor() {
        this.intializeRoutes();
    }
    intializeRoutes() {
        this.router.route('/').get(this.tagCtrl.getAllTags);
        this.router.route("/:id").get(this.tagCtrl.getTagByID);
    }
}
export default new BlogTagRoutes().router;