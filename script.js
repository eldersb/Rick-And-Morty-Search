


const app = () => {
    return {
        characters: [],
        Isopen: true,
        
    init(){
        axios.get('https://rickandmortyapi.com/api/character')
        .then((response) => {
            this.characters = response.data.results;
            console.log(response.data.results);
            console.log(this.characters)
            console.log(this.Isopen)
        })
         .catch((error) =>{
             console.log(error);
         })
    }
    }
    

}



  
    










