import react, {useState} from "react";
import { View, Text, FlatList, ScrollView, SafeAreaView, TouchableOpacity, Linking} from 'react-native';
import { COLORS } from '../constants';
import LinearGradient from 'react-native-linear-gradient';
import * as KlipAPI from "../api/UseKlip";
//import { getBalance, readCount, setCount, fetchCardsOf } from "../api/UseCaver";

const LoginScreen = ({navigation}) =>{
    const [qrvalue,setQrvalue]=useState('DEFAULT');
    const [myAddress,setMyAddress]=useState('0x10c7a89139F09F125b18497aE99f273865FB94F6');
    const [myBalance,setMyBalance]=useState(0);
    //getBalance('0x10c7a89139F09F125b18497aE99f273865FB94F6').then(result => console.log(result))
    return(
        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={{flex:1}}>
            <SafeAreaView style={{flex:1, alignItems:'center', justifyContent:'flex-end', marginBottom:'24%'}}>
                <TouchableOpacity 
                    onPress={()=>{
                        KlipAPI.getAddress(setQrvalue, async (address) => {
                            setMyAddress(address);
                            alert(`지갑 주소는 ${address} 입니다`)
                            // const _balance = await getBalance(address);
                            // setMyBalance(_balance);
                            // console.log(_balance)
                          })
                    }}
                    style={{width:280,height:40,borderRadius:16,backgroundColor:'white', alignItems:'center', justifyContent:'center'}}>
                    <Text>Connect Wallet</Text>
                </TouchableOpacity>
                <View style={{marginTop:16}}/>
                <TouchableOpacity 
                    onPress={()=>navigation.navigate('BottomTabs')}
                    style={{width:280,height:40,borderRadius:16,backgroundColor:'white', alignItems:'center', justifyContent:'center'}}>
                    <Text>연동하지 않고 둘러보기</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </LinearGradient>
    )
};
export default LoginScreen;