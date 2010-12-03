// theImageGrid.jsx
// written by fabiantheblind 4 Bettina Müllers Typografie seminar @ the FHP
// http://www.the-moron.net/
// based on InsertMultipleImages.js by Brian Reyman
// http://www.adobe.com/cfusion/exchange/index.cfm?event=extensionDetail&extid=1046817
// works best with nine images

// run the script
main();

function main(){

	// define the folder the path the filetype
	var theFolder = Folder.selectDialog ("Choose a FOLDER to Import Images From");
	var thePath = theFolder;
	var theFileType = "*.jpg";

	
	//build a basic document
	var theDoc = app.documents.add()	
	with (theDoc.documentPreferences) {
		pageWidth = "210mm";
		pageHeight = "210mm";
		//BleedBox settings
		documentBleedBottomOffset = "3mm";
		documentBleedTopOffset = "3mm";
		documentBleedInsideOrLeftOffset = "3mm";
		documentBleedOutsideOrRightOffset = "3mm";
	}
	// have to look up why the size is declared in 2 ways
		with (theDoc.viewPreferences) {
		pageWidth = "210mm";
		pageHeight = "210mm";
		// to make shure we have the right positions and units
		horizontalMeasurementUnits = MeasurementUnits.MILLIMETERS;
		verticalMeasurementUnits = MeasurementUnits.MILLIMETERS;
		rulerOrigin = RulerOrigin.pageOrigin;
		
	}
	
	// make a objectstyle with dropshadows
	// thnx to the hilfdirselbst.ch forum
	var theObjStyle  = theDoc.objectStyles.add({name:"style"});
	theObjStyle.transparencySettings.dropShadowSettings.distance = "2 mm"; 
	theObjStyle.transparencySettings.dropShadowSettings.mode = ShadowMode.DROP;

	// get the first page and the files
	var thePage = theDoc.pages.item(0);
	var allImages = thePath.getFiles(theFileType);
	//define the size and the distance between the images
	var theSize = 50;
	var gutter = 10;
	// this is the offset from where we place images
	var offset = gutter + theSize;
	// get the pages size
	var w = theDoc.documentPreferences.pageWidth;
	var h = theDoc.documentPreferences.pageHeight;

	// calculate the geometric bounds for the first image
	var Y1  = ((h/2)-(theSize/2)) - offset;
	var X1 = (w/2)-(theSize/2) - offset;
	var Y2 = Y1 +theSize;
	var X2 = X1 +theSize;
	
	// loop thru the images and place each in a rectangle
	for(var i = 0;i < allImages.length; i++){
			var theRectangle = thePage.rectangles.add({
				geometricBounds: [Y1,X1,Y2,X2]
			});
			// some styling
			theRectangle.place(allImages[i]);
			theRectangle.fit(FitOptions.CONTENT_TO_FRAME);
			// the objectstyles suck! (means this is a bug)
			// there is always the stinkin basic objectsylte applyed
			theRectangle.applyObjectStyle( theDoc.objectStyles.item("[Ohne]"));
			//apply our objectstlye
			theRectangle.applyObjectStyle( theObjStyle);
			
			// calculate the position of the next rectangle
			X1 = X1 + offset;
			// this is what makes the next row
			if(X1 > w - theSize){
				Y1 = Y1 + offset;
				X1 = (w/2)-(theSize/2) - offset;
			}
			// the lower right corner is always easy
			Y2 = Y1 +theSize;
			X2 = X1 +theSize;
	}

}// done

