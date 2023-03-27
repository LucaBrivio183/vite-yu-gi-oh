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
    <article class="text-center">
        <div>
            <img :src="img" :alt="name" class="img-fluid">
        </div>
        <h3>{{ name }}</h3>
        <span>{{ type }}</span>

    </article>
</template>


<style lang="scss" scoped></style>