sap.ui.jsview("resume.welcome", {
	getControllerName : function() {
		return "resume.welcome";
	},
	createContent : function(oController) {
		
		var oImage = new sap.m.Image({
			src: "resource/welcome.jpg",
			width:'auto'
		});
		
 		return new sap.m.Page({
			title: "Please Look At My Resume",
			content: [ 
			           new sap.m.HBox({
				        	  items: [oImage],
				        	  alignItems: sap.m.FlexAlignItems.Center,
				        	  justifyContent: sap.m.FlexJustifyContent.Center
				          })
			
			]
		});
	}

});