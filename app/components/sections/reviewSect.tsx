import Image from 'next/image';
import { reviews } from '@/app/components/constants/reviews';
import { FaStar } from 'react-icons/fa';

export default function ReviewSection() {
  const average = [
    { avg: '98%', type: 'Rating' },
    { avg: '4.8', type: 'Quality' },
    { avg: '4.6', type: 'Value' },
  ];

  const avgRating = 4;
  const stars = Array(5).fill(0);
  const color = {
    yellow: '#FDCC0D',
    gray: '#a9a9a9',
  };

  const ratingData = [
    { stars: 5, percentage: 68 },
    { stars: 4, percentage: 20 },
    { stars: 3, percentage: 7 },
    { stars: 2, percentage: 3 },
    { stars: 1, percentage: 2 },
  ];

  return (
    <section className="flex-flex-col md:flex-col md:w-[75%] m-auto">
      {/* Review Info Header */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-16 mb-12">
        {/* Left: Main Review AVG */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-auto">
          <h1 className="text-6xl text-gray-100 font-black">4.5</h1>
          <div className="flex gap-1 my-2">
            {stars.map((_, i) => (
              <FaStar
                key={i}
                size={24}
                color={avgRating > i ? color.yellow : color.gray}
              />
            ))}
          </div>
          <p className="text-2xl text-gray-100">Reviews</p>
        </div>

        {/* Center: Rating Progress bars */}
        <div className="w-full lg:flex-1 space-y-3">
          {ratingData.map((item) => (
            <div key={item.stars} className="flex items-center gap-4">
              <span className="w-4 text-sm font-medium text-gray-100">
                {item.stars}
              </span>
              <div className="relative flex-1 h-2 bg-gray-800/20 rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-orange-500 rounded-full transition-all duration-500"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
              <span className="w-10 text-right text-sm text-gray-400">
                {item.percentage}%
              </span>
            </div>
          ))}
        </div>

        {/* Right: Rating Cards (Quality, Value, etc.) */}
        <div className="grid grid-cols-3 lg:flex lg:flex-row gap-4 w-full lg:w-auto">
          {average.map((i, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-center items-center border border-gray-100/20 rounded-lg p-4 bg-gray-50/10 min-w-25"
            >
              <h1 className="text-2xl lg:text-3xl font-extrabold text-gray-100">
                {i.avg}
              </h1>
              <p className="text-xs lg:text-sm font-medium text-gray-100 uppercase tracking-wider">
                {i.type}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((item) => (
          <div
            key={item.id}
            className="text-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col"
          >
            {/* Header: Avatar and Name */}
            <div className="flex items-center gap-4 mb-4">
              <div className="relative w-12 h-12 overflow-hidden rounded-full border">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-gray-100">{item.name}</h4>
                <p className="text-xs text-gray-200">{item.date}</p>
              </div>
            </div>

            {/* Rating Stars */}
            <div className="flex mb-3">
              {stars.map((_, i) => (
                <span
                  key={i}
                  className={
                    i < item.rating ? 'text-yellow-400' : 'text-gray-300'
                  }
                >
                  ★
                </span>
              ))}
            </div>

            {/* Review Text */}
            <p className="text-gray-200 text-sm leading-relaxed grow">
              "{item.review}"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
