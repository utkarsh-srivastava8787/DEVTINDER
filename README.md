-initialize git

-git ignore

-Query Parameters:
                Query parameters are key-value pairs that appear after the ? in a URL.
                http://example.com/search?q=express&page=2
                In this URL, q=express and page=2 are query parameters that can be accessed as "req.query.q" and "req.query.page"

-create routes 
    -Optional Parameters ('/users/:id?') => Matches:  /users,/users/101(id are option work for both )
                In this example, id are route parameters that
                 can be accessed via req.params.

    -Regular Expressions (/^\/user\/[0-9]+$/) => /user/123
    -String paths ('/users')
    -Arrays of paths (['/users', '/customers'])

- add nodemon to run file automatically

- order of routes metters alot

- add multiple route handler for single route

- add middleware "It provides a way to add and reuse common functionality
                     across your application's routes and endpoints."

- Middleware can:
    -Execute any code
    -Modify request and response objects
    -End the request-response cycle
    -Call the next middleware in the stack
    
-When you call next(), the next middleware in the stack is executed.

-If you don't call next(), the request-response cycle ends and no further middleware runs.

-multiple route hadlers
-how express JS handle requests behind the scenes
- mongodb 
- create mongodb account use atlas free  add cluster and connect with databsefile
- now we connect successfully
- use mongoose instead of mongodb 
- use mongoose then connect with mongodb server 
- we can run the server when mongoose database is connected successfully 
- creating mongoose user schema 
-for creating schema we have add folder name Models 
- on models folder add a file naem user.js where we create schecma 
- after schema is created succesfully we have to export the schema
- on app.js we create a user information and import schema from models/user.js
- we have to call app.post method to post the user detail in  database 
- on the post we have to create user instance with new keyword 
- after that the imported schema from user.js we have to save it by using  asyn await 
- save the database like "user.save()" to store value in the database.
- add default user data and save to the mongodb 
- now we have to store data of a user from postman 
- add data in body use json data to store on monggoose
- on app.js we have to use a inbult midleware from express js which is app.use(express.json()) 

- Explore schematypes options from documentation.
- add required, unique, trim etc.. type options 
- improve DB schema-  PUT all appropriate validation on each fields in schema
- Add API livel validation on patch request & /signUp post Api
- Data sentization: Add API validation for each fields
- validator libraray 
- use library function for email and phone numbers

- Validate data in signup Api
- Install bcrypt package
- create password using bcrypt.hash & save the user us excrupted password
- create a login api 
- store data in express cookies 
- add cookie parser to handle cookies 
- use jwt token to authenticate other routes 
- use jwt token on login page to store jwt token on cookies 
- verify jwt token on other routes to authenticate user 
- create a authentication middleware so that we are not to check authentication on each route
we just call add middleware and verify the user
- flow will be user> login > verify email > dcrypt password >verify password > generate jwt token > add in the cookies > user is Logged in > user use other routes > get cookies > verify token > sucessfilly access routes > this process run same for other users as well
-set the expiry of the jwt token  and cookied to 7dayd
- create user schema method to compare password( passwordInputByUser)

-explore tinder api in devTinder_api
- create a list of API you can think of in Dev Tinder
- Group multiple routes under respective routes
- read documetation for express.Router