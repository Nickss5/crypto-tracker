# Crypto Tracker - HodlInfo Clone

This is a clone of the [hodlinfo.com](https://hodlinfo.com/) website built using **HTML**, **CSS**, **JavaScript**, **Node.js**, and **MongoDB**. The project fetches real-time cryptocurrency data from the WazirX API and displays it dynamically on the frontend.
The server fetches the top 10 cryptocurrency tickers from the WazirX API and stores them in the MongoDB database.

## **Project Structure**

- **Root Directory**: `hodlinfo_clone`
- **Subfolders**:
  - `public/`: Static files (CSS, JavaScript, images)
  - `views/`: HTML templates
  - `routes/`: Express routes

## **Prerequisites**

Ensure that you have the following installed:

- **Node.js** (v14+)
- **MongoDB**
- **npm** or **yarn**

## **Installation**

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/hodlinfo_clone.git
   cd hodlinfo_clone

2. **Install dependencies**:

     ```bash
     npm install
     
3. **Database Setup**:
   
    Install MongoDB and ensure the service is running. Then, configure your database connection 
    in a .env file

## **API Routes**

**/api/getTop10**:  Fetches the top 10 tickers from the MongoDB database and returns them as JSON.

## **Tech Stack**

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **API**: WazirX API




