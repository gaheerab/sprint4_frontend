---
layout: post 
title: Melody Mates
search_exclude: true
permalink: /melodymates/home
menu: nav/melodymates.html
---



<html lang="en">
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
   <style>
       /* Default Theme (Dark Blue, Light Blue, Dark Green) */
       {
           background-color: #e3f2fd; /* Light Blue */
           color: #006400; /* Dark Green */
           font-family: Arial, sans-serif;
           margin: 0;
           padding: 0;
           transition: all 0.3s ease;
       }

       .navbar {
           display: flex;
           justify-content: space-around;
           align-items: center;
           padding: 10px 20px;
           background-color: #00008B; /* Dark Blue */
           position: sticky;
           top: 0;
           z-index: 10;
           transition: background-color 0.3s ease;
       }

       .navbar a {
           color: #fff;
           text-decoration: none;
           font-size: 1.1em;
           padding: 8px 16px;
           transition: color 0.3s ease, border-bottom 0.3s ease;
           border-bottom: 2px solid transparent;
       }

       .navbar a:hover {
           color: #b2ebf2; /* Light Blue */
           border-bottom: 2px solid #004d00; /* Dark Green */
           font-weight: bold;
       }

       /* Theme Toggle Button */
       .theme-toggle {
           background: none;
           border: 2px solid #00008B; /* Dark Blue */
           color: #00008B;
           padding: 10px 20px;
           cursor: pointer;
           font-size: 1em;
           border-radius: 5px;
           transition: all 0.3s ease;
       }

       .theme-toggle:hover {
           background-color: #004d00;
           color: #fff;
       }

       /* Main container for music page */
       .container {
           display: flex;
           flex-wrap: wrap;
           justify-content: space-around;
           gap: 20px;
           padding: 30px;
           max-width: 1200px;
           margin: 0 auto;
       }

       /* Sections for each feature */
       .section {
           background-color: #00008B; /* Dark Blue */
           border-radius: 10px;
           padding: 20px;
           width: 300px;
           text-align: center;
           box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
           transition: background-color 0.3s ease, color 0.3s ease;
       }

       .section h2 {
           color: #b2ebf2; /* Light Blue */
           font-size: 1.5em;
           margin-bottom: 15px;
       }

       .section p {
           font-size: 0.9em;
           color: #f1f1f1; /* Light Text */
           margin-bottom: 20px;
       }

       /* Stylish Buttons */
       .section button {
           background: linear-gradient(145deg, #0288d1, #81d4fa); /* Gradient from Blue to Light Blue */
           border: none;
           padding: 10px 20px;
           font-size: 1em;
           color: white;
           cursor: pointer;
           border-radius: 5px;
           transition: background 0.3s ease, transform 0.3s ease;
       }

       .section button:hover {
           background-color: #00008B; /* Dark Blue */
           transform: scale(1.05);
       }

       /* Light Theme (for toggle functionality) */
       body.light-mode {
           background-color: #2c6e49; /* Sage Green */
           color: #004d00; /* Dark Green */
       }

       .navbar.light-mode {
           background-color: #2c6e49; /*  Sage Green */
       }

       .navbar.light-mode a {
           color: #004d00;
       }

       .section.light-mode {
           background-color: #2c6e49; /* Sage Green */
           color: #004d00; /* Dark Green */
       }

       .section h2.light-mode {
           color: #00008B; /* Dark Blue */
       }

       .section button.light-mode {
           background: linear-gradient(145deg, #81c784, #0288d1); /* Gradient from Light Sage Green to Blue */
           color: white;
       }

   </style>
   <!-- Navigation Bar -->
   <div class="navbar">
       <a href="chat_room.html">Music Chatroom</a>
       <a href="artist-recommendation.html">Artist Recommendations</a>
       <a href="user-data.html">User Data</a>
       <a href="song-voting.html">Song of the Day Voting</a>
       <a href="reviews.html">Music Reviews</a>
       <a href="userprofile_setup.html">User Profile</a>
       <a href="profile_building.html">Build Music Profile</a>
       <a href="profile_matching.html">Matching</a>
   </div>

   <!-- Theme Toggle Button -->
   <div style="text-align: center; padding: 10px;">
       <button class="theme-toggle" onclick="toggleTheme()">Toggle Theme</button>
   </div>

   <!-- Music Page Content -->
   <div class="container">
      <!-- User Profile Setup -->
       <div class="section" id="user_profile">
           <h2>User Profile</h2>
           <p>Create your own personalized public profile for your matches to view!</p>
           <button onclick="window.location.href='userprofile_setup.html'">Update Your Public Profile</button>
       </div>
       <!-- Music Chatroom Section -->
       <div class="section" id="chat_room">
           <h2>Music Chatroom</h2>
           <p>Chat about your favorite genres, songs, and albums in real-time!</p>
           <button onclick="window.location.href='chat_room.html'">Enter Chat Room</button>
       </div>
       <!-- Artist Recommendation Section -->
       <div class="section" id="artist-recommendation">
           <h2>Artist Recommendation</h2>
           <p>Get personalized music recommendations based on your favorite artists.</p>
           <button onclick="window.location.href='artist-recommendation.html'">Discover Artists</button>
       </div>
       <!-- User-Curated Playlists Section -->
       <div class="section" id="user-playlists">
           <h2>User-Curated Playlists</h2>
           <p>Create, share, and explore playlists curated by students like you.</p>
           <button onclick="window.location.href='user-playlists.html'">View Playlists</button>
       </div>
       <!-- Song of the Day Voting Section -->
       <div class="section" id="song-voting">
           <h2>Song of the Day Voting</h2>
           <p>Vote for your favorite songs and help select the daily top pick.</p>
           <button onclick="window.location.href='song-voting.html'">Vote Now</button>
       </div>
       <!-- Music Reviews Section -->
       <div class="section" id="reviews">
           <h2>Music Reviews</h2>
           <p>Read and share reviews of albums, songs, and artists.</p>
           <button onclick="window.location.href='reviews.html'">Explore Reviews</button>
       </div>
       <!-- Music Profile Section -->
       <div class="section" id="Music Profile Building">
           <h2>Build Your Music Profile!</h2>
           <p>Create your custom music profile for others to view!</p>
           <button onclick="window.location.href='profile_building.html'">Create Your Music Profile</button>
        </div>
        <!-- Profile Matching Section -->
       <div class="section" id="Profile Matching">
           <h2>Match With Other Users!</h2>
           <p>Match with others based on your music preferences!</p>
           <button onclick="window.location.href='profile_matching.html'">Discover Artists</button>
       </div>
   </div>

   <script>
       function toggleTheme() {
           document.body.classList.toggle('light-mode');
           document.querySelectorAll('.section').forEach(function(section) {
               section.classList.toggle('light-mode');
           });
           document.querySelectorAll('.navbar').forEach(function(navbar) {
               navbar.classList.toggle('light-mode');
           });
       }
   </script>
</html>
