//String[] listaPalabras1, listP1;
// listaaa
let texto;
let logica = new Logica();
let pantalla;


//Paralax
let plx = 35;
let mm = 0;
let b = 0;
let d = 0;
let m = 0;
let dm = 0;

//Opciones del mouse
let click = true;
let walk = false;
let prees=false;

//Herobrine y Steve pintados
let Psteve = new Personaje(-100, 180, 0, 0, false, "momotaro", 1);


//Primera pantalla
let start;
let flecha;
let next;
let fin;

//Se crean las variables de los pngs de fondo;
let BG;
let BG2;
let BG4;


//Se crean las varibales de los personajes quietos
let steve;
let steve1;



//Se crean las variables para los areglos de pngs
let Mw;
let MMs;
let MMw;


function setup() {

    createCanvas(1200, 700);
    pantalla = 0;

    //Pantalla de inicio
    start = loadImage('image/HUD/start.jpg');
    fin = loadImage('image/HUD/fin.png');
    flecha = loadImage('image/HUD/flecha.png');
    next = loadImage('image/HUD/next.png');


    //Se cargan las imagenes de fondo.
    BG = loadImage('image/BG/BG.png');
    BG2 = loadImage('image/BG/BG2.png');
    BG4 = loadImage('image/BG/BG4.png');
    


    //se carga las imagenes de los personajes quietos
    steve = loadImage('image/MMW/MMw1.png');
    steve1 = loadImage('image/Midle/Mt1.png');

    //Se crea el arreglo de pngs para momotaro
    MMs = [];
    msv = 0;
    for (i = 0; i <= 1; i++) {
        MMs.push(loadImage("image/MMs/MMs" + i + ".png"));
    }

    MMw = [];
    mwv = 0;
    for (i = 0; i <= 2; i++) {
        MMw.push(loadImage("image/MMw/MMw" + i + ".png"));
    }

    logica.cargarTxt();

}

function draw() {

    switch (pantalla) {

        case 1:

            background(0);

            //Se pinta el fondo
            image(BG, -200 + (plx), 0);
            image(BG2, -200 + (plx * 2), 0);
            image(BG4, -200 + (plx * 5), 0);
            


            //Se pinta momotaro
            switch (mm) {
                case 0:
                    image(steve, Psteve.getPosx(), Psteve.getPosy());

                    break;

                
            }


            if (plx == -36) {
                walk = false;
                if (walk == false) {
                    (mm = 1) && (m = 1) && (d = 1) && (b = 1);
                }
            }



            if ((mouseX > 1100 && mouseX < 1200) && (mouseY > 0 && mouseY < 700)) {
                walk = true;

                if (walk == true) {
                    (mm = 2) && (m = 2) && (d = 2) && (b = 1);
                }

                if (plx >= -35) {
                    plx--;

                }


            }

            if (mm == 1 && m == 1 && d == 1 && b == 1) {
              
                image(flecha,0,0,200,200);
                click = false;
            }

           if(prees==true){ press();}

            break;

        case 0:

            background(0);
            image(start, 0, 0,1200,700);
           press();
            break;

        case 2:
            image(fin, 0, 0,1200,700);
            break;

    }


}// cierra draw

function keyPressed() {

    if (key == 's' || key == 'S') {
        pantalla++;
        if (pantalla == 2) {
            saveStrings(lista, 'Nuevo.txt');
        }
    }

}

function mousePressed() {


    if (click == true) {


        if ((mouseX > 70 && mouseX < 158) && (mouseY > 286 && mouseY < 631)) {
            Psteve.interaccion();
            logica.ajustarTexto();
        }
     }


}


function press(){

    fill(255);
    textSize(50);
    text("Press S to continue",400,600);
}
