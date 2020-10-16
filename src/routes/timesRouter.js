const express = require("express");
const TimesController = require("../controllers/TimesController");

const timesRouter = express.Router();

timesRouter.get("/", TimesController.index);
timesRouter.get("/:id", TimesController.show);
timesRouter.post("/", TimesController.store);
timesRouter.delete("/:id", TimesController.destroy);
timesRouter.put("/:id",TimesController.update);

module.exports = timesRouter;