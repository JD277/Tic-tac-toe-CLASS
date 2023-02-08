let noimporta = true
let slot1 = ''
let slot2 = ''
let slot3 = ''
let slot4 = ''
let slot5 = ''
let slot6 = ''
let slot7 = ''
let slot8 = ''
let slot9 = ''
let ganador = document.getElementById('fondo')
let TextGanador = document.getElementById('ganador')
let playAgain = document.getElementById('JugarDeNuevo')
function Draw() {
    TextGanador.textContent = 'Draw'
    ganador.style.top = '0rem'
    ganador.style.transition = '.5s'
    
}
function GanoX() {
    TextGanador.textContent = 'Exs Wins!'
    ganador.style.top = '0rem'
    ganador.style.transition = '.5s'
    
}
function GanoO() {
    TextGanador.textContent = 'Circles Wins!'
    ganador.style.top = '0rem'
    ganador.style.transition = '.5s'
    
}
//----------------------------------------------------------
let TurnosdeCircle = 1 
let Turnosdeequis  = 0 
//----------------------------------------------------------
//----------------------------------------------
        let circle  = document.getElementById('circulo1')
        let circle2 = document.getElementById('circulo2')
        let circle3 = document.getElementById('circulo3')
        let circle4 = document.getElementById('circulo4')
        let circle5 = document.getElementById('circulo5')
        let circle6 = document.getElementById('circulo6')
        let circle7 = document.getElementById('circulo7')
        let circle8 = document.getElementById('circulo8')
        let circle9 = document.getElementById('circulo9')
        //-----------------------------------------------
        let equis  = document.getElementById('equis1')
        let equis2 = document.getElementById('equis2')
        let equis3 = document.getElementById('equis3')
        let equis4 = document.getElementById('equis4')
        let equis5 = document.getElementById('equis5')
        let equis6 = document.getElementById('equis6')
        let equis7 = document.getElementById('equis7')
        let equis8 = document.getElementById('equis8')
        let equis9 = document.getElementById('equis9')
        //-----------------------------------------------
let cuadro = document.getElementsByClassName('cuadro')
for (let i = 0; i < cuadro.length; i++) {
       
    cuadro[i].addEventListener('mouseenter', function() {
        //-----------------------------------------------
        //----equis hover
        switch (noimporta) {
        case Turnosdeequis === TurnosdeCircle && this.id === 'cuadro1' && slot1 === '':
        equis.style.opacity = '0.4'
        break;
        //--------
        case Turnosdeequis === TurnosdeCircle && this.id === 'cuadro2' && slot2 === '':
        equis2.style.opacity = '0.4'
        break;
        //--------
        case Turnosdeequis === TurnosdeCircle && this.id === 'cuadro3' && slot3 === '':
        equis3.style.opacity = '0.4'
        break;
        //--------
        case Turnosdeequis === TurnosdeCircle && this.id === 'cuadro4' && slot4 === '':
        equis4.style.opacity = '0.4'
        break;
        //--------
        case Turnosdeequis === TurnosdeCircle && this.id === 'cuadro5' && slot5 === '':
        equis5.style.opacity = '0.4'
        break;
        //--------
        case Turnosdeequis === TurnosdeCircle && this.id === 'cuadro6' && slot6 === '':
        equis6.style.opacity = '0.4'
        break;
        //--------
        case Turnosdeequis === TurnosdeCircle && this.id === 'cuadro7' && slot7 === '':
        equis7.style.opacity = '0.4'
        break;
        //--------
        case Turnosdeequis === TurnosdeCircle && this.id === 'cuadro8' && slot8 === '':
        equis8.style.opacity = '0.4'
        break;
        //--------
        case Turnosdeequis === TurnosdeCircle && this.id === 'cuadro9' && slot9 === '':
        equis9.style.opacity = '0.4'
        break;
        }
        //----circulos hover
        switch (noimporta) {
            case TurnosdeCircle > Turnosdeequis && this.id === 'cuadro1' && slot1 === '':
            circle.style.opacity = '0.4'
            break;
            //--------
            case TurnosdeCircle > Turnosdeequis && this.id === 'cuadro2' && slot2 === '':
            circle2.style.opacity = '0.4'
            break;
            //--------
            case TurnosdeCircle > Turnosdeequis && this.id === 'cuadro3' && slot3 === '':
            circle3.style.opacity = '0.4'
            break;
            //--------
            case TurnosdeCircle > Turnosdeequis && this.id === 'cuadro4' && slot4 === '':
            circle4.style.opacity = '0.4'
            break;
            //--------
            case TurnosdeCircle > Turnosdeequis && this.id === 'cuadro5' && slot5 === '':
            circle5.style.opacity = '0.4'
            break;
            //--------
            case TurnosdeCircle > Turnosdeequis && this.id === 'cuadro6' && slot6 === '':
            circle6.style.opacity = '0.4'
            break;
            //--------
            case TurnosdeCircle > Turnosdeequis && this.id === 'cuadro7' && slot7 === '':
            circle7.style.opacity = '0.4'
            break;
            //--------
            case TurnosdeCircle > Turnosdeequis && this.id === 'cuadro8' && slot8 === '':
            circle8.style.opacity = '0.4'
            break;
            //--------
            case TurnosdeCircle > Turnosdeequis && this.id === 'cuadro9' && slot9 === '':
            circle9.style.opacity = '0.4'
            break;
        }
        
    cuadro[i].addEventListener('mouseleave', function() {
        switch (noimporta) {
            case TurnosdeCircle > Turnosdeequis && this.id === 'cuadro1' && circle.style.opacity === '0.4' && slot1 === '':
            circle.style.opacity = '0'
            break;
            //--------
            case TurnosdeCircle > Turnosdeequis && this.id === 'cuadro2' && circle2.style.opacity === '0.4' && slot2 === '':
            circle2.style.opacity = '0'
            break;
            //--------
            case TurnosdeCircle > Turnosdeequis && this.id === 'cuadro3' && circle3.style.opacity === '0.4' && slot3 === '':
            circle3.style.opacity = '0'
            break;
            //--------
            case TurnosdeCircle > Turnosdeequis && this.id === 'cuadro4' && circle4.style.opacity === '0.4' && slot4 === '':
            circle4.style.opacity = '0'
            break;
            //--------
            case TurnosdeCircle > Turnosdeequis && this.id === 'cuadro5' && circle5.style.opacity === '0.4' && slot5 === '':
            circle5.style.opacity = '0'
            break;
            //--------
            case TurnosdeCircle > Turnosdeequis && this.id === 'cuadro6' && circle6.style.opacity === '0.4' && slot6 === '':
            circle6.style.opacity = '0'
            break;
            //--------
            case TurnosdeCircle > Turnosdeequis && this.id === 'cuadro7' && circle7.style.opacity === '0.4' && slot7 === '':
            circle7.style.opacity = '0'
            break;
            //--------
            case TurnosdeCircle > Turnosdeequis && this.id === 'cuadro8' && circle8.style.opacity === '0.4' && slot8 === '':
            circle8.style.opacity = '0'
            break;
            //--------
            case TurnosdeCircle > Turnosdeequis && this.id === 'cuadro9' && circle9.style.opacity === '0.4' && slot9 === '':
            circle9.style.opacity = '0'
            break;
        }
        //----equis hover
        switch (noimporta) {
            case Turnosdeequis === TurnosdeCircle && this.id === 'cuadro1' && equis.style.opacity === '0.4' && slot1 === '':
            equis.style.opacity = '0'
            break;
            //--------
            case Turnosdeequis === TurnosdeCircle && this.id === 'cuadro2' && equis2.style.opacity === '0.4' && slot2 === '':
            equis2.style.opacity = '0'
            break;
            //--------
            case Turnosdeequis === TurnosdeCircle && this.id === 'cuadro3' && equis3.style.opacity === '0.4' && slot3 === '':
            equis3.style.opacity = '0'
            break;
            //--------
            case Turnosdeequis === TurnosdeCircle && this.id === 'cuadro4' && equis4.style.opacity === '0.4' && slot4 === '':
            equis4.style.opacity = '0'
            break;
            //--------
            case Turnosdeequis === TurnosdeCircle && this.id === 'cuadro5' && equis5.style.opacity === '0.4' && slot5 === '':
            equis5.style.opacity = '0'
            break;
            //--------
            case Turnosdeequis === TurnosdeCircle && this.id === 'cuadro6' && equis6.style.opacity === '0.4' && slot6 === '':
            equis6.style.opacity = '0'
            break;
            //--------
            case Turnosdeequis === TurnosdeCircle && this.id === 'cuadro7' && equis7.style.opacity === '0.4' && slot7 === '':
            equis7.style.opacity = '0'
            break;
            //--------
            case Turnosdeequis === TurnosdeCircle && this.id === 'cuadro8' && equis8.style.opacity === '0.4' && slot8 === '':
            equis8.style.opacity = '0'
            break;
            //--------
            case Turnosdeequis === TurnosdeCircle && this.id === 'cuadro9' && equis9.style.opacity === '0.4' && slot9 === '':
            equis9.style.opacity = '0'
            break;
            }
    })
    })
    cuadro[i].addEventListener('click', function() {
        
        
        
        //-----circulos 
        switch (noimporta) {
            case slot1 === '' && TurnosdeCircle > Turnosdeequis && this.id === 'cuadro1':
            circle.style.opacity = '1'
            Turnosdeequis = Turnosdeequis + 1
            slot1 = 'o'
        break;
            case slot2 === '' && TurnosdeCircle > Turnosdeequis && this.id === 'cuadro2':
            circle2.style.opacity = '1'
            Turnosdeequis = Turnosdeequis + 1
            slot2 = 'o'
        break;
            case slot3 === '' && TurnosdeCircle > Turnosdeequis && this.id === 'cuadro3':
            circle3.style.opacity = '1'
            Turnosdeequis = Turnosdeequis + 1
            slot3 = 'o'
        break;
            case slot4 === '' && TurnosdeCircle > Turnosdeequis && this.id === 'cuadro4':
            circle4.style.opacity = '1'
            Turnosdeequis = Turnosdeequis + 1
            slot4 = 'o'
        break;
            case slot5 === '' && TurnosdeCircle > Turnosdeequis && this.id === 'cuadro5':
            circle5.style.opacity = '1'
            Turnosdeequis = Turnosdeequis + 1
            slot5 = 'o'
        break;
            case slot6 === '' && TurnosdeCircle > Turnosdeequis && this.id === 'cuadro6':
            circle6.style.opacity = '1'
            Turnosdeequis = Turnosdeequis + 1
            slot6 = 'o'
        break;
            case slot7 === '' && TurnosdeCircle > Turnosdeequis && this.id === 'cuadro7':
            circle7.style.opacity = '1'
            Turnosdeequis = Turnosdeequis + 1
            slot7 = 'o'
        break;
            case slot8 === '' && TurnosdeCircle > Turnosdeequis && this.id === 'cuadro8':
            circle8.style.opacity = '1'
            Turnosdeequis = Turnosdeequis + 1
            slot8 = 'o'
        break;
            case slot9 === '' && TurnosdeCircle > Turnosdeequis && this.id === 'cuadro9':
            circle9.style.opacity = '1'
            Turnosdeequis = Turnosdeequis + 1
            slot9 = 'o'
        break;
        }
            //----equis 
        switch (noimporta) {
            case slot1 === '' && Turnosdeequis === TurnosdeCircle && this.id === 'cuadro1':
            equis.style.opacity = '1'
            TurnosdeCircle = TurnosdeCircle + 1
            slot1 = 'x'
        break;
            case slot2 === '' && Turnosdeequis === TurnosdeCircle && this.id === 'cuadro2':
            equis2.style.opacity = '1'
            TurnosdeCircle = TurnosdeCircle + 1
            slot2 = 'x'
        break;
            case slot3 === '' && Turnosdeequis === TurnosdeCircle && this.id === 'cuadro3':
            equis3.style.opacity = '1'
            TurnosdeCircle = TurnosdeCircle + 1
            slot3 = 'x'
        break;
            case slot4 === '' && Turnosdeequis === TurnosdeCircle && this.id === 'cuadro4':
            equis4.style.opacity = '1'
            TurnosdeCircle = TurnosdeCircle + 1
            slot4 = 'x'
        break;
            case slot5 === '' && Turnosdeequis === TurnosdeCircle && this.id === 'cuadro5':
            equis5.style.opacity = '1'
            TurnosdeCircle = TurnosdeCircle + 1
            slot5 = 'x'
        break;
            case slot6 === '' && Turnosdeequis === TurnosdeCircle && this.id === 'cuadro6':
            equis6.style.opacity = '1'
            TurnosdeCircle = TurnosdeCircle + 1
            slot6 = 'x'
        break;
            case slot7 === '' && Turnosdeequis === TurnosdeCircle && this.id === 'cuadro7':
            equis7.style.opacity = '1'
            TurnosdeCircle = TurnosdeCircle + 1
            slot7 = 'x'
        break;
            case slot8 === '' && Turnosdeequis === TurnosdeCircle && this.id === 'cuadro8':
            equis8.style.opacity = '1'
            TurnosdeCircle = TurnosdeCircle + 1
            slot8 = 'x'
        break;
            case slot9 === '' && Turnosdeequis === TurnosdeCircle && this.id === 'cuadro9':
            equis9.style.opacity = '1'
            TurnosdeCircle = TurnosdeCircle + 1
            slot9 = 'x'
        break;
}
    })
    
}
//----------------------------------------------------------
function Comprobaciones() {
   let intervalo = setInterval(function() {
     switch (noimporta) {
            case ganador.style.top === '0rem':
             clearInterval(intervalo)
            break;
         //--------------------------horizontales---------------------------
            case slot1 === 'o' && slot2 === 'o' && slot3 === 'o' :
            GanoO()
            break;
            case slot4 === 'o' && slot5 === 'o' && slot6 === 'o' :
            GanoO()
            break;
            case slot7 === 'o' && slot8 === 'o' && slot9 === 'o' :
            GanoO()
            break;

            //equis----------------------------------------------------------
            case slot1 === 'x' && slot2 === 'x' && slot3 === 'x' :
            GanoX()
            break;
            case slot4 === 'x' && slot5 === 'x' && slot6 === 'x' :
            GanoX()
            break;
            case slot7 === 'x' && slot8 === 'x' && slot9 === 'x' :
            GanoX()
            break;
        //--------------------verticales---------------------------------
            case slot1 === 'o' && slot4 === 'o' && slot7 === 'o' :
            GanoO()
            break;
            case slot8 === 'o' && slot5 === 'o' && slot2 === 'o' :
            GanoO()
            break;
            case slot9 === 'o' && slot6 === 'o' && slot3 === 'o' :
            GanoO()
            break;
            //equis-------------------------------------------------------
            case slot1 === 'x' && slot4 === 'x' && slot7 === 'x' :
            GanoX()
            break;
            case slot8 === 'x' && slot5 === 'x' && slot2 === 'x' :
            GanoX()
            break;
            case slot9 === 'x' && slot6 === 'x' && slot3 === 'x' :
            GanoX()
            break;
            //diagonales
            case slot9 === 'o' && slot5 === 'o' && slot1 === 'o' :
            GanoO()
            break;
            case slot7 === 'o' && slot5 === 'o' && slot3 === 'o' :
            GanoO()
            break;
            //equis----------------------------------------------------
            case slot9 === 'x' && slot5 === 'x' && slot1 === 'x' :
            GanoX()
            break;
            case slot7 === 'x' && slot5 === 'x' && slot3 === 'x' :
            GanoX()
            break;
            //empates-------------------------------------------------
            case slot1.length === 1 && slot2.length === 1 && slot3.length === 1
            && slot4.length === 1 && slot5.length === 1 && slot6.length === 1
            && slot7.length === 1 && slot8.length === 1 && slot9.length === 1: 
            Draw()
            break;
    }   
    }, 1000);
}
Comprobaciones()
//------------------------------------------------------------
playAgain.addEventListener('click', () => {
    switch (noimporta) {
        case ganador.style.top === '0rem':
         Comprobaciones()
         ganador.style.top = '-100rem'
         //---------------------------------
         slot1 = ''
         slot2 = ''
         slot3 = ''
         slot4 = ''
         slot5 = ''
         slot6 = ''
         slot7 = ''
         slot8 = ''
         slot9 = ''
         //----------------------------------
         TurnosdeCircle = 1 
         Turnosdeequis  = 0
         //----------------------------------
         circle.style.opacity = '0'
         circle2.style.opacity = '0'
         circle3.style.opacity = '0'
         circle4.style.opacity = '0'
         circle5.style.opacity = '0'
         circle6.style.opacity = '0'
         circle7.style.opacity = '0'
         circle8.style.opacity = '0'
         circle9.style.opacity = '0'
         //-----------------------------------
         equis.style.opacity = '0'
         equis2.style.opacity = '0'
         equis3.style.opacity = '0'
         equis4.style.opacity = '0'
         equis5.style.opacity = '0'
         equis6.style.opacity = '0'
         equis7.style.opacity = '0'
         equis8.style.opacity = '0'
         equis9.style.opacity = '0'
        break;
    }
})

