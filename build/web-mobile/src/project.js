require=function o(l,s,c){function r(i,e){if(!s[i]){if(!l[i]){var t="function"==typeof require&&require;if(!e&&t)return t(i,!0);if(d)return d(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var n=s[i]={exports:{}};l[i][0].call(n.exports,function(e){var t=l[i][1][e];return r(t||e)},n,n.exports,o,l,s,c)}return s[i].exports}for(var d="function"==typeof require&&require,e=0;e<c.length;e++)r(c[e]);return r}({AudioManager:[function(e,t,i){"use strict";cc._RF.push(t,"f4552WSbpFETpfiW9qGVqZS","AudioManager"),cc.Class({extends:cc.Component,properties:{bgmVolume:1,sfxVolume:1,bgmAudioID:-1,defaultMusicIndex:0},start:function(){},getUrl:function(e){return cc.url.raw("resources/"+e)},playMJBGM:function(e){this.playBGM("bgmusic/game_backmusic_0.mp3",0)},playBGM:function(e,t){var i=this.getUrl(e);-1!=this.bgmAudioID&&cc.audioEngine.stop(this.bgmAudioID),this.bgmAudioID=cc.audioEngine.play(i,!0,window.bgMusicvol),this.setBGMVolume(window.bgMusicvol)},stopBGM:function(){0<=this.bgmAudioID&&cc.audioEngine.stop(this.bgmAudioID)},playSFX:function(e){var t=this.getUrl(e);cc.audioEngine.play(t,!1,1)},setSFXVolume:function(e){console.log("setSFXVolume = "+e),this.sfxVolume,this.sfxVolume=e,window.bgFxvolRecord!=e&&(window.bgFxvol=e)},setBGMVolume:function(e){var t=0;t=0==cc.nab.audioManager.getBGMSetting().backGroundMusicVolume?0:"1"==window.voiceMode?window.bgMusicvolRealTime:e,cc.audioEngine.setVolume(this.bgmAudioID,t)},pauseAll:function(){cc.audioEngine.pauseAll()},resumeAll:function(){cc.audioEngine.resumeAll()},playGameEffectType:function(e){var t="";e==window.GameStageType.stage_1_box||e==window.GameStageType.stage_2_double_box||e==window.GameStageType.stage_3_box_left_down||e==window.GameStageType.stage_4_box_right_down||e==window.GameStageType.stage_5_box_right_up||e==window.GameStageType.stage_6_box_left_up||e==window.GameStageType.stage_11_box_type1||e==window.GameStageType.stage_12_box_type2||e==window.GameStageType.stage_13_box_type3||e==window.GameStageType.stage_16_box_type4||e==window.GameStageType.stage_17_box_type5||e==window.GameStageType.stage_20_box_type6?t="pfx/01.mp3":e==window.GameStageType.stage_7_line_hor||e==window.GameStageType.stage_8_line_ver?t="pfx/04.mp3":e==window.GameStageType.stage_7_line_hor||e==window.GameStageType.stage_9_line_bomb?t="pfx/03.mp3":e!=window.GameStageType.stage_21_ball_add1&&e!=window.GameStageType.stage_24_ball_fensan||(t="pfx/10.mp3"),""!=t&&this.playSFX(t)},playGameWinEffect:function(){this.playSFX("pfx/11.mp3")},playGameFailEffect:function(){this.playSFX("pfx/09.mp3")},playClickEffect:function(){this.playSFX("pfx/01.mp3")},playClickNpc:function(){this.playSFX("Npc/npc-stand.mp3")},playMjOperatorEffect:function(e,t){var i,a="women";1==t&&(a="man"),i="mjSounds/"+a+"/"+a+"_"+e+".mp3",this.playSFX(i)}}),cc._RF.pop()},{}],HallCtrl:[function(a,e,t){"use strict";cc._RF.push(e,"7bbf7BzkcBOdJAvt0Pl3Y99","HallCtrl"),cc.Class({extends:cc.Component,properties:{contentView:{default:null,type:cc.Node},editView:{default:null,type:cc.Node}},onLoad:function(){if(!cc.game.audioManager){var e=a("AudioManager");cc.audioManager=new e}for(var t=this.contentView.children,i=0;i<t.length;i++)t[i].getChildByName("label").getComponent(cc.Label).string=i+1},start:function(){},clickItem:function(e,t){var i=e.target.getChildByName("label").getComponent(cc.Label).string;console.log("level = "+i),window.gameLevel=i,cc.director.loadScene("bounceGameAll"),cc.audioManager.playClickEffect()},clickEnterLevel:function(){var e=this.editView.getComponent(cc.EditBox).string;try{var t=parseInt(e);0<t&&t<3e3&&(window.gameLevel=t,cc.director.loadScene("bounceGameAll"),cc.audioManager.playClickEffect())}catch(e){console.log(e)}}}),cc._RF.pop()},{AudioManager:"AudioManager"}],boll:[function(e,t,i){"use strict";cc._RF.push(t,"46e33Lf/o1NJrSwDSrTdW6w","boll"),cc.Class({extends:cc.Component,properties:{},onBeginContact:function(e,t,i){if(cc.audioManager.playGameEffectType(i.node.name),this.isGetScoreNode(i.node)){var a=i.getComponent(cc.Sprite),n=i.node.getChildByName("scoreLabel").getComponent(cc.Label),o=parseInt(n.string);1==o?a.node.destroy():n.string=(--o).toString();var l=this.hslToRgb(.025*o,.5,.5);i.node.getChildByName("boxBgView").setColor(cc.color(l[0],l[1],l[2]))}else this.isLifeBall(i.node)&&(i.node.destroy(),t.node.game.addBolls++);t.node.game.playLineAni(i.node,t)},isGetScoreNode:function(e){return e.name==window.GameStageType.stage_1_box||e.name==window.GameStageType.stage_2_double_box||e.name==window.GameStageType.stage_3_box_left_down||e.name==window.GameStageType.stage_4_box_right_down||e.name==window.GameStageType.stage_5_box_right_up||e.name==window.GameStageType.stage_6_box_left_up||e.name==window.GameStageType.stage_11_box_type1||(e.name==window.GameStageType.stage_12_box_type2||e.name==window.GameStageType.stage_13_box_type3||e.name==window.GameStageType.stage_16_box_type4||e.name==window.GameStageType.stage_17_box_type5)&&0==e.getChildByName("imgclose").active},isLifeBall:function(e){return e.name==window.GameStageType.stage_21_ball_add1},hslToRgb:function(e,t,i){var a,n,o;if(0==t)a=n=o=i;else{var l=function(e,t,i){return i<0&&(i+=1),1<i&&(i-=1),i<1/6?e+6*(t-e)*i:i<.5?t:i<2/3?e+(t-e)*(2/3-i)*6:e},s=i<.5?i*(1+t):i+t-i*t,c=2*i-s;a=l(c,s,e+1/3),n=l(c,s,e),o=l(c,s,e-1/3)}return[Math.round(255*a),Math.round(255*n),Math.round(255*o)]}}),cc._RF.pop()},{}],bounceGame:[function(e,t,i){"use strict";cc._RF.push(t,"9ee48eR4DtEmZNt1HYcUdPD","bounceGame"),window.GameStage=cc.Enum({stage_lifeBall1:"stage_lifeball1",stage_lifeBall2:"stage_lifeball2",stage_lifeBall3:"stage_lifeball3",stage_box1:"stage_box1",stage_box2:"stage_box2",stage_box3:"stage_box3",stage_box4:"stage_box4",stage_box5:"stage_box5",stage_box6:"stage_box6",stage_box7:"stage_box7",stage_box8:"stage_box8",stage_box9:"stage_box9",stage_box10:"stage_box10",stage_line_hor:"stage_horline",stage_line_ver:"stage_verline",stage_line_random:"stage_line_random",stage_line_bomb:"stage_bombline",stage_line_horAni:"stage_horlineAni",stage_line_verAni:"stage_verlineAni",stage_line_bombAni:"stage_bombAni"}),cc.Class({extends:cc.Component,properties:{bollDown:!1,isBegin:!1,isActivity:!1,isFirstBoll:!1,firstBollPositionX:0,allBolls:0,tampBolls:0,addBolls:0,level:1,ballPositonY:-302,topBoxY:380,boxWidth:58,boxHeight:58,indexBoll:{default:null,type:cc.Sprite},boxPrefab:{default:[],type:cc.Prefab},bollPrefab:{default:null,type:cc.Prefab},stagePrefabs:{default:[],type:cc.Prefab},lifePrefab:{default:null,type:cc.Prefab},lineBoxAni:{default:[],type:cc.Prefab},ground:{default:null,type:cc.Node},ballLink:{default:null,type:cc.Sprite},levelLabel:{default:null,type:cc.Label},allBollsLabel:{default:null,type:cc.Label},rockAudio:{default:null,url:cc.AudioClip},circleAudio:{default:null,url:cc.AudioClip}},onLoad:function(){cc.director.getPhysicsManager().enabled=!0,cc.director.getCollisionManager().enabled=!0,this.indexBoll.node.setPosition(cc.v2(this.firstBollPositionX,this.ballPositonY)),this.ballLink.node.setPosition(cc.v2(this.firstBollPositionX,this.ballPositonY)),this.ballLink.enabled=!1,(this.ground.getComponent("groundSprite").game=this).initBox(),this.allBolls=1,this.level=1,this.node.on(cc.Node.EventType.TOUCH_START,function(e){this.touchStart(e)}.bind(this),this),this.node.on(cc.Node.EventType.TOUCH_MOVE,function(e){this.touchMove(e)}.bind(this),this),this.node.on(cc.Node.EventType.TOUCH_END,function(e){this.touchEnd(e)}.bind(this),this),this.createBall()},createBall:function(){for(var e=!1,t=0;t<11;t++){if(1==Math.ceil(10*Math.random())%3)if(1==Math.ceil(10*Math.random())%2&&0==e)e=!0,this.createStageLine(t);else{var i=cc.instantiate(this.boxPrefab[this.randomFrom(1,9)]),a=i.getChildByName("scoreLabel"),n=Math.ceil(10*Math.random())%2;a&&(a.getComponent(cc.Label).string=1==n?2*this.level:this.level),this.node.addChild(i),i.setPosition(t*this.boxWidth-320+this.boxWidth/2,this.topBoxY);var o=this.hslToRgb(.025*this.level,.5,.5);i.setColor(cc.color(o[0],o[1],o[2]))}}},createStageLine:function(e){this.randomFrom(0,2);var t=cc.instantiate(this.stagePrefabs[3]),i=e*this.boxWidth-320+this.boxWidth/2;t.setPosition(i,this.topBoxY),this.node.addChild(t)},isLifeBox:function(e){return e==window.GameStage.stage_lifeBall1||e==window.GameStage.stage_lifeBall2||e==window.GameStage.stage_lifeBall3},isScoreBox:function(e){return e==window.GameStage.stage_box1||e==window.GameStage.stage_box2||e==window.GameStage.stage_box3||e==window.GameStage.stage_box4||e==window.GameStage.stage_box5||e==window.GameStage.stage_box6||e==window.GameStage.stage_box9},isStageLine:function(e){return e==window.GameStage.stage_line_hor||e==window.GameStage.stage_line_ver||e==window.GameStage.stage_line_bomb||e==window.GameStage.stage_line_random},isStageLineAni:function(e){return e==window.GameStage.stage_line_horAni||e==window.GameStage.stage_line_verAni||e==window.GameStage.stage_line_bombAni},initBox:function(){if(this.level++,this.levelLabel.getComponent(cc.Label).string="分数："+this.level,1==this.isBegin){for(var e=this.node.children,t=0;t<e.length;t++){var i=e[t];(this.isLifeBox(i.name)||this.isScoreBox(i.name)||this.isStageLine(i.name)||name==window.GameStage.stage_line_horAni||name==window.GameStage.stage_line_bombAni)&&i.position.y<=this.topBoxY&&(i.y-=this.boxHeight,i.y<=this.ballPositonY&&this.showGameOver()),i.name!=window.GameStage.stage_box8&&i.name!=window.GameStage.stage_box9||(i.getChildByName("imgclose").active=!i.getChildByName("imgclose").active)}this.createBall(),this.bollDown=!1}},randomLine:function(e,t){if(e.name==window.GameStage.stage_line_random){this.randomFrom(0,2);2;var i=t.body.linearVelocity.x,a=t.body.linearVelocity.y;i<0&&(i=-i),a<0&&(a=-a);var n=i+a,o=0,l=0;l=o=n/2,t.body.linearVelocity=cc.v2(o,l)}},playLineAni:function(e,t){if(this.randomLine(e,t),e.name==window.GameStage.stage_line_hor||e.name==window.GameStage.stage_line_ver||e.name==window.GameStage.stage_line_bomb){var i="";e.name==window.GameStage.stage_line_hor?i=window.GameStage.stage_line_horAni:e.name==window.GameStage.stage_line_ver?i=window.GameStage.stage_line_verAni:e.name==window.GameStage.stage_line_bomb&&(i=window.GameStage.stage_line_bombAni);for(var a=this.node.children,n=0;n<a.length;n++){var o=a[n];if(o.y==e.y&&o.name==i)o.getComponent("lineBoxAni").runAnimation();else if(o.x==e.x&&o.name==i){o.getComponent("lineBoxAni").runAnimation()}o.y==e.y&&i==window.GameStage.stage_line_horAni&&this.reduceOneBox(o),o.x==e.x&&i==window.GameStage.stage_line_verAni&&this.reduceOneBox(o),o.x!=e.x&&o.y!=e.y||i!=window.GameStage.stage_line_bombAni||this.reduceBox(o)}}},reduceOneBox:function(e){var t=e.getChildByName("scoreLabel");if(t){var i=t.getComponent(cc.Label),a=parseInt(i.string);1==a?e.destroy():i.string=(--a).toString();this.hslToRgb(.025*a,.5,.5)}},reduceBox:function(e){e&&e.destroy()},touchStart:function(e){if(this.ballLink.node.setPosition(cc.v2(this.firstBollPositionX,this.ballPositonY)),0==this.isActivity){var t=e.touch._startPoint.x;this.ballLink.node.setRotation(t)}},touchMove:function(e){if(0==this.isActivity){this.ballLink.enabled=!0;var t=e.touch._point.x;this.ballLink.node.setRotation(t),this.ballLink.node.rotation<280&&this.ballLink.node.setRotation(280),440<this.ballLink.node.rotation&&this.ballLink.node.setRotation(440)}},touchEnd:function(e){0==this.isActivity&&(this.ballLink.enabled=!1,this.allBollsLabel.enabled=!1,0==this.isBegin&&(this.isBegin=!0),this.schedule(function(){var e=cc.instantiate(this.bollPrefab);this.node.addChild(e),e.game=this,e.setPosition(cc.v2(this.firstBollPositionX,this.ballPositonY));var t=e.getComponent(cc.RigidBody),i=-this.ballLink.node.rotation-270,a=200*Math.cos(.017453293*i),n=200*Math.sin(.017453293*i);t.linearVelocity=cc.v2(20*a,20*n)}.bind(this),.08,this.allBolls-1),this.schedule(function(){this.indexBoll.enabled=!1,this.isFirstBoll=!1}.bind(this),.08*(this.allBolls-1),1),this.isActivity=!0)},showTishiLine:function(){this.ballLink.enabled=!0},showGameOver:function(){cc.director.loadScene("bounceGame")},update:function(e){1==this.bollDown&&this.initBox(),1==this.isFirstBoll&&(this.indexBoll.enabled=!0,this.indexBoll.node.setPosition(cc.v2(this.firstBollPositionX,this.ballPositonY)))},hslToRgb:function(e,t,i){var a,n,o;if(0==t)a=n=o=i;else{var l=function(e,t,i){return i<0&&(i+=1),1<i&&(i-=1),i<1/6?e+6*(t-e)*i:i<.5?t:i<2/3?e+(t-e)*(2/3-i)*6:e},s=i<.5?i*(1+t):i+t-i*t,c=2*i-s;a=l(c,s,e+1/3),n=l(c,s,e),o=l(c,s,e-1/3)}return[Math.round(255*a),Math.round(255*n),Math.round(255*o)]},randomFrom:function(e,t){return Math.floor(Math.random()*(t-e+1)+e)}}),cc._RF.pop()},{}],box:[function(e,t,i){"use strict";cc._RF.push(t,"64d28CtzUZHU6zwDKNtyRk2","box"),cc.Class({extends:cc.Component,properties:{boxtag:0},start:function(){}}),cc._RF.pop()},{}],gameCtr:[function(e,t,i){"use strict";var a;function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}cc._RF.push(t,"eadeeqNNm5NbLIvmWaMbYhD","gameCtr"),window.GameStageType=cc.Enum({stage_0_space:"0",stage_1_box:"1",stage_2_double_box:"2",stage_3_box_left_down:"3",stage_4_box_right_down:"4",stage_5_box_right_up:"5",stage_6_box_left_up:"6",stage_7_line_hor:"7",stage_8_line_ver:"8",stage_9_line_bomb:"9",stage_11_box_type1:"11",stage_12_box_type2:"12",stage_13_box_type3:"13",stage_16_box_type4:"16",stage_17_box_type5:"17",stage_20_box_type6:"20",stage_21_ball_add1:"21",stage_24_ball_fensan:"24",stage_100_ani_line_hor:"stage_horlineAni",stage_100_ani_line_ver:"stage_verlineAni",stage_100_ani_line_bomb:"stage_bomblineAni"}),cc.Class((n(a={extends:cc.Component,properties:{bollDown:!1,isBegin:!1,isActivity:!1,isFirstBoll:!1,firstBollPositionX:0,tempFrstBollPositionX:0,allBolls:0,tampBolls:0,addBolls:0,level:1,ballPositonY:-302,topBoxY:380,boxWidth:58,boxHeight:58,indexBoll:{default:null,type:cc.Sprite},boxPrefab:{default:[],type:cc.Prefab},bollPrefab:{default:null,type:cc.Prefab},gameStagePrefabs:{default:[],type:cc.Prefab},lifePrefab:{default:null,type:cc.Prefab},lineBoxAni:{default:[],type:cc.Prefab},ground:{default:null,type:cc.Node},gameOverNode:{default:null,type:cc.Node},gamePauseNode:{default:null,type:cc.Node},ballLink:{default:null,type:cc.Sprite},levelLabel:{default:null,type:cc.Label},allBollsLabel:{default:null,type:cc.Label},rockAudio:{default:null,url:cc.AudioClip},circleAudio:{default:null,url:cc.AudioClip},numArray:[],typeArray:[],startNum:0},cleanGame:function(){this.isActivity=!1,this.firstBollPositionX=0,this.allBollsLabel.node.x=this.firstBollPositionX+40;for(var e=this.node.children,t=e.length;0<t;t--){var i=e[t];i&&((this.isCanDownNode(i)||this.isAllowDownNode(i))&&(i.removeFromParent(),i.destroy()),"bollSprite"==i.name&&(i.uuid==this.indexBoll.node.uuid?(this.indexBoll.node.setPosition(cc.v2(0,this.ballPositonY)),this.indexBoll.enabled=!0):(i.removeFromParent(),i.destroy())))}},analysisMapData:function(e){this.cleanGame(),this.numArray=[],this.typeArray=[];for(var t=!1,i=0;i<e.length;i++)if(-1==e[i].indexOf("data=")&&-1==e[i].indexOf("[layer]")&&-1==e[i].indexOf("type=Tile Layer 1"))if(-1!=e[i].indexOf("type=Tile Layer 2"))t=!0;else if(1==t){var a=e[i].split(",");this.numArray.push(a)}else{var n=e[i].split(",");this.typeArray.push(n)}this.isBegin=!0;for(var o=0,l=this.typeArray.length;0<=l&&12!=o;l--)o++,this.boxDownMove(!0),this.startNum=l,this.createCellBall(this.typeArray[l],this.numArray[l])},createCellBall:function(e,t){for(var i=0;i<11;i++)try{var a=e[i];if(!this.gameStagePrefabs[a])continue;var n=cc.instantiate(this.gameStagePrefabs[a]);n.setPosition(i*this.boxWidth-320+this.boxWidth/2,this.topBoxY),this.node.addChild(n),a!=window.GameStageType.stage_7_line_hor&&a!=window.GameStageType.stage_8_line_ver&&a!=window.GameStageType.stage_9_line_bomb||this.createStageLine(i,a);var o=n.getChildByName("scoreLabel");o&&(o.getComponent(cc.Label).string=t[i])}catch(e){}},boxDownMove:function(e){this.level++;var t=!1;if(1==this.isBegin){for(var i=!0,a=this.node.children,n=0;n<a.length;n++){var o=a[n];(this.isCanDownNode(o)||1==e&&this.isAllowDownNode(o))&&(i=!1,o.position.y<=this.topBoxY&&(o.y-=this.boxHeight,o.y<=this.ballPositonY&&(t=!0))),1!=e&&(o.name!=window.GameStageType.stage_16_box_type4&&o.name!=window.GameStageType.stage_17_box_type5||(o.getChildByName("imgclose").active=!o.getChildByName("imgclose").active))}this.bollDown=!1,t&&this.showGameOver(),i&&1!=e&&(window.gameLevel=window.gameLevel+1,this.readLevelConfig(),console.log("过关"),cc.audioManager.playGameWinEffect())}},isCanDownNode:function(e){return e.name==window.GameStageType.stage_1_box||e.name==window.GameStageType.stage_2_double_box||e.name==window.GameStageType.stage_3_box_left_down||e.name==window.GameStageType.stage_4_box_right_down||e.name==window.GameStageType.stage_5_box_right_up||e.name==window.GameStageType.stage_6_box_left_up||e.name==window.GameStageType.stage_7_line_hor||e.name==window.GameStageType.stage_8_line_ver||e.name==window.GameStageType.stage_9_line_bomb||e.name==window.GameStageType.stage_16_box_type4||e.name==window.GameStageType.stage_17_box_type5||e.name==window.GameStageType.stage_21_ball_add1||e.name==window.GameStageType.stage_24_ball_fensan||e.name==window.GameStageType.stage_100_ani_line_hor||e.name==window.GameStageType.stage_100_ani_line_bomb},isAllowDownNode:function(e){return e.name==window.GameStageType.stage_11_box_type1||e.name==window.GameStageType.stage_12_box_type2||e.name==window.GameStageType.stage_13_box_type3||e.name==window.GameStageType.stage_16_box_type4||e.name==window.GameStageType.stage_17_box_type5||e.name==window.GameStageType.stage_20_box_type6||e.name==window.GameStageType.stage_7_line_hor||e.name==window.GameStageType.stage_8_line_ver||e.name==window.GameStageType.stage_9_line_bomb||e.name==window.GameStageType.stage_16_box_type4||e.name==window.GameStageType.stage_17_box_type5||e.name==window.GameStageType.stage_21_ball_add1||e.name==window.GameStageType.stage_24_ball_fensan||e.name==window.GameStageType.stage_100_ani_line_hor||e.name==window.GameStageType.stage_100_ani_line_bomb},onLoad:function(){this.readLevelConfig(),cc.director.getPhysicsManager().enabled=!0,cc.director.getCollisionManager().enabled=!0,this.indexBoll.node.setPosition(cc.v2(this.firstBollPositionX,this.ballPositonY)),this.ballLink.node.setPosition(cc.v2(this.firstBollPositionX,this.ballPositonY)),this.ballLink.enabled=!1,(this.ground.getComponent("groundSprite").game=this).allBolls=30,this.allBollsLabel.getComponent(cc.Label).string="x"+this.allBolls,this.level=1,this.node.on(cc.Node.EventType.TOUCH_START,function(e){this.touchStart(e)}.bind(this),this),this.node.on(cc.Node.EventType.TOUCH_MOVE,function(e){this.touchMove(e)}.bind(this),this),this.node.on(cc.Node.EventType.TOUCH_END,function(e){this.touchEnd(e)}.bind(this),this)},readLevelConfig:function(){var a=this;this.levelLabel.getComponent(cc.Label).string="关卡："+window.gameLevel,cc.loader.loadRes("map/mapdata"+window.gameLevel,function(e,t){var i=t.split("\n");a.analysisMapData(i),console.log("1")})},createStageLine:function(e,t){if(t==window.GameStageType.stage_7_line_hor)t=0;else{if(t!=window.GameStageType.stage_8_line_ver)return;t=1}var i=cc.instantiate(this.lineBoxAni[t]),a=0,n=0;0==t?(a=0,n=this.topBoxY):1==t&&(a=e*this.boxWidth-320+this.boxWidth/2,n=80),i.x=a,i.y=n,this.node.addChild(i)},randomLine:function(e,t){if(e.name==window.GameStageType.stage_24_ball_fensan){this.randomFrom(0,2);2;var i=t.body.linearVelocity.x,a=t.body.linearVelocity.y;i<0&&(i=-i),a<0&&(a=-a);var n=i+a,o=0,l=0;l=o=n/2,t.body.linearVelocity=cc.v2(o,l)}},playLineAni:function(e,t){if(this.randomLine(e,t),e.name==window.GameStageType.stage_7_line_hor||e.name==window.GameStageType.stage_8_line_ver||e.name==window.GameStageType.stage_9_line_bomb){var i="";e.name==window.GameStageType.stage_7_line_hor?i=window.GameStageType.stage_100_ani_line_hor:e.name==window.GameStageType.stage_8_line_ver?i=window.GameStageType.stage_100_ani_line_ver:e.name==window.GameStageType.stage_9_line_bomb&&(i=window.GameStageType.stage_100_ani_line_bomb);for(var a=this.node.children,n=0;n<a.length;n++){var o=a[n];if(o.y==e.y&&o.name==i)o.getComponent("lineBoxAni").runAnimation();else if(o.x==e.x&&o.name==i){o.getComponent("lineBoxAni").runAnimation()}o.y==e.y&&i==window.GameStageType.stage_100_ani_line_hor&&this.reduceOneBox(o),o.x==e.x&&i==window.GameStageType.stage_100_ani_line_ver&&this.reduceOneBox(o),o.y==e.y&&i==window.GameStageType.stage_100_ani_line_bomb&&this.reduceBox(o)}}},reduceOneBox:function(e){var t=e.getChildByName("scoreLabel");if(t){var i=t.getComponent(cc.Label),a=parseInt(i.string);1==a?e.destroy():i.string=(--a).toString();this.hslToRgb(.025*a,.5,.5)}},reduceBox:function(e){e&&e.destroy()},touchStart:function(e){if(this.ballLink.node.setPosition(cc.v2(this.firstBollPositionX,this.ballPositonY)),0==this.isActivity){var t=e.touch._startPoint.x;this.ballLink.node.setRotation(t)}},touchMove:function(e){if(0==this.isActivity){this.ballLink.enabled=!0;var t=e.touch._point.x;this.ballLink.node.setRotation(t),this.ballLink.node.rotation<280&&this.ballLink.node.setRotation(280),440<this.ballLink.node.rotation&&this.ballLink.node.setRotation(440)}},touchEnd:function(e){0==this.isActivity&&(this.ballLink.enabled=!1,this.allBollsLabel.enabled=!1,0==this.isBegin&&(this.isBegin=!0),this.tempFrstBollPositionX=this.firstBollPositionX,this.schedule(this.bollStartRun,.1,this.allBolls-1),this.isFirstBoll=!1,this.indexBoll.enabled=!1,this.isActivity=!0)},bollStartRun:function(){var e=cc.instantiate(this.bollPrefab);this.node.addChild(e),e.game=this,e.setPosition(cc.v2(this.tempFrstBollPositionX,this.ballPositonY));var t=e.getComponent(cc.RigidBody),i=-this.ballLink.node.rotation-270,a=200*Math.cos(.017453293*i),n=200*Math.sin(.017453293*i);t.linearVelocity=cc.v2(15*a,15*n)},showTishiLine:function(){this.ballLink.enabled=!0},showGameOver:function(){console.log("游戏结束"),cc.audioManager.playGameFailEffect()},update:function(e){1==this.bollDown&&(this.boxDownMove(),this.startNum--,0<=this.startNum&&this.createCellBall(this.typeArray[this.startNum],this.numArray[this.startNum])),1==this.isFirstBoll&&(this.indexBoll.enabled=!0,this.indexBoll.node.setPosition(cc.v2(this.firstBollPositionX,this.ballPositonY)))}},"showGameOver",function(){this.gameOverNode.active=!0}),n(a,"showGamePause",function(){this.gamePauseNode.active=!0}),n(a,"clickBtnContinue",function(){this.gamePauseNode.active=!1,this.gameOverNode.active=!1}),n(a,"clickBtnRestart",function(){this.unschedule(this.bollStartRun),this.readLevelConfig(),this.gamePauseNode.active=!1}),n(a,"clickBtnBack",function(){cc.director.loadScene("hall")}),n(a,"hslToRgb",function(e,t,i){var a,n,o;if(0==t)a=n=o=i;else{var l=function(e,t,i){return i<0&&(i+=1),1<i&&(i-=1),i<1/6?e+6*(t-e)*i:i<.5?t:i<2/3?e+(t-e)*(2/3-i)*6:e},s=i<.5?i*(1+t):i+t-i*t,c=2*i-s;a=l(c,s,e+1/3),n=l(c,s,e),o=l(c,s,e-1/3)}return[Math.round(255*a),Math.round(255*n),Math.round(255*o)]}),n(a,"randomFrom",function(e,t){return Math.floor(Math.random()*(t-e+1)+e)}),a)),cc._RF.pop()},{}],groundSprite:[function(e,t,i){"use strict";cc._RF.push(t,"7061e552B9BQZZm3GGw6d+3","groundSprite"),cc.Class({extends:cc.Component,properties:{isTouchBoll:!1,game:{default:null,serializable:!1}},onLoad:function(){},onBeginContact:function(e,t,i){"bollSprite"==i.node.name&&(i.node.destroy(),0==this.isTouchBoll&&(this.game.firstBollPositionX=i.node.x,this.isTouchBoll=!0,this.game.isFirstBoll=!0),this.game.tampBolls++,this.game.tampBolls==this.game.allBolls&&(this.game.allBolls+=this.game.addBolls,this.game.addBolls=0,this.game.bollDown=!0,this.game.tampBolls=0,this.isTouchBoll=!1,this.game.isActivity=!1,this.game.allBollsLabel.enabled=!0,this.game.allBollsLabel.getComponent(cc.Label).string="x "+this.game.allBolls,this.game.allBollsLabel.node.x=this.game.firstBollPositionX+40))},start:function(){}}),cc._RF.pop()},{}],lifeBox:[function(e,t,i){"use strict";cc._RF.push(t,"6700apouQpBKYVEhPCOXU/q","lifeBox"),cc.Class({extends:cc.Component,properties:{},onBeginContact:function(e,t,i){"bollSprite"==i.node.name&&t.node.destroy()}}),cc._RF.pop()},{}],lineBoxAni:[function(e,t,i){"use strict";cc._RF.push(t,"45ad6lK5IdHi6Yq9V07lAM9","lineBoxAni"),cc.Class({extends:cc.Component,properties:{_anum:0},onLoad:function(){this.node.active=!1},onEnable:function(){},runAnimation:function(){this.node.active=!0;var e=cc.sequence(cc.scaleTo(.1,1,0),cc.scaleTo(.1,1,1)),t=cc.repeat(e,5);this.node.runAction(t);var i=cc.sequence(cc.fadeIn(.1),cc.fadeOut(.1)),a=cc.repeat(i,2);this.node.runAction(a)},start:function(){},update:function(e){}}),cc._RF.pop()},{}]},{},["AudioManager","boll","bounceGame","box","HallCtrl","gameCtr","groundSprite","lifeBox","lineBoxAni"]);