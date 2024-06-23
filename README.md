# Patient Registration System Backend Service

## Overview

This documentation provides a comprehensive guide to the backend service of the Patient Registration System, developed using Node.js. The backend service handles various functionalities such as user registration, case management, login, organization management, form templates, photo uploads, and form submissions.

## Prerequisites

Before running the application, ensure that you have the following installed:

- Node.js
- npm (Node Package Manager)
- MongoDB

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your MongoDB URI and other environment variables:

   ```plaintext
   MONGODB_URI=your-mongodb-uri
   PORT=your-desired-port
   ```

## Running the Application

To start the application, run the following command:

```bash
node app.js
```

The server will start and listen on the port specified in the `.env` file or default to port 3000.

## API Endpoints

The backend service provides the following API endpoints:

### User Registration

- **Endpoint:** `/user/`
- **Method:** `POST`
- **Description:** Registers a new user.

### Login

- **Endpoint:** `/login/`
- **Method:** `POST`
- **Description:** Authenticates a user and provides a token.

### Case Management

- **Endpoint:** `/case/`
- **Methods:** `GET`, `POST`, `PUT`, `DELETE`
- **Description:** Manages patient cases, including creating, updating, fetching, and deleting cases.

### Organization Management

- **Endpoint:** `/org/`
- **Methods:** `GET`, `POST`, `PUT`, `DELETE`
- **Description:** Manages organizations, including creating, updating, fetching, and deleting organizations.

### Form Templates

- **Endpoint:** `/formTemplate/`
- **Methods:** `GET`, `POST`, `PUT`, `DELETE`
- **Description:** Manages form templates, including creating, updating, fetching, and deleting templates.

### Photo Uploads

- **Endpoint:** `/photo/`
- **Methods:** `POST`
- **Description:** Uploads photos related to patient cases or forms.

### Forms

- **Endpoint:** `/form/`
- **Methods:** `GET`, `POST`, `PUT`, `DELETE`
- **Description:** Manages forms, including creating, updating, fetching, and deleting forms.

## Middleware

The application uses the following middleware:

- `body-parser`: Parses incoming request bodies.
- `cors`: Enables Cross-Origin Resource Sharing (CORS).
- `dotenv`: Loads environment variables from a `.env` file.

## Database Connection

The application connects to a MongoDB database using Mongoose. The connection URI is specified in the `.env` file:

```plaintext
MONGODB_URI=your-mongodb-uri
```

## Error Handling

The application includes basic error handling for database connections and other potential errors. If the database connection fails, an error message is logged to the console.

## Starting the Server

To start the server, run:

```bash
node app.js
```

The server will listen on the port specified in the `.env` file or default to port 3000.

## Environment Variables

The application uses the following environment variables:

- `MONGODB_URI`: The URI for connecting to the MongoDB database.
- `PORT`: The port on which the server listens (default is 3000).

## Conclusion

This documentation provides an overview of the Patient Registration System backend service, including installation, running the application, API endpoints, middleware, and database connection. For further assistance, please refer to the code comments or contact the project maintainers.

