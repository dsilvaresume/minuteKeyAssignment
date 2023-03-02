<template>
    <div class="backgroundImage"
        :style="{'background-image': 'url(' + require('../assets/images/home_background.png') + ')'
        }">
        <Card class="card">
    <h3>Welcome to my Garage Motorcycle Database</h3>
    <p>If you want to be happy for a lifetime, ride a motorcycle.</p>
    <router-link to="/bikes"> 
        <button>
            <i class="fa fa-motorcycle" aria-hidden="true"></i>
            View List of Bikes
        </button>
    </router-link>
        </Card>
</div>
</template>

<script>
import Card from '../components/layout/Card.vue'

export default {
    components: {
        Card,
    }
};
</script>

<style scoped>
@import '../css/button.css';
.backgroundImage{
    width: 100%;
    height: 100%;
    max-height: 100%;
    margin: 0;
    padding: 0;
    background-size:100% 100%;
    background-repeat: no-repeat;
    position:fixed; 
    left:0;
    right:0;
    top:0;
    bottom:0;

}
html, body {
    height: 100%;
    margin: 0;
    padding: 0;
}
.card {
    background-color: #ffffff;
    max-width: 60rem;
}
</style>


