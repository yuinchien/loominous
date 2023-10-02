<script>
    import { createEventDispatcher } from "svelte";
    export let pattern = [];
    export let classname = "";
    export let sectionId = "";
    export let parentIndex = -1;
    const dispatch = createEventDispatcher();

    const handler = (index) => {
        dispatch("update", {
            sectionId: sectionId,
            index: index,
            parentIndex: parentIndex,
        });
    };
</script>

<circles class={classname}>
    {#each pattern as item, i}
        <div class="box" class:x={item === 1} on:click={() => handler(i)} />
    {/each}
</circles>
