import React from 'react';
import { Inbox } from 'lucide-react';

interface EmptyStateProps {
  message: string;
  description?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ message, description }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <Inbox className="w-16 h-16 text-gray-400 mb-4" />
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {message}
      </h3>
      {description && (
        <p className="text-gray-600 dark:text-gray-400 text-center max-w-md">
          {description}
        </p>
      )}
    </div>
  );
};
