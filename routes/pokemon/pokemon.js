const express = require('express');
const router  = express.Router();
const axios = require('axios')
const pokeApiURL = 'https://pokeapi.co/api/v2/pokemon'

/* GET home page */
router.get('/', (req, res, next) => {
  axios
  .get(`${pokeApiURL}?limit=1000`)
  .then(allPokemon => {
    console.log({ pokemon: allPokemon.data.results })
    res.render('pokemon/pokemon-list', {allPokemon: allPokemon.data.results})
  })
    .catch(err => next(err))
  });

  // router.get('/details/:pokeId', (req, res, next) => {
  //   axios.get()
  // })

module.exports = router;
