# Full Stack Project Documentation - The Dogs API

Welcome to the documentation of the Full Stack project based on "The Dogs API"! In this documentation, I will provide a detailed description of the technologies used, the project structure, and the implemented functionalities.

**API Link: [The Dog API](https://thedogapi.com/)**


## Overview
This Full Stack project aims to create a web application that allows users to explore information about different dog breeds using "The Dogs API". The application provides functionalities such as displaying dog breed data in the form of cards, creating new dog breeds, filtering by temperaments, weight, and height, pagination, and searching by breed name.

## Technologies Used

### Frontend
- **ViteJS**: ViteJS is a fast development environment for modern web applications. It was chosen for its focus on development speed and the ability to build fast and efficient applications.
- **React**: React is a widely-used JavaScript library for building interactive user interfaces. It was chosen for its popularity, flexibility, and performance.
- **Redux**: Redux is a state management library used to handle the global state of the application. Redux was chosen to maintain a consistent data flow and facilitate data sharing between components.
- **Native CSS**: Native CSS was used for styling the application. This allows for greater flexibility and control over the design and appearance of the application.

### Backend
- **Node.js**: Node.js is a JavaScript runtime environment for server-side execution. It was chosen for its efficiency and ability to handle a large number of concurrent requests.
- **Express**: Express is a Node.js framework for building web applications. It was used to build the backend API and handle client requests.
- **Sequelize**: Sequelize is a Node.js ORM (Object-Relational Mapping) that provides a simple interface for interacting with the database. Sequelize was chosen to facilitate communication with the PostgreSQL database.

### Database
- **PostgreSQL**: PostgreSQL is an open-source relational database management system. It was chosen for its robustness, performance, and ability to handle large volumes of data.

## Project Structure
The project is organized into a logical and easy-to-understand folder and file structure. Here is a description of the main folders and files:

```
- backend/            # Backend folder
  - src/              # Resource folder
    - controllers/    # API controllers
    - models/         # Database models
    - routes/         # API routes
    - services/       # Services for making API requests
    - utils/          # Utility functions
  - test/             # Test folder //in progress
  - index.js          # Backend entry point
  - package.json      # Backend dependencies and scripts

- frontend/           # Frontend folder
  - src/              # Frontend source code
    - assets/         # Static assets folder
      - components/   # Reusable components
      - redux/        # Redux configuration
      - services/     # Services for making API requests
      - utils/        # General utilities
      - views/        # Main application pages
    - app.jsx         # Root component of the application
    - index.jsx       # Frontend entry point
  - package.json      # Frontend dependencies and scripts

- README.md           # Project documentation
```

## Implemented Functionalities

### Displaying Dog Breed Data
- The main page of the application displays cards with basic information about different dog breeds.
- Dog breeds data is fetched from the backend via HTTP requests to "The Dogs API" and stored in the Redux global state.

### Creating New Dog Breeds
- The application allows users to create new dog breeds using a controlled form.
- The form requests information such as breed name, age, weight, height, temperaments, and an image.
- The created dog breeds are saved in the database.

### Filtering by Temperaments, Weight, and Height
- Users can filter dog breeds by various temperaments, weight, and height.
- The global state of Redux is used to store the selected filters and apply them in the visualization of dog breeds.

### Pagination
- The application implements pagination to display dog breeds on different pages.
- This allows for better organization and navigation of dog breeds, especially when there is a large amount of data.

### Searching by Breed Name
- Users can search for dog breeds by their name.
- The global state of Redux is used to store the search term and apply it in the visualization of dog breeds.