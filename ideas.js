const containerOpenIdeas = document.querySelector('.openIdeas')


fetch('https://devtest.awesomebeta.com/api/ideas/')
    .then(response => response.json())
    .then(data => {

        for (let idea of data.data[0]) {
            // console.log(idea)
            const divOpenIdea = createDivOpenIdea(idea)
            containerOpenIdeas.appendChild(divOpenIdea)


        }

    });

// me devuelve todas las ideas, las ideas tienen un status, las de open las meto en open, las de review en review y las  aceptadas con las aceptadas. Esos arrays los tengo que print en cada div que corresponde. 

function createDivOpenIdea(openIdea) {

    const pName = document.createElement('p');
    pName.innerText = `${openIdea.name} ${openIdea.likes}`;
    const div = document.createElement('div');
    div.classList.add('openIdea');

    div.appendChild(pName);

    return div;


}

/* crear otro parrafo dentro del div y meter ahi el likes y el replis con los iconos */