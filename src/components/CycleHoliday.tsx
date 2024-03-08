import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type holiday = "🎆" | "🎃" | "🎄" | "🦃" | "🐇";

    const [holiday, setHoliday] = useState<holiday>("🎆");

    function holidaysAlphabetized(): void {
        if (holiday === "🎆") {
            setHoliday("🎃");
        } else if (holiday === "🎃") {
            setHoliday("🦃");
        } else if (holiday === "🦃") {
            setHoliday("🎄");
        } else if (holiday === "🎄") {
            setHoliday("🐇");
        } else {
            setHoliday("🎆");
        }
    }

    function byDate(): void {
        if (holiday === "🎆") {
            setHoliday("🎃");
        } else if (holiday === "🎃") {
            setHoliday("🦃");
        } else if (holiday === "🦃") {
            setHoliday("🎄");
        } else if (holiday === "🎄") {
            setHoliday("🐇");
        } else {
            setHoliday("🎆");
        }
    }
    return (
        <div>
            <div>
                <h3>Cycle Holidays</h3>
            </div>
            <div>
                <span>Holiday: {holiday}</span>
            </div>
            <Button onClick={holidaysAlphabetized}>Advance by Alphabet</Button>
            <Button onClick={byDate}>Advance by Year</Button>
        </div>
    );
    return <div>Cycle Holiday</div>;
}
