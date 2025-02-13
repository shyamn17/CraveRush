const fetch = require("node-fetch");

exports.handler = async function () {
    try {
        const response = await fetch("YOUR_ACTUAL_RESTAURANTS_API_URL");
        if (!response.ok) throw new Error("Failed to fetch API");

        const data = await response.json();
        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(data),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Backend Error" }),
        };
    }
};
