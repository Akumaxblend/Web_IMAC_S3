<template>
    <a :href="'https://www.google.com/search?q='+ingredient_name+'+traduction'" target="_blank">
        <div class="content">
        <img class="ingredient_img" :src="ingredient_img"/>
        <p class="meal_title"><b>{{ ingredient_name }}</b> : {{ ingredient_quantity }}</p>
        </div>
    </a>
</template>

<script>
export default
    {
        name: "meal_recipe",
        data() {
            return{
            }
        },
        created: async function(){
        },
        methods:{
        },
        props: {
            ingredient_name:"",
            ingredient_quantity: "",
            ingredient_img: ""
        }     
    }
</script>

<style scoped>
.ingredient_img{
    margin: auto;
    width: 50%;
}
.content{
    color: #7F5539;
    background-color: #EDE0D4;
    display:inline-flex;
    margin: 1%;
    padding: 0.3%;
    border-radius: 5px;
    width: 100%;
}
a{
    width: 42%;
    height: fit-content;
}
p{
    margin: auto;
    width: 50%;
}
b{
    font-weight: bold;
}
@media (min-aspect-ratio: 0.7){
    
}
@media (min-aspect-ratio: 1.7){
    .content{
        width: 100%;
    }
    a{
        width: 21%;
    }
}
</style>