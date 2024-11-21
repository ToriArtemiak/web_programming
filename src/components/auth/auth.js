import React from 'react';

import styled from 'styled-components';
import {Link} from "react-router-dom";

export const AuthContainer = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  h1 {
    font-size: 30px;
    color: honeydew;
    margin-bottom: 20px;
  }

  p {
    font-size: 20px;
    color: honeydew;
  }
`;
export const AuthButton = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  margin: 10px;
  text-decoration: none;
  color: whitesmoke;
  background-color: #28a745; 
  border: 1px solid #28a745; 
  border-radius: 4px; 
  font-weight: bold; 
  cursor: pointer;

  &:hover {
    background-color: #218838; 
  }
`;

export default function Auth() {

    return (
        <AuthContainer>
            <h1>If you want have access to this page you need to register or login</h1>
            <AuthButton to="/register">Register</AuthButton>
            <p>Already have an account?</p>
            <AuthButton to="/login">Login here</AuthButton>
        </AuthContainer>
    );
}