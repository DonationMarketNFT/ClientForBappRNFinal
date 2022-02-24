import react from "react";
import { View, Text, FlatList, ScrollView, Image, TouchableOpacity} from 'react-native';
import {images} from '../../constants'

export const RenderCampaign= ({campaignName, data, navigation}) =>{
    const renderFlatListItem = ({item}) =>(
        <TouchableOpacity 
            onPress={()=>navigation.navigate('ViewCampaignDetail')}
            style={{width:280,height:200, margin:16, borderRadius:5,alignItems:'center',justifyContent:'center'}}>
            <Image resizeMode='contain' source={images['img'+item.toString()]} style={{width:280,height:200,borderRadius:20}}/>
        </TouchableOpacity>
    )
return(
    <View style={{height:200}}>
        <Text style={{marginLeft:16, fontSize:20}}>{campaignName}</Text>
        <FlatList
            data={data}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={renderFlatListItem}
        />
    </View>
)}