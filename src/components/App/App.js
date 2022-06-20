import React from "react";
import "./App.css";
import GameProvider from "../../providers/GameProvider";
import GameContainer from "../GameContainer/GameContainer";

const App = () => {
    return (
        <div className="App">
            <GameProvider>
                <GameContainer />
            </GameProvider>
        </div>
    );
};

export default App;
