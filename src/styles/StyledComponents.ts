import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

export const FormContainer = styled.div<{ isSignUp: boolean }>`
  position: absolute;
  top: 0;
  height: 100%;
  width: 50%;
  transition: all 0.6s ease-in-out;
  transform: ${props => props.isSignUp ? 'translateX(100%)' : 'translateX(0)'};
  opacity: ${props => props.isSignUp ? 1 : 0};
  z-index: ${props => props.isSignUp ? 5 : 2};
`;

export const ToggleContainer = styled.div<{ isActive: boolean }>`
  position: absolute;
  top: 0;
  left: ${props => props.isActive ? '0' : '50%'};
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: all 0.6s ease-in-out;
  border-radius: ${props => props.isActive ? '0 150px 100px 0' : '150px 0 0 100px'};
  z-index: 1000;
  transform: ${props => props.isActive ? 'translateX(-100%)' : 'translateX(0)'};
`;

export const Toggle = styled.div<{ isActive: boolean }>`
  background-color: #4c8bf5;
  height: 100%;
  background: linear-gradient(to right, #5a9dfc, #4c8bf5, #5a9dfc);
  color: #fff;
  position: relative;
  left: ${props => props.isActive ? '50%' : '-100%'};
  height: 100%;
  width: 200%;
  transform: translateX(${props => props.isActive ? '50%' : '0'});
  transition: all 0.6s ease-in-out;
`;

export const TogglePanel = styled.div<{ isLeft: boolean }>`
  position: absolute;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 30px;
  text-align: center;
  top: 0;
  transform: ${props => props.isLeft ? 'translateX(-200%)' : 'translateX(0)'};
  transition: all 0.6s ease-in-out;
`;
