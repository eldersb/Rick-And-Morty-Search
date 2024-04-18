


const app = () => {
    return {
        characters: [],
        personagemSelect: null,
    init(){
        axios.get('https://rickandmortyapi.com/api/character')
        .then((response) => {
            this.characters = response.data.results;
            // console.log(response.data.results);
            console.log(this.characters)
            
        })
         .catch((error) =>{
             console.log(error);
         })
    },
     selecionarPersonagem(personagem){
        this.personagemSelect = personagem;
        console.log(this.personagemSelect);
    }



    }
    

}



  
    










