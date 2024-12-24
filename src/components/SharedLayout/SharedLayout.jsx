import { Outlet } from 'react-router-dom';
import {
  Container,
  Header,
  Logo,
  Link,
  Frame,
  IconLabel,
  Symbol,
  Button,
  Greeting,
  IconLabelWrapper,
} from './SharedLayout.styled';
import { Suspense } from 'react';
import { logOut } from '../../redux/AuthRedux/operations';
import { useDispatch } from 'react-redux';
import { useAuthHook } from '../../customHook/customHook';
import svg from './icons.svg';


export const SharedLayout = () => {
  const dispatch = useDispatch();
  const { user } = useAuthHook();
  
  return (
    <Container>
      <Header>
        <Symbol to="/">
          <Logo>
            <Frame role="img" aria-label="computer icon">
              <svg width="160px" height="47px">
                <use href={`${svg}#icon-oasis-logo`}></use>
              </svg>
            </Frame>
            <IconLabelWrapper>
              <IconLabel>Oasis</IconLabel>
              <IconLabel>Tasks</IconLabel>
            </IconLabelWrapper>
          </Logo>
        </Symbol>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Greeting>Welcome,</Greeting> <Greeting>{user.firstname}</Greeting>
        </div>
        <nav>
          <Link to="/sharedLayout/Home">Home</Link>
          <Link to="/sharedLayout/tasks">Tasks</Link>
          <Link to="/sharedLayout/sorting">Sorting</Link>
          <Button type="button" onClick={() => dispatch(logOut())}>
            Logout
          </Button>
        </nav>
      </Header>

      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
