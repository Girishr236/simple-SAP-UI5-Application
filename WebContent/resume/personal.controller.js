sap.ui.controller("resume.personal", {


ListItemPress: function(evt) {
		
		
		var router = sap.ui.core.UIComponent.getRouterFor(this);
		
		var context = evt.getSource().getBindingContext('modelbind');
		
		var path = context.sPath; //"/collection/0"
		
		var start = path.lastIndexOf('/') + 1;
		
		var nextIndex = path.substring(start, path.length);
		
		router.navTo('resume', {nextIndex: nextIndex});
		
	}

});