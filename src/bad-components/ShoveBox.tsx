import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface shoveBoxProps {
    position: number;
    setPosition: (newPosition: number) => void;
}

function ShoveBoxButton({ position, setPosition }: shoveBoxProps) {
    return (
        <Button onClick={() => setPosition(4 + position)}>Shove the Box</Button>
    );
}

function MoveableBox({ position }: shoveBoxProps): JSX.Element {
    return (
        <div
            data-testid="moveable-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: "lightblue",
                border: "1px solid blue",
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: position + "px"
            }}
        ></div>
    );
}

export function ShoveBox(): JSX.Element {
    const box = MoveableBox();

    return (
        <div>
            <h3>Shove Box</h3>
            {/* <span>The box is at: {box.position}</span>
            <div>
                <ShoveBoxButton
                    position={box.position}
                    setPosition={box.setPosition}
                ></ShoveBoxButton>
                {box}
            </div> */}
        </div>
    );
}
