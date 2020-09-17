function initModel() {
	var sUrl = "/srv_api/catalog/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}