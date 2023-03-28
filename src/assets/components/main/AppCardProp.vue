<script>
export default {
    name: 'CardProp',
    props: {
        img: String,
        name: String,
        type: String
    }
}
</script>


<template>
    <article class="text-center h-100 d-flex flex-column justify-content-between">
        <div>
            <img :src="img" :alt="name" class="img-fluid">
        </div>
        <h3>{{ name }}</h3>
        <span>{{ type }}</span>

    </article>
</template>


<style lang="scss" scoped>
@use '../../scss/_partials/variables' as *;

article {
    background-color: $primary;
    text-overflow: ellipsis;

    div {
        text-overflow: ellipsis;

        h3 {
            max-width: 100%;
            font-size: 1rem;
            color: $secondary;
            text-overflow: ellipsis;
        }

        span {
            font-size: .75rem;
            max-width: 100%;
        }
    }
}
</style>