/*global QUnit*/

sap.ui.define([
	"com/lti/pc/PCReqUI/controller/Request.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Request Controller");

	QUnit.test("I should test the Request controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});