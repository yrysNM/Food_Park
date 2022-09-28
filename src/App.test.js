import { screen, render } from "@testing-library/react";
import App from "./components/app/App";

test('Testing our project', () => {
    render(<App />)
    const linkElement = screen.getByText(/learn react/i)

    expect(linkElement).toBeInTheDocument();
})