import { FC } from 'react';

import ListItem, { ListItemProps } from './ListItem';

export type ListProps = {
  items: ListItemProps[];
};

const List: FC<ListProps> = ({ items }) => (
  <ul className="divide-y divide-gray-600">
    {items.map((item) => (
      <ListItem {...item} />
    ))}
  </ul>
);

export default List;
