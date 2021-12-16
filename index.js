/*
|title   |title   |title
|btn     |btn     |btn
|        |        |
*/

/*
legyen 3 oszlop
3 button
ha kattintok az egyikre, akkor a szuloben legyen egy kep
a kepet egy apirol szedem
csak egy kep legyen ott
*/

let root = null;

const createColumn = (id, title) => {
  // html: <div class="col"></div>
  const col1 = document.createElement("div");
  col1.className = "col";
  col1.id = id;

  // html: <h1>Purry</h1>
  const h1 = document.createElement("h1");
  h1.innerText = title;

  // html: <button class="loader-btn">Tocsseeee le</button>
  const btn = document.createElement("button");
  btn.innerText = "Tocsseeee le";
  btn.className = "loader-btn";

  btn.addEventListener("click", () => {
    fetchKityOnClick(col1);
  });

  // DOM: document --> body --> div#root

  root.append(col1);
  // DOM: document --> body --> div#root --> div.col#kitty1

  col1.append(h1, btn);
  // DOM: document --> body --> div#root --> div.col#kitty1 --> h1
  //                                                      |
  //                                                       --> button
};

const fetchKityOnClick = async (parent) => {
  //get image here
  
  const url = "https://api.thecatapi.com/v1/images/search";
  const resp = await fetch(url);
  const data = await resp.json();
  const cat = data[0];
  //const src = 'https://toppng.com/uploads/preview/cat-11521380838sq5q7tscgh.png';

  const inParent = parent.querySelector("img");
  if (inParent) {
    inParent.remove();
  }

  const img = document.createElement("img");
  img.src = cat.url;
  parent.append(img);
  // document --> body --> #root --> #elso.col --> h1
  //                                           --> button
  //                                           --> img
};

const main = () => {
  root = document.getElementById("root");

  createColumn("elso", "Purry 1");
  createColumn("masodik", "Purry 2");
  createColumn("harmadik", "Purry 3");
};

window.addEventListener("load", main);
