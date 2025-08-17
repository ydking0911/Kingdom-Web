import React from 'react';
import Button from '../components/Button';
import { siteConfig } from '../config/navigation';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useServerStatus } from '../hooks/useServerStatus';

const Community: React.FC = () => {
  useScrollAnimation();
  const serverStatus = useServerStatus('kdsv.kr');

  return (
    <div className="min-h-screen bg-minecraft-black py-8 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <div className="text-center mb-16 scroll-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-minecraft-yellow mb-8 tracking-wide drop-shadow-lg font-black">
            커뮤니티
          </h1>
          <p className="gothic-text text-2xl md:text-3xl text-white max-w-4xl mx-auto tracking-wide drop-shadow-lg">
            Kingdom Online 플레이어들과 함께하는 활발한 커뮤니티를 경험하세요!
          </p>
        </div>

        {/* Main Community Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Discord Section */}
          <div className="bg-black bg-opacity-60 backdrop-blur-sm rounded-none border-2 border-minecraft-yellow p-8 shadow-2xl scroll-slide-left">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">💬</div>
              <h2 className="gothic-text text-2xl text-minecraft-yellow font-semibold mb-4 tracking-wide">
                디스코드 커뮤니티
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                실시간으로 다른 플레이어들과 소통하고, 게임 팁을 공유하세요!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-minecraft-black bg-opacity-50 p-4 rounded text-center">
                <div className="text-3xl mb-2">🎮</div>
                <div className="gothic-text text-minecraft-yellow font-semibold mb-2 tracking-wide text-sm">게임 팁</div>
                <div className="text-gray-300 text-xs">
                  다른 플레이어들의 노하우를 공유받으세요
                </div>
              </div>
              <div className="bg-minecraft-black bg-opacity-50 p-4 rounded text-center">
                <div className="text-3xl mb-2">👥</div>
                <div className="gothic-text text-minecraft-yellow font-semibold mb-2 tracking-wide text-sm">파티 모집</div>
                <div className="text-gray-300 text-xs">
                  함께 플레이할 파티원을 찾아보세요
                </div>
              </div>
              <div className="bg-minecraft-black bg-opacity-50 p-4 rounded text-center">
                <div className="text-3xl mb-2">📢</div>
                <div className="gothic-text text-minecraft-yellow font-semibold mb-2 tracking-wide text-sm">최신 소식</div>
                <div className="text-gray-300 text-xs">
                  서버 업데이트와 이벤트 소식을 받아보세요
                </div>
              </div>
            </div>

            <Button 
              size="lg" 
              className="w-full text-lg gothic-text"
              onClick={() => window.open(siteConfig.discordUrl, '_blank')}
            >
              디스코드 참여하기
            </Button>
          </div>

          {/* Community Events */}
          <div className="bg-black bg-opacity-60 backdrop-blur-sm rounded-none border-2 border-minecraft-yellow p-8 shadow-2xl scroll-slide-right">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="gothic-text text-2xl text-minecraft-yellow font-semibold mb-4 tracking-wide">
                커뮤니티 이벤트
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                다양한 이벤트와 대회에 참여하여 특별한 보상을 획득하세요!
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-minecraft-black bg-opacity-50 p-4 rounded border border-minecraft-yellow">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="gothic-text text-minecraft-yellow font-semibold tracking-wide">일일/주간 퀘스트</div>
                    <div className="text-gray-300 text-sm">매일 다양한 일일퀘스트/주간퀘스트 진행</div>
                  </div>
                  <div className="text-2xl">📋</div>
                </div>
              </div>
              
              <div className="bg-minecraft-black bg-opacity-50 p-4 rounded border border-minecraft-yellow">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="gothic-text text-minecraft-yellow font-semibold tracking-wide">핫타임 이벤트</div>
                    <div className="text-gray-300 text-sm">매일 21시, 22시, 23시 진행</div>
                  </div>
                  <div className="text-2xl">🔥</div>
                </div>
              </div>
              
              <div className="bg-minecraft-black bg-opacity-50 p-4 rounded border border-minecraft-yellow">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="gothic-text text-minecraft-yellow font-semibold tracking-wide">레이드 챌린지</div>
                    <div className="text-gray-300 text-sm">팀워크 대회</div>
                  </div>
                  <div className="text-2xl">🐉</div>
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* Server Status */}
        <div className="bg-black bg-opacity-60 backdrop-blur-sm rounded-none border-2 border-minecraft-yellow p-8 shadow-2xl scroll-fade-in">
          <div className="text-center mb-6">
            <h2 className="gothic-text text-2xl text-minecraft-yellow font-semibold mb-4 tracking-wide">
              실시간 서버 현황
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              MCSrvStat.us API를 통해 실시간으로 서버 상태를 확인합니다
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            {/* Real-time Status */}
            <div className="bg-minecraft-black bg-opacity-50 p-6 rounded-lg border border-minecraft-yellow">
              <div className="text-center mb-4">
                <div className="text-3xl mb-3">🖥️</div>
                <h3 className="gothic-text text-minecraft-yellow font-semibold mb-3 tracking-wide">서버 상태</h3>
              </div>
              
              {serverStatus.loading ? (
                <div className="text-center">
                  <div className="animate-spin text-2xl mb-2">⏳</div>
                  <div className="text-gray-400">서버 상태 확인 중...</div>
                </div>
              ) : serverStatus.error ? (
                <div className="text-center">
                  <div className="text-2xl mb-2 text-red-400">❌</div>
                  <div className="text-red-400 text-sm">API 오류</div>
                  <div className="text-gray-400 text-xs mt-1">{serverStatus.error}</div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">상태:</span>
                    <span className={`font-semibold ${serverStatus.online ? 'text-green-400' : 'text-red-400'}`}>
                      {serverStatus.online ? '🟢 온라인' : '🔴 오프라인'}
                    </span>
                  </div>
                  
                  {serverStatus.online && (
                    <>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">접속자:</span>
                        <span className="text-white font-semibold">
                          {serverStatus.players.online}/{serverStatus.players.max}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">버전:</span>
                        <span className="text-white font-semibold">{serverStatus.version}</span>
                      </div>
                      <div className="text-center mt-3">
                        <div className="text-gray-400 text-xs italic">"{serverStatus.motd}"</div>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Manual Check */}
            <div className="bg-minecraft-black bg-opacity-50 p-6 rounded-lg border border-minecraft-yellow">
              <div className="text-center mb-4">
                <div className="text-4xl mb-3">📊</div>
                <h3 className="gothic-text text-minecraft-yellow font-semibold mb-3 tracking-wide">상세 정보</h3>
              </div>
              <div className="text-gray-300 text-sm mb-4 text-center">
                서버 평점, 리뷰, 상세 통계 등 더 많은 정보를 확인하세요
              </div>
              
                             <Button 
                 size="lg" 
                 className="w-full text-sm gothic-text"
                 onClick={() => window.open('https://minelist.kr/servers/16575-kr', '_blank')}
               >
                 MineList에서 상세 정보 보기
               </Button>
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-gray-400 text-xs">
              데이터 출처: MCSrvStat.us API | 30초마다 자동 업데이트
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
