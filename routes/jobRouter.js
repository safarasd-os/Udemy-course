import { Router } from "express";
const router = Router();

import {
  getAllJobs,
  getJob,
  updateJob,
  deleteJob,
  createJob,
  showStats
} from "../controlers/jobControlelr.js";
import {
  validateJobInput,
  validateIdParam,
} from "../middleware/validationMiddleware.js";
import { checkForTestUser } from "../middleware/authMiddleware.js";

router.route("/").get(getAllJobs).post(checkForTestUser, validateJobInput, createJob);
router.route('/stats').get(showStats)
router
  .route("/:id")
  .delete(checkForTestUser, validateIdParam, deleteJob)
  .get(validateIdParam, getJob)
  .patch(checkForTestUser, validateJobInput, validateIdParam, updateJob);

export default router;
