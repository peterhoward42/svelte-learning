<!--
This is just an input control, but which the script writes a different value
to on a timed interval. It has 2-way binding, so the user can change it also
in between times.

-->
<script>
    const altStrings = ['foo', 'bar', 'baz'];
    let idx = 0;
    let curText = altStrings[idx]
    setInterval(iterateIdx, 2000);

    function iterateIdx() {
        idx = (idx + 1) % 3
        curText = altStrings[idx]
    }
</script>

<!--
    The bind: prefix keeps the curText variable and what is showing
    in the input synchronised - regardless if it's the timer that's changed
    it, or the user typing.
-->
<span>
    <input bind:value={curText} />
    curText: {curText}
</span>
