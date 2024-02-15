<template>
    <button v-show="is_visible" v-on:click="meal_clicked">
    <div class="content">
        <img :src="meal_img"/>
        <h2 class="meal_title">{{ meal_name }}</h2>
    </div>
    </button>
</template>

<script>
//import { fetchRandom } from "@/services/api.js"
export default
    {
        name: "global_meal_card",
        data() {
            return{
                randomMeal: []
            }
        },
        // beforeCreate: async function(){
        // this.randomMeal = await fetchRandom().meals[0].strMeal
        // },
        methods:{
            meal_clicked(){
                this.$emit("meal_clicked", this.meal_id)
            }
        },
        props: {
            meal_name:"",
            meal_img: "",
            meal_id: 0,
            is_visible: true
        }
        
    }
</script>

<style scoped>
.content {
    padding: 1%;
    display:inline-block;
    background-color: #7F5539;
    color: #EDE0D4;
    border-radius: 5px;
    margin: 0.3%;
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
    margin: 5%;
    border-radius: 5px;
    max-width: 90%;
}
button{
    background-color: #7F5539;
    border: 2px solid #EDE0D4;
    border-radius: 5px;
    width: 80%;
    margin: 0.3%;   
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