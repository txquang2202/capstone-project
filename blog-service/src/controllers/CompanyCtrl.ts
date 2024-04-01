import { Request, Response, NextFunction } from 'express';
import CompanyRepo from './../repositories/CompanyRepo';
import { apiErrorHandler } from './../handlers/errorHandler';
import { StatusCodes } from 'http-status-codes';
export default class CompanyCtrl {
  constructor() { }

  async getAllCompanies(req: Request, res: Response, next: NextFunction) {
    try {
      const company_list = await CompanyRepo.getAllCompanies();
      res.json(company_list);
    } catch (error) {
      apiErrorHandler(error, StatusCodes.INTERNAL_SERVER_ERROR, req, res, 'Fetch All Courses failed.');
    }
  }

  async getCompanyDetails(req: Request, res: Response, next: NextFunction) {
    try {
      const courseDetails = await CompanyRepo.getById(req.params.id);
      if (courseDetails) {
        return res.json(courseDetails);
      } else {
        res.status(404).send(`Company ${req.params.id} not found.`);
      }
    } catch (error) {
      apiErrorHandler(error, StatusCodes.INTERNAL_SERVER_ERROR, req, res, `Course ${req.params.id} is failed.`);
    }
  }
}
