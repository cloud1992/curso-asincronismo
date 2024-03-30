import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

function postData(urlApi, data) {
  const response = fetch(urlApi, {
    method: "POST",
    mode: "cors",
    credentials: "same-origin",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response; 
}

const data = {
    "title": "Mi primer post",
    "price": 100,
    "description": "Descripción de mi primer post",
    "categoryId": 1,
    "images": ["https://placeimg.com/80/80/any"],
}

postData(`${API}/products`, data)
    .then(response => response.json())
    .then(data => console.log(data));