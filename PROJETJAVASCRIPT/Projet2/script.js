let tabElement = ["mon premier", "mon deuxieme", "mon troisieme", "mon quatrieme"];

let boxGauche = document.querySelector('.box_gauche')
let boxDroite = document.querySelector('.box_droite')
let btnDroite = document.querySelector('#droite')
let btnGauche = document.querySelector('#gauche')
console.log(boxGauche);

function generate() {
    for (let i = 0; i < tabElement.length; i++) {
    
        let element= document.createElement('p');
         element.innerText= tabElement[i];
         boxGauche.appendChild(element); 

         element.addEventListener('mouseover', function(){           
         element.classList.add('active');    
        
        })
        deplacer(element);
      
        
    }   
}


function deplacer(element) {
    btnDroite.addEventListener('click', function(){
        if (element.classList.contains("active")) {
            boxDroite.appendChild(element)
        }
    })
}

deplacer()

generate()



  //boxGauche est le parent de element