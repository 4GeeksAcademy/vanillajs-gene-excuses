/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const who = ["Mi abuela", "Mi perro", "El vecino", "Paco", "Mi amigo"];
  const action = ["comio", "disparo", "perdio"];
  const what = ["los apuntes", "la llave", "el coche"];
  const when = ["al anochecer", "al despertar", "en el colegio"];
  function createExcuse() {
    const whoRamdom = who[Math.floor(Math.random() * who.length)];
    const actionRamdom = action[Math.floor(Math.random() * action.length)];
    const whatRamdom = what[Math.floor(Math.random() * what.length)];
    const whenRamdom = when[Math.floor(Math.random() * when.length)];

    return `${whoRamdom} ${actionRamdom} ${whatRamdom} ${whenRamdom}`;
  }

  document.getElementById("excuse").textContent = createExcuse();
};
