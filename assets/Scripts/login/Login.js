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
        cc.app = {};
        var BagModule = require("BagModule");
        var BattleModule = require("BattleModule");
        var DataModule = require("DataModule");
        var EquipModule = require("EquipModule");
        var PetModule = require("PetModule");
        var SkillModule = require("SkillModule");
        cc.app.bag = new BagModule();
        cc.app.battle = new BattleModule();
        cc.app.data = new DataModule();
        cc.app.equip = new EquipModule();
        cc.app.pet =  new PetModule();
        cc.app.skill = new SkillModule();
    }

});
