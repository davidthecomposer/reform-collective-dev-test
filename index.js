const startLoaderFake = () => {
	const loaderFake = gsap.timeline({ repeat: 0 });

	loaderFake.to(
		".loader-circle",
		{
			duration: 1,
			rotation: 360,
			transformOrigin: "50% 50%",
			ease: Linear.easeNone,
			repeat: -1,
		},
		0
	),
		loaderFake.to(
			".loading",
			{
				duration: 0,
				opacity: 0,
				zIndex: -5,
			},
			2
		),
		loaderFake.to(
			".loader-circle, .loader-icon",
			{
				duration: 1,
				opacity: 0,
			},
			1
		);
};

const setStage1Ani = (e) => {
	const stage1TL = gsap.timeline({ repeat: 0 });
	stage1TL.from(".stage-one-bg", { duration: 0.75, x: "-100vw" }, 0);
	stage1TL.from(".stage-1-porsche", { duration: 0.75, x: "-100vw" }, 0.1);
	stage1TL.from(".white-car", { duration: 0.75, x: "-100vw" }, 0.2);
	stage1TL.from(".A7-MY18", { duration: 0.75, x: "-100vw" }, 0.3);
	stage1TL.from(".logo-white", { duration: 0.75, opacity: "0" });
	if (window.innerWidth > 500) {
		stage1TL.from(
			".stage-1-phone",
			{ duration: 0.75, x: "10vw", opacity: 0 },
			0.75
		);
	}
	stage1TL.from(
		".drive-a-new",
		{ duration: 0.75, y: "-5vw", x: "-0.5vw", opacity: 0 },
		0.75
	);
	stage1TL.from(
		".arrow-1",
		{ duration: 0.6, y: "-6vw", x: "-0.1vw", opacity: 0 },
		0.9
	);
};

const setStage2Ani = () => {
	const stage2TL = gsap.timeline({
		repeat: 0,
		scrollTrigger: { trigger: ".two", start: "top center" },
	});
	stage2TL.from(".card-stats-container", {
		duration: 0.5,
		scaleX: "0",
		transformOrigin: "right",
	});
	stage2TL.from(".car-stats", { duration: 1, opacity: "0" }, 0.5);
	stage2TL.from(
		".select-a-vehicle",
		{ duration: 0.75, y: "-5vw", opacity: 0 },
		0.4
	);
	stage2TL.from(".select-text", { duration: 0.6, y: "-6vw", opacity: 0 }, 0.6);
	stage2TL.from(
		".range-rover-2",
		{ duration: 0.7, x: "40vw", opacity: 0 },
		0.3
	);
};

const setStage3Ani = () => {
	const stage3TL = gsap.timeline({
		repeat: 0,
		scrollTrigger: { trigger: ".three", start: "top center" },
	});
	stage3TL.from(".map", {
		duration: 0.75,
		scaleX: "0",
		transformOrigin: "right",
	});

	stage3TL.from(
		".delivered-to-door",
		{ duration: 0.75, y: "-5vw", opacity: 0 },
		0
	);
	stage3TL.from(".delivery-phone", { duration: 1, y: "-6vw", opacity: 0 }, 0.5);

	stage3TL.from(
		".delivered-text",
		{ duration: 0.6, y: "-6vw", opacity: 0 },
		0.4
	);
	stage3TL.from(
		".stage-3-porsche",
		{ duration: 0.7, x: "-30vw", opacity: 0 },
		0.5
	);
};

const setStage4Ani = () => {
	const stage4TL = gsap.timeline({
		repeat: 0,
		scrollTrigger: { trigger: ".four", start: "top center" },
	});
	stage4TL.from(
		".stage-4-left",
		{
			duration: 0.5,
			x: "-30vw",
		},
		0
	);
	stage4TL.from(
		".stage-4-phone",
		{
			duration: 0.5,
			y: "-5vw",
			opacity: 0,
		},
		0.5
	);
	stage4TL.from(".trade-in", { duration: 0.75, y: "-5vw", opacity: 0 }, 0.7);
	stage4TL.from(
		".trade-in-text",
		{ duration: 0.5, y: "-6vw", opacity: 0 },
		0.9
	);
};
const setStage5Ani = () => {
	const stage5TL = gsap.timeline({
		repeat: 0,
		scrollTrigger: { trigger: ".five", start: "top center" },
	});

	stage5TL.from(".pricing", { duration: 0.5, y: "-3vw", opacity: 0 }, 0);
	stage5TL.from(".insurance", { duration: 0.5, y: "-3vw", opacity: 0 }, 0.25);
	stage5TL.from(".maintenance", { duration: 0.5, y: "-3vw", opacity: 0 }, 0.75);
};
const setStage6Ani = () => {
	const stage6TL = gsap.timeline({
		repeat: 0,
		scrollTrigger: { trigger: ".six", start: "top center" },
	});
	stage6TL.from(
		".stage-6-left",
		{
			duration: 0.5,
			x: "-40vw",
		},
		0
	);

	stage6TL.from(
		".customer-img",
		{
			duration: 0.6,
			x: "-30vw",
			opacity: 0,
		},
		0.3
	);
	stage6TL.from(
		".stage-6-car",
		{ duration: 0.8, x: "-30vw", opacity: 0 },
		0.25
	);
	stage6TL.from(".stage-6-info", { duration: 0.3, y: "-1vw", opacity: 0 }, 0.5);
};

const landRoverPlay = () => {
	const landRoverAnimate = gsap.timeline({ repeat: 0 });
	landRoverAnimate.to(
		".range-rover-2",
		{ duration: 0.3, opacity: 0, x: "-20vw" },
		0
	);
	landRoverAnimate.fromTo(
		".porsche-2",
		{ x: "20vw", opacity: 0 },
		{ duration: 0.3, opacity: 1, x: "0vw" },
		0
	);
	landRoverAnimate.fromTo(
		".porsche-stats",
		{ y: "2vw", opacity: 0 },
		{ duration: 0.3, opacity: 1, y: "0vw" },
		0
	);
	landRoverAnimate.to(
		".land-rover-stats",
		{ duration: 0.3, opacity: 0, y: "-3vw" },
		0
	);
};

const porschePlay = () => {
	const porscheAnimate = gsap.timeline({ repeat: 0 });
	porscheAnimate.to(".porsche-2", { duration: 0.3, opacity: 0, x: "-20vw" }, 0);
	porscheAnimate.fromTo(
		".range-rover-2",
		{ x: "20vw", opacity: 0 },
		{ duration: 0.3, opacity: 1, x: "0vw" },
		0
	);
	porscheAnimate.fromTo(
		".land-rover-stats",
		{ y: "2vw", opacity: 0 },
		{ duration: 0.3, opacity: 1, y: "0vw" },
		0
	);
	porscheAnimate.to(
		".porsche-stats",
		{ duration: 0.3, opacity: 0, y: "-3vw" },
		0
	);
};

const animateCarStats = (classString) => {
	if (classString === "land-rover-stats") {
		porschePlay();
	} else {
		landRoverPlay();
	}
};

const changeCarPanel = () => {
	const allPanels = document.querySelectorAll(".car-stats");
	[...allPanels].forEach((panel) => {
		if ([...panel.classList].includes("active")) {
			panel.classList.remove("active");
		} else {
			const classString = panel.classList[1];
			panel.classList.add("active");

			animateCarStats(classString);
		}
	});
};

const eventListeners = () => {
	const arrowLeft = document.querySelector(".arrow-left");
	const arrowRight = document.querySelector(".arrow-right");
	arrowLeft.addEventListener("click", changeCarPanel);
	arrowRight.addEventListener("click", changeCarPanel);
};

// Initialized functions
startLoaderFake();
eventListeners();
window.setTimeout(() => {
	setStage1Ani();
}, 2000);
setStage2Ani();
setStage3Ani();
setStage4Ani();
setStage5Ani();
setStage6Ani();
