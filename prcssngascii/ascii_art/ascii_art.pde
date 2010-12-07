/*


                    Darker    .'`,^:";~    Lighter
           bright    /|\      -_+<>i!lI?     /|\      dark
          letters     |       /\|()1{}[]      |     letters
             on               rcvunxzjft               on
            dark      |       LCJUYXZO0Q      |      bright
         background  \|/      oahkbdpqwm     \|/   background
                    Lighter   *WMB8&%$#@   Darker







http://media.quilime.com/files/src/processing/ascii_art/index.html
*/


PImage a;  // Declare variable "a" of type BImage
//BVideo vid; 
PFont monospace;
int[][] aPixels;
int multiplier;

void setup() {

  multiplier = 1; // size of image

  size((800),(482));

  // load font (must be monospace)
  monospace = loadFont("Courier-18.vlw");
  textFont(monospace, 18);

  //image
  //vid = loadVideo("bird.mov");
a = loadImage("julis.jpg"); // Load the images into the program
  aPixels = new int[width][height];

  //text color
  fill(0);
  
  
  
}

void draw() {
  image(a, 0, 0); // Displays the image from point (0,0)
  background(255);
  



  for(int i=0; i<height/multiplier; i++) {
    for(int j=0; j<width/multiplier; j++) {
      aPixels[j][i] = a.pixels[i*width/multiplier+j];
    }
  }

  for(int i=0; i<height*multiplier; i+=10) {
    for(int j=0; j<width*multiplier; j+=10) {
      if (brightness(aPixels[j/multiplier][i/multiplier]) > 150) {
        text("W", j, i);
        //set(j,i,color(255,255,255));
      }
    }
  }



  //displays the image
  
//  for(int i=0; i<height; i++) {
//    for(int j=0; j<width; j++) {
//      aPixels[j][i] = a.pixels[i*width+j];
//      set(j,i,a.pixels[i*width+j]);
//    }
//  }
  
}
