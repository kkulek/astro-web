import React from "react";
import { motion } from "framer-motion";

export default function AnimatedImg({ src, alt }) {
	return (
		<motion.img
			src={src}
			alt={alt}
			className="w-full rounded-lg shadow-xl"
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.5, delay: 0.2 }}
			whileHover={{
				scale: 1.02,
				transition: { duration: 0.5 },
			}}
		></motion.img>
	);
}
