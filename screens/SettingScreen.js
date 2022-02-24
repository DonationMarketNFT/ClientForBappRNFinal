import react from "react";
import { View, Text, FlatList, ScrollView, SafeAreaView, TouchableOpacity} from 'react-native';
import { RenderCampaign } from "./components/RenderCampaign";
import LinearGradient from "react-native-linear-gradient";
const SettingScreen = ({navigation}) =>{
    const renderProfile = () => (
        <View style={{alignItems:'center'}}>
            <View style={{width:200,height:200,borderRadius:100,backgroundColor:'grey'}}/>
        </View>
    )
    const renderInformation = (info) =>(
        <View style={{flex:1,height:40,borderRadius:16, margin:16, backgroundColor:'grey', justifyContent:'center'}}>
            <Text style={{marginLeft:16}}>{info}</Text>
        </View>
    )
    return(
        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={{flex:1}}>
            <SafeAreaView>
                <ScrollView>
                    <View style={{marginTop:40}}/>
                    <TouchableOpacity 
                        onPress={()=>navigation.navigate('LoginScreen')}
                        style={{flex:1, alignItems:'flex-end', marginRight:24}}>
                        <Text style={{color:'white'}}>LogOut</Text>
                    </TouchableOpacity>
                    {renderProfile()}
                    <View style={{marginTop:48}}/>
                    {renderInformation('Name')}
                    {renderInformation('Wallet Address')}
                    {renderInformation('Wallet Price')}
                    <View style={{marginTop:40}}/>
                    <RenderCampaign campaignName='My Campaign' data={[0,2]} color='white'/>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    )
};
export default SettingScreen;