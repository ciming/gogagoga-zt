var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Background = (function (_super) {
    __extends(Background, _super);
    function Background(bgRes) {
        var _this = _super.call(this) || this;
        _this.backgroundRes = bgRes;
        _this.stageW = egret.MainContext.instance.stage.stageWidth;
        _this.stageH = egret.MainContext.instance.stage.stageHeight;
        _this.createView();
        return _this;
    }
    Background.prototype.createView = function () {
        this.texture = RES.getRes(this.backgroundRes);
        this.height = this.stageH;
        this.width = 1280.0 * this.height / 1800;
        this.anchorOffsetX = this.width / 2;
        this.anchorOffsetY = this.height / 2;
        this.x = this.stageW / 2;
        this.y = this.stageH / 2;
    };
    return Background;
}(eui.Image));
__reflect(Background.prototype, "Background");
/**
 * 继续旅程按钮
 */
var NextBut = (function (_super) {
    __extends(NextBut, _super);
    function NextBut() {
        var _this = _super.call(this) || this;
        _this.stageW = egret.MainContext.instance.stage.stageWidth;
        _this.stageH = egret.MainContext.instance.stage.stageHeight;
        _this.height = 150;
        _this.alpha = 0;
        _this.horizontalCenter = 0;
        _this.top = 1700 * _this.stageH / 2272;
        //添加字体
        var label = new eui.Label();
        label.text = "继续旅程";
        label.textColor = 0xFFFFFF;
        _this.addChild(label);
        //添加箭头
        var arraw = new eui.Image();
        arraw.texture = RES.getRes("arraw-r_png");
        arraw.width = _this.stageW * 0.079;
        arraw.height = arraw.width * 65.0 / 101;
        _this.addChild(arraw);
        var hLayout = new eui.HorizontalLayout();
        hLayout.gap = 10;
        _this.layout = hLayout;
        return _this;
    }
    return NextBut;
}(eui.Group));
__reflect(NextBut.prototype, "NextBut");
//# sourceMappingURL=Common.js.map