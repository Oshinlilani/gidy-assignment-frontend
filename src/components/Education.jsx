export default function Education({ education, onAddEducation }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-lg">Education</h3>
        <button 
          onClick={onAddEducation}
          className="w-8 h-8 border-2 border-gray-300 rounded-full flex items-center justify-center text-gray-400 hover:border-gray-400"
        >
          +
        </button>
      </div>

      {education && education.length > 0 ? (
        <div className="space-y-4">
          {education.map((edu, index) => (
            <div key={index} className="flex gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded flex items-center justify-center flex-shrink-0">
                🎓
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{edu.degree}</p>
                    <p className="text-gray-600">{edu.institution}</p>
                    {edu.fieldOfStudy && <p className="text-gray-500 text-sm">{edu.fieldOfStudy}</p>}
                    <p className="text-gray-400 text-sm">{edu.startDate} - {edu.endDate}</p>
                    {edu.grade && <p className="text-gray-500 text-sm">Grade: {edu.grade}</p>}
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">⋮</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center py-8 text-gray-500">
          <button onClick={onAddEducation} className="flex items-center gap-2 text-sm">
            🎓 Add Your Education!
          </button>
        </div>
      )}
    </div>
  );
}
