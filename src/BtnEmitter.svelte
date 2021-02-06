<script>
    // Third party imports.
    import { Button, Col, Row } from "sveltestrap";

    // Local imports.
    import { createEventDispatcher } from "svelte";
    import { clickCount } from "./store.js";

    const dispatch = createEventDispatcher();

    let clicks = 0;

    function handleClicked() {
        clicks++;
        // Emit an event.
        // The event payload object is available to the subscriber from
        // evt.detail.
        dispatch("custombuttonclicked", {
            count: clicks,
        });
        // Update the store similarly.
        clickCount.set(clicks);
    }
</script>

<!-- A Component with a button in, that emits events when
the button gets pressed. -->

<!-- Use some sveltestrap layout, components, and styling -->
<Row>
    <Col class="col-2">
        <Button color="primary" outline on:click={handleClicked}
            >Click Me!</Button
        >
    </Col>
    <Col class="col-2">
        <Button color="warning" outline>Hello World!</Button>
    </Col>
    <Col class="col-8">
    </Col>
</Row>
