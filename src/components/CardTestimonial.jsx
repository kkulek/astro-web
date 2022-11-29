import React from "react";
import { motion } from "framer-motion";

export default function CardTestimonial({ item, index }) {
	const { name, twitter, photo, body, hashtag } = item;

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0, x: "-100%" }}
			animate={{ opacity: 1, scale: 1, x: 0 }}
			transition={{ duration: 0.5, delay: 0.1 * index }}
			class="overflow-hidden bg-white rounded-md"
		>
			<div class="px-5 py-6">
				<div class="flex items-center justify-between">
					<img
						class="flex-shrink-0 object-cover w-10 h-10 rounded-full"
						src={`/src/images/testimonials/${photo}`}
						alt={name}
					/>
					<div class="min-w-0 ml-3 mr-auto">
						<p class="text-base font-semibold text-black truncate">{name}</p>
						<p class="text-sm text-gray-600 truncate">@{twitter}</p>
					</div>
					<a
						href={`https://twitter.com/${twitter}`}
						target="_blank"
						title=""
						class="inline-block text-sky-500"
					>
						<svg
							class="w-6 h-6"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
						>
							<path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
						</svg>
					</a>
				</div>
				<blockquote class="mt-5">
					<p class="text-base text-gray-800">
						{body}
						<br />
						{hashtag.map((item) => (
							<span class="inline text-sky-500">{item} </span>
						))}
					</p>
				</blockquote>
			</div>
		</motion.div>
	);
}
