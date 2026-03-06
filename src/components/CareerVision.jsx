export default function CareerVision({ profile }) {
  const cv = profile.careerVision;

  return (
    <div className="bg-white p-5 rounded-xl shadow-md">
      <div className="flex items-center justify-between">
        <h3 className="text-gray-500 text-sm">You're Career Vision</h3>
        <button className=" border border-gray-100 bg-gray-100 rounded-full p-1">✨</button>
      </div>
      <h2 className="text-xl font-semibold mb-3">{cv.title || 'Founder & CEO'}</h2>
      <hr className="text-gray-100 mb-3" />
      
      <div className="grid grid-cols-3 gap-6">
        <div>
          <p className="text-gray-500 text-xs mb-1">What you're growing into right now</p>
          <p className="font-semibold">{cv.growingInto}</p>
        </div>
        <div>
          <p className="text-gray-500 text-xs mb-1">The space you want to grow in</p>
          <p className="font-semibold">{cv.spaceToGrow}</p>
        </div>
        <div>
          <p className="text-gray-500 text-xs mb-1">Inspired by</p>
          <p className="font-semibold">{cv.inspiredBy}</p>
        </div>
      </div>
    </div>
  );
}