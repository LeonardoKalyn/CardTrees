import React from 'react';
import { render } from '@testing-library/react';
import CardsList from '../CardsList';

const treesList = [{
  "name": "Japanese red pine",
  "species_name": "Pinus densiflora",
  "image": "https://upload.wikimedia.org/wikipedia/commons/f/f0/Pinus_syluestriformis_%28Takenouchi%29T.Wang_ex_Cheng.JPG",
}];
const errorText = 'An error message!';

describe('<CardsList />', () => {
  test('renders with a list of trees', () => {
    const { getByTestId, getAllByTestId } = render(<CardsList data={treesList} />);
  
    const cardsList = getByTestId('cards-list');
    const cardsListItems = getAllByTestId('cards-list-item');
  
    expect(cardsList).toBeInTheDocument();
    expect(cardsListItems.length).toBe(treesList.length);
  });

  test('renders an "empty list" message when the list is empty', () => {
    const { getByTestId } = render(<CardsList data={[]} />);
  
    const cardsList = getByTestId('cards-list');
    const emptyListItem = getByTestId('empty-list');
    const emptyListMessage = getByTestId('empty-list-message');
    const expectedMessageText = 'There are no trees to show =('
  
    expect(cardsList).toBeInTheDocument();
    expect(emptyListItem).toBeInTheDocument();
    expect(emptyListMessage).toBeInTheDocument();
    expect(emptyListMessage).toHaveTextContent(expectedMessageText);
  });

  test('renders an error message when there is an error', () => {
    const { getByTestId } = render(<CardsList error={errorText} />);
  
    const errorContainer= getByTestId('error-container');
    const error = getByTestId('error');
  
    expect(errorContainer).toBeInTheDocument();
    expect(error).toBeInTheDocument();
    expect(error).toHaveTextContent(errorText);
  });
});
