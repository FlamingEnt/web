function wizard(elements, colorSpectrum, duration) {
	if(typeof duration === "undefined") {
		duration = 5000;
	}
	if(!wizard.called) {
		for (var i = 0; i < elements.length; i++) {
			elements[i][0].css(elements[i][1], colorSpectrum[colorSpectrum.length - 1]);
		}
	}
	var currentHue = colorSpectrum.shift();
	colorSpectrum.push(currentHue);
	wizard.called = true;
	for (var j = 0; j < elements.length; j++) {
		var $element = elements[j][0];
		var property = elements[j][1];
		var tempAnimate = {};
		tempAnimate[property] = currentHue;
		if (j < elements.length - 1) {
			$element.animate(tempAnimate, duration);
		} else {
			$element.animate(tempAnimate, duration, function(){
				wizard(elements, colorSpectrum, duration);
			});
		}
	}
}