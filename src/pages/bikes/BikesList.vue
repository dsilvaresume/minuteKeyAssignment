<template>
    <section>
        <Card>
        <ul v-if="hasBikes">
            <BikeItem class="card"
                v-for="bike in filteredBikes"
                :key="bike.id"
                :id="bike.id"
                :manufacturer="bike.manufacturer"
                :model="bike.model"
                :description="bike.description"
                :color="bike.color"
                :year="bike.year"
            >
            </BikeItem>
        </ul>
        <h3 v-else>No Bikes Listed</h3>
    </Card>
    </section>
</template>

<script>
import BikeItem from './BikeItem.vue';
import Card from '../../components/layout/Card.vue';
 export default {
    components: {
        BikeItem,
        Card,
    },

    computed: {
        filteredBikes() {
            return this.$store.getters['bikes/bikes'];
        },
        
        hasBikes() {
            return this.$store.getters['bikes/hasBikes']
        }
    }
 }
</script>

<style scoped>
.card {
    height: 6.75rem;
    max-height: 110px;
    list-style-type: none;
    border-radius: 12px;
    display: block;
    margin-bottom: 2rem;
}
</style>