const express = require('express');
const multer = require('multer');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const app = express();
const db = new sqlite3.Database('./db/profiles.db');

// Middleware for handling form data and file uploads
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Set up multer for handling file uploads
const upload = multer({ dest: 'uploads/' });

// Profile setup API endpoint
app.post('/submit_profile', upload.single('profile_picture'), (req, res) => {
    const { name, bio, artists, no_picture } = req.body;
    const profilePicture = req.file ? req.file.path : null;
    
    // If no picture is selected, use a default one
    const finalProfilePicture = no_picture ? '/uploads/default-placeholder.png' : profilePicture;

    const favoriteArtists = artists.split(',').map(artist => artist.trim()).join(', ');

    const sql = `INSERT INTO user_profiles (name, bio, favorite_artists, profile_picture)
                 VALUES (?, ?, ?, ?)`;

    db.run(sql, [name, bio, favoriteArtists, finalProfilePicture], function (err) {
        if (err) {
            console.error('Error inserting data:', err.message);
            return res.status(500).send('Database error occurred.');
        }
        res.status(200).send('Profile created successfully!');
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
