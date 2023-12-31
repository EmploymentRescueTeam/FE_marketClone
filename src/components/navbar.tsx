'use client';
import { AiFillHome, AiOutlineHome } from 'react-icons/ai';
import { FaUser, FaRegUser } from 'react-icons/fa6';
import '@/styles/components/navbar.scss';
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const onClickHome = () => {
    router.push('/main');
  };
  const onClickMy = () => {
    router.push('/mypage');
  };
  return (
    <nav id="navbar">
      <div
        className={pathname === '/mypage' ? 'home' : 'home active'}
        onClick={onClickHome}>
        {pathname === '/mypage' ? (
          <AiOutlineHome className="icon" />
        ) : (
          <AiFillHome className="icon" />
        )}
        <p>홈</p>
      </div>
      <div
        className={pathname === '/mypage' ? 'my active' : 'my'}
        onClick={onClickMy}>
        {pathname === '/mypage' ? (
          <FaUser className="icon" />
        ) : (
          <FaRegUser className="icon" />
        )}
        <p>마이페이지</p>
      </div>
    </nav>
  );
}
