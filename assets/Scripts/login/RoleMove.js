cc.Class({
    extends: cc.Component,

    properties: {
      
    },

    // use this for initialization
    onLoad: function () {
        this.node.getComponent("cc.Animation").play("upAndDown");
    },
});
