
### Creating a Basic Node.js Server

Requirements:
1. Set up Node.js Environment:
    * Install Node.js on your machine and ensure it’s correctly configured.

    * Create a new project folder and initialise it with npm init to manage dependencies and scripts.

2. Create HTTP Server:
    * Use Node.js' built-in http module to create the server. This avoids the need for external libraries.

    * Implement the server to handle basic requests and responses.

3. Define Basic Routes:
    * Set up routes to handle incoming requests, such as a root / route that responds with a welcome message.

    * Add logic to handle different types of HTTP requests (e.g., GET, POST).

4. Start the Server:
    * Use the server’s listen() method to start it on a specific port (e.g., 3000).

    * Ensure the server is ready to accept and respond to incoming requests.

5. Test the Server:
    * Use a browser or a tool like curl or Postman to make requests to the server's IP or localhost at the defined port.

    * Confirm that the server is responding as expected with appropriate messages or data.

6. Handle Errors:
    * Implement basic error handling to manage unexpected issues like invalid routes or server errors.

    * Ensure the server responds with appropriate status codes and messages for unhandled routes or errors.