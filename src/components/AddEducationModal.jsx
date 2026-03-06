import { useState } from "react";

export default function AddEducationModal({ onClose, onSave }) {
  const [formData, setFormData] = useState({
    college: '',
    degree: '',
    fieldOfStudy: '',
    location: '',
    startDate: '',
    endDate: '',
    currentlyStudying: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = () => {
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center" style={{ backgroundColor: 'rgba(128, 128, 128, 0.5)', zIndex: 9999 }}>
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[100vh] shadow-xl">
        <h2 className="text-lg text-gray-400 font-semibold mb-6">Add Your Education</h2>

        <div className="space-y-2 max-w-xs mx-auto overflow-y-auto max-h-[70vh]">
          <div>
            <label className="block text-sm text-gray-500 mb-1">
              College <span className="text-gray-500">*</span>
            </label>
            <select
              name="college"
              value={formData.college}
              onChange={handleChange}
              className="w-full px-3 py-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500 bg-white"
            >
              <option value=""></option>
              <option value="Harvard University">Harvard University</option>
              <option value="Stanford University">Stanford University</option>
              <option value="MIT">MIT</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-500 mb-1">
              Degree <span className="text-gray-500">*</span>
            </label>
            <input
              type="text"
              name="degree"
              value={formData.degree}
              onChange={handleChange}
              className="w-full px-3 py-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-500 mb-1">
              Field of Study <span className="text-gray-500">*</span>
            </label>
            <input
              type="text"
              name="fieldOfStudy"
              value={formData.fieldOfStudy}
              onChange={handleChange}
              className="w-full px-3 py-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-500 mb-1">
              Location <span className="text-gray-500">*</span>
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-3 py-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-500 mb-1">
              Date of joining <span className="text-gray-500">*</span>
            </label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="w-full px-3 py-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="currentlyStudying"
              checked={formData.currentlyStudying}
              onChange={handleChange}
              className="w-4 h-4"
            />
            <label className="text-sm text-gray-500">
              Currently studying here / not completed <span className="text-red-500">*</span>
            </label>
          </div>

          <div className="text-center text-gray-400 text-sm">OR</div>

          <div>
            <label className="block text-sm text-gray-500 mb-1">
              Date of completion <span className="text-gray-500">*</span>
            </label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              disabled={formData.currentlyStudying}
              className="w-full px-3 py-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500 disabled:bg-gray-100"
            />
          </div>
        </div>

        <div className="flex justify-end align-end gap-4 mt-6">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded border border-gray-300"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
