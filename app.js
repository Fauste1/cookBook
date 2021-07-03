const app = Vue.createApp({
    data() {
        return {
            recipeList: recipes
        };
    }
})

// temporary storage for dummy recipes
const recipes = [
    { name: 'steak', ingredients: ['beef meat', 'pepper'], tags: [] },
    { name: 'bread', ingredients: ['flour', 'water'], tags: ['vegan'] },
    { name: 'tofu scrambled eggs', ingredients: ['natural tofu', 'olive oil', 'black salt', 'curcuma'], tags: ['vegan', 'gluten free'] },
    { name: 'risotto', ingredients: ['rice', 'vegan parmesan cheese', 'garlic', 'olive oil'], tags: ['vegan', 'gluten free'] },
    { name: 'pho', ingredients: ['beef meat', 'pak choi', 'onion'], tags: [] },
    { name: 'salad with toasted bread', ingredients: ['tomato', 'pak choi', 'lettuce', 'cucumber', 'bread'], tags: ['vegan'] }
]

app.mount('#app')
