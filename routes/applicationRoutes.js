import express from "express";
import {createApplication, getApplication,updateApplicationStatus,getApplicationsOfAjob} from "../controllers/ApplicationController.js";

const router = express.Router();

router.post("/create",createApplication);

router.get("/get/:id",getApplication)

router.get("/get-applications/:jobid",getApplicationsOfAjob)

router.put("/status/:id",updateApplicationStatus)

export default router;