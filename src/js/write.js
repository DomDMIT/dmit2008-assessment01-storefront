import { db, storage } from "./libs/firebase/firebaseConfig";
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { ref as databaseRef, push, set, get } from "firebase/database";

document.getElementById("rentalImage").addEventListener("change", onImageSelected);
document.forms["rentalForm"].addEventListener("submit", onAddRental);

function onImageSelected(e) {
  const filePath = URL.createObjectURL(e.target.files[0]);
  document.querySelector(".display img").src = filePath;
}

function onAddRental(e) {
  e.preventDefault();
  uploadNewVacactionRenal();
}

async function uploadNewVacactionRenal() {
  const city = document.getElementById("cityName").value.trim();
  const file = document.getElementById("rentalImage").files[0];

  const imageRef = storageRef(storage, `images/${file.name}`);
  const dataRef = databaseRef(db, "rentals");
  const uploadResult = await uploadBytes(imageRef, file);
  const path = await getDownloadURL(imageRef);
  const imagePath = uploadResult.metadata.fullPath;
  const itemRef = push(dataRef);

  set(itemRef, {
    key: itemRef.key,
    image: imagePath,
    path,
    city
  });
}
