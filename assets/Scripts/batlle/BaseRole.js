cc.Class({
    extends: cc.Component,

    properties: {
       team:1, //队伍类型
     formation1: {
            default: null,
            type: cc.Node
        },
       formation2: {
            default: null,
            type: cc.Node
        }        
    },


    onLoad: function () {
        this.blood = this.node.getChildByName("blood");
        this.nameBar = this.node.getChildByName("nameBar");
        this.checkTeam();
    },


    //检查当前队伍类型
    checkTeam:function()
    {
        let bool = Boolean(this.team === 1);
        this.formation1.active = bool ;
        this.formation2.active = !bool ;  
    },
});
