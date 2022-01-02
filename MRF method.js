// 1. Solving problems using array functions on rest countries data.

const getCountries = () => {
    console.log("Getting countries...");
    const data = new XMLHttpRequest();
    data.open("GET","https://restcountries.com/v3.1/all");
    data.send();
    data.responseType = "json";
    data.onload = () => {
        const Countriesdata = data.response;
        console.log(Countriesdata);

// a. Get all the countries from Asia continent /region using Filter function
        const asiaregion = Countriesdata.filter((country) => (country.region === "Asia"));
        console.log(asiaregion);
        const asiaregion1 = asiaregion.map((country) => country.name.common);
        console.log(asiaregion1);

// b. Get all the countries with a population of less than 2 lakhs using Filter function
        const Pop = Countriesdata.filter((country) => (country.population < 2_00_000));
        console.log(Pop);
        const Population = Pop.map((country) => (country.name.common));
        console.log(Population);

// c. Print the following details name, capital, flag using forEach function
        // const countrydetais=Countriesdata.forEach((country,country1,country2) => (country.name.common , country1.capital , country2.flag));
        // console.log(countrydetais);
        Countriesdata.forEach((country) => {
            console.log(`
        Name : ${country.name.common}
        Capital : ${country.capital}
        Flag : ${country.flag}
        `)
        })

// d. Print the total population of countries using reduce function
        // const Population1 = Countriesdata.map((country) => country.population);
        // console.log(Population1);
        const Totalpopulation = Countriesdata.reduce((sum,curr) => (sum+curr.population) , 0);
        console.log(Totalpopulation);

// e.Print the country which uses US Dollars as currency.
        // const USdol = Countriesdata.map((country) => (country.currencies));
        // console.log(USdol);
        const USdoller = Countriesdata.filter((country) => (country.currencies && country.currencies.USD ));
        console.log(USdoller);
        const USdollercountries = USdoller.map((country) => (country.name.common));
        console.log(USdollercountries);
    };
};
getCountries();