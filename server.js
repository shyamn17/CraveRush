require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
const PORT = process.env.PORT || 7000;

app.use(express.json());
app.use(cors());

const SWIGGY_API_BASE = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true";

// Proxy Endpoint
app.get("/api/menu", async (req, res) => {
    const { restaurantId, lat = "12.96340", lng = "77.58550" } = req.query;

    if (!restaurantId) {
        return res.status(400).json({ error: "Missing restaurantId parameter" });
    }

    const apiUrl = `${SWIGGY_API_BASE}&lat=${lat}&lng=${lng}&restaurantId=${restaurantId}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.ok) {
            res.json(data);
        } else {
            res.status(response.status).json({ error: "Failed to fetch menu", details: data });
        }
    } catch (error) {
        console.error("Error fetching menu:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
