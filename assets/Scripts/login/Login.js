cc.Class({
    extends: cc.Component,

    properties: {
        btn_start:cc.Button
    },

    
    onLoad: function () {
        
    },

    login:function()
    {
        console.log("login in game");
        cc.director.loadScene("Battle");
    }

});
