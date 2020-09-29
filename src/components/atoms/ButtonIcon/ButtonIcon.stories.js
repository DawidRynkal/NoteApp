import React from 'react';
import styled from 'styled-components';
import idea from 'assets/icons/idea.svg';
import logout from 'assets/icons/logout.svg';
import twitter from 'assets/icons/twitter.svg';
import plus from 'assets/icons/plus-sign.svg';
import write from 'assets/icons/write.svg';
import ButtonIcon from './ButtonIcon';

export default {
  title: 'atoms/ButtonIcon',
  component: ButtonIcon,
};

const YellowBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background: ${({ theme }) => theme.note};
`;

const Template = (args) => {
  return (
    <>
      <YellowBackground>
        <ButtonIcon {...args} />
      </YellowBackground>
    </>
  );
};

// Each story then reuses that template
export const Idea = Template.bind({});
export const Logout = Template.bind({});
export const Twitter = Template.bind({});
export const Plus = Template.bind({});
export const Write = Template.bind({});

Idea.args = {
  icon: idea,
  active: true,
  label: 'idea',
};
Logout.args = {
  icon: logout,
  active: true,
  label: 'logout',
};
Twitter.args = {
  icon: twitter,
  active: true,
  label: 'twitter',
};
Plus.args = {
  icon: plus,
  active: true,
  label: 'plus',
};
Write.args = {
  icon: write,
  active: true,
  label: 'write',
};
