import React, { useState } from 'react';
import { contents } from '../data/content';
import { Content } from '../types';

const ContentPage: React.FC = () => {
  const [selectedContent, setSelectedContent] = useState<Content>(contents[0]);

  return (
    <div className="min-h-screen bg-minecraft-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="kingdom-title text-5xl md:text-6xl text-minecraft-yellow mb-6 tracking-wider">
            콘텐츠
          </h1>
          <p className="gothic-text text-xl text-gray-300 max-w-3xl mx-auto tracking-wide">
            Kingdom Online의 다양한 콘텐츠를 체험해보세요!
          </p>
        </div>

        {/* Content Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
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
          <div className="minecraft-card">
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

            {/* Special Feature Highlight */}
            {selectedContent.id === 'gathering' && (
              <div className="bg-minecraft-yellow bg-opacity-20 border border-minecraft-yellow rounded-lg p-4">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">🍃</span>
                  <div>
                    <div className="gothic-text text-minecraft-yellow font-semibold tracking-wide">대성공</div>
                    <div className="text-white text-sm">
                      가끔, 2배의 보상을 얻을 수도 있습니다!
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Content Image */}
          <div className="minecraft-card flex items-center justify-center">
            <div className="text-center">
              <div className="w-full h-64 bg-minecraft-black bg-opacity-50 rounded-lg border-2 border-dashed border-minecraft-yellow flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="text-4xl mb-2">🌿</div>
                  <p className="text-gray-400">콘텐츠 이미지</p>
                  <p className="text-sm text-gray-500 mt-2">
                    {selectedContent.title} 스크린샷
                  </p>
                </div>
              </div>
              
              {/* Minecraft-style UI overlay */}
              <div className="bg-minecraft-black bg-opacity-70 p-3 rounded text-center">
                <div className="gothic-text text-minecraft-yellow font-semibold tracking-wide">채집</div>
                <div className="text-white text-sm">Lv.1: 시든 꽃 덤불</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPage;
