<template>
    <ol-map
        :loadTilesWhileAnimating="true"
        :loadTilesWhileInteracting="true"
        style="height: 600px"
    >
        <ol-view
            ref="view"
            :center="center"
            :rotation="rotation"
            :zoom="zoom"
            :projection="projection"
        />

        <ol-tile-layer>
            <ol-source-osm />
        </ol-tile-layer>
    </ol-map>
</template>

<script>
// @ is an alias to /src
import { defineComponent, ref, watch } from "vue";
export default defineComponent({
    name: "Home",
    setup() {
        const center = ref([40, 40]);
        const projection = ref("EPSG:4326");
        const zoom = ref(8);
        const rotation = ref(0);
        return {
            center,
            projection,
            zoom,
            rotation,
        };
    },
});
</script>
