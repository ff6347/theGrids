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
		with (theDoc.viewPreferences) {
		pageWidth = "210mm";
		pageHeight = "210mm";
		horizontalMeasurementUnits = MeasurementUnits.MILLIMETERS;
		verticalMeasurementUnits = MeasurementUnits.MILLIMETERS;
		rulerOrigin = RulerOrigin.pageOrigin;
		
	}
	
	var theObjStyle  = theDoc.objectStyles.add({name:"style"});
	theObjStyle.transparencySettings.dropShadowSettings.distance = "2 mm"; 
	theObjStyle.transparencySettings.dropShadowSettings.mode = ShadowMode.DROP;

	
	var thePage = theDoc.pages.item(0);
	var allImages = thePath.getFiles(theFileType);
	var theSize = 50;
	var gutter = 10;
	var offset = gutter + theSize;
	var w = theDoc.documentPreferences.pageWidth;
	var h = theDoc.documentPreferences.pageHeight;


	
	var Y1  = ((h/2)-(theSize/2)) - offset;
	var X1 = (w/2)-(theSize/2) - offset;
	var Y2 = Y1 +theSize;
	var X2 = X1 +theSize;
	for(var i = 0;i < allImages.length; i++){


			
			var theRectangle = thePage.rectangles.add({
				geometricBounds: [Y1,X1,Y2,X2]
			});
			theRectangle.place(allImages[i]);
			theRectangle.fit(FitOptions.CONTENT_TO_FRAME);
			theRectangle.applyObjectStyle( theDoc.objectStyles.item("[Ohne]"));
			
			theRectangle.applyObjectStyle( theObjStyle);
			
		 X1 = X1 + offset;
		if(X1 > w - theSize){
			Y1 = Y1 + offset;
			X1 = (w/2)-(theSize/2) - offset;
		}
		Y2 = Y1 +theSize;
		X2 = X1 +theSize;
	}
	

}

