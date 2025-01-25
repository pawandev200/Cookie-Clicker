import React, { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Toastify CSS

// Button Component
const ClickButton = ({ handleClick, isLoading }) => (
    <button
        onClick={handleClick}
        className={`click-button ${
            isLoading ? "opacity-50 cursor-not-allowed" : "hover:scale-110"
        }`}
        disabled={isLoading}
    >
        Click Me!
        🍪
    </button>
);

// Header Component
const Header = () => (
    <header className="header text-center my-4">
        <h1 className="text-4xl font-bold text-primary">Cookie Clicker</h1>
    </header>
);

// Scoreboard Component
const Scoreboard = ({ clicks, scores, rewards }) => (
    <div className="scoreboard text-center space-y-2">
        <h2 className="text-2xl font-bold">Scoreboard</h2>
        <p className="text-xl">Clicks: {clicks}</p>
        <p className="text-xl">Total Score: {scores}</p>
        <p className="text-xl text-muted-foreground">Prizes Won: {rewards}</p>
    </div>
);

// Prize Popup Component
const MessagePopup = ({ message }) => {
    useEffect(() => {
        if (message) {
            toast(message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
            });
        }
    }, [message]);

    return <ToastContainer />;
};

// Export all components
export { ClickButton, Header, Scoreboard, MessagePopup };
