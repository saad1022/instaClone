import React, { Component } from 'react';
import { View,Text,StyleSheet,Image,Dimensions,TouchableOpacity } from 'react-native';

import config from './config';

class InstaClone extends Component{

    constructor() {
        super();
        this.state = {
            screenWidth:Dimensions.get("window").width
        };
    }

    render(){

        const imageUri ="https://lh3.googleusercontent.com/x5j31xA2nxKsJ897tBZb250qWT5ubfPLje51tovlLwFPCpTXqwNtLSrfUmgpkLYFuYcUvi6OO1dlcBz7WS1kTPEH-7E" + 
        "=s" + Math.floor(this.state.screenWidth*1.1) + "-c";

        return(
            //Main Layout
            <View style={{ flex: 1 , width: 100 + '%' , height:100 + '%'}}>
               
                {/* Header */}
                <View style={styles.tempNav}>
                    <Text>Instagram</Text>
                </View> 

                {/* User Bar */}
                <View style={styles.userBar}>
                    <View style={{flexDirection: "row" , alignItems: "center"}}>
                        {/* User Image */}
                        <Image
                            style={styles.userPic}
                            source={{
                            uri: "https://lh3.googleusercontent.com/Lsvw9PjUVpyt_c2Rtg89560T8vzY851R9P3XF9jZKHUaRPjaDngfoYlyBaVipSw-W4H3Zl7u7gogtpuLcFjqJuHm"
                            }}
                        /> 
                        {/* User Name */}
                        <Text style={{ marginLeft: 10}}>Stephanie</Text>
                    </View> 
                    {/* sub-menu option */}
                    <View style={{ alignItems: "center"}}>
                        <Text style={{ fontSize: 30}}>...</Text>
                    </View> 
                </View> 
               
                {/* User Posted Image */}
                <TouchableOpacity onPress = { () => {alert('press');} }>
                <Image
                style={{width: this.state.screenWidth , height: 400}}
                source={{
                    uri: imageUri
                }}
                />
                

                {/* Icon Bar */}
                <View style={styles.iconBar}>
                    <Image style={[styles.icon , { height: 45, width: 40 , tintColor: "rgb(251,61,81)"}]} 
                    source={config.images.heartIcon} />
                    <Image style={[styles.icon , { height: 36, width: 36}]} 
                    source={config.images.chatIcon} />
                    <Image style={[styles.icon , { height: 37, width: 36}]} 
                    source={config.images.arrowIcon} />
                </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tempNav: {
        width: 100 + '%',
        height: 56,
        marginTop: 20,
        backgroundColor: "rgb(250,250,250)",
        borderBottomColor:"rgb(233,233,233)",
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: "center",
        alignItems: "center"
    },

    userBar: {
        width: 100 + '%',
        height: config.styleConstants.rowHeight,
        backgroundColor: "rgb(255,255,255)",
        flexDirection: "row",
        paddingHorizontal: 10,
        justifyContent: "space-between"

    },

    userPic: {
        height: 40,
        width: 40,
        borderRadius: 20
    },

    iconBar: {
        height: config.styleConstants.rowHeight,
        width: 100 + '%',
        borderColor:"rgb(233,233,233)",
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "row",
        alignItems: "center"
    },
    
    icon: {
        marginLeft: 5
    }
});

export default InstaClone;