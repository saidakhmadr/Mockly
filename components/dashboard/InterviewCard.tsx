import React from 'react';
import { ProgressBar } from './ProgressBar';
import { ScoreBadge } from './ScoreBadge';
import { StatusChip } from './StatusChip';

interface InterviewCardProps {
  interview: any;
  isLast?: boolean;
  index?: number;
  onClick?: () => void;
}

export const InterviewCard: React.FC<InterviewCardProps> = ({ interview, isLast = false, index = 0, onClick }) => {
  return (
    <tr
      className={`border-0 cursor-pointer group ${!isLast ? 'border-b border-gray-100/50' : ''}`}
      onClick={onClick}
      tabIndex={0}
      aria-label={`Interview for ${interview.role} at ${interview.company}`}
    >
      <td className="py-6 px-6">
        <div className="flex items-center space-x-4">
          <div
            className={`w-12 h-12 bg-gradient-to-br ${interview.color} rounded-xl flex items-center justify-center shadow-lg`}
          >
            <span className="text-white font-semibold text-lg">{interview.avatar}</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-gray-900 text-base leading-tight">{interview.role}</p>
            <p className="text-sm text-gray-600 mt-1">{interview.company}</p>
          </div>
        </div>
      </td>
      <td className="py-6 px-4 text-center">
        <div className="inline-flex items-center space-x-3 bg-gray-50/80 backdrop-blur-sm rounded-xl px-4 py-3">
          <div className="flex items-center space-x-2 text-gray-900 font-medium">
            <span title="Date"><svg className="h-4 w-4 text-blue-500 inline" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg></span>
            <span className="text-sm">{interview.date}</span>
          </div>
          <div className="w-px h-5 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
          <div className="flex items-center space-x-2 text-gray-600">
            <span title="Time"><svg className="h-4 w-4 text-gray-400 inline" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg></span>
            <span className="text-sm">{interview.time}</span>
          </div>
        </div>
      </td>
      <td className="py-6 px-4 text-center">
        <div className="flex justify-center">
          <span className={`border font-medium px-4 py-2 text-xs rounded-xl ${interview.type === 'Technical' ? 'bg-purple-50 text-purple-700 border-purple-200' : interview.type === 'System Design' ? 'bg-indigo-50 text-indigo-700 border-indigo-200' : interview.type === 'Behavioral' ? 'bg-teal-50 text-teal-700 border-teal-200' : 'bg-gray-50 text-gray-700 border-gray-200'}`}>{interview.type}</span>
        </div>
      </td>
      <td className="py-6 px-4 text-center">
        <div className="flex justify-center">
          <span className={`border font-medium px-4 py-2 text-xs rounded-xl ${interview.difficulty === 'Easy' ? 'bg-gray-100 text-gray-700 border-gray-300' : interview.difficulty === 'Medium' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' : interview.difficulty === 'Hard' ? 'bg-red-50 text-red-700 border-red-200' : 'bg-gray-50 text-gray-700 border-gray-200'}`}>{interview.difficulty}</span>
        </div>
      </td>
      <td className="py-6 px-4">
        <div className="flex flex-col items-center space-y-3">
          <ProgressBar progress={interview.progress} />
          <span className="text-xs font-semibold text-gray-600">{interview.progress}%</span>
        </div>
      </td>
      <td className="py-6 px-4 text-center">
        {interview.score ? <ScoreBadge score={interview.score} /> : <div className="bg-gray-100 rounded-xl px-4 py-3"><span className="text-gray-400 text-sm">Pending</span></div>}
      </td>
      <td className="py-6 px-4 text-center">
        <StatusChip status={interview.status} />
      </td>
    </tr>
  );
}; 