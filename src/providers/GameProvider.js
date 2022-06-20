import React, { createContext, useContext, useReducer } from "react";

export const GameContext = createContext(undefined);

export const UPDATE_PLAYER_ONE = "UPDATE_PLAYER_ONE";
export const UPDATE_PLAYER_TWO = "UPDATE_PLAYER_TWO";
export const START_GAME = "START_GAME";

const gameReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_PLAYER_ONE: {
            return {
                ...state,
                playerOne: action.payload,
            };
        }
        case UPDATE_PLAYER_TWO: {
            return {
                ...state,
                playerTwo: action.payload,
            };
        }
        case START_GAME: {
            return { ...state, startGame: true };
        }
        default: {
            return state;
        }
    }
};

export const useGameContext = () => {
    const context = useContext(GameContext);
    if (context === undefined) {
        throw new Error("useGameContext must be used within an GameProvider");
    }
    return context;
};

export default function GameProvider({ children }) {
    const initialState = {
        playerOne: { name: "", score: 0 },
        playerTwo: { name: "", score: 0 },
        startGame: false,
    };
    const [state, dispatch] = useReducer(gameReducer, initialState);
    const value = { state, dispatch };

    return (
        <GameContext.Provider value={value}>{children}</GameContext.Provider>
    );
}
