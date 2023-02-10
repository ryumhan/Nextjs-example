import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavBarContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

const TabContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const LinkComponent = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  &.active {
    color: tomato;
  }
`;

export const NavBar = (): React.ReactElement => {
  const router = useRouter();

  return (
    <NavBarContainer>
      <Image src="./vercel.svg" width={150} height={150} alt="test" />
      <TabContainer>
        <LinkComponent href="/" className={router.pathname === '/' ? 'active' : ''}>
          Home
        </LinkComponent>
        <LinkComponent href="/about" className={router.pathname === '/about' ? 'active' : ''}>
          About
        </LinkComponent>
      </TabContainer>
    </NavBarContainer>
  );
};

export default NavBar;
