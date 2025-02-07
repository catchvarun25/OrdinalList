import React, { memo, useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { FlatList, View } from "react-native";
import InscriptionDetailRow from "../../components/InscriptionDetailRow";
import InscriptionLoader from "../../components/InscriptionLoader";

const OrdinalDetail = ({ route }: any) => {
    const dispatch = useDispatch()
    const [isContentTypeText, setIsContentTypeText] = useState(false);
    const { inscriptionId, walletAddress } = route.params;
    const ordinalListDetail = useSelector((state: any) => state.ordinalList)

    const arrayOfObjects =
        ordinalListDetail.data ? Object.entries(ordinalListDetail.data).map(([key, value]) => {
            return { key, value };
        }) : [];


    useEffect(() => {
        dispatch({ type: "FETCH_ORDINAL_DETAIL", payload: { inscriptionId, walletAddress } })
    }, [])

    useEffect(() => {

        if (ordinalListDetail.data) {
            const contentType = ordinalListDetail.data.content_type;
            if (contentType.startsWith("text/plain")) {
                setIsContentTypeText(true)
            } else {
                setIsContentTypeText(false)
            }
        }
    }, [ordinalListDetail])


    return (
        <View>
            {ordinalListDetail &&
                <>
                    <InscriptionLoader
                        url={`https://ord.xverse.app/content/${inscriptionId}`}
                        isContentTypeText={isContentTypeText}
                    />

                    <FlatList
                        style={{ marginTop: 300 }}
                        data={arrayOfObjects}
                        renderItem={({ item }: any) => <InscriptionDetailRow header={item.key} description={item.value} />}
                        keyExtractor={(item: any) => item.id}
                    />
                </>
            }
        </View>
    );
}

export default memo(OrdinalDetail)