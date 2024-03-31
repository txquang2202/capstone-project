import { create } from 'domain';
import { IBlog, BlogModel } from '../models/Blog';
import { BlogTagModel } from '../models/Blog_Tag';

class BlogRepo {
  constructor() { }

  getAllBlogs() {
    console.log();

    return BlogModel.findAll();
  }

  getById(blogId) {
    return BlogModel.findByPk(blogId, {

    });
  }
  async getPaginatedBlogs(limit: number, offset: number) {
    // Thực hiện truy vấn SQL để lấy dữ liệu blog phân trang
    const blogs = await BlogModel.findAll({
      limit: limit,
      offset: offset
    });

    // Tính toán tổng số lượng blog
    const totalCount = await BlogModel.count();

    // Tính toán tổng số trang
    const totalPages = Math.ceil(totalCount / limit);

    return {

      totalItems: totalCount,
      totalPages: totalPages,
      blogs: blogs
    };
  }
  addBlog(blogData: IBlog) {
    const newBlog = BlogModel.create(blogData);
    return newBlog;

  }
  updateBlog(blogId, blogData: any) {
    // Tim blog theo id
    const blog = BlogModel.findByPk(blogId);
    if (!blog) {
      throw new Error(`Blog with id ${blogId} not found`);
    }
    // Cap nhat blog
    const updatedBlog = BlogModel.update({
      title: blogData.title,
      content: blogData.content,
      slug: blogData.slug,
      user_id: blogData.user_id,
      created_at: new Date(),

    }, {
      where: {
        id: blogId
      }
    });
    return updatedBlog;
  }
  deleteBlog(blogId) {
    // Tim blog theo id
    const blog = BlogModel.findByPk(blogId);
    if (!blog) {
      throw new Error(`Blog with id ${blogId} not found`);
    }
    // Xoa blog
    const deletedBlog = BlogModel.destroy({
      where: {
        id: blogId
      }
    });
    return deletedBlog;
  }
}
export default new BlogRepo();
