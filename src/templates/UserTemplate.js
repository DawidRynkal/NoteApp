import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'components/organisms/Sidebar/Sidebar';




const UserTemplate = ({children, pageType}) => (
<>
    <Sidebar pageType={pageType} />
   {children}
    </>
);

UserTemplate.propTypes = {
    children: PropTypes.element.isRequired,
    pageType: PropTypes.element.isRequired,
}

UserTemplate.propTypes = {
    pageType: PropTypes.oneOf(['notes', 'twitters', 'articles'])
  }
  
  UserTemplate.defaultProps = {
    pageType: 'notes',
  }

export default UserTemplate;
