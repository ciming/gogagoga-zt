//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.stageW = egret.MainContext.instance.stage.stageWidth;
        _this.stageH = egret.MainContext.instance.stage.stageHeight;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.createView, _this);
        _this.createView();
        return _this;
    }
    LoadingUI.prototype.createView = function () {
        this.setBackground();
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.loadGroup('loading');
    };
    /**
    * 资源加载完成事件
    */
    LoadingUI.prototype.onResourceLoadComplete = function (event) {
        if (event.groupName == "loading") {
            this.setProgressBar();
            this.setLogo();
            this.setGXB();
        }
    };
    LoadingUI.prototype.setBackground = function () {
        var background = new egret.Shape();
        background.graphics.beginFill(0xff9600, 1);
        background.graphics.drawRect(0, 0, this.stageW, this.stageH);
        background.graphics.endFill();
        this.addChild(background);
    };
    /**
     * 生成底部loading
     */
    LoadingUI.prototype.setLogo = function () {
        var logoPic = new eui.Image();
        logoPic.texture = RES.getRes("logo_png");
        logoPic.horizontalCenter = 0;
        logoPic.width = this.stageW * 0.18125;
        logoPic.height = logoPic.width / 232 * 114;
        logoPic.top = this.stageH * 0.905;
        this.addChild(logoPic);
    };
    /**
    * 设置果小宝
    */
    LoadingUI.prototype.setGXB = function () {
        var gxbGroup = new eui.Group();
        gxbGroup.horizontalCenter = 0;
        gxbGroup.top = this.stageH * 0.36;
        this.addChild(gxbGroup);
        var data = RES.getRes("gxb_mc_json");
        var txtr = RES.getRes("gxb_tex_png");
        var gxbFactory = new egret.MovieClipDataFactory(data, txtr);
        var gxb = new egret.MovieClip(gxbFactory.generateMovieClipData("gxb"));
        gxbGroup.addChild(gxb);
        gxb.scaleX = this.stageH / 2272.0;
        gxb.scaleY = this.stageH / 2272.0;
        gxb.play(-1);
    };
    /**
     * 设置进度条
     */
    LoadingUI.prototype.setProgressBar = function () {
        this.progressBar = new eui.Label();
        this.progressBar.text = "资源加载中";
        this.progressBar.horizontalCenter = 0;
        this.progressBar.top = this.stageH * 0.577;
        this.addChild(this.progressBar);
    };
    /**
     * 设置进度
     * @param {number} current 当前进度
     * @param {number} total 总进度
     */
    LoadingUI.prototype.setProgress = function (current, total) {
        if (this.progressBar) {
            this.progressBar.text = "\u8D44\u6E90\u52A0\u8F7D\u4E2D..." + current + "/" + total;
        }
    };
    return LoadingUI;
}(eui.UILayer));
__reflect(LoadingUI.prototype, "LoadingUI");
//# sourceMappingURL=LoadingUI.js.map