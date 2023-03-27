<script>
import AppLogo from './AppLogo.vue';
export default {
    name: 'Header',
    components: {
        AppLogo
    },
}
</script>

<template>
    <header class="py-2">
        <div class="d-flex align-items-center">
            <AppLogo />
            <h1>Yu-Gi-Oh Api</h1>
        </div>
    </header>
</template>



<style lang="scss" scoped></style>