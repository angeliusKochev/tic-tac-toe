import React from "react";
import { useGameContext } from "../../providers/GameProvider";
import GameBoard from "../GameBoard/GameBoard";
import PlayerSelection from "../PlayerSelection/PlayerSelection";
import Score from "../Score/Score";
import "./style.css";

export default function GameContainer() {
    const { state } = useGameContext();

    return (
        <div className="gameContainer">
            <h1 className="gameContainer__title">Tic-Tac-Toe</h1>
            {state.startGame === false && <PlayerSelection />}

            {state.startGame === true && (
                <>
                    <Score />
                    <GameBoard />
                </>
            )}
        </div>
    );
}
