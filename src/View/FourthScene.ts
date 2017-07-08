///<reference path="component/Common.ts" />
///<reference path="component/Fourth.ts" />
///<reference path="FifthScene.ts" />
class FourthScene extends eui.UILayer {
    private static shared: FourthScene;
    public static Shared() {
        if(FourthScene.shared == null) {
            FourthScene.shared = new FourthScene();
        }
        return FourthScene.shared;
    }
    private stageW: number;
    private stageH: number;
    private background: eui.Image;
    private backgroundBlack: eui.Image;
    private guohe:eui.Group;
    private text:eui.Image;
    private nextBtn: eui.Group;
    private offsetX:number;
    private offsetY:number;
    private drapTip: eui.Label;
    private fisttouch: Boolean;
    public constructor() {
        super();
        this.alpha = 0;
        this.stageW = egret.MainContext.instance.stage.stageWidth;
        this.stageH = egret.MainContext.instance.stage.stageHeight;
        this.background = new Background('stage4-bg_png');
        this.backgroundBlack = new Background('stage4-bg2_png');
        this.guohe = new GuoHeS();
        this.text = new FourthTxt();
        this.nextBtn = new NextBut();
        this.fisttouch = false;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.createView,this);
    }
     private createView():void {
        this.addChild(this.backgroundBlack);
        let fourthSceneWt = egret.Tween.get(this);
        fourthSceneWt
            .to({alpha:1},1000)
            .call(()=>{
                this.parent.removeChildAt(1);
                this.setGuohe()
            })
    }
    /**
     * 设置果盒
     */
    private setGuohe(): void{
        this.addChild(this.guohe);
        let guoheWt = egret.Tween.get(this.guohe);
        guoheWt
            .to({y:1137.0*this.stageH/2272},1400,egret.Ease.sineInOut)
            .call(()=>{
                this.addChildAt(this.background,1);
                this.setColorbg("left");
                this.setGuoheAnimation();
                this.setDrapTip();
            });
        this.guohe.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.startMove,this);
    }
    /**
     * 添加提示
     */
    private setDrapTip(){
        this.drapTip = new eui.Label;
        this.drapTip.alpha = 0;
        this.drapTip.text = "拖动果盒到右边》";
        this.drapTip.anchorOffsetX = this.drapTip.width/2;
        this.drapTip.y= 1245.0*this.stageH/2272;
         this.drapTip.x = this.stageW/2;
        this.drapTip.textColor = 0xffffff;
        this.addChild( this.drapTip);
        let tw = egret.Tween.get(this.drapTip);
        tw
            .to({alpha:1},1000)
            .call(()=>{
                tw = egret.Tween.get(this.drapTip,{loop:true});
                tw
                    .to({alpha:0,x:this.stageW/2+50*this.stageH/2272},1500)
            })

    }
    /**
	 * 开始拖动
	 */
	private startMove(event:egret.TouchEvent):void {
        this.offsetX = event.stageX - this.guohe.x;
        this.offsetY = event.stageY - this.guohe.y;
        if(this.drapTip.stage){
            this.removeChild(this.drapTip);
        }
		this.guohe.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.move,this);
    	this.guohe.addEventListener(egret.TouchEvent.TOUCH_END,this.endMove,this);
	}
	/**
	 * 移动
	 */
	private move(event:egret.TouchEvent): void {
		this.guohe.x = event.stageX - this.offsetX;
        if(this.guohe.x<0){
            this.guohe.x = 0;
        } 
        if(this.guohe.x>this.stageW){
            this.guohe.x = this.stageW;
        }
        if(this.guohe.x> this.stageW/2){
            this.setColorbg("right")
            if(!this.fisttouch){
                this.setText();
                this.fisttouch = true;
            }
        } else{
             this.setColorbg("left")
        }
	}
    /**
	 * 移动结束
	 */
	private endMove(): void {
         if(this.guohe.x> this.stageW/2){
            this.setColorbg("right")
        } else{
             this.setColorbg("left")
        }
		this.guohe.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.move,this);
    	this.guohe.removeEventListener(egret.TouchEvent.TOUCH_END,this.endMove,this);
	}
    /**
     * 果盒动画
     */
    private setGuoheAnimation() {
        let bgTw = egret.Tween.get(this.guohe.getChildAt(0),{loop:true});
        bgTw
            .to({alpha:1},500)
            .wait(500)
            .to({alpha:0},500)
        
    }
    /**
     * 场景变换
     */
    private setColorbg(direction):void {
        let  maskUI;
        if(direction === 'left'){
            maskUI = new egret.Rectangle(0,0,this.background.width/2,this.stageH);  
        } else {
            maskUI = new egret.Rectangle(0,0,this.background.width,this.stageH);  
        }
        this.background.alpha=0
        this.background.mask = maskUI;
        let bgTw = egret.Tween.get(this.background);
        bgTw
            .to({alpha:1});
    }
    /**
     * 设置文字
     */
    private setText():void {
        this.addChild(this.text);
        let textTw = egret.Tween.get(this.text);
        textTw
            .wait(200)
            .to({y:1739.0*this.stageH/2272,alpha:1},1500,egret.Ease.backInOut)
            .wait(200)
            .call(()=>{
                this.setNextBtn();
            })
    }
    /**
     * 下一页按钮
     */
    private setNextBtn():void {
        this.nextBtn.top = 2106*this.stageH/2272;
        this.addChild(this.nextBtn);
        let nextBtnTw =  egret.Tween.get(this.nextBtn);
        nextBtnTw
            .to({alpha:1},800)
            .call(()=>{
                this.nextBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.nextScene,this)
            });
    }
    private nextScene():void{
         this.parent.addChildAt(new FifthScene(),2);
    }
}