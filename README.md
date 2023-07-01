My first fullstack E-commerce project using 
    Frontend : Angular 
    Backend : Node.js + MongoDB

    Final Product : http://rai-foodshop.onrender.com

All the steps I have done for each functionality 

1. Creating a online shop to learn angular and node.js
    1. Generating Component 
    2. Add Html
    3. Add Scss
2. List Foods
    1. Create Food Model
    2. Create data.ts
        1. Add sample foods
    3. Add images to assets
    4. Create Food service
    5. Create Home Component
    1. Add ts
    2. Add Html
    3. Add Scss
3. Search 
    1. Add method to Food service
    2. Add search route
    3. Show search result in Home component
    4. Generate search component
        1. Add to home component
        2. Add ts
        3. Add html
        4. Add css
    
4. Tags Bar
    1. Create Tag model
    2. Add sample tags to data.ts
    3. Food service 
        1. Add get all tags method
        2. Add get all foods by tag method
    4. Add tags route
    5. Show tag result in Home component
    6. Generate Teags component 
        1. Add to home component
        2. Add ts 
        3. Add Html
        4. Add Scss

5. Food Page
    1. Add method to food service
    2. Generate Food Page component
        1. Add Rout
        2. Add ts
        3. Add html 
        4. Add Scss

6. Food Page

    1. Add method to food service
    2. Generate Food Page component
        1. Add Route
        2. Add ts
        3. Add html 
        4. Add Scss

7. Not Found!

    1.Generate Component
        1. Add ts
        2. Add html
        3. Add css
        4. Add To Pages
            Home Page
            Food Page
            Cart Page

8. Connect To Backend

    1. Create backend folder
    2. npm init
    3. npm install typescript
    4. Create tsconfig.json
    5. Create .gitignore
    6. Copy data.ts to backend/src
    7. npm install express cors
    8. Create server.ts
        install @types
        Add Apis
    9. npm install nodemon ts-node --save-dev
    10. Add urs.ts to frontend
    11. Add HttpClient module
    12. Update food service

9. Login Page

    1.Generate Component
        1.Add to routes
        2.Add ts
        3.Add html
            Import Reactive Forms Module
        4.Add Css
        
        5.Add Login Api
            1. Use json
            2.Add jsonwebtoken
            3.Test Using Postman
       
        6.Generate User Service
            1.Generate User model
            2.Add User Subject
        7.Add Login Method
            1.Add User Urls
            2.Generate IUserLogin interface
            3.Add ngx-toastr
                1.Import Module
                2.Import BrowserAnimationsModule
                3.Add styles in angular.json
            4.Add to Header
        8.Add Local Storage methods
        9.Add Logout Method
            1.Add to Header
    
    10. Make Components For Login Page

        1.Input Container
        2.Input Validation
        3.Text Input
        4.Default Button
    
    11. Connect Login API To MongoDB Atlas

        1.Moving Apis into routers
        2.Create MongoDB Atlas
        3.Create .env file
        4.Install
          
            1.mongoose : to creating our models to be sends  to database
            2.dotenv : 
            3.bcryptjs : to encrypting passwords inside database
            4.express-async-handler : to make express consistent 
        5.Connect to MongoDB Atlas
        6.Use MongoDB instead of data.ts in apis

    12. Register User

        1.Add Register api
        2.Add Register service method
        3.Add Register link
        4.Add Register Component

    13. Loading!

        1.Add Image
        2.Add Component
        3.Add Service
        4.Add Interceptor

    14. Checkout Page

        1.Create Order Model
        2.Create Checkout Page Component
            1.Add To Router
        3.Add User to User Service
        4.Add Cart to Cart Service
        5.Create Order Items List Component
        6.Adding Map To The Checkout Page
            1.Add Leaflet npm package
                1.Add @types/leaflet
                2.Add Css to angular.json
            2.Add AddressLatLng to Order Model
            3.Create Map component
                1.Add to checkout page
                2.Add TS
                    Change app-map selector to map
            4.Add Html
            5.Add CSS
        6.Add Auth Guard

    15. Payment Page

        1.Generate Component
        2.Add 'getOrderForCurrentUser' api
        3.Add Order Service method
        4.Connect Component to Service
        5.Make the map component readonly

    16. Adding Paypal

        1.Generate Component
        2.Add to payment page
        3.Get Paypal client Id
        4.Add Paypal JS to index.html
        5.Set up Paypal button
        6.Add Pay api to order router
        7.Get Paypal sandbox account

    17. Order Track Page

        1.Generate Component
            Add to routes
        2.Add API
            Add to urls.ts
        3.Add method to order.service
        4.Add HTML
        5.Add CSS
    
    18. Deploy On Heroku

        1.OutputPath in angular.json
        2.package.json
            frontend
            backend
            root
        3.BASE_URL in urls.ts
        4.Public folder config in server.ts
        5.Run commands
        6.Add built folder to .gitignore
        7.Commit and Push


Final Product : http://rai-foodshop.onrender.com 