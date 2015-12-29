sap.ui.jsview("resume.aboutme", {	
	getControllerName : function() {
		return "resume.aboutme";
	},

	createContent : function(oController) {
	
	var oImage = new sap.m.Image({
		src:"resource/giri.jpg"
	});
	oImage.addStyleClass("myImage")
	
	var oText = new sap.ui.core.HTML({
		content:["<h2>Girish Ramachandrappa</h2> <h1>Master in Informatics</h1> <p> girishr236@gmail.com</hp> "]
	})
	
//	resource/resume.pdf Add your Pdf Document with name resume.pdf
	 var oPdfresume = new sap.ui.core.HTML({
		 content :["<div  style='width: 900px; height: 500px; overflow:scroll' ><iframe id='tcf' style='width:900px; height: 500px; overflow:scroll' src='resource/resume.pdf'></iframe></div>"
		           ]
	 });
//	resource/cover.pdf Add your Pdf Document with name resume.pdf
	 var oPdfcover = new sap.ui.core.HTML({
		 content :["<div  style='width: 900px; height: 500px; overflow:scroll' ><iframe id='tcf' style='width:900px; height: 500px; overflow:scroll' src='resource/cover.pdf'></iframe></div>"
		           ]
	 });
 		return new sap.m.Page({
 			title: "Welcome",
			showNavButton: true,
			navButtonPress: function() {
				oController.goBack();
			},
			content: [
			          new sap.m.HBox({
			        items:[oImage,oText]
			          }),
			          new sap.m.IconTabBar({
			              expanded : "{device>/isNoPhone}",
			              
			            items : [ new sap.m.IconTabFilter({
			            	key : "Info",
			               icon : "sap-icon://hint",
			               text:"Resume",
			               content:[oPdfresume]
			         }),
			         new sap.m.IconTabFilter({     
			               icon : "sap-icon://database",
			               key : "database",
			               text:"Cover Letter",
			               content:[oPdfcover]
			         }),
			         ]
			      	})
			
			]
		});
	}

});