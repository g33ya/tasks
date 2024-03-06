import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempt, setAttempt] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);

    function startQuiz(): void {
        //if (attempt > 0) {
        setProgress(true);
        setAttempt(attempt - 1);
        // }
    }

    function stopQuiz(): void {
        setProgress(false);
    }

    function mulligan(): void {
        setAttempt(1 + attempt);
    }

    return (
        <span>
            <Button
                onClick={startQuiz}
                disabled={progress === true || attempt === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={progress === false}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={progress === true}>
                Mulligan
            </Button>
            <div>
                Number of Attempts: <span> {attempt} </span>
            </div>
            <div>
                In Progress: <span> {progress} </span>
            </div>
        </span>
    );
}
