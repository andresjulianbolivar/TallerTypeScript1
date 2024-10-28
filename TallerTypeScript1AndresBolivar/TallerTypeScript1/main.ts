
import { Serie } from './serie.js';

import { data } from './data.js';

// 1. cómo se referencian los objetos del DOM desde el código TS
let seriesTbody: HTMLElement = document.getElementById('series')!;
const promedio: HTMLElement = document.getElementById('promedio')!;

renderSeriesInTable(data);
promedio.innerHTML = `Seasons average: ${calcularPromedio(data)}`;

// 2. cómo se crean nuevos elementos HTML
function renderSeriesInTable(series: Serie[]): void {
  console.log('Desplegando series');
  series.forEach((serie) => { // 4. explicar el arrow function
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td style="font-weight:bold;">${serie.id}</td>
                           <td style="color:#1E90FF;">${serie.name}</td>
                           <td >${serie.channel}</td>
                           <td >${serie.seasons}</td>`;
    seriesTbody.appendChild(trElement);
  });
}

function calcularPromedio(series: Serie[]): number {
  console.log("Calculando promedio");
  let totalSeasons: number = 0;
  let seasonsCount: number = 0;
  series.forEach((serie) => totalSeasons = totalSeasons + serie.seasons);
  series.forEach((serie) => seasonsCount = seasonsCount + 1);
  let nPromedio: number=totalSeasons/seasonsCount;
  return nPromedio;
}