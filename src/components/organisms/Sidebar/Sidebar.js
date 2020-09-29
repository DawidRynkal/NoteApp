import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon'
import idea from 'assets/icons/idea.svg';
import logout from 'assets/icons/logout.svg';
import twitter from 'assets/icons/twitter.svg';
import write from 'assets/icons/write.svg';
import styled from 'styled-components';


const SidebarWrapper = styled.nav`
display:flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
position: fixed;
top:0;
left:0;
width: 153px;
height: 100vh;
background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : theme.note)};
`;

const IconsWrapper = styled.div`
margin-top: 10px;
`;

const StyledButtonIcon = styled(ButtonIcon)`
margin-bottom: 47px;
`;

const Sidebar = ({ pageType }) => (
    <SidebarWrapper activeColor={pageType}>
        <NavLink to='/'><p>NoteApp</p></NavLink>
        <IconsWrapper>
            <ButtonIcon exact as={NavLink} to='/notes' icon={write} />
            <ButtonIcon as={NavLink} to='/article' icon={idea}/>
            <ButtonIcon as={NavLink} to='/twitter' icon={twitter}/>
        </IconsWrapper>
            <StyledButtonIcon  as={NavLink} to='/login'  icon={logout}/>
    </SidebarWrapper>
)

Sidebar.propTypes = {
    pageType: PropTypes.element.isRequired,
}
Sidebar.propTypes = {
    pageType: PropTypes.oneOf(['note', 'twitter', 'article'])
  }
  
  Sidebar.defaultProps = {
    pageType: 'note',
  }

export default Sidebar;