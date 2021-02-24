import React, { Component } from 'react'
import { View,Video,Image,Input,Button  } from '@tarojs/components';
import style from "./index.module.scss";
import index1 from '../../datas/冬奥会集市1.mp4';
import index1End from '../../datas/冬奥会集市1结束界面.jpg';
import index2 from '../../datas/冬奥会集市2.gif';
import roleRed from '../../datas/冬奥会集市2红.png';
import roleYellow from '../../datas/冬奥会集市2黄.png';
import roleBlue from '../../datas/冬奥会集市2蓝.png';
import index3 from '../../datas/冬奥会集市3.mp4';
import index3End from '../../datas/冬奥会集市3结束界面.jpg';
import index4 from '../../datas/冬奥会集市4.mp4';
import index4End from '../../datas/冬奥会集市4结束界面.jpg';
import index5 from '../../datas/冬奥会集市5.mp4';
import index5End from '../../datas/冬奥会集市5结束界面.jpg';
import index6 from '../../datas/冬奥会集市6.mp4';
import index6End from '../../datas/冬奥会集市6结束界面.jpg';
import index7 from '../../datas/冬奥会集市7.mp4';
import index7End from '../../datas/冬奥会集市7结束界面.jpg';
import index8 from '../../datas/冬奥会集市8.mp4';
import index8End from '../../datas/冬奥会集市8结束界面.jpg';
import index9 from '../../datas/冬奥会集市9.mp4';
import index9End from '../../datas/冬奥会9结束界面.jpg';
import index10 from '../../datas/冬奥会集市10.mp4';
import index10End from '../../datas/冬奥会集市10结束界面.jpg';
import index11 from '../../datas/冬奥会集市11.mp4';
import index11End from '../../datas/冬奥会集市11结束界面.jpg';
import index12 from '../../datas/冬奥会集市12.mp4';
import index12End from '../../datas/冬奥会集市12结束界面.jpg';
import index13 from '../../datas/冬奥会集市13.gif';
import index14 from '../../datas/冬奥会集市14.mp4';
import index14End from '../../datas/冬奥会集市14结束界面.jpg'
import index15 from '../../datas/冬奥会集市15.mp4';
import index15End from '../../datas/冬奥会集市15结束界面.jpg';
import index16 from '../../datas/冬奥会集市16.jpg';
import index17 from '../../datas/冬奥会集市17.jpg';
import index19 from '../../datas/冬奥会集市19.mp4';
import index19End from '../../datas/冬奥会集市19结束界面.jpg';
import index20 from '../../datas/冬奥会集市20.mp4';
import index20End from '../../datas/冬奥会集市20结束界面.jpg';
import ZdGameOne from '../gameOne';


class market extends Component{
  constructor(props){
    super(props);
    this.state={
         play:index1,
         key:18,
         name:'123',
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
    } else if(play === index3){
      this.setState({
        key:3
      })
    }else if(play === index4){
      this.setState({
        key:4
      })
    }else if(play === index5){
      this.setState({
        key:5
      })
    }else if(play === index6){
      this.setState({
        key:6
      })
    }else if(play === index7){
      this.setState({
        key:7
      })
    }else if(play === index8){
      this.setState({
        key:8
      })
    }else if(play === index9){
      this.setState({
        key:9
      })
    }else if(play === index10){
      this.setState({
        key:10
      })
    }else if(play === index11){
      this.setState({
        key:11
      })
    }else if(play === index12){
      this.setState({
        key:12
      })
    }else if(play === index14){
      this.setState({
        key:14
      })
    }else if(play === index15){
      this.setState({
        key:15
      })
    }else if(play === index19){
      this.setState({
        key:19
      })
    }else if(play === index20){
      this.setState({
        key:20
      })
    }
  };
  handleToNumber=(index)=> {
    if(index === 3){
      this.setState({
        play:index3,
        key:0
      })
      return ;
    }else if(index === 4){
      this.setState({
        play:index4,
        key:0
      })
      return ;
    }else if(index === 5){
      this.setState({
        play:index5,
        key:0
      })
      return ;
    }else if(index === 6){
      this.setState({
        play:index6,
        key:0
      })
      return ;
    }else if(index === 7){
      this.setState({
        play:index7,
        key:0
      })
      return ;
    }else if(index === 8){
      this.setState({
        play:index8,
        key:0
      })
      return ;
    }else if(index === 9){
      this.setState({
        play:index9,
        key:0
      })
      return ;
    }else if(index === 10) {
      this.setState({
        play: index10,
        key: 0
      });
      return;
    } else if(index === 11) {
      this.setState({
        play: index11,
        key: 0
      })
      return;
    }else if(index === 12) {
      this.setState({
        play: index12,
        key: 0
      })
      return;
    }else if(index === 14) {
      this.setState({
        play: index14,
        key: 0
      })
      return;
    }else if(index === 15) {
      this.setState({
        play: index15,
        key: 0
      })
      return;
    }else if(index === 19) {
      this.setState({
        play: index19,
        key: 0
      })
      return;
    }else if(index === 20) {
      this.setState({
        play: index20,
        key: 0
      })
      return;
    }
    this.setState({key:index})
  };
  handleDragMove=(e,index)=>{
    const {redX,blueX,yellowX} = this.state;
    if(index===1){
      redX.x = -(redX.start - e.touches[0].clientX)*3;
    }else if(index===2){
      blueX.x = -(blueX.start - e.touches[0].clientX)*3;
    }else if(index===3){
      yellowX.x = -(yellowX.start - e.touches[0].clientX)*3;
    }
    this.setState({redX,blueX,yellowX});
    if(yellowX.x>=40.5&&redX.x<=-61.5&&blueX.x>=50){
      this.handleToNumber(3)
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
      <View className={style.contain} >
        {key===0&&
        <View>
          <Video src={play} direction={-90} autoplay showCenterPlayBtn={false}    enableAutoRotation controls={false} onEnded={this.handleSwitch}>
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
          <View className={style.clickImage9} onClick={()=>this.handleToNumber(8)} />
        </View>
        }
        {key===8&&
        <View>
          <Image src={index8End} className={style.image} />
          <View className={style.clickImage9} onClick={()=>this.handleToNumber(9)} />
        </View>
        }
        {key===9&&
        <View>
          <Image src={index9End} className={style.image} />
          <View className={style.clickImage9} onClick={()=>this.handleToNumber(10)} />
        </View>
        }
        {key===10&&
        <View>
          <Image src={index10End} className={style.image} />
          <View className={style.clickImage9} onClick={()=>this.handleToNumber(11)} />
        </View>
        }
        {key===11&&
        <View>
          <Image src={index11End} className={style.image} />
          <View className={style.name3}>{name}</View>
          <View className={style.clickImage9} onClick={()=>this.handleToNumber(12)} />
        </View>
        }
        {key===12&&
        <View>
          <Image src={index12End} className={style.image} />
          <View className={style.clickImage9} onClick={()=>this.handleToNumber(13)} />
        </View>
        }
        {key===13&&
        <View>
          <Image src={index13} className={style.image} />
          <View className={style.clickImage13} onClick={()=>this.handleToNumber(14)} />
        </View>
        }
        {key===14&&
        <View>
          <Image src={index14End} className={style.image} />
          <View className={style.clickImage14} onClick={()=>this.handleToNumber(15)} />
        </View>
        }
        {key===15&&
        <View>
          <Image src={index15End} className={style.image} />
          <View className={style.clickImage15} onClick={()=>this.handleToNumber(16)} />
        </View>
        }
        {key===16&&
        <View>
          <Image src={index16} className={style.image} />
          <View className={style.clickImage16} onClick={()=>this.handleToNumber(17)} />
        </View>
        }
        {key === 17 &&
        <View>
          <Image src={index17} className={style.image} />
          <View className={style.clickImage9} onClick={() => this.handleToNumber(18)} />
        </View>
        }
        {key === 18 &&
          <ZdGameOne name={name} />
        }
        {key === 19 &&
        <View>
          <Image src={index19End} className={style.image} />
          <View className={style.name3}>{name}</View>
          <View className={style.clickImage9} onClick={() => this.handleToNumber(20)} />
        </View>
        }
        {key === 20 &&
        <View>
          <Image src={index20End} className={style.image} />
          <View className={style.clickImage9} onClick={() => this.handleToNumber(20)} />
        </View>
        }
        </View>
    )
  }
}
export default market;
