export default function LevelUpProfile({ profile, onCompleteBio, onAddEducation, onUploadResume }) {
  const completion = profile?.profileCompletion || 32;
  const hasBio = profile?.bio && profile.bio.length > 0;
  const hasEducation = profile?.education && profile.education.length > 0;
  const hasResume = profile?.resume && profile.resume.length > 0;

  return (
    <div className="bg-white p-6 rounded-lg shadow mb-6">
      <div className="flex items-center gap-2 text-gray-700 mb-2">
        <span>🎓</span>
        <span className="font-semibold">Level Up Profile</span>
      </div>
      <p className="text-sm text-gray-500 mb-4">
        Just a few clicks away from awesomeness, complete your profile!
      </p>
      
      <div className="mb-4">
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="text-gray-600">Progress: {completion}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-green-500 h-2 rounded-full transition-all duration-500" 
            style={{width: `${completion}%`}}
          ></div>
        </div>
      </div>

      <div className="space-y-3">
        {!hasBio && (
          <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded">
            <div className="flex-1 pointer-events-none">
              <div className="flex items-center gap-2">
                <span>Complete Your Bio 👍</span>
                <span className="text-green-600 text-sm">(+20%)</span>
              </div>
              <p className="text-xs text-gray-500">Tell us about yourself in a few words!</p>
            </div>
            <button 
              type="button"
              onClick={onCompleteBio}
              className="w-8 h-8 border-2 border-blue-300 rounded-full flex items-center justify-center text-blue-500 hover:bg-blue-50 flex-shrink-0 cursor-pointer z-10"
            >
              +
            </button>
          </div>
        )}

        {!hasEducation && (
          <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded">
            <div className="flex-1 pointer-events-none">
              <div className="flex items-center gap-2">
                <span>Add Your Education 🎓</span>
                <span className="text-green-600 text-sm">(+18%)</span>
              </div>
              <p className="text-xs text-gray-500">Highlight your academic achievements and qualifications.</p>
            </div>
            <button 
              type="button"
              onClick={onAddEducation}
              className="w-8 h-8 border-2 border-blue-300 rounded-full flex items-center justify-center text-blue-500 hover:bg-blue-50 flex-shrink-0 cursor-pointer"
            >
              +
            </button>
          </div>
        )}

        <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded">
          <div className="flex-1 pointer-events-none">
            <div className="flex items-center gap-2">
              <span>Upload Your Certificates 📜</span>
              <span className="text-green-600 text-sm">(+16%)</span>
            </div>
            <p className="text-xs text-gray-500">Boost your profile with relevant certifications and training.</p>
          </div>
          <button 
            type="button"
            className="w-8 h-8 border-2 border-blue-300 rounded-full flex items-center justify-center text-blue-500 hover:bg-blue-50 flex-shrink-0 cursor-pointer"
          >
            +
          </button>
        </div>

        {!hasResume && (
          <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded">
            <div className="flex-1 pointer-events-none">
              <div className="flex items-center gap-2">
                <span>Upload Your Resume 📄</span>
                <span className="text-green-600 text-sm">(+16%)</span>
              </div>
              <p className="text-xs text-gray-500">A strong resume increases your chances. Upload now!</p>
            </div>
            <button 
              type="button"
              onClick={onUploadResume}
              className="w-8 h-8 border-2 border-blue-300 rounded-full flex items-center justify-center text-blue-500 hover:bg-blue-50 flex-shrink-0 cursor-pointer"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
