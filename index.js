class City {
    constructor(Name, Population, Keywords = []) {
        this.name = Name;
        this.population = Population;
        this.keywords = Keywords;
    }
}

const CITIES = [
    new City("Warsaw", 100, ["Cool"]),
    new City("Lublin", 2),
    new City("Gdansk", 10, ["Cool", "Interesting", "Sexy"])
];

const KEYWORDS = [
    "Cool", "Interesting", "Sexy"
]

const checkboxContainer = document.getElementById("dynamicBoxes");

for (let addBox = 0; addBox < KEYWORDS.length; addBox++) {
    const key = KEYWORDS[addBox];
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = key;
    checkbox.id = key;

    const label = document.createElement("label");
    label.htmlFor = key;
    label.innerText = key;

    checkboxContainer.appendChild(checkbox);
    checkboxContainer.appendChild(label);
}

function filterByPopulation(citiesArr, from, to) {
    const result = citiesArr.filter(city => city.population >= from && city.population <= to);
    return result;
};
function filterByKeywords(citiesArr, arrKeys = []) {
    let isAnyChecked = false;

    for (let key of arrKeys) {
        if (key.checked) {
            isAnyChecked = true;
            break;
        }
    }

    let result;
    if (isAnyChecked)
        result = citiesArr.filter(c => c.keywords.some(k => arrKeys.includes(k)));
    else
        result = citiesArr;


    return result;
};

export function buttonClick() {
    const fromEl = document.getElementById("from");
    const toEl = document.getElementById("to");
    let sortedCities = filterByPopulation(CITIES, fromEl.value, toEl.value);

    const resultDiv = document.getElementById("result");
    const checkForm = document.getElementById("dynamicBoxes");
    sortedCities = filterByKeywords(sortedCities, checkForm.elements.map(el => el));

    const sresultDiv = document.getElementById("Sresult");


    resultDiv.innerHTML = "";
    sresultDiv.innerHTML = "";
    for (let city of sortedCities) {
        let cityDiv = document.createElement("div");
        cityDiv.innerText = city.name;


        resultDiv.appendChild(cityDiv);
    };
}

document.getElementById('buttonFilter').addEventListener('click', buttonClick);

