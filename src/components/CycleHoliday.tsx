import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type holiday =
        | "Fourth of July"
        | "Halloween"
        | "Christmas"
        | "Thanksgiving"
        | "Easter";

    const [holiday, setHoliday] = useState<holiday>("Fourth of July");

    function holidaysAlphabetized(): void {
        if (holiday === "Fourth of July") {
            setHoliday("Halloween");
        } else if (holiday === "Halloween") {
            setHoliday("Thanksgiving");
        } else if (holiday === "Thanksgiving") {
            setHoliday("Christmas");
        } else if (holiday === "Christmas") {
            setHoliday("Easter");
        } else if (holiday === "Easter") {
            setHoliday("Fourth of July");
        }
    }

    function byDate(): void {
        if (holiday === "Fourth of July") {
            setHoliday("Halloween");
        } else if (holiday === "Halloween") {
            setHoliday("Thanksgiving");
        } else if (holiday === "Thanksgiving") {
            setHoliday("Christmas");
        } else if (holiday === "Christmas") {
            setHoliday("Easter");
        } else if (holiday === "Easter") {
            setHoliday("Fourth of July");
        }
    }

    return <div>Cycle Holiday</div>;
}
