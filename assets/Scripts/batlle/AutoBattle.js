cc.Class({
    extends: cc.Component,
  
    properties: {
        roundDetal:0.1,//一回合间隔
        downTime:9,//每回合开始的倒计时时间
        runTime:0, //上一回合时间
        round:0,//当前回合数,
        currentDownTime:0,//当前倒计时时间 当倒计时时间为0时开始战斗战斗结束后倒计时时间重置
        secondTimer:0,
        reportUI:
        {
            type:cc.Node,
            default:null
        }

    },
     

    
    onLoad: function () {
       this.role = {
            name:"星选",
            hp:1000,
            attack:12,
            defend:5
          
      },
        this.monster  =
        {
            name:"祖魔",
            hp:2000,
            attack:10,
            defend:4
        },
        this.battleReset();
        this.reportCode = this.reportUI.getComponent("BattleReport");
        console.log("战斗开始");
        this.reportCode.appendLog("战斗开始");
    },

    //搜索怪物信息
    searchBattle:function()
    {   
        


    },

    //搜索怪物结束开始战斗 //直接开始战斗
    startBattle:function()
    {



    },

    battleReset:function()
    {
        this.currentDownTime = 9 ;
        this.round = 0 ;
        this.secondTimer = 0 ;
    },


    update:function(t)
    {
    //   console.log("战斗开始" + t);
       this.secondTimer += t ;
       let msg = "[{0}]{1}使用普攻对{2}造成{3}点伤害";
       if(this.secondTimer >= 1 && this.currentDownTime > 0)
       {
           this.currentDownTime -= 1 ;
           let leftTime = parseInt(this.currentDownTime);
            console.log("正在寻找怪物:"+leftTime);
            this.reportCode.appendLog("正在寻找怪物:"+leftTime);
            return ;
        }
       if(this.secondTimer >= 1)
       {
           console.log("战斗开始");
            this.round ++ ;
            this.roleAttack();
            this.monsterAttack();
            this.secondTimer = 0 ;
       }

    },

    roleAttack:function()
    {
       var  hurt = this.role.attack - this.monster.defend ;
       hurt = this.monster.hp>hurt ? hurt : this.monster.hp ;
       hurt = hurt < 0 ? 1 : hurt ;
       this.monster.hp -= hurt ;
       console.log(this.role.name + "使用普攻对"+this.monster.name + "造成"+ hurt + "点伤害!"); 
         this.reportCode.appendLog(this.role.name + "使用普攻对"+this.monster.name + "造成"+ hurt + "点伤害!");
        if(this.monster.hp < 0)
        {
            console.log(this.monster.name + "被击败，战斗胜利");
            this.battleReset();
        }
    },

    monsterAttack:function()
    {
        var  hurt = this.monster.attack - this.role.defend ;
       hurt = this.monster.hp>hurt ? hurt : this.monster.hp ;
       hurt = hurt < 0 ? 1 : hurt ;
       this.role.hp -= hurt ;
       console.log(this.monster.name + "使用普攻对"+this.role.name + "造成"+ hurt + "点伤害!");
       this.reportCode.appendLog(this.monster.name + "使用普攻对"+this.role.name + "造成"+ hurt + "点伤害!");
        if(this.role.hp < 0)
        {
             console.log(this.role.name + "被击败，战斗失败，大侠请重新再来！");
             this.battleReset();

        }
   
    },


    


    substring:function(txt,...rest)
    {
        let len = args.length ;
        

    }

   

});
