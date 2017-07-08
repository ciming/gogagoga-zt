var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Bgm = (function (_super) {
    __extends(Bgm, _super);
    function Bgm() {
        var _this = _super.call(this) || this;
        _this.play = true;
        _this.stageW = egret.MainContext.instance.stage.stageWidth;
        _this.stageH = egret.MainContext.instance.stage.stageHeight;
        _this.music = RES.getRes("bgm_mp3");
        _this.SoundChannel = _this.music.play();
        _this.createView();
        return _this;
    }
    Bgm.prototype.createView = function () {
        this.texture = RES.getRes("bgm-stop_png");
        this.width = 93.0 * this.stageH / 2272;
        this.height = 87.0 * this.stageH / 2272;
        this.anchorOffsetX = this.width / 2;
        this.anchorOffsetY = this.height / 2;
        this.x = 99 * this.stageH / 2272;
        this.y = 2189 * this.stageH / 2272;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.playBgm, this);
    };
    Bgm.prototype.playBgm = function () {
        if (this.play) {
            this.texture = RES.getRes("bgm-play_png");
            this.SoundChannel.stop();
        }
        else {
            this.texture = RES.getRes("bgm-stop_png");
            this.SoundChannel = this.music.play();
        }
        this.play = !this.play;
    };
    return Bgm;
}(eui.Image));
__reflect(Bgm.prototype, "Bgm");
//# sourceMappingURL=Bgm.js.map