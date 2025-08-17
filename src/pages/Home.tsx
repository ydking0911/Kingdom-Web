import React, { useState } from 'react';
import Button from '../components/Button';
import { siteConfig } from '../config/navigation';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Home: React.FC = () => {
  useScrollAnimation();
  const [showToast, setShowToast] = useState(false);
  
  const handleCopyServerIP = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.serverIp);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 1000); // 1초 후 자동으로 사라짐
    } catch (err) {
      // 복사 실패 시 대안 제공
      alert(`서버 주소: ${siteConfig.serverIp}\n\n위 주소를 복사해서 마인크래프트 서버 추가에 사용하세요.`);
    }
  };
  
  return (
    <div className="h-screen relative overflow-hidden pt-16">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-gradient-to-br from-gray-900 via-black to-gray-800"
        style={{
          backgroundImage: `url('/images/kingdom-castle-bg.jpg')`,
        }}
      ></div>
      
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black bg-opacity-65"></div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center max-w-5xl mx-auto px-4">
          {/* Main Title */}
          <div className="mb-12 scroll-fade-in">
            <h1 className="kingdom-title text-5xl md:text-7xl lg:text-8xl text-minecraft-yellow mb-8 tracking-wider drop-shadow-2xl animate-pulse">
              Kingdom Online
            </h1>
            <h2 className="gothic-text text-xl md:text-2xl lg:text-3xl text-white mb-10 font-medium tracking-wide drop-shadow-lg">
              고퀄리티 스킬, 다양한 레이드 패턴
            </h2>
          </div>

          {/* Call to Action */}
          <div className="mb-12 scroll-scale-in">
            <Button 
              size="lg" 
              className="gothic-text text-2xl tracking-wider shadow-2xl transform hover:scale-105 transition-all duration-300"
              onClick={handleCopyServerIP}
            >
              서버주소 복사하기
            </Button>
          </div>

          {/* Subtitle */}
          <p className="gothic-text text-lg md:text-xl text-gray-300 mb-12 tracking-wide scroll-fade-in">
            누구나 쉽게 접속 가능합니다!
          </p>

          {/* Server Info */}
          <div className="bg-black bg-opacity-60 backdrop-blur-sm rounded-none border-2 border-minecraft-yellow p-8 shadow-2xl scroll-slide-left">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h4 className="gothic-text text-minecraft-yellow font-semibold mb-3 text-lg tracking-wide">서버 주소</h4>
                <p className="gothic-text text-white font-mono text-xl tracking-wider">{siteConfig.serverIp}</p>
              </div>
              <div className="text-center">
                <h4 className="gothic-text text-minecraft-yellow font-semibold mb-3 text-lg tracking-wide">게임 버전</h4>
                <p className="gothic-text text-white font-mono text-base tracking-wide">{siteConfig.version}</p>
              </div>
              <div className="text-center">
                <h4 className="gothic-text text-minecraft-yellow font-semibold mb-3 text-lg tracking-wide">커뮤니티</h4>
                <a 
                  href={siteConfig.discordUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gothic-text text-minecraft-yellow hover:text-white transition-colors text-xl tracking-wider border-b border-transparent hover:border-minecraft-yellow"
                >
                  디스코드 참여
                </a>
              </div>
            </div>
          </div>

          {/* Character Animation */}
          <div className="character-animation-container">
            {/* 5개의 랜덤 캐릭터들 */}
            {Array.from({ length: 5 }, (_, index) => (
              <img 
                key={index}
                src="/images/character/slime.gif" 
                alt={`슬라임 ${index + 1}`} 
                className={`character character-${index + 1}`}
                style={{
                  animation: index % 2 === 0 
                    ? `slime-walk-right ${8 + index * 0.5}s linear infinite`
                    : `slime-walk-left ${6 + index * 0.8}s linear infinite`,
                  animationDelay: `${index * 0.5}s`
                }}
                onError={(e) => {
                  console.error(`슬라임 ${index + 1} GIF 로드 실패:`, e);
                  e.currentTarget.style.display = 'none';
                }}
                onLoad={(e) => {
                  console.log(`슬라임 ${index + 1} GIF 로드 성공!`);
                }}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Toast Message */}
      {showToast && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-black bg-opacity-90 text-gray-400 px-24 py-16 rounded-lg shadow-2xl animate-toast">
            <div className="text-center">
              <div className="gothic-text text-3xl mb-6">클립보드에 복사되었습니다!</div>
              <div className="text-2xl text-gray-400">서버 주소: {siteConfig.serverIp}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
