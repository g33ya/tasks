import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    // This is the State (Model)
    const [emotion, setEmotion] = useState<string>("happy");

    // This is the Control
    function updateEmotion(event: React.ChangeEvent<HTMLSelectElement>) {
        setEmotion(event.target.value);
        return (
            <div>
                <Form.Group controlId="userEmotions">
                    <Form.Label>How do you feel?</Form.Label>
                    <Form.Select value={emotion} onChange={updateEmotion}>
                        <option value="happy">Happy</option>
                        <option value="sad">Sad</option>
                        <option value="angry">Angry</option>
                    </Form.Select>
                </Form.Group>
                The user is feeling {emotion}.
            </div>
        );
    }
}
