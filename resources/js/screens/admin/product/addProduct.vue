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
        label="Price"
        required
        dark
        v-model="price"
        ></v-text-field>

        <v-select 
          v-model="category"          
          :items="categories"
          item-text="name"
          item-value="id"
          filled
          label="Product Category"
          dense
          dark
        ></v-select>

        <v-textarea
            name="Description"
            label="Description"
            hint="Hint text"
            dark
            v-model="description"
        ></v-textarea>      

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
            price: '',
            image: null,
            description: '',
            categories: [],
            category: ''
        }
    },
    methods: {
        submitForm() {
            const FormData = require('form-data');
            
            const formData = new FormData();
            formData.append('name', this.name);
            formData.append('price', this.price);
            formData.append('image', this.image);
            formData.append('description', this.description);
            formData.append('category', this.category)
            
            axios.post('api/add/product', formData).then(response => {
                if(response.status >= 200 && response.status < 300){
                    this.$router.push('products')
                }
            })
        },
        getCategories() {
            axios.get('api/categories').then(response => {
                if(response.status >= 200 && response.status < 300) {
                    var categoryArray = []
                    response.data.categories.map(cat => {
                        categoryArray.push({name:cat.name, id:cat.id})
                    })
                    this.categories = categoryArray
                }
            })
        }
    },
    created() {
        this.getCategories();
    },
    mounted() {      
        console.log(this.category) 
    }
}
</script>

<style>

</style>