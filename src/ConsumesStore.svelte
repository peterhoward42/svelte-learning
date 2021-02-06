<script>
    import { clickCount } from "./store.js"
</script>

<!-- This is how you trigger the debugger in Chrome

    But it's commented out because it's a nuiscance.
-->

<!-- {@debug $clickCount} -->


<!-- A MVP component to show consumption of a store -->
<p>Store value is: {$clickCount}</p>
