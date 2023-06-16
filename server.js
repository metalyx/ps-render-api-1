const express = require("express");

const app = express();

app.use(express.json());

const countries = [
  {
    countryName: "United States",
    capital: "Washington, D.C.",
    population: 331000000,
    language: "English",
    currency: "United States Dollar ($)",
    img: "",
  },
  {
    countryName: "Canada",
    capital: "Ottawa",
    population: 37590000,
    language: "English, French",
    currency: "Canadian Dollar ($)",
    img: "",
  },
  {
    countryName: "Germany",
    capital: "Berlin",
    population: 83190556,
    language: "German",
    currency: "Euro (€)",
    img: "",
  },
  {
    countryName: "Japan",
    capital: "Tokyo",
    population: 126010000,
    language: "Japanese",
    currency: "Japanese Yen (¥)",
    img: "",
  },
  {
    countryName: "Brazil",
    capital: "Brasília",
    population: 211049527,
    language: "Portuguese",
    currency: "Brazilian Real (R$)",
    img: "",
  },
  {
    countryName: "Australia",
    capital: "Canberra",
    population: 25687041,
    language: "English",
    currency: "Australian Dollar ($)",
    img: "",
  },
  {
    countryName: "France",
    capital: "Paris",
    population: 67060000,
    language: "French",
    currency: "Euro (€)",
    img: "",
  },
  {
    countryName: "China",
    capital: "Beijing",
    population: 1444216107,
    language: "Chinese",
    currency: "Renminbi (¥)",
    img: "",
  },
  {
    countryName: "India",
    capital: "New Delhi",
    population: 1393409038,
    language: "Hindi, English",
    currency: "Indian Rupee (₹)",
    img: "",
  },
  {
    countryName: "Russia",
    capital: "Moscow",
    population: 145912025,
    language: "Russian",
    currency: "Russian Ruble (₽)",
    img: "",
  },
  {
    countryName: "Mexico",
    capital: "Mexico City",
    population: 126190788,
    language: "Spanish",
    currency: "Mexican Peso ($)",
    img: "",
  },
  {
    countryName: "United Kingdom",
    capital: "London",
    population: 66435600,
    language: "English",
    currency: "British Pound (£)",
    img: "",
  },
  {
    countryName: "South Africa",
    capital: "Pretoria, Cape Town, Bloemfontein",
    population: 58775022,
    language: "Zulu, Xhosa, Afrikaans, English",
    currency: "South African Rand (R)",
    img: "",
  },
  {
    countryName: "Saudi Arabia",
    capital: "Riyadh",
    population: 34813867,
    language: "Arabic",
    currency: "Saudi Riyal (ر.س)",
    img: "",
  },
  {
    countryName: "Argentina",
    capital: "Buenos Aires",
    population: 44938712,
    language: "Spanish",
    currency: "Argentine Peso ($)",
    img: "",
  },
];

app.get("/", (req, res) => {
  res.status(200).json(countries);
});

app.get("/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * countries.length);
  res.status(200).json(countries[randomIndex]);
});

app.get("/search/:string", (req, res) => {
  const searchName = req.params.string;

  if (!searchName) {
    return res.status(400).json({
      error: "No name was provided in params",
    });
  }

  const searchElement = countries.find(
    (country) =>
      country.countryName.toLocaleLowerCase() === searchName.toLocaleLowerCase()
  );

  if (!searchElement) {
    return res.status(404).json({
      error: `No country with name ${searchName} was found.`,
    });
  }

  res.status(200).json(searchElement);
});

app.post("/create", (req, res) => {
  const newCountry = req.body;

  if (!newCountry) {
    return res.status(400).json({
      error: "No body was found in request",
    });
  }

  countries.push(newCountry);

  res.status(200).json(newCountry);
});

app.listen(5000, () => {
  console.log("server started on port 5000");
});
