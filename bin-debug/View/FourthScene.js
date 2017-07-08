var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
///<reference path="component/Common.ts" />
///<reference path="component/Fourth.ts" />
///<reference path="FifthScene.ts" />
var FourthScene = (function (_super) {
    __extends(FourthScene, _super);
    function FourthScene() {
        var _this = _super.call(this) || this;
        _this.alpha = 0;
        _this.stageW = egret.MainContext.instance.stage.stageWidth;
        _this.stageH = egret.MainContext.instance.stage.stageHeight;
        _this.background = new Background('stage4-bg_png');
        _this.backgroundBlack = new Background('stage4-bg2_png');
        _this.guohe = new GuoHeS();
        _this.text = new FourthTxt();
        _this.nextBtn = new NextBut();
        _this.fisttouch = false;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.createView, _this);
        return _this;
    }
    FourthScene.Shared = function () {
        if (FourthScene.shared == null) {
            FourthScene.shared = new FourthScene();
        }
        return FourthScene.shared;
    };
    FourthScene.prototype.createView = function () {
        var _this = this;
        this.addChild(this.backgroundBlack);
        var fourthSceneWt = egret.Tween.get(this);
        fourthSceneWt
            .to({ alpha: 1 }, 1000)
            .call(function () {
            _this.parent.removeChildAt(1);
            _this.setGuohe();
        });
    };
    /**
     * 设置果盒
     */
    FourthScene.prototype.setGuohe = function () {
        var _this = this;
        this.addChild(this.guohe);
        var guoheWt = egret.Tween.get(this.guohe);
        guoheWt
            .to({ y: 1137.0 * this.stageH / 2272 }, 1400, egret.Ease.sineInOut)
            .call(function () {
            _this.addChildAt(_this.background, 1);
            _this.setColorbg("left");
            _this.setGuoheAnimation();
            _this.setDrapTip();
        });
        this.guohe.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.startMove, this);
    };
    /**
     * 添加提示
     */
    FourthScene.prototype.setDrapTip = function () {
        var _this = this;
        this.drapTip = new eui.Label;
        this.drapTip.alpha = 0;
        this.drapTip.text = "拖动果盒到右边》";
        this.drapTip.anchorOffsetX = this.drapTip.width / 2;
        this.drapTip.y = 1245.0 * this.stageH / 2272;
        this.drapTip.x = this.stageW / 2;
        this.drapTip.textColor = 0xffffff;
        this.addChild(this.drapTip);
        var tw = egret.Tween.get(this.drapTip);
        tw
            .to({ alpha: 1 }, 1000)
            .call(function () {
            tw = egret.Tween.get(_this.drapTip, { loop: true });
            tw
                .to({ alpha: 0, x: _this.stageW / 2 + 50 * _this.stageH / 2272 }, 1500);
        });
    };
    /**
     * 开始拖动
     */
    FourthScene.prototype.startMove = function (event) {
        this.offsetX = event.stageX - this.guohe.x;
        this.offsetY = event.stageY - this.guohe.y;
        if (this.drapTip.stage) {
            this.removeChild(this.drapTip);
        }
        this.guohe.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.move, this);
        this.guohe.addEventListener(egret.TouchEvent.TOUCH_END, this.endMove, this);
    };
    /**
     * 移动
     */
    FourthScene.prototype.move = function (event) {
        this.guohe.x = event.stageX - this.offsetX;
        if (this.guohe.x < 0) {
            this.guohe.x = 0;
        }
        if (this.guohe.x > this.stageW) {
            this.guohe.x = this.stageW;
        }
        if (this.guohe.x > this.stageW / 2) {
            this.setColorbg("right");
            if (!this.fisttouch) {
                this.setText();
                this.fisttouch = true;
            }
        }
        else {
            this.setColorbg("left");
        }
    };
    /**
     * 移动结束
     */
    FourthScene.prototype.endMove = function () {
        if (this.guohe.x > this.stageW / 2) {
            this.setColorbg("right");
        }
        else {
            this.setColorbg("left");
        }
        this.guohe.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.move, this);
        this.guohe.removeEventListener(egret.TouchEvent.TOUCH_END, this.endMove, this);
    };
    /**
     * 果盒动画
     */
    FourthScene.prototype.setGuoheAnimation = function () {
        var bgTw = egret.Tween.get(this.guohe.getChildAt(0), { loop: true });
        bgTw
            .to({ alpha: 1 }, 500)
            .wait(500)
            .to({ alpha: 0 }, 500);
    };
    /**
     * 场景变换
     */
    FourthScene.prototype.setColorbg = function (direction) {
        var maskUI;
        if (direction === 'left') {
            maskUI = new egret.Rectangle(0, 0, this.background.width / 2, this.stageH);
        }
        else {
            maskUI = new egret.Rectangle(0, 0, this.background.width, this.stageH);
        }
        this.background.alpha = 0;
        this.background.mask = maskUI;
        var bgTw = egret.Tween.get(this.background);
        bgTw
            .to({ alpha: 1 });
    };
    /**
     * 设置文字
     */
    FourthScene.prototype.setText = function () {
        var _this = this;
        this.addChild(this.text);
        var textTw = egret.Tween.get(this.text);
        textTw
            .wait(200)
            .to({ y: 1739.0 * this.stageH / 2272, alpha: 1 }, 1500, egret.Ease.backInOut)
            .wait(200)
            .call(function () {
            _this.setNextBtn();
        });
    };
    /**
     * 下一页按钮
     */
    FourthScene.prototype.setNextBtn = function () {
        var _this = this;
        this.nextBtn.top = 2106 * this.stageH / 2272;
        this.addChild(this.nextBtn);
        var nextBtnTw = egret.Tween.get(this.nextBtn);
        nextBtnTw
            .to({ alpha: 1 }, 800)
            .call(function () {
            _this.nextBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.nextScene, _this);
        });
    };
    FourthScene.prototype.nextScene = function () {
        this.parent.addChildAt(new FifthScene(), 2);
    };
    return FourthScene;
}(eui.UILayer));
__reflect(FourthScene.prototype, "FourthScene");
//# sourceMappingURL=FourthScene.js.map