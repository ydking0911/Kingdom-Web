import React from 'react';

interface HexagonChartProps {
  stats: {
    attack: number;
    mobility: number;
    defense: number;
    partySupport: number;
    crowdControl: number;
    attackRange: number;
  };
  color: string;
  size?: number;
}

const HexagonChart: React.FC<HexagonChartProps> = ({ stats, color, size = 200 }) => {
  const centerX = size / 2;
  const centerY = size / 2;
  const radius = size * 0.35;

  // 6개 꼭지점의 각도 (시계 방향)
  const angles = [0, 60, 120, 180, 240, 300].map(deg => (deg - 90) * Math.PI / 180);
  
  // 스탯 라벨
  const labels = ['공격력', '기동성', '방어력', '파티지원', '저지력', '공격범위'];
  
  // 육각형 꼭지점 좌표 계산
  const points = angles.map(angle => ({
    x: centerX + radius * Math.cos(angle),
    y: centerY + radius * Math.sin(angle)
  }));

  // 스탯 점들의 좌표 계산 (1-4 스케일)
  const statPoints = angles.map((angle, index) => {
    const statValue = Object.values(stats)[index];
    const statRadius = (statValue / 4) * radius;
    return {
      x: centerX + statRadius * Math.cos(angle),
      y: centerY + statRadius * Math.sin(angle)
    };
  });

  // 육각형 경로 생성
  const hexagonPath = points.map((point, index) => 
    `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`
  ).join(' ') + 'Z';

  // 스탯 육각형 경로 생성
  const statPath = statPoints.map((point, index) => 
    `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`
  ).join(' ') + 'Z';

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="absolute inset-0">
        {/* 스탯 점수별 배경 육각형들 (4, 3, 2, 1점) */}
        {[4, 3, 2, 1].map((score) => {
          const scoreRadius = (score / 4) * radius;
          const scorePoints = angles.map(angle => ({
            x: centerX + scoreRadius * Math.cos(angle),
            y: centerY + scoreRadius * Math.sin(angle)
          }));
          const scorePath = scorePoints.map((point, index) => 
            `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`
          ).join(' ') + 'Z';
          
          return (
            <path
              key={score}
              d={scorePath}
              fill="none"
              stroke="#666"
              strokeWidth="1"
              opacity={0.2 + (score * 0.1)}
            />
          );
        })}
        
        {/* 메인 배경 육각형 */}
        <path
          d={hexagonPath}
          fill="none"
          stroke="#888"
          strokeWidth="2"
          opacity="0.4"
        />
        
        {/* 스탯 육각형 */}
        <path
          d={statPath}
          fill={color}
          fillOpacity="0.3"
          stroke={color}
          strokeWidth="2"
        />
        
        {/* 스탯 점들 */}
        {statPoints.map((point, index) => (
          <circle
            key={index}
            cx={point.x}
            cy={point.y}
            r="4"
            fill={color}
            stroke="white"
            strokeWidth="1"
          />
        ))}
        
        {/* 라벨 */}
        {points.map((point, index) => {
          const labelRadius = radius + 25;
          const labelX = centerX + labelRadius * Math.cos(angles[index]);
          const labelY = centerY + labelRadius * Math.sin(angles[index]);
          
          return (
            <text
              key={index}
              x={labelX}
              y={labelY}
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-xs fill-gray-300"
              style={{ fontSize: '10px' }}
            >
              {labels[index]}
            </text>
          );
        })}
      </svg>
    </div>
  );
};

export default HexagonChart;
