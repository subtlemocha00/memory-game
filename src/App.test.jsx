import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
	it("renders the initial heading", () => {
		render(<App />);
		expect(screen.getByRole("heading")).toHaveTextContent(
			"Magnificent Monkeys"
		);
	});

	it("changes the heading when the button is clicked", async () => {
		const user = userEvent.setup();
		render(<App />);
		await user.click(screen.getByRole("button", { name: "Click Me!" }));
		expect(screen.getByRole("heading")).toHaveTextContent("Radical Rhinos");
	});
});
