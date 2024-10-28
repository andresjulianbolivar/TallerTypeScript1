import { data } from './data.js';
// 1. cómo se referencian los objetos del DOM desde el código TS
var seriesTbody = document.getElementById('series');
var promedio = document.getElementById('promedio');
renderSeriesInTable(data);
promedio.innerHTML = "Seasons average: ".concat(calcularPromedio(data));
// 2. cómo se crean nuevos elementos HTML
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td style=\"font-weight:bold;\">".concat(serie.id, "</td>\n                           <td style=\"color:#1E90FF;\">").concat(serie.name, "</td>\n                           <td >").concat(serie.channel, "</td>\n                           <td >").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function calcularPromedio(series) {
    console.log("Calculando promedio");
    var totalSeasons = 0;
    var seasonsCount = 0;
    series.forEach(function (serie) { return totalSeasons = totalSeasons + serie.seasons; });
    series.forEach(function (serie) { return seasonsCount = seasonsCount + 1; });
    var nPromedio = totalSeasons / seasonsCount;
    return nPromedio;
}
