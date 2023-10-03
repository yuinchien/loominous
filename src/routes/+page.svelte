<script>
    import { onMount } from "svelte";
    import Squares from "$lib/Squares.svelte";
    import Circles from "$lib/Circles.svelte";
    import { version as lastUpdate } from "$app/environment";

    const convertColorIndex = ["a", "b", "c", "d"];
    let root;
    let patternList = [];
    let drawdown = [];
    let show = false;

    patternList[0] =
        '{"v":0.1,"pattern":0,"colorA":"#222222","colorB":"#eeeeee","colorC":"#7f7f7f","colorD":"#444","shafts":4,"wefts":32,"warps":56,"tieups":4,"threading":[[1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0],[0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],[0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1],[0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0]],"treadling":[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1],[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1],[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1],[0,0,1,0],[0,1,0,0],[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1],[0,0,1,0],[0,1,0,0],[1,0,0,1],[0,0,1,0],[0,1,0,0],[1,0,0,1],[0,0,1,0],[0,1,0,0],[1,0,0,1],[0,0,1,0],[0,1,0,0],[1,0,0,0],[0,0,0,1],[0,0,1,0]],"tieup":[[1,1,0,0],[0,1,1,0],[0,0,1,1],[1,0,0,1]],"colorWefts":[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],"colorWarps":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"checklist":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"size":20}';

    patternList[1] =
        '{"v":0.1,"pattern":1,"colorA":"#ff5625","colorB":"#fff048","colorC":"#ffffff","colorD":"#ff26a4","shafts":4,"wefts":50,"warps":72,"tieups":6,"threading":[[1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1],[0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0],[0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0]],"treadling":[[1,1,0,0,0,0],[1,1,0,0,0,0],[0,0,1,1,0,0],[0,0,1,1,0,0],[0,0,1,1,0,0],[1,0,0,0,1,0],[1,0,0,0,1,0],[1,0,0,0,1,0],[1,0,0,0,1,0],[1,0,0,0,1,0],[1,0,0,0,1,0],[0,0,0,0,0,1],[0,0,0,0,0,1],[0,0,0,0,0,1],[0,0,0,0,0,1],[0,0,0,0,0,1],[0,0,0,0,0,1],[0,1,0,0,0,0],[0,1,0,0,0,0],[0,1,1,0,0,0],[0,0,1,0,0,0],[0,0,1,1,0,0],[0,0,0,1,0,0],[0,0,0,1,0,0],[1,0,1,0,0,0],[1,0,0,0,0,0],[1,0,0,0,0,0],[1,0,0,0,0,0],[0,1,0,0,0,0],[0,1,0,0,0,0],[0,1,0,0,0,0],[0,1,0,1,0,0],[0,0,0,1,0,0],[0,0,0,1,0,0],[0,0,0,1,0,0],[0,0,0,1,0,1],[0,0,0,1,0,1],[0,0,0,0,0,1],[1,0,0,0,0,1],[1,0,0,1,0,1],[1,0,0,1,0,0],[0,0,0,1,0,0],[0,0,1,1,0,0],[0,0,1,1,0,0],[0,0,1,1,0,0],[0,0,1,0,0,0],[0,0,1,0,0,1],[0,0,0,0,0,1],[0,0,0,0,0,1],[0,0,0,0,0,0]],"tieup":[[0,1,1,1],[0,0,1,1],[1,0,0,1],[1,1,0,0],[1,0,1,0],[0,1,1,0]],"colorWefts":[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],"colorWarps":[0,2,0,2,0,2,0,3,0,3,0,3,0,2,2,2,2,0,0,0,0,3,3,3,3,0,0,0,0,1,2,1,2,1,0,0,0,0,1,3,1,3,1,3,1,0,0,2,1,0,2,1,0,2,1,0,2,1,0,3,0,3,0,3,0,2,0,2,0,2,0,0],"checklist":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"size":16}';

    patternList[2] =
        '{"v":0.1,"pattern":2,"colorA":"#0082ff","colorB":"#ffccb8","colorC":"#7f7f7f","colorD":"#444","shafts":6,"wefts":44,"warps":60,"tieups":6,"threading":[[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0],[0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0],[0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0],[0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0],[0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],[0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1]],"treadling":[[1,0,0,0,0,0],[0,1,1,0,0,0],[0,0,1,1,0,0],[0,0,0,1,1,0],[0,0,0,0,1,0],[0,0,0,0,0,1],[1,1,1,0,0,0],[0,1,1,0,0,0],[0,0,1,0,0,0],[0,0,0,1,0,0],[0,0,0,0,1,0],[0,0,0,0,0,1],[1,1,1,0,0,0],[0,1,1,1,0,0],[0,0,1,1,1,0],[0,0,0,1,1,1],[0,0,0,0,1,1],[1,1,1,0,0,0],[0,1,1,1,0,0],[0,0,1,1,1,0],[0,0,0,1,1,1],[0,0,0,0,1,1],[1,1,0,0,0,0],[0,1,1,0,0,0],[0,0,1,1,0,0],[0,0,0,1,1,0],[0,0,0,0,1,1],[1,1,0,0,0,0],[0,1,1,0,0,0],[0,0,1,1,0,0],[0,0,0,1,1,0],[0,0,0,0,1,1],[1,0,0,0,0,0],[0,1,0,0,0,0],[0,0,1,0,0,0],[0,0,0,1,0,0],[0,0,0,0,1,0],[0,0,0,0,0,1],[1,0,0,0,0,0],[0,1,0,0,0,0],[0,0,1,0,0,0],[0,0,0,1,0,0],[0,0,0,0,1,0],[0,0,0,0,0,1]],"tieup":[[1,0,0,0,0,0],[0,1,0,0,0,0],[0,0,1,0,0,0],[0,0,0,1,0,0],[0,0,0,0,1,0],[0,0,0,0,0,1]],"colorWefts":[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],"colorWarps":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"checklist":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"size":18}';

    let PARAMS = {
        v: 0.1,
        pattern: 0,
        colorA: "#f0e130",
        colorB: "#303ff0",
        colorC: "#FF007F",
        colorD: "#444",
        shafts: 2,
        wefts: 24,
        warps: 24,
        tieups: 4,
        threading: [],
        treadling: [],
        tieup: [],
        colorWefts: [],
        colorWarps: [],
        checklist: [],
        size: 20,
    };

    let pane = null;
    let folder = null;
    let interval = null;

    onMount(() => {
        root = document.documentElement;
        show = true;
        setTimeout(function () {
            show = false;
        }, 8000);
        import("tweakpane").then((module) => {
            if (pane) {
                pane.dispose();
            }
            pane = new module.Pane();
            folder = pane.addFolder({
                title: "Settings",
            });
            init();
        });
    });

    const updateLocalStorage = () => {
        window.localStorage.setItem("preset", JSON.stringify(PARAMS));
    };
    const updateAll = () => {
        updateDrawdown();
        PARAMS = PARAMS;
        updateLocalStorage();
    };
    const initPane = () => {
        const inputPattern = folder.addBlade({
            view: "list",
            label: "pattern",
            options: [
                { text: "00", value: 0 },
                { text: "01", value: 1 },
                { text: "02", value: 2 },
            ],
            value: PARAMS.pattern,
        });

        const inputColorA = folder.addBinding(PARAMS, "colorA");
        const inputColorB = folder.addBinding(PARAMS, "colorB");
        const inputColorC = folder.addBinding(PARAMS, "colorC");
        const inputColorD = folder.addBinding(PARAMS, "colorD");
        const inputShafts = folder.addBinding(PARAMS, "shafts", {
            min: 2,
            max: 12,
            step: 1,
        });
        const inputWarps = folder.addBinding(PARAMS, "warps", {
            min: 10,
            max: 120,
            step: 2,
        });
        const inputWefts = folder.addBinding(PARAMS, "wefts", {
            min: 10,
            max: 120,
            step: 2,
        });
        const inputTieups = folder.addBinding(PARAMS, "tieups", {
            min: 4,
            max: 12,
            step: 1,
        });
        const inputSize = folder.addBinding(PARAMS, "size", {
            min: 8,
            max: 32,
            step: 2,
        });
        const inputReset = folder.addButton({ title: "Reset" });

        inputPattern.on("change", (ev) => {
            const data = JSON.parse(patternList[ev.value]);
            for (let obj in data) {
                PARAMS[obj] = data[obj];
            }
            pane.refresh();
            updateAll();
        });

        inputColorA.on("change", (ev) => {
            root.style.setProperty("--color-a", PARAMS.colorA);
            updateLocalStorage();
        });

        inputColorB.on("change", (ev) => {
            root.style.setProperty("--color-b", PARAMS.colorB);
            updateLocalStorage();
        });
        inputColorC.on("change", (ev) => {
            root.style.setProperty("--color-c", PARAMS.colorC);
            updateLocalStorage();
        });
        inputColorD.on("change", (ev) => {
            root.style.setProperty("--color-d", PARAMS.colorD);
            updateLocalStorage();
        });
        inputSize.on("change", (ev) => {
            root.style.setProperty("--box-size", PARAMS.size + "px");
            updateLocalStorage();
        });

        inputShafts.on("change", (ev) => {
            clearInterval(interval);
            interval = setTimeout(function () {
                const delta = ev.value - PARAMS.threading.length;
                console.log(delta);
                if (delta == 0) {
                    return;
                }
                if (delta > 0) {
                    for (let i = 0; i < delta; i++) {
                        PARAMS.threading.push(Array(PARAMS.warps).fill(0));
                    }
                    for (let i = 0; i < PARAMS.tieup.length; i++) {
                        PARAMS.tieup[i].push(...Array(delta).fill(0));
                    }
                } else {
                    for (let i = 0; i < Math.abs(delta); i++) {
                        PARAMS.threading.pop();
                    }
                    for (let i = 0; i < PARAMS.tieup.length; i++) {
                        PARAMS.tieup[i].splice(
                            PARAMS.tieup[i].length + delta,
                            -delta
                        );
                    }
                }
                PARAMS.threading = PARAMS.threading;
                PARAMS.tieup = PARAMS.tieup;
                updateAll();
            }, 300);
        });

        inputWarps.on("change", (ev) => {
            clearInterval(interval);
            interval = setTimeout(function () {
                const delta = ev.value - PARAMS.threading[0].length;
                console.log(delta);
                if (delta == 0) {
                    return;
                }
                if (delta > 0) {
                    for (let i = 0; i < PARAMS.threading.length; i++) {
                        PARAMS.threading[i].push(...Array(delta).fill(0));
                    }
                    PARAMS.colorWarps.push(...Array(delta).fill(0));
                } else {
                    for (let i = 0; i < PARAMS.threading.length; i++) {
                        PARAMS.threading[i].splice(
                            PARAMS.threading[i].length + delta,
                            -delta
                        );
                    }
                    PARAMS.colorWarps.splice(
                        PARAMS.colorWarps.length + delta,
                        -delta
                    );
                }
                updateAll();
            }, 300);
        });

        inputWefts.on("change", (ev) => {
            clearInterval(interval);
            interval = setTimeout(function () {
                const delta = ev.value - PARAMS.treadling.length;
                if (delta == 0) {
                    return;
                }
                if (delta > 0) {
                    for (let i = 0; i < delta; i++) {
                        PARAMS.treadling.push(Array(PARAMS.tieups).fill(0));
                    }
                    PARAMS.colorWefts.push(...Array(delta).fill(1));
                } else {
                    for (let i = 0; i < Math.abs(delta); i++) {
                        PARAMS.treadling.pop();
                    }
                    PARAMS.colorWefts.splice(
                        PARAMS.colorWefts.length + delta,
                        -delta
                    );
                }
                updateAll();
            }, 300);
        });

        inputTieups.on("change", (ev) => {
            clearInterval(interval);
            interval = setTimeout(function () {
                const delta = ev.value - PARAMS.tieup.length;
                if (delta == 0) {
                    return;
                }
                if (delta > 0) {
                    for (let i = 0; i < delta; i++) {
                        PARAMS.tieup.push(Array(PARAMS.shafts).fill(0));
                    }
                    for (let i = 0; i < PARAMS.treadling.length; i++) {
                        PARAMS.treadling[i].push(...Array(delta).fill(0));
                    }
                } else {
                    for (let i = 0; i < Math.abs(delta); i++) {
                        PARAMS.tieup.pop();
                    }
                    for (let i = 0; i < PARAMS.treadling.length; i++) {
                        PARAMS.treadling[i].splice(
                            PARAMS.treadling[i].length + delta,
                            -delta
                        );
                    }
                }
                updateAll();
            }, 300);
        });

        inputReset.on("click", () => {
            PARAMS = JSON.parse(patternList[PARAMS.pattern]);
            window.localStorage.clear();
            updateLocalStorage();
            location.reload();
        });
    };
    const init = () => {
        const preset = window.localStorage.getItem("preset");
        PARAMS = preset ? JSON.parse(preset) : JSON.parse(patternList[0]);
        initPane();

        root.style.setProperty("--color-a", PARAMS.colorA);
        root.style.setProperty("--color-b", PARAMS.colorB);
        root.style.setProperty("--color-c", PARAMS.colorC);
        root.style.setProperty("--color-d", PARAMS.colorD);
        root.style.setProperty("--box-size", PARAMS.size + "px");

        updateDrawdown();
    };

    const circleUpdate = (e) => {
        let value = PARAMS[e.detail.sectionId][e.detail.index];
        if (e.detail.sectionId == "checklist") {
            value = value == 0 ? 1 : 0;
            PARAMS[e.detail.sectionId][e.detail.index] = value;
        } else {
            value =
                PARAMS[e.detail.sectionId][e.detail.parentIndex][
                    e.detail.index
                ];
            value = value == 0 ? 1 : 0;
            PARAMS[e.detail.sectionId][e.detail.parentIndex][e.detail.index] =
                value;
        }
        updateAll();
    };
    const squareUpdate = (e) => {
        let value = PARAMS[e.detail.sectionId][e.detail.index];
        value = value < convertColorIndex.length - 1 ? value + 1 : 0;
        PARAMS[e.detail.sectionId][e.detail.index] = value;
        updateAll();
    };
    const createDrawdown = () => {
        let data = [];

        for (let i = 0; i < PARAMS.wefts; i++) {
            let row = [];
            for (let j = 0; j < PARAMS.warps; j++) {
                row.push(0);
            }
            data.push(row);
        }
        return data;
    };
    const updateDrawdown = () => {
        drawdown = createDrawdown();

        for (let i = 0; i < PARAMS.wefts; i++) {
            const myShafts = Array(PARAMS.shafts).fill(0);
            let flagShaftActivated = false;
            for (let j = 0; j < PARAMS.treadling[i].length; j++) {
                if (PARAMS.treadling[i][j] == 1) {
                    for (let k = 0; k < PARAMS.tieup[j].length; k++) {
                        if (PARAMS.tieup[j][k] == 1) {
                            myShafts[k] = 1;
                            flagShaftActivated = true;
                        }
                    }
                }
            }

            for (let j = 0; j < PARAMS.warps; j++) {
                if (flagShaftActivated) {
                    drawdown[i][j] = PARAMS.colorWefts[i];

                    for (let k = 0; k < PARAMS.shafts; k++) {
                        if (myShafts[k] == 1 && PARAMS.threading[k][j] == 1) {
                            drawdown[i][j] = PARAMS.colorWarps[j];
                        }
                    }
                } else {
                    drawdown[i][j] = PARAMS.colorWarps[j];
                }
            }
        }
    };
</script>

<div id="lastUpdate" class:show>
    Updated {lastUpdate}
</div>
<div id="canvas">
    <div class="row">
        <div id="colorWarps" class="container borderless">
            <Squares
                pattern={PARAMS.colorWarps}
                classname="row reverse"
                sectionId="colorWarps"
                interactive={true}
                on:update={squareUpdate}
            />
        </div>
    </div>
    <div class="row sticky">
        <div id="threading" class="container dots">
            {#each PARAMS.threading as list, i}
                <Circles
                    pattern={list}
                    classname="row reverse"
                    sectionId="threading"
                    parentIndex={i}
                    on:update={circleUpdate}
                />
            {/each}
        </div>
        <div id="tieup" class="container dots">
            {#each PARAMS.tieup as list, i}
                <Circles
                    pattern={list}
                    classname="col reverse"
                    sectionId="tieup"
                    parentIndex={i}
                    on:update={circleUpdate}
                />
            {/each}
        </div>
    </div>
    <div class="row">
        <div id="drawdown" class="container borderless">
            {#each drawdown as list (list)}
                <Squares
                    pattern={list}
                    classname="row reverse"
                    sectionId="drawdown"
                    interactive={false}
                />
            {/each}
        </div>
        <div id="treadling" class="container dots">
            {#each PARAMS.treadling as list, i}
                <Circles
                    pattern={list}
                    classname="row"
                    sectionId="treadling"
                    parentIndex={i}
                    on:update={circleUpdate}
                />
            {/each}
        </div>
        <div id="colorWefts" class="container borderless">
            <Squares
                pattern={PARAMS.colorWefts}
                classname="col"
                sectionId="colorWefts"
                interactive={true}
                on:update={squareUpdate}
            />
        </div>
        <div id="checklist" class="container borderless">
            <Circles
                pattern={PARAMS.checklist}
                classname="col"
                sectionId="checklist"
                on:update={circleUpdate}
            />
        </div>
    </div>
</div>
