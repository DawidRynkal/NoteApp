import styled from 'styled-components';

const Button = styled.button`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');

  background-color: ${({ color, secondary }) => secondary || color || '#ffd82b'};
  border: 0;
  padding: 0;
  width: ${({ secondary }) => (secondary ? '105px' : '220px')};
  height: ${({ secondary }) => (secondary ? '30px' : '40px')};
  font-size: ${({ secondary }) => (secondary ? '10px' : '16px')};
  border-radius: 50px;
  font-family: 'Montserrat';
  font-weight: 600;
  text-transform: uppercase;
`;

export default Button;
