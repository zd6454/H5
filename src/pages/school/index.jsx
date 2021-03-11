import React, { Component } from 'react'
import { View,Video,Image  } from '@tarojs/components';
import  style from './index.module.scss';
import index1 from '../../datas/冬奥会学堂1.mp4';
import index1End from '../../datas/冬奥会学堂1结束界面.jpg';
import index2 from '../../datas/冬奥会学堂2.gif';
import index3 from '../../datas/冬奥会学堂3.mp4';
import index3End from '../../datas/冬奥会学堂3结束界面.jpg';
import index4 from '../../datas/冬奥会学堂4.mp4';
import index4End from '../../datas/冬奥会学堂4结束界面.jpg';
import index5 from '../../datas/冬奥会学堂5.mp4';
import index5End from '../../datas/冬奥会学堂5结束界面.jpg'
import index6 from '../../datas/冬奥会学堂6.mp4';
import index6End from '../../datas/冬奥会学堂6结束界面.jpg';
import index7 from '../../datas/冬奥会学堂7.mp4';
import index7End from '../../datas/冬奥会学堂7结束界面.jpg';


class school extends  Component{
  constructor(props){
    super(props);
    this.state={
      key:0,
      play:index1,
      name:'123'
    }
  }
  componentDidMount() {
    this.setState({name:this.props.name})
  }

  handleSwitch=()=> {
    const {play} = this.state;
    if (play === index1) {
      this.setState({
        key: 1
      })
    }else if (play === index3) {
      this.setState({
        key: 3
      })
    }else if (play === index4) {
      this.setState({
        key: 4
      })
    }else if (play === index5) {
      this.setState({
        key: 5
      })
    }else if (play === index6) {
      this.setState({
        key: 6
      })
    }else if (play === index7) {
      this.setState({
        key: 7
      })
    }
  };

  handleToNumber=(index)=> {
    if (index === 3) {
      this.setState({
        play: index3,
        key: 0
      });
      return;
    }else if (index === 4) {
      this.setState({
        play: index4,
        key: 0
      });
      return;
    }else if (index === 5) {
      this.setState({
        play: index5,
        key: 0
      });
      return;
    }else if (index === 6) {
      this.setState({
        play: index6,
        key: 0
      });
      return;
    }else if (index === 7) {
      this.setState({
        play: index7,
        key: 0
      });
      return;
    }
    this.setState({key:index})
  };

  render() {
    const{key,play,name}=this.state;
    return(
      <View className={style.contain}>
      {key===0&&
      <View>
        <Video id='video' muted src={play}  direction={-90} autoplay showCenterPlayBtn={false}  onWaiting={{fullScreen:true}}    enableAutoRotation controls={false} onEnded={this.handleSwitch}>
        </Video>
      </View>
       }
        {key===1&&
        <View>
          <Image src={index1End} className={style.image} />
          <View className={style.clickImage9} onClick={()=>this.handleToNumber(2)} />
        </View>
        }
        {key===2&&
        <View>
          <Image src={index2} className={style.image} />
          <View className={style.clickImage2} onClick={()=>this.handleToNumber(3)} />
        </View>
        }
        {key===3&&
        <View>
          <Image src={index3End} className={style.image} />
          <View className={style.name3}>{name}</View>
          <View className={style.clickImage9} onClick={()=>this.handleToNumber(4)} />
        </View>
        }
        {key===4&&
        <View>
          <Image src={index4End} className={style.image} />
          <View className={style.clickImage9} onClick={()=>this.handleToNumber(5)} />
        </View>
        }
        {key===5&&
        <View>
          <Image src={index5End} className={style.image} />
          <View className={style.name3}>{name}</View>
          <View className={style.clickImage9} onClick={()=>this.handleToNumber(6)} />
        </View>
        }
        {key===6&&
        <View>
          <Image src={index6End} className={style.image} />
          <View className={style.clickImage9} onClick={()=>this.handleToNumber(7)} />
        </View>
        }
        {key===7&&
        <View>
          <Image src={index7End} className={style.image} />
          <View className={style.name3}>{name}</View>
          <View className={style.clickImage9} onClick={()=>this.handleToNumber(7)} />
        </View>
        }
      </View>
    )
  }
}
export default school;
