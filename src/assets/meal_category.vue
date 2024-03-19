<template>
    <button v-on:click="click_on_category">
    <RouterLink :to="'categorized-meals/'+category_name">
        <div class="meal_category">
        <img :src=picture>
        <div class="meal_title"><h2>{{ category_name }}</h2></div>
    </div>
    </RouterLink>
    
    </button>
    
</template>

<script>
import { RouterLink } from 'vue-router';

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
        click_on_category() {
            this.$emit('click_on_category', this.category_name);
        }
    },
    components: { RouterLink }
}
</script>

<style scoped>
.meal_category 
{
    display:inline-flex;
    margin-left: auto;
    background-color: #EDE0D4;
    color:#7F5539;
    border-radius: 20px;
    width: 100%;
    font-family: "Kanit", sans-serif;
  font-weight: 100;
  font-style: normal;
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
    border-radius: 20px;
    max-width: 30%;
    max-height: 30%;
}
button{
    margin: 0.3% ;
    border: 2px solid #7F5539;
    background-color: #EDE0D4;
    border-radius: 20px;
    width:80%;
}

@keyframes fadeLightToDark {
  from {background-color: #EDE0D4;}
  to {background-color: #7F5539;}
}
@keyframes fadeDarkToLight {
  to {color: #EDE0D4;}
  from {color: #7F5539;}
}
@keyframes scaleTitle{
    from{font-size: 1.5rem;}
    to{font-size: 2rem;}
}
button:hover{
    animation: fadeLightToDark 500ms forwards;

    .meal_category{
        animation: fadeLightToDark 500ms forwards;
    }
    .meal_title{
        animation: fadeDarkToLight 500ms forwards;
    }
    h2{
        animation: scaleTitle 500ms forwards;
    }
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