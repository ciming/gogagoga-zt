var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 小果盒
 */
var GuoHeS = (function (_super) {
    __extends(GuoHeS, _super);
    function GuoHeS() {
        var _this = _super.call(this) || this;
        _this.stageW = egret.MainContext.instance.stage.stageWidth;
        _this.stageH = egret.MainContext.instance.stage.stageHeight;
        _this.createView();
        return _this;
    }
    GuoHeS.prototype.createView = function () {
        this.width = 450.0 * this.stageH / 2272;
        this.height = 174.0 * this.stageH / 2272;
        this.anchorOffsetX = this.width / 2;
        this.anchorOffsetY = this.height;
        this.x = this.stageW / 2 - 452.0 * this.stageH / 2272;
        this.bg = new eui.Image();
        this.bg.texture = RES.getRes("gh-bg_png");
        this.bg.alpha = 0;
        this.bg.width = 450.0 * this.stageH / 2272;
        this.bg.height = 168.0 * this.stageH / 2272;
        this.addChild(this.bg);
        this.gh = new eui.Image();
        this.gh.texture = RES.getRes("gh2_png");
        this.gh.width = 327.0 * this.stageH / 2272;
        this.gh.height = 111.0 * this.stageH / 2272;
        this.gh.anchorOffsetX = this.gh.width / 2;
        this.gh.anchorOffsetY = this.gh.height;
        this.gh.x = 225.0 * this.stageH / 2272;
        this.gh.y = 174.0 * this.stageH / 2272;
        this.addChild(this.gh);
    };
    return GuoHeS;
}(eui.Group));
__reflect(GuoHeS.prototype, "GuoHeS");
/**
 * 场景4文字
 */
var FourthTxt = (function (_super) {
    __extends(FourthTxt, _super);
    function FourthTxt() {
        var _this = _super.call(this) || this;
        _this.stageW = egret.MainContext.instance.stage.stageWidth;
        _this.stageH = egret.MainContext.instance.stage.stageHeight;
        _this.texture = RES.getRes("stage4-txt1_png");
        _this.width = 684.0 * _this.stageH / 2272;
        _this.height = 250.0 * _this.stageH / 2272;
        _this.anchorOffsetX = _this.width / 2;
        _this.anchorOffsetY = 0;
        _this.x = _this.stageW / 2;
        _this.alpha = 0;
        _this.y = 2272 * _this.stageH / 2272;
        ;
        return _this;
    }
    return FourthTxt;
}(eui.Image));
__reflect(FourthTxt.prototype, "FourthTxt");
//# sourceMappingURL=Fourth.js.map