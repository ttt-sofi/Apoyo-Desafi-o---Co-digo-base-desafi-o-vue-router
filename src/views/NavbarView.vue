<template>
    <Navbar/>
</template>

<script>
export default {
    name: 'NavbarView',
    components: {
        Navbar: () => import('@/components/Navbar')
    }
}

</script>