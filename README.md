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

    Generate Component
        Add to routes
        Add ts
        Add html
            Import Reactive Forms Module
        Add Css
        
        Add Login Api
            Use json
            Add jsonwebtoken
            Test Using Postman
       
        Generate User Service
            Generate User model
            Add User Subject
        Add Login Method
            Add User Urls
            Generate IUserLogin interface
            Add ngx-toastr
                Import Module
                Import BrowserAnimationsModule
                Add styles in angular.json
            Add to Header
    Add Local Storage methods
    Add Logout Method
        Add to Header
    
    10. Make Components For Login Page

        Input Container
        Input Validation
        Text Input
        Default Button
    
    11. Connect Login API To MongoDB Atlas

        Moving Apis into routers
        Create MongoDB Atlas
        Create .env file
        Install
          
            mongoose : to creating our models to be sends  to database
            dotenv : 
            bcryptjs : to encrypting passwords inside database
            express-async-handler : to make express consistent 
        Connect to MongoDB Atlas
        Use MongoDB instead of data.ts in apis

    12. Register User

        Add Register api
        Add Register service method
        Add Register link
        Add Register Component

    13. Loading!

        Add Image
        Add Component
        Add Service
        Add Interceptor

    14. Checkout Page

        Create Order Model
        Create Checkout Page Component
            Add To Router
        Add User to User Service
        Add Cart to Cart Service
        Create Order Items List Component
        Adding Map To The Checkout Page
            Add Leaflet npm package
                Add @types/leaflet
                Add Css to angular.json
            Add AddressLatLng to Order Model
            Create Map component
                Add to checkout page
                Add TS
                    Change app-map selector to map
            Add Html
            Add CSS
        Add Auth Guard