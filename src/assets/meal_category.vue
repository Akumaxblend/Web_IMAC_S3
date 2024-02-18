<template>
    <button v-on:click="click_on_category">
    <div class="meal_category">
        <img :src=picture>
        <div class="meal_title"><h2>{{ category_name }}</h2></div>
    </div>
    </button>
    
</template>

<script>
export default {
    name: "meal_category",
    // data(){
    //     return{
    //         category_name: ""
    //     }
    // },
    props: {
        picture: String,
        category_name: String
    },
    methods: {
        click_on_category(){
            this.$emit('click_on_category', this.category_name)
        }
    }
}
</script>

<style scoped>
.meal_category 
{
    display:inline-flex;
    margin-left: auto;
    background-color: #EDE0D4;
    color:#7F5539;
    border-radius: 5px;
    width: 100%;
}
.meal_title
{
    margin:auto;
    margin-left: auto;
    margin-right: auto;
    font-size: 1rem;
}
img
{
    margin: 2%;
    border-radius: 5px;
    max-width: 30%;
    max-height: 30%;
}
button{
    margin: 0.3% ;
    border: 2px solid #7F5539;
    background-color: #EDE0D4;
    border-radius: 5px;
    width:80%;
}
@media (min-aspect-ratio: 0.75){
    button{
        width: 45%;
    }
    .meal_title{
        font-size: 1rem;
    }
}
@media (min-aspect-ratio: 1.7){
    button{
        width: 30%;
    }
    .meal_title{
        font-size: 1.5rem;
    }
}
</style>