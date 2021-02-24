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
        findPiss:true,
        findNeedle:true,
        findBoll:true,
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleListener)
    this.setState({name:this.props.name})
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
    key=3;
  }else if(play===needle1){
    key=5;
  }else if(play===boll1){
    key=7
  }
    this.setState({key,isName})
  };
  handleFind=(item)=>{
    let key=0,play;
   if(item==='piss'){
     play=piss1;
     this.setState({isName:true,findPiss:true})
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
  };
  handleOther=()=>{
    this.setState({isNode:true})
  };
  render() {
    const {key,play,name,isPiss,isNeedle,isBoll,isName,isNode,height,isList,findPiss,findNeedle,findBoll} = this.state;
    return(
      <View className={key===1?style.contain:style.contain2} >
        {key===0&&
        <View>
          {play===piss1&&
            <View className={style.name}>{name}</View>
          }
           <Video src={play} direction={-90} autoplay showCenterPlayBtn={false}    enableAutoRotation controls={false} onEnded={this.handleSwitch}>
        </Video>
      </View>
      }
        {key===1&&
        <View >
           <View className={style.listSet} style={{}} >
              <Image src={list} className={style.list} style={{right:`${height}px`}} onClick={()=>{this.setState({isList:true})}} />
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
      </View> )
  }
}
 export default  gameOne;
