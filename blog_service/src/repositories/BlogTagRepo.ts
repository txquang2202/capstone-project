import {Blog} from "../models/Blog";
import {BlogTag} from "../models/Blog_Tag";
import { Tag } from "../models/Tag";

class BlogTagRepo {
  constructor() {}

  getAllBlogTags(blogId) {
    console.log();

    return BlogTag.findAll({
        where:{
            blog_id:blogId
        },
        include:[{
          model:Tag,
          attributes:['tag_name'],
          as:'tag'
        }]
    });
    
  }

  getById(blogId) {
    return BlogTag.findByPk(blogId, {
      
    });
  }
}
export default new BlogTagRepo();