import React, { useState } from 'react';
import { jobs } from '../data/jobs';
import { Job } from '../types';
import HexagonChart from '../components/HexagonChart';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Jobs: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<Job>(jobs[0]);
  useScrollAnimation();

  const getDeveloperComment = (jobId: string): string => {
    const comments: { [key: string]: string } = {
      assassin: '높은 기동성과 치명적인 공격력을 자랑하는 스텔스 클래스.\n체력이 낮아 전투 기술이 요구되며, 숙련된 플레이어에게 적합합니다.',
      archer: '안정적인 원거리 공격과 균형잡힌 스탯으로 초보자도 쉽게 접근할 수 있는 직업.\n다양한 상황에서 활용도가 높습니다.',
      warrior: '강력한 방어력과 체력을 바탕으로 한 근접 전투의 핵심.\n후반 레이드에서 팀의 방어막 역할을 수행하며 안정적인 성능을 보여줍니다.',
      pyromancer: '압도적인 마법 공격력으로 적을 압도하는 원소 마법사.\n높은 데미지 딜링이 가능하지만 방어력이 취약하여 전술적 플레이가 중요합니다.',
      bard: '팀 지원과 생존에 특화된 보조 클래스.\n사냥이 용이하며 초보자도 쉽게 즐길 수 있어 입문자에게 추천합니다.',
      winder: '공중 전투에 특화된 고난이도 클래스.\n초반 성장이 어렵지만 숙련 후에는 독특한 전투 스타일을 경험할 수 있습니다.',
      gunner: '원거리에서 안정적인 폭발 데미지를 제공하는 딜러.\n균형잡힌 성능으로 다양한 전투 상황에 대응 가능합니다.',
      martial: '근접 전투와 방어를 동시에 수행하는 하이브리드 클래스.\n타격감이 뛰어나며 전방에서 활약할 수 있습니다.',
      frost: '빠른 공격 속도와 강력한 딜링을 자랑하는 얼음 검사.\n높은 데미지 출력이 가능하지만 체력이 낮아 전투 기술이 요구됩니다.',
      dragonwarrior: '공격과 방어를 겸비한 균형잡힌 클래스.\n안정적인 성능으로 다양한 플레이어에게 적합하며 무난한 선택지입니다.'
    };
    return comments[jobId] || '개발자 오피셜을 준비 중입니다.';
  };

  const renderDifficultyStars = (difficulty: number) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={`text-lg ${
              index < difficulty ? 'text-yellow-400' : 'text-gray-400'
            }`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-minecraft-black py-8 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <div className="text-center mb-16 scroll-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-minecraft-yellow mb-8 tracking-wide drop-shadow-lg font-black">
            직업 정보
          </h1>
          <p className="gothic-text text-2xl md:text-3xl text-white max-w-4xl mx-auto tracking-wide drop-shadow-lg">
            다양한 직업 중 자신에게 맞는 직업을 찾아보세요!
          </p>
        </div>

        {/* Job Selection Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8 scroll-scale-in">
          {jobs.map((job) => (
            <button
              key={job.id}
              onClick={() => setSelectedJob(job)}
              className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                selectedJob.id === job.id
                  ? 'border-minecraft-yellow bg-minecraft-yellow bg-opacity-20'
                  : 'border-minecraft-gray hover:border-minecraft-yellow bg-minecraft-gray bg-opacity-50'
              }`}
            >
              <div className="w-full h-8 mb-2 flex items-center justify-center">
                <img 
                  src={job.icon} 
                  alt={`${job.name} 아이콘`}
                  className="w-6 h-6 object-contain"
                />
              </div>
              <div className="text-white font-bold text-sm">{job.name}</div>
            </button>
          ))}
        </div>

        {/* Selected Job Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Job Info */}
          <div className="bg-black bg-opacity-60 backdrop-blur-sm rounded-none border-2 border-minecraft-yellow p-8 shadow-2xl scroll-slide-left">
            <div className="flex items-center mb-6">
              <img 
                src={selectedJob.icon} 
                alt={`${selectedJob.name} 아이콘`}
                className="w-16 h-16 mr-4 object-contain"
              />
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  {selectedJob.name}
                </h2>
                <p className="text-gray-300 text-lg">
                  {selectedJob.description}
                </p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="gothic-text text-minecraft-yellow font-semibold mb-2 text-lg tracking-wide">난이도</h3>
              {renderDifficultyStars(selectedJob.difficulty)}
            </div>



            <div className="mb-6">
              <h3 className="gothic-text text-minecraft-yellow font-semibold mb-4 text-lg tracking-wide">육각형 스탯 차트</h3>
              <div className="flex justify-center">
                <HexagonChart stats={selectedJob.stats} color={selectedJob.color} size={250} />
              </div>
            </div>
          </div>

          {/* Game Screenshot Placeholder */}
          <div className="bg-black bg-opacity-60 backdrop-blur-sm rounded-none border-2 border-minecraft-yellow p-8 shadow-2xl flex items-center justify-center scroll-slide-right">
            <div className="text-center">
              <div className="w-full h-80 bg-minecraft-black bg-opacity-50 rounded-lg border-2 border-minecraft-yellow flex items-center justify-center mb-4 overflow-hidden">
                <img 
                  src={`/images/jobs/${selectedJob.id}.png`}
                  alt={`${selectedJob.name} 이미지`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // 이미지 로드 실패 시 아이콘으로 대체
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="text-center hidden">
                  <div className="text-6xl mb-2">{selectedJob.icon}</div>
                  <p className="text-gray-400 text-lg font-semibold">{selectedJob.name}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    {selectedJob.name} 플레이 영상
                  </p>
                </div>
              </div>
              <div className="bg-minecraft-black bg-opacity-70 p-4 rounded text-center">
                <div className="gothic-text text-minecraft-yellow font-semibold tracking-wide mb-2">개발자 오피셜</div>
                <div className="text-white text-sm leading-relaxed whitespace-pre-line">
                  {getDeveloperComment(selectedJob.id)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
