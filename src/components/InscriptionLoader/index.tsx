import React, { useState, useEffect, memo } from "react";
import { View, Text, ActivityIndicator, Image } from "react-native";
import { styles } from "./styles";

interface ContentLoaderProps {
    url: string;
    isContentTypeText: boolean
}

const InscriptionLoader: React.FC<ContentLoaderProps> = ({ url, isContentTypeText }) => {
    const [loading, setLoading] = useState(true);
    const [textContent, setContent] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const text = await response.text();
                setContent(text);
            } catch (error) {
                console.error("Error fetching content:", error);
            } finally {
                setLoading(false);
            }
        };

        isContentTypeText && fetchData();
    }, [isContentTypeText]);




    return (
        <View style={styles.container}>
            {textContent && isContentTypeText && <Text style={styles.text}>{textContent}</Text>}
            {!isContentTypeText && <Image
                style={{
                    minWidth: 300,
                    height: 300,
                }}
                source={{
                    uri: url,
                }}
            />}
        </View>
    );
};


export default memo(InscriptionLoader);