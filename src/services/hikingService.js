const hikes = [
  {
    _id: "1a",
    name: "Kolsåstoppen",
    image: "kolsas",
    location: "Oslo",
    distance: 7.4, // km
    duration: 2.5, // hours
    difficulty: "medium", // easy, medium, hard
    elevation: 370 // meters
  },

  {
    _id: "2a",
    name: "Vettakollen",
    image: "vettakollen",
    location: "Oslo",
    distance: 2.3,
    duration: 1.5,
    difficulty: "hard",
    elevation: 180
  },

  {
    _id: "3a",
    name: "Østmarksetra to Mariholtet",
    image: "ostmarksetra",
    location: "Oslo",
    distance: 7.8,
    duration: 3.5,
    difficulty: "easy",
    elevation: 330
  },

  {
    _id: "4a",
    name: "Mellomkollen",
    image: "mellomkollen",
    location: "Oslo",
    distance: 12.3,
    duration: 3.5,
    difficulty: "medium",
    elevation: 500
  },

  {
    _id: "5a",
    name: "Mørkgonga",
    image: "morkgonga",
    location: "Oslo",
    distance: 7.3,
    duration: 4,
    difficulty: "medium",
    elevation: 620
  },

  {
    _id: "6a",
    name: "Grefsenkollen",
    image: "grefsenkollen",
    location: "Oslo",
    distance: 3.1,
    duration: 1.5,
    difficulty: "hard",
    elevation: 140
  },

  {
    _id: "7a",
    name: "Frognerseteren to Ullevålseter and Sognsvann",
    image: "frognerseteren",
    location: "Oslo",
    distance: 10.4,
    duration: 3,
    difficulty: "medium",
    elevation: 140
  },

  {
    _id: "8a",
    name: "Sognsvann Lake",
    image: "sognsvann",
    location: "Oslo",
    distance: 3.3,
    duration: 1.5,
    difficulty: "easy",
    elevation: 0
  },

  {
    _id: "9a",
    name: "Hauktjern",
    image: "hauktjern",
    location: "Oslo",
    distance: 6.8,
    duration: 3,
    difficulty: "hard",
    elevation: 190
  },

  {
    _id: "10a",
    name: "Kobberhaughytta",
    image: "kobberhaughytta",
    location: "Oslo",
    distance: 16.4,
    duration: 5,
    difficulty: "medium",
    elevation: 290
  },

  {
    _id: "11a",
    name: "Gjersjøen",
    image: "gjersjoen",
    location: "Oslo",
    distance: 4.2,
    duration: 2.5,
    difficulty: "easy",
    elevation: 150
  },

  {
    _id: "12a",
    name: "Øyungen Lake",
    image: "oyungen",
    location: "Oslo",
    distance: 5.1,
    duration: 2,
    difficulty: "easy",
    elevation: 140
  },

  {
    _id: "13a",
    name: "Store Åklungen",
    image: "aklungen",
    location: "Oslo",
    distance: 7.8,
    duration: 3,
    difficulty: "medium",
    elevation: 150
  },

  {
    _id: "14a",
    name: "Barlindåsen Ridge",
    image: "barlindasen",
    location: "Oslo",
    distance: 5.7,
    duration: 2.5,
    difficulty: "medium",
    elevation: 200
  },

  {
    _id: "15a",
    name: "Akerselva River Walk",
    image: "akerselva",
    location: "Oslo",
    distance: 7.4,
    duration: 2.5,
    difficulty: "easy",
    elevation: 0
  },

  {
    _id: "16a",
    name: "Nøklevann",
    image: "noklevann",
    location: "Oslo",
    distance: 8,
    duration: 2,
    difficulty: "easy",
    elevation: 190
  },

  {
    _id: "17a",
    name: "Bogstadgård",
    image: "bogstadgard",
    location: "Oslo",
    distance: 2.6,
    duration: 1,
    difficulty: "easy",
    elevation: 50
  },

  {
    _id: "18a",
    name: "Ingierstrand",
    image: "ingierstrand",
    location: "Oslo",
    distance: 3.2,
    duration: 1,
    difficulty: "medium",
    elevation: 140
  },

  {
    _id: "19a",
    name: "Pershusfjellet",
    image: "pershusfjellet",
    location: "Oslo",
    distance: 11.4,
    duration: 5,
    difficulty: "easy",
    elevation: 320
  },

  {
    _id: "20a",
    name: "Knivfjellet",
    image: "knivfjellet",
    location: "Oslo",
    distance: 3.3,
    duration: 2,
    difficulty: "easy",
    elevation: 130
  }
];

export function getHikes() {
  return hikes;
}
