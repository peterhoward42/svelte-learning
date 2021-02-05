<script>

	// Import custom cpts we are going to use.
	import Inner from "./Inner.svelte";
	import InnerCpt from "./Inner.svelte";
	import BtnEmitter from "./BtnEmitter.svelte"
	import TimedInput from "./TimedInput.svelte"
	import ConsumesStore from "./ConsumesStore.svelte"

	// Expose some plain objects.
	export let name;

	// Assemble some props we are going to use into an object.
	const innerProps = {
		sex: "male",
		age: 99,
	};


	// Define handler for mouse moved.
	function handleMouseMoved(event) {
		console.log('Received mouse move evt')
	}

	// Define handler for the child BtnEmitter component's events.
	function handleBtnEmitterEvt(event) {
		console.log("Click count: ", event.detail.count)
	}

	// Demonstrate that the javascript global "document" is accessible here.
	console.log("JS global document is: ", document)
	
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

		<!-- Include a cpt that shows 2-way data binding -->
		<TimedInput></TimedInput>

		<!-- Include a cpt that consumes a store value -->
		<ConsumesStore></ConsumesStore>

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
