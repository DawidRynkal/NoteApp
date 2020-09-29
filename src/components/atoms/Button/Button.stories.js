import React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import Button from './Button';

export default {
  title: 'atoms/Button',
  decorators: [withKnobs],
  component: Button,
};

const Template = (args) => {
  const name = text('Name', 'James');
  const content = `I am ${name}`;

  const label = 'Colors';
  const options = {
    Primary: 'hsl(49, 100%, 58%)',
    Blue: 'hsl(195, 83%, 75%)',
    Khaki: 'hsl(106, 47%, 64%)',
    None: null,
  };
  const defaultValue = 'hsl(49, 100%, 58%)';
  const groupId = 'GROUP-ID1';
  const value = select(label, options, defaultValue, groupId);

  return (
    <>
      <Button {...args} color={value}>
        Hello, {content}
      </Button>
    </>
  );
};

// Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
  secondary: true,
  label: 'primary',
};
