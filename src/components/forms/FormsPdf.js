import React from 'react';
import {Page, Text, View, Document, StyleSheet, Font} from '@react-pdf/renderer';
import {PDFViewer} from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        fontFamily: 'Roboto',
        flexDirection: 'row',
        backgroundColor: '#E4E4E4',
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});

Font.register({
    family: 'Roboto',
    src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf',
})

const FormsPdf = ({text}) => {
    return (
        <PDFViewer className="page-pdf">
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.section}>
                        <Text> {text} </Text>
                    </View>
                </Page>
            </Document>
        </PDFViewer>
    );
};

export default FormsPdf;