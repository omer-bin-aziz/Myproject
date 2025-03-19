document.querySelector("body");

function generateRandomColor(){
    const hexValues = "0123456789ABCDEF";
   let color = "#";
   for (let i=0; i<6; i++){
    const randomIndex = Math.floor(Math.random()*16);
    color+=hexValues[randomIndex];

   }
   return color;
}

function changeBackgroundColorOfBody(bgcolor){
    document.querySelector("body").style.backgroundColor = bgcolor;
}

const newColorButton = document.querySelector(".NewColorButton");
newColorButton.addEventListener("click", () => {
    changeBackgroundColorOfBody(generateRandomColor())
})

