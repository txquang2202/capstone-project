import { Application } from "express";
import courseRouter from "./CourseRoutes";
import lessonRouter from "./LessonRoutes";
import companyRouter from "./CompanyRoutes";

export default class Routes {
  constructor(app: Application) {
    // course reoutes
    app.use("/api/courses", courseRouter);
    // lesson routes
    app.use("/api/lessons", lessonRouter);
    // company routes
    app.use("/api/companies", companyRouter);
  }
}
