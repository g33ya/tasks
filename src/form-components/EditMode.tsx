import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setStudent] = useState<boolean>(true);

    function editUserName(event: React.ChangeEvent<HTMLInputElement>) {
        setUserName(event.target.value);
    }

    function switchEditMode() {
        setEditMode(!editMode);
    }

    function switchStudentStatus() {
        setStudent(!isStudent);
    }

    return (
        <div>
            <div>
                <Form.Check
                    type="switch"
                    id="is-student"
                    label="Switch Edit Mode"
                    checked={editMode}
                    onChange={switchEditMode}
                />
            </div>
            <div>
                {editMode && (
                    <Form.Check
                        type="checkbox"
                        id="is-happy-check"
                        label="Are you a student?"
                        checked={isStudent}
                        onChange={switchStudentStatus}
                    />
                )}
            </div>
            <div>
                {editMode && (
                    <Form.Group controlId="userName">
                        <Form.Label>Change user name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={userName}
                            onChange={editUserName}
                        />
                    </Form.Group>
                )}
            </div>
            <div>
                {userName} is {isStudent ? "a student" : "not a student"}.
            </div>
        </div>
    );
}
