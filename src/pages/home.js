import React from 'react';
import { Container, Content} from 'native-base';
import {Image,TouchableOpacity,View, Text, TextInput, Animated, Dimensions} from 'react-native';
import Svg, {Use,Image as Img} from 'react-native-svg';
import SvgUri from 'react-native-svg-uri';
import SVGImage from 'react-native-svg-image';
import Menu from '../components/menu'

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:''

        }
    }

    componentDidMount() {
        
    }
    
    
    render() {
        const { navigate } = this.props.navigation;    
         
        return (
             <Image source={require( '../images/background.png' )} style={styles.backgroundImage}>
                <Menu {...this.props}/>
                <View style={{width:'100%', padding:20}}>
                    <Text style={styles.label}>How Shall we Greet You?</Text>
                    <TextInput onChangeText={(text)=>this.this.setState({name:texts})} placeholder={'Enter Nickname_'} placeholderTextColor={'#ffffff'} style={styles.text}></TextInput>
                </View>
            </Image>
            
        );
    }
}

const styles={
    backgroundImage:{flex:1, justifyContent:'center', alignItems:'center',width:'100%', height:'100%', resizeMode:'contain'},
    label:{backgroundColor:'transparent', color:'#ffffff', marginBottom:10, fontFamily:'Mark Offc For MC'},
    text:{ padding:10, color:'#ffffff', fontSize:25, fontWeight:'bold', fontFamily:'Mark Offc For MC', borderWidth:1, borderColor:'rgba(255,255,255,0.7)', height:50, width:'100%', backgroundColor:'rgba(255,255,255,0.1)'},

    
}
