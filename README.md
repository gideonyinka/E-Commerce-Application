
## Functionalities of MyStoreApp

# Homepage
It is a responsive e-commerce website to buy products of choice.
The products are displayed on the homepage. 
To make an order on a product of choice, the users need to click on " add to cart button". Immediately, the products will be added to cart with total quantity displayed on the "cart icon" at top-left of the page. 
The users can access the cart page by clicking on the "cart-icon".

# Cart Page
This page contains list of products added to cart.
At this page, a product can be removed through the "trash icon", or empty all product through "empty cart" button.
Note that, empty cart will initialize a message "empty cacrt" and ask to shop.
At the bottom of the page, users can shop more, see the total price, purchase the orders.

## Confirmation Page
The app requests the users to provide their details. 
The details include the first name and last name ( both requires minimum of 2 characters and maximum of 32 characters and it is required), valid email, password (minimum of 4 characters and required)
The users can still adjust their orders by clicking on the cart icon at the top left of the page.

## Checkout page
This page displays successful message to the users
Upon clicking on submit button the cart is emptied, and the users can make a new order by click on the directory message.

## To start this application, users can use default port 4200 through "ng serve" or specify the port "ng serve --port <port number>"
Type this into the browser for default port: http://localhost:4200 

## Libary, Assets and Services Used 
fontsawesome, boostraps, CartService, ProductsService, data.json

