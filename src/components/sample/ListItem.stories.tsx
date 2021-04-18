import React from 'react';
import { Story } from '@storybook/react';

import ListItem, { ListItemProps } from './ListItem';
import dog from './dog.jpg';

export default {
  title: 'sample/ListItem',
  component: ListItem,
};

const Template: Story<ListItemProps> = (args: ListItemProps) => (
  <ListItem image={args.image} title={args.title} author={args.author} />
);

export const Default = Template.bind({});
Default.args = {
  image: dog,
  title: 'サンプルブック１',
  author: '作者は犬',
};
