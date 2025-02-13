const fetch = require("node-fetch");

exports.handler = async function (event) {
    const resId = event.queryStringParameters.id;

    if (!resId) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: "Restaurant ID is required" }),
        };
    }

    try {
        const response = await fetch(`YOUR_ACTUAL_RESTAURANT_MENU_API_URL?id=${resId}`);
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
