/**
 * 小果盒
 */
class GuoHeS extends eui.Group{
    private stageW: number;
    private stageH: number;
    public gh: eui.Image;
    public bg: eui.Image;
	public constructor() {
		super()
		this.stageW = egret.MainContext.instance.stage.stageWidth;
        this.stageH = egret.MainContext.instance.stage.stageHeight;
		this.createView();
	}
    private createView(){
        this.width= 450.0*this.stageH/2272;
        this.height= 174.0*this.stageH/2272;
        this.anchorOffsetX = this.width/2;
        this.anchorOffsetY = this.height;
        this.x = this.stageW/2 - 452.0*this.stageH/2272;
        this.bg = new eui.Image()
        this.bg.texture = RES.getRes("gh-bg_png");
        this.bg.alpha = 0;
        this.bg.width = 450.0*this.stageH/2272;
        this.bg.height = 168.0*this.stageH/2272;
        this.addChild(this.bg);

        this.gh = new eui.Image();
        this.gh.texture = RES.getRes("gh2_png");
        this.gh.width = 327.0*this.stageH/2272;
        this.gh.height = 111.0*this.stageH/2272;
        this.gh.anchorOffsetX = this.gh.width/2;
        this.gh.anchorOffsetY = this.gh.height;
        this.gh.x = 225.0*this.stageH/2272;
        this.gh.y = 174.0*this.stageH/2272;
        this.addChild(this.gh);
        
    }
}
/**
 * 场景4文字
 */
class FourthTxt extends eui.Image{
	private stageW: number;
    private stageH: number;
	public constructor() {
		super()
		this.stageW = egret.MainContext.instance.stage.stageWidth;
        this.stageH = egret.MainContext.instance.stage.stageHeight;
		this.texture = RES.getRes("stage4-txt1_png");
		this.width = 684.0*this.stageH/2272;
        this.height = 250.0*this.stageH/2272;
        this.anchorOffsetX = this.width/2;
        this.anchorOffsetY = 0;
        this.x =this.stageW/2;
		this.alpha = 0;
        this.y = 2272*this.stageH/2272;;
	}
}