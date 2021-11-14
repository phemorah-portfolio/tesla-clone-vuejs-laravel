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
          return-object
          :items="categories"
          item-text="name"
          filled
          label="Product Category"
          dense
          dark
          value="category"
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
    props: ['product'],
    data() {
        return {
            name: this.product.name,
            price: this.product.price,
            description: this.product.description,
            image: null,
            category: this.product.category,
            categories: []
        }
    },
    methods: {
        submitForm() {
            const FormData = require('form-data');
            const formData = new FormData();

            this.name && formData.append('name', this.name);
            this.price && formData.append('price', this.price);
            this.description && formData.append('description', this.description);
            this.image && formData.append('image', this.image);
            this.category && formData.append('category_id', this.category.id);

            axios.post('api/update/product/' + this.product.id, formData).then(response => {
                if(response.status >= 200 && response.status < 300){
                    this.$router.push('products')
                    console.log(response.data.message);
                }
            })
        },
        getCategories() {
            axios.get('api/categories').then(response => {
                if(response.status >= 200 && response.status < 300) {
                    let categoryArray = []
                    response.data.categories.map(category => {
                        categoryArray.push({name: category.name, id: category.id})
                    })
                    this.categories = categoryArray
                }
            })
        }
    },
    mounted() {
        this.getCategories()
    }
}
</script>

<style>

</style>