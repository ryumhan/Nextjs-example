import { ScriptProps } from 'next/script';

import NavBar from './NavBar';

export const Layout = ({ children }: ScriptProps): React.ReactElement => {
  return (
    <div>
      <NavBar />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
