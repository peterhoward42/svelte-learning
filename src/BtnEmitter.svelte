<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    let clicks = 0;

    function handleClicked() {
        clicks++
        // The first argument to dispatched defines the string that
        // a subscriber uses as per : on:custombuttonclicked.

        // The event payload object is available to the subscriber from
        // evt.detail.
        dispatch("custombuttonclicked", {
            count: clicks,
        });
    }
</script>

<!-- A Component with a button in, that emits events when
the button gets pressed. -->
<div>
    <button type="button" on:click={handleClicked}>Click Me!</button>
</div>
