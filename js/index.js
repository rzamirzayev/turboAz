const barter = document.querySelector("#barterCheck");
const kredit = document.querySelector("#creditCheck");
const barterLabel = document.querySelector("#barter");
const kreditLabel = document.querySelector("#credit");

barter.addEventListener("click", () => {
  if (barterLabel.style.background === "red") {
    barterLabel.style.background = "white";
    barterLabel.style.color = "black";
    barter.value = 0;
  } else {
    barterLabel.style.background = "red";
    barterLabel.style.color = "white";
    barter.value = 1;
  }
});

kredit.addEventListener("click", () => {
  if (kreditLabel.style.background === "red") {
    kreditLabel.style.background = "white";
    kreditLabel.style.color = "black";
    kredit.value = 0;
  } else {
    kreditLabel.style.background = "red";
    kreditLabel.style.color = "white";
    kredit.value = 1;
  }
});

//#region car data
let cars = [
  {
    id: 1,
    city: "Bakı",
    brand: "Hyundai",
    model: "SantaFe",
    year: 2001,
    engine: "2.0L",
    distance: "258555",
    new: false,
    price: 10500,
    exchange: "AZN",
    credit: false,
    barter: false,
    img: "https://turbo.azstatic.com/uploads/f660x496/2023%2F03%2F08%2F10%2F13%2F30%2F23993005-5e40-4672-9986-4df21ad4df67%2F27241_JYBdbXo5P0YpKijQYMCIVg.jpg",
    link: "https://turbo.az/autos/7175423-hyundai-santa-fe",
  },
  {
    id: 2,
    city: "Bakı",
    brand: "Hyundai",
    model: "SantaFe",
    year: 2002,
    engine: "2.0L",
    distance: "465570",
    new: false,
    price: 12300,
    exchange: "AZN",
    credit: false,
    barter: false,
    img: "https://turbo.azstatic.com/uploads/f660x496/2023%2F02%2F20%2F10%2F06%2F24%2Ffdeb3c6a-c889-47f2-9b7a-ba7dd6dbeb3f%2F6227_fMGrIWXBAHz9RXzFJzltkg.jpg",
    link: "https://turbo.az/autos/7122397-hyundai-santa-fe",
  },
  {
    id: 3,
    city: "Bakı",
    brand: "Hyundai",
    model: "Tucson",
    year: 2009,
    engine: "2.0L",
    distance: "144000",
    new: false,
    price: 24500,
    exchange: "AZN",
    credit: false,
    barter: false,
    img: "https://turbo.azstatic.com/uploads/f660x496/2022%2F12%2F14%2F14%2F35%2F50%2Faa79d8b6-b538-4d8e-8c2d-0c6a43b70587%2F5265_JaqhayHUiHb3nBUJy9POjA.jpg",
    link: "https://turbo.az/autos/6910017-hyundai-tucson",
  },
  {
    id: 4,
    city: "Bakı",
    brand: "Hyundai",
    model: "SantaFe",
    year: 2011,
    engine: "2.4L",
    distance: "180000",
    new: false,
    price: 25000,
    exchange: "AZN",
    credit: false,
    barter: true,
    img: "https://turbo.azstatic.com/uploads/f660x496/2023%2F03%2F11%2F16%2F45%2F56%2Fe47a85b1-92cd-47d3-a89f-e075abe6b44b%2F27250_C_sJ1F-wMeVj7nTxfwE3Mw.jpg",
    link: "https://turbo.az/autos/7185609-hyundai-santa-fe",
  },
  {
    id: 5,
    city: "Bərdə",
    brand: "Hyundai",
    model: "Tucson",
    year: 2013,
    engine: "2.0L",
    distance: "117758",
    new: false,
    price: 27500,
    exchange: "AZN",
    credit: false,
    barter: false,
    img: "https://turbo.azstatic.com/uploads/f660x496/2023%2F03%2F10%2F19%2F58%2F25%2Fc274046e-f353-4c15-abf5-cc6242119914%2F67575_PhgkjJrQYC9uSyQY_cFqgA.jpg",
    link: "https://turbo.az/autos/7183258-hyundai-tucson",
  },
  {
    id: 6,
    city: "Gəncə",
    brand: "Hyundai",
    model: "Tucson",
    year: 2013,
    engine: "2.0L",
    distance: "135000",
    new: false,
    price: 27500,
    exchange: "AZN",
    credit: false,
    barter: false,
    img: "https://turbo.azstatic.com/uploads/f660x496/2023%2F02%2F12%2F20%2F29%2F43%2Fc90c467a-4626-40a2-be9e-db445598fe71%2F65977_oU7A3PDOkgaQKlby2YMR7A.jpg",
    link: "https://turbo.az/autos/7097508-hyundai-tucson",
  },
  {
    id: 7,
    city: "Sumqayıt",
    brand: "Hyundai",
    model: "Elantra",
    year: 2017,
    engine: "2.0L",
    distance: "59821",
    new: false,
    price: 26400,
    exchange: "AZN",
    credit: true,
    barter: true,
    img: "https://turbo.azstatic.com/uploads/f660x496/2023%2F03%2F02%2F09%2F19%2F14%2Fb2aa1c24-48dc-4059-9123-3c27b5d4cb2f%2F67981_-6Ajeb_e3Lc0zzvxN1M4nQ.jpg",
    link: "https://turbo.az/autos/7156172-hyundai-elantra",
  },
  {
    id: 8,
    city: "Bakı",
    brand: "Hyundai",
    model: "Elantra",
    year: 2020,
    engine: "1.6L",
    distance: "61900",
    new: false,
    price: 35900,
    exchange: "AZN",
    credit: true,
    barter: true,
    img: "https://turbo.azstatic.com/uploads/f660x496/2023%2F02%2F02%2F16%2F35%2F01%2F828bcdf8-e9b2-4bba-b1cf-e87359a6cf76%2F96311_6x-fV658S-72_MyxlY_3HQ.jpg",
    link: "https://turbo.az/autos/7064781-hyundai-elantra",
  },
  {
    id: 9,
    city: "Bakı",
    brand: "Hyundai",
    model: "Elantra",
    year: 2022,
    engine: "1.6L",
    distance: "0",
    new: true,
    price: 37900,
    exchange: "AZN",
    credit: false,
    barter: false,
    img: "https://turbo.azstatic.com/uploads/f660x496/2022%2F06%2F17%2F09%2F47%2F16%2Fc40ae10c-b053-4c6a-a15a-f747881853a6%2F16130_vTU-MG_ZaYvfiYMbxJ1szg.jpg",
    link: "https://turbo.az/autos/6389293-hyundai-elantra",
  },
  {
    id: 10,
    city: "Bakı",
    brand: "Hyundai",
    model: "SantaCruz",
    year: 2022,
    engine: "2.5L",
    distance: "3064",
    new: false,
    price: 38500,
    exchange: "USD",
    credit: false,
    barter: false,
    img: "https://turbo.azstatic.com/uploads/f660x496/2023%2F02%2F20%2F10%2F06%2F24%2Ffdeb3c6a-c889-47f2-9b7a-ba7dd6dbeb3f%2F6227_fMGrIWXBAHz9RXzFJzltkg.jpg",
    link: "https://turbo.az/autos/7152871-hyundai-santa-cruz",
  },
  {
    id: 11,
    city: "Bakı",
    brand: "BMW",
    model: "740",
    year: 2022,
    engine: "3.0L",
    distance: "0",
    new: true,
    price: 153000,
    exchange: "EUR",
    credit: false,
    barter: true,
    img: "https://turbo.azstatic.com/uploads/f660x496/2023%2F03%2F08%2F16%2F24%2F35%2Fff8c1b01-8235-4910-b68a-adf464840a30%2F6366_zasdzS_Rv-0gGOrnx96bbw.jpg",
    link: "https://turbo.az/autos/6987173-bmw-740",
  },
  {
    id: 12,
    city: "Bakı",
    brand: "BMW",
    model: "330",
    year: 2017,
    engine: "2.0L",
    distance: "73822",
    new: false,
    price: 23900,
    exchange: "AZN",
    credit: true,
    barter: true,
    img: "https://turbo.azstatic.com/uploads/f660x496/2023%2F03%2F13%2F09%2F07%2F04%2F27814eae-ef50-4292-89a3-a10f18fb8643%2F27245_WZkM6o5GC2Cee9VtsibvGw.jpg",
    link: "https://turbo.az/autos/7186266-bmw-330",
  },
  {
    id: 13,
    city: "Gəncə",
    brand: "BMW",
    model: "525",
    year: 2007,
    engine: "2.5L",
    distance: "218000",
    new: false,
    price: 21600,
    exchange: "USD",
    credit: false,
    barter: false,
    img: "https://turbo.azstatic.com/uploads/f660x496/2023%2F03%2F01%2F20%2F00%2F51%2F035d87c9-b7d6-46a1-ad0c-e85eab32a127%2F68006_B0Pi5IpeiRKK6KAIDQCVYA.jpg",
    link: "https://turbo.az/autos/7155343-bmw-525",
  },
  {
    id: 14,
    city: "Bərdə",
    brand: "BMW",
    model: "X5",
    year: 2005,
    engine: "4.4L",
    distance: "187917",
    new: false,
    price: 25500,
    exchange: "AZN",
    credit: false,
    barter: false,
    img: "https://turbo.azstatic.com/uploads/f660x496/2023%2F03%2F13%2F10%2F27%2F18%2Fcf3e654f-ac1f-4a76-9ae6-dae58862c055%2F27282_-TTTbIPjLSGIefEAc0u95Q.jpg",
    link: "https://turbo.az/autos/7191348-bmw-x5",
  },
  {
    id: 15,
    city: "Balakən",
    brand: "BMW",
    model: "430",
    year: 2016,
    engine: "2.0L",
    distance: "111000",
    new: false,
    price: 26000,
    exchange: "USD",
    credit: false,
    barter: true,
    img: "https://turbo.azstatic.com/uploads/f660x496/2022%2F07%2F04%2F19%2F41%2F58%2Fa53c5f34-32c5-42a5-8025-6d1bff7cc6a2%2F64919_tINhMqdk_dr2iplAPat3Wg.jpg",
    link: "https://turbo.az/autos/6438427-bmw-430",
  },
  {
    id: 16,
    city: "Salyan",
    brand: "BMW",
    model: "320",
    year: 2007,
    engine: "2.0L",
    distance: "390000",
    new: false,
    price: 17500,
    exchange: "AZN",
    credit: false,
    barter: false,
    img: "https://turbo.azstatic.com/uploads/f660x496/2023%2F01%2F26%2F18%2F45%2F29%2Ff96c025c-83d3-4537-968e-eaf83d0861af%2F28131_mOG_ivBIxqhYFHj5i349Vw.jpg",
    link: "https://turbo.az/autos/7008542-bmw-320",
  },
  {
    id: 17,
    city: "Gəncə",
    brand: "BMW",
    model: "X5",
    year: 2019,
    engine: "3.0L",
    distance: "53000",
    new: false,
    price: 75000,
    exchange: "USD",
    credit: false,
    barter: false,
    img: "https://turbo.azstatic.com/uploads/f660x496/2023%2F02%2F19%2F14%2F48%2F30%2F2b13b79b-6358-4d6a-ba2b-31f56ea15882%2F29473_JcorFmXToPXT6p91E8WXNg.jpg",
    link: "https://turbo.az/autos/7119337-bmw-x5",
  },
  {
    id: 18,
    city: "Bakı",
    brand: "BMW",
    model: "530e",
    year: 2018,
    engine: "2.0L",
    distance: "102000",
    new: false,
    price: 42000,
    exchange: "USD",
    credit: false,
    barter: false,
    img: "https://turbo.azstatic.com/uploads/f660x496/2023%2F03%2F10%2F11%2F55%2F10%2F58a57a64-5c52-4d9f-a86f-a2fa7fcfee7a%2F27245_xnHr3pSbgkYhxwUrg2vkQw.jpg",
    link: "https://turbo.az/autos/7181598-bmw-530e",
  },
  {
    id: 19,
    city: "Bakı",
    brand: "BMW",
    model: "X7",
    year: 2022,
    engine: "3.0L",
    distance: "0",
    new: true,
    price: 147500,
    exchange: "USD",
    credit: false,
    barter: false,
    img: "https://turbo.azstatic.com/uploads/f660x496/2023%2F01%2F23%2F12%2F48%2F48%2F1921515b-c88d-4728-a478-ca9090f7db96%2F19486_0YhkDDu0d2wa3lQvlXgEUw.jpg",
    link: "https://turbo.az/autos/7028884-bmw-x7",
  },
  {
    id: 20,
    city: "Bakı",
    brand: "BMW",
    model: "M5",
    year: 2019,
    engine: "4.4L",
    distance: "50000",
    new: false,
    price: 102000,
    exchange: "USD",
    credit: false,
    barter: true,
    img: "https://turbo.azstatic.com/uploads/f660x496/2022%2F12%2F20%2F17%2F41%2F28%2F22970a10-a2b3-464e-948d-d3474f355135%2F11927_2aRihTKJW9f7wqI6TV3bAw.jpg",
    link: "https://turbo.az/autos/6928732-bmw-m5",
  },
  {
    id: 21,
    city: "Bakı",
    brand: "Mercedes",
    model: "GLE 450",
    year: 2022,
    engine: "3.0L",
    distance: "0",
    new: true,
    price: 118500,
    exchange: "USD",
    credit: false,
    barter: true,
    img: "https://turbo.azstatic.com/uploads/f660x496/2022%2F12%2F22%2F12%2F06%2F09%2F62094f5f-819e-44c5-9985-c627f800337a%2F28883_hQuQBPKs0K_BKjpOUuC-Hg.jpg",
    link: "https://turbo.az/autos/6933150-mercedes-gle-450-amg-coupe",
  },
  {
    id: 22,
    city: "Bakı",
    brand: "Mercedes",
    model: "C 220",
    year: 2021,
    engine: "2.0L",
    distance: "21600",
    new: false,
    price: 52800,
    exchange: "USD",
    credit: false,
    barter: false,
    img: "https://turbo.azstatic.com/uploads/full/2022%2F12%2F22%2F11%2F46%2F43%2F8dc9c3ef-13e9-4fda-b6e3-7705e355f509%2F8303_9wkG9SzFwpKavtcWWMYoyA.jpg",
    link: "https://turbo.az/autos/6933083-mercedes-c-220",
  },
  {
    id: 23,
    city: "Bakı",
    brand: "Mercedes",
    model: "G 63 AMG",
    year: 2020,
    engine: "4.0L",
    distance: "8100",
    new: false,
    price: 295000,
    exchange: "USD",
    credit: false,
    barter: true,
    img: "https://turbo.azstatic.com/uploads/f660x496/2023%2F02%2F04%2F14%2F48%2F36%2F2b821cbc-7973-486e-b87e-153b7b6c58f3%2F96293_tgRO-RKPNuII0Kf-G7wlZQ.jpg",
    link: "https://turbo.az/autos/6898627-mercedes-g-63-amg",
  },
  {
    id: 24,
    city: "Ucar",
    brand: "Mercedes",
    model: "C 240",
    year: 1999,
    engine: "2.4L",
    distance: "300000",
    new: false,
    price: 3500,
    exchange: "AZN",
    credit: false,
    barter: false,
    img: "https://turbo.azstatic.com/uploads/f660x496/2023%2F03%2F12%2F10%2F22%2F10%2F63de0747-2ff5-4370-8c88-e33b07ef6157%2F27256_3x3oLMURjTH_QnAA1ykcuA.jpg",
    link: "https://turbo.az/autos/7187362-mercedes-c-240",
  },
];

cars.forEach(function (item) {
  let card = `
  <div class="col-3 p-3">
    <div class="items border  rounded-lg">
      <img
        src="${item.img}"
        alt="${item.model}"
      />
      <div class="info pl-3">
        <div class="car-price font-weight-bold">
          <span>${item.price} ${item.exchange}</span>
        </div>
        <div class="car-name"><span>${item.brand}</span></div>
        <div class="car-info">
          <span> ${item.year}, ${item.engine} L, ${item.distance} km</span>
        </div>
        <div class="announce-info">
          <span> ${item.city}, dunen 13:53</span>
        </div>
      </div>
    </div>`;
  anounces.innerHTML += card;
});
//#endregion

//#region Filter Model Start

let modelsOfMercedes = [
  "Mercedes",
  "A 140",
  "A 150",
  "A 160",
  "A 170",
  "A 180",
  "A 190",
  "A 200",
  "A 210",
  "A 220",
  "B 150",
  "B 160",
  "B 170",
  "B 180",
  "B 190",
  "B 200",
  "B 210",
  "B 220",
  "B 230",
  "B 240",
  "B 250",
  "B 260",
  "B 270",
  "C 150",
  "C 160",
  "C 170",
  "C 180",
  "C 190",
  "C 200",
  "C 210",
  "C 220",
  "C 230",
  "C 240",
  "C 250",
  "C 260",
  "C 270",
  "E 150",
  "E 160",
  "E 170",
  "E 180",
  "E 190",
  "E 200",
  "E 210",
  "E 220",
  "E 230",
  "E 240",
  "E 250",
  "E 260",
  "E 270",
];
let modelsOfBmw = [
  "BMW",
  "116",
  "118",
  "120",
  "123",
  "220",
  "228",
  "316",
  "318",
  "320",
  "320 GT",
  "320e",
  "323",
  "325",
  "328",
  "328GT",
  "330",
  "330e",
  "420",
  "428",
  "430",
  "518",
  "520",
  "520e",
  "523",
  "525",
  "528",
  "530",
  "530e",
  "535",
  "535GT",
  "540",
  "545",
];
let modelsOfAudi = [
  "AUDI",
  "80",
  "90",
  "A1",
  "A3",
  "A4",
  "A4 allroad",
  "A5",
  "A5 Sportback",
  "A6",
  "A6 allroad",
  "A7",
  "A7 sportback",
  "A8",
  "Q2 e-tron",
  "Q3",
  "Q5",
  "Q8",
  "R8",
  "RS4",
  "RS7",
];

let modelsOfHyundai = [
  "Hyundai",
  "Accent",
  "Atos",
  "Azera",
  "County",
  "Coupe",
  "Creta",
  "Elantra",
  "Equus",
  "Excel",
  "Galloper",
  "Genesis",
  "Genesis Coupe",
  "Getz",
  "Grand Santa Fe",
  "Grandeur",
  "H 100",
  "H 350",
  "H-1",
  "HD-45",
  "HD-65",
  "HD-72",
  "HD-78",
  "Kona",
  "Matrix",
  "Palisade",
  "Santa Cruz",
  "Santa Fe",
  "Sonata",
  "Staria",
  "Super Aero City",
  "Terracan",
  "Tiburon",
  "Tucson",
  "Veloster",
  "Venue",
  "Veracruz",
  "Verna",
  "XG",
  "i10",
  "i30",
  "i40",
  "ix35",
  "ix55",
];

let modelsOfKia = [

  "Avella",
  "Bongo",
  "Cadenza",
  "Carens",
  "Carnival",
  "Ceed",
  "Ceed GT",
  "Cerato",
  "Cerato Koup",
  "Clarus",
  "EV6",
  "K2700",
  "K3",
  "K5",
  "K7",
  "K8",
  "Magentis",
  "Mohave",
  "Niro",
  "Opirus",
  "Optima",
  "Picanto",
  "Pregio",
  "Pride",
  "ProCeed",
  "Quoris",
  "Rio",
  "Rio X-Line",
  "Seltos",
  "Sephia",
  "Shuma",
  "Sorento",
  "Soul",
  "Spectra",
  "Sportage",
  "Stinger",
  "Stonic",

];


let modelsOfBentley = [
  "Bentley",
  "Bentayga",
  "Brooklands",
  "Continental",
  "Continental Flying Spur",
  "Continental GT",
  "Flying Spur",
];

let modelsOfMaserati = [ 
  "Ghibli",
  "GranTurismo",
  "GranTurismo S",
  "Quattroporte",
];

let modelsOfCadillac =[

  "ATS",
  "BLS",
  "CT5",
  "CT6",
  "CTS",
  "Escalade",
  "SRX",
  "XTS",
];

let modelsOfLamborghini=[
  "Aventador",
  "Gallardo",
  "Huracan",
  "Urus",
];

let modelsOfLandRover = [
  "Defender",
  "Discovery",
  "Discovery Sport",
  "Freelander",
  "RR Evoque",
  "RR Sport",
  "RR Velar",
  "Range Rover",
];

let modelsOfBrand = [modelsOfMercedes, modelsOfBmw, modelsOfAudi,modelsOfHyundai,modelsOfKia,modelsOfBentley,modelsOfMaserati,modelsOfCadillac];

const inputBrand = document.querySelector("#inputBrand");
const inputModel = document.querySelector("#inputModel");

inputBrand.addEventListener("change", () => {
  const defaultModelOpt = document.querySelector("#defaultModelOption");
  for (let i = 0; i < modelsOfBrand.length; i++) {
    if (modelsOfBrand[i][0] == inputBrand.value) {
      if (inputModel.innerHTML == defaultModelOpt) {
        modelsOfBrand[i].forEach(function (model) {
          let modelCard = `<option>${model}</option>`;
          inputModel.innerHTML += modelCard;
        });
      } else {
        inputModel.innerHTML = "";
        modelsOfBrand[i].forEach(function (model) {
          let modelCard = `<option>${model}</option>`;
          inputModel.innerHTML += modelCard;
        });
      }
    }
  }
});
//#endregion

//#region Min/Max Price
const maxPrice = document.querySelector("#maxPrice");
const minPrice = document.querySelector("#minPrice");

minPrice.addEventListener("input", () => {
  deleteForMinPrice();
});

maxPrice.addEventListener("input", () => {
  deleteForMaxPrice();
});

function deleteForMinPrice() {
  if (minPrice.value != "") {
    cancelIconMin.classList.remove("display-none");
  } else if (minPrice.value == "") {
    cancelIconMin.classList.add("display-none");
  }
}

function deleteForMaxPrice() {
  if (maxPrice.value != "") {
    cancelIconMax.classList.remove("display-none");
  } else if (maxPrice.value == "") {
    cancelIconMax.classList.add("display-none");
  }
}

const cancelIconMin = document.querySelector("#iconMin");
const cancelIconMax = document.querySelector("#iconMax");

cancelIconMin.addEventListener("click", () => {
  minPrice.value = "";
  cancelIconMin.classList.add("display-none");
});

cancelIconMax.addEventListener("click", () => {
  maxPrice.value = "";
  cancelIconMax.classList.add("display-none");
});

minPrice.addEventListener("keyup", function () {
  let removeMinChar = this.value.replace(/[^0-9\.]/g, ""); // delete for text
  let removeMinDot = removeMinChar.replace(/\./g, "");
  this.value = removeMinDot;
  // let formatedNumber1 = this.value.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  // this.value = formatedNumber1;
});

maxPrice.addEventListener("keyup", function () {
  let removeMaxChar = this.value.replace(/[^0-9\.]/g, ""); // delete for text
  let removeMaxDot = removeMaxChar.replace(/\./g, ""); //
  this.value = removeMaxDot;
  // let formatedNumber2 = this.value.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  // this.value = formatedNumber2;
});

//#endregion

//#region  showBTN
const showBtn = document.querySelector("#showButton");

showBtn.addEventListener("click", () => {
  let filterBrand = document.querySelector("#inputBrand").value;
  let filterModel = document.querySelector("#inputModel").value;
  let filterMin = document.querySelector("#minPrice").value;
  let filterMax = document.querySelector("#maxPrice").value;

  filterShow(filterBrand, filterModel, filterMin, filterMax);
});

function filterShow(Brand, Model, minprice, maxprice) {
  anounces.innerHTML = "";
  cars.forEach(function (item) {
    if (
      item.brand == Brand &&
      Model == Brand &&
      minprice == "" &&
      maxprice == ""
    ) {
      let card = `
  <div class="col-3 p-3">
    <div class="items border  rounded-lg">
      <img
        src="${item.img}"
        alt="${item.model}"
      />
      <div class="info pl-3">
        <div class="car-price font-weight-bold">
          <span>${item.price} ${item.exchange}</span>
        </div>
        <div class="car-name"><span>${item.brand}</span></div>
        <div class="car-info">
          <span> ${item.year}, ${item.engine} L, ${item.distance}</span>
        </div>
        <div class="announce-info">
          <span> ${item.city}, dunen 13:53</span>
        </div>
      </div>
    </div>`;
      anounces.innerHTML += card;
    }
    if (
      item.model == Model &&
      item.brand == Brand &&
      minprice <= item.price &&
      maxprice == ""
    ) {
      let card = `
  <div class="col-3 p-3">
    <div class="items border  rounded-lg">
      <img
        src="${item.img}"
        alt="${item.model}"
      />
      <div class="info pl-3">
        <div class="car-price font-weight-bold">
          <span>${item.price} ${item.exchange}</span>
        </div>
        <div class="car-name"><span>${item.brand}</span></div>
        <div class="car-info">
          <span> ${item.year}, ${item.engine} L, ${item.distance}</span>
        </div>
        <div class="announce-info">
          <span> ${item.city}, dunen 13:53</span>
        </div>
      </div>
    </div>`;
      anounces.innerHTML += card;
    }
    if (
      item.model == Model &&
      item.brand == Brand &&
      minprice <= item.price &&
      maxprice >= item.price
    ) {
      let card = `
  <div class="col-3 p-3">
    <div class="items border  rounded-lg">
      <img
        src="${item.img}"
        alt="${item.model}"
      />
      <div class="info pl-3">
        <div class="car-price font-weight-bold">
          <span>${item.price} ${item.exchange}</span>
        </div>
        <div class="car-name"><span>${item.brand}</span></div>
        <div class="car-info">
          <span> ${item.year}, ${item.engine} L, ${item.distance}</span>
        </div>
        <div class="announce-info">
          <span> ${item.city}, dunen 13:53</span>
        </div>
      </div>
    </div>`;
      anounces.innerHTML += card;
    }
  });
}

//#endregion

//#region AddNewAnnouncument

const addCarBtn = document.querySelector("#addNewCarBtn");

addCarBtn.addEventListener("click", () => {
  document.querySelector("#searching").style.display = "none";
  document.querySelector("#announcument").style.display = "none";
  document.querySelector("#register").style.display = "block";
});

const inputAddBrand = document.querySelector("#cars");
const inputAddModel = document.querySelector("#models");

inputAddBrand.addEventListener("change", () => {
  const defaultModelOpt = document.querySelector("#addModelDefaultOption");
  for (let i = 0; i < modelsOfBrand.length; i++) {
    if (modelsOfBrand[i][0] == inputAddBrand.value) {
      if (inputAddModel.innerHTML == defaultModelOpt) {
        modelsOfBrand[i].forEach(function (model) {
          let modelCard = `<option>${model}</option>`;
          inputAddModel.innerHTML += modelCard;
        });
      } else {
        inputAddModel.innerHTML = "";
        modelsOfBrand[i].forEach(function (model) {
          let modelCard = `<option>${model}</option>`;
          inputAddModel.innerHTML += modelCard;
        });
      }
    }
  }
});

const addCarSumbitBtn = document.querySelector("#addCarSumbit");

addCarSumbitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const inputAddImg = document.querySelector("#addCarimg").value;
  const inputAddYear = document.querySelector("#addCarYear").value;
  const inputAddDistance = document.querySelector("#addCarDistance").value;
  const inputAddEngine = document.querySelector("#addCarEngine").value;
  const inputAddPrice = document.querySelector("#addCarPrice").value;

  cars[cars.length] = {
    id: cars.length + 1,
    city: "Baki",
    brand: inputAddBrand.value, // `${inputAddBrand}`,
    model: inputAddModel.value, //`${inputAddModel.value}`,
    year: inputAddYear,
    engine: inputAddEngine, //`${inputAddEngine}`,
    distance: inputAddDistance, //`${inputAddDistance}`,
    new: false,
    price: inputAddPrice,
    exchange: "AZN",
    credit: false,
    barter: true,
    img: inputAddImg, // `${inputAddImg}`,
    link: "https://turbo.az/autos/6438427-bmw-430",
  };
  anounces.innerHTML = "";
  cars.forEach(function (item) {
    let card = `
  <div class="col-3 p-3">
    <div class="items border  rounded-lg">
      <img
        src="${item.img}"
        alt="${item.model}"
      />
      <div class="info pl-3">
        <div class="car-price font-weight-bold">
          <span>${item.price} ${item.exchange}</span>
        </div>
        <div class="car-name"><span>${item.brand}</span></div>
        <div class="car-info">
          <span> ${item.year}, ${item.engine} L, ${item.distance} km</span>
        </div>
        <div class="announce-info">
          <span> ${item.city}, dunen 13:53</span>
        </div>
      </div>
    </div>`;
    anounces.innerHTML += card;
  });
  document.querySelector("#searching").style.display = "block";
  document.querySelector("#announcument").style.display = "block";
  document.querySelector("#register").style.display = "none";
});

//#endregion

//#region

document.querySelector("#MainPageBtn").addEventListener("click",()=>{
  document.querySelector("#searching").style.display = "block";
  document.querySelector("#announcument").style.display = "block";
  document.querySelector("#editCarArea").style.display = "none";
})

const editCarsBtn = document.querySelector("#editCarsBtn");

editCarsBtn.addEventListener("click", () => {
  document.querySelector("#searching").style.display = "none";
  document.querySelector("#announcument").style.display = "none";
  document.querySelector("#editCarArea").style.display = "block";
  const SearchTable = document.querySelector("#myTable");
  cars.forEach(function (item) {
    let card = `
    <tr>
        <td>${item.brand}</td>
        <td>${item.model}</td>
    </tr>    
    `;
    SearchTable.innerHTML += card;
  });
});

document.querySelector("#myInput").addEventListener("keyup", () => {
  const SearchTable = document.querySelector("#myTable");
  cars.forEach(function (item) {
    let card = `
    <tr>
        <td>${item.brand}</td>
        <td>${item.model}</td>
    </tr>    
    `;
    SearchTable.innerHTML += card;
  });

  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
});

document.querySelector("#delete").addEventListener("click",()=>{
  document.querySelector("#searching").style.display = "none";
  document.querySelector("#announcument").style.display = "none";
  document.querySelector("#editCarArea").style.display = "none";
  document.querySelector("#deletearea").style.display = "block";
})

const deleteBtn = document.querySelector("#deleteBtn");

deleteBtn.addEventListener("click",(e)=>{
  e.preventDefault();
  const deleteId = document.querySelector("#deleteid").value;

  cars.forEach(
    function(item){
      if(item.id==deleteId)
      {
       delete cars[deleteId-1];
       anounces.innerHTML="";
      }
    }
  )
cars.forEach(
  function(item){
    let card = `
    <div class="col-3 p-3">
      <div class="items border  rounded-lg">
        <img
          src="${item.img}"
          alt="${item.model}"
        />
        <div class="info pl-3">
          <div class="car-price font-weight-bold">
            <span>${item.price} ${item.exchange}</span>
          </div>
          <div class="car-name"><span>${item.brand}</span></div>
          <div class="car-info">
            <span> ${item.year}, ${item.engine} L, ${item.distance} km</span>
          </div>
          <div class="announce-info">
            <span> ${item.city}, dunen 13:53</span>
          </div>
        </div>
      </div>`;
      anounces.innerHTML += card;
    });
  }
)

document.querySelector("#deleteAfterMain").addEventListener("click",(e)=>{
  e.preventDefault();
  document.querySelector("#searching").style.display = "block";
  document.querySelector("#announcument").style.display = "block";
  document.querySelector("#editCarArea").style.display = "none";
  document.querySelector("#deletearea").style.display = "none";
})

window.onload=function(){
  setTimeout(function(){
    document.getElementById('intro-video').style.display='none';
  },3000);
}
//#endregion
