import { create } from 'domain';
import { Blog } from '../models/Blog';
import { BlogTag } from '../models/Blog_Tag';

const { Sequelize } = require('sequelize');

const { QueryTypes } = require('sequelize');
const sequelize= new Sequelize(
  'capstone','postgres','localdb',{
    host: 'localhost',
    dialect: 'postgres'
  }
)
class BlogRepo {
  constructor() {}

  getAllBlogs() {
    console.log();

    return Blog.findAll();
  }

  getById(blogId) {
    return Blog.findByPk(blogId, {

    });
  }
  async getPaginatedBlogs(limit: number, offset: number) {
    // Thực hiện truy vấn SQL để lấy dữ liệu blog phân trang
    const blogs = await Blog.findAll({
        limit: limit,
        offset: offset
    });

    // Tính toán tổng số lượng blog
    const totalCount = await Blog.count();

    // Tính toán tổng số trang
    const totalPages = Math.ceil(totalCount / limit);

    return {

        totalItems: totalCount,
        totalPages: totalPages,
        blogs: blogs
    };
  }
  addBlog(blogData: any) {
    blogData.created_at = new Date();
    blogData.time_read = 0;
    const newBlog = Blog.create(blogData);
    return newBlog;

  }
  updateBlog(blogId, blogData: any) {
    // Tim blog theo id
    const blog = Blog.findByPk(blogId);
    if (!blog) {
      throw new Error(`Blog with id ${blogId} not found`);
  }
  // Cap nhat blog
  const updatedBlog = Blog.update({
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
    const blog = Blog.findByPk(blogId);
    if (!blog) {
        throw new Error(`Blog with id ${blogId} not found`);
    }
    // Xoa blog
    const deletedBlog = Blog.destroy({
        where: {
            id: blogId
        }
    });
    return deletedBlog;
  }
  // list all blog by tagName
  async getBlogByTagName(tagName: string) {
    const res = await sequelize.query('SELECT b.created_at, b."content", b.time_read, b.title, b.slug, b.id, b.user_id,t.tag_name FROM public.blog b join public.blog_tag bt on b.id =bt.blog_id join public.tag t on t.id =bt.tag_id where t.tag_name = ?',
    {
      replacements: [tagName ],
      type: QueryTypes.SELECT
    });
   
    
    return res;
  }

}
export default new BlogRepo();
