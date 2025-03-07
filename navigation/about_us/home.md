---
layout: post
title: About Us
search_exclude: true
permalink: /melodymates/about_us
menu: nav/melodymates.html
---

<html lang="en">
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>About Us - MelodyMates</title>
   <!-- Google Font for Elegant Typography -->
   <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
   <style>
       /* Base Styles */
       body {
           background: linear-gradient(135deg, #ff6b6b, #f06595, #8e44ad); /* Gradient matching Melody Mates theme */
           color: #fff;
           font-family: 'Poppins', sans-serif;
           margin: 0;
           padding: 0;
           line-height: 1.6;
       }
       h1, h2 {
           color: #3f7cac; /* Pastel Blue */
           font-weight: 600;
           margin-bottom: 15px;
       }
       p {
           font-size: 1.1em;
           color: #000; /* Set paragraph text color to black */
           margin-bottom: 20px;
       }
       .container {
           max-width: 1000px;
           margin: 40px auto;
           padding: 20px;
           background-color: #ffffff; /* White Background for Content */
           border-radius: 10px;
           box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
       }
       .section {
           margin-bottom: 40px;
           padding: 20px;
           background-color: #ffd1dc; /* Pastel Pink Background for Sections */
           color: #333;
           border-radius: 10px;
       }
       .section h2 {
           color: #9c27b0; /* Pastel Purple for Sub-headers */
       }
       .button {
           background-color: #4caf50; /* Pastel Green Button */
           border: none;
           padding: 10px 20px;
           color: white;
           font-size: 1.1em;
           border-radius: 5px;
           cursor: pointer;
           transition: background 0.3s ease, transform 0.3s ease;
       }
       .button:hover {
           background-color: #388e3c; /* Darker Green on Hover */
           transform: scale(1.05);
       }
       .footer {
           text-align: center;
           padding: 20px;
           background-color: #4e4e4e; /* Dark Gray Footer */
           color: white;
           font-size: 0.9em;
       }
       /* Responsive Design */
       @media screen and (max-width: 768px) {
           .container {
               padding: 15px;
           }
           .button {
               width: 100%;
               padding: 12px;
               font-size: 1.2em;
           }
       }
   </style>
   <div class="container">
       <h1>About Us</h1>
       <div class="section">
           <h2>Our Vision</h2>
           <p>At MelodyMates, our vision is to create a community where music lovers can connect, share, and collaborate. We believe music is a universal language, and we strive to offer a space where individuals can discover new sounds, create personalized playlists, and have real-time discussions about their favorite music.</p>
       </div>

<img alt="musicnotes" src="/sprint4_frontend/images/musicnotes.jpg" width="300" height="200"> 
       <div style="display: flex; gap: 10px;">
       <div class="section">
           <h2>What We Do</h2>
           <p>MelodyMates is more than just a platform—it's a space for creativity and connection. From our live chatrooms where users can discuss music in real-time, to personalized artist recommendations, we help users discover and connect with music that resonates with them. Our platform is built using modern web technologies to ensure a seamless, engaging experience.</p>
           <p>Our goal is to provide an environment that encourages discovery, sharing, and connection. Whether you're looking to explore new genres, share your thoughts with like-minded individuals, or create the perfect playlist, MelodyMates has you covered.</p>
       </div>
       <div class="section">
           <h2>Join Us!</h2>
           <p>We are constantly growing and evolving, and we would love for you to be a part of our journey! If you have any questions or want to learn more about how you can get involved with MelodyMates, feel free to reach out.</p>
           <button class="button" onclick="window.location.href='/contact_us'">Contact Us</button>
       </div>
   </div>

<img alt="concert" src="/sprint4_frontend/images/concert.jpg" width="300" height="200"> </div>

   <div class="footer">
       <p>&copy; 2024 MelodyMates | All Rights Reserved</p>
   </div>
</html>


