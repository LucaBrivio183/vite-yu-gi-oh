<script>
export default {
    name: 'Logo',
    data() {
        return {
            logo: "/yu-gi-oh-logo.png",
        }
    }
}

</script>

<template>
    <div class="text-center p-3">
        <img class="img-fluid" :src="logo" alt="logo" />
    </div>
</template>



<style lang="scss" scoped>
div {
    width: 8.125rem;
}
</style>