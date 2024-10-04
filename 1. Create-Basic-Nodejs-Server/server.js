// server.js
const http = require('http');
// const url = require('url');

const port = 5000;

const server = http.createServer((req, res) => 
    {
        const method = req.method;     

        if(req.url === '/' )
        {
            if (method === 'GET') 
                {
                      res.writeHead(200, {'Content-Type': 'text/plain'});
                      res.end('Welcome to my node.js server/');
                }
                else 
                {
                      res.writeHead(405, {'Content-Type': 'text/plain'});
                  
                      res.end('Method Not Allowed');
                }

            // handleRootRoute(req, res, method);
        }
        else if(req.url === '/about')
        {
            handleAboutRoute(req, res, method);
        }
        else if(req.url === '/contact')
        {            
            handleContactRoute(req, res, method);
        }
        else 
        {
           handleNotFoundRoute(req, res, method)
        }

        // console.log(method);
        
    });

function handleRootRoute(req, res, method) 
{
    if (method === 'GET') 
    {
          res.writeHead(200, {'Content-Type': 'text/plain'});
          res.end('Welcome to my node.js server/');
    }
    else 
    {
          res.writeHead(405, {'Content-Type': 'text/plain'});
          res.end('Method Not Allowed');
    }
}
      
function handleAboutRoute(req, res, method) 
{
    if (method === 'GET') 
    {
          res.writeHead(200, {'Content-Type': 'text/plain'});
          res.end('Welcome to my node.js server/About');
    } else {
          res.writeHead(405, {'Content-Type': 'text/plain'});
          res.end('Method Not Allowed');
        }
}
      
function handleContactRoute(req, res, method) 
{
        if (method === 'POST') 
        {
          let body = '';
          req.on('data', (chunk) => { body += chunk; });
          req.on('end', () => {
            console.log('Received POST request with body:', body);
            res.writeHead(201, {'Content-Type': 'text/plain'});
            res.end('Thank you for your message!');
          });
        } 
        else if(method === 'GET')
        {
            res.writeHead(201, {'Content-Type': 'text/plain'});
            res.end('Welcome to my node.js server/Contact');
        }
        else
        {
          res.writeHead(405, {'Content-Type': 'text/plain'});
          res.end('Method Not Allowed');
        }
      }
      
function handleNotFoundRoute(req, res, method) 
{
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('404, Resource Not Found');
}

server.listen(port, () => { console.log('Server running on port: ', port) });