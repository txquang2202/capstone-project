import { Application } from 'express';
import courseRouter from './CourseRoutes';
import lessonRouter from './LessonRoutes';
import companyRouter from './CompanyRoutes';
import blogRouter from './BlogRoutes';
import blogTagRouter from './BlogTagRoutes';
import tagRouter from './TagRoutes';

export default class Routes {
  constructor(app: Application) {
    // course reoutes
    app.use('/api/courses', courseRouter);
    // lesson routes
    app.use('/api/lessons', lessonRouter);
    // company routes
    app.use('/api/companies', companyRouter);
    // blog routes
    app.use('/api/blogs', blogRouter);
    // blogTag routes
    app.use('/api/blogTag', blogTagRouter);
    // tag routes
    app.use('/api/tags', tagRouter);

  }
}
