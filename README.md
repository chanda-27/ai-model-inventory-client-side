#  AI Model Inventory Manager

###  Live Site: [https://ai-model-inventory-manager33.netlify.app/]

##  Why This Topic?

The **AI Model Inventory Manager** is designed to help students explore the connection between **Web Development** and **Artificial Intelligence**.  
In today’s world, AI is transforming industries — from research to production deployment.  
This project lets students experience managing AI models like professionals do in real-world applications such as **Hugging Face**, **Kaggle**, and **Model Zoo**.  

It helps learners understand how AI models are **organized, stored, and tracked**, while learning important web development skills — **React.js**, **Node.js**, **Express.js**, and **MongoDB**.

---

## 💡 Motivation

Creating this project encourages understanding of:
- How AI models (like GPT, BERT, ResNet) are stored and retrieved.
- How metadata (framework, dataset, use case) helps in managing AI models.
- How CRUD operations work in real-world web apps.

Inspired by:
- 🧠 **Hugging Face:** Managing AI models and datasets with detailed metadata.  
- 🏆 **Kaggle:** Organizing AI models and competitions.  
- 🧩 **Model Zoo:** Sharing pre-trained models for multiple frameworks.

---

## 🎯 Project Theme

A **full-stack web application** that allows users to:
- Add, view, update, and delete AI model entries.
- Store metadata like **Model Name**, **Framework**, **Use Case**, **Dataset**, and **Description**.
- Authenticate users using **Firebase**.
- Manage data securely in **MongoDB**.
- Enjoy responsive, modern UI with **Dark/Light theme toggle**.

---

## ⚙️ Key Features

- 🔐 **Authentication:**  
  Firebase login with **Email/Password** and **Google Sign-In**.  
  Private routes for registered users.

- 🧾 **CRUD Operations:**  
  Users can Add, View, Edit, and Delete their own AI Models.

- 📦 **Personal Dashboards:**  
  - **My Models Page:** View models added by the user.  
  - **My Purchases Page:** View models purchased by the user.

- 💳 **Purchase Counter:**  
  Increments real-time when a model is purchased.

- 🔍 **Search & Filter:**  
  - Search by **model name** using MongoDB `$regex`.  
  - Filter by **framework** (TensorFlow, PyTorch, etc.).

- 🌗 **Dark/Light Theme Toggle:**  
  Theme persists across the whole site.

- ⚠️ **Custom Alerts:**  
  SweetAlert2 used instead of default browser alerts.

---

## 🧩 Data Structure (MongoDB
