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
       /* Global Styles */
       body {
           background: linear-gradient(135deg, #ff6b6b, #f06595, #8e44ad); /* Cool Gradient */
           color: #fff;
           font-family: 'Arial', sans-serif;
           margin: 0;
           padding: 0;
           transition: all 0.3s ease;
           overflow-x: hidden;
       }
       /* Navbar Styling */
       .navbar {
           display: flex;
           justify-content: space-around;
           align-items: center;
           padding: 15px 30px;
           background-color: rgba(0, 0, 0, 0.7); /* Dark with transparency */
           position: sticky;
           top: 0;
           z-index: 100;
           transition: background-color 0.3s ease;
           box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
       }
       .navbar a {
           color: #fff;
           text-decoration: none;
           font-size: 1.2em;
           padding: 8px 16px;
           border-radius: 5px;
           position: relative;
           overflow: hidden;
       }
       .navbar a::after {
           content: '';
           position: absolute;
           background: #f06595;
           width: 100%;
           height: 3px;
           bottom: 0;
           left: -100%;
           transition: left 0.3s ease;
       }
       .navbar a:hover::after {
           left: 0;
       }
       /* Navbar hover effect */
       .navbar a:hover {
           background-color: rgba(255, 255, 255, 0.1);
           font-weight: bold;
       }
       /* Theme Toggle Button */
       .theme-toggle {
           background: none;
           border: 2px solid #f06595;
           color: #f06595;
           padding: 10px 20px;
           cursor: pointer;
           font-size: 1em;
           border-radius: 25px;
           transition: all 0.3s ease;
           box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
       }
       .theme-toggle:hover {
           background-color: #f06595;
           color: #fff;
           transform: scale(1.1);
       }
       /* Container Styling */
       .container {
           display: flex;
           flex-wrap: wrap;
           justify-content: center;
           gap: 20px;
           padding: 50px 20px;
           max-width: 1400px;
           margin: 0 auto;
           animation: fadeIn 1s ease-out;
       }
       /* Section Styling */
       .section {
           background: linear-gradient(135deg, #f06595, #8e44ad);
           border-radius: 20px;
           padding: 30px;
           width: 300px;
           text-align: center;
           box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
           transition: background 0.3s ease, transform 0.3s ease;
           transform: scale(0.98);
       }
       .section:hover {
           transform: scale(1.05);
       }
       .section h2 {
           color: #fff;
           font-size: 1.8em;
           margin-bottom: 20px;
           text-transform: uppercase;
           animation: pulse 1.5s infinite;
       }
       .section p {
           font-size: 1.1em;
           margin-bottom: 20px;
           color: #f1f1f1;
           font-style: italic;
       }
       /* Stylish Buttons */
       .section button {
           background: linear-gradient(145deg, #1abc9c, #16a085); /* Gradient from teal to green */
           border: none;
           padding: 15px 30px;
           font-size: 1.2em;
           color: white;
           cursor: pointer;
           border-radius: 25px;
           box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
           transition: background 0.3s ease, transform 0.3s ease;
       }
       .section button:hover {
           background-color: #f06595;
           transform: scale(1.1);
       }
       /* Animation for Fading In */
       @keyframes fadeIn {
           0% {
               opacity: 0;
               transform: translateY(30px);
           }
           100% {
               opacity: 1;
               transform: translateY(0);
           }
       }
       /* Animation for Pulsing Text */
       @keyframes pulse {
           0% {
               text-shadow: 0 0 5px #ff69b4, 0 0 10px #ff69b4;
           }
           50% {
               text-shadow: 0 0 20px #f06595, 0 0 40px #f06595;
           }
           100% {
               text-shadow: 0 0 5px #ff69b4, 0 0 10px #ff69b4;
           }
       }
       /* Light Mode Styles */
       body.light-mode {
           background-color: #f0f4f8;
           color: #2c3e50;
       }
       .navbar.light-mode {
           background-color: #f0f4f8;
       }
       .navbar.light-mode a {
           color: #2c3e50;
       }
       .section.light-mode {
           background: linear-gradient(135deg, #8e44ad, #f06595);
           color: #2c3e50;
       }
       .section h2.light-mode {
           color: #f06595;
       }
       .section button.light-mode {
           background: linear-gradient(145deg, #16a085, #1abc9c);
           color: white;
       }

   </style>

   <!-- Navigation Bar -->
   <div class="navbar">
       <a href="chat_room.html">Music Chatroom</a>
       <a href="artist-recommendation.html">Artist Recommendations</a>
       <a href="user-data.html">User Data</a>
       <a href="userprofile_setup.html">User Profile</a>
       <a href="profile_building.html">Build Music Profile</a>
       <a href="profile_matching.html">Matching</a>
   </div>

   <!-- Theme Toggle Button -->
   <div style="text-align: center; padding: 20px;">
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
