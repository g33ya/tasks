import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptRequest, setAttemptRequest] = useState<string>("");
    const requestNum = parseInt(attemptRequest) || 0;
    return (
        <div>
            <h3>Give Attempts</h3>
            <div>
                <Form.Group controlId="attemptRequest">
                    <Form.Label>Requested number of attempts:</Form.Label>
                    <Form.Control
                        type="number"
                        value={attemptRequest}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setAttemptRequest(event.target.value)}
                    />
                </Form.Group>
            </div>
            <div>
                <Button
                    onClick={() => setAttemptsLeft(attemptsLeft - 1)}
                    disabled={attemptsLeft === 0}
                >
                    use
                </Button>
                <Button onClick={() => setAttemptsLeft(attemptsLeft + 1)}>
                    gain
                </Button>
            </div>
        </div>
    );
}
