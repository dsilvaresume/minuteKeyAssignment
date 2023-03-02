<template>
    <router-link to="/bikes">
        <button class="backButton">Back to List</button>
    </router-link>
    <section>
        <Card>
            <h4>Manufacturer:</h4>
              <p>{{ selectedBike.manufacturer }}</p>

            <h4>Model:</h4>
               <p> {{ selectedBike.model }}</p>

            <h4>Year:</h4>
            <p> {{ selectedBike.year }}</p>

            <h4>Color:</h4>
                <p>{{ selectedBike.color }}</p>

            <h4 class="description"> Description:</h4>
                <p> {{ selectedBike.description }}</p>

            <h4> Power:</h4>
                <p> {{ selectedBike.power }}</p>

            <h4>Displacement:</h4>
                <p> {{ selectedBike.displacement }}</p>
            <h4>Image:</h4>
            <img v-if="imageExists"
                :src="require(`../../assets/images/${this.bikeImage}`)" 
                alt="Bike Image"
            >
            <p v-else>No Image for This Bike</p>
        </Card>
    </section>
</template>

<script>
import Card from '../../components/layout/Card.vue'

export default {
    props: ['id'],

    data() {
        return {
            selectedBike: null,
        };
    },

    created() {
        this.selectedBike = this.$store.getters['bikes/bikes'].find(item => item.id === this.id);
    },

    components: {
        Card,
    },

    computed: {
        bikeImage() {
            return this.selectedBike.image;
        },

        imageExists() {
            return this.bikeImage === '' ? false : true;
        },
    },
}
</script>

<style scoped>
h4 {
    font-style: italic;
}

p {
    margin-left: 1rem;
}

.backButton {
    margin-left: 4.5rem;
    margin-top: .33rem;
}
</style>
