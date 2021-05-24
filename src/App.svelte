<script>
	import Navbar from './components/header/Navbar.svelte';
	import Game from './components/main/game/Game.svelte';

	window.location.hash = '#home';

	let route = window.location.hash;

	window.addEventListener('hashchange', () => {
		route = window.location.hash;
	});
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://bootswatch.com/4/cyborg/bootstrap.min.css" />
	<title>Idle Crypto Investor</title>
</svelte:head>

<div id="app_internal">
	<header>
		<Navbar />
	</header>
	<main>
		{#if route === '#home'}
			<Game />
		{:else if route === '#donate'}
			<h1>Donate Page Goes Here</h1>
		{:else}
			<h1>
				Well, that was not supposed to happen, time to go back?
			</h1>
			<a href="/#home" class="btn btn-primary-btn-block">Home</a>
		{/if}
	</main>
	<footer />
</div>
