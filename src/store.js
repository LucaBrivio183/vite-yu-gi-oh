import { reactive } from "vue";

export const store = reactive({
    cards: [],
    cardsArchetypes: [],
    selectedArchetype: '',
    cardsFound: 0,
})