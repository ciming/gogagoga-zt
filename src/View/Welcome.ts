///<reference path="FirstScene.ts" />
class Welcome extends eui.UILayer {
    private static shared: Welcome;
    public static Shared() {
        if(Welcome.shared == null) {
            Welcome.shared = new Welcome();
        }
        return Welcome.shared;
    }
    private stageW: number;
    private stageH: number;
    private background: eui.Image;
    private firstText: eui.Image;
    private secondText: eui.Image;
    private orangeKey: eui.Image;
    private tipGroup: eui.Group;
    private firstTextWt: egret.Tween;
    private secondTextWt: egret.Tween;
    private orangeKeyWt: egret.Tween;
    private tipGroupWt: egret.Tween;
    public constructor() {
        super();
        this.stageW = egret.MainContext.instance.stage.stageWidth;
        this.stageH = egret.MainContext.instance.stage.stageHeight;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.createView,this);
    }
    private createView(): void  {
        this.setBackground();
        this.setFirstText();
        this.setSecondTxt();
        this.setOrangeKey();
        this.setTip();
        this.setAnimation();
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
     * 设置第一段文字
     */
    private setFirstText():void {
        this.firstText = new eui.Image();
        this.firstText.texture = RES.getRes("stage1-txt1_png");
        this.firstText.width =684.0*this.stageH/2272;
        this.firstText.height = 334.0*this.stageH/2272;
        this.firstText.alpha = 0;
        this.firstText.x = this.stageW/2 - 534.0*this.stageH/2272;
        this.firstText.y = 0;
        this.addChild(this.firstText);
    }
    /**
     * 设置第二段文字
     */
    private setSecondTxt():void {
        this.secondText = new eui.Image();
        this.secondText.texture = RES.getRes("stage1-txt2_png")
        this.secondText.width =708.0*this.stageH/2272;
        this.secondText.height = 152.0*this.stageH/2272;
        this.secondText.alpha = 0;
        this.secondText.x = this.stageW/2 -469.0*this.stageH/2272;
        this.secondText.y = this.stageH*0.4423;
         this.addChild(this.secondText);
    }
    /**
     * 设置按钮
     */
    private setOrangeKey():void {
        this.orangeKey = new eui.Image();
        this.orangeKey.texture = RES.getRes("orange-key_png");
        this.orangeKey.width =240.0*this.stageH/2272;
        this.orangeKey.height = 220.0*this.stageH/2272;
        this.orangeKey.x =this.stageW/2 -506.0*this.stageH/2272;
        this.orangeKey.y = this.stageH*0.707;
        this.orangeKey.alpha = 0;
        this.addChild(this.orangeKey);
    }
    /**
     * 设置按钮提示
     */
     private setTip():void {
        this.tipGroup = new eui.Group();
        this.tipGroup.height = 150;
        this.tipGroup.alpha = 0;
        this.tipGroup.left = this.stageW*0.398;
        this.tipGroup.top = this.stageH*0.73;
        //添加箭头
        let arraw = new eui.Image();
        arraw.texture = RES.getRes("arraw_png");
        arraw.width = this.stageW*0.079;
        arraw.height = arraw.width*65.0/101;
        this.tipGroup.addChild(arraw);
        //添加字体
        let label = new eui.Label();
        label.text = "点击钥匙开启";
        label.textColor = 0x000000;
        this.tipGroup.addChild(label);
        this.addChild( this.tipGroup );
        var hLayout:eui.HorizontalLayout = new eui.HorizontalLayout();
        hLayout.gap = 10;
        this.tipGroup.layout = hLayout;
     }
     /**
      * 设置动画
      */
    private setAnimation():void {
        //第一段文字动画
        this.firstTextWt = egret.Tween.get(this.firstText);
        this.firstTextWt
            .to({y:this.stageH*0.156,alpha:1},2000,egret.Ease.backOut)
        //第二段文字动画
        this.secondTextWt = egret.Tween.get(this.secondText);
        this.secondTextWt
            .wait(1500)
            .to({y:this.stageH*0.579,alpha:1},2000,egret.Ease.backOut);

        //设置OrangeKey动画
        this.orangeKeyWt = egret.Tween.get(this.orangeKey);
        this.orangeKeyWt
            .wait(3000)
            .to({alpha:1},1000)
            .call(()=>{
                 this.orangeKey.addEventListener( egret.TouchEvent.TOUCH_TAP, this.nextScene, this );
            });
        //设置tipGroup动画
        this.tipGroupWt = egret.Tween.get(this.tipGroup);
        this.tipGroupWt
            .wait(3000)
            .to({alpha:1},1000)
            .call(()=>{
                 this.tipGroupWt = egret.Tween.get(this.tipGroup,{loop:true});
                 this.tipGroupWt
                    .to({alpha:0.6},1200)
                    .to({alpha:1},1200)
            })
    }
    private nextScene(event:egret.Event):void{
        this.orangeKey.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.nextScene, this);
        this.parent.addChildAt(new FirstScene(),2);
    }
}