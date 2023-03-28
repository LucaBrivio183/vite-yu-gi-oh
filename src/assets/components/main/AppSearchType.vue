<script>
import { store } from '../../../store';
export default {
    name: 'SearchType',
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <select class="form-select" id="search-archetype" aria-label="Default select example" v-model="store.selectedArchetype"
        @change="$emit('recallSearch')">
        <option v-for="item in store.cardsArchetypes" :value="item.archetype_name">{{ item.archetype_name
        }}</option>
    </select>
</template>

<style lang="scss" scoped>
.form-select {
    max-width: 18.75rem;
}
</style>