

axios.get('https://catfact.ninja/fact')
.then(function(response){
    console.log(response.data);
})
.catch(function(error){
    console.log(error);
})