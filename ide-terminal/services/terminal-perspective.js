/*
 * Copyright (c) 2010-2020 SAP and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v2.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v20.html
 *
 * Contributors:
 *   SAP - initial API and implementation
 */

const perspectiveData = {
	id: "terminal",
	name: "Terminal",
	link: "../ide-terminal/index.html",
	order: "120",
	image: "terminal", // deprecated
	icon: "../ide-terminal/images/terminal.svg",
};

if (typeof exports !== 'undefined') {
	exports.getPerspective = function () {
		return perspectiveData;
	}
}