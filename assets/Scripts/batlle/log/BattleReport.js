cc.Class({
    extends: cc.Component,

    properties: {
        logPrefab:
        {
            default:null,
            type:cc.Prefab
        },
        scrollview:
        {
            default:null,
            type:cc.ScrollView
        },
        totalCount:0,
        reports:[]
    },
    
    

    onLoad: function () {
        this.reports = [];
    },
    
    appendLog:function($log)
    {
        this.reports.push($log);
        let log = cc.instantiate(this.logPrefab);
        let logCode = log.getComponent("SingleLog");
        logCode.setData($log);
        this.scrollview.content.addChild(log);
    }

    
});
