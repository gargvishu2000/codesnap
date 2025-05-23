"use client";

import React from "react";
import { Textarea } from "@nextui-org/react";
import { useCodeStore } from "@/stores";

export default function UserInputBox() {
    const { userInput, setUserInput } = useCodeStore();

    return (
        <Textarea
            label="Standard Input"
            placeholder="Enter input for your program"
            minRows={4}
            value={userInput}
            onValueChange={setUserInput}
            className="w-full"
        />
    );
}
