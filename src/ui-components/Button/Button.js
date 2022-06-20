import React from "react";
import "./style.css";

export function Button({ onClick, className, children, testid }) {
    return (
        <button type="button" className={`btn ${className}`} onClick={onClick}>
            {children}
        </button>
    );
}
