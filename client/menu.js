// A single menu window

class menu extends visible(function() {}) {

    constructor(buildInfo) {
	super(...arguments);
	this.buildInfo = buildInfo;
	
	if (typeof this.buildInfo !== 'undefined') {
	    this.background = new PIXI.Sprite.fromImage(this.buildInfo.background);
	    this.background.anchor.x = 0.5;
	    this.background.anchor.y = 0.5;
	    this.container.addChild(this.background);
	    this.text = new PIXI.Text("Placeholder");
	}
	
	this.subMenus = new Set();
	this.buttons = new Set();
	this.show();
    }



    render() {
	
    }

    destroy() {
	this.hide();
	super.destroy();
    }

}

