import React, { lazy, memo, useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { FlatList, Text, TextInput, View, Button, TouchableOpacity, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";


const Image = lazy(() => import("./../../components/IconComponent"))

const Main = () => {
    const navigation = useNavigation();
    const [walletAddress, setWalletAddress] = useState('')
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const dispatch = useDispatch()
    const ordinals = useSelector((state: any) => state.ordinals)

    console.log("ordinals", ordinals)

    const lookup = (offset = 30, limit = 30) => {
        dispatch({ type: "FETCH_ORDINALS", payload: { walletAddress, offset, limit } });
    }

    const handleLoadMore = () => {
        setPage(page + 1);
    };

    const handleRefresh = () => {
        dispatch({ type: "CLEAR_ORDINALS" })
        setPage(1);
        //  lookup()
    };

    const renderFooter = () => {
        if (!isLoading) return null;
        return (
            <View style={styles.loading}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    };


    const Item = (data: any) => {
        return <View style={styles.item}>
            {data.inscriptions.length > 0 &&
                <TouchableOpacity onPress={() => navigation.navigate('Detail', { inscriptionId: data.inscriptions[0].id, walletAddress })}>
                    <Text style={styles.label} >{data.inscriptions[0].id}</Text>
                </TouchableOpacity>
            }
            <Image
                iconType="AntDesign"
                iconName="right"
                size={16}
                color="white"

            />
        </View>
    }

    return (
        <View style={styles.todoContainer}>
            <Text style={styles.label}>Owner Bitcoin Address:</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={(text) => setWalletAddress(text)}
                value={walletAddress}
            />
            <Button title="Lookup" onPress={() => lookup()}></Button>
            <Text style={styles.label}>Results</Text>
            {ordinals && ordinals.data && ordinals.data.results &&
                <FlatList
                    data={ordinals.data.results}
                    renderItem={({ item }) => <Item {...item} />}
                    keyExtractor={(item: any) => item.id}
                    onEndReached={handleLoadMore}
                    onEndReachedThreshold={0.1}
                    ListFooterComponent={renderFooter}
                    refreshing={isRefreshing}
                    onRefresh={handleRefresh}
                />
            }
        </View>
    );
}



export default memo(Main)