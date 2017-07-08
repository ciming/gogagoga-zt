
class Background extends eui.Image {
    private backgroundRes;
    private stageW: number;
    private stageH: number;
    public constructor(bgRes) {
        super();
        this.backgroundRes = bgRes;
        this.stageW = egret.MainContext.instance.stage.stageWidth;
        this.stageH = egret.MainContext.instance.stage.stageHeight;
        this.createView();
    }
    private createView():void {
        this.texture = RES.getRes(this.backgroundRes);
        this.height = this.stageH;
        this.width = 1280.0*this.height/1800;
        this.anchorOffsetX = this.width/2;
		this.anchorOffsetY = this.height/2;
        this.x = this.stageW/2;
        this.y = this.stageH/2;
        
    }
}
/**
 * 继续旅程按钮
 */
class NextBut extends eui.Group {
	private stageW: number;
    private stageH: number;
	public constructor() {
		super();
		this.stageW = egret.MainContext.instance.stage.stageWidth;
        this.stageH = egret.MainContext.instance.stage.stageHeight;
        this.height = 150;
        this.alpha = 0;
		this.horizontalCenter = 0;
        this.top = 1700*this.stageH/2272;
        //添加字体
        let label = new eui.Label();
        label.text = "继续旅程";
        label.textColor = 0xFFFFFF;
        this.addChild(label);
		 //添加箭头
        let arraw = new eui.Image();
        arraw.texture = RES.getRes("arraw-r_png");
        arraw.width = this.stageW*0.079;
        arraw.height = arraw.width*65.0/101;
        this.addChild(arraw);
        var hLayout:eui.HorizontalLayout = new eui.HorizontalLayout();
        hLayout.gap = 10;
        this.layout = hLayout;
	}
}