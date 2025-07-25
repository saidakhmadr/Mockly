import React from 'react';

interface ScoreBadgeProps {
  score: number;
  className?: string;
}

function getScoreConfig(score: number) {
  if (score >= 90) return { color: 'text-gray-700', bg: 'bg-gray-100', icon: '🏆' };
  if (score >= 80) return { color: 'text-blue-600', bg: 'bg-blue-50', icon: '⭐' };
  if (score >= 70) return { color: 'text-amber-600', bg: 'bg-amber-50', icon: '👍' };
  return { color: 'text-red-600', bg: 'bg-red-50', icon: '📈' };
}

export const ScoreBadge: React.FC<ScoreBadgeProps> = ({ score, className }) => {
  const config = getScoreConfig(score);
  return (
    <div className={`${config.bg} rounded-xl px-4 py-3 flex items-center space-x-2 ${className || ''}`}>
      <span className="text-sm">{config.icon}</span>
      <span className={`font-bold text-xl ${config.color}`}>{score}</span>
    </div>
  );
}; 