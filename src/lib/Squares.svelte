<script>
    import { createEventDispatcher } from "svelte";
    import { fade } from "svelte/transition";
    export let pattern = [];
    export let classname = "";
    export let sectionId = "";
    export let interactive = false;
    export let index = -1;
    const convertColorIndex = ["a", "b", "c", "d"];
    const dispatch = createEventDispatcher();

    const handler = (i) => {
        dispatch("update", {
            sectionId: sectionId,
            index: i,
        });
    };
</script>

<squares class={classname} {index}>
    {#if interactive}
        {#each pattern as item, i}
            <div
                class="box {convertColorIndex[item]}"
                on:click={() => handler(i)}
            />
        {/each}
    {:else}
        {#each pattern as item}
            <div class="box {convertColorIndex[item]}" />
        {/each}
    {/if}
</squares>
