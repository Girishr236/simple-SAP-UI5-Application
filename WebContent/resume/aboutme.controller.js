sap.ui.controller("resume.aboutme", {

	onInit: function() {
		
		this.router = sap.ui.core.UIComponent.getRouterFor(this);
		this.router.attachRoutePatternMatched(this._handleRouteMatched, this);
		
	},
	

goBack: function() {
		
		this.router.navTo("");
		
	}
});