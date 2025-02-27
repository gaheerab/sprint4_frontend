---
layout: post
title: Melody Mates Music Matching Site 
search_exclude: true
description: Login and start matching with those who have same music taste! 
hide: true
menu: nav/home.html
---

 <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ArtInfo CRUD</title>
  <style>
    /* Global Styles */
    body {
      background: linear-gradient(135deg, #ff6b6b, #f06595, #8e44ad); /* Cool Gradient */
      color: #fff;
      font-family: 'Arial', sans-serif;
      padding: 20px;
      margin: 0;
      overflow-x: hidden;
    }
    h1, h2 {
      text-align: center;
      color: #fff6f9;
    }
    input, button {
      padding: 10px;
      margin: 10px 0;
      border: 1px solid #f06595;
      border-radius: 4px;
    }
    button {
      background-color: #f06595;
      color: white;
      cursor: pointer;
    }
    button:hover {
      background-color: #8e44ad;
    }
    .survey-table {
      width: 100%;
      margin-top: 20px;
      border-collapse: collapse;
      color: #fff;
    }
    .survey-table th, .survey-table td {
      padding: 10px;
      border: 1px solid #f06595;
    }
    .modal {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.7);
      justify-content: center;
      align-items: center;
    }
    .modal-content {
      background-color: #2c3e50;
      padding: 20px;
      border-radius: 4px;
      width: 400px;
      color: #fff;
      position: relative;
    }
    .modal button {
      background-color: #f06595;
      color: white;
      padding: 10px;
      border-radius: 4px;
      cursor: pointer;
    }
    .modal button:hover {
      background-color: #8e44ad;
    }
    .close-button {
      color: #fff;
      font-size: 30px;
      position: absolute;
      top: 10px;
      right: 20px;
      cursor: pointer;
    }
  </style>
</head>