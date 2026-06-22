const addCard = document.querySelector(".addCard");
const spaceWork = document.querySelector(".spaceWork");
const cardContainer = document.querySelector(".cardContainer")

addCard.addEventListener("click", criarCard);

function criarCard(){
    const card = document.createElement("div");
    card.classList.add("card");

    const cardTop = document.createElement("div");
    cardTop.classList.add("cardTop");

    const cardTitle = document.createElement("input");
    cardTitle.classList.add("cardTitle");
    const options = document.createElement("button");
    options.classList.add("options");

    const cardContent = document.createElement("div");
    cardContent.classList.add("cardContent");

    const inputContent = document.createElement("textarea");
    inputContent.classList.add("inputContent");

    spaceWork.append(cardContainer);

    cardContainer.append(card);    


    card.append(cardTop);

    cardTop.append(cardTitle);
    cardTop.append(options);

    card.append(cardContent);
    cardContent.append(inputContent);

    cardTitle.type = "text";
    cardTitle.placeholder = "Title";

    inputContent.placeholder = "Type something";

    options.textContent = "...";
}
