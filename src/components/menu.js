import React from 'react';
import { Container, Content} from 'native-base';
import {Image,TouchableOpacity,View, Text, Animated, Dimensions} from 'react-native';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            xPosition: new Animated.Value(0),  
            fadeAnim:new Animated.Value(0),
            style1:styles.menuText,
            style2:styles.menuText,
            style3:styles.menuText,
            style4:styles.menuText,
            crossShow:false,
            bigAngle:new Animated.Value(0),
            smallAngle:new Animated.Value(0),

        }
    }

    showMenuBar = ()=>{
        Animated.timing(                            
                this.state.xPosition,
                {
                    toValue: 70,
                    duration: 300,
                }                
        ).start();      
       
       Animated.timing(                            
                this.state.bigAngle,
                {
                    toValue: 1,
                    duration: 300,
                }                
        ).start();                                 
        
        Animated.timing(                            
                this.state.smallAngle,
                {
                    toValue: 1,
                    duration: 300,
                }                
        ).start();                                   

        
        Animated.timing(                            
                this.state.fadeAnim,
                {
                    toValue: 1,
                    duration: 300,
                }                
        ).start();                    

    }

    hideMenuBar = () => {
        Animated.timing(                            
                this.state.xPosition,
                {
                    toValue: 0,
                    duration: 300,
                }                
        ).start();     
        Animated.timing(                            
                this.state.bigAngle,
                {
                    toValue: 0,
                    duration: 300,
                }                
        ).start();        
        Animated.timing(                            
                this.state.smallAngle,
                {
                    toValue: 0,
                    duration: 300,
                }                
        ).start();        
        Animated.timing(                            
                this.state.fadeAnim,
                {
                    toValue: 0,
                    duration: 300,
                }                
        ).start();                   
    }
    
    onSelMenuItem =(index) => {
        if(index==0){
            this.setState({style1:styles.activeMenuText, style2:styles.menuText,style3:styles.menuText,style4:styles.menuText});
            this.props.navigation.navigate('Playlist');
        }
        if(index==1){
            this.setState({style1:styles.menuText, style2:styles.activeMenuText,style3:styles.menuText,style4:styles.menuText});
            this.props.navigation.navigate('Wallet');
        }
        if(index==2){
            this.setState({style1:styles.menuText, style2:styles.menuText,style3:styles.activeMenuText,style4:styles.menuText});
            this.props.navigation.navigate('Profile');
        }
        if(index==3){
            this.setState({style1:styles.menuText, style2:styles.menuText,style3:styles.menuText,style4:styles.activeMenuText});
            this.props.navigation.navigate('Ranking');
        }
    }

    onClickIcon = () =>{
        this.setState((prev)=>{
            return{crossShow:!prev.crossShow}
        },()=>{
            if(this.state.crossShow){
                 this.showMenuBar();
            }
            else {
                this.hideMenuBar();
            }
        })

        this.setState({bigRotate:{transform: [{ rotate: '0deg'}]}, smallRotate:{transform: [{ rotate: '0deg'}]}})
    }
  

    render() {
        const spin = this.state.bigAngle.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '-360deg']
        })
        const smallSpin = this.state.smallAngle.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '540deg']
        })
        const { navigate } = this.props.navigation;    

        return (
             <View style={{flexDirection:'row', width:'100%', justifyContent:'center', alignItems:'center',position:'absolute', bottom:0}}>
                    <Animated.View style={{flex:5,marginLeft:10, padding:10,flexDirection:'row', position:'absolute', right:this.state.xPosition, bottom:15, opacity:this.state.fadeAnim, backgroundColor:'transparent'}}>
                        <TouchableOpacity style={styles.navMenu} onPress={(e)=>this.onSelMenuItem(0)} >
                            <Text style={this.state.style1} >Playlist</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.navMenu} onPress={(e)=>this.onSelMenuItem(1)}>
                            <Text style={this.state.style2} >Wallet</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.navMenu} onPress={(e)=>this.onSelMenuItem(2)}>
                            <Text style={this.state.style3}>profile</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.navMenu} onPress={(e)=>this.onSelMenuItem(3)}>
                            <Text style={this.state.style4} >Ranking</Text>
                        </TouchableOpacity>
                    </Animated.View>
                    <TouchableOpacity style={styles.menuIcon}  onPress={(e)=>this.onClickIcon()} >
                            <Animated.Image source={require( '../images/bigcircle.png')} style={[styles.imgIcon,{transform: [{ rotate: spin}]}]} >
                                <Animated.Image source={require( '../images/smallcircle.png')} style={[styles.imgIcon,{transform: [{ rotate: smallSpin}]}]}>
                                    { (this.state.crossShow) &&
                                    <Image source={require( '../images/cross.png')} style={[styles.imgIcon,this.state.bigRotate]}/>
                                    }
                                </Animated.Image>
                        </Animated.Image>
                    </TouchableOpacity>
                </View>
            
        );
    }
}

const styles={
    navMenu:{padding:5,flex:1, justifyContent:'space-around'},
    activeMenuText:{color:'#ffffff', fontFamily:'Mark Offc For MC', fontSize:17,fontWeight:'bold', textAlign:'center'},
    menuText:{color:'#ffffff', fontFamily:'Mark Offc For MC', fontSize:17,opacity:0.7, textAlign:'center'},
    menuIcon:{flex:1,position:'absolute', right:20, bottom:20},
    imgIcon:{width:35,height:35}

    
}
