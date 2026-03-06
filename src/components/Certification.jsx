export default function Certification() {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex items-center justify-between mb-1">
        <h3 className="font-semibold text-lg">Certification</h3>
        <button className="w-8 h-8 border-2 border-gray-300 rounded-full flex items-center justify-center text-gray-400 hover:border-gray-400">
          +
        </button>
      </div>

      <div className="flex items-center justify-center py-4 text-gray-500">
        <button className="flex items-center gap-2 text-sm">
          ⭐ Add Your Certifications!
        </button>
      </div>
    </div>
  );
}
