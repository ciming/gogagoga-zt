var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 果盒类
 */
var Guohe = (function (_super) {
    __extends(Guohe, _super);
    function Guohe() {
        var _this = _super.call(this) || this;
        _this.stageW = egret.MainContext.instance.stage.stageWidth;
        _this.stageH = egret.MainContext.instance.stage.stageHeight;
        _this.texture = RES.getRes("guohe_png");
        _this.width = 1270.0 * _this.stageH / 2272;
        _this.height = 1825.0 * _this.stageH / 2272;
        _this.anchorOffsetX = _this.width / 2;
        _this.anchorOffsetY = _this.height;
        _this.x = _this.stageW / 2;
        _this.y = 0 * _this.stageH / 2272;
        return _this;
    }
    return Guohe;
}(eui.Image));
__reflect(Guohe.prototype, "Guohe");
/**
 * 场景3文字
 */
var ThirdTxt = (function (_super) {
    __extends(ThirdTxt, _super);
    function ThirdTxt() {
        var _this = _super.call(this) || this;
        _this.stageW = egret.MainContext.instance.stage.stageWidth;
        _this.stageH = egret.MainContext.instance.stage.stageHeight;
        _this.texture = RES.getRes("stage3-txt1_png");
        _this.width = 874.0 * _this.stageH / 2272;
        _this.height = 342.0 * _this.stageH / 2272;
        _this.anchorOffsetX = _this.width / 2;
        _this.anchorOffsetY = _this.height / 2;
        _this.x = _this.stageW / 2;
        _this.alpha = 0;
        _this.y = 417 * _this.stageH / 2272;
        ;
        return _this;
    }
    return ThirdTxt;
}(eui.Image));
__reflect(ThirdTxt.prototype, "ThirdTxt");
/**
 * 场景3文字
 */
var ThirdTxt2 = (function (_super) {
    __extends(ThirdTxt2, _super);
    function ThirdTxt2() {
        var _this = _super.call(this) || this;
        _this.stageW = egret.MainContext.instance.stage.stageWidth;
        _this.stageH = egret.MainContext.instance.stage.stageHeight;
        _this.texture = RES.getRes("stage3-txt2_png");
        _this.width = 1009.0 * _this.stageH / 2272;
        _this.height = 252.0 * _this.stageH / 2272;
        _this.anchorOffsetX = _this.width / 2;
        _this.anchorOffsetY = _this.height;
        _this.x = _this.stageW / 2;
        _this.alpha = 0;
        _this.y = 417 * _this.stageH / 2272;
        return _this;
    }
    return ThirdTxt2;
}(eui.Image));
__reflect(ThirdTxt2.prototype, "ThirdTxt2");
/**
 * 篮子类
 */
var Basket = (function (_super) {
    __extends(Basket, _super);
    function Basket() {
        var _this = _super.call(this) || this;
        _this.stageW = egret.MainContext.instance.stage.stageWidth;
        _this.stageH = egret.MainContext.instance.stage.stageHeight;
        _this.texture = RES.getRes("basket_png");
        _this.width = 678.0 * _this.stageH / 2272;
        _this.height = 312.0 * _this.stageH / 2272;
        _this.anchorOffsetX = _this.width / 2;
        _this.x = _this.stageW / 2;
        _this.y = 2272 * _this.stageH / 2272;
        return _this;
    }
    return Basket;
}(eui.Image));
__reflect(Basket.prototype, "Basket");
/** 第三场景橘子类 */
var ThirdOrange = (function (_super) {
    __extends(ThirdOrange, _super);
    function ThirdOrange() {
        var _this = _super.call(this) || this;
        _this.stageW = egret.MainContext.instance.stage.stageWidth;
        _this.stageH = egret.MainContext.instance.stage.stageHeight;
        _this.addOrange();
        return _this;
    }
    ThirdOrange.prototype.addOrange = function () {
        this.texture = RES.getRes("third-orange_png");
        this.width = 277.0 * this.stageH / 2272;
        this.height = 158.0 * this.stageH / 2272;
        this.anchorOffsetX = this.width / 2;
        this.anchorOffsetY = this.height / 2;
        this.alpha = 0;
        this.x = this.stageW / 2;
        this.y = 1940 * this.stageH / 2272;
    };
    return ThirdOrange;
}(eui.Image));
__reflect(ThirdOrange.prototype, "ThirdOrange");
/**
 * 第三页提示类
 */
var ThirdTip = (function (_super) {
    __extends(ThirdTip, _super);
    function ThirdTip() {
        var _this = _super.call(this) || this;
        _this.stageW = egret.MainContext.instance.stage.stageWidth;
        _this.stageH = egret.MainContext.instance.stage.stageHeight;
        _this.top = 1849.0 * _this.stageH / 2272;
        _this.horizontalCenter = 0;
        //添加字体
        var label = new eui.Label();
        label.text = "拖动果实放入果盒";
        label.textColor = 0x000000;
        label.horizontalCenter = 0;
        label.y = 115.0 * _this.stageH / 2272;
        _this.addChild(label);
        var arraw = new eui.Image();
        arraw.texture = RES.getRes("arraw-d_png");
        arraw.width = 65.0 * _this.stageH / 2272;
        arraw.height = 101.0 * _this.stageH / 2272;
        arraw.anchorOffsetX = arraw.width / 2;
        arraw.horizontalCenter = 0;
        _this.addChild(arraw);
        return _this;
    }
    return ThirdTip;
}(eui.Group));
__reflect(ThirdTip.prototype, "ThirdTip");
/**
 * 卡片类
 */
var CardUI = (function (_super) {
    __extends(CardUI, _super);
    function CardUI() {
        var _this = _super.call(this) || this;
        _this.stageW = egret.MainContext.instance.stage.stageWidth;
        _this.stageH = egret.MainContext.instance.stage.stageHeight;
        _this.texture = RES.getRes("card_png");
        _this.width = 1278.0 * _this.stageH / 2272;
        _this.height = 915.0 * _this.stageH / 2272;
        _this.anchorOffsetX = _this.width / 2;
        _this.anchorOffsetY = _this.height / 2;
        _this.alpha = 0;
        _this.x = _this.stageW / 2;
        _this.y = 1241.0 * _this.stageH / 2272;
        return _this;
    }
    return CardUI;
}(eui.Image));
__reflect(CardUI.prototype, "CardUI");
/**
 * 卡片背景类
 */
var CardBgUI = (function (_super) {
    __extends(CardBgUI, _super);
    function CardBgUI() {
        var _this = _super.call(this) || this;
        _this.stageW = egret.MainContext.instance.stage.stageWidth;
        _this.stageH = egret.MainContext.instance.stage.stageHeight;
        _this.texture = RES.getRes("card-bg_png");
        _this.width = 672.0 * _this.stageH / 2272;
        _this.height = 538.0 * _this.stageH / 2272;
        _this.anchorOffsetX = _this.width / 2;
        _this.anchorOffsetY = _this.height / 2;
        _this.x = _this.stageW / 2;
        _this.alpha = 0;
        _this.y = 1241.0 * _this.stageH / 2272;
        return _this;
    }
    return CardBgUI;
}(eui.Image));
__reflect(CardBgUI.prototype, "CardBgUI");
//# sourceMappingURL=Third.js.map