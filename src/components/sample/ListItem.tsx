import { FC } from 'react';

export type ListItemProps = {
  image: string;
  title: string;
  author: string;
};

const ListItem: FC<ListItemProps> = ({ image, title, author }) => (
  <article className="p-2 flex space-x-4">
    <img className="flex-none w-16 h-16 rounded-lg" src={image} alt="" />
    <div>
      <dl>
        <div>
          <dt className="sr-only">Title</dt>
          <dd className="text-2xl font-bold">{title}</dd>
        </div>
        <div className="mt-0.5">
          <dt className="sr-only">Author</dt>
          <dd className="text-sm font-semibold text-indigo-500">By {author}</dd>
        </div>
      </dl>
    </div>
  </article>
);

export default ListItem;
