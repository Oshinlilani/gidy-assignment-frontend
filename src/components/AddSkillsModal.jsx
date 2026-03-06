import { useState } from "react";

export default function AddSkillsModal({ existingSkills = [], onClose, onSave }) {
  const availableSkills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Express.js',
    'Django', 'Svelte', 'PostgreSQL', 'MongoDB', 'HTML',
    'CSS', 'Git', 'REST APIs', 'Angular', 'Vue.js'
  ];

  const [selectedSkills, setSelectedSkills] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleSkill = (skill) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter(s => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const isSkillSelected = (skill) => {
    return selectedSkills.includes(skill);
  };

  const isSkillExisting = (skill) => {
    return existingSkills.some(s => s.name === skill);
  };

  const filteredSkills = availableSkills.filter(skill =>
    skill.toLowerCase().includes(searchTerm.toLowerCase()) &&
    !isSkillExisting(skill) &&
    !isSkillSelected(skill)
  );

  const handleSubmit = () => {
    onSave(selectedSkills);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setShowDropdown(true);
  };

  const handleSkillClick = (skill) => {
    toggleSkill(skill);
    setSearchTerm('');
    setShowDropdown(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center" style={{ backgroundColor: 'rgba(128, 128, 128, 0.5)', zIndex: 9999 }}>
      <div className="bg-white rounded-lg p-6 max-w-lg w-full shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg text-gray-500 font-semibold">Skills</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl">
            ✕
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mb-2">
          {availableSkills.map((skill) => {
            const isExisting = isSkillExisting(skill);
            const isSelected = isSkillSelected(skill);
            
            if (!isExisting && !isSelected) return null;
            
            return (
              <button
                key={skill}
                onClick={() => !isExisting && toggleSkill(skill)}
                disabled={isExisting}
                className={`px-3 py-1 rounded-full text-sm flex items-center gap-2 ${
                  isExisting
                    ? 'bg-gray-200 text-gray-500'
                    : 'bg-blue-100 text-blue-700 border border-blue-300'
                }`}
              >
                {skill}
                <span className="text-gray-400">✕</span>
              </button>
            );
          })}
        </div>

        <div className="pt-1 relative">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            onFocus={() => setShowDropdown(true)}
            placeholder="+ Skills"
            className="px-3 py-2 rounded focus:outline-none focus:border-blue-500 text-sm"
          />
          
          {showDropdown && filteredSkills.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white shadow-lg max-h-48 overflow-y-auto z-10">
              {filteredSkills.map((skill) => (
                <div
                  key={skill}
                  onClick={() => handleSkillClick(skill)}
                  className="px-4 py-2 hover:bg-blue-50 cursor-pointer text-sm"
                >
                  {skill}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex gap-4 mt-6">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 px-4 py-2 text-xs text-gray-600 hover:bg-gray-50 rounded border border-gray-300"
          >
            CANCEL
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            disabled={selectedSkills.length === 0}
            className="flex-1 px-4 py-2 text-xs bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}
