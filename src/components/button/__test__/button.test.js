import React from 'react';
import ReactDOM from 'react-dom'
import Button from '../button'
import { render, cleanup } from '@testing-library/react';

afterEach(cleanup)

it('renders without crashing', () => {
  const div = document.createElement("div");
  render(<Button></Button>, div)
})

it('renders button correctly', () => {
  const {getByTestId} = render(<Button label="click me"></Button>)
  expect(getByTestId('button')).toHaveTextContent("click me")
})

it('render button with props', () => {
    const {getByTestId} = render(<Button label="save"></Button>)
    expect(getByTestId('button')).toHaveTextContent("save")
})

it('render other thing', () => {
      const {getByTestId} = render(<Button label="thing"></Button>)
      expect(getByTestId('button')).toHaveTextContent('thing')
    })