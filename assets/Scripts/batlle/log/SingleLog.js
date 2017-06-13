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

    },

    // 
    setData:function(log)
    {
        this.txt.string = log ;
        
    }
});
