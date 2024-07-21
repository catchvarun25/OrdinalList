import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { styles } from "./styles";

interface InscriptionDetailRowProps {
    header: string;
    description: string;
}

const InscriptionDetailRow: React.FC<InscriptionDetailRowProps> = ({
    header,
    description,
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>{header}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    );
};


export default InscriptionDetailRow;