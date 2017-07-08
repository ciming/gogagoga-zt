var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
///<reference path="ThirdScene.ts" />
var SecondScene = (function (_super) {
    __extends(SecondScene, _super);
    function SecondScene() {
        var _this = _super.call(this) || this;
        _this.orages = [];
        _this.pickNum = 0;
        _this.alpha = 0;
        _this.stageW = egret.MainContext.instance.stage.stageWidth;
        _this.stageH = egret.MainContext.instance.stage.stageHeight;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.createView, _this);
        return _this;
    }
    SecondScene.Shared = function () {
        if (SecondScene.shared == null) {
            SecondScene.shared = new SecondScene();
        }
        return SecondScene.shared;
    };
    /**
     * 加载完成事件
     */
    SecondScene.prototype.createView = function () {
        var _this = this;
        this.setBackground();
        this.setSun();
        this.setCloud();
        this.setTree();
        //淡入
        var firstSceneWt = egret.Tween.get(this);
        firstSceneWt
            .to({ alpha: 1 }, 1000)
            .call(function () {
            _this.parent.removeChildAt(1);
            _this.initAnimation();
        });
    };
    /**
    * 设置背景
    */
    SecondScene.prototype.setBackground = function () {
        this.background = new eui.Image();
        this.background.texture = RES.getRes("stage1-bg_png");
        this.background.horizontalCenter = 0;
        this.background.verticalCenter = 0;
        this.background.percentHeight = 100;
        this.addChild(this.background);
    };
    /**
     * 设置大树
     */
    SecondScene.prototype.setTree = function () {
        this.three = new eui.Image();
        this.three.texture = RES.getRes("tree-3_png");
        this.three.width = 1772.0 * this.stageH / 2272;
        this.three.height = 1540.0 * this.stageH / 2272;
        this.three.horizontalCenter = 0;
        this.three.top = 314 * this.stageW / 1280;
        this.addChild(this.three);
    };
    /**
     * 设置太阳
     */
    SecondScene.prototype.setSun = function () {
        this.sun = new eui.Image;
        this.sun.texture = RES.getRes("sun_png");
        this.sun.width = 377.0 * this.stageH / 2272;
        ;
        this.sun.height = this.sun.width * 377 / 364;
        this.sun.anchorOffsetX = this.sun.width / 2;
        this.sun.anchorOffsetY = this.sun.height / 2;
        this.sun.x = this.stageW / 2 + 370.0 * this.stageH / 2272;
        this.sun.alpha = 0;
        this.sun.y = 700.0 * this.stageH / 2272;
        this.addChild(this.sun);
    };
    /**
     * 设置云朵
     */
    SecondScene.prototype.setCloud = function () {
        this.cloud = new eui.Image;
        this.cloud.texture = RES.getRes("cloud_png");
        this.cloud.width = 299.0 * this.stageH / 2272;
        this.cloud.height = 169.0 * this.stageH / 2272;
        this.cloud.anchorOffsetX = this.cloud.width / 2;
        this.cloud.anchorOffsetY = this.cloud.height / 2;
        this.cloud.x = -200 * this.stageH / 2272;
        ;
        this.cloud.y = 340.0 * this.stageH / 2272;
        ;
        this.addChild(this.cloud);
    };
    /**
     * 初始动画
     */
    SecondScene.prototype.initAnimation = function () {
        var _this = this;
        var sunWt = egret.Tween.get(this.sun);
        sunWt
            .to({ alpha: 1 }, 1000)
            .to({ y: 267.0 * this.stageH / 2272 }, 2000, egret.Ease.backOut)
            .call(function () {
            _this.setOrages();
        });
        var cloudWt = egret.Tween.get(this.cloud, { loop: true });
        cloudWt
            .wait(500)
            .to({ x: (1480.0) * this.stageH / 2272 }, 17000);
    };
    /**
     * 设置橘子
     */
    SecondScene.prototype.setOrages = function () {
        var _this = this;
        this.addOrage(380, 892);
        this.addOrage(690, 700);
        this.addOrage(980, 1080);
        this.orages.forEach(function (item, index) {
            var orage = _this.orages[index];
            var orageTw = egret.Tween.get(orage);
            orageTw
                .wait(index * 300)
                .to({ scaleX: 1, scaleY: 1, alpha: 1 }, 1200, egret.Ease.backInOut);
            orage["index"] = index;
            orage.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.pickFruit, _this);
        });
        this.setTip();
    };
    /**添加橘子 */
    SecondScene.prototype.addOrage = function (x, y) {
        var orage = new eui.Image();
        orage.texture = RES.getRes("orage_png");
        orage.width = 265.0 * this.stageH / 2272;
        orage.height = 267.0 * this.stageH / 2272;
        orage.anchorOffsetX = orage.width / 2;
        orage.alpha = 0;
        orage.scaleX = 0;
        orage.scaleY = 0;
        orage.anchorOffsetY = orage.height / 2;
        orage.x = x * this.stageW / 1280;
        orage.y = y * this.stageH / 2272;
        this.orages.push(orage);
        this.addChild(orage);
    };
    /**
     * 设置提示
     */
    SecondScene.prototype.setTip = function () {
        var _this = this;
        this.tipGroup = new eui.Group();
        this.tipGroup.height = 150;
        this.tipGroup.alpha = 0;
        this.tipGroup.horizontalCenter = 0;
        this.tipGroup.top = 2040.0 * this.stageH / 2272;
        //添加箭头
        var arraw = new eui.Image();
        arraw.texture = RES.getRes("arraw-t_png");
        arraw.width = 65.0 * this.stageH / 2272;
        arraw.height = 101.0 * this.stageH / 2272;
        arraw.y = 70.0 * this.stageH / 2272;
        arraw.anchorOffsetX = arraw.width / 2;
        arraw.horizontalCenter = 0;
        this.tipGroup.addChild(arraw);
        //添加字体
        var label = new eui.Label();
        label.text = "点击果实放入果盒";
        label.textColor = 0x000000;
        label.horizontalCenter = 0;
        this.tipGroup.addChild(label);
        this.addChild(this.tipGroup);
        var tipTw = egret.Tween.get(this.tipGroup);
        tipTw
            .wait(1500)
            .to({ alpha: 1 }, 1000)
            .call(function () {
            tipTw = egret.Tween.get(_this.tipGroup, { loop: true });
            tipTw
                .to({ alpha: .3 }, 1000)
                .to({ alpha: 1 }, 1000);
        });
    };
    /**
     * 摘水果
     */
    SecondScene.prototype.pickFruit = function (evet) {
        var _this = this;
        var orage = evet.target;
        var orageWt = egret.Tween.get(orage);
        orageWt
            .to({ alpha: 0 }, 1000)
            .call(function () {
            _this.removeChild(orage);
        });
        this.setBlucket(this.pickNum);
        if (this.pickNum == 2) {
            this.removeChild(this.tipGroup);
            var wt = egret.Tween.get(this);
            wt
                .wait(1000)
                .call(function () {
                _this.nextScene();
            });
        }
        this.pickNum++;
    };
    /**
     * 设置果桶
     */
    SecondScene.prototype.setBlucket = function (type) {
        var bucketType = [
            {
                x: -383,
                y: 1730,
                width: 402,
                height: 404,
                image: "bucket1_png"
            }, {
                x: -188,
                y: 1840,
                width: 402,
                height: 404,
                image: "bucket1_png"
            }, {
                x: 225,
                y: 1642,
                width: 222,
                height: 223,
                image: "bucket2_png"
            }
        ];
        var bucket = new eui.Image();
        bucket.texture = RES.getRes(bucketType[type].image);
        bucket.width = bucketType[type].width * this.stageH / 2272;
        bucket.height = bucketType[type].height * this.stageH / 2272;
        bucket.anchorOffsetX = bucket.width / 2;
        bucket.anchorOffsetY = bucket.height / 2;
        bucket.x = this.stageW / 2 + bucketType[type].x * this.stageH / 2272;
        bucket.y = bucketType[type].y * this.stageH / 2272;
        bucket.alpha = 0;
        this.addChild(bucket);
        var bucketWt = egret.Tween.get(bucket);
        bucketWt
            .to({ alpha: 1 }, 500);
    };
    /**
     * 进入下一个
     */
    SecondScene.prototype.nextScene = function () {
        this.parent.addChildAt(new ThirdScene(), 2);
    };
    return SecondScene;
}(eui.UILayer));
__reflect(SecondScene.prototype, "SecondScene");
//# sourceMappingURL=SecondScene.js.map