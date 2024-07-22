import React from 'react';
import {View, Text, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'expo-status-bar';
import {MagnifyingGlassCircleIcon} from "react-native-heroicons/outline";

export default function Home({navigation}) {
    return (
        <View className="flex-1 bg-slate-950">
            <SafeAreaView>
                <StatusBar style="light"/>
                <View className="p-4 flex-row items-center">
                    <Image source={require('../../assets/images/logo.png')}/>
                    <MagnifyingGlassCircleIcon/>
                </View>
            </SafeAreaView>
        </View>
    );
}
