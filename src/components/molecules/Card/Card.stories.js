import React from 'react';
import Card from './Card';

export default {
  title: 'molecules/Card',
  component: Card,
};

const Template = (args) => {
  return (
    <>
      <Card {...args} />
    </>
  );
};

export const CardMoleculesNote = Template.bind({});
export const CardMoleculesTwitter = Template.bind({});
export const CardMoleculesArticle = Template.bind({});

CardMoleculesNote.args = {
  label: 'Card',
  cardType: 'note',
};
CardMoleculesTwitter.args = {
  label: 'Card',
  cardType: 'twitter',
};
CardMoleculesArticle.args = {
  label: 'Card',
  cardType: 'article',
};
