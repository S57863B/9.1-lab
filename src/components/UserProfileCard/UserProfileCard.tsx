import React from 'react';
import type { UserProfileCardProps } from '../../types/index.ts';

export const UserProfileCard: React.FC<UserProfileCardProps> = ({
  user,
  showEmail = false,
  showRole = false,
  onEdit,
  children
}) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-sm p-6 bg-white">
      <div className="flex items-center space-x-4 mb-4">
        {user.avatarUrl ? (
          <img 
            src={user.avatarUrl} 
            alt={`${user.name}'s profile`} 
            className="w-16 h-16 rounded-full object-cover border-2 border-gray-100" 
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 text-xl font-bold">
            {user.name.charAt(0)}
          </div>
        )}
        
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900">{user.name}</h3>
          {showRole && <p className="text-sm font-medium text-indigo-600">{user.role}</p>}
          {showEmail && <p className="text-sm text-gray-500">{user.email}</p>}
        </div>
      </div>

      {onEdit && (
        <button
          onClick={() => onEdit(user.id)}
          className="w-full bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium py-2 px-4 border border-gray-300 rounded transition duration-150 mb-4"
        >
          Edit Profile
        </button>
      )}

      {children && <div className="mt-2 pt-4 border-t border-gray-100">{children}</div>}
    </div>
  );
};