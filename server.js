var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();

P.getPokemonByName(34, function(response, error) { // with callback
    if(!error) {
      console.log(response);
    } else {
      console.log(error)
    }
  });

const express = require('express');
const app = express();

app.set('view engine', 'ejs')

app.get('/', function(req, res){
    
    P.getPokemonsList({
        limit: 150,
        offset: 0
      }, function(response) {
          console.log(response)
          res.render('pokemon', { pokemonList: response});
        }
    );

})

app.listen(3000, function () {
    console.log('yo');
})