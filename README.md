# planitar_part_1

Part I created a web server that implements an API to run a wiki. Node.js and frameworks Express were used.
The server can be built using "npm start".
The server works as specified in the task.

# API:
GET /articles/ 

HTTP/1.1 200 OK 
Content-Type: application/json 
 
PUT /articles/:name 
If a new article was created: 
HTTP/1.1 201 Created 
No payload 
 
If an existing article was 
updated: 
HTTP/1.1 200 OK 
No payload 

GET /articles/:name If the article is not found: 
HTTP/1.1 404 Not Found 
No payload 
 
If the article is found: 
HTTP/1.1 200 OK 
Content-Type: text/html 
The payload is the latest content stored 
under this name 


Develop by: Alex Shkarin

Date: Jun. 25, 2020
