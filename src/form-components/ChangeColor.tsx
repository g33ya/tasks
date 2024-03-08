import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    // This is the State (Model)
    const [emotion, setEmotion] = useState<string>("happy");

    // This is the Control
    function updateEmotion(event: React.ChangeEvent<HTMLInputElement>) {
        setEmotion(event.target.value);
    }

    // This is the View
    return (
        <div>
            <Form.Check
                type="radio"
                name="emotions"
                onChange={updateEmotion}
                id="emotion-check-happy"
                label="Happy"
                value="happy"
                checked={emotion === "happy"}
                inline
            />
            <Form.Check
                type="radio"
                name="emotions"
                onChange={updateEmotion}
                id="emotion-check-sad"
                label="Sad"
                value="sad"
                checked={emotion === "sad"}
                inline
            />
            <Form.Check
                type="radio"
                name="emotions"
                onChange={updateEmotion}
                id="emotion-check-angry"
                label="Angry"
                value="angry"
                checked={emotion === "angry"}
                inline
            />
            <div>The user is feeling {emotion}.</div>
        </div>
    );
}
