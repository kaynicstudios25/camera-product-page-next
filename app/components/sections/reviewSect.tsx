import Image from "next/image";
import {reviews} from "@/app/components/constants/reviews";
import { FaStar } from 'react-icons/fa';



export default function ReviewSection() {
    const average = [
        {avg: "98%", type:"Rating" },
        {avg: "4.8", type:"Quality"},
        {avg: "4.6", type:"Value"}
    ]

    const avgRating = 4
    const stars = Array(5).fill(0)
    const color = {
        yellow: "#FDCC0D",
        gray: "#a9a9a9"
    }

    const ratingData = [
        {stars: 5, percentage: 68},
        {stars: 4, percentage: 20},
        {stars: 3, percentage: 7},
        {stars: 2, percentage: 3},
        {stars: 1, percentage: 2},
    ]

    return (
        <section className="py-2 lg:flex justify-center">
            <div className="max-w-6xl px-4 flex-auto justify-center items-center">
                <div className="flex justify-between items-center gap-16">
                    <div>
                      <h1 className="text-6xl text-gray-100 font-black">4.5</h1>  
                      <div className="flex gap-1">
                        {stars.map((_, i) => {
                          return (
                            <FaStar
                                key={i}
                                size={24}
                                color={(avgRating) > i ? color.yellow : color.gray}
                             />
                          )
                        })}
                      </div>
                      <p className="text-2xl text-gray-100">Reviews</p>
                    </div>
                    <div className="space-y-3 flex-1 min-w-0">
                        {ratingData.map((item) => (
                          <div key={item.stars} className="flex items-center gap-4 min-w-0">

                            {/* Star Label */}
                            <span className="w-4 text-sm font-medium text-gray-100">{item.stars}</span>

                            {/* Progress Bar Container */}
                            <div className="relative flex-1 h-2 bg-gray-800/20 rounded-full overflow-hidden">
                              {/* Actual Progress Fill */}
                              <div
                                className="absolute top-0 left-0 h-full w-full bg-orange-500 rounded-full transition-all duration-500"
                                style={{ width: `${item.percentage}%` }}
                              />
                            </div>

                            {/* Percentage Label */}
                            <span className="w-10 text-right text-sm text-gray-400">
                              {item.percentage}%
                            </span>

                          </div>
                        ))}
                        </div>

                    <div className="flex gap-2 p-4">
                        {average.map((i) => (
                            <div className="flex flex-col justify-center items-center border-2 aspect-square border-gray-100 rounded-lg w-38 bg-gray-50/10">
                                <h1 className="text-6xl font-extrabold text-orange-600">{i.avg}</h1>
                                <p className="text-2xl font-medium text-gray-100">{i.type}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {reviews.map((item) => (
                        <div key={item.id} className="text-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col">

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
                                    <span key={i} className={i < item.rating ? "text-yellow-400" : "text-gray-300"}>
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
            </div>
        </section>
    );
}