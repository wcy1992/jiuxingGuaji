cc.Class({
    extends: cc.Component,

    properties: {
        battleSpeed:1,
    },

    

    //初始化战斗
    onLoad: function () {
        this.fightPanel = cc.find("Canvas/FightPanel");
        this.battleLog = cc.find("Canvas/BattleLog");
    },

    //初始化战斗配置 
    initBattle:function()
    {       
        this.battleSpeed = 1 ;
    },

    
    //获取玩家队伍
    getRoleTeam:function()
    {

    },

    //获取敌方队伍
    getArmyTeam:function()
    {


    },


    //更新游戏显示
    update:function()
    {   

        
    }
    

});
