import React from 'react';
import Paragraph from './Paragraph';

export default {
  title: 'atoms/Paragraph',
  component: Paragraph,
};

const Template = (args) => {
  return (
    <>
      <Paragraph {...args}>Hello </Paragraph>
    </>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  secondary: false,
  label: 'primary',
};
