<template>
    <v-card outlined class="display-content">
        <v-card-text>
            <div class="text-center headline mb-2 title">PEC 123</div>
            <div class="info-block">
                <div class="headline mb-2 subtitle">Autor</div>
                <div class="text-block">Gilmar Machado</div>
                <div class="headline mb-2 subtitle">Resumo</div>
                <div class="text-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
}
</script>

<style lang="scss">
    .display-content {
        margin: auto;
        width: 100%;
        display: flex;
        justify-content: center;

        .title {
            font-size: 2.25rem !important;
            color: #00ACC1
        }

        .info-block {
            padding: 20px;
        }

        .text-block {

        }
    }
</style>