import { Outlet } from 'react-router-dom';
import {
  Container,
  Header,
  Link
} from './SharedSortingLayout.styled';
import { Suspense } from 'react';


export const SharedSortingLayout = () => {
  return (
    <Container>
      <Header>
        <Link to="/sharedLayout/sorting/all">All</Link>
        <Link to="/sharedLayout/sorting/pending">Pending</Link>
        <Link to="completed">Completed</Link>
        <Link to="past_due">Past Due</Link>
      </Header>

      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
