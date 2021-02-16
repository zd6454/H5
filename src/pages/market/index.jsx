import React, { Component } from 'react'
import { View,Video,Image,Input,Button  } from '@tarojs/components';
import style from "./index.module.scss";
import index1 from '../../datas/冬奥会集市1.mp4';
import index1End from '../../datas/冬奥会集市1结束界面.jpg';
import index2 from '../../datas/冬奥会集市2.gif';
import roleRed from '../../datas/冬奥会集市2红.png';
import roleYellow from '../../datas/冬奥会集市2黄.png';
import roleBlue from '../../datas/冬奥会集市2蓝.png';

class market extends Component{
  constructor(props){
    super(props);
    this.state={
         play:index1,
         key:2,
         name:'',
         redX:{
           start:0,
           x:0
         },
         blueX:{
           start:0,
           x:0
         },
         yellowX:{
           start:0,
           x:0
         },
    }
  }
  componentDidMount () {
    this.setState({name:this.props.name})
  }

  handleSwitch=()=> {
    const {play} = this.state;
    if (play === index1) {
      this.setState({
        key: 1
      })
    }
  };
  handleToNumber=(index)=> {
    this.setState({key:index})
  };
  handleDragMove=(e,index)=>{
    const {redX,blueX,yellowX} = this.state;
    if(index===1){
      redX.x = -(redX.start - e.touches[0].clientX)/2;
    }else if(index===2){
      blueX.x = -(blueX.start - e.touches[0].clientX)/2;
    }else if(index===3){
      yellowX.x = -(yellowX.start - e.touches[0].clientX)/2;
    }
    this.setState({redX,blueX,yellowX});
    if(yellowX.x>=70.5&&redX.x<=-61.5&&blueX.x>=70){
      console.log('成功了')
    }
    console.log(redX,blueX,yellowX)
  };
  handleDragStart=(e,index)=>{
    const {redX,blueX,yellowX} = this.state;
    if(index===1){
      redX.start = e.touches[0].clientX;
    }else if(index===2){
      blueX.start = e.touches[0].clientX;
    }else if(index===3){
      yellowX.start = e.touches[0].clientX;
    }
    this.setState({redX,blueX,yellowX});
  };
  render(){
    const {key,play,name,redX,blueX,yellowX} =this.state;
    return(
      <View className={style.contain}>
        {key===0&&
        <View>
          <Video src={play} direction={-90} autoplay showCenterPlayBtn={true}    enableAutoRotation controls={false} onEnded={this.handleSwitch}>
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
          <Image src={roleRed} className={style.imageRed}
            onTouchStart={(e)=>this.handleDragStart(e,1)}
            onTouchMove={(e)=>{this.handleDragMove(e,1)}}
            style={{transform:`translate(${redX.x}px)`}}
          />
          <Image src={roleBlue} className={style.imageBlue} 
            onTouchStart={(e)=>this.handleDragStart(e,2)}
            onTouchMove={(e)=>{this.handleDragMove(e,2)}}
            style={{transform:`translate(${blueX.x}px)`}}
          />
          <Image src={roleYellow} className={style.imageYellow}  
            onTouchStart={(e)=>this.handleDragStart(e,3)}
            onTouchMove={(e)=>{this.handleDragMove(e,3)}}
            style={{transform:`translate(${yellowX.x}px)`}}
          />
        </View>
        }
      </View>
    )
  }
}
export default market;
