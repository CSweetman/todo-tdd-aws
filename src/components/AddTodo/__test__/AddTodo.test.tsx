import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import AddTodo from '../AddTodo';

const mockedSetTodos = jest.fn()

test('should be able to type in input element', () => {
  render(<AddTodo todos={[]} setTodos={mockedSetTodos} />);
  const inputElement = screen.getByPlaceholderText("Insert task...");
  fireEvent.change(inputElement, { target: { value: "Go workout" } })
  expect((inputElement as HTMLInputElement).value).toBe("Go workout")
});


test('should be able to type in input element', () => {
  render(<AddTodo todos={[]} setTodos={mockedSetTodos} />);
  const inputElement = screen.getByPlaceholderText("Insert task...");
  const buttonElement = screen.getByRole("button", { name: "Submit" })
  fireEvent.change(inputElement, { target: { value: "Go workout" } })
  fireEvent.click(buttonElement)
  expect((inputElement as HTMLInputElement).value).toBe("")
});
