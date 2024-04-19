const app = () => {
    return {
        characters: [],
        personagemSelect: null,
        episodioSelecionado: [],
        vizinhoSelecionado: [],
        urlImagem: "https://rickandmortyapi.com/api/character/avatar/19.jpeg",
     async init(){

        try {
            let page = 1;
            let allCharacters = [];

            while(page !== null) {
                const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
                const charactersPage = response.data.results;
                allCharacters = [...allCharacters, ...charactersPage];

                page = response.data.info.next ? new URL(response.data.info.next).searchParams.get('page') : null;
            }

            this.characters = allCharacters;
            console.log(this.characters);
        } catch(error){
            console.log(error);
        }
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





  
    










