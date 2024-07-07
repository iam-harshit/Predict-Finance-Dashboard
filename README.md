# Predict Finance Dashboard

## Overview

Predict Finance Dashboard is a comprehensive financial dashboard application that analyzes companies' financial data. This project uses a Machine Learning library to provide predictive insights, helping companies make informed financial decisions.

## Table of Contents

- Features
- Technology Stack
- Installation Guide
- Initial Data Setup
- Usage
- Project Structure

## Features

- **Dashboard Overview**: Visualize key financial metrics at a glance.
- **Predictive Analytics**: Machine Learning library **(regression-js)** to predict future financial trends.
- **Data Visualization**: Interactive charts and graphs to visualize financial data.

## Technology Stack
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)  ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white) ![ReCharts](https://img.shields.io/badge/-Recharts-61DAFB?logo=recharts&logoColor=white&style=for-the-badge)
![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white&style=for-the-badge) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb&logoColor=white&style=for-the-badge) ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

## Installation Guide

1. Clone the repository:
   ```bash
   git clone https://github.com/iam-harshit/Predict-Finance-Dashboard.git
2. Install backend dependencies:
   ```bash
   cd backend
   npm install
3. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
4. Set up environment variables:\
&nbsp;To properly run the application, you must set up environment variables. Follow these steps:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Create a file named `.env` in the root directory of the backend.\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Add the following environment variables to the `.env` file:

   ```plaintext
   MONGO_URI=<your-mongodb-uri>
   PORT=<port-number>
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Create a file named `.env.local` in the root directory of the frontend.\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. Add the following environment variables to the `.env.local` file:

   ```plaintext
   VITE_BASE_URL=<backend-uri e.g. http://localhost:<port-number>>
   ```

## Initial Data Setup

For the first-time setup, you need to run the following code to populate your database with initial data. This code is located in the `index.js` file of the backend:

```javascript
/* ADD DATA ONE TIME ONLY OR AS NEEDED */
// await mongoose.connection.db.dropDatabase();
// KPI.insertMany(kpis);
// Product.insertMany(products);
// Transaction.insertMany(transactions);
```
Uncomment these lines and run the backend server once to populate the database. After running it, comment the lines again to prevent re-inserting the data.

## Usage

1. Start the backend server:
   ```bash
   cd backend
   npm run dev
2. Start the frontend server:
   ```bash
   cd frontend
   npm run dev
Make sure both the frontend and backend servers are running to access the full functionality of the application.

## Project Structure
```bash
├── Predict-Finance-Dashboard/
├── backend/            # backend code
│   ├── data/
│   ├── models/
│   ├── routes/
│   ├── .env            # Environment variables
│   ├── .gitignore
│   ├── index.js
│   ├── package.json
├── frontend/           # frontend code
│   ├── public/
│   ├── src/
│   ├── .env.local      # Environment variables
│   ├── .gitignore
│   ├── package.json
├── README.md
