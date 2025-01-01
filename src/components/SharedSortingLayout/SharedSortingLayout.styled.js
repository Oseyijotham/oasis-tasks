import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  padding: 0 16px;
`;


export const Header = styled.header`
  width: 632px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 20px;
  margin-top: 8px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid rgba(255, 255, 255, 0.09);
  background: linear-gradient(
    270deg,
    rgba(254, 55, 55, 0.25) -32.31%,
    rgba(87, 133, 255, 0.25) 63.97%,
    rgba(102, 126, 237, 0.25) 191.94%
  );
  backdrop-filter: blur(30px);
  border-radius: 30px;
  filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.3));

  &:hover {
  }

`;



export const Link = styled(NavLink)`
  padding: 8px 12px;
  border-radius: 4px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  position: relative;
  font-family: 'Work Sans', sans-serif;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    display: block;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background: linear-gradient(
      270deg,
      #fe3737 -32.31%,
      #5785ff 63.97%,
      #667eed 191.94%
    );
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
  font-family: 'Work Sans', sans-serif;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    display: block;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background: linear-gradient(
      270deg,
      #fe3737 -32.31%,
      #5785ff 63.97%,
      #667eed 191.94%
    );
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


