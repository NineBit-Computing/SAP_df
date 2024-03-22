sap.ui.define(["./BaseController", "sap/ui/model/json/JSONModel"], function (BaseController, JSONModel) {
	"use strict";

	return BaseController.extend("com.myorg.myapp.controller.Main", {
		// sayHello: function () {
		// 	MessageBox.show("Hello World!");
		// }
		// onSubmit: function() {
        //     // Handle form submission here
        // },

        // formatField: function(field) {
        //     var fieldTemplate = sap.ui.xmlfragment("com.myorg.myapp.FieldTemplate", this);
        //     var oModel = new JSONModel({ field: field });
        //     fieldTemplate.setModel(oModel, "field");
        //     return fieldTemplate;
        // }
		onSave: function() {
            var formFields = this.getView().byId("formContainer").getItems(); // Get the items within the form container
            var formData = {}; // Object to hold form data

            formFields.forEach(function(item) {
                var label = item.getContent()[0].getText();
                var value = item.getContent()[1].getValue();
                formData[label] = value; // Add label-value pair to the formData object
            });

            console.log(JSON.stringify(formData)); // Print the JSON object to console
        }
    });
	})

