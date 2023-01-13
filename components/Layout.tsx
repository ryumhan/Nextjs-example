import { ScriptProps } from 'next/script';

import NavBar from './NavBar';

export default function Layout({ children }: ScriptProps): React.ReactElement {
  return (
    <div>
      <NavBar />
      <div>{children}</div>
    </div>
  );
}
