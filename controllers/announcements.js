const Announcement = require("../models/Announcemnt");

// Controller function to create a new announcement
exports.createAnnouncement = async (req, res) => {
  try {
    const { name, subject, img, text } = req.body;
    const newAnnouncement = await Announcement.create({
      name,
      subject,
      img,
      text,
    });
    res.status(201).json(newAnnouncement);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controller function to get all announcements
exports.getAllAnnouncements = async (req, res) => {
  try {
    const announcements = await Announcement.find();
    res.status(200).json(announcements);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controller function to get a single announcement by ID
exports.getAnnouncementById = async (req, res) => {
  try {
    const announcement = await Announcement.findById(req.params.id);
    if (!announcement) {
      return res.status(404).json({ error: "Announcement not found" });
    }
    res.status(200).json(announcement);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controller function to update an announcement by ID
exports.updateAnnouncement = async (req, res) => {
  try {
    const { name, subject, img, text } = req.body;
    const updatedAnnouncement = await Announcement.findByIdAndUpdate(
      req.params.id,
      { name, subject, img, text },
      { new: true }
    );
    if (!updatedAnnouncement) {
      return res.status(404).json({ error: "Announcement not found" });
    }
    res.status(200).json(updatedAnnouncement);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controller function to delete an announcement by ID
exports.deleteAnnouncement = async (req, res) => {
  try {
    const deletedAnnouncement = await Announcement.findByIdAndDelete(
      req.params.id
    );
    if (!deletedAnnouncement) {
      return res.status(404).json({ error: "Announcement not found" });
    }
    res.status(200).json({ message: "Announcement deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
