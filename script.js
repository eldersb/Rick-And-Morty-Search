const app = () => {
    return {
        characters: [],
        personagemSelect: null,
        episodioSelecionado: [],
        vizinhoSelecionado: [],
        urlImagem: "https://rickandmortyapi.com/api/character/avatar/19.jpeg",
    init(){
        axios.get('https://rickandmortyapi.com/api/character')
        .then((response) => {
            this.characters = response.data.results;
            console.log(this.characters)
            
        })
         .catch((error) =>{
             console.log(error);
         })
    },
     selecionarPersonagem(personagem){
        this.personagemSelect = personagem;
        console.log(this.personagemSelect);


        this.episodioSelecionado = [];
        for(episodio of personagem.episode){
            axios.get(episodio)
            .then((response) => {
                this.episodioSelecionado.push("Ep"+ ") "  + response.data.id + " "  + response.data.name);
                // console.log(this.episodioSelecionado);
            })
            .catch((error) => {
                console.log(error);
            })

        }

        this.vizinhoSelecionado = [];
        axios.get(personagem.location.url)
        .then((response) => {
            for(vizinho of response.data.residents){
                axios.get(vizinho)
                .then((responseRequest) => {
                    this.vizinhoSelecionado.push(responseRequest.data.name);
                    // console.log(this.vizinhoSelecionado);
                })
                .catch((error) => {
                    console.log(error);
                })
            }
        })

       
    }

  

}

   

    

}





  
    










