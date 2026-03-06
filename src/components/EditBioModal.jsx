import { useState } from "react";

export default function EditBioModal({ profile, onClose, onSave }) {
  const [formData, setFormData] = useState({
    firstName: profile?.name?.split(' ')[0] || '',
    lastName: profile?.name?.split(' ')[1] || '',
    email: profile?.email || '',
    location: profile?.location || '',
    bio: profile?.bio || '',
    resume: profile?.resume || ''
  });
  const [resumeFile, setResumeFile] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResumeFile(file);
      // In a real app, you would upload to a server and get a URL
      // For now, we'll just use the file name
      setFormData({
        ...formData,
        resume: file.name
      });
    }
  };

  const handleSubmit = () => {
    const updatedProfile = {
      ...profile,
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      location: formData.location,
      bio: formData.bio,
      resume: formData.resume
    };
    onSave(updatedProfile);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center" style={{ backgroundColor: 'rgba(128, 128, 128, 0.5)', zIndex: 9999 }}>
      <div className="bg-white rounded-lg p-8 max-w-xl w-full max-h-[90vh] shadow-xl">

        <div className="space-y-2 max-w-xs mx-auto overflow-y-auto   max-h-[70vh]">

          <div className="flex flex-col items-center mb-4">
            <div className="relative">
              <img
                src={profile?.avatar || "https://i.pravatar.cc/100"}
                className="w-20 h-20 rounded-full"
                alt="Profile"
              />
              <button
                type="button"
                className="absolute bottom-0 right-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white"
              >
                ✓
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">First Name *</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-3 py-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Last Name *</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-3 py-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Email ID *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-3 py-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Bio <span className="text-gray-400">max character (800 - 0)</span>
            </label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              maxLength={800}
              rows={3}
              className="w-full px-3 py-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex items-center justify-center py-4">
            <label className="flex flex-col items-center gap-2 text-gray-400 hover:text-gray-600 cursor-pointer">
              <div className="w-12 h-12 border-2 border-dashed border-gray-300 rounded flex items-center justify-center">
                ☁️
              </div>
              <span className="text-sm">UPLOAD RESUME</span>
              {resumeFile && (
                <span className="text-xs text-green-600">{resumeFile.name}</span>
              )}
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </div>
        </div>


        <div className="flex justify-end  mt-1">
          <button
            type="button"
            onClick={onClose}
            className="px-1 py-1 text-xs text-blue-500 hover:bg-gray-50 rounded"
          >
            CANCEL
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="px-1 py-1 bg-gray-100 text-xs text-blue-500 rounded hover:bg-blue-600"
          >
            UPDATE
          </button>
        </div>


      </div>

    </div>
  );
}
