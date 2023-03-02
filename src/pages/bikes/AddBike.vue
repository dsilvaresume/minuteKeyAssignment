<template>
    <section>
        <Card class="bikeForm">
        <h2>Add new bike</h2>
        <BikeForm @save-data="saveNewBike"></BikeForm>
       </Card>
    </section>
</template>

<script>
import BikeForm from './BikeForm.vue';
import Card from '../../components/layout/Card';

export default {
    components: {
        BikeForm,
        Card,
    },

    methods: {
        saveNewBike(data) {
            this.$store.dispatch('bikes/addBikeAction', data);
            this.$router.replace('/bikes');
        },
    }
}
</script>

<style scoped>
.bikeForm {
    max-width: 50rem;
    display: block;
}
</style>