const drums = document.querySelectorAll('.drum');

function Audios() {
    drums.forEach((drum) => {
        drum.addEventListener('click', () => {
            const crash = new Audio("./sounds/crash.mp3")
            crash.play();
        })
    });
    
    drums.forEach((drum) => {
        drum.addEventListener('click', () => {
            const kick = new Audio("./sounds/kick-bass.mp3")
            kick.play();
        })
    });
    
    drums.forEach((drum) => {
        drum.addEventListener('click', () => {
            const snare = new Audio("./sounds/snare.mp3")
            snare.play();
        })
    });
    
    drums.forEach((drum) => {
        drum.addEventListener('click', () => {
            const tom1 = new Audio("./sounds/tom-1.mp3")
            tom1.play();
        })
    });
    
    drums.forEach((drum) => {
        drum.addEventListener('click', () => {
            const tom2 = new Audio("./sounds/tom-2.mp3")
            tom2.play();
        })
    });
    
    drums.forEach((drum) => {
        drum.addEventListener('click', () => {
            const tom3 = new Audio("./sounds/tom-3.mp3")
            tom3.play();
        })
    });
    
    drums.forEach((drum) => {
        drum.addEventListener('click', () => {
            const tom4 = new Audio("./sounds/tom-4.mp3")
            tom4.play();
        })
    });
    
}

Audios()