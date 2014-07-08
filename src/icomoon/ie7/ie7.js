/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'krita-icons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'kicon-select': '&#xe600;',
		'kicon-text': '&#xe601;',
		'kicon-pattern': '&#xe602;',
		'kicon-calligraphy': '&#xe603;',
		'kicon-format-fill-color': '&#xe604;',
		'kicon-freehand': '&#xe605;',
		'kicon-linetool': '&#xe606;',
		'kicon-square': '&#xe607;',
		'kicon-circle': '&#xe608;',
		'kicon-poly': '&#xe609;',
		'kicon-polyline': '&#xe60a;',
		'kicon-drawpath': '&#xe60b;',
		'kicon-freehand-vector': '&#xe60c;',
		'kicon-dyna': '&#xe60d;',
		'kicon-multibrush': '&#xe60e;',
		'kicon-crop': '&#xe60f;',
		'kicon-move': '&#xe610;',
		'kicon-transform': '&#xe611;',
		'kicon-measure': '&#xe612;',
		'kicon-fill': '&#xe613;',
		'kicon-colorpicker': '&#xe614;',
		'kicon-ruler': '&#xe615;',
		'kicon-perspective': '&#xe616;',
		'kicon-grid': '&#xe617;',
		'kicon-select-square': '&#xe618;',
		'kicon-select-circle': '&#xe619;',
		'kicon-select-brush': '&#xe61a;',
		'kicon-select-poly': '&#xe61b;',
		'kicon-select-freehand': '&#xe61c;',
		'kicon-select-contiguous': '&#xe61d;',
		'kicon-select-color': '&#xe61e;',
		'kicon-select-path': '&#xe61f;',
		'kicon-pan': '&#xe620;',
		'kicon-zoom': '&#xe621;',
		'kicon-new-file': '&#xe622;',
		'kicon-print': '&#xe623;',
		'kicon-save': '&#xe624;',
		'kicon-add-layer': '&#xe625;',
		'kicon-duplicate': '&#xe626;',
		'kicon-move-down': '&#xe627;',
		'kicon-move-up': '&#xe628;',
		'kicon-move-out': '&#xe629;',
		'kicon-move-in': '&#xe62a;',
		'kicon-properties': '&#xe62b;',
		'kicon-delete': '&#xe62c;',
		'kicon-visible': '&#xe62d;',
		'kicon-invisible': '&#xe62e;',
		'kicon-unlocked': '&#xe62f;',
		'kicon-locked': '&#xe630;',
		'kicon-alpha': '&#xe631;',
		'kicon-menu': '&#xe632;',
		'kicon-plus': '&#xe633;',
		'kicon-minus': '&#xe634;',
		'kicon-add-palette': '&#xe635;',
		'kicon-symmetry-horizontal': '&#xe636;',
		'kicon-symmetry-vertical': '&#xe637;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/kicon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
