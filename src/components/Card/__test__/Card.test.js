import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Card from '../index';

const tree = {
  "name": "Japanese red pine",
  "species_name": "Pinus densiflora",
  "image": "https://upload.wikimedia.org/wikipedia/commons/f/f0/Pinus_syluestriformis_%28Takenouchi%29T.Wang_ex_Cheng.JPG",
};

describe('<Card />', () => {
  test('renders with the correct data', () => {
    const { getByText, getByTestId } = render(
      <Card
        title={tree.name}
        text={tree.species_name}
        image={tree.image}
      />
    );
  
    const title = getByText(tree.name);
    const text = getByText(tree.species_name);
    const image = getByTestId('card-image');
  
    expect(title).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(image).toHaveAttribute('src', tree.image);
    expect(image).toHaveAttribute('alt', tree.name);
  });
  
  test('renders with the image initialy not showing', () => {
    const { getByTestId } = render(
      <Card
        title={tree.name}
        text={tree.species_name}
        image={tree.image}
      />
    );
  
    const imageContaner = getByTestId('card-image-container');
    expect(imageContaner).not.toBeVisible();
  });

  test('shows the image when the button is clicked, and hides it when button is clicked again', () => {
    const { getByTestId } = render(
      <Card
        title={tree.name}
        text={tree.species_name}
        image={tree.image}
      />
    );
  
    const imageContaner = getByTestId('card-image-container');
    const button = getByTestId('card-button');

    userEvent.click(button);
    expect(imageContaner).toBeVisible();

    userEvent.click(button);
    expect(imageContaner).not.toBeVisible();
  });

  test('changes the button text when the it is clicked', () => {
    const { getByTestId } = render(
      <Card
        title={tree.name}
        text={tree.species_name}
        image={tree.image}
      />
    );

    const hideImageText = 'Hide Image';
    const showImageText = 'Show Image';
  
    const button = getByTestId('card-button');

    expect(button).toHaveTextContent(showImageText);

    userEvent.click(button);
    expect(button).toHaveTextContent(hideImageText);

    userEvent.click(button);
    expect(button).toHaveTextContent(showImageText);
  });
});
