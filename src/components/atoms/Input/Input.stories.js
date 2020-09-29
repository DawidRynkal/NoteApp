import React from 'react';
import Input from './Input';

export default {
  title: 'atoms/Input',
  component: Input,
};

const Template = (args) => {
  return (
    <>
      <Input {...args} />
    </>
  );
};

export const SearchInput = Template.bind({});

SearchInput.args = {
  placeholder: 'Search',
  label: 'searchButton',
  search: true,
};
