<div align="center">
    <h1>HireZ: An Hiring Platform</h1>
    <p> HireZ is a fully functional web application that enables users to post and find jobs, review profiles of jobseekers. The application is built using the MERN stack, which includes ReactJS, NodeJS, MongoDB, and ExpressJS. HireZ aims to provide a streamlined platform for connecting job seekers with employers.</p>
    <h2>
        <a href="https://rahulwagh.vercel.app">See live</a>
    </h2>

<div align="center">
  <a href="https://rahulwagh.vercel.app">
    <img alt="webcapture" src="/src/assets/webcapture.png" />
  </a>
</div>
</div>


Project Description
In the following sections, we will cover the technical details of the project, including:
 

### Frontend
The front  is built using ReactJS, a popular JavaScript library for building user interfaces. ReactJS allows for the creation of dynamic and responsive user interfaces, critical for providing an engaging user experience. The front end communicates with the back end using RESTful API calls.

 
## Features and Functionalities for frontend: 📋

- ⚡️User authentication
- ⚡️Job posting and searching
- ⚡️Responsive design for various screen sizes

## Frameworks, Libraries, and Tools Used for frontend:
 
- ⚡️ReactJS
- ⚡️Axios for HTTP requests
- ⚡️React Router for client-side routing

### Back-end
The back end  is built using NodeJS and ExpressJS, providing scalable and robust server-side functionalities. It offers APIs for user authentication, job posting, and other core features.

## Features and Functionalities for backend: 📋


- ⚡️User authentication using JWT
- ⚡️RESTful API 
- ⚡️Data validation and error handling

## Frameworks, Libraries, and Tools Used for backend:


- ⚡️Node.js
- ⚡️Express.js
- ⚡️MongoDB for database storage
- ⚡️JWT for authentication
- ⚡️Bcrypt for password hashing
- ⚡️Mongoose for MongoDB object modeling

### Database
The MongoDb database is used, a NoSQL database that offers flexibility and scalability for data storage.

### System Architecture
The project consists of three main components: the front end, the back end, and the database. It follows a client-server architecture, with the front end serving as the client and the back end and database serving as the server.

### API Design
The HireZ platform's API follows the REST architectural style and is implemented using Node.js and Express.js. It uses JSON for data exchange and adheres to standard HTTP request methods such as GET, POST, PUT, and DELETE.


### Setting Up the Project
To set up the HireZ project locally, follow these steps:

Clone the Repository:

git clone https://github.com/Rahulwagh07/HireZ.git

Navigate to the Project Directory:

npm install

Install Dependencies for the Server:

cd server
npm install


 

Create .env Files: (see .env.example file )

Create a .env file in the server directory for server-related configurations.
Create a .env file in the main project  directory for client-related configurations.

## Set Up MongoDB:

Ensure you have MongoDB installed and running.
 
## start 
npm run dev

Open your Browser:
Navigate to http://localhost:3000 to view the application.

 

In summary, HireZ is designed to provide an intuitive and efficient platform for Top talent in content creation  and content creators to connect, facilitating the hiring process.