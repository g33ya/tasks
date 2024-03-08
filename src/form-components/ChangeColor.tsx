import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    // This is the State (Model)
    const [color, setColor] = useState<string>("");

    // This is the Control
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    // This is the View
    return (
        <div>
            <h3>Change Color</h3>
            <Form.Check
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-red"
                label="red"
                value="red"
                checked={color === "red"}
                inline
            />
            <Form.Check
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-blue"
                label="blue"
                value="blue"
                checked={color === "blue"}
                inline
            />
            <Form.Check
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-green"
                label="green"
                value="green"
                checked={color === "green"}
                inline
            />
            <Form.Check
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-orange"
                label="orange"
                value="orange"
                checked={color === "orange"}
                inline
            />
            <Form.Check
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-purple"
                label="purple"
                value="purple"
                checked={color === "purple"}
                inline
            />
            <Form.Check
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-pink"
                label="pink"
                value="pink"
                checked={color === "pink"}
                inline
            />
            <Form.Check
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-cyan"
                label="cyan"
                value="cyan"
                checked={color === "cyan"}
                inline
            />
            <Form.Check
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-yellow"
                label="yellow"
                value="yellow"
                checked={color === "yellow"}
                inline
            />
            <div>
                You have chosen{" "}
                <div
                    data-testid="colored-box"
                    style={{ backgroundColor: color, display: "inline-block" }}
                >
                    {color}
                </div>
                .
            </div>
        </div>
    );
}
