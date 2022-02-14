import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { ref as databaseRef, set, get } from 'firebase/database';
import { db, storage } from './libs/firebase/firebaseConfig';

//   console.log("update page")
//   console.log(key)
  // ref with key   rental/key
  // get data
  // populate the form

const productForm = document.forms['productForm']

function pageInit() {
  const key = sessionStorage.getItem('key')
  const productRef = databaseRef(db, `games/${key}`)
  const productSnapShot = get(productRef)

  if (productSnapShot.exists()) {
      setFieldValues(rentalSnapShot.val())
  }

    productForm.addEventListener('submit', onUpdateGame)

}

function onUpdateGame(e) {
    e.preventDefault();

    const cover = document.querySelector('gameCover').files[0];
    const title = document.querySelector('gameTitle').value.trim();
    const price = document.querySelector('gamePrice').value.trim();
    const genre = document.querySelector('gameGenre').value.trim();
    const rating = document.querySelector('ageRating').value.trim();
    const release = document.querySelector('releaseDate').value.trim();
}

function setFieldValues({title, price, genre, rating, release, urlPath}) {
    rentalForm.elements['title'].value = title;
    rentalForm.elements['price'].value = price;
    rentalForm.elements['genre'].value = genre;
    rentalForm.elements['rating'].value = rating;
    rentalForm.elements['release'].value = release;
    document.querySelector('#gameCover img').src = urlPath;
}

function updateRentalData() {
    const cover = productForm.elements['gameCover'].files;
    const city = productForm.elements['gameTitle'].value.trim();
    if (file.length !== 0) {
        const imageRef = storageRef(storage, "path")
    }
    const key = sessionStorage.getItem('key')
    const dataRef = databaseRef(db, `games/${key}`)
    set(dataRef,{
        urlPath,
        title,
        price,
        genre,
        rating,
        release
    })
}

pageInit()