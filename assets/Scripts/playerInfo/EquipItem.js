cc.Class({
    extends: cc.Component,

    properties: {
        type:0,
        itemType:cc.Node,
        itemIcon:cc.Node
    },

    // use this for initialization
    onLoad: function () {
    	
      var sprite  = this.itemType.getComponent("cc.SpriteFrame");
      var url = 'heroproperity/item'+this.type;
	  cc.loader.loadRes(url, cc.SpriteFrame, (err, sprite) => 
	  {
	  	sprite.spriteFrame = sprite ;
	   });
    },



});
