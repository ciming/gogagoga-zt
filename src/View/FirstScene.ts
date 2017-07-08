///<reference path="SecondScene.ts" />
class FirstScene extends eui.UILayer {
    private static shared: FirstScene;
    public static Shared() {
        if(FirstScene.shared == null) {
            FirstScene.shared = new FirstScene();
        }
        return FirstScene.shared;
    }
    private stageW: number;
    private stageH: number;
    private background: eui.Image;
    private threeS: eui.Image;
    private threeN: eui.Image;
    private fistTxt: eui.Image;
    private potS: eui.Image;
    private potB: egret.MovieClip
    private tipGroup: eui.Group;
    private wateringTime = 0
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
        this.setThreeS();
        this.setFirstTxt();
        this.setPot();
        this.setTip();
        this.setPotB();
        //淡入
        let firstSceneWt = egret.Tween.get(this);
        firstSceneWt
            .to({alpha:1},1000)
            .call(()=>{
                this.parent.removeChildAt(1);
                this.firstIn();
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
     * 添加小树
     */
    private setThreeS():void{
        this.threeS = new eui.Image();
        this.threeS.texture = RES.getRes("tree-1_png");
        this.threeS.width = 251.0*this.stageW/1280;
        this.threeS.height = this.threeS.width*274.0/251.0;
        this.threeS.anchorOffsetX = this.threeS.width/2;
        this.threeS.anchorOffsetY = this.threeS.height;
        this.threeS.x = this.stageW/2;
        this.threeS.y = this.stageH*0.761;
        this.addChild(this.threeS);
    }
    /**
     * 添加大树
     */
    private setThreeN():void{
        this.threeN = new eui.Image();
        this.threeN.texture = RES.getRes("tree-2_png");
        this.threeN.width = 510.0*this.stageW/1280;
        this.threeN.height = this.threeN.width*715.0/510.0;
        this.threeN.anchorOffsetX = this.threeN.width/2;
        this.threeN.anchorOffsetY = this.threeN.height;
        this.threeN.alpha = 0;
        this.threeN.x = this.stageW/2;
        this.threeN.y = this.stageH*0.761;
        this.addChild(this.threeN);
    }
    /**
     * 设置第一段文字
     */
    private setFirstTxt():void {
        this.fistTxt = new eui.Image();
        this.fistTxt.texture = RES.getRes("stage2-txt1_png");
        this.fistTxt.alpha = 0;
        this.fistTxt.width = 804.0*this.stageH/2272;
        this.fistTxt.height = this.fistTxt.width*342.0/804;
        this.fistTxt.x = this.stageW/2-528.0*this.stageH/2272;
        this.fistTxt.y = 0;
        this.alpha = 0;
        this.addChild( this.fistTxt);
    }
    /**
     * 设置水壶
     */
    private setPot():void{
       this.potS = new eui.Image();
       this.potS.texture = RES.getRes("pot-s_png");
       this.potS.alpha = 0;
       this.potS.width = 238.0*this.stageH/2272;
       this.potS.height = this.potS.width*192.0/238;
       this.potS.anchorOffsetX = this.potS.width/2;
       this.potS.anchorOffsetY = this.potS.height/2;
       this.potS.x = this.stageW/2;
       this.potS.y = 2119.0*this.stageH/2272;
       this.addChild(this.potS);
    }
    /**
     * 设置按钮提示
     */
     private setTip():void {
        this.tipGroup = new eui.Group();
        this.tipGroup.height = 150;
        this.tipGroup.alpha = 0;
        this.tipGroup.x = this.stageW/2+150.0*this.stageH/2272;
        this.tipGroup.y = 2084.0*this.stageH/2272;
        //添加箭头
        let arraw = new eui.Image();
        arraw.texture = RES.getRes("arraw_png");
        arraw.width = this.stageW*0.079;
        arraw.height = arraw.width*65.0/101;
        this.tipGroup.addChild(arraw);
        //添加字体
        let label = new eui.Label();
        label.text = "点击水壶灌溉";
        label.textColor = 0x000000;
        this.tipGroup.addChild(label);
        this.addChild( this.tipGroup );
        var hLayout:eui.HorizontalLayout = new eui.HorizontalLayout();
        hLayout.gap = 10;
        this.tipGroup.layout = hLayout;
     }
     /**
     * 第一段文字进入动画
     */
    private firstIn():void {
        let firstTxtWt = egret.Tween.get(this.fistTxt);
        let potWt = egret.Tween.get(this.potS);
        let tipWt = egret.Tween.get(this.tipGroup);
        firstTxtWt
            .to({alpha:1,y:355.0*this.stageH/2272},2000,egret.Ease.backOut);
            
        potWt
            .wait(2000)
            .to({alpha:1},1000,egret.Ease.backInOut)
            .call(()=>{
                this.potS.addEventListener( egret.TouchEvent.TOUCH_TAP, this.wateringFirst, this );
            })
        tipWt
            .wait(2000)
            .to({alpha:1},1000)
            .call(()=>{
                 tipWt = egret.Tween.get(this.tipGroup,{loop:true});
                 tipWt
                    .to({alpha:0.3},1200)
                    .to({alpha:1},1200)
            })
    }
    /**
     * 设置大水壶
     */
    private setPotB():void {
        let data = RES.getRes("watering_json");
        let txtr = RES.getRes("watering_png");
        
        let potBFactory:egret.MovieClipDataFactory = new egret.MovieClipDataFactory( data, txtr );
        this.potB = new egret.MovieClip( potBFactory.generateMovieClipData( "watering" ) );
        this.potB.scaleX = 408.0/this.stageW;
        this.potB.scaleY = 408.0/this.stageW;
        this.potB.anchorOffsetY = this.potB.height;
        this.potB.y = 1660.0*this.stageH/2272;
        this.potB.x = this.stageW/2- 192.0*this.stageH/2272;
        this.potB.alpha = 0;
        
    }
    /**
     * 第一次浇水
     */
    private wateringFirst(event:egret.Event):void{
         this.potS.removeEventListener( egret.TouchEvent.TOUCH_TAP, this.wateringFirst, this );
        this.setPotB();
        this.addChild(this.potB);
        this.potB.play(-1);
        let wateringTw:egret.Tween = egret.Tween.get(this.potB);
        wateringTw
            .to({alpha:1}, 600)
            .wait(1000)
            .to({alpha:0}, 600)
            .call(()=>{
                this.removeChild(this.potB);
                this.threeGroup();
            });
        //隐藏提示
        let tipGroup:egret.Tween = egret.Tween.get(this.tipGroup);
        tipGroup
            .to({alpha: 0},300)
            .call(()=>{
                this.removeChild(this.tipGroup);
            })
    }
    /**
     * 小树长大
     */
    private threeGroup():void{
        this.setThreeN();
        let threeSTW = egret.Tween.get(this.threeS);
        threeSTW
            .to({alpha:0},1000)
            .call(()=>{
                this.removeChild(this.threeS);
            });
        let threeNTw = egret.Tween.get(this.threeN);
        threeNTw
            .to({alpha:1},1500)
            .call(()=>{
                this.addChild(this.tipGroup);
                let tipWt = egret.Tween.get(this.tipGroup);
                tipWt
                    .wait(3200)
                    .to({alpha:1},1000)
                    .call(()=>{
                        tipWt = egret.Tween.get(this.tipGroup,{loop:true});
                        tipWt
                            .to({alpha:0.3},1200)
                            .to({alpha:1},1200);
                    })
                this.potS.addEventListener( egret.TouchEvent.TOUCH_TAP, this.wateringSecond, this );
            });
    }
    /**
     * 第二次浇水
     */
    private wateringSecond():void{
        this.potS.removeEventListener( egret.TouchEvent.TOUCH_TAP, this.wateringSecond, this );
        this.addChild(this.potB);
        let tipGroup:egret.Tween = egret.Tween.get(this.tipGroup);
        tipGroup
            .to({alpha: 0},300)
            .call(()=>{
                this.removeChild(this.tipGroup);
            })
        let wateringTw:egret.Tween = egret.Tween.get(this.potB);
        wateringTw
            .to({alpha:1}, 600)
            .wait(1000)
            .to({alpha:0}, 600)
            .call(()=>{
                this.nextScene();
            });
        let fistTxtTw = egret.Tween.get(this.fistTxt);
    }
    /**
     * 切换到下一个场景
     */
    private nextScene(): void {
        let firstSecentTw = egret.Tween.get(this);
        firstSecentTw
            .to({alpha:1},1000)
        this.parent.addChildAt(new SecondScene(),2);
    }
}