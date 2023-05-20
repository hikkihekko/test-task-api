import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const StyledButton = styled(Button)`
  && {
    margin: 50px 100px;
    width: 200px;
    background-color: #e0e0e0;
    color: #616161;
    border: 1px solid #bdbdbd;
    transition: border-color 0.3s ease, color 0.3s ease;

    &:hover {
      border-color: #616161;
      color: #616161;
    }

    &:disabled {
      color: #bdbdbd;
      border-color: #bdbdbd;
    }
  }
`;

const CustomButton = ({ onClick, disabled, children }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default CustomButton;
