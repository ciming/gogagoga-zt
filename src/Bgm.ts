class Bgm extends eui.Image{
	private music:egret.Sound;
	private stageW: number;
    private stageH: number;
	private play = true;
	private SoundChannel;
	public constructor() {
		super();
		this.stageW = egret.MainContext.instance.stage.stageWidth;
        this.stageH = egret.MainContext.instance.stage.stageHeight;
		this.music = RES.getRes("bgm_mp3");
  		this.SoundChannel = this.music.play();
		this.createView();
	}
	private createView() {
		this.texture = RES.getRes("bgm-stop_png");
		this.width = 93.0*this.stageH/2272;
        this.height = 87.0*this.stageH/2272;
        this.anchorOffsetX = this.width/2;
        this.anchorOffsetY = this.height/2;
        this.x =99*this.stageH/2272;
        this.y = 2189*this.stageH/2272;
		this.addEventListener( egret.TouchEvent.TOUCH_TAP, this.playBgm, this );
	}

	private playBgm() {
		
		if(this.play){
			this.texture = RES.getRes("bgm-play_png");
			this.SoundChannel.stop();
		} else {
			this.texture = RES.getRes("bgm-stop_png");
			this.SoundChannel = this.music.play();
		}
		this.play = !this.play;
	}
}