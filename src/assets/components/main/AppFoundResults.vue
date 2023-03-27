<script>
import { store } from '../../../store';
export default {
    name: "FoundResults",
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <div class="col-12 p-2">
        <span>found {{ store.cardsFound }} cards</span>
    </div>
</template>



<style lang="scss" scoped>
@use '../../scss/_partials/variables' as *;

.col-12 {
    background-color: $tertiary;
    color: $secondary;
}
</style>