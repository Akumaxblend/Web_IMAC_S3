<template>
    <button>
    <RouterLink :to="'../recipe/'+meal_id" target="_blank">
        <div class="content">
        <img :src="meal_img"/>
        <h2 class="meal_title">{{ meal_name }}</h2>
    </div>
    </RouterLink>
    </button>
</template>

<script>
import { RouterLink } from 'vue-router';

export default
    {
    name: "global_meal_card",
    data() {
        return {
            randomMeal: []
        };
    },
    props: {
        meal_name: "",
        meal_img: "",
        meal_id: 0,
        is_visible: true
    },
    components: { RouterLink }
}
</script>

<style scoped>
.content {
    padding: 1%;
    display:inline-block;
    background-color: #7F5539;
    color: #EDE0D4;
    border-radius: 20px;
    margin: 0.3%;
    font-family: "Kanit", sans-serif;
    font-weight: 100;
    font-style: normal;
}
.meal_title
{
    margin:auto;
    margin-left: auto;
    margin-right: auto;
    font-size: 1.5rem;
}
img
{
    margin: 5% auto;
    border-radius: 20px;
    max-width: 90%;
}
button{
    background-color: #7F5539;
    border: 2px solid #EDE0D4;
    border-radius: 20px;
    width: 80%;
    margin: 0.3%;   
}

@keyframes fadeLightToDark {
  from {color: #EDE0D4;}
  to {color: #7F5539;}
}
@keyframes fadeDarkToLight {
  to {background-color: #EDE0D4;}
  from {background-color: #7F5539;}
}
@keyframes scaleImg{
    from {max-width: 90%;margin: 5% auto;}
    to {max-width: 95%;margin: 2.5% auto;}
}
@keyframes unscaleImg{
    from {max-width: 95%;margin: 2.5% auto;}
    to {max-width: 90%;margin:5% auto;}
}
button:hover{
    animation: fadeDarkToLight 500ms forwards;
    .meal_title{
        animation: fadeLightToDark 500ms forwards;
    }
    .content{
        animation: fadeDarkToLight 500ms forwards;
    }
    img{
        animation: scaleImg 500ms forwards;
    }
}

button:not(:hover){
    img{
        animation: unscaleImg 500ms forwards;
    }
}

@media (min-aspect-ratio: 0.7){
    button{
        width: 45%;
    }
}
@media (min-aspect-ratio: 1.7){
    button{
        width: 30%;
    }
}
</style>