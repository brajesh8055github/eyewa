import collections1 from '../Images/Collections1.webp';
import collections2 from '../Images/Collections2.webp';
import collections3 from '../Images/Collections3.webp';
export default function Seasonal() {
  return (
    <div className="px-4 md:px-16 py-10 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
        Seasonal Collection
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="col-span-1 sm:col-span-2 md:col-span-1">
          <img
             src={collections1}
             alt="Try on app demo"
            className="rounded-3xl w-full object-cover"
          />
        </div>

        <div className="relative">
          <img
             src={collections2}
             alt="Try on app demo"
            className="rounded-3xl w-full object-cover"
          />
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2 rotate-90 origin-left text-white text-lg font-semibold">
            Cut Summer
          </div>
        </div>

        <div className="relative">
          <img
             src={collections3}
             alt="Try on app demo"
            className="rounded-3xl w-full object-cover"
          />
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2 rotate-90 origin-left text-white text-lg font-semibold">
            Lens Slimtech
          </div>
        </div>
      </div>
    </div>
  );
}
