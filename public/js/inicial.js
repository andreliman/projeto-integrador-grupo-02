const likePost = (likeIcon) => {
    const likeText = document.querySelector(".post__lista_icons p");

    const textValues = likeText.innerText.split(" ");
    const textNumber = Number(textValues[0]);

    likeIcon.color

    if(likeIcon.style.color !== "var(--selected)") {
        likeIcon.style.color = "var(--selected)";
        likeText.innerText = `${textNumber + 1} ${(textNumber + 1) === 1 ? 'like' : 'likes'}`;

    } else {        
        likeIcon.style.color = "var(--icons)";
        likeText.innerText = `${textNumber-1} ${(textNumber - 1) === 1 ? 'like' : 'likes'}`;  
    }
};