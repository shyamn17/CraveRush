const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({ origin: "*" })); // Allow all origins (change in production)
app.use(express.json());

// Mock data (Replace with database or real API calls)
const restaurants = [
  { id: "1", name: "Pizza Palace", location: "Bangalore" },
  { id: "2", name: "Burger Barn", location: "Bangalore" }
];

const restaurantMenus = {
  "1": { menu: ["Margherita Pizza", "Pepperoni Pizza"] },
  "2": { menu: ["Cheese Burger", "Veggie Burger"] }
};

const instamartItems = [
  { id: "1", name: "Milk", category: "Dairy" },
  { id: "2", name: "Bread", category: "Bakery" }
];

// ✅ Get all restaurants
app.get("/api/restaurants", (req, res) => {
  res.json({ data: restaurants });
});

// ✅ Get menu for a specific restaurant (useRestaurant)
app.get("/api/restaurant-menu/:id", (req, res) => {
  const { id } = req.params;
  const menu = restaurantMenus[id] || { menu: [] };
  res.json({ data: menu });
});

// ✅ Get Instamart items (useInstamart)
app.get("/api/instamart", (req, res) => {
  res.json({ data: instamartItems });
});

// 🚀 Deploy to Vercel: No need for app.listen()
module.exports = app;
