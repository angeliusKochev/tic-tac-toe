import React from "react";
import "./style.css";
import {
    START_GAME,
    UPDATE_PLAYER_ONE,
    UPDATE_PLAYER_TWO,
    useGameContext,
} from "../../providers/GameProvider";
import { Button } from "../../ui-components/Button/Button";

export default function PlayerSelection() {
    const { state, dispatch } = useGameContext();

    const handleStartGame = () => {
        if (state.playerOne.name === "" || state.playerTwo.name === "") {
            alert(
                "Please ensure both players have a name set to start the game!"
            );
            return;
        }
        dispatch({
            type: START_GAME,
        });
    };

    return (
        <div className="playerSelection">
            <h2 className="playerSelection__title">Who&apos;s Playing?</h2>

            <div className="playerSelection__playerNamesContainer">
                <div>
                    <input
                        type="text"
                        value={state.playerOne.name}
                        onChange={(e) =>
                            dispatch({
                                type: UPDATE_PLAYER_ONE,
                                payload: {
                                    ...state.playerOne,
                                    name: e.target.value,
                                },
                            })
                        }
                        className="playerSelection__input"
                        placeholder="Player one name..."
                    />
                    <p className="playerSelection__playerInfo">
                        Playing as crosses
                    </p>
                </div>

                <div>
                    <p className="playerSelection__vs">Vs</p>
                </div>

                <div>
                    <input
                        type="text"
                        value={state.playerTwo.name}
                        onChange={(e) =>
                            dispatch({
                                type: UPDATE_PLAYER_TWO,
                                payload: {
                                    ...state.playerTwo,
                                    name: e.target.value,
                                },
                            })
                        }
                        className="playerSelection__input"
                        placeholder="Player two name..."
                    />
                    <p className="playerSelection__playerInfo">
                        Playing as noughts
                    </p>
                </div>
            </div>

            <Button
                className="playerSelection__startButton"
                onClick={handleStartGame}
            >
                Start Game
            </Button>
        </div>
    );
}
