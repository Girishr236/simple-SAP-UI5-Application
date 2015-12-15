jQuery.sap.declare("sap.demo.resume.Component");

sap.ui.core.UIComponent.extend("sap.demo.resume.Component",{
	
metadata: {		
		routing: {
			
			config: {
				viewType: "JS",
				viewPath: "resume",
				targetControl: "splitApp",
				clearTarget: false,
				transition: "slide"
			},
			
			routes: [
			         {   pattern: "",
				    	  view:"personal",
				    	  name:"default",
				    	   
				    	   targetAggregation: "masterPages",
				    		   subroutes: [
					    	               {
					    	            	   pattern: "",
					    			    	   view: "welcome",
					    			    	   targetAggregation: "detailPages",
					    	               },
					    	               {
					    	               pattern: "resume/{nextIndex}",
								    	   name: "resume",
								    	  view: "aboutme",
								    	   targetAggregation: "detailPages",
					    	               }
					    	               
					    	   ]
			         
			       },
			         
			       
			       ]
		}
},

	
	init: function() {
		
		jQuery.sap.require("sap.m.routing.RouteMatchedHandler");
		jQuery.sap.require("sap.ui.core.routing.HashChanger");
		
		
		//call createContent
		sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
		
		this._router = this.getRouter();
		
		//initlialize the router
		this._routeHandler = new sap.m.routing.RouteMatchedHandler(this._router);
		this._router.initialize();	
		
	},
	
	createContent: function() {
		
		var oView = sap.ui.view({
			id: "app",
			viewName: "resume.app",
			type: "JS",
			viewData: {component: this}
		});
		var oModel = new sap.ui.model.json.JSONModel('model/resume.json');
		oView.setModel(oModel,'modelbind');
		
		return oView;
		
	}
	
	
})