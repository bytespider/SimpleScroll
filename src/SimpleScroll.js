(function(W) {
    var SimpleScroll, touchstart = 'touchstart', touchmove = 'touchmove', touchend = 'touchend';
    
    SimpleScroll = W['SimpleScroll'] = function (elements) {
    	elements = elements || document.querySelectorAll('.scrollable');
    	
    	if (this !== W) {
    		this.init(elements);
    		return this;
    	}
    	
    	for(var i = 0; i < elements.length; i++) {
    		new arguments.callee(elements[i]);
    	}
    };

    SimpleScroll.prototype = {
        init: function init(element){
            element.addEventListener(touchstart, this.handleEvent, false);
            element.addEventListener(touchmove, this.handleEvent, true);
            element.addEventListener(touchend, this.handleEvent, false);
            this.element = element;
        },
        element: null,
        x: 0,
        y: 0,
        handleEvent: function handleEvent(event){
            event.preventDefault();
            
            switch (event.type) {
                case touchstart:
                    this.x = event.touches[0].pageX;
                    this.y = event.touches[0].pageY;
                    break;
                    
                case touchmove:
                    var element = this.element;
                    var scrollOffsetX = event.touches[0].pageX - this.x;
                    var scrollOffsetY = event.touches[0].pageY - this.y;
                    
                    element.scrollLeft = -(scrollOffsetX + -element.scrollLeft);
                    element.scrollTop = -(scrollOffsetY + -element.scrollTop);
                    
                    this.x = event.touches[0].pageX;
                    this.y = event.touches[0].pageY;
                    
                    break;
                    
                case touchend:
                    break;
            }
        }
    };
})(window);
