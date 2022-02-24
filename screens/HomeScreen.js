import react from "react";
import { View, Text, FlatList, ScrollView, SafeAreaView} from 'react-native';
import { RenderCampaign } from "./components/RenderCampaign";
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = ({navigation}) =>{
    const renderBanner = () =>(
        <View style={{flex:1, height:200, margin:16, borderRadius:16, backgroundColor:'white'}}>
            <Text style={{margin:8, fontSize:20}}>배너</Text>
        </View>
    )

    return(
        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={{flex:1}}>
            <SafeAreaView>
                <ScrollView>
                    <View style={{marginTop:20}}/>
                    {renderBanner()}
                    <View style={{marginTop:20}}/>
                    <RenderCampaign navigation={navigation} campaignName='New Campaign' data={[0,1,2]}/>
                    <View style={{marginTop:20}}/>
                    <RenderCampaign navigation={navigation} campaignName='Popular Campaign' data={[1,2,0]} color='blue'/>
                    <View style={{marginTop:20}}/>
                    <RenderCampaign navigation={navigation} campaignName='My Campaign' data={[2]} color='white'/>
                    <View style={{marginTop:20}}/>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    )
};
export default HomeScreen;