import { IBlogTag, BlogTagModel } from '../models/Blog_Tag';
import { Tag } from '../models/Tag';

class BlogTagRepo {
  constructor() { }

  getAllBlogTags(blogId) {
    console.log();

    return BlogTagModel.findAll({
      where: {
        blog_id: blogId
      },
      include: [{
        model: Tag,
        attributes: ['tag_name'],
        as: 'tag'
      }]
    });

  }

  getById(blogId) {
    return BlogTagModel.findByPk(blogId, {

    });
  }
  addBlogTags(blogTagsData: IBlogTag[]) {
    const newBlogTag = BlogTagModel.bulkCreate(blogTagsData);
    return newBlogTag;
  }
}
export default new BlogTagRepo();