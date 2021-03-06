export const basicAnimate = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	transition: { delay: 0.25, stiffness: 100, duration: 1 },
};

export const secondAnimate = {
	initial: { x: "-300" },
	animate: { x: 0 },
	transition: { type: "spring", stiffness: 120, duration: 4, mass: 2 },
};

export const thirdAnimate = {
	initial: { x: "300" },
};

export const customTransition = {
	transition: { delay: 0.5, stiffness: 100, duration: 1.75 }
}

export const extendBasicAnimate = {
	initial: { opacity: 0, scale: 0 },
	animate: { opacity: 1, scale: 1 },
	transition: { stiffness: 120, duration: 1 },
};