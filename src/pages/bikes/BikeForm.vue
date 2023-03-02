<template>
    <form @submit.prevent="submitForm" class="formSpacing">
        <div class="form-control">
            <label for="manufacturer">Manufacturer</label>
            <input type="text" id="manufacturer" v-model.trim="manufacturer"
        >
        </div>
        <div class="form-control">
            <label for="model">Model</label>
            <input type="text" id="model" v-model.trim="model"
        >
        </div>
        <div class="form-control">
            <label for="description">Description</label>
            <textarea id="description" rows="5" v-model.trim="description"></textarea>
        </div>
        <div class="form-control">
            <label for="color">Color</label>
            <input type="text" id="color" v-model.trim="color"
        >
        </div>
        <div class="form-control">
            <label for="year">Year</label>
            <input type="text" id="year" v-model.trim="year"
        >
        </div>
        <div class="form-control">
            <label for="displacement">Displacement</label>
            <input type="text" id="displacement" v-model.trim="displacement"
        >
        </div>
        <button>Add Bike</button>
    </form>
</template>

<script>
export default {
    emits: ['save-data'],
    data() {
        return {
            manufacturer: '',
            model: '',
            description: '',
            color: '',
            year: '',
            displacement: '',
            image: '',
        };
    },
    methods: {
        submitForm() {
            const formData = {
                manufacturer: this.manufacturer,
                model: this.model,
                description: this.description,
                color: this.color,
                year: this.year,
                displacement: this.displacement,
                image: this.image,
            };

            this.$emit('save-data', formData);

        },
    },
}
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}

.formSpacing {
    max-width: 60rem;
}
</style>