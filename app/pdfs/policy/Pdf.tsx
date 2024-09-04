'use client'
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
        padding: 0,
        margin: 0,
      }}
    >
      <Document>
        <Page size="LEGAL" style={styles.page}>
          <View
            style={{
              width: "100%",
              height: "100vh",
              padding: "15px 25px 0px",
              display: "flex",
              flexDirection: "column",
              fontSize: "8px",
            }}
          >
            <View
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: "10px 10px",
              }}
            >
              <Image style={{ width: "100px" }} src="/firstlogo.png" />
            </View>
            <View
              style={{
                border: "1.2px solid black",

              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  fontFamily: "Arial",
                  fontWeight: "bold",
                  fontSize: "9px"
                }}
              >
                <View
                  style={{
                    borderRight: "1.2px solid black",
                    padding: "6px 3px",
                    width: "60%",
                    marginLeft: "20px",
                  }}
                >
                  <Text>SHORT TERM INSURANCE - FIRST UNDERWRITING</Text>
                </View>
                <View
                  style={{
                    padding: "6px 3px",
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
                  borderTop: "1.2px solid black",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    width: "50%",
                    borderRight: "1.2px solid black",
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
                        borderRight: "1.2px solid black",
                        padding: "3px",
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
                        padding: "3px",
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
                      borderTop: "1.2px solid black",
                      padding: "6px 3px",
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
                      borderTop: "1.2px solid black",
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
                        borderBottom: "1.2px solid black",
                        padding: "3px",
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
                      borderBottom: "1.2px solid black",
                      padding: "6px 3px",
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
                      borderBottom: "1.2px solid black",
                      padding: "6px 3px",
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
                      borderBottom: "1.2px solid black",
                      padding: "6px 3px",
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
                      padding: "6px 3px",
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
                  borderTop: "1.2px solid black",
                }}
              >
                <View
                  style={{
                    borderRight: "1.2px solid black",
                    padding: "6px 3px",
                    width: "60%",
                    display: "flex",
                    flexDirection: "row"
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
                        textDecoration: "underline"
                      }}
                    >
                      Insured Vehicle:
                    </Text>
                    <Text
                      style={{
                        fontWeight: "normal",
                      }}
                    >

                    </Text>
                  </View>
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
                      Registration Number:
                    </Text>
                    <Text
                      style={{
                        fontWeight: "normal",
                      }}
                    >
                      T444XDX
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    padding: "6px 3px",
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
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  borderTop: "1.2px solid black",
                }}
              >
                <View
                  style={{

                    padding: "3px",
                    width: "40%",
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
                    padding: "3px",
                    width: "40%",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Arial",
                      fontWeight: "bold",
                    }}
                  >
                    Make and Model of Vehicle:

                  </Text>
                  <Text
                    style={{
                      fontWeight: "normal",
                    }}
                  >
                    MERCEDES-BENZ A 45 AMG 4MATIC
                  </Text>
                </View>
              </View>
            </View>

            {/* horizontal line */}

            <View style={{
              marginTop: "10px",
              height: "4px",
              width: "100%",
              backgroundColor: "black"
            }}></View>

            {/* 2nd table */}

            <View style={{
              border: "1.2px solid black",
              padding: "5px",
              marginTop: "15px"
            }}>
              <Text style={{
                fontFamily: "Arial",
                fontWeight: "bold"
              }}>
                ENDORSEMENTS APPLICABLE (Full wordings shown within ENDORSEMENTS)
              </Text>
              <Text >
                001 - ACCIDENTAL DAMAGE FIRE AND THEFT EXCESS
              </Text>
              <View style={{
                width: '100%',
                display: "flex",
                flexDirection: "row"
              }}>
                <View style={{
                  width: "55%",
                  marginTop: "10px"
                }}>
                  <View style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%"
                  }}>
                    <Text style={{
                      width: "70%"
                    }}>Compulsory Excess Amount
                    </Text>
                    <Text>£1250.00
                    </Text>
                  </View>
                  <View style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%"
                  }}>
                    <Text style={{
                      width: "70%"
                    }}>Compulsory Excess Amount
                    </Text>
                    <Text>£1250.00
                    </Text>
                  </View>
                  <View style={{
                    height: ".5px",
                    backgroundColor: "black",
                    width: "100%",
                    margin: "10px 0px"
                  }}>

                  </View>
                  <View style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                    margin: "5px 0px"

                  }}>
                    <Text style={{
                      width: "70%",
                      fontFamily: "Arial",
                      fontWeight: "bold"
                    }}>Total Excess Amount
                    </Text>
                    <Text style={{

                      fontFamily: "Arial",
                      fontWeight: "bold"
                    }}>£1250.00
                    </Text>
                  </View>
                </View>
                {/* <View style={{
                  width: "40%"
                }}>
                  <View style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%"
                  }}>
                    <Text style={{
                      width: "70%"
                    }}>Compulsory Excess Amount
                    </Text>
                    <Text>£1250.00
                    </Text>
                  </View>
                </View> */}
              </View>
            </View>

            {/* horizontal line */}
            <View style={{
              marginTop: "10px",
              height: "4px",
              width: "100%",
              backgroundColor: "black"
            }}></View>


            {/* 3rd table */}


            <View style={{
              border: "1.2px solid black",
              padding: "5px",
              marginTop: "15px"
            }}>
              <Text style={{ textDecoration: "underline", fontSize: "8px", fontFamily: "Arial", fontWeight: "bold" }}>Important Information</Text>
              <View style={{
                marginTop: "5px",


              }}>
                <Text style={{
                  fontWeight: "bold",
                  fontFamily: "Arial",
                  fontSize: "7px"

                }}> CONTINUOUS INSURANCE ENFORCEMENT and the MOTOR INSURANCE DATABASE </Text><Text style={{
                  fontSize: "6px"
                }} > Information relating to your policy will be added to the Motor Insurance Database ('MID') managed by the Motor
                  Insurance Bureau ('MIB'). MID and the data stored on it may be used by certain statutory and/or authorised bodies including the Police, the DVLA, the DVLANI, the Insurance Fraud Bureau and other bodies
                  permitted by law for purposes not limited to but including:
                </Text>
                <View style={{ margin: "10px 0px", display: "flex", gap: "3px" }}>
                  <View style={{ display: "flex", flexDirection: "row", gap: "15px" }}><Text style={{ textAlign: "right", width: "30px" }} >I</Text><Text>Electronic Licensing</Text></View>
                  <View style={{ display: "flex", flexDirection: "row", gap: "15px" }}><Text style={{ textAlign: "right", width: "30px" }} >II</Text><Text>Continuous Insurance Enforcement</Text></View>
                  <View style={{ display: "flex", flexDirection: "row", gap: "15px" }}><Text style={{ textAlign: "right", width: "30px" }} >III</Text><Text>Law enforcement (prevention, detection, apprehension and or prosecution of offenders)</Text></View>
                  <View style={{ display: "flex", flexDirection: "row", gap: "15px" }}><Text style={{ textAlign: "right", width: "30px" }} >IV</Text><Text>The provision of government services and or other services aimed at reducing the level and incidence of uninsured driving.</Text></View>


                </View>
                <Text style={{ lineHeight: "1.3px" }}>
                  If you are involved in a road traffic accident (either in the UK, EEA or certain other territories), insurers and or the MIB may search the MID to
                  obtain relevant information.
                </Text>
                <Text style={{ lineHeight: "1.3px" }}>
                  Persons (including his or her appointed representatives) pursuing a claim in respect of a road traffic accident (including citizens of other countries)
                  may also obtain information which is held on the MID. It is vital that the MID holds your correct registration number. If it is incorrectly shown on MID
                  you are at risk of having your vehicle seized by the Police.

                </Text>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer >
  );
}
