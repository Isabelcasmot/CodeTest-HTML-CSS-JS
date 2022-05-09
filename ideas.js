const ideas = document.querySelector('.ideasreq')

fetch('https://devtest.awesomebeta.com/api/ideas/')
    .then(response => response.json())
    .then(data => {

        for (let idea of data.data[0]) {
            console.log(idea)


        }

    })

// me devuelve todas las ideas, las ideas tienen un status, las de open las meto en open, las de review en review y las  aceptadas con las aceptadas. Esos arrays los tengo que print en cada div que corresponde. 

function createDivOpenIdeas(idea) {


}