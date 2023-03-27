<script>
import AppCardList from './AppCardList.vue';
export default {
    name: 'Main',
    components: {
        AppCardList,
    }

}
</script>

<template>
    <main>
        <div class="container p-5">
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