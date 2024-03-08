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
            <Form.Group controlId="multipleChoice">
                <Form.Label>How do you feel?</Form.Label>
                <Form.Select value={currentChoice} onChange={updateChoice}>
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            The user is feeling {currentChoice}.
        </div>
    );
}
