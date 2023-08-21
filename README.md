# StackOverFlow-Clone

The Backend is developed in Node.Js with MongoDD atlas and hosted on render cloud service.

To access and test postman api you can access it by import in postamn with this api https://api.postman.com/collections/27568261-40a88d1d-f7de-41ae-9d9c-09ee71d65340?access_key=PMAT-01H8BJJR7FGK55AXNYBERGAMHK

Render link -> https://stackoverflow-clone-xqi7.onrender.com

To test api do following things....
1. Import postman collection with api link given above
2. set BASEURL varibale as render link in postman varibale
3. run or test api directly from postman

JWT middleware is implemeted in api so make sure to login and get token from login api and use it in header as token error will be thrown by code.

a special error class is made in code to detect error and throw error accordingly.

Github repository link -> https://github.com/manavptl/StackOverFlow-Clone.git