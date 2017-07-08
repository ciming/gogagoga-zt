var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
///<reference path="component/Common.ts" />
///<reference path="component/FIfth.ts" />
var FifthScene = (function (_super) {
    __extends(FifthScene, _super);
    function FifthScene() {
        var _this = _super.call(this) || this;
        _this.alpha = 0;
        _this.stageW = egret.MainContext.instance.stage.stageWidth;
        _this.stageH = egret.MainContext.instance.stage.stageHeight;
        _this.background = new Background('stage2-bg_png');
        _this.firstCarton = new FirstCarton();
        _this.secondCarton = new SecondCarton();
        _this.thirdCarton = new ThirdCarton();
        _this.fourthCarton = new FourthCarton();
        _this.fifthCarton = new FifthCarton();
        _this.wastebin = new Wastebin();
        _this.text = new FifthTxt();
        _this.tip = new FifthTip();
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.createView, _this);
        return _this;
    }
    FifthScene.Shared = function () {
        if (FifthScene.shared == null) {
            FifthScene.shared = new FifthScene();
        }
        return FifthScene.shared;
    };
    FifthScene.prototype.createView = function () {
        var _this = this;
        this.addChild(this.background);
        var fifthSceneWt = egret.Tween.get(this);
        fifthSceneWt
            .to({ alpha: 1 }, 1000)
            .call(function () {
            _this.parent.removeChildAt(1);
            _this.setFirstCarton();
        });
    };
    /**
     * 设置第一个纸盒
     */
    FifthScene.prototype.setFirstCarton = function () {
        var _this = this;
        this.addChild(this.firstCarton);
        var cartonTw = egret.Tween.get(this.firstCarton);
        cartonTw
            .to({ alpha: 1 }, 500)
            .wait(800)
            .call(function () {
            _this.setSecondCarton();
        })
            .to({ alpha: 0 }, 300)
            .call(function () {
            _this.removeChild(_this.firstCarton);
        });
    };
    /**
     * 设置第二个纸盒
     */
    FifthScene.prototype.setSecondCarton = function () {
        var _this = this;
        this.addChild(this.secondCarton);
        var cartonTw = egret.Tween.get(this.secondCarton);
        cartonTw
            .to({ alpha: 1 }, 500)
            .wait(800)
            .call(function () {
            _this.setThirdCarton();
        })
            .to({ alpha: 0 }, 300)
            .call(function () {
            _this.removeChild(_this.secondCarton);
        });
    };
    /**
     * 设置第三个纸盒
     */
    FifthScene.prototype.setThirdCarton = function () {
        var _this = this;
        this.addChild(this.thirdCarton);
        var cartonTw = egret.Tween.get(this.thirdCarton);
        cartonTw
            .to({ alpha: 1 }, 500)
            .wait(800)
            .call(function () {
            _this.setFourthCarton();
        })
            .to({ alpha: 0 }, 300)
            .call(function () {
            _this.removeChild(_this.thirdCarton);
        });
    };
    /**
     * 设置第四个纸盒
     */
    FifthScene.prototype.setFourthCarton = function () {
        var _this = this;
        this.addChild(this.fourthCarton);
        var cartonTw = egret.Tween.get(this.fourthCarton);
        cartonTw
            .to({ alpha: 1 }, 500)
            .wait(800)
            .call(function () {
            _this.setFifthCarton();
        })
            .to({ alpha: 0 }, 300)
            .call(function () {
            _this.removeChild(_this.fourthCarton);
        });
    };
    /**
     * 设置第五个纸盒
     */
    FifthScene.prototype.setFifthCarton = function () {
        var _this = this;
        this.addChild(this.fifthCarton);
        var cartonTw = egret.Tween.get(this.fifthCarton);
        cartonTw
            .to({ alpha: 1 }, 800)
            .call(function () {
            _this.fifthCarton.addEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.startMove, _this);
            _this.setWastebin();
            _this.setText();
        });
    };
    /**
     * 设置垃圾桶
     */
    FifthScene.prototype.setWastebin = function () {
        this.addChild(this.wastebin);
        this.swapChildren(this.fifthCarton, this.wastebin);
        var wastebinWt = egret.Tween.get(this.wastebin);
        wastebinWt
            .to({ y: 1830 * this.stageH / 2272, alpha: 1 }, 1000, egret.Ease.backOut);
    };
    /**
     * 设置文字
     */
    FifthScene.prototype.setText = function () {
        var _this = this;
        this.addChild(this.text);
        var textWt = egret.Tween.get(this.text);
        textWt
            .to({ y: 628 * this.stageH / 2272, alpha: 1 }, 1000, egret.Ease.backOut)
            .call(function () {
            _this.setTip();
        });
    };
    /**
     * 设置提示
     */
    FifthScene.prototype.setTip = function () {
        var _this = this;
        this.addChild(this.tip);
        var tipWt = egret.Tween.get(this.tip);
        tipWt
            .wait(1000)
            .to({ alpha: 1 }, 1000)
            .call(function () {
            tipWt = egret.Tween.get(_this.tip, { loop: true });
            tipWt
                .to({ alpha: .5 }, 1500)
                .to({ alpha: 1 }, 1500);
        });
    };
    /**
     * 开始拖动
     */
    FifthScene.prototype.startMove = function (event) {
        var oragne = event.target;
        if (this.tip.stage) {
            this.removeChild(this.tip);
        }
        this.offsetX = event.stageX - oragne.x;
        this.offsetY = event.stageY - oragne.y;
        this.fifthCarton.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.move, this);
        this.fifthCarton.addEventListener(egret.TouchEvent.TOUCH_END, this.endMove, this);
    };
    /**
     * 移动
     */
    FifthScene.prototype.move = function (event) {
        var _this = this;
        this.fifthCarton.y = event.stageY - this.offsetY;
        var isHit = this.wastebin.hitTestPoint(this.stageW / 2, this.fifthCarton.y);
        if (isHit) {
            this.fifthCarton.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.move, this);
            var fifthCartonWt = egret.Tween.get(this.fifthCarton);
            fifthCartonWt
                .to({ y: 2020 * this.stageH / 2272, alpha: 0 }, 1000)
                .call(function () {
                _this.removeChild(_this.fifthCarton);
            })
                .call(function () {
                _this.nextScene();
            });
        }
    };
    /**
     * 移动结束
     */
    FifthScene.prototype.endMove = function () {
        this.fifthCarton.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.move, this);
        this.fifthCarton.removeEventListener(egret.TouchEvent.TOUCH_END, this.endMove, this);
    };
    /**
     * 下一个场景
     */
    FifthScene.prototype.nextScene = function () {
        this.parent.addChildAt(new SixthScene(), 2);
    };
    return FifthScene;
}(eui.UILayer));
__reflect(FifthScene.prototype, "FifthScene");
//# sourceMappingURL=FifthScene.js.map