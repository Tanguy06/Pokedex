var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();


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

app.get('/:PokemonName', function (req, res){


    P.getPokemonByName(req.params.PokemonName, function(response, error) { // with callback
        if(!error) {
            res.render('pokemon_infos', {pokemon_infos: response});
        } else {
            res.send('error');
        }
      });
})

app.listen(3000, function () {
    console.log('serveur prêt');
})