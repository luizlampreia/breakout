var Q1x=[] , Q2x=[] , Q3x=[] , Q4x=[];
var x = 100;
var y = 100;
var j = 100;
var tela=1
var velocidade = 15;
var xp = 5,yp=5;
var pont=0, texto  = ""



function iniciar(){
   
   Q1x[0]=10;
   Q1x[1]=60;
   Q1x[2]=110;
   Q1x[3]=160;
   Q1x[4]=210;
   Q1x[5]=260;
   Q1x[6]=310;
   Q1x[7]=360;
   Q1x[8]=410;
   Q1x[9]=460;
   
   Q2x[0]=10;
   Q2x[1]=60;
   Q2x[2]=110;
   Q2x[3]=160;
   Q2x[4]=210;
   Q2x[5]=260;
   Q2x[6]=310;
   Q2x[7]=360;
   Q2x[8]=410;
   Q2x[9]=460;
   
   Q3x[0]=10;
   Q3x[1]=60;
   Q3x[2]=110;
   Q3x[3]=160;
   Q3x[4]=210;
   Q3x[5]=260;
   Q3x[6]=310;
   Q3x[7]=360;
   Q3x[8]=410;
   Q3x[9]=460;
   
   Q4x[0]=10;
   Q4x[1]=60;
   Q4x[2]=110;
   Q4x[3]=160;
   Q4x[4]=210;
   Q4x[5]=260;
   Q4x[6]=310;
   Q4x[7]=360;
   Q4x[8]=410;
   Q4x[9]=460; 
   
   
}
function setup() {//inicio da função onde tudo começa, x0 e y0 representa a posição da bolinha.
	
   createCanvas(512, 512);
    xo= 300
    yo= 250
   iniciar() 
  
}
function draw() {
	
  if(tela==1){
	  background(255);
	  textSize(20)
	  text('pressione enter para começar o jogo',100,250)
	  if(keyIsDown(ENTER)){
		tela=2
	  }
  }	
	
  if(tela==2){
  background(0);
  
  
    if(x+200 > 560) {   // faz a barra movimetar
    jp=-5
    x= x+jp
}

  else{
	 jp=0  
}
  if(x < 0){   // movimeto
     jp=+5
     x= x+jp
}
  else {
	 jp=0 
}
   
  
   if (keyIsDown(LEFT_ARROW))
    x-=5;

   if (keyIsDown(RIGHT_ARROW))
    x+=5;
  
	//funçâo da bola-interação bola e parede.
  
   if(xo > 512) {   // faz a bola bater e voltar de acordo com as paredes a,b,c ou d.
     xp=-10
   }
   
   if(xo < 0) {
     xp= 10
   }
   if(yo >512) {    // condicão especial.
    texto = "game over, sua pontuação= " + pont +" \n aperte enter para continuar";
    tela = 3;
     
     
     
     
   }
   if(pont==41){
	  
	  texto = "Parabéns, nova rodada?.";
	 //iniciar()
	 //xo = 300
     //yo = 250
   }
   
    if(yo <0) {
     yp= 10
   }
   yo += yp // movimeto da bola
   xo += xp//    ***********
   
   
   if(dist(x,500,xo,yo)<15){ // a bola bate em qualquer *****canto da barra e volta colide , 15 por conta do raio da esfera e e da area do retangulo
	yp=-5
   }
   for(i = 15; i <= 150; i += 15){
	   if(dist(x+i,500,xo,yo)<15){
		yp=-velocidade-3
	
		
		// velocidade da bolinha
	   }
	}
   /*
   if(dist(x+60,400,xo,yo)<35){
	yp=-5
   }
   if(dist(x+90,400,xo,yo)<35){
	yp=-5
   }
   if(dist(x+120,400,xo,yo)<35){
	yp=-5
   }
   if(dist(x+150,400,xo,yo)<35){
	yp=-5
   }
   if(dist(x+180,400,xo,yo)<35){
	yp=-5
   }
   if(dist(x+200,400,xo,yo)<35){
	yp=-5
   }*/
  

   

  
   rect(x,500,150,5); // coordenadas da barra.
   stroke('silver');
   strokeWeight(4)
   ellipse(xo, yo, 15, 15); // cooordenadas da bola.
   stroke('green')

 

 
 //quando colidir com a bola desaparecer.
 
  for (i=0;i<=9;i++){
	rect(Q1x[i], 10,20 , 20)
	if(dist(Q1x[i],10,xo,yo)<25){
		Q1x[i]=10000
		yp=-velocidade
		pont++
}
		if(dist(Q1x[i],10,xo,yo)<30){
		Q1x[i]=10000
		yp=-velocidade
		pont++
}
}

  for (i=0;i<=9;i++){
	rect(Q2x[i], 60,20 , 20)
	if(dist(Q2x[i],60,xo,yo)<25){
		Q2x[i]=10000
		yp=-velocidade
		pont++
}

	if(dist(Q2x[i],60,xo,yo)<30){
		Q2x[i]=10000
		yp=-velocidade
		pont++
}		
}
  for (i=0;i<=9;i++){
	rect(Q3x[i], 120,20 , 20)
	if(dist(Q3x[i],110,xo,yo)<25){
		Q3x[i]=10000
		yp=-velocidade
		pont++
}
	if(dist(Q3x[i],110,xo,yo)<30){
		Q3x[i]=10000
		yp=-velocidade
		pont++
}
 }
  for (i=0;i<=9;i++){
	rect(Q4x[i], 180,20 , 20)
	if(dist(Q4x[i],160,xo,yo)<25){
		Q4x[i]=10000
		yp=-velocidade
		pont++
}

	if(dist(Q4x[i],160,xo,yo)<30){
		Q4x[i]=10000
		yp=-velocidade
		pont++
	
	
} 
textSize(18); 
text('pontuação:'+pont,380,350)  
  
}
}
 if(tela==3){
	  background(255);
	  textSize(20)
     
	  text(texto,100,250)
	  if(keyIsDown(ENTER)){
		tela=2
        iniciar()
     pont=0
     pont++
     
     xo = 300
     yo = 250
	  }
   //alert()
  }
  if(pont==41){
  if(tela==4){
	
      background(255);
	  textSize(20)
     }
	  text(texto,100,250)
  
	  if(keyIsDown(ENTER)){
		tela=3
        iniciar()
	 xo = 300
     yo = 250
	  }
    
  }
 
}
  







































