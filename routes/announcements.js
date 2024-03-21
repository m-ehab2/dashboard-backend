const express = require("express");
const announcementsRouter = express.Router();
const announcementController = require("../controllers/announcements");

// Create a new announcement
announcementsRouter.post("/", announcementController.createAnnouncement);

// Get all announcements
announcementsRouter.get("/", announcementController.getAllAnnouncements);

// Get a single announcement by ID
announcementsRouter.get("/:id", announcementController.getAnnouncementById);

// Update an announcement by ID
announcementsRouter.patch("/:id", announcementController.updateAnnouncement);

// Delete an announcement by ID
announcementsRouter.delete("/:id", announcementController.deleteAnnouncement);

module.exports = announcementsRouter;
