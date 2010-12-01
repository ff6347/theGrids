
/*
written by fabiantheblind // 4th inc. KSC
http://www.the-moron.net
info@the-noron.net
 version 0.01
 20109 11 30
 */

PImage picToScann; 
color c; // color norm of scanned image
float rc, gc, bc, brghtnss; // value of colorchannels r = red g = green b = blue
int reSizer = 1; // resize the sketch with this factor WARNING may not be 0
float [] values;
float [] reversedValues;


void setup(){
        colorMode(HSB, 100);

	smooth();
	background (100);
	picToScann = loadImage("the_hand_today_gs_20x20.jpg"); // load image 2 scann
	size(picToScann.width*reSizer,picToScann.height*reSizer);
        values = new float[(picToScann.width*picToScann.height)];
        reversedValues = new float[(picToScann.width*picToScann.height)];
}

void draw (){
	rectMode(CENTER);
//	fill(255,128);
	noStroke();

	pictureProcess(); // process image
	noLoop();
        image(picToScann,0,0);

}

void pictureProcess( ){

  
//	imageMode(CENTER);

        for (int index = 0; index < picToScann.pixels.length; index ++){
        values[index] = brightness(picToScann.pixels[index]);
        reversedValues[index] = map(brightness(picToScann.pixels[index]),0,100,100,0);
//                println(values[index]);

        }

BufferedWriter bw = null;
try 
{
  FileWriter fw = new FileWriter(dataPath("") + "myFile_20x20.txt", false); // true means: "append"
  bw = new BufferedWriter(fw);
  
  for (int i = 0; i < values.length; i++){
  bw.write(reversedValues[i]+ ",");
  }
} 
catch (IOException e) 
{
  // Report problem or handle it
}
finally
{
  if (bw != null)
  {
    try { bw.close(); } catch (IOException e) {}
  }
}
//exit();

//	for(int i = 0; i < picToScann.width; i=i+1){
//	for(int j = 0; j < picToScann.height; j = j+1){
//  
//	c = picToScann.get(i,j); // scan image
//        
//        brghtnss = brightness(c);
// 
//        println(brghtnss);
////	rc=red(c); // scan value red channel
////	gc=green(c);// scan value green channel
////	bc=blue(c); // scan value blue channel
//
//      }
//      
//}





}

// KEYCODES // KEYCODES // KEYCODES // KEYCODES // KEYCODES // KEYCODES
void keyReleased() {
	if (key == 's' || key == 'S') {
  
	}
}
// KEYCODES // KEYCODES // KEYCODES // KEYCODES // KEYCODES // KEYCODES
