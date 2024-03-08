import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [isHappy, setIsHappy] = useState<boolean>(true);
    const [editMode, setEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setStudent] = useState<boolean>(true);

    // THIS WILL BE FOR EDITMODE
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
            <div>The user is {isStudent ? "a student" : "not a student"}.</div>
        </div>
    );
}
