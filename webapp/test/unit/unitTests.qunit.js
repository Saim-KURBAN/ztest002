/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comsaimkurbanztest002/ztest002/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
