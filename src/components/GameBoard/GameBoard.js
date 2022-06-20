import React from "react";
import { useGame } from "../../hooks/useGame";
import GameSquare from "../GameSquare/GameSquare";
import Outcome from "../Outcome/Outcome";
import "./style.css";

const GameBoard = () => {
    const { game, winner, resetGame, handleClick } = useGame();

    return (
        <div className="gameBoard">
            <div className="gameBoard__inner">
                {game.map((gameSquare, index) => {
                    return (
                        <GameSquare
                            key={index}
                            type={gameSquare}
                            handleClick={() => handleClick(index)}
                            disabled={winner !== null}
                        />
                    );
                })}
            </div>

            <Outcome winner={winner} resetGame={resetGame} />
        </div>
    );
};

export default GameBoard;
