cc.Class({
    extends: cc.Component,

    properties: {
        txt:
        {
            type:cc.RichText,
            default:null
        }
    },

     
    onLoad: function () {
        this.node.width = cc.winSize.width - 20;
        this.txt.maxWidth = cc.winSize.width - 40; 
    },

    // 
    setData:function(log)
    {
        this.txt.string = log ;
        
    }
});
