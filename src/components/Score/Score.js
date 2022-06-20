import React from "react";
import { useGameContext } from "../../providers/GameProvider";
import "./style.css";

export default function Score() {
    const { state } = useGameContext();

    return (
        <div className="score">
            <h4 className="score__title">Score</h4>

            <p className="score__player">
                <span>{state.playerOne.name}:</span>
                <span>{state.playerOne.score}</span>
            </p>
            <p className="score__player">
                <span>{state.playerTwo.name}:</span>
                <span>{state.playerTwo.score}</span>
            </p>
        </div>
    );
}
