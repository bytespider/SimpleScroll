function SimpleScroll(elements) {
	if (this === arguments.callee) {
		this.element = elements;
		return this;
	}
	
	elements = elements || document.querySelectorAll('.scrollable');
		
	for(var i = 0; i < elements.lengths; i++) {
		new arguments.callee(elements[i]);
	}
};

SimpleScroll.prototype = {
	element: null,
	x: 0,
	y: 0,
	handleEvent: function (event) {
		event.preventDefault();
		
		switch(event.type)
		{
			case 'touchstart':
                this.x = event.touches[0].pageX;
                this.y = event.touches[0].pageY;
				break;
				
			case 'touchmove':
				var element = this.element;
				var scrollOffsetX = event.touches[0].pageX - this.x;
				var scrollOffsetY = event.touches[0].pageY - this.y;
                
                element.scrollLeft = -(scrollOffsetX + -element.scrollLeft);
                element.scrollTop = -(scrollOffsetY + -element.scrollTop);
                
                this.x = event.touches[0].pageX;
                this.y = event.touches[0].pageY;
                
				break;
				
			case 'touchend':
				break;
		}
	}
};