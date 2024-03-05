import { Company } from "../models/Company";

const companies: object[] = require("../db/company.json");

class CompanyRepo {
  constructor() {}

  getAllCompanies() {
    return companies;
    // return Company.findAll();
  }

  getById(courseId) {
    return Company.findByPk(courseId, {
      include: [
        {
          model: Company,
          as: "companies",
        },
      ],
    });
  }
}

export default new CompanyRepo();
