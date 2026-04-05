import Image from "next/image";
import {reviews} from "@/app/components/constants/reviews";

export default function ReviewSection() {
    return (
        <section className="py-4 ">
            <div className="max-w-6xl px-4 flex-auto justify-center items-center">
                <h2 className="text-2xl text-gray-200 font-bold mb-8 text-left">Customer Reviews</h2>

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
                                {[...Array(5)].map((_, i) => (
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