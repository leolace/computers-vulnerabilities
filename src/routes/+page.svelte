<script lang="ts">
	import { onMount } from 'svelte';
	import '../global.css';

	let scrollX = 0;
	let startYear = 1950;
	let slotSize = 2000;

	const SCROLL_AMOUNT = 100;
	const SCROLL_OFFSET = 600;
	const MAX_SCROLL = 500;
	const MARGIN_LEFT = 130;
	const SCROLL_SPEED = 0.0;
	const SCROLL_ACCELERATION = SCROLL_AMOUNT / (SCROLL_SPEED * 10000);
	let scrolling_right = false;
	let scrolling_left = false;

	const contents = [{ title: 'Titulo 1' }, { title: 'Titulo 2' }, { title: 'teste' }];

	const goLeft = () => {
		scrolling_right = false;
		const beforeScrollX = scrollX - SCROLL_AMOUNT;
		let id = setInterval(() => {
			const isLimit = scrollX <= 0;
			if (beforeScrollX > scrollX || isLimit || scrolling_right) return clearInterval(id);
			scrolling_left = true;

			window.scrollTo({ left: scrollX - window.innerWidth / 3, top: 0, behavior: 'instant' });
			scrollX -= 1;
		}, SCROLL_ACCELERATION);
	};

	const goRight = () => {
		scrolling_left = false;
		if (scrollX >= document.body.scrollWidth - MAX_SCROLL) return;
		const beforeScrollX = scrollX + SCROLL_AMOUNT;
		let id = setInterval(() => {
			const isLimit = scrollX >= document.body.scrollWidth - MAX_SCROLL;
			if (beforeScrollX < scrollX || isLimit || scrolling_left) return clearInterval(id);
			scrolling_right = true;

			if (scrollX < window.innerWidth / 3) {
				scrollX += 1;
				return;
			}
			window.scrollTo({ left: scrollX - window.innerWidth / 3, top: 0, behavior: 'instant' });
			scrollX += 1;
		}, SCROLL_ACCELERATION);
	};

	onMount(() => {
		window.scrollTo(0, 0);

		const scroll = (e: WheelEvent) => {
			console.log(scrollX);
			if (e.deltaY < 0) {
				goLeft();
			} else {
				goRight();
			}
		};
		document.body.addEventListener('wheel', scroll);

		document.body.addEventListener('touchstart', () => {
			document.body.style.overflowX = 'hidden';
		});

		document.body.addEventListener('touchend', () => {
			document.body.style.overflowX = 'auto';
		});

		return () => {
			document.body.removeEventListener('wheel', scroll);
			document.body.removeEventListener(
				'touchstart',
				() => (document.body.style.overflowX = 'hidden')
			);
			document.body.removeEventListener('touchend', () => (document.body.style.overflowX = 'auto'));
		};
	});

	const resetTimeline = () => {
		const DECREMENT_RATE = 50;

		let id = setInterval(() => {
			if (scrollX <= 0) {
				scrollX = 0;
				return clearInterval(id);
			}
			scrollX -= DECREMENT_RATE;
		}, 1);
		window.scrollTo({ left: 0, top: 0, behavior: 'instant' });
	};
</script>

<!--TODO: separate in components -->
<main>
	<div class="navigation">
		<button class="left-btn" on:click={goLeft}>left</button>
		<button class="right-btn" on:click={goRight}>right</button>
	</div>

	<section class="scroll-container">
		<div class="container" style={`left: ${MARGIN_LEFT}px`}>
			{#each contents as content}
				<div class="content" style={`max-width: ${slotSize}px`}>
					<h1>{content.title}</h1>
				</div>
			{/each}
		</div>

		<div class="timeline-container" style={`left: ${MARGIN_LEFT}px`}>
			<div class="timeline">
				<div class="marker-container" style={`left: ${scrollX}px`}>
					<span class="marker"></span>
					<span class="text">{Math.trunc(startYear + scrollX / slotSize)}</span>
				</div>
			</div>
			<div class="reset" style={`left: ${scrollX}px`}>
				<button on:click={resetTimeline}>voltar</button>
			</div>
		</div>
	</section>
</main>

<style lang="scss">
	h1 {
		color: #fff;
	}

	main {
		position: relative;

		// TODO: define a dinamic width
		height: 100dvh;
	}

	.scroll-container {
		height: 100dvh;
		position: relative;
		width: 400rem;
	}

	.navigation {
		position: fixed;
		left: 0;
		bottom: 0;
		display: flex;
		width: 100%;
		justify-content: space-between;
		padding: 1rem;
		z-index: 10;

		button {
			border: 1px solid #fff;
			font-size: 1rem;
			width: 3rem;
			height: 3rem;
			border-radius: 100%;
		}
	}

	.timeline-container {
		position: absolute;
		bottom: 10%;
		width: 100%;
	}

	.reset {
		position: absolute;
		top: 3rem;
		z-index: 101;
	}

	.timeline {
		height: 3px;
		background-color: #fff9;
		width: 100%;
		position: relative;
	}

	.marker-container {
		position: absolute;
		left: 0;
		top: 0;
		transform: translateY(-50%);
		z-index: 101;
		padding-left: 0.5rem;
	}

	.text {
		position: absolute;
		color: #fff;
		font-size: 5rem;
		top: -5rem;
		font-family: monospace;
		transform: translateX(-50%);
	}

	.marker {
		display: block;
		width: 1.25rem;
		height: 1.25rem;
		background-color: #fff;
		border-radius: 50%;
	}

	.container {
		padding: 1rem;
		display: flex;
		height: 100%;
		position: absolute;
		width: 100%;
	}

	.content {
		flex: 1;
		height: 100%;
		max-width: 50rem;
		border-right: 1px solid red;
	}
</style>
