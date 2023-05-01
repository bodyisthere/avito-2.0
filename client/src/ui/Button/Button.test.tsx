import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Button } from "./Button";

describe("Тест UI кнопки", () => {
  test("Тест children'ов кнопки", () => {
    render(
      <Button>
        Кликни на меня
      </Button>,
    );
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Кликни на меня");
  });
  test("Тест css свойств", () => {
    render(
      <Button 
        background="pink" 
        size="medium" 
        className="test"
      >
        Кликни на меня
      </Button>,
    );
    const button = screen.getByRole("button");

    expect(button).toHaveClass("pink");
    expect(button).not.toHaveClass("lightblue");

    expect(button).toHaveClass("medium");
    expect(button).not.toHaveClass("big");

    expect(button).toHaveClass("test");
  });
});