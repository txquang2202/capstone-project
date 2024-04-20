import sequelize = require('sequelize');
import { IBlogTag, BlogTag } from '../models/Blog_Tag';
import { Tag } from '../models/Tag';

class BlogTagRepo {
  constructor() { }

  async getAllBlogTags(blogId) {
    console.log();

    return await BlogTag.findAll({
      where: {
        blog_id: blogId
      },
      include: [{
        model: Tag,
        attributes: ['tag_name'],
        as: 'tag'
      }]
    }) as IBlogTag[];

  }

  getById(blogId) {
    return BlogTag.findByPk(blogId, {

    });
  }
  addBlogTags(blogTagsData: IBlogTag[]) {
    const newBlogTag = BlogTag.bulkCreate(blogTagsData);
    return newBlogTag;
  }
  async updateBlogTags(blogIdToUpdate: string, newTagIds: string[]) {
    // Start a transaction
    const transaction = await BlogTag.sequelize?.transaction();

    try {
      // Delete old associations
      await BlogTag.destroy({
        where: { blog_id: blogIdToUpdate },
        transaction: transaction
      });

      // Create new associations
      const newBlogTags = newTagIds.map(tagId => ({
        blog_id: blogIdToUpdate,
        tag_id: tagId
      }));
      await BlogTag.bulkCreate(newBlogTags, { transaction: transaction });

      // Commit the transaction
      await transaction?.commit();
    } catch (error) {
      // If there is an error, rollback the transaction
      await transaction?.rollback();
      throw error;
    }
  }
}
export default new BlogTagRepo();