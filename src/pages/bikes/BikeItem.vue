<template>
    <router-link :to="bikeDetailLink" class="routerLink">
        <li class="linkChange">
            <h4 class="title">{{ bikeItemTitle }}</h4>
            <p class="description">{{ description }}</p>
        </li>
    </router-link>
</template>

<script>
export default {
    props: [
        'id',
        'manufacturer',
        'model',
        'year',
        'description',
        'color',
    ],
    computed: {
        bikeItemTitle() {
            return `${this.manufacturer} ${this.model} - ${this.year} - ${this.color} `;
        },
        
        bikeDetailLink() {
            return `/bikes/${this.id}`;
        }
    }
}
</script>

<style scoped>

li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
  padding-right: 5px;
}

.description {
    overflow: hidden;
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 80%;

}

.title {
    display: flex;
    min-width: 18.75rem;
    max-width: 31.25rem;
    padding-right: 20px;
}

.routerLink {
    text-decoration: none;
    font-family: 'Merriweather', serif;
    color: #19191a;
}

.linkChange:hover {
    background-color: #e6e6e6;
    transition: 0.3s;
}

.listImage {
    justify-content: right;
    left: 2px;
    display: flex;
    position: inherit;
}
</style>