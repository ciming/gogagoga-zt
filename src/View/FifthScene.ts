///<reference path="component/Common.ts" />
///<reference path="component/FIfth.ts" />
class FifthScene extends eui.UILayer {
	private static shared: FifthScene;
    public static Shared() {
        if(FifthScene.shared == null) {
            FifthScene.shared = new FifthScene();
        }
        return FifthScene.shared;
    }
	private background: eui.Image;
    private stageW: number;
    private stageH: number;
	private firstCarton: eui.Image;
	private secondCarton: eui.Image;
	private thirdCarton: eui.Image;
	private fourthCarton: eui.Image;
	private fifthCarton: eui.Image;
	private cartoncX:number;
	private cartoncY:number;
	private offsetX:number;
    private offsetY:number;
	private wastebin: eui.Image;
	private text: eui.Image;
	private tip: eui.Group;
	public constructor() {
		super();
		this.alpha = 0;
        this.stageW = egret.MainContext.instance.stage.stageWidth;
        this.stageH = egret.MainContext.instance.stage.stageHeight;
		this.background = new Background('stage2-bg_png');
		this.firstCarton = new FirstCarton();
		this.secondCarton = new SecondCarton();
		this.thirdCarton = new ThirdCarton();
		this.fourthCarton = new FourthCarton();
		this.fifthCarton = new FifthCarton();
		this.wastebin = new Wastebin();
		this.text = new FifthTxt();
		this.tip = new FifthTip();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.createView,this);
	}
	private createView():void {
        this.addChild(this.background);
        let fifthSceneWt = egret.Tween.get(this);
        fifthSceneWt
            .to({alpha:1},1000)
            .call(()=>{
				this.parent.removeChildAt(1);
				this.setFirstCarton();
            })
		
    }
	/**
	 * 设置第一个纸盒
	 */
	private setFirstCarton():void {
		this.addChild(this.firstCarton);
		let cartonTw = egret.Tween.get(this.firstCarton);
		cartonTw
			.to({alpha:1},500)
			.wait(800)
			.call(()=>{
				this.setSecondCarton();
			})
			.to({alpha:0},300)
			.call(()=>{
				this.removeChild(this.firstCarton);
			})
	}
	/**
	 * 设置第二个纸盒
	 */
	private setSecondCarton():void {
		this.addChild(this.secondCarton);
		let cartonTw = egret.Tween.get(this.secondCarton);
		cartonTw
			.to({alpha:1},500)
			.wait(800)
			.call(()=>{
				this.setThirdCarton();
			})
			.to({alpha:0},300)
			.call(()=>{
				this.removeChild(this.secondCarton);
			})
	}
	/**
	 * 设置第三个纸盒
	 */
	private setThirdCarton():void {
		this.addChild(this.thirdCarton);
		let cartonTw = egret.Tween.get(this.thirdCarton);
		cartonTw
			.to({alpha:1},500)
			.wait(800)
			.call(()=>{
				this.setFourthCarton();
			})
			.to({alpha:0},300)
			.call(()=>{
				this.removeChild(this.thirdCarton);
			})
	}
	/**
	 * 设置第四个纸盒
	 */
	private setFourthCarton():void {
		this.addChild(this.fourthCarton);
		let cartonTw = egret.Tween.get(this.fourthCarton);
		cartonTw
			.to({alpha:1},500)
			.wait(800)
			.call(()=>{
				this.setFifthCarton()
			})
			.to({alpha:0},300)
			.call(()=>{
				this.removeChild(this.fourthCarton);
			})
	}
	/**
	 * 设置第五个纸盒
	 */
	private setFifthCarton():void {
		this.addChild(this.fifthCarton);
		let cartonTw = egret.Tween.get(this.fifthCarton);
		cartonTw
			.to({alpha:1},800)
			.call(()=>{
				this.fifthCarton.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.startMove,this);
				this.setWastebin();
				this.setText();
			})
	}
	/**
	 * 设置垃圾桶
	 */
	private setWastebin():void{
		this.addChild(this.wastebin);
		this.swapChildren(this.fifthCarton,this.wastebin);
		let wastebinWt = egret.Tween.get(this.wastebin); 
		wastebinWt
			.to({y:1830*this.stageH/2272,alpha:1},1000,egret.Ease.backOut)
	}
	/**
	 * 设置文字
	 */
	private setText():void{
		this.addChild(this.text);
		let textWt = egret.Tween.get(this.text); 
		textWt
			.to({y:628*this.stageH/2272,alpha:1},1000,egret.Ease.backOut)
			.call(()=>{
				this.setTip();
			})
	}
	/**
	 * 设置提示
	 */
	private setTip():void{
		this.addChild(this.tip);
		let tipWt = egret.Tween.get(this.tip);
		tipWt
			.wait(1000)
			.to({alpha:1},1000)
			.call(()=>{
				tipWt =  egret.Tween.get(this.tip,{loop:true});
				tipWt
					.to({alpha:.5},1500)
					.to({alpha:1},1500);
			})
	}
	/**
	 * 开始拖动
	 */
	private startMove(event:egret.TouchEvent):void {
		let oragne = event.target;
		if(this.tip.stage){
			this.removeChild(this.tip);
		}
        this.offsetX = event.stageX - oragne.x;
        this.offsetY = event.stageY - oragne.y;
		this.fifthCarton.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.move,this);
    	this.fifthCarton.addEventListener(egret.TouchEvent.TOUCH_END,this.endMove,this);
	}
	/**
	 * 移动
	 */
	private move(event:egret.TouchEvent): void {
		this.fifthCarton.y = event.stageY - this.offsetY;
		let isHit:boolean = this.wastebin.hitTestPoint( this.stageW/2, this.fifthCarton.y);
		if(isHit){
			this.fifthCarton.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.move,this);
			let fifthCartonWt = egret.Tween.get(this.fifthCarton);
			fifthCartonWt
				.to({y:2020*this.stageH/2272,alpha:0},1000)
				.call(()=>{
					this.removeChild(this.fifthCarton);
				})
				.call(()=>{
					this.nextScene()
				})
		}
	}
	/**
	 * 移动结束
	 */
	private endMove(): void {
		this.fifthCarton.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.move,this);
    	this.fifthCarton.removeEventListener(egret.TouchEvent.TOUCH_END,this.endMove,this);
	}
	/**
	 * 下一个场景
	 */
	private nextScene():void{
         this.parent.addChildAt(new SixthScene(),2);
    }
}