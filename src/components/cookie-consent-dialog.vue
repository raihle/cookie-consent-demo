<!-- This should be a "functional" component, but Vue does not support the
"components" property on functional components -->
<template>
    <ModalDialog 
        class="cookie-consent-dialog"
        :style="{display}"
        @close="resetAndCloseDialog"
    >
        <Heading1 slot="heading">Cookies och liknande tekniker</Heading1>
        <template slot="content">
            Här kan du ändra vilka sorters cookies och liknande tekniker du
            tillåter att vi använder på webbplatsen.

            Har du frågor? Läs mer i <TextLink>vår cookie-policy</TextLink>

            <LevelSelector 
                :name="name" 
                :levels="levels" 
                v-model="selectedLevel"
            />

            <PrimaryButton @click="saveAndCloseDialog">OK</PrimaryButton>

            Sparas i 90 dagar.
        </template>
    </ModalDialog>
</template>

<script>
import Heading1 from './component-library/heading-1.vue';
import ModalDialog from './component-library/modal-dialog.vue';
import PrimaryButton from './component-library/primary-button.vue';
import TextLink from './component-library/text-link.vue';
import LevelSelector from './level-selector/level-selector.vue';

export default {
    components: {
        Heading1,
        ModalDialog,
        TextLink,
        PrimaryButton,
        LevelSelector
    },
    props: {
        initialLevel: {
            type: Number,
            required: true
        },
        visible: {
            type: Boolean,
            default: false
        },
        name: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            selectedLevel: this.initialLevel
        };
    },
    computed: {
        display() {
            return this.visible ? 'block' : 'none';
        },
        levels() {
            return [
                {
                    value: 1,
                    title: '1 Nödvändiga',
                    description: 'Siten fungerar som den ska, och vi får lagra ' + 
                          'cookies som kommer ihåg om du är inloggad eller ej.'
                },
                {
                    value: 2,
                    title: '2 Funktionella',
                    description: 'Vi kommer ihåg dina inställningar (som språkval, ' +
                        'adresser osv.) och samlar in anonymiserad ' +
                        'statistik för att förbättra siten.'
                },
                {
                    value: 3,
                    title: '3 Tredjepart',
                    description: 'Vi får dela viss data med våra partners som gör ' +
                        'det möjligt att erbjuda verktyg på webbplatsen, ' +
                        'som chatt och säker inloggning'
                },
                {
                    value: 4,
                    title: '4 Marknadsföring',
                    description: 'Vi får lagra information om ditt användande som ' +
                        'delas med (men aldrig säljs till andra parter), ' +
                        'för att ge dig bättre erbjudanden och en ' +
                        'trevligare upplevelse på webbsidan.'
                }
            ]
        }
    },
    methods: {
        saveAndCloseDialog() {
            this.$emit('level-selected', this.selectedLevel);
            this.$emit('close-dialog');
        },
        resetAndCloseDialog() {
            this.selectedLevel = this.initialLevel;
            this.$emit('close-dialog');
        }
    }
}
</script>

<style scoped>

</style>

