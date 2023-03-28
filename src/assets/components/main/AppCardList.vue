<script>
import AppCardProp from './AppCardProp.vue';
import { store } from '../../../store';

export default {
    name: 'CardList',
    components: {
        AppCardProp,
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="row row-cols-5 gy-2 gx-3">
            <div class="col" v-for="item in store.cards.slice(0, 50)">
                <AppCardProp :img="item.card_images[0].image_url" :name="item.name" :type="item.type" />
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../../scss/_partials/variables' as *;
</style>