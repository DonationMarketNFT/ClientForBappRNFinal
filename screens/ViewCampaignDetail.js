import react, {useState} from "react";
import { View, Text, FlatList, ScrollView, SafeAreaView, TouchableOpacity} from 'react-native';
import { COLORS } from '../constants';
import LinearGradient from 'react-native-linear-gradient';
import * as KlipAPI from "../api/UseKlip";
import Ionicons from 'react-native-vector-icons/Ionicons'

const ViewCampaignDetail = ({navigation}) =>{
    const [qrvalue,setQrvalue]=useState('')
    return(
        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={{flex:1}}>
            <SafeAreaView style={{flex:1}}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Ionicons name='arrow-back-sharp' size={24} style={{margin:16}}/>
                </TouchableOpacity>
                <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                    <Text>ViewCampaignDetail</Text>
                </View>
            </SafeAreaView>
        </LinearGradient>
    )
};
export default ViewCampaignDetail;