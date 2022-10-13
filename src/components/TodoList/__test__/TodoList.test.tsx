import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import TodoList from '../TodoList';

const mockedSetTodos = jest.fn()

test('should be no items in the todo list if nothing is added', () => {
  render(<TodoList todos={[]} setTodos={mockedSetTodos} />);
  const divElements = screen.queryAllByRole('generic')
  expect(divElements.length-1).toBe(0)
});


test('should 3 items in the todo list when 3 items are passed into the list', () => {
  render(<TodoList todos={['Work out', 'Get groceries', 'Clean house']} setTodos={mockedSetTodos} />);
  const divElements = screen.queryAllByTestId('task-item')
  expect(divElements.length).toBe(3)
});


