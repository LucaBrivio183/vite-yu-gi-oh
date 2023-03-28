<script>
import AppCardList from './AppCardList.vue';
import AppFoundResults from './AppFoundResults.vue';
import AppSearchType from './AppSearchType.vue';

export default {
    name: 'Main',
    components: {
        AppCardList,
        AppFoundResults,
        AppSearchType
    }

}
</script>

<template>
    <main>
        <div class="px-5 py-3 container">
            <AppSearchType @recallSearch="$emit('recallSearch')" />
        </div>
        <div class="container p-5">
            <AppFoundResults />
            <AppCardList />
        </div>
    </main>
</template>



<style lang="scss" scoped>
@use '../../scss/_partials/variables' as *;

.px-5 {
    background-color: transparent;
}

.container:last-child {
    background-color: $secondary;

}
</style>