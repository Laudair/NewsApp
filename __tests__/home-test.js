import React from 'react';
import Card from '../src/components/card';
import {render} from '@testing-library/react-native';

jest.mock('@react-navigation/native');
const article = {
  title: 'Article Title',
  publishedAt: '2021-04-25',
  content: 'LoremIpsum',
  author: 'AuthorName',
  urlToImage: 'url to image',
  url:
    'https://nypost.com/2021/04/24/new-federal-regulations-could-spur-cryptocurrency-crash/',
};

it('Renders Date', () => {
  const {getByText} = render(<Card article={article} />);
  const date = getByText('April, 25');
  expect(date).toBeDefined();
});
it('Renders title', () => {
  const {getByText} = render(<Card article={article} />);
  const title = getByText('Article Title');
  expect(title).toBeDefined();
});
it('Renders Author', () => {
  const {getByText} = render(<Card article={article} />);
  const author = getByText('AuthorName');
  expect(author).toBeDefined();
});
