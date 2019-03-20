import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query        
    }

    async getResults() {  
        const key = 'b23c5e816648cf243fb3d34e43e82141';;  
        try {
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
        } catch (error) {
            alert(error);
        }    
    }
}