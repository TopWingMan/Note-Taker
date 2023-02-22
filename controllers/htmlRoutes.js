const fs = require('fs');
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
    // Log that a POST request was received
    console.info(`${req.method} request received to add a review`);

    // Destructuring assignment for the items in req.body
    const { title, text} = req.body;

    // If all the required properties are present
    if (title && text) {
    // Variable for the object we will save
    const newNote = {
      title,
      text,
    };

    // Obtain existing notes
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
        } else {
          // Convert string into JSON object
          const parsedNotes = JSON.parse(data);
  
          // Add a new note
          parsedNotes.push(newNote);
  
          // Write updated notes back to the file
          fs.writeFile(
            './db/db.json',
            JSON.stringify(parsedNotes, null, 4),
            (writeErr) =>
              writeErr
                ? console.error(writeErr)
                : console.info('Successfully updated reviews!')
          );
        }
    })}
})


module.exports = router;