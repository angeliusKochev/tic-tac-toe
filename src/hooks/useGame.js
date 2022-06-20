/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import {
    UPDATE_PLAYER_ONE,
    UPDATE_PLAYER_TWO,
    useGameContext,
} from "../providers/GameProvider";

export const USER_CROSS = "USER_CROSS";
export const USER_NOUGHT = "USER_NOUGHT";

export const WINNER_CROSS = "WINNER_CROSS";
export const WINNER_NOUGHT = "WINNDER_NOUGHT";
export const WINNER_DRAW = "WINNDER_DRAW";

export const useGame = () => {
    const { state, dispatch } = useGameContext();
    const [user, setUser] = useState(USER_CROSS);
    const [winner, setWinner] = useState(null);
    const [clicks, setClicks] = useState(0);
    const [game, setGame] = useState(Array(9).fill(null));

    const updateGame = (gameIndex, value) => {
        const gameCopy = [...game];
        gameCopy[gameIndex] = value;
        setGame(gameCopy);
    };

    const handleClick = (gameIndex) => {
        setClicks(clicks + 1);
        updateGame(gameIndex, user);
        setUser(user === USER_NOUGHT ? USER_CROSS : USER_NOUGHT);
    };

    useEffect(() => {
        checkForWin();
    }, [game]);

    useEffect(() => {
        if (winner === WINNER_CROSS) {
            dispatch({
                type: UPDATE_PLAYER_ONE,
                payload: {
                    ...state.playerOne,
                    score: state.playerOne.score + 1,
                },
            });
        } else if (winner === WINNER_NOUGHT) {
            dispatch({
                type: UPDATE_PLAYER_TWO,
                payload: {
                    ...state.playerTwo,
                    score: state.playerTwo.score + 1,
                },
            });
        }
    }, [winner]);

    const checkForWin = () => {
        let winnerFound = false;
        const winningLines = [
            [0, 1, 2],
            [0, 3, 6],
            [0, 4, 8],
            [1, 4, 7],
            [3, 4, 5],
            [6, 7, 8],
            [2, 5, 8],
            [2, 4, 6],
        ];

        for (const line of winningLines) {
            const [square1, square2, square3] = line;
            if (
                game[square1] !== null &&
                game[square1] === game[square2] &&
                game[square2] === game[square3]
            ) {
                winnerFound = true;
                setWinner(
                    game[square1] === USER_CROSS ? WINNER_CROSS : WINNER_NOUGHT
                );
                break;
            }
        }

        if (clicks === 9 && winnerFound === false) {
            setWinner(WINNER_DRAW);
        }
    };

    const resetGame = () => {
        setUser(USER_CROSS);
        setWinner(null);
        setClicks(0);
        setGame(Array(9).fill(null));
    };

    return {
        game,
        winner,
        resetGame,
        handleClick,
    };
};
