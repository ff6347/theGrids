// imageGrid.jsx
// written by fabiantheblind 4 TypoStd  the FHP
// http://www.the-moron.net/
// based on InsertMultipleImages.js by Brian Reyman
// http://www.adobe.com/cfusion/exchange/index.cfm?event=extensionDetail&extid=1046817

main();
function main(){

	var theFolder = Folder.selectDialog ("Choose a FOLDER to Import Images From");
	var thePath = theFolder;
	var theFileType = "*.jpg";
	var theDoc = app.activeDocument;
	var thePage = theDoc.pages.item(0);
	
	var allImages = thePath.getFiles(theFileType);
	
	
	
	for(var i = 0;i < allImages.length; i++){
		var theBounds =  buildBounds(allImages.length,i,thePage,theDoc);
		var theRectangle = thePage.rectangles.add({
			geometricBounds: theBounds//[50,50,100,100]
		});
		
		theRectangle.place(allImages[i]);
		theRectangle.fit(FitOptions.CONTENT_TO_FRAME);
	
	}
	
	
}

function buildBounds( imgLength, index, thePage, theDoc){
	var theSize = 50;
	var gutter = 10;
	var theValues = new Array;
	var theBoard = thePage;
	var count = index;
	var w = theDoc.documentPreferences.pageWidth;
	var h = theDoc.documentPreferences.pageHeight;
	var numORects = imgLength;
	
	var xOffset;
	var offset = gutter + theSize;
	
	Y1 = ((h/2)-(theSize/2)) - offset;
	X1 = (w/2)-(theSize/2) - offset;
	Y2 = Y1 +theSize;
	X2 = X1 +theSize;
		
		for(var i = 0; i < 3; i++){
			
			for(var j = 0; j < 3; j++){
				
				theValues[index] = [Y1,X1,Y2,X2];
			}
		}

/*	
switch(index){
		case 0,1,2:
		
		Y1 = ((h/2)-(theSize/2)) - offset;
		X1 = (w/2)-(theSize/2) - offset;
		Y2 = ((h/2)+(theSize/2)) - offset;
		X2 = (w/2)+(theSize/2) -offset;
		break;
		
		case 6,7,8:
		Y1 = ((h/2)-(theSize/2)) + offset;
		X1 = (w/2)-(theSize/2) + offset;
		Y2 = ((h/2)+(theSize/2)) + offset;
		X2 = (w/2)+(theSize/2) + offset;
		break;
}
	switch(index){
		case 0,3,6:
		
		Y1 = ((h/2)-(theSize/2)) - offset;
		X1 = ((w/2)-(theSize/2)) - offset;
		Y2 = ((h/2)+(theSize/2)) - offset;
		X2 = ((w/2)+(theSize/2)) - offset;
		break;
		case 2,5,8:
		Y1 = ((h/2)-(theSize/2)) + offset;
		X1 = ((w/2)-(theSize/2)) + offset;
		Y2 = ((h/2)+(theSize/2)) + offset;
		X2 = ((w/2)+(theSize/2)) + offset;
		break;
	}
	switch(index){
		case 4:
		Y1 = (h/2)-(theSize/2);
		X1 = (w/2)-(theSize/2);
		Y2 = (h/2)+(theSize/2);
		X2 = (w/2)+(theSize/2);
		break;
}
*/
	
	
	
	
	return theValues[index];
//	return [50,50,100,100]
}

