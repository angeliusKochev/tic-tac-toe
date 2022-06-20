import React from "react";
import { WINNER_CROSS, WINNER_DRAW, WINNER_NOUGHT } from "../../hooks/useGame";
import { useGameContext } from "../../providers/GameProvider";
import { Button } from "../../ui-components/Button/Button";
import "./style.css";

export default function Outcome({ winner, resetGame }) {
    const { state } = useGameContext();
    return (
        <div className="outcome">
            {winner === WINNER_CROSS && (
                <h2
                    className="outcome__winner"
                    data-testid="outcome-winner-cross"
                >
                    {state.playerOne.name} Wins! 🎉
                </h2>
            )}
            {winner === WINNER_NOUGHT && (
                <h2
                    className="outcome__winner"
                    data-testid="outcome-winner-nought"
                >
                    {state.playerTwo.name} Wins! 🎉
                </h2>
            )}
            {winner === WINNER_DRAW && (
                <h2
                    className="outcome__winner"
                    data-testid="outcome-winner-draw"
                >
                    Draw! 🤷‍♂️
                </h2>
            )}
            {winner !== null && (
                <Button
                    className="outcome__playAgainButton"
                    onClick={resetGame}
                    testid="outcome-playAgainBtn"
                >
                    Play Again!
                </Button>
            )}
        </div>
    );
}
