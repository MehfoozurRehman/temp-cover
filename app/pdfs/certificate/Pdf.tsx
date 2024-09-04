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
// import arialbd from "../../../public/arialbd.ttf";
// import firstlogo from "../../assets/firstlogo.png";
// import pdfsign from "../../assets/pdfsign.png";

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
                  fontSize: "14px",
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
                  fontSize: "9px",
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
                  fontSize: "9px",
                  fontFamily: "Arial",
                }}
              >
                (1)
              </Text>

              <Text
                style={{
                  fontSize: "9px",
                  paddingLeft: "10px",
                  fontFamily: "Arial",
                }}
              >
                Vehicle Registration Number:
              </Text>
              <Text
                style={{
                  fontSize: "9px",
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
                  fontSize: "9px",
                  fontFamily: "Arial",
                }}
              >
                (2)
              </Text>

              <Text
                style={{
                  fontSize: "9px",
                  paddingLeft: "10px",
                  fontFamily: "Arial",
                }}
              >
                Insured:
              </Text>
              <Text
                style={{
                  fontSize: "9px",
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
                    fontSize: "9px",
                    fontFamily: "Arial",
                  }}
                >
                  (3)
                </Text>

                <Text
                  style={{
                    fontSize: "9px",
                    paddingLeft: "10px",
                    fontFamily: "Arial",
                  }}
                >
                  Effective Time/Date:
                </Text>
                <Text
                  style={{
                    fontSize: "9px",
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
                    fontSize: "9px",
                    fontFamily: "Arial",
                  }}
                >
                  (4)
                </Text>
                <Text
                  style={{
                    fontSize: "9px",
                    paddingLeft: "10px",
                    fontFamily: "Arial",
                  }}
                >
                  Expiry Time/Date:
                </Text>
                <Text
                  style={{
                    fontSize: "9px",
                    fontWeight: "medium",
                    paddingLeft: "5px",
                  }}
                >
                  17 August 2024 22:03
                </Text>
              </View>
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
                  fontSize: "9px",
                  fontFamily: "Arial",
                }}
              >
                (5)
              </Text>

              <Text
                style={{
                  fontSize: "9px",
                  paddingLeft: "10px",
                  fontFamily: "Arial",
                }}
              >
                Persons or Classes of Persons Entitled to Drive
              </Text>
            </View>
            <Text
              style={{
                fontSize: "8px",
                fontWeight: "medium",
                paddingLeft: "20px",
                paddingTop: "5px",
              }}
            >
              (Provided that the person holds a licence to drive such a vehicle
              and is not disqualified from holding or obtaining such a licence)
            </Text>
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
                  fontSize: "9px",
                  fontFamily: "Arial",
                }}
              >
                (2)
              </Text>

              <Text
                style={{
                  fontSize: "9px",
                  fontWeight: "medium",
                  paddingLeft: "10px",
                }}
              >
                Mohammed Hasham Iqbal
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                paddingTop: "50px",
              }}
            >
              <Text
                style={{
                  fontSize: "9px",
                  fontFamily: "Arial",
                }}
              >
                (6)
              </Text>

              <Text
                style={{
                  fontSize: "9px",
                  fontFamily: "Arial",
                  paddingLeft: "10px",
                }}
              >
                Limitations to use:
              </Text>
            </View>
            <Text
              style={{
                fontSize: "9px",
                paddingTop: "5px",
                paddingLeft: "20px",
              }}
            >
              Use for social, domestic and pleasure purposes and use in person
              by the Policyholder in connection with their business or
              profession EXCLUDING Commercial Travelling, hiring, carriage of
              passengers or goods for hire and reward, any purpose in connection
              with the Motor Trade, racing, pace-making, speed testing or
              reliability testing or use on any race track, race circuit or toll
              road without a speed limit including the Nurburgring
            </Text>
            <Text
              style={{
                fontSize: "9px",
                paddingTop: "10px",
                paddingLeft: "20px",
                fontFamily: "Arial",
              }}
            >
              This Certificate cannot be used as evidence of cover for the
              purpose of recovering impounded vehicles.
            </Text>
            <Text
              style={{
                fontSize: "8px",
                paddingTop: "10px",
              }}
            >
              I hereby certify that the insurance to which this Certificate
              relates satisfies the requirements of the related law applicable
              in Great Britain, Northern Ireland, the Isle of Man, the Island of
              Guernsey, the Island of Jersey and the Island of Alderney.
            </Text>
            <View
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
                fontSize: "9px",
                marginTop: "20px",
                paddingLeft: "30px",
                paddingRight: "30px",
              }}
            >
              <View
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <Text>
                  Insured by First Underwriting Ltd for and {"\n"}on behalf of
                  Accredited Insurance {"\n"} (Europe) Limited {"\n"}Authorised
                  insurers
                </Text>
              </View>
              <View>
                <Image style={{ width: "90px" }} src={pdfsign} />
              </View>
              <View
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <Text>
                  Colin {"\n"}
                  Johnson {"\n"}
                  Director {"\n"}
                  Accredited Insurance (Europe) Limited
                </Text>
              </View>
            </View>
          </View>
        </Page>
        <Page>
          <View>
            <Text>new</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}
