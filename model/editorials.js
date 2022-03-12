const mongoose = require("mongoose");

const editorialSchema = new mongoose.Schema({
    thumbnailUrl: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    id: { type: Number, required: true },
    content: { type: String, required: true },
    cbPlus: { type: Boolean, required: true },
    featured: { type: Boolean, required: true },
    authorId: { type: Number },
    timestamp: { type: Date }
});

const editorialsModel = mongoose.model("Editorials", editorialSchema);

module.exports = editorialsModel