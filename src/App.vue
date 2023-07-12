<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Loading from './components/Loading.vue';
</script>

<template>
    <Header />
    <Loading />
      <router-view v-slot="{ Component }">
        <transition name="page">
        <component :is=" Component "></component>
        </transition>
      </router-view>
    <Footer />

</template>

<style scoped>

</style>
