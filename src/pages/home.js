import React from 'react';
import { Container, Content} from 'native-base';
import {Image,TouchableOpacity,View, Text, Animated, Dimensions} from 'react-native';
import Svg, {Use,Image as Img} from 'react-native-svg';
import SvgUri from 'react-native-svg-uri';
import SVGImage from 'react-native-svg-image';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            xPosition: new Animated.Value(-Dimensions.get('window').width),  
            fadeAnim:new Animated.Value(0),
            style1:styles.activeMenuText,
            style2:styles.menuText,
            style3:styles.menuText,
            style4:styles.menuText,
            crossShow:false,
            bigRotate:{transform: [{ rotate: '45deg'}]},
            smallRotate:{transform: [{ rotate: '-80deg'}]},
        }
    }

    componentDidMount() {

        setTimeout(()=>{
            Animated.timing(                            
                this.state.xPosition,
                {
                    toValue: 0,
                    duration: 2000,
                }                
            ).start();                                  
            Animated.timing(                            
                this.state.fadeAnim,
                {
                    toValue: 1,
                    duration: 5000,
                }                
            ).start();                                  
        },1000);
        
    }
    
    onSelMenuItem =(index) => {
        if(index==0){
            this.setState({style1:styles.activeMenuText, style2:styles.menuText,style3:styles.menuText,style4:styles.menuText});
            // this.props.navigation.navigate('Playlist');
        }
        if(index==1){
            this.setState({style1:styles.menuText, style2:styles.activeMenuText,style3:styles.menuText,style4:styles.menuText});
            // this.props.navigation.navigate('Wallet');
        }
        if(index==2){
            this.setState({style1:styles.menuText, style2:styles.menuText,style3:styles.activeMenuText,style4:styles.menuText});
            // this.props.navigation.navigate('Profile');
        }
        if(index==3){
            this.setState({style1:styles.menuText, style2:styles.menuText,style3:styles.menuText,style4:styles.activeMenuText});
            // this.props.navigation.navigate('Ranking');
        }
    }

    onClickIcon = () =>{
        this.setState({crossShow:true});
        this.setState({bigRotate:{transform: [{ rotate: '0deg'}]}, smallRotate:{transform: [{ rotate: '0deg'}]}})
    }

    render() {
        const { navigate } = this.props.navigation;    
        return (
             <Image source={require( '../images/background.png' )} style={styles.backgroundImage}>
                <Animated.View style={{marginLeft:10, padding:10,flexDirection:'row', borderWidth:2, borderColor:'red', position:'absolute',left:this.state.xPosition,opacity:this.state.fadeAnim, backgroundColor:'transparent'}}>
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
                    <TouchableOpacity style={styles.menuIcon}  onPress={(e)=>this.onClickIcon()} >
                        <Image source={require( '../images/bigcircle.png')} style={[styles.imgIcon,this.state.bigRotate]} >
                            <Image source={require( '../images/smallcircle.png')} style={[styles.imgIcon,this.state.smallRotate]}>
                                { (this.state.crossShow) &&
                                <Image source={require( '../images/cross.png')} style={[styles.imgIcon,this.state.bigRotate]}/>
                                }
                            </Image>
                        </Image>
                    </TouchableOpacity>
                    {/*<Svg width='280' height='280'>
                        <Img width='80' height='80' href={require('../images/Cross.svg')}/>
                    </Svg>*/}
                    

                </Animated.View>
            </Image>

            
        );
    }
}

const styles={
    backgroundImage:{flex:1, justifyContent:'center', alignItems:'center',width:'100%', height:'100%', resizeMode:'contain'},
    navMenu:{padding:5,flex:1, justifyContent:'space-around'},
    activeMenuText:{color:'#ffffff', fontFamily:'Mark Offc For MC', fontSize:17,fontWeight:'bold', textAlign:'center'},
    menuText:{color:'#ffffff', fontFamily:'Mark Offc For MC', fontSize:17,opacity:0.7, textAlign:'center'},
    menuIcon:{},
    imgIcon:{width:35,height:35}
    
}
