# note-manager-api

REST API for managing notes.

This is a RESTful API built with Node.js, Express, MongoDB database and JWT authentication. JWT is used to protect the endpoints and make sure that a user is logged-in to access them.

## Setup and Installation

1. **Clone the repo from GitHub**
   ```sh
   git clone https://github.com/ayo-ajayi/noteman.git
   cd noteman/
   ```
2. **Install all npm dependencies**
   ```sh
   npm install
   ```
3. **Setup MongoDB**

   Download the community edition from [here](https://www.mongodb.com/download-center/community) and install locally on the machine

4. **Update database URL in config.js file**
   
   once you have the DB URL, specify that in config.js file:
   ```js
   module.exports = {
    MONGODB: "mongodb://localhost:27017/noteman",
    ...
   };
   ```
5. **Run npm start to start the application at port 3300**
   ```sh
   npm start
   ```