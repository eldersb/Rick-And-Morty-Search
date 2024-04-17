function SelPersonagem(){

    

    axios.get('https://rickandmortyapi.com/api/character')
    .then(function(response){
        
        console.log(response.data.results);
    })
     .catch(function(error){
         console.log(error);
     })

  
    

}


var app = {
    characters: [],
    isOpen: false
};







