import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    // This is the State (Model)
    const [currentChoice, setCurrentChoice] = useState<string>(options[0]);
    // This is the Control
    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setCurrentChoice(event.target.value);
    }
    return (
        <div>
            <h3>Multiple Choice Questions</h3>
            <Form.Group controlId="multipleChoice">
                <Form.Label>
                    Select an answer from the dropdown below!
                </Form.Label>
                <Form.Select value={currentChoice} onChange={updateChoice}>
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {expectedAnswer === currentChoice && <div>✔️</div>}
            {expectedAnswer !== currentChoice && <div>❌</div>}
        </div>
    );
}
