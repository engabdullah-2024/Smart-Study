const express = require  ("express");
const multer = require("multer");
const path = require ("path");
const fs = require ("fs");
const Pdf = require ("../model/PdfModel");

const router = express.Router();

// Set up storage for multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = "uploads/";
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

// Get all PDFs
router.get("/", async (req, res) => {
    try {
        const pdfs = await Pdf.find();
        res.json(pdfs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Upload a new PDF
router.post("/", upload.single("pdf"), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: "Please upload a PDF file." });
    }

    try {
        const newPdf = new Pdf({
            title: req.body.title,
            filePath: req.file.path
        });

        await newPdf.save();
        res.status(201).json(newPdf);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Serve PDF files
router.get("/download/:id", async (req, res) => {
    try {
        const pdf = await Pdf.findById(req.params.id);
        if (!pdf) {
            return res.status(404).json({ message: "PDF not found." });
        }
        res.download(pdf.filePath);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Delete a PDF
router.delete("/:id", async (req, res) => {
    try {
        const pdf = await Pdf.findById(req.params.id);
        if (!pdf) {
            return res.status(404).json({ message: "PDF not found." });
        }

        // Delete the file from the local storage
        fs.unlinkSync(pdf.filePath);

        await pdf.deleteOne();
        res.json({ message: "PDF deleted successfully." });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
