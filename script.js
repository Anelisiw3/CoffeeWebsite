// DOM Elements
let navbar = document.querySelector('.navbar');
let searchForm = document.querySelector('.search-form');
let cartItem = document.querySelector('.cart-items-container');
let menuBtn = document.querySelector('#menu-btn');
let searchBtn = document.querySelector('#search-btn');
let cartBtn = document.querySelector('#cart-btn');

// Shopping Cart functionality
let cart = [];
const menuItems = [
    { id: 1, name: 'Expresso', price: 95.00, image: 'pics/Expresso' },
    { id: 2, name: 'Cappuccino', price: 120.00, image: 'pics/Dry-Cappucion' },
    { id: 3, name: 'Latte', price: 206.00, image: 'pics/Latte' },
    { id: 4, name: 'HazelNut', price: 150.00, image: 'pics/HazelNut' }
];

// Menu button functionality
menuBtn.onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
};

// Search button functionality
searchBtn.onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
};

// Cart button functionality
cartBtn.onclick = () => {
    cartItem.classList.toggle('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
};

// Close menus when scrolling
window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
};

// Function to add item to cart
function addToCart(itemId) {
    const item = menuItems.find(item => item.id === itemId);
    if (item) {
        cart.push(item);
        updateCartDisplay();
        showNotification(`Added ${item.name} to cart!`);
    }
}

// Function to remove item from cart
function removeFromCart(index) {
    const removedItem = cart[index];
    cart.splice(index, 1);
    updateCartDisplay();
    showNotification(`Removed ${removedItem.name} from cart!`);
}

// Function to update cart display
function updateCartDisplay() {
    const cartContainer = document.querySelector('.cart-items-container');
    cartContainer.innerHTML = ''; // Clear current cart display
    
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <span class="fas fa-times" onclick="removeFromCart(${index})"></span>
            <img src="${item.image}" alt="${item.name}">
            <div class="content">
                <h3>${item.name}</h3>
                <div class="price">R${item.price.toFixed(2)}</div>
            </div>
        `;
        cartContainer.appendChild(cartItem);
    });

    // Add total and checkout button
    if (cart.length > 0) {
        const checkoutDiv = document.createElement('div');
        checkoutDiv.innerHTML = `
            <div class="cart-total">Total: R${total.toFixed(2)}</div>
            <a href="#" class="btn" onclick="checkout()">checkout now</a>
        `;
        cartContainer.appendChild(checkoutDiv);
    } else {
        const emptyCart = document.createElement('div');
        emptyCart.className = 'empty-cart';
        emptyCart.innerHTML = '<p>Your cart is empty</p>';
        cartContainer.appendChild(emptyCart);
    }

    // Update cart count
    updateCartCount();
}

// Function to update cart count badge
function updateCartCount() {
    const cartBadge = document.querySelector('.cart-count') || createCartBadge();
    cartBadge.textContent = cart.length;
    cartBadge.style.display = cart.length > 0 ? 'block' : 'none';
}

// Function to create cart badge
function createCartBadge() {
    const badge = document.createElement('span');
    badge.className = 'cart-count';
    badge.style.cssText = `
        position: absolute;
        top: -8px;
        right: -8px;
        background: var(--main-color);
        color: white;
        border-radius: 50%;
        padding: 4px 8px;
        font-size: 12px;
        display: none;
    `;
    cartBtn.style.position = 'relative';
    cartBtn.appendChild(badge);
    return badge;
}

// Function to handle checkout
function checkout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    showNotification(`Order placed! Total: R${total.toFixed(2)}`);
    cart = [];
    updateCartDisplay();
}

// Search functionality
const searchBox = document.querySelector('#search-box');
searchBox.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
        const itemName = item.querySelector('h3').textContent.toLowerCase();
        if (itemName.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});

// Function to show notifications
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--main-color);
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        z-index: 1000;
        animation: slideIn 0.5s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.5s ease-out';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Handle "Get yours now" button
document.querySelector('.home .btn').onclick = () => {
    document.querySelector('#Menu').scrollIntoView({ behavior: 'smooth' });
};

// Handle "Learn More" button
document.querySelector('.about .btn').onclick = () => {
    showNotification('Learn more about our coffee coming soon!');
};

// Initialize cart display
updateCartDisplay();