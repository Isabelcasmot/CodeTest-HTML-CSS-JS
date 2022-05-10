const containerOpenIdeas = document.querySelector('.openIdeas')
const containerIdeasReview = document.querySelector('.review')
const containerIdeasAccepted = document.querySelector('.accepted')


fetch('https://devtest.awesomebeta.com/api/ideas/')

    .then(response => response.json())
    .then(data => {

        for (let idea of data.data[0]) {
            if (idea.status === 'open') {
                const divOpenIdea = createDivOpenIdea(idea)
                containerOpenIdeas.appendChild(divOpenIdea)

            } if (idea.status === 'in-review') {
                const divIdeaReview = createDivReview(idea)
                containerIdeasReview.appendChild(divIdeaReview)

            } if (idea.status === 'accepted') {
                const divIdeaAccepted = createDivAccepted(idea)
                containerIdeasAccepted.appendChild(divIdeaAccepted)

            }
        }
    });


function createDivOpenIdea(openIdea) {

    const pName = document.createElement('p');
    pName.innerText = `${openIdea.name}`;

    const pLike = document.createElement('p');
    pLike.innerHTML = ` <img src="./images/heart.svg"> ${openIdea.likes}  <img src="./images/comment_icon.svg"> ${openIdea.user_interactions.length}`

    const div = document.createElement('div');
    div.classList.add('openIdea');

    div.appendChild(pName);
    div.appendChild(pLike);
    pLike.appendChild

    return div;
}


function createDivReview(ideaReview) {

    const pName = document.createElement('p');
    pName.innerText = `${ideaReview.name}`;

    const pLike = document.createElement('p');
    pLike.innerHTML = ` <img src="./images/heart.svg"> ${ideaReview.likes}  <img src="./images/comment_icon.svg"> ${ideaReview.user_interactions.length} `

    const div = document.createElement('div');
    div.classList.add('ideaReview');

    div.appendChild(pName);
    div.appendChild(pLike);

    return div;
}

function createDivAccepted(ideaAccepted) {

    const pName = document.createElement('p');
    pName.innerText = `${ideaAccepted.name}`;

    const pDate = document.createElement('p');
    pDate.innerText = ` ${ideaAccepted.updated_at}`

    const div = document.createElement('div');
    div.classList.add('ideaAccepted');

    div.appendChild(pName);
    div.appendChild(pDate);

    return div;
}