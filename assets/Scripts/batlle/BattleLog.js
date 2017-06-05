cc.Class({
    extends: cc.Component,

    properties: {
       logData:"",
       logs:[]
    },

    // use this for initialization
    onLoad: function () {
        this.log = this.node.getChildeByName("log");
    },

    //新增一条日志
    appendBattleLog:function(log)
    {
        this.logs.push(log);
        this.logData += log ;
        this.logData += "\n";
    },

    

    
});
