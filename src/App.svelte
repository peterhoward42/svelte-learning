<script>
	// You can import CSS with rollup. Here we apply a themed bootstrap CSS.
	import "bootswatch/dist/cyborg/bootstrap.min.css";

	// SvelteStrap Components
	import { Col, Container, Row } from "sveltestrap";

	// Import custom cpts we are going to use.
	import Inner from "./Inner.svelte";
	import InnerCpt from "./Inner.svelte";
	import BtnEmitter from "./BtnEmitter.svelte";
	import TimedInput from "./TimedInput.svelte";
	import ConsumesStore from "./ConsumesStore.svelte";

	// Expose some plain objects.
	export let name;

	// Assemble some props we are going to use into an object.
	const innerProps = {
		sex: "male",
		age: 99,
	};

	// Define handler for mouse moved.
	function handleMouseMoved(event) {
		console.log("Received mouse move evt");
	}

	// Define handler for the child BtnEmitter component's events.
	function handleBtnEmitterEvt(event) {
		console.log("Click count: ", event.detail.count);
	}

	// Demonstrate that the javascript global "document" is accessible here.
	console.log("JS global document is: ", document);
</script>

<!-- Receive mouse movement -->
<main on:mousemove={handleMouseMoved}>
	<Container >
		<h1>Hello {name}!</h1>

		<!-- How to compose with another component, using spread for props -->
		<InnerCpt  {...innerProps}/>

		<!-- Include a button component that emits events-->
		<BtnEmitter on:custombuttonclicked={handleBtnEmitterEvt} />

		<!-- Include a cpt that shows 2-way data binding -->
		<TimedInput />

		<!-- Include a cpt that consumes a store value -->
		<ConsumesStore />
	</Container>
</main>

<!-- We're using sveltestrap CSS globally -->

<!-- See bootstrap css import in script section. -->
<style>
</style>
