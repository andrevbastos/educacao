import React from 'react';

function Canva() {
    return (
        <div>
            <canvas 
                id="gameCanvas" 
                width="1600" 
                height="900" 
            />
            <script src="game/canvas.js" />
            <script src="game/entities.js" />
            <script src="game/gameScript.js" />
        </div>
    );
};

export default Canva;