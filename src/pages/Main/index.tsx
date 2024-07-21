import React, { lazy, memo, useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { FlatList, Text, TextInput, View, Button, TouchableOpacity, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";


const Image = lazy(() => import("./../../components/IconComponent"))

const Main = () => {
    const navigation = useNavigation();
    const [walletAddress, setWalletAddress] = useState('')
    const [page, setPage] = useState(1);
    const dispatch = useDispatch()
    const ordinals = useSelector((state: any) => state.ordinals)

    const lookup = (offset = 0, limit = 9) => {
        dispatch({ type: "FETCH_ORDINALS", payload: { walletAddress, offset, limit } });
    }

    const handleLoadMore = () => {
        let pageValue = page + 1;
        setPage(pageValue);
        lookup(pageValue)
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
                />
            }
        </View>
    );
}

export default memo(Main)