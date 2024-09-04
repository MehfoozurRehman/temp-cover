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
        padding: 0,
        margin: 0,
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
              fontSize: "10px",
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
            </View>
            <View
              style={{
                border: "1.5px solid black",
                marginTop: "10px",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  fontFamily: "Arial",
                  fontWeight: "bold",
                }}
              >
                <View
                  style={{
                    borderRight: "1.5px solid black",
                    padding: "10px 5px",
                    width: "60%",
                    marginLeft: "20px",
                  }}
                >
                  <Text>SHORT TERM INSURANCE - FIRST UNDERWRITING</Text>
                </View>
                <View
                  style={{
                    padding: "10px 5px",
                    width: "40%",
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                    }}
                  >
                    NEW BUSINESS SCHEDULE
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: "100%",
                  borderTop: "1.5px solid black",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    width: "50%",
                    borderRight: "1.5px solid black",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <View
                      style={{
                        borderRight: "1.5px solid black",
                        padding: "5px 5px",
                        width: "60%",
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: "Arial",
                          fontWeight: "bold",
                        }}
                      >
                        Policy Number:
                      </Text>
                      <Text
                        style={{
                          fontWeight: "normal",
                        }}
                      >
                        TCV-MOT-1739398
                      </Text>
                    </View>
                    <View
                      style={{
                        padding: "5px 5px",
                        width: "40%",
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: "Arial",
                          fontWeight: "bold",
                        }}
                      >
                        Date Issued:
                      </Text>
                      <Text
                        style={{
                          fontWeight: "normal",
                        }}
                      >
                        10 Aug 2024
                      </Text>
                    </View>
                  </View>

                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      borderTop: "1.5px solid black",
                      padding: "10px 5px",
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "Arial",
                        fontWeight: "bold",
                        marginRight: "5px",
                      }}
                    >
                      Insured:
                    </Text>
                    <Text
                      style={{
                        fontWeight: "normal",
                      }}
                    >
                      Mohammed Hasham Iqba
                    </Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      borderTop: "1.5px solid black",
                      padding: "5px",
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "Arial",
                        fontWeight: "bold",
                        marginRight: "5px",
                      }}
                    >
                      5 Park Lane{"\n"}Peterborough {"\n"}PE1 5JH
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    width: "50%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <View
                      style={{
                        borderBottom: "1.5px solid black",
                        padding: "5px 5px",
                        width: "100%",
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: "Arial",
                          fontWeight: "bold",
                        }}
                      >
                        Agent:
                      </Text>
                      <Text
                        style={{
                          fontWeight: "normal",
                        }}
                      >
                        Tempcover Limited
                      </Text>
                    </View>
                  </View>

                  <View
                    style={{
                      borderBottom: "1.5px solid black",
                      padding: "10px 5px",
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "Arial",
                        fontWeight: "bold",
                        width: "50%",
                      }}
                    >
                      Effective Time/Date:
                    </Text>
                    <Text
                      style={{
                        fontWeight: "normal",
                      }}
                    >
                      10 August 2024 22:03
                    </Text>
                  </View>
                  <View
                    style={{
                      borderBottom: "1.5px solid black",
                      padding: "10px 5px",
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "Arial",
                        fontWeight: "bold",
                        width: "50%",
                      }}
                    >
                      Expiry Time/Date:
                    </Text>
                    <Text
                      style={{
                        fontWeight: "normal",
                      }}
                    >
                      10 August 2024 22:03
                    </Text>
                  </View>
                  <View
                    style={{
                      borderBottom: "1.5px solid black",
                      padding: "10px 5px",
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "Arial",
                        fontWeight: "bold",
                        width: "50%",
                      }}
                    >
                      Reason for Issue:
                    </Text>
                    <Text
                      style={{
                        fontWeight: "normal",
                      }}
                    >
                      New Business
                    </Text>
                  </View>
                  <View
                    style={{
                      padding: "10px 5px",
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "Arial",
                        fontWeight: "bold",
                        width: "50%",
                      }}
                    >
                      Premium (inc. ipt):
                    </Text>
                    <Text
                      style={{
                        fontWeight: "normal",
                      }}
                    >
                      £198.55
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  borderTop: "1.5px solid black",
                }}
              >
                <View
                  style={{
                    borderRight: "1.5px solid black",
                    padding: "10px 5px",
                    width: "60%",
                  }}
                >
                  <View
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "Arial",
                        fontWeight: "bold",
                        marginRight: "5px",
                      }}
                    >
                      Cover:
                    </Text>
                    <Text
                      style={{
                        fontWeight: "normal",
                      }}
                    >
                      COMPREHENSIVE
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    padding: "10px 5px",
                    width: "40%",
                  }}
                >
                  <View
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "Arial",
                        fontWeight: "bold",
                        marginRight: "5px",
                      }}
                    >
                      Cover:
                    </Text>
                    <Text
                      style={{
                        fontWeight: "normal",
                      }}
                    >
                      COMPREHENSIVE
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}
