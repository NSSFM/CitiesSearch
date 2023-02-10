class City {
    constructor(Name, Population, Keywords) {
        this.name = Name;
        this.population = Population;
        this.keywords = Keywords;
    }
}

const cities = [
    new City("Warsaw", 100, ["Cool"]),
    new City("Lublin", 2),
    new City("Gdansk", 10, ["Interesting", "Sexy"])
];

function filterByPopulation(from, to) {
    const result = cities.filter(city => city.population >= from && city.population <= to);
    return result;
};

export function buttonClick() {
    const fromEl = document.getElementById("from");
    const toEl = document.getElementById("to");
    let sortedCities = filterByPopulation(fromEl.value, toEl.value);
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
    for (let city of sortedCities){
        let cityDiv = document.createElement("div");
        cityDiv.innerText = city.name;


        resultDiv.appendChild(cityDiv);
    };
};
document.getElementById ("buttonFilter").addEventListener ("click", buttonClick);

