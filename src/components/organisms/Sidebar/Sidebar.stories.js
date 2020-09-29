import React from 'react';
import Sidebar from './Sidebar';

export default {
  title: 'organisms/Sidebar',
  component: Sidebar,
};

const Template = (args) => {
 
  return (
    <>
      <Sidebar {...args} />
    </>
  );
};

export const Primary = Template.bind({});

Primary.args = {
 
};
