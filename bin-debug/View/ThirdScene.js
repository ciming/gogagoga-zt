var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
///<reference path="component/Common.ts" />
///<reference path="component/Third.ts" />
///<reference path="FourthScene.ts" />
var ThirdScene = (function (_super) {
    __extends(ThirdScene, _super);
    function ThirdScene() {
        var _this = _super.call(this) || this;
        _this.time = 0;
        _this.alpha = 0;
        _this.stageW = egret.MainContext.instance.stage.stageWidth;
        _this.stageH = egret.MainContext.instance.stage.stageHeight;
        _this.background = new Background('stage2-bg_png');
        _this.guohe = new Guohe();
        _this.text = new ThirdTxt();
        _this.text2 = new ThirdTxt2();
        _this.basket = new Basket();
        _this.tip = new ThirdTip();
        _this.card = new CardUI();
        _this.cardBg = new CardBgUI();
        _this.nextBtn = new NextBut();
        _this.oranges = new ThirdOrange();
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.createView, _this);
        return _this;
    }
    ThirdScene.Shared = function () {
        if (ThirdScene.shared == null) {
            ThirdScene.shared = new ThirdScene();
        }
        return ThirdScene.shared;
    };
    ThirdScene.prototype.createView = function () {
        var _this = this;
        this.addChild(this.background);
        var thirdSceneWt = egret.Tween.get(this);
        thirdSceneWt
            .to({ alpha: 1 }, 1000)
            .call(function () {
            _this.parent.removeChildAt(1);
            _this.setGuohe();
        });
    };
    /**
     * 设置果盒
     */
    ThirdScene.prototype.setGuohe = function () {
        var _this = this;
        this.addChild(this.guohe);
        var guoheTw = egret.Tween.get(this.guohe);
        guoheTw
            .to({ y: 1828.0 * this.stageH / 2272 }, 1500, egret.Ease.sineOut)
            .call(function () {
            _this.setTxt();
            _this.setDragArea();
        });
    };
    /**
     * 设置文字
     */
    ThirdScene.prototype.setTxt = function () {
        var _this = this;
        this.addChild(this.text);
        var textTw = egret.Tween.get(this.text);
        textTw
            .to({ alpha: 1 }, 1000)
            .call(function () {
            _this.setBasket();
        });
    };
    /**
     * 设置篮子
     */
    ThirdScene.prototype.setBasket = function () {
        var _this = this;
        this.addChild(this.basket);
        var basketWt = egret.Tween.get(this.basket)
            .to({ y: 2057 * this.stageH / 2272 }, 400)
            .wait(500)
            .call(function () {
            _this.setTip();
            _this.setOrage();
        });
    };
    /**
     * 设置橘子
     */
    ThirdScene.prototype.setOrage = function () {
        this.addChild(this.oranges);
        var orageWt = egret.Tween.get(this.oranges);
        orageWt
            .to({ alpha: 1, y: 2140 * this.stageH / 2272 }, 1000, egret.Ease.backOut);
        this.oranges.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.startMove, this);
    };
    /**
     * 设置提示
     */
    ThirdScene.prototype.setTip = function () {
        var _this = this;
        this.tip.alpha = 0;
        this.addChild(this.tip);
        var tipTw = egret.Tween.get(this.tip);
        tipTw
            .wait(1000)
            .to({ alpha: 1 }, 1000)
            .call(function () {
            tipTw = egret.Tween.get(_this.tip, { loop: true });
            tipTw
                .to({ alpha: .3 }, 1000)
                .to({ alpha: 1 }, 1000);
        });
    };
    /**
     * 开始移动
     */
    ThirdScene.prototype.startMove = function (event) {
        this.offsetX = event.stageX - this.oranges.x;
        this.offsetY = event.stageY - this.oranges.y;
        if (this.tip.stage) {
            this.removeChild(this.tip);
        }
        this.oranges.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMove, this);
        this.oranges.addEventListener(egret.TouchEvent.TOUCH_END, this.stopMove, this);
    };
    /**
     * 移动事件
     */
    ThirdScene.prototype.onMove = function (event) {
        var oragne = event.target;
        oragne.x = event.stageX - this.offsetX;
        oragne.y = event.stageY - this.offsetY;
    };
    /**
     * 结束移动
     */
    ThirdScene.prototype.stopMove = function (event) {
        var _this = this;
        var oragne = event.target;
        var index = oragne.index;
        var oragneWt = egret.Tween.get(oragne);
        var isHit = this.dragArea.hitTestPoint(oragne.x, oragne.y);
        if (isHit) {
            oragneWt
                .to({ alpha: 0 }, 500)
                .call(function () {
                _this.removeChild(oragne);
            });
            this.addFruit(0, 0);
            var wt = egret.Tween.get(this);
            wt
                .wait(800)
                .call(function () {
                _this.addFruit(1, 1);
            })
                .wait(800)
                .call(function () {
                _this.addFruit(2, 2);
            })
                .wait(500)
                .call(function () {
                _this.setCart();
            });
        }
        else {
            oragneWt
                .to({
                x: this.stageW / 2,
                y: 2120 * this.stageH / 2272,
            }, 500, egret.Ease.backInOut);
        }
        oragne.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMove, this);
    };
    /**
     * 添加碰撞区域
     */
    ThirdScene.prototype.setDragArea = function () {
        this.dragArea = new egret.Shape();
        this.dragArea.graphics.drawRect(107.0 * this.stageH / 2272, 734.0 * this.stageH / 2272, 1060.0 * this.stageH / 2272, 1033.0 * this.stageH / 2272);
        this.dragArea.graphics.endFill();
        this.addChild(this.dragArea);
    };
    /**
     * 添加水果
     */
    ThirdScene.prototype.addFruit = function (index, orangeIndex) {
        var fruits = [{
                width: 319,
                height: 535,
                x: -165,
                y: 780,
                image: "gh-1_png"
            }, {
                width: 399,
                height: 398,
                x: 142,
                y: 742,
                image: "gh-3_png"
            }, {
                width: 431,
                height: 421,
                x: 126,
                y: 890,
                image: "gh-2_png"
            }];
        var fruitUI = new eui.Image();
        fruitUI.texture = RES.getRes(fruits[index].image);
        fruitUI.width = fruits[index].width * this.stageH / 2272.0;
        fruitUI.height = fruits[index].height * this.stageH / 2272.0;
        fruitUI.alpha = 0;
        fruitUI.y = fruits[index].y * this.stageH / 2272.0;
        fruitUI.x = this.stageW / 2 + fruits[index].x * this.stageH / 2272.0;
        this.addChildAt(fruitUI, 4);
        var fruitWt = egret.Tween.get(fruitUI);
        fruitWt
            .to({ alpha: 1 }, 500);
    };
    /**
     * 设置卡片
     */
    ThirdScene.prototype.setCart = function () {
        var _this = this;
        this.addChild(this.card);
        var cardTw = egret.Tween.get(this.card);
        cardTw
            .wait(800)
            .to({ alpha: 1, scaleX: 417.0 / 1280, scaleY: 417.0 / 1280 }, 1500)
            .call(function () {
            _this.card.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.cardTap, _this);
            _this.addChild(_this.cardBg);
            _this.swapChildren(_this.card, _this.cardBg);
            var cardBgTw = egret.Tween.get(_this.cardBg);
            cardBgTw
                .to({ scaleX: 1, scaleY: 1, alpha: 1 }, 500);
            cardTw = egret.Tween.get(_this.card, { loop: true });
            cardTw
                .to({ scaleX: 500.0 / 1280, scaleY: 500.0 / 1280 }, 2000)
                .to({ scaleX: 417.0 / 1280, scaleY: 417.0 / 1280 }, 2000);
        });
    };
    /**
     * 点击卡片事件
     */
    ThirdScene.prototype.cardTap = function () {
        var _this = this;
        this.setBlackBg();
        egret.Tween.removeTweens(this.card);
        var cardWt = egret.Tween.get(this.card);
        cardWt
            .to({ scaleX: 1, scaleY: 1, y: this.stageH / 2 }, 1000, egret.Ease.backInOut)
            .call(function () {
            _this.setSecondTxt();
            _this.setNextBtn();
        });
        var blackBgWt = egret.Tween.get(this.blackBg);
        blackBgWt
            .to({ alpha: 1 }, 1000);
    };
    /**
     * 设置黑色背景
     */
    ThirdScene.prototype.setBlackBg = function () {
        this.blackBg = new egret.Shape();
        this.blackBg.graphics.beginFill(0x000000, .8);
        this.blackBg.graphics.drawRect(0, 0, this.stageW, this.stageH);
        this.blackBg.graphics.endFill();
        this.blackBg.alpha = 0;
        this.addChild(this.blackBg);
        this.swapChildren(this.blackBg, this.card);
    };
    /**
     * 设置第二段文字
     */
    ThirdScene.prototype.setSecondTxt = function () {
        this.addChild(this.text2);
        var text2Tw = egret.Tween.get(this.text2);
        text2Tw
            .to({ alpha: 1, y: 484.0 * this.stageH / 2272 }, 1000);
    };
    /**
     * 设置第按钮
     */
    ThirdScene.prototype.setNextBtn = function () {
        this.nextBtn.y = 1700 * this.stageH / 2272;
        this.addChild(this.nextBtn);
        var nextBtnTw = egret.Tween.get(this.nextBtn);
        nextBtnTw
            .to({ alpha: 1 }, 1000);
        this.nextBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.nextScene, this);
    };
    /**
     * 下一个场景
     */
    ThirdScene.prototype.nextScene = function () {
        this.parent.addChildAt(new FourthScene(), 2);
    };
    return ThirdScene;
}(eui.UILayer));
__reflect(ThirdScene.prototype, "ThirdScene");
//# sourceMappingURL=ThirdScene.js.map