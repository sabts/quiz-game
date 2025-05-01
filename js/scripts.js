const formElement = document.getElementById("form");
const rangeValueInfoElement = document.getElementById("range-value");
const rangeElement = document.getElementById("range-question");
const radiosElement = document.getElementById("radios");
const checkThemesElement = document.getElementById("themes");
const submitButtonElement = document.getElementById("startGameButton");
const quizElement = document.getElementById("quiz")

const QUESTIONS = {
  history: [
    {
      category: "Historia",
      question:
        "¿Qué faraón egipcio fue enterrado en el Valle de los Reyes y descubierto en 1922?",
      options: ["Tutankamón", "Ramsés II", "Cleopatra", "Nefertiti"],
      answer: "Tutankamón",
    },
    {
      category: "Historia",
      question: "¿Qué civilización inventó la escritura cuneiforme?",
      options: ["Sumerios", "Egipcios", "Fenicios", "Chinos"],
      answer: "Sumerios",
    },
    {
      category: "Historia",
      question: "¿En qué año terminó la Segunda Guerra Mundial?",
      options: ["1945", "1941", "1939", "1950"],
      answer: "1945",
    },
    {
      category: "Historia",
      question: "¿Quién fue el líder de la Revolución Cubana?",
      options: [
        "Fidel Castro",
        "Che Guevara",
        "Raúl Castro",
        "Camilo Cienfuegos",
      ],
      answer: "Fidel Castro",
    },
    {
      category: "Historia",
      question: "¿Qué imperio fue gobernado por Alejandro Magno?",
      options: ["Macedonia", "Roma", "Persia", "Egipto"],
      answer: "Macedonia",
    },
    {
      category: "Historia",
      question: "¿Qué famoso muro dividió Berlín durante la Guerra Fría?",
      options: [
        "Muro de Berlín",
        "Muro de los Lamentos",
        "Muro de Adriano",
        "Muro de Tracia",
      ],
      answer: "Muro de Berlín",
    },
    {
      category: "Historia",
      question:
        "¿Qué ciudad fue arrasada por los griegos durante la guerra de Troya?",
      options: ["Troya", "Esparta", "Atenas", "Cartago"],
      answer: "Troya",
    },
    {
      category: "Historia",
      question: "¿Quién fue el primer emperador de China?",
      options: ["Qin Shi Huang", "Wu Zetian", "Han Gaozu", "Confucio"],
      answer: "Qin Shi Huang",
    },
    {
      category: "Historia",
      question: "¿Qué expedición llevó al hombre a la Luna?",
      options: ["Apolo 11", "Apolo 13", "Apolo 8", "Sputnik 1"],
      answer: "Apolo 11",
    },
    {
      category: "Historia",
      question:
        "¿Qué conflicto se libró entre el norte y el sur de EE.UU. en el siglo XIX?",
      options: [
        "Guerra Civil Americana",
        "Guerra de Independencia",
        "Guerra de Vietnam",
        "Guerra de Corea",
      ],
      answer: "Guerra Civil Americana",
    },
    {
      category: "Historia",
      question:
        "¿En qué año se firmó la Declaración de Independencia de EE. UU.?",
      options: ["1776", "1492", "1812", "1607"],
      answer: "1776",
    },
    {
      category: "Historia",
      question: "¿Quién lideró la conquista de México?",
      options: [
        "Hernán Cortés",
        "Francisco Pizarro",
        "Simón Bolívar",
        "Cristóbal Colón",
      ],
      answer: "Hernán Cortés",
    },
    {
      category: "Historia",
      question: "¿Qué imperio construyó la Gran Muralla China?",
      options: [
        "Imperio Ming",
        "Imperio Romano",
        "Imperio Persa",
        "Imperio Bizantino",
      ],
      answer: "Imperio Ming",
    },
    {
      category: "Historia",
      question: "¿En qué año cayó el Imperio Romano de Occidente?",
      options: ["476 d.C.", "1453 d.C.", "1492 d.C.", "800 d.C."],
      answer: "476 d.C.",
    },
    {
      category: "Historia",
      question: "¿Quién fue el primer emperador romano?",
      options: ["Augusto", "Julio César", "Nerón", "Tiberio"],
      answer: "Augusto",
    },
    {
      category: "Historia",
      question: "¿Cuál fue la causa principal de la Primera Guerra Mundial?",
      options: [
        "Asesinato del archiduque Francisco Fernando",
        "Revolución Industrial",
        "Caída del Imperio Otomano",
        "Descubrimiento de América",
      ],
      answer: "Asesinato del archiduque Francisco Fernando",
    },
    {
      category: "Historia",
      question: "¿Qué civilización construyó Machu Picchu?",
      options: ["Inca", "Azteca", "Maya", "Olmeca"],
      answer: "Inca",
    },
    {
      category: "Historia",
      question: "¿Quién fue conocido como el Libertador de América?",
      options: [
        "Simón Bolívar",
        "José de San Martín",
        "Bernardo O’Higgins",
        "Antonio José de Sucre",
      ],
      answer: "Simón Bolívar",
    },
    {
      category: "Historia",
      question: "¿Dónde nació Napoleón Bonaparte?",
      options: ["Córcega", "París", "Roma", "Madrid"],
      answer: "Córcega",
    },
    {
      category: "Historia",
      question: "¿Cuál fue la primera civilización conocida?",
      options: ["Sumeria", "Egipto", "Fenicia", "Grecia"],
      answer: "Sumeria",
    },
    {
      category: "Historia",
      question: "¿Qué barco famoso se hundió en 1912?",
      options: ["Titanic", "Lusitania", "Britannic", "Endurance"],
      answer: "Titanic",
    },
    {
      category: "Historia",
      question: "¿Qué guerra enfrentó a las casas de York y Lancaster?",
      options: [
        "Guerra de las Dos Rosas",
        "Guerra de los Cien Años",
        "Guerra de Independencia",
        "Guerra de Sucesión",
      ],
      answer: "Guerra de las Dos Rosas",
    },
    {
      category: "Historia",
      question: "¿Quién fue el primer humano en viajar al espacio?",
      options: ["Yuri Gagarin", "Neil Armstrong", "Buzz Aldrin", "John Glenn"],
      answer: "Yuri Gagarin",
    },
    {
      category: "Historia",
      question: "¿En qué año comenzó la Revolución Francesa?",
      options: ["1789", "1776", "1804", "1815"],
      answer: "1789",
    },
    {
      category: "Historia",
      question: "¿Qué tratado puso fin a la Primera Guerra Mundial?",
      options: [
        "Tratado de Versalles",
        "Tratado de París",
        "Tratado de Tordesillas",
        "Tratado de Utrecht",
      ],
      answer: "Tratado de Versalles",
    },
    {
      category: "Historia",
      question: "¿Quién descubrió América en 1492?",
      options: [
        "Cristóbal Colón",
        "Américo Vespucio",
        "Hernán Cortés",
        "Marco Polo",
      ],
      answer: "Cristóbal Colón",
    },
    {
      category: "Historia",
      question: "¿Cuál fue la última dinastía imperial de China?",
      options: ["Qing", "Ming", "Han", "Tang"],
      answer: "Qing",
    },
    {
      category: "Historia",
      question:
        "¿Qué país fue liderado por Winston Churchill durante la Segunda Guerra Mundial?",
      options: ["Reino Unido", "Francia", "Estados Unidos", "Alemania"],
      answer: "Reino Unido",
    },
    {
      category: "Historia",
      question: "¿Qué ciudad fue destruida por el Vesubio en el año 79 d.C.?",
      options: ["Pompeya", "Roma", "Atenas", "Cartago"],
      answer: "Pompeya",
    },
    {
      category: "Historia",
      question: "¿Qué civilización antigua adoraba a dioses como Ra y Osiris?",
      options: ["Egipcia", "Romana", "Griega", "Persa"],
      answer: "Egipcia",
    },
  ],
  science: [
    {
      category: "Ciencia",
      question: "¿Qué científico descubrió la penicilina?",
      options: [
        "Alexander Fleming",
        "Marie Curie",
        "Isaac Newton",
        "Charles Darwin",
      ],
      answer: "Alexander Fleming",
    },
    {
      category: "Ciencia",
      question:
        "¿Cómo se llama el proceso por el cual las plantas producen su alimento?",
      options: ["Fotosíntesis", "Respiración", "Fermentación", "Digestión"],
      answer: "Fotosíntesis",
    },
    {
      category: "Ciencia",
      question: "¿Cuál es el centro del sistema solar?",
      options: ["El Sol", "La Tierra", "Júpiter", "La Luna"],
      answer: "El Sol",
    },
    {
      category: "Ciencia",
      question: "¿Qué animal es el más rápido del mundo?",
      options: ["Guepardo", "Halcón peregrino", "Leopardo", "Tiburón"],
      answer: "Halcón peregrino",
    },
    {
      category: "Ciencia",
      question: "¿Qué parte del cuerpo humano bombea sangre?",
      options: ["Corazón", "Pulmones", "Hígado", "Riñón"],
      answer: "Corazón",
    },
    {
      category: "Ciencia",
      question: "¿Cuál es la fórmula química del dióxido de carbono?",
      options: ["CO₂", "H₂O", "O₂", "NaCl"],
      answer: "CO₂",
    },
    {
      category: "Ciencia",
      question: "¿Qué planeta del sistema solar tiene un anillo más visible?",
      options: ["Saturno", "Urano", "Neptuno", "Júpiter"],
      answer: "Saturno",
    },
    {
      category: "Ciencia",
      question: "¿Qué mineral es más duro según la escala de Mohs?",
      options: ["Diamante", "Cuarzo", "Granito", "Topacio"],
      answer: "Diamante",
    },
    {
      category: "Ciencia",
      question:
        "¿Cuál es el segundo elemento más abundante en el aire después del nitrógeno?",
      options: ["Oxígeno", "Hidrógeno", "Argón", "Dióxido de carbono"],
      answer: "Oxígeno",
    },
    {
      category: "Ciencia",
      question: "¿Qué instrumento se utiliza para medir la temperatura?",
      options: ["Termómetro", "Barómetro", "Anemómetro", "Higrómetro"],
      answer: "Termómetro",
    },
    {
      category: "Ciencia",
      question: "¿Cuál es el planeta más grande del sistema solar?",
      options: ["Júpiter", "Saturno", "Neptuno", "Urano"],
      answer: "Júpiter",
    },
    {
      category: "Ciencia",
      question: "¿Qué tipo de animal es la ballena?",
      options: ["Mamífero", "Pez", "Anfibio", "Reptil"],
      answer: "Mamífero",
    },
    {
      category: "Ciencia",
      question: "¿Qué gas respiramos principalmente?",
      options: ["Oxígeno", "Dióxido de carbono", "Nitrógeno", "Helio"],
      answer: "Oxígeno",
    },
    {
      category: "Ciencia",
      question: "¿Cuál es el metal más ligero?",
      options: ["Litio", "Aluminio", "Plomo", "Cobre"],
      answer: "Litio",
    },
    {
      category: "Ciencia",
      question: "¿Qué órgano del cuerpo humano consume más energía?",
      options: ["Cerebro", "Corazón", "Hígado", "Pulmones"],
      answer: "Cerebro",
    },
    {
      category: "Ciencia",
      question:
        "¿Qué unidad se usa para medir la intensidad de la corriente eléctrica?",
      options: ["Amperio", "Voltio", "Ohmio", "Watio"],
      answer: "Amperio",
    },
    {
      category: "Ciencia",
      question: "¿Qué invento revolucionó la comunicación en el siglo XIX?",
      options: ["Telégrafo", "Radio", "Televisión", "Internet"],
      answer: "Telégrafo",
    },
    {
      category: "Ciencia",
      question: "¿Qué tipo de sangre es el donante universal?",
      options: ["O-", "A+", "B-", "AB+"],
      answer: "O-",
    },
    {
      category: "Ciencia",
      question: "¿Qué científico propuso la teoría de la relatividad?",
      options: [
        "Albert Einstein",
        "Isaac Newton",
        "Galileo Galilei",
        "Marie Curie",
      ],
      answer: "Albert Einstein",
    },
    {
      category: "Ciencia",
      question: "¿Cuál es el hueso más largo del cuerpo humano?",
      options: ["Fémur", "Húmero", "Tibia", "Peroné"],
      answer: "Fémur",
    },
    {
      category: "Ciencia",
      question: "¿Cuál es el órgano más grande del cuerpo humano?",
      options: ["Piel", "Hígado", "Cerebro", "Corazón"],
      answer: "Piel",
    },
    {
      category: "Ciencia",
      question: "¿Qué fuerza mantiene a los planetas orbitando el Sol?",
      options: ["Gravitacional", "Electromagnética", "Nuclear", "Magnética"],
      answer: "Gravitacional",
    },
    {
      category: "Ciencia",
      question: "¿Qué vitamina produce el cuerpo humano al exponerse al sol?",
      options: ["Vitamina D", "Vitamina C", "Vitamina A", "Vitamina B12"],
      answer: "Vitamina D",
    },
    {
      category: "Ciencia",
      question: "¿Qué parte de la célula contiene el material genético?",
      options: ["Núcleo", "Citoplasma", "Membrana", "Mitocondria"],
      answer: "Núcleo",
    },
    {
      category: "Ciencia",
      question: "¿Cuál es el símbolo químico del hierro?",
      options: ["Fe", "Ir", "In", "I"],
      answer: "Fe",
    },
    {
      category: "Ciencia",
      question: "¿Qué aparato se usa para medir la presión atmosférica?",
      options: ["Barómetro", "Termómetro", "Anemómetro", "Higrómetro"],
      answer: "Barómetro",
    },
    {
      category: "Ciencia",
      question:
        "¿Qué animal tiene la lengua más larga en proporción a su cuerpo?",
      options: ["Camaleón", "Hormiga", "Murciélago", "Serpiente"],
      answer: "Camaleón",
    },
    {
      category: "Ciencia",
      question: "¿Cuál es el satélite natural de la Tierra?",
      options: ["La Luna", "Marte", "Europa", "Titán"],
      answer: "La Luna",
    },
    {
      category: "Ciencia",
      question: "¿Qué se utiliza para ver objetos extremadamente pequeños?",
      options: ["Microscopio", "Telescopio", "Periscopio", "Binoculares"],
      answer: "Microscopio",
    },
    {
      category: "Ciencia",
      question: "¿Qué teoría explica la evolución de las especies?",
      options: [
        "Teoría de la evolución",
        "Teoría de la relatividad",
        "Teoría celular",
        "Teoría del Big Bang",
      ],
      answer: "Teoría de la evolución",
    },
  ],
  geography: [
    {
      category: "Geografía",
      question: "¿Cuál es el país más pequeño del mundo?",
      options: ["Ciudad del Vaticano", "Mónaco", "San Marino", "Liechtenstein"],
      answer: "Ciudad del Vaticano",
    },
    {
      category: "Geografía",
      question: "¿En qué océano se encuentra Hawái?",
      options: ["Pacífico", "Atlántico", "Índico", "Ártico"],
      answer: "Pacífico",
    },
    {
      category: "Geografía",
      question: "¿Qué cordillera separa a Europa de Asia?",
      options: ["Montes Urales", "Himalaya", "Alpes", "Andes"],
      answer: "Montes Urales",
    },
    {
      category: "Geografía",
      question: "¿Cuál es la capital de Sudáfrica?",
      options: ["Pretoria", "Ciudad del Cabo", "Bloemfontein", "Johannesburgo"],
      answer: "Pretoria",
    },
    {
      category: "Geografía",
      question: "¿En qué país está el Taj Mahal?",
      options: ["India", "Pakistán", "Bangladés", "Irán"],
      answer: "India",
    },
    {
      category: "Geografía",
      question: "¿Qué país tiene la mayor cantidad de lagos?",
      options: ["Canadá", "Rusia", "Brasil", "Estados Unidos"],
      answer: "Canadá",
    },
    {
      category: "Geografía",
      question: "¿Qué isla italiana es famosa por su volcán Etna?",
      options: ["Sicilia", "Cerdeña", "Elba", "Capri"],
      answer: "Sicilia",
    },
    {
      category: "Geografía",
      question: "¿Qué país limita al norte con México?",
      options: ["Estados Unidos", "Guatemala", "Belice", "Canadá"],
      answer: "Estados Unidos",
    },
    {
      category: "Geografía",
      question: "¿Qué mar baña las costas de Egipto?",
      options: ["Mar Rojo", "Mar Mediterráneo", "Mar Negro", "Mar Caspio"],
      answer: "Mar Rojo",
    },
    {
      category: "Geografía",
      question: "¿Qué país tiene como moneda oficial el yen?",
      options: ["Japón", "China", "Corea del Sur", "Vietnam"],
      answer: "Japón",
    },
    {
      category: "Geografía",
      question: "¿Cuál es el río más largo del mundo?",
      options: ["Nilo", "Amazonas", "Yangtsé", "Misisipi"],
      answer: "Nilo",
    },
    {
      category: "Geografía",
      question: "¿Cuál es el país más grande del mundo en superficie?",
      options: ["Rusia", "Canadá", "China", "Estados Unidos"],
      answer: "Rusia",
    },
    {
      category: "Geografía",
      question: "¿En qué continente se encuentra Egipto?",
      options: ["África", "Asia", "Europa", "América"],
      answer: "África",
    },
    {
      category: "Geografía",
      question: "¿Cuál es la capital de Australia?",
      options: ["Canberra", "Sídney", "Melbourne", "Brisbane"],
      answer: "Canberra",
    },
    {
      category: "Geografía",
      question: "¿Qué país tiene forma de bota?",
      options: ["Italia", "España", "Grecia", "Portugal"],
      answer: "Italia",
    },
    {
      category: "Geografía",
      question: "¿Cuál es la montaña más alta del mundo?",
      options: ["Everest", "K2", "Kangchenjunga", "Makalu"],
      answer: "Everest",
    },
    {
      category: "Geografía",
      question: "¿En qué país se encuentra el desierto del Sahara?",
      options: ["Varios países", "Egipto", "Marruecos", "Sudán"],
      answer: "Varios países",
    },
    {
      category: "Geografía",
      question: "¿Cuál es el mar más grande del mundo?",
      options: [
        "Mar de Filipinas",
        "Mar Caribe",
        "Mar Mediterráneo",
        "Mar de China Meridional",
      ],
      answer: "Mar de Filipinas",
    },
    {
      category: "Geografía",
      question: "¿Qué océano es el más grande?",
      options: ["Pacífico", "Atlántico", "Índico", "Ártico"],
      answer: "Pacífico",
    },
    {
      category: "Geografía",
      question: "¿Qué país tiene más islas en su territorio?",
      options: ["Suecia", "Indonesia", "Filipinas", "Canadá"],
      answer: "Suecia",
    },
    {
      category: "Geografía",
      question: "¿En qué continente está Surinam?",
      options: ["América del Sur", "África", "Asia", "Oceanía"],
      answer: "América del Sur",
    },
    {
      category: "Geografía",
      question: "¿Cuál es la capital de Canadá?",
      options: ["Ottawa", "Toronto", "Montreal", "Vancouver"],
      answer: "Ottawa",
    },
    {
      category: "Geografía",
      question: "¿Qué cordillera atraviesa América del Sur de norte a sur?",
      options: ["Andes", "Alpes", "Montes Apalaches", "Himalaya"],
      answer: "Andes",
    },
    {
      category: "Geografía",
      question: "¿Qué país tiene más población?",
      options: ["China", "India", "Estados Unidos", "Indonesia"],
      answer: "China",
    },
    {
      category: "Geografía",
      question: "¿Cuál es la capital de Japón?",
      options: ["Tokio", "Kyoto", "Osaka", "Hiroshima"],
      answer: "Tokio",
    },
    {
      category: "Geografía",
      question: "¿Qué isla es la más grande del mundo?",
      options: ["Groenlandia", "Nueva Guinea", "Borneo", "Madagascar"],
      answer: "Groenlandia",
    },
    {
      category: "Geografía",
      question: "¿Qué país europeo tiene más volcanes activos?",
      options: ["Italia", "Islandia", "España", "Grecia"],
      answer: "Italia",
    },
    {
      category: "Geografía",
      question: "¿Cuál es la ciudad más poblada del mundo?",
      options: ["Tokio", "Delhi", "Shanghái", "São Paulo"],
      answer: "Tokio",
    },
    {
      category: "Geografía",
      question: "¿Qué océano rodea Australia?",
      options: ["Índico", "Pacífico", "Atlántico", "Ártico"],
      answer: "Índico",
    },
    {
      category: "Geografía",
      question:
        "¿Cuál es el lago más grande de agua dulce del mundo por superficie?",
      options: ["Lago Superior", "Lago Victoria", "Lago Baikal", "Lago Hurón"],
      answer: "Lago Superior",
    },
  ],
  art: [
    {
      category: "Arte",
      question: '¿Quién pintó "La última cena"?',
      options: ["Leonardo da Vinci", "Miguel Ángel", "Rafael", "Caravaggio"],
      answer: "Leonardo da Vinci",
    },
    {
      category: "Arte",
      question: '¿Qué pintor es conocido por su periodo "cubista"?',
      options: [
        "Pablo Picasso",
        "Salvador Dalí",
        "Claude Monet",
        "Vincent van Gogh",
      ],
      answer: "Pablo Picasso",
    },
    {
      category: "Arte",
      question: '¿Qué escultor esculpió "La Piedad"?',
      options: ["Miguel Ángel", "Bernini", "Donatello", "Rodin"],
      answer: "Miguel Ángel",
    },
    {
      category: "Arte",
      question: '¿Qué artista pintó "La persistencia de la memoria"?',
      options: ["Salvador Dalí", "René Magritte", "Joan Miró", "Max Ernst"],
      answer: "Salvador Dalí",
    },
    {
      category: "Arte",
      question:
        "¿Qué edificio es famoso por su cúpula diseñada por Brunelleschi?",
      options: [
        "Catedral de Florencia",
        "Basílica de San Pedro",
        "Notre-Dame",
        "Catedral de Santiago",
      ],
      answer: "Catedral de Florencia",
    },
    {
      category: "Arte",
      question: "¿Qué pintor es considerado el precursor del Impresionismo?",
      options: ["Édouard Manet", "Monet", "Renoir", "Degas"],
      answer: "Édouard Manet",
    },
    {
      category: "Arte",
      question: "¿Qué pintora mexicana es famosa por sus autorretratos?",
      options: [
        "Frida Kahlo",
        "Leonora Carrington",
        "Remedios Varo",
        "María Izquierdo",
      ],
      answer: "Frida Kahlo",
    },
    {
      category: "Arte",
      question: '¿Qué escultor renacentista creó el "David" de bronce?',
      options: ["Donatello", "Miguel Ángel", "Ghiberti", "Bernini"],
      answer: "Donatello",
    },
    {
      category: "Arte",
      question: "¿Qué corriente artística está asociada a Jackson Pollock?",
      options: [
        "Expresionismo abstracto",
        "Cubismo",
        "Surrealismo",
        "Realismo",
      ],
      answer: "Expresionismo abstracto",
    },
    {
      category: "Arte",
      question: '¿Quién pintó "La joven de la perla"?',
      options: ["Johannes Vermeer", "Rembrandt", "Caravaggio", "Rubens"],
      answer: "Johannes Vermeer",
    },
    {
      category: "Arte",
      question: '¿Quién pintó "La Mona Lisa"?',
      options: [
        "Leonardo da Vinci",
        "Vincent van Gogh",
        "Pablo Picasso",
        "Claude Monet",
      ],
      answer: "Leonardo da Vinci",
    },
    {
      category: "Arte",
      question: '¿Qué escultor creó "El David"?',
      options: ["Miguel Ángel", "Donatello", "Bernini", "Rodin"],
      answer: "Miguel Ángel",
    },
    {
      category: "Arte",
      question: '¿Qué artista es conocido por el mural "Guernica"?',
      options: ["Pablo Picasso", "Salvador Dalí", "Joan Miró", "Diego Rivera"],
      answer: "Pablo Picasso",
    },
    {
      category: "Arte",
      question: "¿A qué corriente artística pertenece Claude Monet?",
      options: ["Impresionismo", "Cubismo", "Surrealismo", "Expresionismo"],
      answer: "Impresionismo",
    },
    {
      category: "Arte",
      question: '¿Quién pintó "La noche estrellada"?',
      options: [
        "Vincent van Gogh",
        "Leonardo da Vinci",
        "Paul Cézanne",
        "Henri Matisse",
      ],
      answer: "Vincent van Gogh",
    },
    {
      category: "Arte",
      question: '¿Qué movimiento fundó Marcel Duchamp con su "Fuente"?',
      options: ["Dadaísmo", "Futurismo", "Expresionismo", "Realismo"],
      answer: "Dadaísmo",
    },
    {
      category: "Arte",
      question: '¿Qué artista español pintó "Las Meninas"?',
      options: ["Diego Velázquez", "Francisco de Goya", "El Greco", "Murillo"],
      answer: "Diego Velázquez",
    },
    {
      category: "Arte",
      question: "¿En qué ciudad se encuentra el museo del Louvre?",
      options: ["París", "Roma", "Madrid", "Londres"],
      answer: "París",
    },
    {
      category: "Arte",
      question: "¿Qué pintor es famoso por sus relojes derretidos?",
      options: ["Salvador Dalí", "Pablo Picasso", "René Magritte", "Joan Miró"],
      answer: "Salvador Dalí",
    },
    {
      category: "Arte",
      question:
        "¿Qué técnica artística utiliza pigmentos disueltos en agua sobre yeso fresco?",
      options: ["Fresco", "Óleo", "Acuarela", "Temple"],
      answer: "Fresco",
    },
    {
      category: "Arte",
      question: '¿Quién esculpió "El Pensador"?',
      options: [
        "Auguste Rodin",
        "Donatello",
        "Miguel Ángel",
        "Gian Lorenzo Bernini",
      ],
      answer: "Auguste Rodin",
    },
    {
      category: "Arte",
      question: "¿Qué edificio contiene la Capilla Sixtina?",
      options: [
        "El Vaticano",
        "Notre Dame",
        "La Sagrada Familia",
        "El Palacio de Versalles",
      ],
      answer: "El Vaticano",
    },
    {
      category: "Arte",
      question: '¿Qué artista pintó "El grito"?',
      options: ["Edvard Munch", "Gustav Klimt", "Egon Schiele", "Paul Gauguin"],
      answer: "Edvard Munch",
    },
    {
      category: "Arte",
      question: "¿Qué movimiento artístico fue impulsado por Andy Warhol?",
      options: ["Pop Art", "Dadaísmo", "Surrealismo", "Realismo"],
      answer: "Pop Art",
    },
    {
      category: "Arte",
      question: "¿Qué civilización creó las cabezas colosales de piedra?",
      options: ["Olmeca", "Azteca", "Maya", "Inca"],
      answer: "Olmeca",
    },
    {
      category: "Arte",
      question: "¿En qué país nació Frida Kahlo?",
      options: ["México", "España", "Argentina", "Colombia"],
      answer: "México",
    },
    {
      category: "Arte",
      question:
        '¿Qué pintor usó mayormente el color azul en su famosa "época azul"?',
      options: ["Pablo Picasso", "Henri Matisse", "Joan Miró", "Marc Chagall"],
      answer: "Pablo Picasso",
    },
    {
      category: "Arte",
      question:
        "¿Qué estilo arquitectónico caracteriza a las catedrales medievales con arcos puntiagudos y vitrales?",
      options: ["Gótico", "Románico", "Barroco", "Renacentista"],
      answer: "Gótico",
    },
    {
      category: "Arte",
      question:
        "¿Qué pintora es famosa por sus autorretratos intensamente personales?",
      options: [
        "Frida Kahlo",
        "Georgia O’Keeffe",
        "Tamara de Lempicka",
        "Artemisia Gentileschi",
      ],
      answer: "Frida Kahlo",
    },
    {
      category: "Arte",
      question:
        "¿Qué artista es conocido por sus enormes latas de sopa Campbell?",
      options: [
        "Andy Warhol",
        "Roy Lichtenstein",
        "Keith Haring",
        "Jean-Michel Basquiat",
      ],
      answer: "Andy Warhol",
    },
  ],
  general: [
    {
      category: "Cultura General",
      question: "¿Cuántos planetas tiene el sistema solar?",
      options: ["8", "9", "7", "10"],
      answer: "8",
    },
    {
      category: "Cultura General",
      question: "¿Qué día se celebra Halloween?",
      options: [
        "31 de octubre",
        "1 de noviembre",
        "30 de septiembre",
        "2 de noviembre",
      ],
      answer: "31 de octubre",
    },
    {
      category: "Cultura General",
      question: "¿Qué país inventó el ajedrez?",
      options: ["India", "China", "Egipto", "Grecia"],
      answer: "India",
    },
    {
      category: "Cultura General",
      question: '¿Quién escribió "Don Quijote de la Mancha"?',
      options: [
        "Miguel de Cervantes",
        "Lope de Vega",
        "Federico García Lorca",
        "Gabriel García Márquez",
      ],
      answer: "Miguel de Cervantes",
    },
    {
      category: "Cultura General",
      question: "¿En qué ciudad se encuentra la Estatua de la Libertad?",
      options: ["Nueva York", "Washington D.C.", "Boston", "Chicago"],
      answer: "Nueva York",
    },
    {
      category: "Cultura General",
      question: '¿Cómo se llama el sabio maestro de "Star Wars"?',
      options: ["Yoda", "Obi-Wan Kenobi", "Darth Vader", "Luke Skywalker"],
      answer: "Yoda",
    },
    {
      category: "Cultura General",
      question: "¿Cuál es el océano más pequeño del mundo?",
      options: ["Ártico", "Atlántico", "Índico", "Pacífico"],
      answer: "Ártico",
    },
    {
      category: "Cultura General",
      question: "¿Qué nombre recibe el estudio de los seres vivos?",
      options: ["Biología", "Geología", "Física", "Astronomía"],
      answer: "Biología",
    },
    {
      category: "Cultura General",
      question: "¿Qué país es famoso por el tango?",
      options: ["Argentina", "Brasil", "España", "Uruguay"],
      answer: "Argentina",
    },
    {
      category: "Cultura General",
      question: '¿Qué actor interpretó a Jack en "Titanic"?',
      options: ["Leonardo DiCaprio", "Brad Pitt", "Johnny Depp", "Matt Damon"],
      answer: "Leonardo DiCaprio",
    },
    {
      category: "General",
      question: "¿Cuál es la capital de Australia?",
      options: ["Canberra", "Sídney", "Melbourne", "Brisbane"],
      answer: "Canberra",
    },
    {
      category: "Cultura General",
      question: "¿Qué instrumento musical tiene teclas blancas y negras?",
      options: ["Piano", "Guitarra", "Violín", "Flauta"],
      answer: "Piano",
    },
    {
      category: "Cultura General",
      question: "¿Cuántos lados tiene un hexágono?",
      options: ["6", "5", "8", "7"],
      answer: "6",
    },
    {
      category: "Cultura General",
      question: "¿Qué deporte practica Rafael Nadal?",
      options: ["Tenis", "Fútbol", "Golf", "Baloncesto"],
      answer: "Tenis",
    },
    {
      category: "Cultura General",
      question: '¿Quién escribió "Cien años de soledad"?',
      options: [
        "Gabriel García Márquez",
        "Mario Vargas Llosa",
        "Isabel Allende",
        "Pablo Neruda",
      ],
      answer: "Gabriel García Márquez",
    },
    {
      category: "Cultura General",
      question: "¿Cuál es el idioma más hablado en el mundo?",
      options: ["Chino mandarín", "Inglés", "Español", "Hindú"],
      answer: "Chino mandarín",
    },
    {
      category: "Cultura General",
      question: "¿Qué gas es necesario para la respiración humana?",
      options: ["Oxígeno", "Nitrógeno", "Dióxido de carbono", "Hidrógeno"],
      answer: "Oxígeno",
    },
    {
      category: "Cultura General",
      question: "¿Qué país es famoso por inventar el sushi?",
      options: ["Japón", "China", "Corea", "Vietnam"],
      answer: "Japón",
    },
    {
      category: "Cultura General",
      question: "¿Qué parte del cuerpo controla el cerebro?",
      options: [
        "Todo el cuerpo",
        "Los brazos",
        "La digestión",
        "La respiración únicamente",
      ],
      answer: "Todo el cuerpo",
    },
    {
      category: "Cultura General",
      question: "¿Cuántos anillos hay en la bandera olímpica?",
      options: ["5", "4", "6", "7"],
      answer: "5",
    },
    {
      category: "Cultura General",
      question: "¿Qué país ganó el Mundial de fútbol de 2018?",
      options: ["Francia", "Croacia", "Alemania", "Brasil"],
      answer: "Francia",
    },
    {
      category: "Cultura General",
      question: "¿Qué día se celebra el Día de la Tierra?",
      options: ["22 de abril", "21 de marzo", "5 de junio", "1 de mayo"],
      answer: "22 de abril",
    },
    {
      category: "Cultura General",
      question: "¿Qué animal es el símbolo nacional de Australia?",
      options: ["Canguro", "Koala", "Emú", "Dingo"],
      answer: "Canguro",
    },
    {
      category: "Cultura General",
      question: "¿Qué serie de libros fue escrita por J.K. Rowling?",
      options: [
        "Harry Potter",
        "Las Crónicas de Narnia",
        "El Señor de los Anillos",
        "Percy Jackson",
      ],
      answer: "Harry Potter",
    },
    {
      category: "Cultura General",
      question: "¿Quién pintó el techo de la Capilla Sixtina?",
      options: ["Miguel Ángel", "Leonardo da Vinci", "Rafael", "Donatello"],
      answer: "Miguel Ángel",
    },
    {
      category: "Cultura General",
      question: "¿En qué continente está Brasil?",
      options: ["América del Sur", "África", "Europa", "Asia"],
      answer: "América del Sur",
    },
    {
      category: "Cultura General",
      question: "¿Cuál es el nombre del satélite natural de la Tierra?",
      options: ["La Luna", "Marte", "Europa", "Saturno"],
      answer: "La Luna",
    },
    {
      category: "Cultura General",
      question: "¿Cuál es la bebida nacional de Escocia?",
      options: ["Whisky", "Vodka", "Tequila", "Ron"],
      answer: "Whisky",
    },
    {
      category: "Cultura General",
      question: "¿Qué animal pone los huevos más grandes?",
      options: ["Avestruz", "Pingüino", "Águila", "Gallina"],
      answer: "Avestruz",
    },
    {
      category: "Cultura General",
      question: "¿Qué símbolo químico representa el agua?",
      options: ["H2O", "CO2", "NaCl", "O2"],
      answer: "H2O",
    },
  ],
  mythology: [
    {
      category: "Mitología",
      question: "¿Quién era el dios griego del sol?",
      options: ["Apolo", "Helios", "Hades", "Zeus"],
      answer: "Apolo",
    },
    {
      category: "Mitología",
      question: "¿Qué criatura mítica resucita de sus cenizas?",
      options: ["Fénix", "Hidra", "Quimera", "Grifo"],
      answer: "Fénix",
    },
    {
      category: "Mitología",
      question: "¿Quién era la diosa romana de la caza?",
      options: ["Diana", "Venus", "Minerva", "Ceres"],
      answer: "Diana",
    },
    {
      category: "Mitología",
      question: "¿Qué héroe navegó durante años para regresar a Ítaca?",
      options: ["Ulises", "Hércules", "Perseo", "Orfeo"],
      answer: "Ulises",
    },
    {
      category: "Mitología",
      question:
        "¿Qué bestia custodiaba la entrada al inframundo en la mitología griega?",
      options: ["Cerbero", "Quimera", "Minotauro", "Esfinge"],
      answer: "Cerbero",
    },
    {
      category: "Mitología",
      question: "¿Cómo se llama el martillo de Thor?",
      options: ["Mjölnir", "Excalibur", "Aegis", "Gungnir"],
      answer: "Mjölnir",
    },
    {
      category: "Mitología",
      question: "¿Quién era la madre de Aquiles?",
      options: ["Tetis", "Hera", "Afrodita", "Atenea"],
      answer: "Tetis",
    },
    {
      category: "Mitología",
      question: "¿Qué titán griego robó el fuego para los humanos?",
      options: ["Prometeo", "Atlas", "Cronos", "Oceano"],
      answer: "Prometeo",
    },
    {
      category: "Mitología",
      question: "¿Qué dios griego transformaba todo lo que tocaba en oro?",
      options: ["Midas", "Hermes", "Dionisio", "Apolo"],
      answer: "Midas",
    },
    {
      category: "Mitología",
      question:
        "¿Qué criatura mitológica tiene cuerpo de león, cabeza humana y alas?",
      options: ["Esfinge", "Grifo", "Minotauro", "Hidra"],
      answer: "Esfinge",
    },

    {
      category: "Mitología",
      question: "¿Quién es el dios griego del mar?",
      options: ["Poseidón", "Zeus", "Hades", "Apolo"],
      answer: "Poseidón",
    },
    {
      category: "Mitología",
      question: "¿Qué criatura tiene cabeza de toro y cuerpo de hombre?",
      options: ["Minotauro", "Centauro", "Quimera", "Hidra"],
      answer: "Minotauro",
    },
    {
      category: "Mitología",
      question: "¿Quién era la diosa romana del amor?",
      options: ["Venus", "Minerva", "Diana", "Ceres"],
      answer: "Venus",
    },
    {
      category: "Mitología",
      question: "¿Cuál era el dios griego del inframundo?",
      options: ["Hades", "Zeus", "Poseidón", "Hermes"],
      answer: "Hades",
    },
    {
      category: "Mitología",
      question: "¿Qué héroe mató a Medusa?",
      options: ["Perseo", "Hércules", "Teseo", "Aquiles"],
      answer: "Perseo",
    },
    {
      category: "Mitología",
      question: "¿Qué monstruo mitológico tiene serpientes por cabello?",
      options: ["Medusa", "Sirena", "Quimera", "Esfinge"],
      answer: "Medusa",
    },
    {
      category: "Mitología",
      question: "¿Quién fue condenado a cargar el cielo sobre sus hombros?",
      options: ["Atlas", "Prometeo", "Cronos", "Orfeo"],
      answer: "Atlas",
    },
    {
      category: "Mitología",
      question: "¿Quién es el dios nórdico del trueno?",
      options: ["Thor", "Odin", "Loki", "Baldur"],
      answer: "Thor",
    },
    {
      category: "Mitología",
      question: "¿Qué nave llevó a los argonautas?",
      options: ["Argo", "Odisea", "Trirreme", "Góndola"],
      answer: "Argo",
    },
    {
      category: "Mitología",
      question: "¿Qué héroe realizó 12 trabajos?",
      options: ["Hércules", "Ulises", "Perseo", "Teseo"],
      answer: "Hércules",
    },
    {
      category: "Mitología",
      question: "¿Qué dios griego es conocido como el mensajero de los dioses?",
      options: ["Hermes", "Apolo", "Ares", "Hefesto"],
      answer: "Hermes",
    },
    {
      category: "Mitología",
      question: "¿Cómo se llamaba el caballo alado?",
      options: ["Pegaso", "Centauro", "Hipogrifo", "Arion"],
      answer: "Pegaso",
    },
    {
      category: "Mitología",
      question: "¿Quién abrió la famosa caja de todos los males?",
      options: ["Pandora", "Hera", "Ariadna", "Selene"],
      answer: "Pandora",
    },
    {
      category: "Mitología",
      question: "¿Qué dios egipcio tiene cabeza de chacal?",
      options: ["Anubis", "Ra", "Osiris", "Horus"],
      answer: "Anubis",
    },
    {
      category: "Mitología",
      question: "¿Quién era el dios griego del vino?",
      options: ["Dionisio", "Apolo", "Hefesto", "Ares"],
      answer: "Dionisio",
    },
    {
      category: "Mitología",
      question: "¿Qué héroe viajó a Ítaca después de la guerra de Troya?",
      options: ["Ulises", "Aquiles", "Agamenón", "Paris"],
      answer: "Ulises",
    },
    {
      category: "Mitología",
      question: "¿Quién construyó el laberinto de Creta?",
      options: ["Dédalo", "Teseo", "Minos", "Icaro"],
      answer: "Dédalo",
    },
    {
      category: "Mitología",
      question: "¿Qué criatura mítica custodiaba el vellocino de oro?",
      options: ["Dragón", "Grifo", "Fénix", "Centauro"],
      answer: "Dragón",
    },
    {
      category: "Mitología",
      question: "¿Quién era la diosa griega de la sabiduría?",
      options: ["Atenea", "Afrodita", "Artemisa", "Deméter"],
      answer: "Atenea",
    },
    {
      category: "Mitología",
      question: "¿Qué dios romano es equivalente a Zeus?",
      options: ["Júpiter", "Marte", "Neptuno", "Plutón"],
      answer: "Júpiter",
    },
  ],
};

//Primero, se especifica el numero de preguntas
//let quizLength = rangeElement.value;

//el valor del timer
let timer = 10;
let intervalId;

//todos los temas
let allThemeOptions = document.querySelectorAll(".input-checkbox");
//allThemeOptions.forEach(option => {
//  console.log(option.id);
//});

const detectQuizLength = (event) => {
  quizLength = event.target.value;
  rangeValueInfoElement.textContent = rangeElement.value;
};

const aleatoryQuestions = max => {
  return Math.floor(Math.random() * max);
};

const setTimeforTheQuiz = (event) => {
  const value = event.target.value;
  console.log(value)
  if (!value) return;

  if (value === '10s') timer = 10;
  else if (value === '20s') timer = 20;
  else if (value === '30s') timer = 30;
  else if (value === '60s') timer = 60;
  else return;
  console.log(`Temporizador: ${timer} s.`);

  if (intervalId) clearInterval(intervalId);

  intervalId = setInterval(() => {
    const timerElement = quizElement.querySelector('[data-quiz="timer"]');
    if (timerElement) {
      timerElement.textContent = `00:${String(timer).padStart(2, '0')}`;
    }
    console.log(`Segundos restantes: ${timer}`);
    timer--;

    if (timer < 0) {
      console.log("Se acabó el tiempo💀");
      clearInterval(intervalId); 
    }
  }, 1000); 
};

const chooseQuestionTheme = (event) => {
  let selectedThemeQuestions = [];
  
  const checkbox = event.target;
  const category = checkbox.id;
  if (!checkbox || checkbox.type !== "checkbox") return;

  if (checkbox.checked) {
      selectedThemeQuestions.push(...QUESTIONS[category]);
    }
   else {
    selectedThemeQuestions = selectedThemeQuestions.filter(theme => theme !== category);
  }
  selectedThemeQuestions.length = rangeElement.value;

  console.log("Selected themes:", Array.from(selectedThemeQuestions));
}
//const submitGamePreferences = () => {}

const renderQuiz = (questions) => {
  quizElement.textContent=""
  const fragment = document.createElement('fragment')

  array.forEach(element => {
    
  });
}

rangeElement.addEventListener("input", detectQuizLength);
radiosElement.addEventListener("change", setTimeforTheQuiz);
checkThemesElement.addEventListener('change', chooseQuestionTheme);