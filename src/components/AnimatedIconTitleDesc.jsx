import React from "react";
import { motion } from "framer-motion";
import Icon from "./Icon";

export default function AnimatedIconTitleDesc({ item, index }) {
	const { title, description, icon, iconColor } = item;

	return (
		<motion.div
			className="flex items-start mb-10"
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.5, delay: 0.15 * index }}
		>
			<Icon icon={icon} color={iconColor} />
			<div class="ml-5">
				<motion.h3
					class="text-xl font-semibold text-black"
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5, delay: 0.15 * index }}
				>
					{title}
				</motion.h3>
				<motion.p
					class="mt-3 text-base text-gray-600"
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5, delay: 0.15 * index }}
				>
					{description}
				</motion.p>
			</div>
		</motion.div>
	);
}
