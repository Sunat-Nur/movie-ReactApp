import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'expo-status-bar';
import {MagnifyingGlassCircleIcon} from "react-native-heroicons/outline";

export default function Home({navigation}) {
    return (
        <View className="flex-1 bg-slate-950">
            <SafeAreaView>
                <StatusBar style="light"/>
                <View className="flex-row justify-between items-center mx-4  border-b-2">
                    <Image source={require('../../assets/images/logo.png')}/>
                    <MagnifyingGlassCircleIcon/>
                </View>
            </SafeAreaView>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 20}}
            ></ScrollView>
        </View>
    );
}
