import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Frame = styled.div`
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
`;

export const Icon = styled.svg`
  fill: rgb(114, 17, 17);
`;

export const IconLabelWrapper = styled.div`
  display:flex;
  align-items: flex-end;
  gap: 5px;
`;

export const IconLabel = styled.span`
  display: inline-block;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #fff;
`;

export const Greeting = styled.div`
  font-family: 'Sansita Swashed';
  font-size: 25px;
  color: #fff;
  max-width:330px;
  overflow:hidden;
  margin: 2px;
  display: inline-block;
  font-weight: 700;
  &::first-letter {
    font-size: 30px;
  }
`;

export const Header = styled.header`
  width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 20px;
  margin-bottom: 8px;
  margin-top: 8px;
  border: 1px solid rgba(255, 255, 255, 0.09);
  background: rgba(255, 255, 255, 0.1) 0% 0% no-repeat padding-box;
  backdrop-filter: blur(30px);
  border-radius: 30px;
  filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.3));

  &:hover {
  }

  > nav {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'DM Sans';
    padding: 10px;
    gap: 5px;
  }
`;

export const Logo = styled.div`
  font-weight: 700;
  gap: 5px;
  display: flex;
  align-items: flex-end;
`;

export const Link = styled(NavLink)`
  padding: 8px 12px;
  border-radius: 4px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    display: block;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background: linear-gradient(270deg, #fe3737 -32.31%, #5785ff 63.97%, #667eed 191.94%);
    transform: scaleX(0);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    transform-origin: left;
  }

  &.active {
  }

  &:hover {
  }

  &:hover::after {
    transform: scaleX(1);
  }

  &.active::after {
    transform: scaleX(1);
  }
`;

export const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  background-color: inherit;
  border: none;
  cursor: pointer;
  font-size: 16px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    display: block;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background: linear-gradient(270deg, #fe3737 -32.31%, #5785ff 63.97%, #667eed 191.94%);
    transform: scaleX(0);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    transform-origin: left;
  }

  &:hover {
  }

  &:hover::after {
    transform: scaleX(1);
  }

  &.active::after {
    transform: scaleX(1);
  }
`;

export const Symbol = styled(NavLink)`
  text-decoration: none;
  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.1);
    
  }
`;
