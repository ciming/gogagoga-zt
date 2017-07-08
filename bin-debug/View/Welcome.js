var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
///<reference path="FirstScene.ts" />
var Welcome = (function (_super) {
    __extends(Welcome, _super);
    function Welcome() {
        var _this = _super.call(this) || this;
        _this.stageW = egret.MainContext.instance.stage.stageWidth;
        _this.stageH = egret.MainContext.instance.stage.stageHeight;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.createView, _this);
        return _this;
    }
    Welcome.Shared = function () {
        if (Welcome.shared == null) {
            Welcome.shared = new Welcome();
        }
        return Welcome.shared;
    };
    Welcome.prototype.createView = function () {
        this.setBackground();
        this.setFirstText();
        this.setSecondTxt();
        this.setOrangeKey();
        this.setTip();
        this.setAnimation();
    };
    /**
     * 设置背景
     */
    Welcome.prototype.setBackground = function () {
        this.background = new eui.Image();
        this.background.texture = RES.getRes("stage1-bg_png");
        this.background.horizontalCenter = 0;
        this.background.verticalCenter = 0;
        this.background.percentHeight = 100;
        this.addChild(this.background);
    };
    /**
     * 设置第一段文字
     */
    Welcome.prototype.setFirstText = function () {
        this.firstText = new eui.Image();
        this.firstText.texture = RES.getRes("stage1-txt1_png");
        this.firstText.width = 684.0 * this.stageH / 2272;
        this.firstText.height = 334.0 * this.stageH / 2272;
        this.firstText.alpha = 0;
        this.firstText.x = this.stageW / 2 - 534.0 * this.stageH / 2272;
        this.firstText.y = 0;
        this.addChild(this.firstText);
    };
    /**
     * 设置第二段文字
     */
    Welcome.prototype.setSecondTxt = function () {
        this.secondText = new eui.Image();
        this.secondText.texture = RES.getRes("stage1-txt2_png");
        this.secondText.width = 708.0 * this.stageH / 2272;
        this.secondText.height = 152.0 * this.stageH / 2272;
        this.secondText.alpha = 0;
        this.secondText.x = this.stageW / 2 - 469.0 * this.stageH / 2272;
        this.secondText.y = this.stageH * 0.4423;
        this.addChild(this.secondText);
    };
    /**
     * 设置按钮
     */
    Welcome.prototype.setOrangeKey = function () {
        this.orangeKey = new eui.Image();
        this.orangeKey.texture = RES.getRes("orange-key_png");
        this.orangeKey.width = 240.0 * this.stageH / 2272;
        this.orangeKey.height = 220.0 * this.stageH / 2272;
        this.orangeKey.x = this.stageW / 2 - 506.0 * this.stageH / 2272;
        this.orangeKey.y = this.stageH * 0.707;
        this.orangeKey.alpha = 0;
        this.addChild(this.orangeKey);
    };
    /**
     * 设置按钮提示
     */
    Welcome.prototype.setTip = function () {
        this.tipGroup = new eui.Group();
        this.tipGroup.height = 150;
        this.tipGroup.alpha = 0;
        this.tipGroup.left = this.stageW * 0.398;
        this.tipGroup.top = this.stageH * 0.73;
        //添加箭头
        var arraw = new eui.Image();
        arraw.texture = RES.getRes("arraw_png");
        arraw.width = this.stageW * 0.079;
        arraw.height = arraw.width * 65.0 / 101;
        this.tipGroup.addChild(arraw);
        //添加字体
        var label = new eui.Label();
        label.text = "点击钥匙开启";
        label.textColor = 0x000000;
        this.tipGroup.addChild(label);
        this.addChild(this.tipGroup);
        var hLayout = new eui.HorizontalLayout();
        hLayout.gap = 10;
        this.tipGroup.layout = hLayout;
    };
    /**
     * 设置动画
     */
    Welcome.prototype.setAnimation = function () {
        var _this = this;
        //第一段文字动画
        this.firstTextWt = egret.Tween.get(this.firstText);
        this.firstTextWt
            .to({ y: this.stageH * 0.156, alpha: 1 }, 2000, egret.Ease.backOut);
        //第二段文字动画
        this.secondTextWt = egret.Tween.get(this.secondText);
        this.secondTextWt
            .wait(1500)
            .to({ y: this.stageH * 0.579, alpha: 1 }, 2000, egret.Ease.backOut);
        //设置OrangeKey动画
        this.orangeKeyWt = egret.Tween.get(this.orangeKey);
        this.orangeKeyWt
            .wait(3000)
            .to({ alpha: 1 }, 1000)
            .call(function () {
            _this.orangeKey.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.nextScene, _this);
        });
        //设置tipGroup动画
        this.tipGroupWt = egret.Tween.get(this.tipGroup);
        this.tipGroupWt
            .wait(3000)
            .to({ alpha: 1 }, 1000)
            .call(function () {
            _this.tipGroupWt = egret.Tween.get(_this.tipGroup, { loop: true });
            _this.tipGroupWt
                .to({ alpha: 0.6 }, 1200)
                .to({ alpha: 1 }, 1200);
        });
    };
    Welcome.prototype.nextScene = function (event) {
        this.orangeKey.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.nextScene, this);
        this.parent.addChildAt(new FirstScene(), 2);
    };
    return Welcome;
}(eui.UILayer));
__reflect(Welcome.prototype, "Welcome");
//# sourceMappingURL=Welcome.js.map