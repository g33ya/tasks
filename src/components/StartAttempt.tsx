import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempt, setAttempt] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);

    function startQuiz(): void {
        if (attempt > 0) {
            setProgress(true);
            setAttempt(attempt - 1);
        }
    }

    function stopQuiz(): void {
        setProgress(false);
    }

    function Mulligan(): void {
        setAttempt(1 + attempt);
    }

    return <span></span>;
}
