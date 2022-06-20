import React from "react";
import { USER_CROSS, USER_NOUGHT } from "../../hooks/useGame";
import "./style.css";

const GameSquare = ({ type, disabled, handleClick }) => {
    return (
        <div
            className={
                "gameSquare " + (type || disabled ? "has-value" : "no-value")
            }
            onClick={type || disabled ? undefined : handleClick}
        >
            {type === USER_CROSS && <p>X</p>}
            {type === USER_NOUGHT && <p>O</p>}
        </div>
    );
};

export default GameSquare;
