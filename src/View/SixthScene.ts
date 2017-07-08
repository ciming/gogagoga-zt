///<reference path="component/Common.ts" />
class SixthScene extends eui.UILayer {
	private static shared: SixthScene	;
    public static Shared() {
        if(SixthScene.shared == null) {
            SixthScene.shared = new SixthScene();
        }
        return SixthScene.shared;
    }
    private stageW: number;
    private stageH: number;
	private background: eui.Image;
	private text: eui.Image;
	private shareBtn: eui.Image;
	private replayBtn: eui.Image;
	private shareMask: eui.Group;
	public constructor() {
		super();
		this.alpha = 0;
        this.stageW = egret.MainContext.instance.stage.stageWidth;
        this.stageH = egret.MainContext.instance.stage.stageHeight;
        this.background = new Background('stage6-bg_png');
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.createView,this);
		
	}
	private createView():void {
        this.addChild(this.background);
		this.setText();
		this.setShareBtn();
		this.setReplayBtn();
		this.setShareMask();
        let fifthSceneWt = egret.Tween.get(this);
        fifthSceneWt
            .to({alpha:1},1000)
			.call(()=>{
				this.parent.removeChildAt(1);
			})
		
    }
	/**
	 * 设置文字
	 */
	private setText() {
		this.text = new eui.Image();
		this.text.texture = RES.getRes("stage6-txt1_png");
		this.text.width = 1172.0*this.stageH/2272;
        this.text.height = 559.0*this.stageH/2272;
		this.text.anchorOffsetX = this.width/2;
        this.text.horizontalCenter = 0;
        this.text.y = 355.0*this.stageH/2272;	
		this.addChild(this.text)
	}
	/**
	 * 设置按钮1
	 */
	private setShareBtn () {
		this.shareBtn = new eui.Image();
		this.shareBtn.texture = RES.getRes("shareBtn_png");
		this.shareBtn.width = 682.0*this.stageH/2272;
        this.shareBtn.height = 202.0*this.stageH/2272;
		this.shareBtn.anchorOffsetX = this.shareBtn.width/2;
        this.shareBtn.horizontalCenter = 0;
        this.shareBtn.y = 1080.0*this.stageH/2272;	
		this.addChild(this.shareBtn);
		this.shareBtn.addEventListener( egret.TouchEvent.TOUCH_TAP, this.showMaks, this)
	}
	/**
	 * 设置按钮2
	 */
	private setReplayBtn () {
		this.replayBtn = new eui.Image();
		this.replayBtn.texture = RES.getRes("replayBtn_png");
		this.replayBtn.width = 682.0*this.stageH/2272;
        this.replayBtn.height = 202.0*this.stageH/2272;
		this.replayBtn.anchorOffsetX = this.replayBtn.width/2;
        this.replayBtn.horizontalCenter = 0;
        this.replayBtn.y = 1257.0*this.stageH/2272;	
		this.addChild(this.replayBtn);
		this.replayBtn.addEventListener( egret.TouchEvent.TOUCH_TAP, this.replay, this)
		
	}
	/**
	 * 显示遮罩
	 */
	private showMaks(){
		this.addChild(this.shareMask);
		let wt = egret.Tween.get(this.shareMask);
		wt
			.to({alpha:1},500)
	}
	/**
	 * 设置分享
	 */
	private setShareMask(){
		this.shareMask = new eui.Group();
		this.shareMask.width = this.stageW;
		this.shareMask.height = this.stageH;
		this.shareMask.alpha = 0;
		let mask = new egret.Shape();
		mask.graphics.beginFill( 0x000000, .7);
        mask.graphics.drawRect( 0, 0, this.stageW, this.stageH );
        mask.graphics.endFill();
		this.shareMask.addChild(mask);
		let shareTip = new eui.Image();
		shareTip.texture = RES.getRes("shareTip_png");
		shareTip.width = 1043.0*this.stageH/2272;
        shareTip.height = 563.0*this.stageH/2272;
		shareTip.anchorOffsetX = shareTip.width/2;
		shareTip.x = this.stageW/2;
        shareTip.y = 97.0*this.stageH/2272;	
		this.shareMask.addChild(shareTip);
		let closeBtn = new  eui.Image();
		closeBtn.texture = RES.getRes("closeBtn_png");
		closeBtn.width = 629.0*this.stageH/2272;
        closeBtn.height = 529.0*this.stageH/2272;
		closeBtn.anchorOffsetX = closeBtn.width/2;
		closeBtn.x = this.stageW/2;
        closeBtn.y = 781.0*this.stageH/2272;	
		this.shareMask.addChild(closeBtn);
		closeBtn.addEventListener( egret.TouchEvent.TOUCH_TAP, this.closeMaks, this)
	}
	/**
	 * 关闭mask
	 */
	private closeMaks(){
		this.removeChild(this.shareMask)
	}
	/**
	 * replay
	 */
	private replay () {
		this.parent.addChildAt(new Welcome(),2);
		this.parent.removeChildAt(1);
	}
}