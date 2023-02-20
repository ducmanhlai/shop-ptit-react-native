import React from "react";
import { FlatList, SafeAreaView, TouchableOpacity, View, Text, StyleSheet } from "react-native";
import OrderItem from '../../../common/components/OrderItem';
import { useEffect } from "react";
function InfoOrder(props) {
    const listOrder = [1];

    return (
        <FlatList
            data={listOrder}
            renderItem={({ item, index }) => <OrderItem />}
            horizontal={false}
            ListFooterComponent={Order}
            ListFooterComponentStyle={{ width: '100%', marginTop: 30 }}
        />
    )
    function Order() {
        return (<View style={{ justifyContent: "center", alignItems: "center" }}>
            <View style={[style.textItem,{borderBottomWidth:0.5,}]}>
                <Text style={{marginRight:40}}>Tạm tính</Text>
                <Text>300.000đ</Text>
            </View>
            <View style={[style.textItem,{borderBottomWidth:0.5,}]}>
                <Text style={{marginRight:45}}>Phí ship</Text>
                <Text>300.000đ</Text>
            </View>
            <View style={style.textItem}>
                <Text style={{marginRight:37}}>Tổng tiền</Text>
                <Text>300.000đ</Text>
            </View>
            <View>
                <TouchableOpacity style={{
                    backgroundColor: '#4ACBD3',
                    height: 33, width: 250, justifyContent: "center", alignItems: 'center', marginBottom: 10,
                    borderRadius:10
                }}
                >
                    <Text style={{fontSize:19,fontWeight:'600',textAlign:'justify'}}>Đặt hàng</Text>
                </TouchableOpacity>
            </View>
        </View>)

    }
}

const style= StyleSheet.create({
    textItem:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        
        width:250,
        marginBottom:10
    }
})
export default InfoOrder;