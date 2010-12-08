import processing.core.*; 
import processing.xml.*; 

import java.applet.*; 
import java.awt.Dimension; 
import java.awt.Frame; 
import java.awt.event.MouseEvent; 
import java.awt.event.KeyEvent; 
import java.awt.event.FocusEvent; 
import java.awt.Image; 
import java.io.*; 
import java.net.*; 
import java.text.*; 
import java.util.*; 
import java.util.zip.*; 
import java.util.regex.*; 

public class ascii_art2 extends PApplet {

/*
ascii art
\ufffd2004 gabe dunne

http://quilime.com
http://media.quilime.com/files/src/processing/ascii_art/index.html
*/

PImage a;
PFont monospace;
int[][] aPixels;
char[] ascii;
int multiplier;

public void setup() {

  multiplier = 1; // size of image

  noStroke();

  size(800,482);

  // load font (doesn't have to be monospace)
  monospace = loadFont("Courier-18.vlw");
  textFont(monospace, 18);

  //image
  a = loadImage("julis.jpg"); // Load the images into the program
  aPixels = new int[width][height];

  /*
  
  lightest                                                       darkest
   .'`,^:";~-_+<>i!lI?/\|()1{}[]rcvunxzjftLCJUYXZO0Qoahkbdpqwm*WMB8&%$#@
  
  */

  ascii = new char[70];

  ascii[69] = ' '; // lightest
  ascii[68] = '.';
  ascii[67] = '\\';
  ascii[66] = '`';
  ascii[65] = ',';
  ascii[64] = '^';
  ascii[63] = ':';
  ascii[62] = '"';
  ascii[61] = ';';
  ascii[60] = '-';

  ascii[59] = '~'; // second lightest
  ascii[58] = '_';
  ascii[57] = '+';
  ascii[56] = '<';
  ascii[55] = '>';
  ascii[54] = 'i';
  ascii[53] = '!';
  ascii[52] = 'l';
  ascii[51] = 'I';
  ascii[50] = '?';

  ascii[49] = '/'; // third lightest
  ascii[48] = '\\';
  ascii[47] = '|';
  ascii[46] = '(';
  ascii[45] = ')';
  ascii[44] = '1';
  ascii[43] = '{';
  ascii[42] = '}';
  ascii[41] = '[';
  ascii[40] = ']';

  ascii[39] = 'r'; // middle point
  ascii[38] = 'c';
  ascii[37] = 'v';
  ascii[36] = 'u';
  ascii[35] = 'n';
  ascii[34] = 'x';
  ascii[33] = 'z';
  ascii[32] = 'j';
  ascii[31] = 'f';
  ascii[30] = 't';

  ascii[29] = 'L'; // third darkest
  ascii[28] = 'C';
  ascii[27] = 'J';
  ascii[26] = 'U';
  ascii[25] = 'Y';
  ascii[24] = 'X';
  ascii[23] = 'Z';
  ascii[22] = 'O';
  ascii[21] = '0';
  ascii[20] = 'Q';

  ascii[19] = 'o'; // second darkest
  ascii[18] = 'a';
  ascii[17] = 'h';
  ascii[16] = 'k';
  ascii[15] = 'b';
  ascii[14] = 'd';
  ascii[13] = 'p';
  ascii[12] = 'q';
  ascii[11] = 'w';
  ascii[10] = 'm';

  ascii[9] =  '*'; // darkest
  ascii[8] =  'W';
  ascii[7] =  'M';
  ascii[6] =  'B';
  ascii[5] =  '8';
  ascii[4] =  '&';
  ascii[3] =  '%';
  ascii[2] =  '$';
  ascii[1] =  '#';
  ascii[0] =  '@';

  background(0);
  float pixBright;

  for(int i=0; i<height/multiplier; i++) {
    for(int j=0; j<width/multiplier; j++) {
      aPixels[j][i] = a.pixels[i*width/multiplier+j];
    }
  }

  for(int i=0; i<height*multiplier; i+=10) {
    for(int j=0; j<width*multiplier; j+=10) {

      pixBright = brightness(aPixels[j/multiplier][i/multiplier]); // set the brightess

      //fill(255,255,255); // uncomment this line to fill with solid color
      fill(aPixels[j/multiplier][i/multiplier]);
      //rect(j,i,10,10);

      text(ascii[PApplet.parseInt(pixBright/4)], j, i);
    }
  }
}

// save screenshot
//void mouseReleased() {
//  saveFrame("screenshot-####.ext");
//}

  static public void main(String args[]) {
    PApplet.main(new String[] { "--bgcolor=#c0c0c0", "ascii_art2" });
  }
}
