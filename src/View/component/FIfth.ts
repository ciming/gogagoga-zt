// TypeScript file
/**
 * 第一个纸盒
 */
class FirstCarton extends eui.Image{
    private stageW: number;
    private stageH: number;
    public constructor() {
		super();
		this.alpha = 0;
        this.stageW = egret.MainContext.instance.stage.stageWidth;
        this.stageH = egret.MainContext.instance.stage.stageHeight;
        this.createView();
	}
    private createView():void{
        this.texture = RES.getRes("carton-01_png");
		this.width = 1225.0*this.stageH/2272;
        this.height = 1295.0*this.stageH/2272;
        this.anchorOffsetX = this.width/2;
        this.anchorOffsetY = this.height;
        this.alpha = 0;
        this.x =this.stageW/2;
        this.y = 1517*this.stageH/2272;;
    }
}
/**
 * 第二个纸盒
 */
class SecondCarton extends eui.Image{
    private stageW: number;
    private stageH: number;
    public constructor() {
		super();
		this.alpha = 0;
        this.stageW = egret.MainContext.instance.stage.stageWidth;
        this.stageH = egret.MainContext.instance.stage.stageHeight;
        this.createView();
	}
    private createView():void{
        this.texture = RES.getRes("carton-02_png");
		this.width = 1005.0*this.stageH/2272;
        this.height = 1283.0*this.stageH/2272;
        this.anchorOffsetX = this.width/2;
        this.anchorOffsetY = this.height;
        this.alpha = 0;
        this.x =this.stageW/2;
        this.y = 1517*this.stageH/2272;;
    }
}
/**
 * 第三个纸盒
 */
class ThirdCarton extends eui.Image{
    private stageW: number;
    private stageH: number;
    public constructor() {
		super();
		this.alpha = 0;
        this.stageW = egret.MainContext.instance.stage.stageWidth;
        this.stageH = egret.MainContext.instance.stage.stageHeight;
        this.createView();
	}
    private createView():void{
        this.texture = RES.getRes("carton-03_png");
		this.width = 894.0*this.stageH/2272;
        this.height = 1168.0*this.stageH/2272;
        this.anchorOffsetX = this.width/2;
        this.anchorOffsetY = this.height;
        this.alpha = 0;
        this.x =this.stageW/2;
        this.y = 1415*this.stageH/2272;;
    }
}
/**
 * 第四个纸盒
 */
class FourthCarton extends eui.Image{
    private stageW: number;
    private stageH: number;
    public constructor() {
		super();
		this.alpha = 0;
        this.stageW = egret.MainContext.instance.stage.stageWidth;
        this.stageH = egret.MainContext.instance.stage.stageHeight;
        this.createView();
	}
    private createView():void{
        this.texture = RES.getRes("carton-04_png");
		this.width = 679.0*this.stageH/2272;
        this.height = 1288.0*this.stageH/2272;
        this.anchorOffsetX = this.width/2;
        this.anchorOffsetY = this.height;
        this.alpha = 0;
        this.x =this.stageW/2;
        this.y = 1535*this.stageH/2272;;
    }
}
/**
 * 第五个纸盒
 */
class FifthCarton extends eui.Image{
    private stageW: number;
    private stageH: number;
    public constructor() {
		super();
		this.alpha = 0;
        this.stageW = egret.MainContext.instance.stage.stageWidth;
        this.stageH = egret.MainContext.instance.stage.stageHeight;
        this.createView();
	}
    private createView():void{
        this.texture = RES.getRes("carton-06_png");
		this.width = 678.0*this.stageH/2272;
        this.height = 551.0*this.stageH/2272;
        this.anchorOffsetX = this.width/2;
        this.anchorOffsetY = this.height;
        this.alpha = 0;
        this.x =this.stageW/2;
        this.y = 1396*this.stageH/2272;;
    }
}
/**
 * 垃圾桶
 */
class Wastebin extends eui.Image{
    private stageW: number;
    private stageH: number;
    public constructor() {
		super();
		this.alpha = 0;
        this.stageW = egret.MainContext.instance.stage.stageWidth;
        this.stageH = egret.MainContext.instance.stage.stageHeight;
        this.createView();
	}
    private createView():void{
        this.texture = RES.getRes("wastebin_png");
		this.width = 421.0*this.stageH/2272;
        this.height = 593.0*this.stageH/2272;
        this.anchorOffsetX = this.width/2;
        this.anchorOffsetY = 0;
        this.x =this.stageW/2;
        this.y = this.stageH;
    }
}

/**
 * 场景5文字
 */
class FifthTxt extends eui.Image{
	private stageW: number;
    private stageH: number;
	public constructor() {
		super()
		this.stageW = egret.MainContext.instance.stage.stageWidth;
        this.stageH = egret.MainContext.instance.stage.stageHeight;
		this.texture = RES.getRes("stage5-txt1_png");
		this.width = 806.0*this.stageH/2272;
        this.height = 334.0*this.stageH/2272;
        this.anchorOffsetX = this.width/2;
        this.anchorOffsetY = this.height;
        this.alpha = 0;
        this.x =this.stageW/2;
        this.y = 0
	}
}

/**
 * 第五页提示类
 */
class FifthTip extends eui.Group {
	private stageW: number;
    private stageH: number;
	public constructor() {
		super()
		
		this.stageW = egret.MainContext.instance.stage.stageWidth;
        this.stageH = egret.MainContext.instance.stage.stageHeight;
		this.top = 1648.0*this.stageH/2272;
		this.horizontalCenter = 0;
        //添加字体
		let arraw = new eui.Image();
        arraw.texture = RES.getRes("arraw-d_png");
        arraw.width = 65.0*this.stageH/2272;
        arraw.height = 101.0*this.stageH/2272;
        arraw.anchorOffsetX = arraw.width/2;
        arraw.horizontalCenter = 0;
        arraw.y = 71.0*this.stageH/2272;
        this.addChild(arraw);
        let label = new eui.Label();
        label.text = "将包装盒拖入可回收垃圾桶内";
        label.textColor = 0x000000;
        label.horizontalCenter = 0;
        
        this.addChild(label);
	}
}