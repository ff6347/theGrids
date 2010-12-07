/*
 * jsAscii 0.1
 * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
 * MIT License [http://www.nihilogic.dk/licenses/mit-license.txt]
 */

var jsAscii = (function() {


	
	var aDefaultCharList = ("Arum fugitibus rehenim sit, nobitis eum et rem et recae laceatem quamus ium dollandae vendele ndaeptatem re la conem et lab ipiet et rat es es sunt dio. Di que peliciate nonse voluptas re pro que vernam, omnis re aut qui culpa ditiis auda sinciduciis ut alignim entios ut aliat.Vitatiam veliqui atemquo beatur maximinvel modi voluptatus doluptas ut que volorero eriatem. Itatum con nonsequ iandam quia vel imincti undant.Ri doluptatquis ad eos que latus rente repudam que consequo dipsam quasimu saperesequi aut aut voluptam, quam re cum rerferum aspe experum ipiet magnatio. Mincimu sandisimet apereprovit, quas excepud igeniendunti verum remporem reiumque cum illab idipsamus as aut enimus velloreiur, niamet volor atem fugitibus aut parciusto volo doluptatusda dus aut estrumet et, tem receat autemquatio beatur as sitiament et, id et peles nihicturion nos conseribus as reped et assunt latus aditem faccate ommolestrum estis ant recepudit aci beat.Occum ist iuria verferferum eribus, tempedi sus, omnihilles num verum eture debit et optatus sit volorumet qui omnimpe od eos et parcill atusandus utem fuga. Itatur am atur?	Ut es cus denis mintor ma presciaepel ipid quibusdae sequati busdamet dit laborem hilit hici sitatem. Ita consequibus.Ficatemquia eumquate velit, quiassi mporupt intio. Qui ullabore est, omnienis ea estorepudit abor molupisi comnihilla veniminiet fugitatur? Incti blanda plibuscidis modio comnis molestiaepe ea cuscillab iditatisci ulpa vendamenis volorepere nemollam velique volorrum ducil eliquaeped ut et ent, offictem. Nam, nulpa porpore, quuntusam, con porpore rnatquias unt asped modis re pro cus ipiciis magnita sum, aut dolor aut quatent.Sedi te nobitem porest la dolorro ex elenditam, nulparum nos seditisim quam doluptatio. Rum incturis et ex et quam simincid que nonsequi sequide nam nobitas sim verum aut quaspidis etur, corrum dera doloreh endenda doluptas voluptatae sum volorit, conet optatio il magnit quo dollabo ritatusam idi dolendis elesed mos magnisqui sinctur accat litatias nossi coreped et utas sunt aut voluptate officimaio consed ulpario tem fugiatur as parum quodic tem fugit que nobis aperfer ferionsecus a quamusam imoluptatum experiatiur?Sequaer ionsequatis enihili quatem eture volendenient ut liatur?Pudae quis dolupid magnam, nonet volorecab id qui nimi, eos sectem. Fic tectiost, con pe di blam volor aut as dolupta tectore ruptae porem voluptur?Te none nust et omnieni millit exeratusda doloratem a comnihit dem qui consequ ibustiis estem sum quo vendita ssimi, eiur recture providel eum sitas dolum qui sim as nonse lit, corumquide odist esed magnia volore volore dis et paruptat.Sed et restrum idenit quat.Net la cum volupta iuntectiusam ex eserchi litatio odi utem serciis et laborio. Nequidus ideliqu iandae perior repereptatur ma de et rem ipsuntur aut quostrum quodi vero odi con num ius ratur?Bo. Um es inum volum sequis mi, nem. Caborum ratur raeptam, si nem dolest quia atesed ut voloreptisit hillupta destectur, simporu ptatus. Ullaccab ipsum qui volentin prae volor reiciis et lam aligent eris aut quamet acienecus earibernatem natet eum, quid mint.").split("");
	var aDefaultColorCharList = (" CGO08@").split("");
	var strFont = "courier new";


	// convert img element to ascii
	function asciifyImage(oImg, oCanvasImg) 
	{
		var oCanvas = document.createElement("canvas");
		if (!oCanvas.getContext) {
			return;
		}
		var oCtx = oCanvas.getContext("2d");
		if (!oCtx.getImageData) {
			return;
		}

		var iScale = parseInt(oImg.getAttribute("asciiscale")) || 1;
		var bColor = (oImg.getAttribute("asciicolor") == "true");
		var bAlpha = (oImg.getAttribute("asciialpha") == "true");
		var bBlock = (oImg.getAttribute("asciiblock") == "true");
		var bInvert = (oImg.getAttribute("asciiinvert") == "true");
		var strResolution = oImg.getAttribute("asciiresolution") || "medium";
		var aCharList = oImg.getAttribute("asciichars") || 
			(bColor ? aDefaultColorCharList : aDefaultCharList);

		var fResolution = 0.5;
		switch (strResolution) {
			case "low" : 	fResolution = 0.25; break;
			case "medium" : fResolution = 0.5; break;
			case "high" : 	fResolution = 1; break;
		}

		var iWidth = Math.round(parseInt(oImg.offsetWidth) * fResolution);
		var iHeight = Math.round(parseInt(oImg.offsetHeight) * fResolution);

		oCanvas.width = iWidth;
		oCanvas.height = iHeight;
		oCanvas.style.display = "none";
		oCanvas.style.width = iWidth;
		oCanvas.style.height = iHeight;

		oCtx.drawImage(oCanvasImg, 0, 0, iWidth, iHeight);
		var oImgData = oCtx.getImageData(0, 0, iWidth, iHeight).data;
	
		var strChars = "";

		for (var y=0;y<iHeight;y+=2) {
			for (var x=0;x<iWidth;x++) {
				var iOffset = (y*iWidth + x) * 4;
	
				var iRed = oImgData[iOffset];
				var iGreen = oImgData[iOffset + 1];
				var iBlue = oImgData[iOffset + 2];
				var iAlpha = oImgData[iOffset + 3];
	
				if (iAlpha == 0) {
					var iBrightIdx = 0;
				} else {
					var fBrightness = (0.3*iRed + 0.59*iGreen + 0.11*iBlue) / 255;
					var iCharIdx = (aCharList.length-1) - Math.round(fBrightness * (aCharList.length-1));
				}

				if (bInvert) {
					iCharIdx = (aCharList.length-1) - iCharIdx;
				}
				var strThisChar = aCharList[iCharIdx];

				if (strThisChar == " ") 
					strThisChar = "&nbsp;";

				if (bColor) {
					strChars += "<span style='"
						+ "color:rgb("+iRed+","+iGreen+","+iBlue+");"
						+ (bBlock ? "background-color:rgb("+iRed+","+iGreen+","+iBlue+");" : "")
						+ (bAlpha ? "opacity:" + (iAlpha/255) + ";" : "")
						+ "'>" + strThisChar + "</span>";
				} else {
					strChars += strThisChar;
				}
			}
			strChars += "<br/>";
		}
	
	
		var fFontSize = (2/fResolution)*iScale;
		var fLineHeight = (2/fResolution)*iScale;

		// adjust letter-spacing for all combinations of scale and resolution to get it to fit the image width.
		var fLetterSpacing = 0;
		if (strResolution == "low") {
			switch (iScale) {
				case 1 : fLetterSpacing = -1; break;
				case 2 : 
				case 3 : fLetterSpacing = -2.1; break;
				case 4 : fLetterSpacing = -3.1; break;
				case 5 : fLetterSpacing = -4.15; break;
			}
		}
		if (strResolution == "medium") {
			switch (iScale) {
				case 1 : fLetterSpacing = 0; break;
				case 2 : fLetterSpacing = -1; break;
				case 3 : fLetterSpacing = -1.04; break;
				case 4 : 
				case 5 : fLetterSpacing = -2.1; break;
			}
		}
		if (strResolution == "high") {
			switch (iScale) {
				case 1 : 
				case 2 : fLetterSpacing = 0; break;
				case 3 : 
				case 4 : 
				case 5 : fLetterSpacing = -1; break;
			}
		}


		// can't get a span or div to flow like an img element, but a table works?
		var oAscii = document.createElement("table");
		oAscii.innerHTML = "<tr><td>" + strChars + "</td></tr>";

		if (oImg.style.backgroundColor) {
			oAscii.rows[0].cells[0].style.backgroundColor = oImg.style.backgroundColor;
			oAscii.rows[0].cells[0].style.color = oImg.style.color;
		}

		oAscii.cellSpacing = 0;
		oAscii.cellPadding = 0;

		var oStyle = oAscii.style;
		oStyle.display = "inline";
		oStyle.width = Math.round(iWidth/fResolution*iScale) + "px";
		oStyle.height = Math.round(iHeight/fResolution*iScale) + "px";
		oStyle.whiteSpace = "pre";
		oStyle.margin = "0px";
		oStyle.padding = "0px";
		oStyle.letterSpacing = fLetterSpacing + "px";
		oStyle.fontFamily = strFont;
		oStyle.fontSize = fFontSize + "px";
		oStyle.lineHeight = fLineHeight + "px";
		oStyle.textAlign = "left";
		oStyle.textDecoration = "none";

		oImg.parentNode.replaceChild(oAscii, oImg);

	}

	// load the image file
	function asciifyImageLoad(oImg)
	{
		var oCanvasImg = new Image();
		oCanvasImg.src = oImg.src;
		if (oCanvasImg.complete) {
			asciifyImage(oImg, oCanvasImg);
		} else {
			oCanvasImg.onload = function() {
				asciifyImage(oImg, oCanvasImg)
			}
		}
	}

	return function() {
		var aImg = document.getElementsByTagName("img");
		var aImages = [];
		for (var i=0;i<aImg.length;i++) {
			aImages[i] = aImg[i];
		}

		for (var i=0;i<aImages.length;i++) {
			if (aImages[i].getAttribute("asciify") == "true") {
				asciifyImageLoad(aImages[i]);
			}
		}
	}
	
})();


if (window.addEventListener) { 
	window.addEventListener("load", jsAscii, false); 
} else if (window.attachEvent) { 
	window.attachEvent("onload", jsAscii); 
}
