import React, { useState } from 'react';
import { contents } from '../data/content';
import { Content } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ContentPage: React.FC = () => {
  const [selectedContent, setSelectedContent] = useState<Content>(contents[0]);
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-minecraft-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <div className="text-center mb-16 scroll-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-minecraft-yellow mb-8 tracking-wide drop-shadow-lg font-black">
            콘텐츠
          </h1>
          <p className="gothic-text text-2xl md:text-3xl text-white max-w-4xl mx-auto tracking-wide drop-shadow-lg">
            다양한 콘텐츠를 체험해보세요!
          </p>
        </div>

        {/* Content Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 scroll-scale-in">
          {contents.map((content) => (
            <button
              key={content.id}
              onClick={() => setSelectedContent(content)}
              className={`p-6 rounded-lg border-2 transition-all duration-200 text-left ${
                selectedContent.id === content.id
                  ? 'border-minecraft-yellow bg-minecraft-yellow bg-opacity-20'
                  : 'border-minecraft-gray hover:border-minecraft-yellow bg-minecraft-gray bg-opacity-50'
              }`}
            >
              <h3 className="text-xl font-bold text-white mb-2">
                {content.title}
              </h3>
              <p className="text-gray-300 text-sm">
                {content.description}
              </p>
            </button>
          ))}
        </div>

        {/* Selected Content Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Content Info */}
          <div className="bg-black bg-opacity-60 backdrop-blur-sm rounded-none border-2 border-minecraft-yellow p-8 shadow-2xl scroll-slide-left">
            <h2 className="kingdom-title text-3xl text-minecraft-yellow mb-4 tracking-wide">
              {selectedContent.title}
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              {selectedContent.description}
            </p>

            <div className="mb-6">
              <h3 className="gothic-text text-minecraft-yellow font-semibold mb-4 text-lg tracking-wide">주요 특징</h3>
              <ul className="space-y-3">
                {selectedContent.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-minecraft-yellow mr-3 mt-1">•</span>
                    <span className="text-white">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>


          </div>

          {/* Content Image */}
          <div className="bg-black bg-opacity-60 backdrop-blur-sm rounded-none border-2 border-minecraft-yellow p-8 shadow-2xl flex items-center justify-center scroll-slide-right">
            <div className="text-center">
              <div className="w-full h-64 bg-minecraft-black bg-opacity-50 rounded-lg border-2 border-minecraft-yellow flex items-center justify-center mb-4 overflow-hidden">
                <img 
                  src={selectedContent.image}
                  alt={`${selectedContent.title} 이미지`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // 이미지 로드 실패 시 아이콘으로 대체
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="text-center hidden">
                  <div className="text-6xl mb-2">🎮</div>
                  <p className="text-gray-400 text-lg font-semibold">{selectedContent.title}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    {selectedContent.title} 시스템
                  </p>
                </div>
              </div>
              
              {/* System Info */}
              <div className="bg-minecraft-black bg-opacity-70 p-3 rounded text-center">
                <div className="gothic-text text-minecraft-yellow font-semibold tracking-wide">{selectedContent.title}</div>
                <div className="text-white text-sm">시스템 정보</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPage;
