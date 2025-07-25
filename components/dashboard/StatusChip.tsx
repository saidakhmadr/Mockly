import React from 'react';

interface StatusChipProps {
  status: string;
  className?: string;
}

function getStatusConfig(status: string) {
  switch (status) {
    case 'completed':
      return { bg: 'bg-gray-100 border-gray-300', text: 'text-gray-700', dot: 'bg-gray-500', label: 'Completed' };
    case 'in-progress':
      return { bg: 'bg-blue-50 border-blue-200', text: 'text-blue-700', dot: 'bg-blue-500', label: 'In Progress' };
    case 'scheduled':
      return { bg: 'bg-amber-50 border-amber-200', text: 'text-amber-700', dot: 'bg-amber-500', label: 'Scheduled' };
    default:
      return { bg: 'bg-gray-50 border-gray-200', text: 'text-gray-700', dot: 'bg-gray-500', label: 'Unknown' };
  }
}

export const StatusChip: React.FC<StatusChipProps> = ({ status, className }) => {
  const config = getStatusConfig(status);
  return (
    <div className={`inline-flex items-center px-4 py-2 rounded-full border text-xs font-medium ${config.bg} ${config.text} ${className || ''}`}>
      <span className={`w-2.5 h-2.5 rounded-full ${config.dot} mr-2`}></span>
      {config.label}
    </div>
  );
}; 