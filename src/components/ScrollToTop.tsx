import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 페이지 이동 시 스크롤을 맨 위로 올림
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // 이 컴포넌트는 UI를 렌더링하지 않음
};

export default ScrollToTop;
