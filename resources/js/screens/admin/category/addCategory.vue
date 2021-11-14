<template>
 <v-container>
    <v-form ref="form">
        <v-text-field
        :counter="36"
        label="Name"
        required
        dark
        v-model="name"
        ></v-text-field>

        <v-text-field
        label="Order"
        required
        dark
        v-model="order"
        ></v-text-field>

        <v-row class="mb-2">
            <font-awesome-icon icon="camera" class="white--text mt-4 ml-2" style="font-size:30px;margin-right:-20px"/>
            <v-file-input label="Image" show-size dark v-model="image"></v-file-input>
        </v-row>
 
        <v-btn
            color="success"
            class="mr-4"
            v-on:click="submitForm()"
        > Submit </v-btn>
  </v-form>
 </v-container>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            order: null,
            image: null
        }
    },
    methods: {
        submitForm () {
            const FormData = require('form-data');

            const formData = new FormData();
            formData.append('name', this.name);
            formData.append('order', this.order);
            formData.append('image', this.image);
            axios.post('api/add/category', formData).then(response => {
                if(response.status >= 200 && response.status < 300){
                    this.$router.push('categories')
                }
            })
        }
    }
}
</script>

<style>

</style>