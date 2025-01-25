import React, { useState, useEffect } from "react";
import ClickButton from "../components/ClickButton";
import Scoreboard from "../components/Scoreboard";
import PrizePopup from "../components/PrizePopup";
import { clickButton, getUserData } from "../api/api";

const Home = () => {
    const [username] = useState("testuser");  // Default username (later add login)
    const [clicks, setClicks] = useState(0);
    const [scores, setScores] = useState(0);  // Added scores state
    const [rewards, setRewards] = useState(0);
    const [message, setMessage] = useState("");

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
        const response = await clickButton(username);
        setClicks(response.clicks);
        setScores(response.scores);
        setRewards(response.rewards);
        setMessage(response.message);
    };

    return (
        <div className="home">
            <ClickButton handleClick={handleClick} />
            <Scoreboard clicks={clicks} scores={scores} rewards={rewards} />
            <PrizePopup message={message} onClose={() => setMessage("")} />
        </div>
    );
};

export default Home;