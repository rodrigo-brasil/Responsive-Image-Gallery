const cards = document.querySelectorAll(".card");
const modal = document.getElementById("modalInstance");
const img = document.getElementById("img-modal");
const urlImages = [];
const paths =[];
let currentIndex = 0;

// criando uma array com o caminho de todas imagens
cards.forEach((x) =>{
  urlImages.push(x.style.backgroundImage);
  paths.push(x.style.backgroundImage.replace("url(","").replace(")","").replace(/"/g, ''));
});

// add listeners
cards.forEach((trigger) =>
  trigger.addEventListener("mouseover", (trigger) => {
    document.querySelector("#background").style.backgroundImage =
      trigger.target.style.backgroundImage;
    document.querySelector("#background").style.display = "block";
  })
);
cards.forEach((trigger) =>
  trigger.addEventListener(
    "mouseleave",
    (trigger) => (document.querySelector("#background").style.display = "none")
  )
);
cards.forEach((trigger) =>
  trigger.addEventListener(
    "click",
    (trigger) => {
      currentIndex = urlImages.indexOf(trigger.target.style.backgroundImage)
        modal.style.display = "block";
        abrirImgModal(currentIndex);
    }
  )
);

document.querySelector("#fechar-modal").addEventListener("click", x=> modal.style.display = "none")

document.getElementById("avancar").addEventListener("click", ()=> mudarFoto(+1))
document.getElementById("voltar").addEventListener("click", ()=> mudarFoto(-1))

function mudarFoto(n){
  console.log(`entrou ${n} e ${currentIndex}`)
  currentIndex += n;
  if(currentIndex >= paths.length){
    currentIndex = 0
  }
  if(currentIndex < 0){
    currentIndex = paths.length-1;
  }
  console.log(currentIndex)
  abrirImgModal(currentIndex)
}

function abrirImgModal(index){
  console.log(`abrindo imagem ${index}`)
  img.src = paths[index]
}

