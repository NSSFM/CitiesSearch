class City {
    constructor(Name, Population, Keywords = []) {
        this.name = Name;
        this.population = Population;
        this.keywords = Keywords;
    }
}

const cities = [
    new City("Warsaw", 100, ["Cool"]),
    new City("Lublin", 2),
    new City("Gdansk", 10, ["Cool", "Interesting", "Sexy"])
];

function filterByPopulation(citiesArr, from, to) {
    const result = citiesArr.filter(city => city.population >= from && city.population <= to);
    return result;
};
function filterByKeywords(citiesArr, arrKeys = []) {
    let isAnyChecked = false;

    for(let key of arrKeys) {
        if(key.checked) {
            isAnyChecked = true;
            break;
        }
    }
    let result;
    if(isAnyChecked)
        result = citiesArr.filter(c => c.keywords.some(k => arrKeys[k]?.checked));
    else
        result = citiesArr;


    return result;
};

export function buttonClick() {
    const fromEl = document.getElementById("from");
    const toEl = document.getElementById("to");
    let sortedCities = filterByPopulation(cities, fromEl.value, toEl.value);

    const resultDiv = document.getElementById("result");
    const checkForm = document.getElementById("keyForms");
    sortedCities = filterByKeywords(sortedCities, checkForm.elements);

    const sresultDiv = document.getElementById("Sresult");
    resultDiv.innerHTML = "";
    sresultDiv.innerHTML = "";
    for (let city of sortedCities) {
        let cityDiv = document.createElement("div");
        cityDiv.innerText = city.name;


        resultDiv.appendChild(cityDiv);
    };

};
document.getElementById("buttonFilter").addEventListener("click", buttonClick);

