import React, { Component } from 'react'
import { View,Video,Image,WebView  } from '@tarojs/components';
import style from "./index.module.scss";
import index1 from '../../datas/冬奥会18（找东西游戏）/1.jpg'
import list from '../../datas/冬奥会18（找东西游戏）/清单缩略图.png'
import listExpand from '../../datas/冬奥会18（找东西游戏）/清单.png';
import fork from '../../datas/冬奥会18（找东西游戏）/清单叉叉.png';
import piss from '../../datas/冬奥会18（找东西游戏）/尿泡.png';
import needle from '../../datas/冬奥会18（找东西游戏）/针线.png';
import boll from '../../datas/冬奥会18（找东西游戏）/球壳.png'
import piss1 from '../../datas/冬奥会18（找东西游戏）/尿泡对话（1） .mp4';
import piss1End from '../../datas/冬奥会18（找东西游戏）/尿泡对话（1）结束界面.jpg';
import piss2 from '../../datas/冬奥会18（找东西游戏）/尿泡对话（2）.mp4';
import piss2End from '../../datas/冬奥会18（找东西游戏）/尿泡对话（2）结束界面.jpg';
import needle1 from '../../datas/冬奥会18（找东西游戏）/针线对话.mp4';
import needle1End from '../../datas/冬奥会18（找东西游戏）/针线对话结束界面.jpg';
import boll1 from '../../datas/冬奥会18（找东西游戏）/球皮对话.mp4';
import boll1End from '../../datas/冬奥会18（找东西游戏）/球皮对话结束界面.jpg';
import node from '../../datas/冬奥会18（找东西游戏）/找错对话.png';
import makeBoll from '../../datas/冬奥会18（找东西游戏）/1球.jpg';
import makeBoll2 from '../../datas/冬奥会18（找东西游戏）/2球-点击剪刀后.jpg';
import makeBoll3 from '../../datas/冬奥会18（找东西游戏）/3球-点击针线后.jpg';
import makeBoll4 from '../../datas/冬奥会18（找东西游戏）/4球-点击白球后.jpg';
import makeBoll5 from '../../datas/冬奥会18（找东西游戏）/5球-点击针线后.jpg';
import putPiss1 from '../../datas/冬奥会18（找东西游戏）/动画放入(1)(1).mp4';
import putPiss2 from '../../datas/冬奥会18（找东西游戏）/动画放入(2).mp4';
import cutting from '../../datas/冬奥会18（找东西游戏）/动画裁剪(2).mp4';
import putCut from '../../datas/冬奥会18（找东西游戏）/动画缝合(2).mp4';
import makeFinallBoll from '../../datas/冬奥会18（找东西游戏）/做球.mp4';
import finalBoll from '../../datas/冬奥会18（找东西游戏）/动画做完改.mp4';
import Taro from "@tarojs/taro";

const arrayMake={1:makeBoll,2:makeBoll2,3:makeBoll3,4:makeBoll4,5:makeBoll5};

class gameOne extends Component{
  constructor(props){
    super(props);
    this.state={
        key:1,
        play:'',
        name:'123',
        isName:false,
        isPiss:true,
        isNeedle:true,
        isBoll:true,
        isNode:false,
        height:0,
        findPiss:false,
        findNeedle:false,
        findBoll:false,
        makeKey:1,
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleListener);
    this.setState({name:this.props.name})
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.state.key===0){
      Taro.createVideoContext('video').play();
    }
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleListener);
  }
  handleListener=(event)=>{
    // 滚动的高度
    const scrollTop = (event.srcElement ? event.srcElement.documentElement.scrollTop : false) || window.pageYOffset || (event.srcElement ? event.srcElement.body.scrollTop : 0);
    // 视窗高度
    const clientHeight = (event.srcElement && event.srcElement.documentElement.clientHeight) || document.body.clientHeight;
    // 页面高度
    const scrollHeight = (event.srcElement && event.srcElement.documentElement.scrollHeight) || document.body.scrollHeight;
    // 距离页面底部的高度
    const height =   scrollHeight - scrollTop - clientHeight ;
    // 判断距离页面底部的高度
    this.setState({height,});
  };

  handleSwitch=()=>{
    const {play} = this.state;
    let key=1,isName=false;
  if(play===piss1){
    key=2;
  }else if(play===piss2){
    key=3; this.setState({isName:true,findPiss:true})
  }else if(play===needle1){
    key=5;
  }else if(play===boll1){
    key=7
  }else if(play===cutting){
    key=9;
    this.setState({makeKey:2});
  } else if(play===putCut){
    key=9;this.setState({makeKey:3});
  } else if(play===putPiss2){
    key=9;this.setState({makeKey:4});
  }else if(play===finalBoll){
    key=0;this.setState({makeKey:5,play:makeFinallBoll});
  }else if(play===makeFinallBoll){
    key=9;this.setState({makeKey:5});
  }
    this.setState({key,isName})
  };
  handleFind=(item)=>{
    let key=0,play;
   if(item==='piss'){
     play=piss1;
     this.setState({isName:true,findPiss:false})
   }
   if(item==='needle'){
    play=needle1;
     this.setState({findNeedle:true})
   }
   if(item==='boll'){
    play=boll1;
     this.setState({findBoll:true})
   }
   this.setState({key,play})
  };
  handleToNumber=(index)=>{
   if(index===3){
     this.setState({play:piss2,key:0})
   }else if(index===4){
     this.setState({isPiss:false,key:1})
   }else if(index===6){
     this.setState({isNeedle:false,key:1})
   }else if(index===8){
     this.setState({isBoll:false,key:1})
   }
   this.handleReturn()
  };
  handleOther=()=>{
    this.setState({isNode:true})
  };
  handleReturn=()=>{
    const{findPiss,findNeedle,findBoll}=this.state;
    if(findPiss&&findNeedle&&findBoll){
      // this.props.returnBack();
      this.setState({key:9})
    }
  };

  handleMaking=(index)=>{
    let play=null;
    if(index===2){
      play=cutting;
    }else if(index===3){
     play = putCut;
    }else if(index===4){
     play=putPiss2;
    }else if(index===5){
      play=finalBoll;
    }
    this.setState({key:0,play,makeKey:index})
  };

  render() {
    const {key,play,name,isPiss,isName,isNeedle,isBoll,isNode,height,isList,findPiss,findNeedle,findBoll,makeKey} = this.state;
    return(
      <View className={key===1?style.contain:style.contain2} >
        {(play===piss1||play===piss1)&&
        <View className={style.name}>{name}</View>
        }
        {key===0&&
        <View>
           <Video src={play} id='video' muted  direction={-90} autoplay showCenterPlayBtn={false}  onFullscreenChange={()=>{console.log(234)}}  enableAutoRotation controls={false} onEnded={this.handleSwitch}>
        </Video>
      </View>
      }
        {key===1&&
        <View >
           <View className={style.listSet} style={{}} >
             <View className={style.list} style={{right:`${height}px`}} >
               <Image src={list} className={style.list} style={{right:`${height}px`}} onClick={()=>{this.setState({isList:true})}} />
               {findPiss&&<Image src={piss} className={style.minList3} />}
               {findNeedle&&<Image src={needle} className={style.minList2} />}
               {findBoll&&<Image src={boll} className={style.minList1} />}
             </View>

            <View>
              <Image src={index1} className={style.image} />
              <View  className={style.meat} onClick={this.handleOther} />
              <View  className={style.dao} onClick={this.handleOther} />
              <View  className={style.bucket} onClick={this.handleOther} />
              <View className={style.top1} onClick={this.handleOther} />
              <View className={style.top2} onClick={this.handleOther} />
              <View className={style.line} onClick={this.handleOther} />
              <View className={style.book} onClick={this.handleOther} />
              <View className={style.knight} onClick={this.handleOther} />
              <View className={style.fruit} onClick={this.handleOther} />
            </View>
            {isPiss&&<Image src={piss} className={style.piss} onClick={()=>this.handleFind('piss')}  />}
            {isNeedle&&<Image src={needle} className={style.needle} onClick={()=>this.handleFind('needle')} />}
            {isBoll&&<Image src={boll} className={style.boll} onClick={()=>this.handleFind('boll')} />}

          </View>
        </View>
        }
        {key===2&&
        <View>
          <Image src={piss1End} className={style.image2} />
          <View className={style.name}>{name}</View>
          <View className={style.clickImage9} onClick={()=>this.handleToNumber(3)} />
        </View>
        }
        {key===3&&
          <View>
            <Image src={piss2End} className={style.image2} />
            <View className={style.clickImage9} onClick={()=>this.handleToNumber(4)} />
          </View>
        }
        {key===5&&
        <View>
          <Image src={needle1End} className={style.image2} />
          <View className={style.name}>{name}</View>
          <View className={style.clickImage9} onClick={()=>this.handleToNumber(6)} />
        </View>
        }
        {key===7&&
        <View>
          <Image src={boll1End} className={style.image2} />
          <View className={style.name}>{name}</View>
          <View className={style.clickImage9} onClick={()=>this.handleToNumber(8)} />
        </View>
        }
        {isNode&&
        <View style={{position:'absolute',right:`${height-960}px`}} >
          <Image src={node} className={style.nodeImage}  onClick={()=>this.setState({isNode:false})} />
        </View>
        }
        {isList&&
          <View style={{position:'absolute',right:`${height-1150}px`,bottom:'10%'}}>
            <View className={style.listExpand}>
              <Image src={listExpand} className={style.listExpand}  onClick={()=>{this.setState({isList:false})}} />
              {findPiss&&<Image src={piss} className={style.list3} />}
              {findNeedle&&<Image src={needle} className={style.list2} />}
              {findBoll&&<Image src={boll} className={style.list1} />}
            </View>
          </View>
        }
        {key===9&&
        <View>
          <Image src={arrayMake[makeKey]} className={style.image2} onClick={()=>{makeKey===5?this.props.returnBack():null;}} />
          {makeKey===2&&
            <View className={style.cutNeedle} onClick={()=>this.handleMaking(3)} />
          }
          {makeKey===3&&
            <View className={style.cutPiss} onClick={()=>this.handleMaking(4)} />
          }
          {makeKey===1&&
          <View className={style.cutBoll} onClick={()=>this.handleMaking(2)} />
          }
          {makeKey===4&&
          <View className={style.cutBoll} onClick={()=>this.handleMaking(5)} />
          }
        </View>
        }
      </View> )
  }
}
 export default  gameOne;
