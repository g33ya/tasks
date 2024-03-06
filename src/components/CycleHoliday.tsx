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
        } else if (holiday === "🐇") {
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
        } else if (holiday === "🐇") {
            setHoliday("🎆");
        }
    }
    <div>
        <div>
            <span>Holiday: {holiday}</span>;
        </div>
        <Button onClick={holidaysAlphabetized}>Advance by Alphabet</Button>;
        <Button onClick={byDate}>Advance by Date</Button>;
    </div>;
}
