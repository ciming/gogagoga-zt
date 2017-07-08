/**
 * 果盒类
 */
class Guohe extends eui.Image{
	private stageW: number;
    private stageH: number;
	public constructor() {
		super()
		this.stageW = egret.MainContext.instance.stage.stageWidth;
        this.stageH = egret.MainContext.instance.stage.stageHeight;
		this.texture = RES.getRes("guohe_png");
		this.width = 1270.0*this.stageH/2272;
        this.height = 1825.0*this.stageH/2272;
        this.anchorOffsetX = this.width/2;
        this.anchorOffsetY = this.height;
        this.x =this.stageW/2;
        this.y = 0*this.stageH/2272;
	}
}

/**
 * 场景3文字
 */
class ThirdTxt extends eui.Image{
	private stageW: number;
    private stageH: number;
	public constructor() {
		super()
		this.stageW = egret.MainContext.instance.stage.stageWidth;
        this.stageH = egret.MainContext.instance.stage.stageHeight;
		this.texture = RES.getRes("stage3-txt1_png");
		this.width = 874.0*this.stageH/2272;
        this.height = 342.0*this.stageH/2272;
        this.anchorOffsetX = this.width/2;
        this.anchorOffsetY = this.height/2;
        this.x =this.stageW/2;
		this.alpha = 0;
        this.y = 417*this.stageH/2272;;
	}
}
/**
 * 场景3文字
 */
class ThirdTxt2 extends eui.Image{
	private stageW: number;
    private stageH: number;
	public constructor() {
		super()
		this.stageW = egret.MainContext.instance.stage.stageWidth;
        this.stageH = egret.MainContext.instance.stage.stageHeight;
		this.texture = RES.getRes("stage3-txt2_png");
		this.width = 1009.0*this.stageH/2272;
        this.height = 252.0*this.stageH/2272;
        this.anchorOffsetX = this.width/2;
        this.anchorOffsetY = this.height;
        this.x =this.stageW/2;
		this.alpha = 0;
        this.y = 417*this.stageH/2272;
	}
}
/**
 * 篮子类
 */
class Basket  extends eui.Image{
	private stageW: number;
    private stageH: number;
	public constructor() {
		super()
		this.stageW = egret.MainContext.instance.stage.stageWidth;
        this.stageH = egret.MainContext.instance.stage.stageHeight;
		this.texture = RES.getRes("basket_png");
		this.width = 678.0*this.stageH/2272;
        this.height = 312.0*this.stageH/2272;
        this.anchorOffsetX = this.width/2;
        this.x =this.stageW/2;
        this.y = 2272*this.stageH/2272;
	}
}
/** 第三场景橘子类 */
class ThirdOrange extends eui.Image {
	private stageW: number;
    private stageH: number;
	public constructor() {
		super()
		this.stageW = egret.MainContext.instance.stage.stageWidth;
        this.stageH = egret.MainContext.instance.stage.stageHeight;
		this.addOrange();
		
	}
	private addOrange() {
		this.texture = RES.getRes("third-orange_png");
		this.width = 277.0*this.stageH/2272;
        this.height = 158.0*this.stageH/2272;
        this.anchorOffsetX = this.width/2;
		this.anchorOffsetY = this.height/2;
		this.alpha = 0;
		this.x = this.stageW/2;
		this.y = 1940*this.stageH/2272;
	}
}
/**
 * 第三页提示类
 */
class ThirdTip extends eui.Group {
	private stageW: number;
    private stageH: number;
	public constructor() {
		super()
		
		this.stageW = egret.MainContext.instance.stage.stageWidth;
        this.stageH = egret.MainContext.instance.stage.stageHeight;
		this.top = 1849.0*this.stageH/2272;
		this.horizontalCenter = 0;
        //添加字体
        let label = new eui.Label();
        label.text = "拖动果实放入果盒";
        label.textColor = 0x000000;
        label.horizontalCenter = 0;
        label.y = 115.0*this.stageH/2272;
        this.addChild(label);
		let arraw = new eui.Image();
        arraw.texture = RES.getRes("arraw-d_png");
        arraw.width = 65.0*this.stageH/2272;
        arraw.height = 101.0*this.stageH/2272;
        arraw.anchorOffsetX = arraw.width/2;
        arraw.horizontalCenter = 0;
        this.addChild(arraw);
	}
}

/**
 * 卡片类
 */
class CardUI extends eui.Image {
	private stageW: number;
    private stageH: number;
	public constructor() {
		super()
		
		this.stageW = egret.MainContext.instance.stage.stageWidth;
        this.stageH = egret.MainContext.instance.stage.stageHeight;
		this.texture = RES.getRes("card_png");
		this.width = 1278.0*this.stageH/2272;
        this.height = 915.0*this.stageH/2272;
        this.anchorOffsetX = this.width/2;
        this.anchorOffsetY = this.height/2;
		this.alpha = 0;
        this.x =this.stageW/2;
        this.y = 1241.0*this.stageH/2272;
	}
}
/**
 * 卡片背景类
 */
class CardBgUI extends eui.Image {
	private stageW: number;
    private stageH: number;
	public constructor() {
		super()
		
		this.stageW = egret.MainContext.instance.stage.stageWidth;
        this.stageH = egret.MainContext.instance.stage.stageHeight;
		this.texture = RES.getRes("card-bg_png");
		this.width = 672.0*this.stageH/2272;
        this.height = 538.0*this.stageH/2272;
        this.anchorOffsetX = this.width/2;
        this.anchorOffsetY = this.height/2;
        this.x =this.stageW/2;
		this.alpha = 0;
        this.y = 1241.0*this.stageH/2272;
	}
}