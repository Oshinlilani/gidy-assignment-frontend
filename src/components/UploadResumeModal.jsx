import { useState } from "react";

export default function UploadResumeModal({ onClose, onSave }) {
  const [resumeFile, setResumeFile] = useState(null);
  const [resumeUrl, setResumeUrl] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResumeFile(file);
      // In a real app, you would upload to a server and get a URL
      // For now, we'll just use the file name
      setResumeUrl(file.name);
    }
  };

  const handleSubmit = () => {
    if (resumeUrl) {
      onSave(resumeUrl);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center" style={{ backgroundColor: 'rgba(128, 128, 128, 0.5)', zIndex: 9999 }}>
      <div className="bg-white rounded-lg p-8 max-w-md w-full shadow-xl">
        <h2 className="text-xl font-semibold mb-6">Upload Your Resume</h2>

        <div className="space-y-4">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-3xl">☁️</span>
              </div>
              <div>
                <p className="text-gray-700 mb-2">
                  {resumeFile ? resumeFile.name : 'Drag and drop your resume here'}
                </p>
                <p className="text-gray-500 text-sm mb-4">or</p>
                <label className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600">
                  Browse Files
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
              </div>
              <p className="text-gray-400 text-xs">Supported formats: PDF, DOC, DOCX (Max 5MB)</p>
            </div>
          </div>

          {resumeFile && (
            <div className="bg-green-50 border border-green-200 rounded p-3 flex items-center gap-2">
              <span className="text-green-600">✓</span>
              <span className="text-sm text-gray-700">{resumeFile.name}</span>
            </div>
          )}
        </div>

        <div className="flex gap-4 mt-6">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded border border-gray-300"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!resumeFile}
            className="flex-1 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}
