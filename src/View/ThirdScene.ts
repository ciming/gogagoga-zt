///<reference path="component/Common.ts" />
///<reference path="component/Third.ts" />
///<reference path="FourthScene.ts" />
class ThirdScene extends eui.UILayer{
    private static shared: ThirdScene;
    public static Shared() {
        if(ThirdScene.shared == null) {
            ThirdScene.shared = new ThirdScene();
        }
        return ThirdScene.shared;
    }
    private stageW: number;
    private stageH: number;
    private background: eui.Image;
    private guohe: eui.Image;
    private text: eui.Image; 
    private text2: eui.Image; 
    private basket: eui.Image;
    private oranges: eui.Image;
    private tip:eui.Group;
    private offsetX:number;
    private offsetY:number;
    private dragArea:egret.Shape;
    private card:eui.Image;
    private cardBg: eui.Image;
    private blackBg: egret.Shape;
    private nextBtn: eui.Group;
   
    private time = 0;
    public constructor() {
        super();
        this.alpha = 0;
        this.stageW = egret.MainContext.instance.stage.stageWidth;
        this.stageH = egret.MainContext.instance.stage.stageHeight;
        this.background = new Background('stage2-bg_png');
        this.guohe = new Guohe();
        this.text = new ThirdTxt();
        this.text2 = new ThirdTxt2();
        this.basket = new Basket();
        this.tip = new ThirdTip();
        this.card = new CardUI();
        this.cardBg = new CardBgUI();
        this.nextBtn = new NextBut();
        this.oranges = new ThirdOrange();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.createView,this);
    }
    private createView():void {
        this.addChild(this.background);
        let thirdSceneWt = egret.Tween.get(this);
        thirdSceneWt
            .to({alpha:1},1000)
            .call(()=>{
                this.parent.removeChildAt(1);
                this.setGuohe();
            })
    }
    /**
     * 设置果盒
     */
    private setGuohe(): void{
       this.addChild(this.guohe);
       let guoheTw = egret.Tween.get(this.guohe);
       guoheTw
        .to({y:1828.0*this.stageH/2272},1500,egret.Ease.sineOut)
        .call(()=>{
             this.setTxt();
             this.setDragArea();
        })
    }
    /**
     * 设置文字
     */
    private setTxt(): void{
        this.addChild(this.text);
        let textTw = egret.Tween.get(this.text);
        textTw
            .to({alpha:1},1000)
            .call(()=>{
                this.setBasket();
                
            })
    }
    /**
     * 设置篮子
     */
    private setBasket():void{
        this.addChild(this.basket);
        let basketWt = egret.Tween.get(this.basket)
            .to({y:2057*this.stageH/2272},400)
            .wait(500)
            .call(()=>{
                this.setTip();
                this.setOrage(); 
            })
    }
    /**
     * 设置橘子
     */
    private setOrage(): void {
        this.addChild(this.oranges);
         let orageWt = egret.Tween.get(this.oranges);
        orageWt
            .to({alpha:1,y:2140*this.stageH/2272}, 1000,egret.Ease.backOut)
        this.oranges.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.startMove,this);
       
    }
    /**
     * 设置提示
     */
    private setTip(): void {
        this.tip.alpha = 0;
        this.addChild(this.tip);
        let tipTw = egret.Tween.get(this.tip);
        tipTw
            .wait(1000)
            .to({alpha:1},1000)
            .call(()=>{
                tipTw = egret.Tween.get(this.tip,{loop:true});
                tipTw
                    .to({alpha:.3},1000)
                    .to({alpha:1},1000)
            })
    }
    /**
     * 开始移动
     */
    private startMove(event:egret.TouchEvent):void {
        this.offsetX = event.stageX - this.oranges.x;
        this.offsetY = event.stageY - this.oranges.y;
        if(this.tip.stage){
            this.removeChild(this.tip);
        }
        this.oranges.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.onMove,this);
        this.oranges.addEventListener(egret.TouchEvent.TOUCH_END,this.stopMove,this);   
    }
    /**
     * 移动事件
     */
    private onMove(event:egret.TouchEvent):void {
        let oragne = event.target;
        oragne.x = event.stageX - this.offsetX;
        oragne.y = event.stageY - this.offsetY;
    }
    /**
     * 结束移动
     */
    private stopMove(event:egret.Event):void {
        let oragne = event.target;
        let index = oragne.index;
        let oragneWt = egret.Tween.get(oragne);
        let isHit:boolean = this.dragArea.hitTestPoint( oragne.x, oragne.y);
        if(isHit ) {
            oragneWt
                .to({alpha:0},500)
                .call(()=>{
                    this.removeChild(oragne);
                })
            this.addFruit(0, 0);
            let wt = egret.Tween.get(this);
            wt
                .wait(800)
                .call(()=>{
                     this.addFruit(1, 1);
                })
                .wait(800)
                .call(()=>{
                     this.addFruit(2, 2);
                })
                .wait(500)
                .call(()=>{
                      this.setCart();
                })
        } else {
            oragneWt
                .to({
                    x: this.stageW/2,
                    y: 2120*this.stageH/2272,
                },500,egret.Ease.backInOut)
        }
        oragne.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.onMove,this);
    }
    /**
     * 添加碰撞区域
     */
    private setDragArea():void {
        this.dragArea= new egret.Shape();
        this.dragArea.graphics.drawRect( 107.0*this.stageH/2272, 734.0*this.stageH/2272, 1060.0*this.stageH/2272, 1033.0*this.stageH/2272 );
        this.dragArea.graphics.endFill();
        this.addChild( this.dragArea );
    }
    /**
     * 添加水果
     */
    private addFruit(index,orangeIndex):void{
        let fruits = [{
            width:319,
            height: 535,
            x: -165,
            y:780,
            image: "gh-1_png"
        },{
            width:399,
            height: 398,
            x: 142,
            y:742,
            image: "gh-3_png"
        },{
            width:431,
            height: 421,
            x: 126,
            y:890,
            image: "gh-2_png"
        }]
        let fruitUI = new eui.Image();
        fruitUI.texture = RES.getRes(fruits[index].image);
        fruitUI.width = fruits[index].width*this.stageH/2272.0;
        fruitUI.height = fruits[index].height*this.stageH/2272.0;
        fruitUI.alpha = 0;
        fruitUI.y = fruits[index].y*this.stageH/2272.0;
        fruitUI.x = this.stageW/2+ fruits[index].x*this.stageH/2272.0
        this.addChildAt(fruitUI,4);
        let fruitWt = egret.Tween.get(fruitUI);
        fruitWt
            .to({alpha:1},500)
    }
    /**
     * 设置卡片
     */
    private setCart():void {
         this.addChild(this.card);
       
        let cardTw = egret.Tween.get(this.card);
        cardTw
            .wait(800)
            .to({alpha:1,scaleX:417.0/1280,scaleY:417.0/1280},1500)
            .call(()=>{
                this.card.addEventListener(egret.TouchEvent.TOUCH_TAP, this.cardTap, this);
                this.addChild(this.cardBg);
                this.swapChildren(this.card,this.cardBg);
                let cardBgTw = egret.Tween.get(this.cardBg);
                cardBgTw          
                    .to({scaleX:1,scaleY:1,alpha:1},500);
                cardTw =  egret.Tween.get(this.card,{loop:true});
                cardTw
                    .to({scaleX:500.0/1280,scaleY:500.0/1280},2000)
                    .to({scaleX:417.0/1280,scaleY:417.0/1280},2000)

            })  
    }
    /**
     * 点击卡片事件
     */
    private cardTap():void{
        this.setBlackBg();
        egret.Tween.removeTweens(this.card);
        let cardWt = egret.Tween.get(this.card);
        cardWt
            .to({scaleX:1,scaleY:1,y:this.stageH/2},1000,egret.Ease.backInOut)
            .call(()=>{
                this.setSecondTxt();
                this.setNextBtn();
            })
        let blackBgWt = egret.Tween.get(this.blackBg);
        blackBgWt
            .to({alpha:1},1000);
        
    }
    /**
     * 设置黑色背景
     */
    private setBlackBg():void {
        this.blackBg = new egret.Shape();
        this.blackBg.graphics.beginFill( 0x000000, .8);
        this.blackBg.graphics.drawRect( 0,0, this.stageW, this.stageH );
        this.blackBg.graphics.endFill();
        this.blackBg.alpha = 0;
        this.addChild(this.blackBg);
        this.swapChildren(this.blackBg,this.card);
    }
    /**
     * 设置第二段文字
     */
    private setSecondTxt():void{
        this.addChild(this.text2);
        let text2Tw = egret.Tween.get(this.text2);
        text2Tw
            .to({alpha:1,y:484.0*this.stageH/2272},1000);
    }
    /**
     * 设置第按钮
     */
    private setNextBtn():void {
        this.nextBtn.y = 1700*this.stageH/2272;
        this.addChild(this.nextBtn);
        let nextBtnTw =  egret.Tween.get(this.nextBtn);
        nextBtnTw
            .to({alpha:1},1000);
        this.nextBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.nextScene,this)
    }
    /**
     * 下一个场景
     */
    private nextScene():void{
         this.parent.addChildAt(new FourthScene(),2);
    }
}