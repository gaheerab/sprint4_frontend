---
layout: base 
title: Levelone 
search_exclude: true
permalink: /levelone/
---
# 🔐 **Level 1: Beginner 🌱**

Welcome to **Level 1** of the Cipher Challenge! 🧩 Start here to warm up your code-breaking skills with a classic substitution cipher.

---

## 🔍 **Challenge Objective**

Your goal is to **decode the hidden message** below using a Caesar Cipher technique. Find the hidden word to unlock the path to the next level.

---

## 🧩 **Hints to Get You Started**

1. Each letter in the message has been **shifted forward by 3**. To decode it, shift each letter **back by 3**.
2. Example: If the coded letter is "D," shifting back by 3 reveals "A."
3. The message should make sense once decoded—trust your instincts on the word!

---

## 🔢 **Cipher Text**

Ciphered message:  
`Krod, Krz duh brx grlqj? Brx duh doprvw wkhuh!`

1. **Hint**: Shift each letter **back by 3** to reveal the message.
2. **Hint**: Trust that each word will form a coherent sentence after decryption.

---

## 📝 **Submit Your Answer**

Once you’ve cracked the code, submit your answer here:


- **Answer**: `type-your-answer-here`







# Chat Box Demo

This is a basic chat box rendered with HTML inside Markdown.

<div id="chat-container" style="width: 300px; margin: 20px 0; border: 2px solid #ddd; border-radius: 5px; padding: 10px; font-family: Arial, sans-serif;">
  <div id="chat-box" style="height: 200px; overflow-y: scroll; border-bottom: 2px solid #ddd; margin-bottom: 10px; padding: 10px; background-color: #f9f9f9;">
    <div id="chat-messages"></div>
  </div>
  <input type="text" id="chat-input" placeholder="Type a message..." style="width: calc(100% - 60px); padding: 8px; margin-right: 5px; border: 1px solid #ccc; border-radius: 5px;" />
  <button id="send-button" style="padding: 8px; background-color: #007bff; color: white; border: none; border-radius: 5px;">Send</button>
</div>

<div id="feedback" style="margin-top: 10px;"></div>
<div id="feedback" style="margin-top: 10px;"></div>

<script>
  const chatMessages = document.getElementById('chat-messages');
  const chatInput = document.getElementById('chat-input');
  const sendButton = document.getElementById('send-button');
  const feedback = document.getElementById('feedback');
  const correctAnswer = 'Hold, How are you doing? You are almost there!';
  let attemptsLeft = 3;
  let isLocked = false;

  function addMessage(text, className) {
    const messageElement = document.createElement('div');
    messageElement.className = className;
    messageElement.textContent = text;
    messageElement.style.margin = '5px 0';
    messageElement.style.padding = '5px';
    messageElement.style.borderRadius = '5px';
    messageElement.style.backgroundColor = className === 'user-message' ? 'black' : 'red';
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function addCorrectMessage(text, className) {
    const messageElement = document.createElement('div');
    messageElement.className = className;
    messageElement.textContent = text;
    messageElement.style.margin = '5px 0';
    messageElement.style.padding = '5px';
    messageElement.style.borderRadius = '5px';
    messageElement.style.backgroundColor = className === 'user-message' ? 'black' : 'green';
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function submitAnswer() {
    if (isLocked) return;

    const userAnswer = chatInput.value.trim();
    if (userAnswer === '') return;

    addMessage(`Your answer is: ${userAnswer}`, 'user-message');

    if (userAnswer === correctAnswer) {
      addCorrectMessage("Correct answer! Now you can move on!", 'bot-message');
      showNextLevelButton();
    } else {
      attemptsLeft--;
      addMessage(`Incorrect. Attempts left: ${attemptsLeft}`, 'bot-message');

      if (attemptsLeft <= 0) {
        isLocked = true;
        showRetryButton();
      }
    }
    chatInput.value = '';
  }

  function showRetryButton() {
    feedback.innerHTML = '<button class="button retry" onclick="retry()">Retry Level One</button>';
  }

  function showNextLevelButton() {
    feedback.innerHTML = '<button class="button next-level" onclick="nextLevel()">Next Level</button>';
  }

  function retry() {
    window.location.href = '/sprint4_frontend/levelone/';
  }

  function nextLevel() {
    window.location.href = '/sprint4_frontend/leveltwo/'; 
  }
  
  sendButton.addEventListener('click', submitAnswer);
  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') submitAnswer();
  });
</script>

<!-- Buttons Styling for Retry and Next Level -->
<style>
  .button {
    padding: 12px 24px;
    color: white;
    font-weight: bold;
    font-size: 16px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 10px;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .retry {
    background-color: #ff4c4c;
    border: 2px solid #c80000;
  }
  .next-level {
    background-color: #4caf50;
    border: 2px solid #2e7d32;
    box-shadow: 0 4px 10px rgba(0, 150, 0, 0.3);
  }
  .button:hover {
    transform: scale(1.05);
  }
  .next-level:hover {
    background-color: #66bb6a;
    box-shadow: 0 6px 12px rgba(0, 180, 0, 0.4);
  }
</style>



This is a simple interactive chat box. Type a message and hit "Send" or press "Enter" to see it displayed.