<script lang="ts">
	import { onMount } from 'svelte';
	import '../global.css';

	let scrollX = 0;
	let startYear = 1950;
	const SCROLL_AMOUNT = 20;
	const SCROLL_OFFSET = 600;
	const MAX_SCROLL = 500;
	let slot_size = 2000;

	const contents = [{ title: 'Titulo 1' }, { title: 'Titulo 2' }, { title: 'teste' }];

	onMount(() => {
		window.scrollTo(0, 0);
		console.log(document.body.scrollWidth);
		// slot_size = document.body.scrollWidth / 5;
		const scroll = (e: WheelEvent) => {
			if (e.deltaY < 0) {
				if (scrollX - SCROLL_AMOUNT < 0) return;
				scrollX -= SCROLL_AMOUNT;
				window.scrollTo({ left: scrollX, top: 0, behavior: 'smooth' });
			} else {
				if (scrollX >= document.body.scrollWidth - MAX_SCROLL) return;
				scrollX += SCROLL_AMOUNT;
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

<main>
	<div class="container">
		{#each contents as content}
			<div class="content" style={`max-width: ${slot_size}px`}>
				<h1>{content.title}</h1>
			</div>
		{/each}
	</div>

	<div class="timeline-container">
		<div class="timeline">
			<div class="marker-container" style={`left: ${scrollX}px`}>
				<span class="marker"></span>
				<span class="text">{Math.trunc(startYear + scrollX / slot_size)}</span>
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
		width: 400rem;
		overflow-x: hidden;
		overflow-y: hidden;
	}

	.timeline-container {
		position: absolute;
		left: 30rem;
		bottom: 10%;
		width: 100%;

		@media (max-width: 900px) {
			left: 5rem;
		}
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
	}

	.content {
		flex: 1;
		height: 100%;
		transform: translateX(30rem);
		max-width: 50rem;
		border-right: 1px solid red;
	}
</style>
