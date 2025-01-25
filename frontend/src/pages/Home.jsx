import React, { useState, useEffect } from "react";
import { ClickButton, Header, Scoreboard, MessagePopup } from "../components/Ui.jsx";
import { clickButton, getUserData } from "../api/api";

const Home = () => {
    const [username] = useState("testuser"); // Default username (later add login)
    const [clicks, setClicks] = useState(0);
    const [scores, setScores] = useState(0);
    const [rewards, setRewards] = useState(0);
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchUserData = async () => {
            const data = await getUserData(username);
            if (data) {
                setClicks(data.clicks);
                setScores(data.scores);
                setRewards(data.rewards);
            }
        };
        fetchUserData();
    }, [username]);

    const handleClick = async () => {
        setIsLoading(true);
        try {
            const response = await clickButton(username);
            setClicks(response.clicks);
            setScores(response.scores);
            setRewards(response.rewards);
            setMessage(response.message);
        } catch (error) {
            toast.error("Failed to process click. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="home">
            <Header />
            <div className="scoreboard-box">
                <Scoreboard clicks={clicks} scores={scores} rewards={rewards} />
            </div>
            <MessagePopup message={message} onClose={() => setMessage("")} />
            <ClickButton handleClick={handleClick} />
            <div className="instructions">
                <p>Click the cookie to earn points!</p>
                <p>50% chance for bonus points, 25% chance for prizes!</p>
            </div>
        </div>
    );
};

export default Home;
