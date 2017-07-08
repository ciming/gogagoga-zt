var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
///<reference path="SecondScene.ts" />
var FirstScene = (function (_super) {
    __extends(FirstScene, _super);
    function FirstScene() {
        var _this = _super.call(this) || this;
        _this.wateringTime = 0;
        _this.alpha = 0;
        _this.stageW = egret.MainContext.instance.stage.stageWidth;
        _this.stageH = egret.MainContext.instance.stage.stageHeight;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.createView, _this);
        return _this;
    }
    FirstScene.Shared = function () {
        if (FirstScene.shared == null) {
            FirstScene.shared = new FirstScene();
        }
        return FirstScene.shared;
    };
    /**
     * 加载完成事件
     */
    FirstScene.prototype.createView = function () {
        var _this = this;
        this.setBackground();
        this.setThreeS();
        this.setFirstTxt();
        this.setPot();
        this.setTip();
        this.setPotB();
        //淡入
        var firstSceneWt = egret.Tween.get(this);
        firstSceneWt
            .to({ alpha: 1 }, 1000)
            .call(function () {
            _this.parent.removeChildAt(1);
            _this.firstIn();
        });
    };
    /**
     * 设置背景
     */
    FirstScene.prototype.setBackground = function () {
        this.background = new eui.Image();
        this.background.texture = RES.getRes("stage1-bg_png");
        this.background.horizontalCenter = 0;
        this.background.verticalCenter = 0;
        this.background.percentHeight = 100;
        this.addChild(this.background);
    };
    /**
     * 添加小树
     */
    FirstScene.prototype.setThreeS = function () {
        this.threeS = new eui.Image();
        this.threeS.texture = RES.getRes("tree-1_png");
        this.threeS.width = 251.0 * this.stageW / 1280;
        this.threeS.height = this.threeS.width * 274.0 / 251.0;
        this.threeS.anchorOffsetX = this.threeS.width / 2;
        this.threeS.anchorOffsetY = this.threeS.height;
        this.threeS.x = this.stageW / 2;
        this.threeS.y = this.stageH * 0.761;
        this.addChild(this.threeS);
    };
    /**
     * 添加大树
     */
    FirstScene.prototype.setThreeN = function () {
        this.threeN = new eui.Image();
        this.threeN.texture = RES.getRes("tree-2_png");
        this.threeN.width = 510.0 * this.stageW / 1280;
        this.threeN.height = this.threeN.width * 715.0 / 510.0;
        this.threeN.anchorOffsetX = this.threeN.width / 2;
        this.threeN.anchorOffsetY = this.threeN.height;
        this.threeN.alpha = 0;
        this.threeN.x = this.stageW / 2;
        this.threeN.y = this.stageH * 0.761;
        this.addChild(this.threeN);
    };
    /**
     * 设置第一段文字
     */
    FirstScene.prototype.setFirstTxt = function () {
        this.fistTxt = new eui.Image();
        this.fistTxt.texture = RES.getRes("stage2-txt1_png");
        this.fistTxt.alpha = 0;
        this.fistTxt.width = 804.0 * this.stageH / 2272;
        this.fistTxt.height = this.fistTxt.width * 342.0 / 804;
        this.fistTxt.x = this.stageW / 2 - 528.0 * this.stageH / 2272;
        this.fistTxt.y = 0;
        this.alpha = 0;
        this.addChild(this.fistTxt);
    };
    /**
     * 设置水壶
     */
    FirstScene.prototype.setPot = function () {
        this.potS = new eui.Image();
        this.potS.texture = RES.getRes("pot-s_png");
        this.potS.alpha = 0;
        this.potS.width = 238.0 * this.stageH / 2272;
        this.potS.height = this.potS.width * 192.0 / 238;
        this.potS.anchorOffsetX = this.potS.width / 2;
        this.potS.anchorOffsetY = this.potS.height / 2;
        this.potS.x = this.stageW / 2;
        this.potS.y = 2119.0 * this.stageH / 2272;
        this.addChild(this.potS);
    };
    /**
     * 设置按钮提示
     */
    FirstScene.prototype.setTip = function () {
        this.tipGroup = new eui.Group();
        this.tipGroup.height = 150;
        this.tipGroup.alpha = 0;
        this.tipGroup.x = this.stageW / 2 + 150.0 * this.stageH / 2272;
        this.tipGroup.y = 2084.0 * this.stageH / 2272;
        //添加箭头
        var arraw = new eui.Image();
        arraw.texture = RES.getRes("arraw_png");
        arraw.width = this.stageW * 0.079;
        arraw.height = arraw.width * 65.0 / 101;
        this.tipGroup.addChild(arraw);
        //添加字体
        var label = new eui.Label();
        label.text = "点击水壶灌溉";
        label.textColor = 0x000000;
        this.tipGroup.addChild(label);
        this.addChild(this.tipGroup);
        var hLayout = new eui.HorizontalLayout();
        hLayout.gap = 10;
        this.tipGroup.layout = hLayout;
    };
    /**
    * 第一段文字进入动画
    */
    FirstScene.prototype.firstIn = function () {
        var _this = this;
        var firstTxtWt = egret.Tween.get(this.fistTxt);
        var potWt = egret.Tween.get(this.potS);
        var tipWt = egret.Tween.get(this.tipGroup);
        firstTxtWt
            .to({ alpha: 1, y: 355.0 * this.stageH / 2272 }, 2000, egret.Ease.backOut);
        potWt
            .wait(2000)
            .to({ alpha: 1 }, 1000, egret.Ease.backInOut)
            .call(function () {
            _this.potS.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.wateringFirst, _this);
        });
        tipWt
            .wait(2000)
            .to({ alpha: 1 }, 1000)
            .call(function () {
            tipWt = egret.Tween.get(_this.tipGroup, { loop: true });
            tipWt
                .to({ alpha: 0.3 }, 1200)
                .to({ alpha: 1 }, 1200);
        });
    };
    /**
     * 设置大水壶
     */
    FirstScene.prototype.setPotB = function () {
        var data = RES.getRes("watering_json");
        var txtr = RES.getRes("watering_png");
        var potBFactory = new egret.MovieClipDataFactory(data, txtr);
        this.potB = new egret.MovieClip(potBFactory.generateMovieClipData("watering"));
        this.potB.scaleX = 408.0 / this.stageW;
        this.potB.scaleY = 408.0 / this.stageW;
        this.potB.anchorOffsetY = this.potB.height;
        this.potB.y = 1660.0 * this.stageH / 2272;
        this.potB.x = this.stageW / 2 - 192.0 * this.stageH / 2272;
        this.potB.alpha = 0;
    };
    /**
     * 第一次浇水
     */
    FirstScene.prototype.wateringFirst = function (event) {
        var _this = this;
        this.potS.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.wateringFirst, this);
        this.setPotB();
        this.addChild(this.potB);
        this.potB.play(-1);
        var wateringTw = egret.Tween.get(this.potB);
        wateringTw
            .to({ alpha: 1 }, 600)
            .wait(1000)
            .to({ alpha: 0 }, 600)
            .call(function () {
            _this.removeChild(_this.potB);
            _this.threeGroup();
        });
        //隐藏提示
        var tipGroup = egret.Tween.get(this.tipGroup);
        tipGroup
            .to({ alpha: 0 }, 300)
            .call(function () {
            _this.removeChild(_this.tipGroup);
        });
    };
    /**
     * 小树长大
     */
    FirstScene.prototype.threeGroup = function () {
        var _this = this;
        this.setThreeN();
        var threeSTW = egret.Tween.get(this.threeS);
        threeSTW
            .to({ alpha: 0 }, 1000)
            .call(function () {
            _this.removeChild(_this.threeS);
        });
        var threeNTw = egret.Tween.get(this.threeN);
        threeNTw
            .to({ alpha: 1 }, 1500)
            .call(function () {
            _this.addChild(_this.tipGroup);
            var tipWt = egret.Tween.get(_this.tipGroup);
            tipWt
                .wait(3200)
                .to({ alpha: 1 }, 1000)
                .call(function () {
                tipWt = egret.Tween.get(_this.tipGroup, { loop: true });
                tipWt
                    .to({ alpha: 0.3 }, 1200)
                    .to({ alpha: 1 }, 1200);
            });
            _this.potS.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.wateringSecond, _this);
        });
    };
    /**
     * 第二次浇水
     */
    FirstScene.prototype.wateringSecond = function () {
        var _this = this;
        this.potS.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.wateringSecond, this);
        this.addChild(this.potB);
        var tipGroup = egret.Tween.get(this.tipGroup);
        tipGroup
            .to({ alpha: 0 }, 300)
            .call(function () {
            _this.removeChild(_this.tipGroup);
        });
        var wateringTw = egret.Tween.get(this.potB);
        wateringTw
            .to({ alpha: 1 }, 600)
            .wait(1000)
            .to({ alpha: 0 }, 600)
            .call(function () {
            _this.nextScene();
        });
        var fistTxtTw = egret.Tween.get(this.fistTxt);
    };
    /**
     * 切换到下一个场景
     */
    FirstScene.prototype.nextScene = function () {
        var firstSecentTw = egret.Tween.get(this);
        firstSecentTw
            .to({ alpha: 1 }, 1000);
        this.parent.addChildAt(new SecondScene(), 2);
    };
    return FirstScene;
}(eui.UILayer));
__reflect(FirstScene.prototype, "FirstScene");
//# sourceMappingURL=FirstScene.js.map