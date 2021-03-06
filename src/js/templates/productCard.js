function productCard({key, title, price, genre, rating, release, urlPath}) {
    const template = 
    `
    <aside class="m-auto">
      <div class="card" style="width: 18rem;">
        <img src="${urlPath}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Price: $${price}.99</li>
          <li class="list-group-item">Genre: ${genre}</li>
          <li class="list-group-item">Rating: ${rating}</li>
          <li class="list-group-item">Release: ${release}</li>
        </ul>
        <div class="card-body">
            <button id="edit" data-key="${key}" >Edit</button>
            <button id="delete" data-key="${key}" >Delete</button>
        </div>
      </div>
    </aside>
    `
    const element = document.createRange().createContextualFragment(template).children[0]
    addCardControls(element)
    return element
}

function addCardControls(game){
    game.querySelector('#edit').addEventListener('click', onEditGame)
    game.querySelector('#delete').addEventListener('click', onRemoveGame)
}

function onEditGame(e){
    const key = e.target.dataset.key 
    sessionStorage.setItem('key', key)
    window.location.assign('update.html')
}

function onRemoveGame(e){
    const key = e.target.dataset.key 
    sessionStorage.setItem('key', key)
    window.location.assign('delete.html')
}

export {productCard}
