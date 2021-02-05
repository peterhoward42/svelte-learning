<script>
    import { createEventDispatcher } from "svelte";
    import { clickCount } from "./store.js"

    const dispatch = createEventDispatcher();

    let clicks = 0;

    function handleClicked() {
        clicks++
        // Emit an event.
        // The event payload object is available to the subscriber from
        // evt.detail.
        dispatch("custombuttonclicked", {
            count: clicks,
        });
        // Update the store similarly.
        clickCount.set(clicks)
    }
</script>

<!-- A Component with a button in, that emits events when
the button gets pressed. -->
<div>
    <button type="button" on:click={handleClicked}>Click Me!</button>
</div>
