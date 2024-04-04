import { Tag } from '../models/Tag';

class BlogTagRepo {
    constructor() { }

    getAllTags() {
        return Tag.findAll();
    }

    getTagById(tagId) {
        return Tag.findByPk(tagId, {

        });
    }
}
export default new BlogTagRepo();