var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// TypeScript file
/**
 * 第一个纸盒
 */
var FirstCarton = (function (_super) {
    __extends(FirstCarton, _super);
    function FirstCarton() {
        var _this = _super.call(this) || this;
        _this.alpha = 0;
        _this.stageW = egret.MainContext.instance.stage.stageWidth;
        _this.stageH = egret.MainContext.instance.stage.stageHeight;
        _this.createView();
        return _this;
    }
    FirstCarton.prototype.createView = function () {
        this.texture = RES.getRes("carton-01_png");
        this.width = 1225.0 * this.stageH / 2272;
        this.height = 1295.0 * this.stageH / 2272;
        this.anchorOffsetX = this.width / 2;
        this.anchorOffsetY = this.height;
        this.alpha = 0;
        this.x = this.stageW / 2;
        this.y = 1517 * this.stageH / 2272;
        ;
    };
    return FirstCarton;
}(eui.Image));
__reflect(FirstCarton.prototype, "FirstCarton");
/**
 * 第二个纸盒
 */
var SecondCarton = (function (_super) {
    __extends(SecondCarton, _super);
    function SecondCarton() {
        var _this = _super.call(this) || this;
        _this.alpha = 0;
        _this.stageW = egret.MainContext.instance.stage.stageWidth;
        _this.stageH = egret.MainContext.instance.stage.stageHeight;
        _this.createView();
        return _this;
    }
    SecondCarton.prototype.createView = function () {
        this.texture = RES.getRes("carton-02_png");
        this.width = 1005.0 * this.stageH / 2272;
        this.height = 1283.0 * this.stageH / 2272;
        this.anchorOffsetX = this.width / 2;
        this.anchorOffsetY = this.height;
        this.alpha = 0;
        this.x = this.stageW / 2;
        this.y = 1517 * this.stageH / 2272;
        ;
    };
    return SecondCarton;
}(eui.Image));
__reflect(SecondCarton.prototype, "SecondCarton");
/**
 * 第三个纸盒
 */
var ThirdCarton = (function (_super) {
    __extends(ThirdCarton, _super);
    function ThirdCarton() {
        var _this = _super.call(this) || this;
        _this.alpha = 0;
        _this.stageW = egret.MainContext.instance.stage.stageWidth;
        _this.stageH = egret.MainContext.instance.stage.stageHeight;
        _this.createView();
        return _this;
    }
    ThirdCarton.prototype.createView = function () {
        this.texture = RES.getRes("carton-03_png");
        this.width = 894.0 * this.stageH / 2272;
        this.height = 1168.0 * this.stageH / 2272;
        this.anchorOffsetX = this.width / 2;
        this.anchorOffsetY = this.height;
        this.alpha = 0;
        this.x = this.stageW / 2;
        this.y = 1415 * this.stageH / 2272;
        ;
    };
    return ThirdCarton;
}(eui.Image));
__reflect(ThirdCarton.prototype, "ThirdCarton");
/**
 * 第四个纸盒
 */
var FourthCarton = (function (_super) {
    __extends(FourthCarton, _super);
    function FourthCarton() {
        var _this = _super.call(this) || this;
        _this.alpha = 0;
        _this.stageW = egret.MainContext.instance.stage.stageWidth;
        _this.stageH = egret.MainContext.instance.stage.stageHeight;
        _this.createView();
        return _this;
    }
    FourthCarton.prototype.createView = function () {
        this.texture = RES.getRes("carton-04_png");
        this.width = 679.0 * this.stageH / 2272;
        this.height = 1288.0 * this.stageH / 2272;
        this.anchorOffsetX = this.width / 2;
        this.anchorOffsetY = this.height;
        this.alpha = 0;
        this.x = this.stageW / 2;
        this.y = 1535 * this.stageH / 2272;
        ;
    };
    return FourthCarton;
}(eui.Image));
__reflect(FourthCarton.prototype, "FourthCarton");
/**
 * 第五个纸盒
 */
var FifthCarton = (function (_super) {
    __extends(FifthCarton, _super);
    function FifthCarton() {
        var _this = _super.call(this) || this;
        _this.alpha = 0;
        _this.stageW = egret.MainContext.instance.stage.stageWidth;
        _this.stageH = egret.MainContext.instance.stage.stageHeight;
        _this.createView();
        return _this;
    }
    FifthCarton.prototype.createView = function () {
        this.texture = RES.getRes("carton-06_png");
        this.width = 678.0 * this.stageH / 2272;
        this.height = 551.0 * this.stageH / 2272;
        this.anchorOffsetX = this.width / 2;
        this.anchorOffsetY = this.height;
        this.alpha = 0;
        this.x = this.stageW / 2;
        this.y = 1396 * this.stageH / 2272;
        ;
    };
    return FifthCarton;
}(eui.Image));
__reflect(FifthCarton.prototype, "FifthCarton");
/**
 * 垃圾桶
 */
var Wastebin = (function (_super) {
    __extends(Wastebin, _super);
    function Wastebin() {
        var _this = _super.call(this) || this;
        _this.alpha = 0;
        _this.stageW = egret.MainContext.instance.stage.stageWidth;
        _this.stageH = egret.MainContext.instance.stage.stageHeight;
        _this.createView();
        return _this;
    }
    Wastebin.prototype.createView = function () {
        this.texture = RES.getRes("wastebin_png");
        this.width = 421.0 * this.stageH / 2272;
        this.height = 593.0 * this.stageH / 2272;
        this.anchorOffsetX = this.width / 2;
        this.anchorOffsetY = 0;
        this.x = this.stageW / 2;
        this.y = this.stageH;
    };
    return Wastebin;
}(eui.Image));
__reflect(Wastebin.prototype, "Wastebin");
/**
 * 场景5文字
 */
var FifthTxt = (function (_super) {
    __extends(FifthTxt, _super);
    function FifthTxt() {
        var _this = _super.call(this) || this;
        _this.stageW = egret.MainContext.instance.stage.stageWidth;
        _this.stageH = egret.MainContext.instance.stage.stageHeight;
        _this.texture = RES.getRes("stage5-txt1_png");
        _this.width = 806.0 * _this.stageH / 2272;
        _this.height = 334.0 * _this.stageH / 2272;
        _this.anchorOffsetX = _this.width / 2;
        _this.anchorOffsetY = _this.height;
        _this.alpha = 0;
        _this.x = _this.stageW / 2;
        _this.y = 0;
        return _this;
    }
    return FifthTxt;
}(eui.Image));
__reflect(FifthTxt.prototype, "FifthTxt");
/**
 * 第五页提示类
 */
var FifthTip = (function (_super) {
    __extends(FifthTip, _super);
    function FifthTip() {
        var _this = _super.call(this) || this;
        _this.stageW = egret.MainContext.instance.stage.stageWidth;
        _this.stageH = egret.MainContext.instance.stage.stageHeight;
        _this.top = 1648.0 * _this.stageH / 2272;
        _this.horizontalCenter = 0;
        //添加字体
        var arraw = new eui.Image();
        arraw.texture = RES.getRes("arraw-d_png");
        arraw.width = 65.0 * _this.stageH / 2272;
        arraw.height = 101.0 * _this.stageH / 2272;
        arraw.anchorOffsetX = arraw.width / 2;
        arraw.horizontalCenter = 0;
        arraw.y = 71.0 * _this.stageH / 2272;
        _this.addChild(arraw);
        var label = new eui.Label();
        label.text = "将包装盒拖入可回收垃圾桶内";
        label.textColor = 0x000000;
        label.horizontalCenter = 0;
        _this.addChild(label);
        return _this;
    }
    return FifthTip;
}(eui.Group));
__reflect(FifthTip.prototype, "FifthTip");
//# sourceMappingURL=FIfth.js.map