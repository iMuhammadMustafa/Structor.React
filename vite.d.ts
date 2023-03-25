import { render, act, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

declare global {
    const render = render
    const act =  act
    const testScreen = screen
    const userEvent = userEvent
}

// declare const render: typeof render
// declare const act =  typeofact
// declare const testScreen = typeof screen
// declare const userEvent = typeof userEvent

export {}
