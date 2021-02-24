import React, { Component } from 'react'
import { View,Video,Image,Input,Button  } from '@tarojs/components'
import style  from'./index.module.scss'
import indexOne from '../../datas/冬奥会1.mp4';
import indexOneEnd from '../../datas/冬奥会2.gif';
import indexTwo from '../../datas/冬奥会3.mp4';
import indexTwoEnd from '../../datas/冬奥会3结束界面.jpg';
import indexThree from '../../datas/冬奥会4.mp4';
import indexThreeEnd from '../../datas/冬奥会5.gif';
import indexSix from '../../datas/冬奥会6.mp4';
import indexSixEnd from '../../datas/冬奥会6结束界面.jpg';
import indexSeven from '../../datas/冬奥会7.gif';
import indexEight from '../../datas/冬奥会8.jpg';
import indexNine from '../../datas/冬奥会9.mp4';
import indexNineEnd from '../../datas/冬奥会9结束界面.jpg';
import indexTen from '../../datas/冬奥会10.mp4';
import indexTenEnd from '../../datas/冬奥会10结束界面.jpg';
import indexEleven from '../../datas/冬奥会11.mp4';
import  indexElevenEnd from '../../datas/冬奥会11结束界面.jpg';
import index12 from '../../datas/冬奥会12.mp4';
import index12End from '../../datas/冬奥会12结束界面.jpg';
import index13 from '../../datas/冬奥会13.mp4';
import index13End from '../../datas/冬奥会13结束界面.jpg';
import index14 from '../../datas/冬奥会14.mp4';
import index14End from '../../datas/冬奥会14结束界面.jpg';
import index15 from '../../datas/冬奥会15.gif'
import index16 from '../../datas/冬奥会16.jpg'
import index17 from '../../datas/冬奥会17.jpg'
import index18 from '../../datas/冬奥会18.mp4';
import index18End from '../../datas/冬奥会18结束界面.jpg';
import index19 from '../../datas/冬奥会19.mp4';
import index19End from '../../datas/冬奥会19结束界面.jpg';
import index20 from '../../datas/冬奥会20.mp4';
import index20End from '../../datas/冬奥会20结束界面.jpg';
import index21 from '../../datas/冬奥会21.gif'
import index22 from '../../datas/冬奥会22.jpg'
import index22End from '../../datas/冬奥会22结束界面.jpg'
import Zdmarket from '../market';



export default class Index extends Component {
  state={
    key:23,
    play:indexOne,
    name:'123',
  };


  componentWillMount () {

  }

  componentDidMount () {
    // const video = document.getElementById('video');
    // video.requestFullscreen();
    // console.log(video,'video')
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleSwitch=()=>{
    const {play}=this.state;
    if(play===indexOne){
      this.setState({
        key:1
      })
    }else if(play===indexTwo){
      this.setState({
        key:2
      })
    }else if(play===indexThree){
      this.setState({
        key:3
      })
    }
    else if(play===indexSix){
      this.setState({
        key:6
      })
    }
    else if(play===indexNine){
      this.setState({
        key:9
      })
    }
    else if(play===indexTen){
      this.setState({
        key:10
      })
    }
    else if(play===indexEleven){
      this.setState({
        key:11
      })
    }
    else if(play===index12){
      this.setState({
        key:12
      })
    }
    else if(play===index13){
      this.setState({
        key:13
      })
    }
    else if(play===index14){
      this.setState({
        key:14
      })
    }
    else if(play===index18){
      this.setState({
        key:18
      })
    }
    else if(play===index19){
      this.setState({
        key:19
      })
    }
    else if(play===index20){
      this.setState({
        key:20
      })
    }
  };
  handleToNumber=(index)=>{
    if(index===2){
      this.setState({
        play:indexTwo,
        key:0
      });
      return;
    }else if(index === 3){
      this.setState({
        play:indexThree,
        key:0
      });
      return;
    }else if(index === 6){
      this.setState({
        play:indexSix,
        key:0,
      });
      return;
    }else if(index === 9){
      this.setState({
        play:indexNine,
        key:0,
      });
      return;
    }else if(index === 10){
      this.setState({
        play:indexTen,
        key:0,
      });
      return;
    }else if(index === 11){
      this.setState({
        play:indexEleven,
        key:0,
      });
      return;
    }else if(index === 12){
      this.setState({
        play:index12,
        key:0,
      });
      return;
    }
    else if(index === 14){
      this.setState({
        play:index14,
        key:0,
      });
      return;
    }else if(index === 18){
      this.setState({
        play:index18,
        key:0,
      });
      return;
    }else if(index === 19){
      this.setState({
        play:index19,
        key:0,
      });
      return;
    }else if(index === 20){
      this.setState({
        play:index20,
        key:0,
      });

      return;
    }
    this.setState({key:index})
  };
  handleInput=(e)=>{
    this.setState({name:e.detail.value})
  };
  handleComfirm=()=>{
    const {name}= this.state;
    if(name===''||name==='undefined'){
      return;
    }else{
      this.setState({key:0,play:index13})
    }
  };


  render () {
    const {key,play,name} =this.state;
    return (
      <View className={style.contain}  >
        {key===0&&
          <View>
            <Video id='video' src={play} muted direction={-90} autoplay showCenterPlayBtn={false}  onWaiting={{fullScreen:true}}    enableAutoRotation controls={false} onEnded={this.handleSwitch}>
            </Video>
          </View>
        }
        {key===1&&
          <View>
            <Image src={indexOneEnd} className={style.image} onClick={()=>this.handleToNumber(2)} />
          </View>
        }
        {key===2&&
        <View>
          <Image src={indexTwoEnd} className={style.image} />
          <View className={style.clickImage} onClick={()=>this.handleToNumber(3)} />
        </View>
        }
        {key===3&&
        <View>
          <Image src={indexThreeEnd} className={style.image} onClick={()=>this.handleToNumber(6)} />
        </View>
        }
        {key===6&&
        <View>
          <Image src={indexSixEnd} className={style.image} />
          <View className={style.clickImage6} onClick={()=>this.handleToNumber(7)} />
        </View>
        }
        {key===7&&
        <View>
          <Image src={indexSeven} className={style.image} />
          <View className={style.clickImage7} onClick={()=>this.handleToNumber(8)} />
        </View>
        }
        {key===8&&
        <View>
          <Image src={indexEight} className={style.image} />
          <View className={style.clickImage8} onClick={()=>this.handleToNumber(9)} />
        </View>
        }
        {key===9&&
        <View>
          <Image src={indexNineEnd} className={style.image} />
          <View className={style.clickImage9} onClick={()=>this.handleToNumber(10)} />
        </View>
        }
        {key===10&&
        <View>
          <Image src={indexTenEnd} className={style.image} />
          <View className={style.clickImage9} onClick={()=>this.handleToNumber(11)} />
        </View>
        }
        {key===11&&
        <View>
          <Image src={indexElevenEnd} className={style.image} />
          <View className={style.clickImage9} onClick={()=>this.handleToNumber(12)} />
        </View>
        }
        {key===12&&
        <View>
          <Image src={index12End} className={style.image} />
          <Input className={style.input} onInput={this.handleInput} />
          <view style={{position:'absolute',right:'-10%',bottom:100,width:100}}>
            <Button type='primary' size='mini' className={style.comfirm} onClick={this.handleComfirm}>确认</Button>
          </view>
        </View>
        }
        {key===13&&
        <View>
          <Image src={index13End} className={style.image} />
          <view className={style.name}>{name}</view>
          <View className={style.clickImage9} onClick={()=>this.handleToNumber(14)} />
        </View>
        }
        {key===14&&
        <View>
          <Image src={index14End} className={style.image} />
          <View className={style.clickImage9} onClick={()=>this.handleToNumber(15)} />
        </View>
        }
        {key===15&&
        <View>
          <Image src={index15} className={style.image} />
          <View className={style.clickImage15} onClick={()=>this.handleToNumber(16)} />
        </View>
        }
        {key===16&&
        <View>
          <Image src={index16} className={style.image} onClick={()=>this.handleToNumber(17)} />
        </View>
        }
        {key===17&&
        <View>
          <Image src={index17} className={style.image} />
          <View className={style.clickImage17} onClick={()=>this.handleToNumber(18)} />
        </View>
        }
        {key===18&&
        <View>
          <Image src={index18End} className={style.image} />
          <view className={style.name18}>{name}</view>
          <View className={style.clickImage9} onClick={()=>this.handleToNumber(19)} />
        </View>
        }
        {key===19&&
        <View>
          <Image src={index19End} className={style.image} />
          <View className={style.clickImage9} onClick={()=>this.handleToNumber(20)} />
        </View>
        }
        {key===20&&
        <View>
          <Image src={index20End} className={style.image} />
          <View className={style.clickImage9} onClick={()=>this.handleToNumber(21)} />
        </View>
        }
        {key===21&&
        <View>
          <Image src={index21} className={style.image} />
          <View className={style.clickImage21} onClick={()=>this.handleToNumber(22)} />
        </View>
        }
        {key===22&&
        <View>
          <Image src={index22} className={style.image} onClick={()=>this.handleToNumber(22.5)} />
        </View>
        }
        {key===22.5&&
        <View>
          <Image src={index22End} className={style.image} />
          <View className={style.clickImage23} onClick={()=>this.handleToNumber(23)} />
        </View>
        }
        {key===23&&
         <Zdmarket name={name} />
        }
      </View>
    )
  }
}
