<script>
    export let sex;
    export let age;
    const fruits = ['apple', 'banana', 'orange'];

    // A reactive variable.
    //
    // Preceding a load-time statement with $: causes the statement
    // to be re-run whenever the objects it refers to have changed.
    $: doubled = 2 * age;
</script>

<!-- A MVP component to show consumption of props -->
<p>Just a paragraph with this sex: {sex}, and this age: {age}</p>
<p>And age doubled: {doubled}</p>
<p />
<p>Now an each loop</p>
{#each fruits as fruit}
    <ul>
        <li>
            Item is: {fruit}
        </li>
    </ul>
{/each}
