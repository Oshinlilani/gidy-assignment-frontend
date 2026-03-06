import { useState } from "react";

export default function ProfileHeader({ profile, onEditProfile }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-start mb-4">
        <div className="flex gap-4">
          <img
            src={profile.avatar || "https://i.pravatar.cc/100"}
            className="w-16 h-16 rounded-full"
          />
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold">{profile.name}</h2>
              <span className="text-gray-500 text-sm">( Job Seeker )</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <button 
            onClick={() => setShowMenu(!showMenu)}
            className="text-gray-400 hover:text-gray-600"
          >
            ⋮
          </button>
          
          {showMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              <button
                onClick={() => {
                  setShowMenu(false);
                  onEditProfile();
                }}
                className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2 text-sm"
              >
                <span className="text-blue-500">✏️</span>
                Edit Profile
              </button>
              
            </div>
          )}
        </div>
      </div>

      <div className="flex items-start justify-between">
        <div className="flex-1">
          {profile.bio && (
            <p className="text-gray-700 mb-3">{profile.bio}</p>
          )}
          
          <p className="text-blue-500 flex items-center gap-1">
            <span>✉</span>
            {profile.email}
          </p>
        </div>

        <div className="ml-6 border border-gray-200 rounded-lg p-4">
          <div className="flex items-start gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center">
                🥉
              </div>
              <div>
                <p className="text-xs text-gray-500">League</p>
                <p className="font-semibold">{profile.league}</p>
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-500">Rank</p>
              <p className="font-semibold">{profile.rank}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Points</p>
              <p className="font-semibold">{profile.points}</p>
            </div>
          </div>
          
          <button className="text-yellow-500 hover:text-yellow-600 flex items-center gap-1 mt-3 text-sm">
            View My Rewards →
          </button>
        </div>
      </div>
    </div>
  );
}
