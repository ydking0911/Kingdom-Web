import React, { useState } from 'react';
import { jobs } from '../data/jobs';
import { Job } from '../types';

const Jobs: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<Job>(jobs[0]);

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
    <div className="min-h-screen bg-minecraft-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="kingdom-title text-5xl md:text-6xl text-minecraft-yellow mb-6 tracking-wider">
            직업 정보
          </h1>
          <p className="gothic-text text-xl text-gray-300 max-w-3xl mx-auto tracking-wide">
            Kingdom Online의 다양한 직업 중 자신에게 맞는 직업을 찾아보세요!
          </p>
        </div>

        {/* Job Selection Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
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
              <div className="text-3xl mb-2">{job.icon}</div>
              <div className="text-white font-bold text-sm">{job.name}</div>
            </button>
          ))}
        </div>

        {/* Selected Job Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Job Info */}
          <div className="minecraft-card">
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-4">{selectedJob.icon}</span>
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

            <div>
              <h3 className="gothic-text text-minecraft-yellow font-semibold mb-4 text-lg tracking-wide">스탯 정보</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-minecraft-black bg-opacity-50 p-3 rounded">
                  <div className="text-gray-400 text-sm">체력</div>
                  <div className="text-white font-bold">{selectedJob.stats.health}</div>
                </div>
                <div className="bg-minecraft-black bg-opacity-50 p-3 rounded">
                  <div className="text-gray-400 text-sm">마나</div>
                  <div className="text-white font-bold">{selectedJob.stats.mana}</div>
                </div>
                <div className="bg-minecraft-black bg-opacity-50 p-3 rounded">
                  <div className="text-gray-400 text-sm">공격력</div>
                  <div className="text-white font-bold">{selectedJob.stats.attack}</div>
                </div>
                <div className="bg-minecraft-black bg-opacity-50 p-3 rounded">
                  <div className="text-gray-400 text-sm">방어력</div>
                  <div className="text-white font-bold">{selectedJob.stats.defense}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Game Screenshot Placeholder */}
          <div className="minecraft-card flex items-center justify-center">
            <div className="text-center">
              <div className="w-full h-64 bg-minecraft-black bg-opacity-50 rounded-lg border-2 border-dashed border-minecraft-yellow flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="text-4xl mb-2">🎮</div>
                  <p className="text-gray-400">게임 스크린샷</p>
                  <p className="text-sm text-gray-500 mt-2">
                    {selectedJob.name} 플레이 영상
                  </p>
                </div>
              </div>
              <div className="bg-minecraft-black bg-opacity-70 p-3 rounded text-center">
                <div className="gothic-text text-minecraft-yellow font-semibold tracking-wide">플라워 소울 Lv.8</div>
                <div className="text-white">519</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
