import styled, { css } from 'styled-components';
import searchIcon from 'assets/icons/searchIcon.svg';
// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Input = styled.input`
  padding: 15px 30px;
  font-size: ${({ theme }) => theme.small};
  font-weight: ${({ theme }) => theme.light};
  background-color: ${({ theme }) => theme.grey100};
  border: none;
  border-radius: 50px;

  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.grey300};
  }

  ${({ search }) =>
    search &&
    css`
      padding: 10px 20px 10px 40px;
      font-size: ${({ theme }) => theme.small};
      background-image: url(${() => searchIcon});
      background-size: 15px;
      background-position: 10px 50%;
      background-repeat: no-repeat;
    `}
`;

export default Input;

/* <FontAwesomeIcon icon={faSearch} */
