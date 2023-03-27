<script>
import AppCardList from './AppCardList.vue';
import AppFoundResults from './AppFoundResults.vue';
export default {
    name: 'Main',
    components: {
        AppCardList,
        AppFoundResults
    }

}
</script>

<template>
    <main>
        <div class="container p-5">
            <AppFoundResults />
            <AppCardList />
        </div>
    </main>
</template>



<style lang="scss" scoped>
@use '../../scss/_partials/variables' as *;

.container {
    background-color: $secondary;

}
</style>