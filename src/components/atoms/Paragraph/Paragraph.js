import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: ${({ secondary }) => (secondary ? '15px' : '10px')};
  font-weight: 300;
`;
export default Paragraph;

/* font-size: ${({theme}) => theme.fontSize.s };
font-weight: ${({theme}) => theme.regular}; */
