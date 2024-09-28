"use client";

import { useEffect, useState } from "react";

const Home = () => {
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch("http://localhost:5000/api/message")
            .then((response) => response.json())
            .then((data) => {
                setMessage(data.message);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="p-10 bg-white rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold mb-4">
                    Frontend-Backend Integration
                </h1>
                <p
                    className={`text-lg ${
                        message ? "text-green-500" : "text-red-500"
                    }`}
                >
                    Message from Backend: {message || "No message available"}
                </p>
            </div>
        </div>
    );
};

export default Home;
