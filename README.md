## Coffee Shop Website
This is a simple coffee shop website with an interactive menu and shopping cart functionality. The website allows users to explore different types of coffee, search for specific products, and add them to their cart. It also supports a notification feature for user interactions like adding/removing items to/from the cart.

## Features
Interactive Menu: Displays various coffee options (Espresso, Cappuccino, Latte, HazelNut) with prices and images.
Search Functionality: Allows users to search for coffee products.
Shopping Cart: Users can add and remove items from their cart and view the total price.
Cart Notification: Alerts users when an item is added or removed from the cart.
Responsive Navbar: The navbar allows for easy navigation, and the search and cart functionalities are easily accessible.
Smooth Scrolling: Scrolling behavior is enhanced for a smoother user experience.
## Installation
1. Clone the Repository
To get started, clone this repository to your local machine:

## bash
Copy
git clone https://github.com/yourusername/your-repository-name.git
2. Open the Project
Navigate to the project folder:

bash
Copy
cd your-repository-name
Open the index.html file in your browser to view the website.

## Usage
1. Adding Products to the Cart
Click the "Add to Cart" button next to any product.
The item will be added to your cart, and you will receive a notification confirming the action.
2. Viewing the Cart
Click the cart icon (or "Cart" button) to open the cart.
You can see all the items added to your cart, their prices, and the total amount.
3. Removing Items from the Cart
Click the "X" icon next to any item in the cart to remove it.
A notification will appear confirming the item removal.
4. Checkout
Once you have items in your cart, you can click the "Checkout now" button to simulate the checkout process. A notification will appear with the total amount of your order.
Code Structure
The main functionality of the website is written in vanilla JavaScript, and the code is organized as follows:

1. JavaScript Code
DOM Elements: Grabs references to various DOM elements for interactions (navbar, search form, cart, etc.).
Cart Functionality: Manages adding/removing items from the shopping cart and updates the display accordingly.
Menu & Search: Allows for toggling the menu and searching for products by name.
Notifications: Displays notifications when products are added/removed from the cart.
Checkout: Simulates a checkout process and clears the cart after placing an order.
Scroll Handling: Ensures that menus close when the page is scrolled.
2. HTML Structure
The HTML provides the structure for the navigation menu, search bar, cart, and product listings.

3. CSS Styling
The basic styles include layout, buttons, and cart display. The .active class is used to toggle visibility of menus and the cart.

4. Animations
Smooth animations are added for notifications and cart interactions using CSS keyframes.

## Demo
You can view a live demo of the website on GitHub Pages.

Customization
Feel free to customize the menu items, images, and styling. You can easily add more products by modifying the menuItems array in the JavaScript.
