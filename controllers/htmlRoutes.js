const express = require("express");
const router = express.Router();
const path = require("path")

router.get("/", async (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

router.get("/notes", async (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
})

router.get("/api/notes", async (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'));
})

router.post("/api/notes", async (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'));
})


module.exports = router;