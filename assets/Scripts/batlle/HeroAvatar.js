const Avatar = require("Avatar");
cc.Class({
    extends:Avatar,

    properties: {
        url:"role/stand",
        actionName:"stand"
    },

    // use this for initialization
    onLoad: function () {
    
        this.initPlayerWithUrl(this.url,this.actionName)
    },
   
});
