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
        <div class="row g-2">
            <div class="col-2" v-for="item in store.cards.slice(0, 50)">
                <AppCardProp :img="item.card_images[0].image_url" :name="item.name" :type="item.type" />
            </div>
        </div>
    </div>
</template>