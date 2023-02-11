<h1 align="center">
       NewStackApp Assignment
</h1>


## Tech Stack : 

- **Frontend:** HTML,CSS,React Js, Java Script
- **Version Control:** Git and GitHub
- **Backend:** NodeJs,Express,MongoDB
- **Code Editor and tools**: VS Code

#Features
<ul>
       <li>Added extra layer of validation of data entered by User</li>
       <li>Modal Overlay for Cart which is rendered in another Div of index.html with classname Overlay</li>
       <li>User can edit his items from his cart</li>  
</ul>

#Technical

-The Discount logic is implemented such that when a user is not listed in mongodb and he makes an order the backend checks his record in the MongoDB and then it will create a new record with {name,orders=1} and if the user's record is present node will fetch the current number of orders and add one to it if the new orders are divisible by n this will be saved in state varibale which will be further used to deduct 10% of total price of shopping of the User and the backend will delete users old record and add {name,orders+1}.
-The mongo URI is saved as enviornment variable

#To run the app

<ol>
       <li>Clone the following repository</li>
       <li>navigate to client and server in two terminals and type npm i</li>
       <li>go to Atlas MongoDB and create a new cluster grab the Mongo URI</li>
       <li>create .env and  MONGO_URI=paste your URI here</li>
       <li>npm run dev in server dir</li>
       <li>npm start in client dir</li>
</ol>


# Assignment

You are designing an ecommerce store. Clients can add items to their cart and checkout to successfully place an order. Every *n*th order gets a coupon code for 10% discount and can apply to their cart. 

We would like you to design and implement APIs for adding items to cart and checkout functionality. The checkout API would validate if the discount code is valid before giving the discount. 

Building a UI that showcases the functionality is a stretch goal. If you are primarily a backend engineer, you can also submit postman or REST client or equivalent.

The store also has two admin API's:
1. Generate a discount code if the condition above is satisfied.
2. Lists count of items purchased, total purchase amount, list of discount codes and total discount amount. 

You can build this with a technology stack that you are comfortable with. You would push the code to your github repo and share the link once its complete. We would like to see your commits that show progression and thought process as to how you are completing the exercise. 

Things that you will be evaluated on:

1.	Functional code
2.	Code quality
3.	UI in a framework of your choice
4.	Code comments, readme docs
5.	Unit tests

Assumptions you can make:
1.	The API’s don’t need a backend store. It can be an in-memory store.


## FAQ:
**Q**: Can a discount code be used multiple times?

**A**: Discount code can be requested by every user, but is made available for every nth order only. The discount code can be used only once before the next one becomes available on the next nth order.

**Q**: Does the discount code apply to one item?

**A**: Discount code applies to the entire order.

All the best!
