import { create } from "domain";
import {Blog} from "../models/Blog";
import {BlogTag} from "../models/Blog_Tag";

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
    //Tim blog theo id
    const blog = Blog.findByPk(blogId);
    if (!blog) {
      throw new Error(`Blog with id ${blogId} not found`);
  }
  //Cap nhat blog
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
    //Tim blog theo id
    const blog = Blog.findByPk(blogId);
    if (!blog) {
        throw new Error(`Blog with id ${blogId} not found`);
    }
    //Xoa blog
    const deletedBlog = Blog.destroy({
        where: {
            id: blogId
        }
    });
    return deletedBlog;
  }
}
export default new BlogRepo();
