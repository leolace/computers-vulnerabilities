<script lang="ts">
	import { onMount } from 'svelte';
	import '../global.css';

	let scrollX = 0;
	let startYear = 1950;
	let slotSize = 2000;

	const SCROLL_AMOUNT = 10;
	const SCROLL_SPEED = 2;
	const SCROLL_OFFSET = 600;
	const MAX_SCROLL = 500;
	const MARGIN_LEFT = 130;

	const contents = [{ title: 'Titulo 1' }, { title: 'Titulo 2' }, { title: 'teste' }];

	onMount(() => {
		window.scrollTo(0, 0);
		console.log(slotSize * (window.innerWidth / 1000));

		const scroll = (e: WheelEvent) => {
			console.log(scrollX);
			if (e.deltaY < 0) {
				if (scrollX - SCROLL_AMOUNT < 0) return;
				scrollX -= SCROLL_AMOUNT * SCROLL_SPEED;
				window.scrollTo({ left: scrollX, top: 0, behavior: 'smooth' });
			} else {
				if (scrollX >= document.body.scrollWidth - MAX_SCROLL) return;
				scrollX += SCROLL_AMOUNT * SCROLL_SPEED;
				if (scrollX < SCROLL_OFFSET) return;
				window.scrollTo({ left: scrollX, top: 0, behavior: 'smooth' });
			}
		};
		document.body.addEventListener('wheel', scroll);

		return () => {
			document.body.removeEventListener('wheel', scroll);
		};
	});

	const resetTimeline = () => {
		const DECREMENT_RATE = 50;

		let id = setInterval(() => {
			if (scrollX <= DECREMENT_RATE) return clearInterval(id);
			scrollX -= DECREMENT_RATE;
		}, 1);
		window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
	};
</script>

<!--TODO: separate in components -->
<main>
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
</main>

<style lang="scss">
	h1 {
		color: #fff;
	}

	main {
		position: relative;
		height: 100dvh;
		overflow-x: hidden;
		overflow-y: hidden;

	// TODO: define a dinamic width
		width: 400rem;
	}

	.timeline-container {
		position: absolute;
		bottom: 10%;
		width: 100%;
	}

	.reset {
		position: absolute;
		top: 3rem;
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
		z-index: 100;
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
