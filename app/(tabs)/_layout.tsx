import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {Tabs} from "expo-router"
import {images} from "@/constants/images";
import { Image } from 'react-native';
import {icons} from "@/constants/icons";
const TabIcon = ({focused,icon,title}) => {
    if(focused){
        return (
            <ImageBackground
                source={images.highlight}
                style={{
                    flexDirection: 'row',
                    width: '100%',
                    flex: 1,
                    minWidth: 112,
                    minHeight: 56,
                    marginTop: 16,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 9999,
                    overflow: 'hidden',
                }}
            >
                <Image
                    source={icon}
                    style={{ width: 20, height: 20, tintColor: '#151312' }}
                />
                <Text
                    style={{
                        marginLeft: 8,
                        fontSize: 16,
                        fontWeight: '600',
                        color: '#6B7280', // example for text-secondary
                    }}
                >
                    {title}
                </Text>
            </ImageBackground>
        );
    }
    else{
        return (
            <View className="size-full justify-center items-center mt-4 rounded-full">
                <Image
                    source={icon}
                    tintColor="#A8B3DB"
                    className="size-5"
                />
            </View>
        );
    }
};

// export default TabIcon;

const _Layout = () => {
    return (
        <Tabs screenOptions={{tabBarShowLabel:false, tabBarItemStyle:{
                width:"100%",
                height:"100%",
                justifyContent:"center",
                alignItems:"center"},
            tabBarStyle:{
                backgroundColor:"#0f0D23",
                borderRadius:50,
                marginVertical:20,
                marginBottom:36,
                height:52,
                position:"absolute",
                overflow:"hidden",
                borderWidth:1,
                borderColor:"#0f0D23",
            }
                }} >
            <Tabs.Screen name="index"
            options={{title: "Home", headerShown: false,
            tabBarIcon: ({focused}) => (
                <TabIcon focused={focused} icon={icons.home} title="Home"/>
            )
            }}
            />
            <Tabs.Screen name="search"
            options={{title: "Search", headerShown: false,
                tabBarIcon: ({focused}) => (
                    <TabIcon focused={focused} icon={icons.search} title="Search"/>
                )
            }}
            />
            <Tabs.Screen name="saved"
            options={{title: "Saved", headerShown: false,
                tabBarIcon: ({focused}) => (
                    <TabIcon focused={focused} icon={icons.save} title="Saved"/>
                )
            }}
            />
            <Tabs.Screen name="profile"
            options={{title: "Profile", headerShown: false,
                tabBarIcon: ({focused}) => (
                    <TabIcon focused={focused} icon={icons.person} title="Profile"/>
                )}}
            />


        </Tabs>
    );
};

export default _Layout;

