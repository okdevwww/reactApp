import React from 'react';
import { Container, Content} from 'native-base';
import {Image,TouchableOpacity,View, Text, Animated, Dimensions} from 'react-native';

export default class Ranking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
      
        }
    }

    static navigationOptions = {
        title: 'Playlist',
    };
   
    render() {
        const { navigate } = this.props.navigation;    
        return (
             <Image source={require( '../images/background.png' )} style={styles.backgroundImage}>
               <Text style={{color:'#ffffff', fontSize:30, backgroundColor:'transparent'}} >Ranking</Text>
            </Image>

            
        );
    }
}

const styles={
    backgroundImage:{flex:1, justifyContent:'center', alignItems:'center',width:'100%', height:'100%', resizeMode:'contain'},
     
}
