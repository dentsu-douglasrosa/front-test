import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { MemoryRouter } from 'react-router-dom';
import Button from 'src/components/Button';
import { Provider } from 'react-redux';
import store from 'src/redux/store'


const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    onClick: fn(),
  },
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
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Primary",
    type: "primary",
    size: "large"
  },
};


export const Secondary: Story = {
  args: {
    label: "Secondary",
    type: "secondary",
    size: "small"
  },
};

export const Back: Story = {
  args: {
    label: "Back",
    type: "secondary",
    size: "small",
    iconLeftClassName: "fas fa-arrow-left"
  },
};

export const Catergory: Story = {
  args: {
    label: "Category",
    type: "secondary",
    size: "small",
    iconRightClassName: "fas fa-angle-down"
  },
};
