const mongoose = require("mongoose");

const PdfSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    filePath: {
        type: String,
        required: true
    },
    uploadedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Pdf", PdfSchema);
