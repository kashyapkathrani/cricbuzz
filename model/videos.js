const mongoose = require("mongoose");

const videosSchema = new mongoose.Schema({
    thumbnailUrl: { type: String, required: true },
    title: { type: String, required: true },
    videoUrl: { type: String, required: true },
    id: { type: Number, required: true },
    cbPlus: { type: Boolean, required: true },
    featured: { type: Boolean, required: true },
    timestamp: { type: Date }
});

const videosModel = mongoose.model("Videos", videosSchema);

module.exports = videosModel