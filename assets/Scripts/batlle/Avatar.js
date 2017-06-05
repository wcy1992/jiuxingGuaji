cc.Class({
    extends: cc.Component,

    properties: {
      action:1 ,    //动作
      speed:1,      //速度
      frameCount:4, //当前动画帧数
    },


    // use this for initialization
    onLoad: function () {
        this.initPlayerWithType(1, 1, "stand");
    },



      //更换皮肤
    initPlayerWithType:function(type,formation,defaultAction)
    {
        var url = "role/stand";
        this.initPlayerWithUrl(url,defaultAction);
    },

       //更换皮肤
    initPlayerWithUrl:function(url,defaultAction)
    {
        let self = this ;
        if(url === undefined || url === "")
        {
            url = "role/stand" ;
        }
        self.animation = self.getComponent(cc.Animation);
        self.animation.active = true ;
        cc.loader.loadRes(url, cc.SpriteAtlas, (err, atlas) => {
        self.heroAtlas = atlas ;
        self.node.emit("loadComplete"); //通知资源加载完成
        self.play(defaultAction,4);
            console.log('loadComplete:' + url);
     });

    },

    //创建以key为截点的动画
    createAnimationClips:function(key,frameCount)
    {
        var frame = [];
        for(var i = 1; i <= frameCount ; i ++)
        {
            console.log(key);
            var spriteFrame =  this.heroAtlas.getSpriteFrame(key + i);
            frame.push(spriteFrame);
        }
        var clip = cc.AnimationClip.createWithSpriteFrames(frame,frameCount);
        clip.name = key ;
        clip.wrapMode = cc.WrapMode.Loop;
        this.animation.addClip(clip);
    },

    //播放相应动画
    play:function(key,framecount)
    {
        this.frameCount = framecount ;
        if(!this.animation._nameToState[key])
        {
            this.createAnimationClips(key,framecount);
        }
        this.animation.play(key);
    },

  
});
