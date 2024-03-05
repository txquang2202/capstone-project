import { Router } from "express";
import CompanyCtrl from "../controllers/CompanyCtrl";

class CompanyRouters {
  router = Router();
  coursesCtrl = new CompanyCtrl();

  constructor() {
    this.intializeRoutes();
  }
  intializeRoutes() {
    this.router.route("/").get(this.coursesCtrl.getAllCompanies);
    this.router.route("/:id").get(this.coursesCtrl.getCompanyDetails);
  }
}
export default new CompanyRouters().router;
