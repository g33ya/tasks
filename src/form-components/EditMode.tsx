import React, { useState } from "react";

export function EditMode(): JSX.Element {
    const [isHappy, setIsHappy] = useState<boolean>(true);

    // This is the Control
    function updateHappiness(event: React.ChangeEvent<HTMLInputElement>) {
        setIsHappy(event.target.checked);
    }
    return (
        <div>
            <Form.Check
                type="switch"
                id="is-happy-check"
                label="Happy?"
                checked={isHappy}
                onChange={updateHappiness}
            />
            <div>The user is {isHappy ? "happy" : "not happy"}.</div>
        </div>
    );
}
