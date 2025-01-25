import React from "react";

const Scoreboard = ({ clicks, scores, rewards }) => {
    return (
        <div className="scoreboard">
            <h2>Scoreboard</h2>
            <p>Clicks: {clicks}</p>
            <p>Total Score: {scores}</p>
            <p>Prizes Won: {rewards}</p>
        </div>
    );
};

export default Scoreboard;