export default function Experience({ profile }) {
  const exp = profile.experience;

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-lg">Experience</h3>
        <button className="w-8 h-8 border-2 border-gray-300 rounded-full flex items-center justify-center text-gray-400 hover:border-gray-400">
          +
        </button>
      </div>

      <div className="flex gap-4">
        <div className="w-12 h-12 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
          📄
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold">{exp.role}</p>
              <p className="text-gray-600">{exp.company}</p>
              <p className="text-gray-400 text-sm">Started: {exp.startDate || 'Nov 2025'} · Ended: {exp.endDate || 'Feb 2026'}</p>
            </div>
            <button className="text-gray-400 hover:text-gray-600">⋮</button>
          </div>
        </div>
      </div>
    </div>
  );
}