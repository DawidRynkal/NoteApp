import React from 'react';
import { text } from '@storybook/addon-knobs';
import Heading from './Heading';

export default {
  title: 'atoms/Heading',
  component: Heading,
};

const Template = (args) => {
  const name = text('Name', 'James');
  const content = `I am ${name}`;

  return (
    <>
      <Heading {...args}>Hello, {content}</Heading>
    </>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  big: false,
  label: 'primary',
};
