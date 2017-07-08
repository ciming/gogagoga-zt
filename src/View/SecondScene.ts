///<reference path="ThirdScene.ts" />
class SecondScene extends eui.UILayer{
    private static shared: SecondScene;
    public static Shared() {
        if(SecondScene.shared == null) {
            SecondScene.shared = new SecondScene();
        }
        return SecondScene.shared;
    }
    private stageW: number;
    private stageH: number;
    private background: eui.Image;
    private three: eui.Image;
    private sun: eui.Image;
    private cloud: eui.Image;
    private tipGroup: eui.Group;
    private orages= [];
    private pickNum = 0;
    public constructor() {
        super();
        this.alpha = 0;
        this.stageW = egret.MainContext.instance.stage.stageWidth;
        this.stageH = egret.MainContext.instance.stage.stageHeight;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.createView,this);
    }
    /**
     * 加载完成事件
     */
    private createView(): void  {
        this.setBackground();
        this.setSun();
        this.setCloud();
        this.setTree();
        //淡入
        let firstSceneWt = egret.Tween.get(this);
        firstSceneWt
            .to({alpha:1},1000)
            .call(()=>{
                this.parent.removeChildAt(1);
                this.initAnimation();
            })
    }
     /**
     * 设置背景
     */
    private setBackground(): void { 
       this.background = new eui.Image();
       this.background.texture = RES.getRes("stage1-bg_png");
       this.background.horizontalCenter = 0;
       this.background.verticalCenter = 0;
       this.background.percentHeight= 100;
       this.addChild(this.background);
    }
    /**
     * 设置大树
     */
    private setTree(): void {
        this.three = new eui.Image();
        this.three.texture = RES.getRes("tree-3_png");
        this.three.width = 1772.0*this.stageH/2272;
        this.three.height = 1540.0*this.stageH/2272;
        this.three.horizontalCenter = 0;
        this.three.top = 314*this.stageW/1280;
        this.addChild(this.three);
    }
    /**
     * 设置太阳
     */
    private setSun(): void {
        this.sun = new eui.Image;
        this.sun.texture = RES.getRes("sun_png");
        this.sun.width = 377.0*this.stageH/2272;;
        this.sun.height = this.sun.width*377/364;
        this.sun.anchorOffsetX = this.sun.width/2;
        this.sun.anchorOffsetY = this.sun.height/2;
        this.sun.x = this.stageW/2+ 370.0*this.stageH/2272;
        this.sun.alpha = 0;
        this.sun.y = 700.0*this.stageH/2272;
        this.addChild(this.sun);
       
    }
    /**
     * 设置云朵
     */
    private setCloud(): void {
        this.cloud = new eui.Image;
        this.cloud.texture = RES.getRes("cloud_png");
        this.cloud.width = 299.0*this.stageH/2272;
        this.cloud.height = 169.0*this.stageH/2272;
        this.cloud.anchorOffsetX = this.cloud.width/2;
        this.cloud.anchorOffsetY = this.cloud.height/2;
        this.cloud.x = -200*this.stageH/2272;;
        this.cloud.y = 340.0*this.stageH/2272;;
        this.addChild(this.cloud);
    }
    /**
     * 初始动画
     */
    private initAnimation():void {
        let sunWt = egret.Tween.get(this.sun);
        sunWt
            .to({alpha:1},1000)
            .to({ y:267.0*this.stageH/2272},2000,egret.Ease.backOut)
            .call(()=>{
                this.setOrages();
            });
        let cloudWt = egret.Tween.get(this.cloud,{loop: true});
        cloudWt
            .wait(500)
            .to({ x:(1480.0)*this.stageH/2272},17000);
    }
    /**
     * 设置橘子
     */
    private setOrages():void {
        this.addOrage(380,892);
        this.addOrage(690,700);
        this.addOrage(980,1080);
        this.orages.forEach((item,index)=>{
            let orage = this.orages[index];
            let orageTw = egret.Tween.get(orage);
            orageTw
                .wait(index*300)
                .to({scaleX:1,scaleY:1,alpha:1},1200,egret.Ease.backInOut);
            orage["index"] = index
            orage.addEventListener(egret.TouchEvent.TOUCH_TAP,this.pickFruit,this)
        })
        this.setTip();
    }
    /**添加橘子 */
    private  addOrage(x:number,y:number):void {
        let orage = new eui.Image();
        orage.texture = RES.getRes("orage_png");
        orage.width = 265.0* this.stageH/2272;
        orage.height = 267.0 * this.stageH/2272;
        orage.anchorOffsetX = orage.width/2;
        orage.alpha = 0;
        orage.scaleX = 0;
        orage.scaleY = 0;
        orage.anchorOffsetY = orage.height/2;
        orage.x = x*this.stageW/1280;
        orage.y = y*this.stageH/2272;
        this.orages.push(orage);
        this.addChild(orage);
    }
    /**
     * 设置提示
     */
    private setTip():void {
        this.tipGroup = new eui.Group();
        this.tipGroup.height = 150;
        this.tipGroup.alpha = 0;
        this.tipGroup.horizontalCenter = 0;
        this.tipGroup.top = 2040.0*this.stageH/2272;
        //添加箭头
        let arraw = new eui.Image();
        arraw.texture = RES.getRes("arraw-t_png");
        arraw.width = 65.0*this.stageH/2272;
        arraw.height = 101.0*this.stageH/2272;
        arraw.y = 70.0*this.stageH/2272;
        arraw.anchorOffsetX = arraw.width/2;
        arraw.horizontalCenter = 0;
        this.tipGroup.addChild(arraw);
        //添加字体
        let label = new eui.Label();
        label.text = "点击果实放入果盒";
        label.textColor = 0x000000;
        label.horizontalCenter = 0;
        this.tipGroup.addChild(label);
        this.addChild( this.tipGroup );
        let tipTw = egret.Tween.get(this.tipGroup);
        tipTw
            .wait(1500)
            .to({alpha:1},1000)
            .call(()=>{
                tipTw = egret.Tween.get(this.tipGroup,{loop:true});
                tipTw
                    .to({alpha:.3},1000)
                    .to({alpha:1},1000)
            })
    }
    /**
     * 摘水果
     */
    private pickFruit(evet):void{
        let orage = evet.target
        let orageWt = egret.Tween.get(orage);
        orageWt
            .to({alpha:0},1000)
            .call(()=>{
                this.removeChild(orage);
            })
        this.setBlucket(this.pickNum);
        if(this.pickNum==2){
            this.removeChild(this.tipGroup);
            let wt = egret.Tween.get(this);
            wt
                .wait(1000)
                .call(()=>{
                     this.nextScene()
                })
        }
        this.pickNum++;
    }
    /**
     * 设置果桶
     */
    private setBlucket(type:number):void{
        let bucketType = [
            {
                x: -383,
                y: 1730,
                width: 402,
                height:404,
                image: "bucket1_png"
            },{
                x: -188,
                y: 1840,
                width: 402,
                height:404,
                image: "bucket1_png"
            }, {
                x: 225,
                y: 1642,
                width: 222,
                height:223,
                image: "bucket2_png"
            }
        ];
        let bucket = new eui.Image();
        bucket.texture = RES.getRes(bucketType[type].image);
        bucket.width = bucketType[type].width*this.stageH/2272;
        bucket.height = bucketType[type].height*this.stageH/2272;
        bucket.anchorOffsetX = bucket.width/2;
        bucket.anchorOffsetY = bucket.height/2;
        bucket.x = this.stageW/2+bucketType[type].x*this.stageH/2272;
        bucket.y = bucketType[type].y*this.stageH/2272;
        bucket.alpha = 0;
        this.addChild(bucket);
        let bucketWt = egret.Tween.get(bucket);
        bucketWt
            .to({alpha:1},500);
    }
    /**
     * 进入下一个
     */
    private nextScene(): void {
         this.parent.addChildAt(new ThirdScene(),2);
    }
}