import React from 'react';
import Home from '../src/pages/home';
import {render, fireEvent} from '@testing-library/react-native';

it('Renders hello world', () => {
  const {getByText} = render(<Home news={[{title: 'Fodase'}]} />);
  const text = getByText('Fodase');
  expect(text).toBeDefined();
});
// // <Text testID="title-hyperlink"
// const news = {
//   title: 'fodase'
// }

// it('Renders details page', () =>{
//   const {getByTestId} = render(<Details news={news} />);
//   const text = getByTestId(`title-hyperlink-${news.title}`);
//   // fireEvent.press(text); se der brincar e ver um teste
//   expect(text).toBeDefined();
// })
