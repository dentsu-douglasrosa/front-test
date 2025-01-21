import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { MemoryRouter } from 'react-router-dom';
import PostCard from 'src/components/PostCard';
import { Provider } from 'react-redux';
import store from 'src/redux/store'

const meta = {
  title: 'PostCard',
  component: PostCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  decorators: [
    (Story) => (
      <html>
        <head>
          <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet"/>
        </head>
        <body>
          <Provider store={store}>
            <MemoryRouter>
              <Story />
            </MemoryRouter>
          </Provider>
        </body>
      </html>
    ),
  ],
} satisfies Meta<typeof PostCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    post: {
      "id": "cc8a8c63-2f82-4745-8b6e-28f88ff73fdd",
      "title": "Tech Innovations in Healthcare",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci sagittis eu volutpat odio facilisis mauris. Blandit aliquam etiam erat velit scelerisque in dictum non. Urna neque viverra justo nec ultrices. At elementum eu facilisis sed odio. Ultrices tincidunt arcu non sodales neque sodales ut etiam sit. Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Eleifend quam adipiscing vitae proin sagittis nisl. Quam id leo in vitae turpis massa sed. Non pulvinar neque laoreet suspendisse. Dui id ornare arcu odio ut sem. Ac turpis egestas sed tempus urna et pharetra pharetra massa. Tempor id eu nisl nunc mi ipsum faucibus. Fames ac turpis egestas maecenas pharetra convallis. Cras pulvinar mattis nunc sed blandit libero volutpat sed cras. Risus in hendrerit gravida rutrum quisque non tellus. Non odio euismod lacinia at quis risus sed vulputate. Enim eu turpis egestas pretium aenean pharetra magna.\n\nPlacerat orci nulla pellentesque dignissim enim sit amet. Dui id ornare arcu odio ut sem. Rhoncus dolor purus non enim praesent elementum. Nunc non blandit massa enim nec dui nunc mattis enim. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Erat imperdiet sed euismod nisi porta lorem. In eu mi bibendum neque egestas. Posuere lorem ipsum dolor sit amet consectetur. Facilisis sed odio morbi quis commodo odio aenean. Vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Suscipit tellus mauris a diam maecenas sed enim ut. Nunc sed velit dignissim sodales. Quisque egestas diam in arcu cursus euismod quis. Eget gravida cum sociis natoque penatibus et magnis dis parturient. Pretium vulputate sapien nec sagittis aliquam. Cras tincidunt lobortis feugiat vivamus at augue eget. Aliquam ultrices sagittis orci a scelerisque. Luctus venenatis lectus magna fringilla urna porttitor. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Sit amet aliquam id diam maecenas ultricies mi eget mauris.\n\nId interdum velit laoreet id donec ultrices tincidunt. Pretium vulputate sapien nec sagittis aliquam. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Tortor vitae purus faucibus ornare suspendisse sed nisi. Lacus sed turpis tincidunt id aliquet. Egestas dui id ornare arcu odio ut sem. Sed elementum tempus egestas sed sed risus pretium. Non odio euismod lacinia at quis risus sed vulputate odio. Semper eget duis at tellus at urna condimentum. Viverra ipsum nunc aliquet bibendum enim. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Feugiat nisl pretium fusce id. Leo in vitae turpis massa sed elementum tempus. Feugiat in fermentum posuere urna. Molestie nunc non blandit massa enim nec dui.",
      "thumbnail_url": "https://dws-tech-test-assets.s3.amazonaws.com/images/thumb-1.jpg",
      "authorId": "c6fddf84-2f20-11ef-8f88-325096b39f47",
      "createdAt": "2024-12-14T04:51:42.684Z",
      "updatedAt": "2024-12-14T04:51:42.684Z",
      "categories": [
        {
          "id": "a3979472-2f20-11ef-a347-325096b39f47",
          "name": "Technology",
          "createdAt": "2024-12-14T04:51:42.667Z",
          "updatedAt": "2024-12-14T04:51:42.783Z",
          "postId": "cc8a8c63-2f82-4745-8b6e-28f88ff73fdd"
        }
      ],
      "author": {
        "id": "c6fddf84-2f20-11ef-8f88-325096b39f47",
        "name": "Emily Davis",
        "profilePicture": "https://dws-tech-test-assets.s3.amazonaws.com/images/avataaars-3.png",
        "createdAt": "2024-12-14T04:51:42.677Z",
        "updatedAt": "2024-12-14T04:51:42.677Z"
      }
    },
  },
};