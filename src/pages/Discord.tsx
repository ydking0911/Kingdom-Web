import React from 'react';
import Button from '../components/Button';
import { siteConfig } from '../config/navigation';

const Discord: React.FC = () => {
  return (
    <div className="min-h-screen bg-minecraft-black py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Page Title */}
        <div className="mb-16">
          <h1 className="gothic-text text-4xl md:text-5xl lg:text-6xl text-minecraft-yellow mb-8 tracking-wide drop-shadow-lg">
            디스코드
          </h1>
          <p className="gothic-text text-2xl md:text-3xl text-white max-w-4xl mx-auto tracking-wide drop-shadow-lg">
            Kingdom Online 커뮤니티에 참여하고 다른 플레이어들과 소통하세요!
          </p>
        </div>

        {/* Discord Info Card */}
        <div className="bg-black bg-opacity-60 backdrop-blur-sm rounded-none border-2 border-minecraft-yellow p-8 shadow-2xl mb-12">
          <div className="text-6xl mb-6">💬</div>
          <h2 className="text-2xl font-bold text-white mb-4">
            커뮤니티에 참여하세요
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            디스코드를 통해 게임 팁을 공유하고, 새로운 친구를 만나며, 
            서버 업데이트 소식을 가장 먼저 받아보세요!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-minecraft-black bg-opacity-50 p-4 rounded">
              <div className="text-3xl mb-2">🎮</div>
                              <div className="gothic-text text-minecraft-yellow font-semibold mb-2 tracking-wide">게임 팁</div>
              <div className="text-gray-300 text-sm">
                다른 플레이어들의 노하우를 공유받으세요
              </div>
            </div>
            <div className="bg-minecraft-black bg-opacity-50 p-4 rounded">
              <div className="text-3xl mb-2">👥</div>
                              <div className="gothic-text text-minecraft-yellow font-semibold mb-2 tracking-wide">친구 만들기</div>
              <div className="text-gray-300 text-sm">
                함께 플레이할 파티원을 찾아보세요
              </div>
            </div>
            <div className="bg-minecraft-black bg-opacity-50 p-4 rounded">
              <div className="text-3xl mb-2">📢</div>
                              <div className="gothic-text text-minecraft-yellow font-semibold mb-2 tracking-wide">최신 소식</div>
              <div className="text-gray-300 text-sm">
                서버 업데이트와 이벤트 소식을 받아보세요
              </div>
            </div>
          </div>

          <Button 
            size="lg" 
            className="text-xl"
            onClick={() => window.open(siteConfig.discordUrl, '_blank')}
          >
            디스코드 참여하기
          </Button>
        </div>

        {/* Server Info */}
        <div className="bg-black bg-opacity-60 backdrop-blur-sm rounded-none border-2 border-minecraft-yellow p-8 shadow-2xl">
          <h3 className="text-xl font-bold text-white mb-4">
            서버 정보
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
                              <div className="gothic-text text-minecraft-yellow font-semibold mb-2 tracking-wide">서버 주소</div>
              <div className="text-white font-mono text-lg">{siteConfig.serverIp}</div>
            </div>
            <div className="text-center">
                              <div className="gothic-text text-minecraft-yellow font-semibold mb-2 tracking-wide">게임 버전</div>
              <div className="text-white font-mono text-lg">{siteConfig.version}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discord;
