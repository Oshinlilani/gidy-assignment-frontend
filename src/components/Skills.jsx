import { endorseSkill } from "../services/api";

export default function Skills({ profile, refresh, onAddSkills }) {

  const handleEndorse = async (id) => {
    await endorseSkill(id);
    refresh();
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">Skills</h3>
        <button 
          onClick={onAddSkills}
          className="w-8 h-8 border-2 border-gray-300 rounded-full flex items-center justify-center text-gray-400 hover:border-gray-400"
        >
          +
        </button>
      </div>

      <div className="flex flex-wrap gap-3">

        {profile.skills.map(skill => (

          <div
            key={skill._id}
            className="border px-3 py-1 rounded-full flex items-center gap-2"
          >
            {skill.name}

            <button
              onClick={() => handleEndorse(skill._id)}
              className="text-blue-500"
            >
              👍 {skill.endorsements}
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}