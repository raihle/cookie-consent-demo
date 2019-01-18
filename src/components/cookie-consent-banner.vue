<!-- This should be a "functional" component, but Vue does not support the
"components" property on functional components -->
<template>
    <div class="cookie-consent-banner">
        <InformationBox class="cookie-consent-banner__information">
            Våra webbplatser använder cookies och andra liknande tekniker för
            att förbättra din uppleve, för statistik och analys, samt för
            marknadsföring. En del är tredjepartscookies. Förtsätter du surfa
            på vår webbplats godkänner du att cookies används. Du väljer själv
            om du vill godkänna eller inte, och du kan välja vilka cookies som
            får användas genom att
            <TextButton @click="openDialog">ändra dina inställningar</TextButton>.
            Innan du gör ditt val rekommenderar vi att du
            <TextLink>läser mer</TextLink>
            om vilka cookies vi använder och hur du kan stänga av dem.
        </InformationBox>
        <PrimaryButton class="cookie-consent-banner__ok">OK</PrimaryButton>
        <LinkButton class="cookie-consent-banner__change" @click="openDialog">Ändra nivå</LinkButton>
    </div>
</template>

<script>
import InformationBox from './component-library/information-box.vue';
import LinkButton from './component-library/link-button.vue';
import TextButton from './component-library/text-button.vue';
import PrimaryButton from './component-library/primary-button.vue';
import TextLink from './component-library/text-link.vue';

export default {
    components: {
        InformationBox,
        TextButton,
        LinkButton,
        PrimaryButton,
        TextLink
    },
    methods: {
        openDialog() {
            this.$emit('open-dialog');
        }
    }
}
</script>

<style scoped>

</style>

