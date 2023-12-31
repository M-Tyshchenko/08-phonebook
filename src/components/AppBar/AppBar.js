import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/AuthNav/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const AppBar = () => {
  return (
    <header>
      <Navigation />
      <UserMenu />
      <AuthNav />
    </header>
  );
};
