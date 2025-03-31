require('dotenv').config()
const express = require('express') //Import the express module as "express"
const app = express(); // This line creates an Express app by calling the express() function. Think of app as your web server that you can add routes and features to.
const port = process.env.PORT || 3000; // Define the port number your 'app' will run on -> defined in env file
const helloRoute = require ('./routes/hello') // 4. Import the hello route from the routes folder
const indexRoute = require ('./routes/index')
//Where is the route folder and hello???
app.use(express.json()); // Middleware to parse JSON in request bodies
app.use('/hello', helloRoute); // 6. Register the /hello route with the app
// 7. Define the root route (/)
// app.get('/', (req, res) => {
//     res.send('Welcome to your Node.js Starter App!');
//   });
app.use('/', indexRoute);

// 8. Start the server and listen on the defined port
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });