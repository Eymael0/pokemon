async function buscarPokemon(){
    const nome = document.getElementById("pokemon").value;
    const resposta = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${nome.toLowerCase()}`
    );
    const pokemon = await resposta.json();
    console.log(pokemon);
    document.getElementById("nome").textContent = pokemon.name;
    document.getElementById("imagem").src = 
    pokemon.sprites.front_default;
}

    if (buscarPokemon == true) {
        <div class="container text-center">
  <div class="row">
    <div class="">
      Column
    </div>
    <div class="">
      Column
    </div>
    <div class="">
      Column
    </div>
  </div>
</div>
        
    }