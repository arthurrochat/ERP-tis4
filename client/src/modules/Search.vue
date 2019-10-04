<template>
    <div class="block">
        <v-img src="../assets/logo.png" class="img-logo" max-height="150" max-width="150"/>
        <v-col cols="12" sm="6">    
            <SearchBar />
        </v-col>
    </div>
</template>

<script>
import SearchBar from '../components/SearchBar';

export default {
    components: { SearchBar }
}
</script>

<style lang="scss" scoped>
    .block {
        display: flex;
        margin: auto;
        width: 100%;
        justify-content: center;
    }

    .img-logo {
        position: absolute !important;
        top: 200px !important;
    }
</style>