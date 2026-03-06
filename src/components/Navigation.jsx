export default function Navigation() {
  return (
    <nav className="bg-white border-b px-8 py-4 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <span className="text-2xl">◇</span>
          <span className="font-semibold">Gidy</span>
        </div>
        <div className="flex gap-6 text-gray-600">
          <a href="#" className="hover:text-gray-900">Jobs</a>
          <a href="#" className="hover:text-gray-900">Hackathons</a>
          <a href="#" className="hover:text-gray-900">Projects</a>
          <a href="#" className="hover:text-gray-900">Tasks</a>
          <a href="#" className="hover:text-gray-900">Organization</a>
        </div>
      </div>
      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
        O
      </div>
    </nav>
  );
}
