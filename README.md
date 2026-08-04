# ShopEasy — React E-Commerce Website

A fully working online shopping website built with React. Users can browse products, search, filter by category, sort by price, and add items to a shopping cart that saves automatically.

🔗 **Live site:** https://ecommerce-frontend-opal-seven.vercel.app/

## What this project does

- Shows real products fetched from an API, with images, prices, and descriptions
- Lets users search for products by name
- Lets users filter products by category
- Lets users sort products by price (low to high, high to low) or name
- Has a shopping cart — add items, remove items, change quantity
- Saves the cart in the browser, so it's still there even after refreshing the page
- Shows a "product not found" style page if you visit a wrong URL
- Works well on phones, tablets, and computers

## Built with

- **React** — for building the website using reusable components
- **Vite** — fast tool for running and building the project
- **Tailwind CSS** — for styling
- **React Router** — for moving between pages without reloading
- **Context API** — for managing the shopping cart across the whole app
- **Axios** — for getting product data from the API
- **DummyJSON API** — free API used for product data
- **Vercel** — used to host the live website
## How to run this project on your own computer

1. Clone this repository
git clone https://github.com/Deep-Roshan4600/ecommerce-frontend.git

2. Go into the project folder
cd ecommerce-frontend

3. Install the required packages
npm install

4. Start the project
npm run dev

5. Open the link shown in your terminal (usually `http://localhost:5173`)

## What I learned building this

This was my first full React project. I learned how to:
- Build reusable components
- Fetch and display data from an API
- Manage loading and error states properly
- Use React Router for multi-page navigation
- Use Context API to share data (like the cart) across different parts of the app
- Store data in the browser using localStorage
- Make a website responsive for all screen sizes
- Deploy a React project live using Vercel