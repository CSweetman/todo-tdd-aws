import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Todo from '../Todo';

const mockedSetTodos = jest.fn()

const addTask = (taskName: string) => {
  const inputElement = screen.getByPlaceholderText('Insert task...')
  const buttonElement = screen.getByRole('button', {name: 'Submit'})
  fireEvent.change(inputElement, { target: { value: taskName } })
  fireEvent.click(buttonElement)
}

test('3 elements should be added', () => {
  render(<Todo />);
  addTask("Go to the store")
  addTask("Clean the dishes")
  addTask("Take out the trash")
  const divElements = screen.queryAllByTestId("task-item")
  expect(divElements.length).toBe(3)
});

test('should remove the 2nd item when the 2nd item is clicked', () => {
  render(<Todo />);
  addTask("Go to the store")
  addTask("Clean the dishes")
  addTask("Take out the trash")
  fireEvent.click(screen.getByText('Clean the dishes'))
  const divElements = screen.queryAllByTestId('task-item')
  expect(divElements.length).toBe(2)
})

// test('should be able to type in input element', () => {
//   render(<Todo todos={['Work out', 'Get groceries', 'Clean house']} setTodos={mockedSetTodos} />);
//   const divElements = screen.queryAllByRole('generic')
//   console.log(divElements[1].textContent)
//   expect(divElements.length-1).toBe(3)
// });
