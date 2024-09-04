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

Font.register({
  family: "Arial",
  fonts: [
    {
      src: "/arialbd.ttf",
      fontWeight: "bold",
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
  },
});

export default function Pdf({ data }: { data: any }) {
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
              <Image style={{ width: "130px" }} src="/firstlogo.png" />
              <Text
                style={{
                  fontSize: "16px",
                  fontFamily: "Arial",
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
            <View
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "30px",
                paddingLeft: "70px",
              }}
            >
              <Text
                style={{
                  fontSize: "16px",
                  fontFamily: "Arial",
                }}
              >
                CERTIFICATE OF MOTOR INSURANCE
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "7px",
                paddingLeft: "70px",
                fontFamily: "Arial",
              }}
            >
              <Text
                style={{
                  fontSize: "11px",
                }}
              >
                Certificate Number:TCV-MOT-1739398
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                paddingTop: "20px",
              }}
            >
              <Text
                style={{
                  fontSize: "10px",
                  fontFamily: "Arial",
                }}
              >
                (1)
              </Text>

              <Text
                style={{
                  fontSize: "10px",
                  paddingLeft: "10px",
                  fontFamily: "Arial",
                }}
              >
                Vehicle Registration Number:
              </Text>
              <Text
                style={{
                  fontSize: "10px",
                  fontWeight: "medium",
                  paddingLeft: "5px",
                }}
              >
                444XDX
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                paddingTop: "20px",
              }}
            >
              <Text
                style={{
                  fontSize: "10px",
                  fontFamily: "Arial",
                }}
              >
                (2)
              </Text>

              <Text
                style={{
                  fontSize: "10px",
                  paddingLeft: "10px",
                  fontFamily: "Arial",
                }}
              >
                Insured:
              </Text>
              <Text
                style={{
                  fontSize: "10px",
                  fontWeight: "medium",
                  paddingLeft: "5px",
                }}
              >
                Mohammed Hasham Iqbal
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  paddingTop: "20px",
                }}
              >
                <Text
                  style={{
                    fontSize: "10px",
                    fontFamily: "Arial",
                  }}
                >
                  (3)
                </Text>

                <Text
                  style={{
                    fontSize: "10px",
                    paddingLeft: "10px",
                    fontFamily: "Arial",
                  }}
                >
                  Effective Time/Date:
                </Text>
                <Text
                  style={{
                    fontSize: "10px",
                    fontWeight: "medium",
                    paddingLeft: "5px",
                  }}
                >
                  10 August 2024 22:03
                </Text>
              </View>
              <View
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  paddingTop: "20px",
                }}
              >
                <Text
                  style={{
                    fontSize: "10px",
                    fontFamily: "Arial",
                  }}
                >
                  (4)
                </Text>
                <Text
                  style={{
                    fontSize: "10px",
                    paddingLeft: "10px",
                    fontFamily: "Arial",
                  }}
                >
                  Expiry Time/Date:
                </Text>
                <Text
                  style={{
                    fontSize: "10px",
                    fontWeight: "medium",
                    paddingLeft: "5px",
                  }}
                >
                  17 August 2024 22:03
                </Text>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}
