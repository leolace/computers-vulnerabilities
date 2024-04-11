<script lang="ts">
	import { onMount } from 'svelte';
	import '../global.css';

	let scrollX = 0;
	let startYear = 1950;
	const SCROLL_AMOUNT = 20;
	const SCROLL_OFFSET = 600;

	onMount(() => {
		window.scrollTo(0, 0);
		const scroll = (e: WheelEvent) => {
			if (e.deltaY < 0) {
				if (scrollX - SCROLL_AMOUNT < 0) return;
				scrollX -= SCROLL_AMOUNT;
				window.scrollTo({ left: scrollX, top: 0, behavior: 'smooth' });
			} else {
				if (scrollX >= document.body.scrollWidth - 510) return;
				scrollX += SCROLL_AMOUNT;
				console.log(document.body.scrollWidth);
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
		let id = setInterval(() => {
			scrollX -= 10;
			if (scrollX <= 0) clearInterval(id);
		}, 1);
		window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
	};
</script>

<main>
	<div class="content">
		<h1>titulo da pagina!</h1>
	</div>

	<div class="timeline-container">
		<div class="timeline">
			<div class="marker-container" style={`left: ${scrollX}px`}>
				<span class="marker"></span>
				<span class="text">{Math.trunc(startYear + scrollX / 500)}</span>
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
		height: 90dvh;
		width: 300rem;
		overflow-x: hidden;
		overflow-y: hidden;
	}

	.timeline-container {
		position: absolute;
		left: 30rem;
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
		font-size: 1.5rem;
		text-align: center;
	}

	.marker {
		display: block;
		width: 1.25rem;
		height: 1.25rem;
		background-color: #fff;
		border-radius: 50%;
	}
</style>
