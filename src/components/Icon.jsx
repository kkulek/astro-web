// import IconHeart from "./icons/IconHeart.astro";
// import IconSearch from "./icons/IconSearch.astro";
// import IconShake from "./icons/IconShake.astro";

import IconHeart from "./icons/IconHeart";
import IconSearch from "./icons/IconSearch";
import IconShake from "./icons/IconShake";

// const { icon, color } = Astro.props;

import React, { useEffect } from "react";

export default function Icon({ icon, color }) {
	useEffect(() => {
		console.log("icon ICON:" + icon);
		console.log("iconColor ICON:" + color);
	}, []);

	return (
		<span class="w-12 h-12 flex-shrink-0">
			{icon === "heart" && <IconHeart color={color} />}
			{icon === "shake" && <IconShake color={color} />}
			{icon === "search" && <IconSearch color={color} />}
		</span>
	);
}
