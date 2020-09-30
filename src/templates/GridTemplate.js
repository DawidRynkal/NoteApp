import React from 'react';
import PropTypes from 'prop-types';
import UserTemplate from 'templates/UserTemplate';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
padding: 25px 150px 20px 70px;
`;

const StyledGrid = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 60px;
`;

const StyledPageHeader = styled.div`
margin: 25px 0 50px 0;
`;

const StyledHeading = styled(Heading)`
margin: 25px 0 0 0;

::first-letter {
  text-transform: uppercase;
}
`;

const StyledParagraph = styled(Paragraph)`
margin: 0;
font-weight: ${({theme}) => theme.bold};
`;

const GridTemplate = ({children, pageType}) => (
<UserTemplate pageType={pageType}>
  <StyledWrapper>
      <StyledPageHeader>
    <Input search placeholder="Search"/>
    <StyledHeading big as='h1'>{pageType}</StyledHeading>
    <StyledParagraph >6 {pageType}</StyledParagraph>
      </StyledPageHeader>
    <StyledGrid>
    {children}
    </StyledGrid>
  </StyledWrapper>
</UserTemplate>
);



GridTemplate.propTypes = {
    children: PropTypes.arrayOf(PropTypes.object).isRequired,
    pageType: PropTypes.oneOf(['notes', 'twitters', 'articles'])
  }
  
  GridTemplate.defaultProps = {
    pageType: 'notes',
  }

export default GridTemplate;
