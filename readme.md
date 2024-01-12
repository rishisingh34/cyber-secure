# Cyber Secure App

CyberTrends is a web application that provides information on cyber-related news trends. It utilizes the News API to fetch and display news articles based on user queries related to cybersecurity.

## Features

### 1. **Search for Cyber News**
   - Users can search for cybersecurity-related news by entering keywords or phrases.
   - The app queries the News API to fetch relevant articles based on the user's input.

### 2. **Pagination**
   - The app supports pagination to allow users to navigate through multiple pages of search results.
   - Users can specify the page and page size to customize their browsing experience.

### 3. **Configurable API Key**
   - The application is configured to use the News API, and it requires an API key for authentication.
   - Users need to set up their own News API key in the `env.config` file for the app to function properly.

### 4. **Error Handling**
   - The app includes error handling to gracefully manage issues that may arise during the API request process.
   - In case of errors, the server responds with a 500 status code and a corresponding error message.

### 5. **Responsive Design**
   - The app is designed to be responsive, providing a seamless experience across various devices and screen sizes.

## Getting Started

1. Clone the repository to your local machine.
2. Install dependencies using `npm install`.
3. Obtain a News API key and set it in the `env.config` file.
4. Run the application using `npm start`.
5. Access the app in your browser at `http://localhost:3000` (or the specified port).

## Dependencies

- **axios**: Used for making HTTP requests to the News API.
- **Node.js**: JavaScript runtime for server-side development.

## Configuration

Before running the app, make sure to set up the `NEWS_API_KEY` in the `env.config` file.

```javascript
// env.config
module.exports = {
  NEWS_API_KEY: "your_news_api_key_here",
};
```

It looks like you have two modules (`complaintRegister` and `auth_controller`) that handle different aspects of your application, including complaint registration and user authentication. Below is a simple README.md template for these modules:

# Complaint Registration and User Authentication

## Overview

This application provides functionality for registering complaints and authenticating users. It includes features such as complaint registration with image uploads and user authentication using OTP.

## Complaint Registration

### 1. Incident Details

- **Endpoint:** `/incidentDetails`
- **Method:** POST
- **Description:** Register an incident complaint with details such as category, subcategory, date, time, delay reason, and additional information.
- **Request Body:**
  ```json
  {
    "category": "Cybercrime",
    "subcategory": "Phishing",
    "date": "2023-01-15",
    "time": "14:30",
    "delayReason": "Not applicable",
    "additionalInfo": "Details of the incident"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Complaint Registered successfully"
  }
  ```

### 2. Upload Complainant ID

- **Endpoint:** `/complainantId`
- **Method:** POST
- **Description:** Upload the complainant's ID image, associated with a specific complaint.
- **Request Body:**
  ```json
  {
    "acknowledgementNumber": "F3E015509F054FE6"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Complaint updated successfully"
  }
  ```

### 3. Complainant Details Update

- **Endpoint:** `/complainantDetails`
- **Method:** POST
- **Description:** Update complainant details such as name, gender, address, etc., associated with a specific complaint.
- **Request Body:**
  ```json
  {
    "acknowledgementNumber": "F3E015509F054FE6",
    "name": "John Doe",
    "gender": "Male",
    "houseNo": "123",
    "country": "USA",
    "streetName": "Main Street",
    "state": "California",
    "district": "Los Angeles",
    "nearestPoliceStation": "Station A"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Complaint updated successfully"
  }
  ```

## User Authentication

### 1. User Registration and OTP Verification

- **Endpoint:** `/register`
- **Method:** POST
- **Description:** Register a new user and send an OTP for verification.
- **Request Body:**
  ```json
  {
    "email": "john.doe@example.com",
    "name": "John Doe"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Otp Sent successfully"
  }
  ```

### 2. OTP Verification

- **Endpoint:** `/verify_otp`
- **Method:** POST
- **Description:** Verify the user using the received OTP and issue an access token.
- **Request Body:**
  ```json
  {
    "email": "john.doe@example.com",
    "otp": 1234
  }
  ```
- **Response:**
  ```json
  {
    "message": "User verified successfully"
  }
  ```
  
## Getting Started

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up environment variables.
4. Run the application using `npm start`.

Feel free to customize this README based on additional features, setup instructions, and any other relevant information specific to your application.