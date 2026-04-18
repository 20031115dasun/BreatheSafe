import {Tabs} from "expo-router";
import React from 'react';
import {ImageBackground , Image , Text , View} from "react-native";
import {images} from "@/constants/images";


const TabIcon = ({focused,title,icon}:any) => {
    if(focused){
        return (
            <ImageBackground
                source={images.highlight}
                className="flex flex-row w-full flex-1 min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden">
                <Image
                    source={icon}
                    className="size-5"
                    tintColor='#151312'/>
                <Text className="text-secondary text-base font-semibold ml-2">
                    {title}
                </Text>
            </ImageBackground>
        )
    }

    else {
        return (
            <View className="size-full justify-center items-center mt-4 rounded-full" >
                <Image source={icon} className="size-5" tintColor='#A8B5DB'/>
            </View>
        )
    }

}

const _Layout = () => {
  return (
    <Tabs
        screenOptions={{
            tabBarShowLabel: false,
            tabBarItemStyle:{
                width:'100%',
                height:'100%',
                justifyContent:'center',
                alignItems:'center'
            },
            tabBarStyle:{
                backgroundColor:'#58C760',
                borderRadius:50,
                marginHorizontal:20,
                marginBottom:36,
                height:52,
                position:'absolute',
                overflow:'hidden',
                borderWidth:1,
                borderColor:'#58C760',
            }

        }}>
        <Tabs.Screen
            name="index"
            options={{
                title: 'Home',
                headerShown: false,
                tabBarIcon:({focused}) => (
                    <TabIcon focused={focused} title="Home" icon={images.home}/>
                )
            }}
        />
        <Tabs.Screen
            name="device"
            options={{
                title: 'Device',
                headerShown: false,

            }}
        />

        <Tabs.Screen
            name="dashboard"
            options={{
                title: 'Dashboard',
                headerShown: false,
            }}
        />

        <Tabs.Screen
            name="profile"
            options={{
                title: 'Profile',
                headerShown: false,
            }}
        />

    </Tabs>

  );
};

export default _Layout;