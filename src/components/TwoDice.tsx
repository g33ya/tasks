import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(1);
    const [rightDie, setRightDie] = useState<number>(2);

    function rollLeftDie(): void {
        setLeftDie(d6());
    }

    function rollRightDie(): void {
        setRightDie(d6());
    }

    return (
        <div>
            <div>
                <h3>Two Dice</h3>
            </div>
            <Button onClick={rollLeftDie}>Roll Left</Button>
            <span data-testid="left-die">{leftDie}</span>
            <Button onClick={rollRightDie}>Roll Right</Button>
            <span data-testid="right-die">{rightDie}</span>
            {leftDie === 1 && rightDie === 1 && <div>You Lose!</div>}
            {leftDie === rightDie && leftDie !== 1 && <div>You Win!!</div>}
        </div>
    );
    return <div>Two Dice</div>;
}
