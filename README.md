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