sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function (Controller,MessageBox) {
	"use strict";

	return Controller.extend("com.lti.pc.PCReqUI.controller.Request", {
		onInit: function () {
		//added comment
		},		
		onSaveChanges: function (oEvent) {
		    var that = this;
		    // getting the current context for the list
		    var data = [];
var myContexts = this.byId("idInputTablecommgeoleText").getBinding("rows").getCurrentContexts();
// get object binded to the context
var myBoundDataObjects = myContexts.map(function(context) {
            return context.getObject();
});
// looping on the bounded data to change the values of the JSON Array
for (var i = 0; i < myBoundDataObjects.length; i++) {
        if (myBoundDataObjects[i].proprice !==null) {
                   data.push(myBoundDataObjects[i]);
        }
}
// setting the json model in order to pass it to different methods/classes
//var ordersModel = new sap.ui.model.json.JSONModel(myBoundDataObjects);


		    //this.byId("idInputTablecommgeoleText").getBinding("rows").aContexts.map(oContext => oContext.getObject());
		    this.getView().getModel().submitBatch("SalesOrderUpdateGroup").then(function(){
		        // if (!that.byId("idInputTablecommgeoleText").getBindingContext().getBinding().hasPendingChanges()){
		            // raise success message
		            
				// that._triggerWorkflow(data);

		            MessageBox.success("Submitted");
		        // }
		    });
		},
		_triggerWorkflow: function (oData) {
			//	debugger;
			var that = this;
			var inputContext = oData;
			var userContext = {};
			var pPreWorkflowSteps = new Promise(function (resolve, reject) {
				
				 	resolve({});
				

			}).then(function (payload) {
				userContext.userInput = inputContext;
				
				//	WorkflowHelper._startInstance('dataadjustments', userContext);
					that._startInstance('pricechangereq', userContext);


			}).then(function () {
				
			});

		},
		_startInstance: function (workflowDefinitionId,userContext) {

			var token = this._fetchToken();
			$.ajax({
				url: "/comltipcPCReqUI/bpmworkflowruntime/rest/v1/workflow-instances",
				method: "POST",
				async: false,
				contentType: "application/json",
				headers: {
					"X-CSRF-Token": token
				},
				data: JSON.stringify({
					definitionId: workflowDefinitionId,
					subject: userContext.changeKey,
					context: userContext
				}),
				success: function (result, xhr, data) {
					MessageBox.show('Workflow Instace Created');
				}
			});
		},
		_fetchToken: function () {
			var token;
			$.ajax({
				url: "/comltipcPCReqUI/bpmworkflowruntime/rest/v1/xsrf-token",
				method: "GET",
				async: false,
				headers: {
					"X-CSRF-Token": "Fetch"
				},
				success: function (result, xhr, data) {
					token = data.getResponseHeader("X-CSRF-Token");
				}
			});
			return token;
		}
	});
});