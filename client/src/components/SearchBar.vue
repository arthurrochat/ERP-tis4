<template>
    <div>
        <v-text-field
            placeholder="Encontre uma PEC"
            filled
            rounded
            dense
            append-icon="mdi-magnify"
            class="search-bar"
            outlined
            @click:append="display"
        />
    </div>
</template>

<script>
export default {
    methods: {
        display() {
            this.$router.push('display')
        }
    }
}
</script>

<style lang="scss">
    .search-bar {
        .v-input__slot {
            align-items: center !important;

            input {
                margin: 0 !important;
                padding: 0 !important;
            }

            .v-input__append-inner {
                padding: 0 !important;
                margin: auto !important;
            }
        }
    }
</style>