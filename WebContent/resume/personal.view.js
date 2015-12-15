sap.ui.jsview("resume.personal", {

	getControllerName : function() {
		return "resume.personal";
	},

	createContent : function(oController) {
		
		var olist = new sap.m.List(
				{
					id:"listid"
						})
		olist.bindItems({
			path : "modelbind>/resume", 
			template : new sap.m.StandardListItem({
				title: "{modelbind>type}",
				type: sap.m.ListType.Navigation,
				press:function(evt){
					oController.ListItemPress(evt);
				}
				
			})
		});
 		return new sap.m.Page({
			title: "Title",
			content: [olist
			
			]
		});
	}

});