import {
  Document,
  Font,
  Image,
  PDFViewer,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import React from "react";
import arialbd from "../../assets/arialbd.ttf";
import firstlogo from "../../assets/firstlogo.png";

Font.register({
  family: "Arial",
  fonts: [
    {
      src: arialbd,
      fontWeight: "bold",
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
  },
});

export default function Certificate() {
  return (
    <PDFViewer
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      <Document>
        <Page size="A4" style={styles.page}>
          <View
            style={{
              width: "100%",
              height: "100vh",
              padding: "15px 25px 0px",
              display: "flex",
              flexDirection: "column",
              fontFamily: "Arial",
            }}
          >
            <View
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: "0px 10px",
              }}
            >
              <Image style={{ width: "130px" }} src={firstlogo} />
              <Text
                style={{
                  fontSize: "16px",

                  fontWeight: "bold",
                }}
              >
                Claims Hotline: 0333 305 8120
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "black",
                width: "100%",
                height: "3px",
                marginTop: "1px",
                padding: "0px 8px",
              }}
            ></View>
            <View>
              <Text
                style={{
                  fontSize: "14px",

                  fontWeight: "bold",
                }}
              >
                CERTIFICATE OF MOTOR INSURANCE
              </Text>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}
