import styled, {css} from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types'
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import link from 'assets/icons/link.svg';

// const CARD_TYPES = {
//   note: 'NOTE',
//   twitter: 'TWITTER',
//   article: 'ARTICLE',
// }
  

const StyledWrapper = styled.div`
  min-height: 380px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
  padding: 17px 30px;
  background-color: ${({ activeCard, theme }) => (activeCard ? theme[activeCard] : 'white')};
  position: relative;

  :first-of-type {
    z-index: 9999;
  }

  ${({flex}) => 
  flex && css`
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  `
  }
`;

const DateInfo = styled(Paragraph)`
  margin: 0 0 10px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.small};
`;

const StyleHeading = styled(Heading)`
margin: 5px 0 0; 
`;

const StyledAvatar = styled.img`
width: 86px;
height: 86px;
border: 5px solid ${({ theme })=> theme.twitter};
border-radius: 50px;
position: absolute;
right: 20px;
top: 20px;
`;

const StyledLinkButton = styled.a`
display: block;
width: 77px;
height: 77px;
border-radius: 50px;
background: url(${link}) no-repeat;
background-size: 60%;
background-position: 50%;
position: absolute;
right: 0;
top: 50%;
transform: translateY(-50%);
`;

const Card = ({cardType, tittle, created, twitterName, articleUrl, content}) => (
  <StyledWrapper>
    <InnerWrapper  activeCard={cardType}>
<StyleHeading>{tittle}</StyleHeading>
<DateInfo>{created}</DateInfo>
      { cardType === 'twitter' && <StyledAvatar src={`https://unavatar.now.sh/twitter/${twitterName}`}/>}
      { cardType === 'article' && <StyledLinkButton src={articleUrl}/>}
    </InnerWrapper>
    <InnerWrapper flex>
      <Paragraph>
        {content}
      </Paragraph>
      <Button secondary>Remove</Button>
    </InnerWrapper>
  </StyledWrapper>
);

Card.propTypes = {
  cardType: PropTypes.oneOf(['note', 'twitter', 'article']),
  tittle: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  twitterName: PropTypes.string,
  articleUrl: PropTypes.string,
  content: PropTypes.string.isRequired,

}

Card.defaultProps = {
  cardType: 'note',
  twitterName: null,
  articleUrl: null,
}

export default Card;
