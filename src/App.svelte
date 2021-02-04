<script>
	export let name;

	const innerProps = {
		sex: "male",
		age: 99,
	};

	import Inner from "./Inner.svelte";
	import InnerCpt from "./Inner.svelte";
	import BtnEmitter from "./BtnEmitter.svelte"

	function handleMouseMoved(event) {
		console.log('Received mouse move evt')
	}

	// Handler for the child BtnEmitter component's events.
	function handleBtnEmitterEvt(event) {
		console.log("Click count: ", event.detail.count)
	}
	
</script>

<main>
	<!-- Receive mouse movement -->
	<div on:mousemove={handleMouseMoved}>
		<h1>Hello {name}!</h1>
		<p>
			Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to
			learn how to build Svelte apps.
		</p>

		<!-- How to compose with another component, using spread for props -->
		<InnerCpt {...innerProps} />

		<!-- Include a button component that emits events-->
		<BtnEmitter on:custombuttonclicked={handleBtnEmitterEvt}></BtnEmitter>
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
