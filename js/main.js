document.querySelectorAll('.card').forEach(trigger=> trigger.addEventListener('mouseover', trigger => {document.querySelector('#background').style.backgroundImage = trigger.target.style.backgroundImage;
document.querySelector('#background').style.display = "block";
}
))

document.querySelectorAll('.card').forEach(trigger=> trigger.addEventListener('mouseleave', trigger => document.querySelector('#background').style.display = "none"
))


