import { Outlet } from 'react-router-dom';
import { FullScreenCard } from '../../Components/FullScreenCard';

export function AuthLayout() {
  return (
    <FullScreenCard>
      <FullScreenCard.Body>
        <Outlet />
      </FullScreenCard.Body>
      <FullScreenCard.BellowCard>Hi</FullScreenCard.BellowCard>
    </FullScreenCard>
  );
}
