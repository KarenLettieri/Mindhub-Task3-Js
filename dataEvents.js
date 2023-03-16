let currentDate = "2022-01-01"

var dataArray = [
    {
        _id: 1,
        "image": "https://i.postimg.cc/Fs03hQDt/Collectivities-Party.jpg",
        "name": "Collectivities Party",
        "date": "2021-12-12",
        "description": "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
        "category": "Food Fair",
        "place": "Room A",
        "capacity": 45000,
        "assistance": 42756,
        "price": 5
    },
    {
        _id: 2,
        "image": "https://i.postimg.cc/ZmD3Xf57/Korean-style.jpg",
        "name": "Korean style",
        "date": "2022-08-12",
        "description": "Enjoy the best Korean dishes, with international chefs and awesome events.",
        "category": "Food Fair",
        "place": "Room A",
        "capacity": 45000,
        "assistance": 42756,
        "price": 10
    },
    {
        _id: 3,
        "image": "https://i.postimg.cc/GmHRkbNV/Jurassic-Park.jpg",
        "name": "Jurassic Park",
        "date": "2021-11-02",
        "description": "Let's go meet the biggest dinosaurs in the paleontology museum.",
        "category": "Museum",
        "place": "Field",
        "capacity": 82000,
        "assistance": 65892,
        "price": 15
    },
    {
        _id: 4,
        "image": "https://i.postimg.cc/c4C2zXm8/Parisian-Museum.jpg",
        "name": "Parisian Museum",
        "date": "2022-11-02",
        "description": "A unique tour in the city of lights, get to know one of the most iconic places.",
        "category": "Museum",
        "place": "Paris",
        "capacity": 8200,
        "estimate": 8200,
        "price": 3500
    },
    {
        _id: 5,
        "image": "https://i.postimg.cc/KYD0jMf2/comicon.jpg",
        "name": "Comicon",
        "date": "2021-02-12",
        "description": "For comic lovers, all your favourite characters gathered in one place.",
        "category": "Costume Party",
        "place": "Room C",
        "capacity": 120000,
        "assistance": 110000,
        "price": 54
    },
    {
        _id: 6,
        "image": "https://i.postimg.cc/RZ9fH4Pr/halloween.jpg",
        "name": "Halloween Night",
        "date": "2022-02-12",
        "description": "Come with your scariest costume and win incredible prizes.",
        "category": "Costume Party",
        "place": "Room C",
        "capacity": 12000,
        "estimate": 9000,
        "price": 12
    },
    {
        _id: 7,
        "image": "https://i.postimg.cc/PrMJ0ZMc/Metallica-in-concert.jpg",
        "name": "Metallica in concert",
        "date": "2022-01-22",
        "description": "The only concert of the most emblematic band in the world.",
        "category": "Music Concert",
        "place": "Room A"
        , "capacity": 138000,
        "estimate": 138000,
        "price": 150
    },
    {
        _id: 8,
        "image": "https://i.postimg.cc/KvsSK8cj/Electronic-Fest.jpg",
        "name": "Electronic Fest",
        "date": "2021-01-22",
        "description": "The best national and international DJs gathered in one place.",
        "category": "Music Concert",
        "place": "Room A",
        "capacity": 138000,
        "assistance": 110300,
        "price": 250
    },
    {
        _id: 9,
        "image": "https://i.postimg.cc/fyLqZY9K/10-K-for-life.jpg",
        "name": "10K for life",
        "date": "2021-03-01",
        "description": "Come and exercise, improve your health and lifestyle.",
        "category": "Race",
        "place": "Soccer field",
        "capacity": 30000,
        "assistance": 25698,
        "price": 3
    },
    {
        _id: 10,
        "image": "https://i.postimg.cc/zv67r65z/15kny.jpg",
        "name": "15K NY",
        "date": "2022-03-01",
        "description": "We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
        "category": "Race",
        "place": "New York",
        "capacity": 3000000,
        "assistance": 2569800,
        "price": 3
    },
    {
        _id: 11,
        "image": "https://i.postimg.cc/Sst763n6/book1.jpg",
        "name": "School's book fair",
        "date": "2022-10-15",
        "description": "Bring your unused school book and take the one you need.",
        "category": "Book Exchange",
        "place": "Room D1",
        "capacity": 150000,
        "estimate": 123286,
        "price": 1
    },
    {
        _id: 12,
        "image": "https://i.postimg.cc/05FhxHVK/book4.jpg",
        "name": "Just for your kitchen",
        "date": "2021-11-09",
        "description": "If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
        "category": "Book Exchange",
        "place": "Room D6",
        "capacity": 130000,
        "assistance": 90000,
        "price": 100
    },
    {
        _id: 13,
        "image": "https://i.postimg.cc/vH52y81C/cinema4.jpg",
        "name": "Batman",
        "date": "2021-03-11",
        "description": "Come see Batman fight crime in Gotham City.",
        "category": "Cinema",
        "place": "Room D1",
        "capacity": 11000,
        "assistance": 9300,
        "price": 225
    },
    {
        _id: 14,
        "image": "https://i.postimg.cc/T3C92KTN/scale.jpg",
        "name": "Avengers",
        "date": "2022-10-15",
        "description": "Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
        "category": "Cinema",
        "place": "Room D1",
        "capacity": 9000,
        "estimate": 9000,
        "price": 250
    }
]

// Utilizando filter para listar los eventos pasados y futuros

let upcomingEvents = dataArray.filter(dataArray => dataArray.date >= currentDate)
let pastEvents = dataArray.filter(dataArray => dataArray.date < currentDate)


// 
// ### Forma 1 de recorrer el array/objeto SOLO CON CICLOS FOR ### 
// for (let i = 0; i < dataArray.length; i++) {
//     if (dataArray[i].date >= currentDate) {
//         upcomingEvents.push(dataArray[i])
//     }
//     else {
//         pastEvents.push(dataArray[i])
//     }

// }

// ### Forma 2 de recorrer el array/objeto SOLO CON CICLOS FOR ### 


// for (let data of dataArray) {
//   if (data.date >= currentDate) {
//     upcomingEvents.push(data);

//   } else {
//     pastEvents.push(data)
//   }
//   homeEvents.push(data)
// }


//Print de las cards 
function cards(array) {

    let updateCard = document.getElementById("div-cards-events")

    array = array.map(element => {


        return `
        <div class="col">
              <div class="card h-100">
                  <img src="${element.image}" class="card-img-top h-50" alt="cinema">
                  <div class="card-body">
                      <h5 class="card-title">${element.name}</h5>
                      <p class="card-text">${element.description}</p>
                      <p class="card-text text-muted">Date: ${element.date}</p>
                      <p class="text-muted card-text">Place: ${element.place}</p>
                  </div>
                  <div class="card-footer">
                      <div class="container text-center">
                          <div class="row">
                              <div class="col">
                                  <p class="text-muted fs-5 text-center">Price:$${element.price}</p>
                          
                                  </div>
                              <div class="col">
                              </div>
                              <div class="col">
                              <a href="/templates/details.html?id=${element._id}" class="btn btn-secondary">More info</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        `
    })

    updateCard.innerHTML = array.join('')

}

//Chequeamos la pagina con el nombre de la misma, para saber que eventos printear

function checkPage() {
    let title = document.getElementById("titleMain")
    if (title.textContent == "Upcoming Events") {
        cards(upcomingEvents)
    } else if (title.textContent == "Past Events") {
        cards(pastEvents)

    }
    //Siempre hay que tener cuidado por si se rompe algo
    else {
        console.log("que rompimo")
    }
}

checkPage()

//Mapeo de eventos eliminando las categorias repetidas

let mapEvents = dataArray.map(lista => lista.category);  
const dataA = new Set(mapEvents); 
let dataArrayFiltrado = [...dataA]; 

//Print de todos los checks de forma dinamica, usando un map
function printChecks(id_etiqueta, array_tipos) {
    let container = document.querySelector(id_etiqueta)
    array_tipos = array_tipos.map(each => {
        return `

    <div class="d-flex p-3 ms-5 gap-5"> 
    <fieldset>
    <input onclick="captureData()" class="form-check-input class_checks" type="checkbox" id="${each}" role="switch" id="flexSwitchCheckDefault" value="${each}">
    <label class="form-check-label" for="${each}">${each}</label>
    </fieldset>

    </div>
  
    `
    })
    array_tipos.push(`<div class= "input-group mb-2 w-25 container">
  <input oninput="captureData()"  id="id_search" class="form-control h-1" type="text" name="text" placeholder= "Search" > 
  </div>
  `)
    container.innerHTML = array_tipos.join('')
}

//Llamamos a la funcion con el ID de los checks y las categorias filtradas sin repetir
printChecks('#table_checks', dataArrayFiltrado)

//Capturo los datos para realizar el filtro funcional

function captureData() {
    let text = document.getElementById('id_search').value.toLowerCase()
    let checks = Array.from(document.querySelectorAll('.class_checks:checked')).map(each => each.value) //Forma no aceptada por Edge
    //Antes de realizar el filtro, se chequea que array hay que filtrar con un if.
    let title = document.getElementById("titleMain")
    if (title.textContent == "Upcoming Events") {
        let filterUpcoming = upcomingEvents.filter(each => {
            return (
                each.name.toLowerCase().includes(text)
            ) && (
                    (checks.length === 0 || checks.includes(each.category))
                )
        })
        if (filterUpcoming.length > 0) {
            cards(filterUpcoming)
        }
        else {
            notFound()

        }

    }
    else if (title.textContent == "Past Events") {

        let filterPast = pastEvents.filter(each => {
            return (
                each.name.toLowerCase().includes(text)
            ) && (
                    (checks.length === 0 || checks.includes(each.category))
                )
        })
        if (filterPast.length > 0) {
            cards(filterPast)
        }
        else {
            notFound()

        }
    }

}



//Funcion para el print de card no encontrada
function notFound() {
    let notFoundCard = document.getElementById("div-cards-events")

    notFoundCard.innerHTML = `
        <div class="container text-center">
              <div class="card h-100">
                  
                  <div class="card-body ">
                      <h5 class="card-title">Card not Found</h5>
                      <p class="card-text">Please try again</p>
                      
                  </div>
                  
                   
              </div>
          </div>
        `
}





