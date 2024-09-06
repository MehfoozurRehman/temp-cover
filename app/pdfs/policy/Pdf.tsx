"use client";

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
import dayjs from "dayjs";

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

export default function Pdf({
  data,
}: {
  data: {
    number: string;
    insured: string;
    description: string;
    dateIssued: any;
    effectiveDate: any;
    expirationDate: any;
    reasonForIssue: string;
    premium: number;
    registrationNo: string;
    vehicleValue: number;
    vehicleDetails: string;
    compulsoryExcessFee: number;
    voluntaryExcessFee: number;
  };
}) {
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
              padding: "15px 30px 0px 30px",
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
                paddingTop: "25px",
                paddingBottom: "10px",
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
                  fontSize: "9px",
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
                        {data.number}
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
                        {dayjs(data.dateIssued).format("DD MMM YYYY")}
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
                      {data.insured}
                    </Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      borderTop: "1.2px solid black",
                      padding: "5px",
                    }}
                  >
                    {data.description?.split("\n").map((item, index) => (
                      <Text
                        key={index}
                        style={{
                          fontFamily: "Arial",
                          fontWeight: "bold",
                          marginRight: "5px",
                        }}
                      >
                        {item}
                      </Text>
                    ))}
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
                      {dayjs(data.effectiveDate).format("DD MMM YYYY HH:mm")}
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
                      {dayjs(data.expirationDate).format("DD MMM YYYY HH:mm")}
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
                      {data.reasonForIssue}
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
                      £{data.premium?.toLocaleString()}
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
                    flexDirection: "row",
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
                        textDecoration: "underline",
                      }}
                    >
                      Insured Vehicle:
                    </Text>
                    <Text
                      style={{
                        fontWeight: "normal",
                      }}
                    ></Text>
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
                      {data.registrationNo}
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
                    Vehicle Value:
                  </Text>
                  <Text
                    style={{
                      fontWeight: "normal",
                    }}
                  >
                    {data.vehicleValue?.toLocaleString()}
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
                    {data.vehicleDetails}
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                marginTop: "10px",
                height: "4px",
                width: "100%",
                backgroundColor: "black",
              }}
            ></View>
            <View
              style={{
                border: "1.2px solid black",
                padding: "5px",
                marginTop: "15px",
              }}
            >
              <Text
                style={{
                  fontFamily: "Arial",
                  fontWeight: "bold",
                }}
              >
                ENDORSEMENTS APPLICABLE (Full wordings shown within
                ENDORSEMENTS)
              </Text>
              <Text>001 - ACCIDENTAL DAMAGE FIRE AND THEFT EXCESS</Text>
              <View
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    width: "55%",
                    marginTop: "10px",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <Text
                      style={{
                        width: "70%",
                      }}
                    >
                      Compulsory Excess Amount
                    </Text>
                    <Text>£{data.compulsoryExcessFee?.toLocaleString()}</Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <Text
                      style={{
                        width: "70%",
                      }}
                    >
                      Voluntary Excess Amount
                    </Text>
                    <Text>£{data.voluntaryExcessFee?.toLocaleString()}</Text>
                  </View>
                  <View
                    style={{
                      height: ".5px",
                      backgroundColor: "black",
                      width: "100%",
                      margin: "10px 0px",
                    }}
                  ></View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "100%",
                      margin: "5px 0px",
                    }}
                  >
                    <Text
                      style={{
                        width: "70%",
                        fontFamily: "Arial",
                        fontWeight: "bold",
                      }}
                    >
                      Total Excess Amount
                    </Text>
                    <Text
                      style={{
                        fontFamily: "Arial",
                        fontWeight: "bold",
                      }}
                    >
                      £
                      {(
                        data.voluntaryExcessFee + data.compulsoryExcessFee
                      )?.toLocaleString()}
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
            <View
              style={{
                marginTop: "10px",
                height: "3px",
                width: "100%",
                backgroundColor: "black",
              }}
            ></View>

            {/* 3rd table */}

            <View
              style={{
                border: "1.2px solid black",
                padding: "5px",
                marginTop: "15px",
              }}
            >
              <Text
                style={{
                  textDecoration: "underline",
                  fontSize: "8px",
                  fontFamily: "Arial",
                  fontWeight: "bold",
                }}
              >
                Important Information
              </Text>
              <View
                style={{
                  marginTop: "5px",
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontFamily: "Arial",
                    fontSize: "7px",
                  }}
                >
                  {" "}
                  CONTINUOUS INSURANCE ENFORCEMENT and the MOTOR INSURANCE
                  DATABASE{" "}
                </Text>
                <Text
                  style={{
                    fontSize: "6px",
                  }}
                >
                  {" "}
                  Information relating to your policy will be added to the Motor
                  Insurance Database ('MID') managed by the Motor Insurance
                  Bureau ('MIB'). MID and the data stored on it may be used by
                  certain statutory and/or authorised bodies including the
                  Police, the DVLA, the DVLANI, the Insurance Fraud Bureau and
                  other bodies permitted by law for purposes not limited to but
                  including:
                </Text>
                <View
                  style={{ margin: "10px 0px", display: "flex", gap: "3px" }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "15px",
                    }}
                  >
                    <Text style={{ textAlign: "right", width: "30px" }}>I</Text>
                    <Text>Electronic Licensing</Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "15px",
                    }}
                  >
                    <Text style={{ textAlign: "right", width: "30px" }}>
                      II
                    </Text>
                    <Text>Continuous Insurance Enforcement</Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "15px",
                    }}
                  >
                    <Text style={{ textAlign: "right", width: "30px" }}>
                      III
                    </Text>
                    <Text>
                      Law enforcement (prevention, detection, apprehension and
                      or prosecution of offenders)
                    </Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "15px",
                    }}
                  >
                    <Text style={{ textAlign: "right", width: "30px" }}>
                      IV
                    </Text>
                    <Text>
                      The provision of government services and or other services
                      aimed at reducing the level and incidence of uninsured
                      driving.
                    </Text>
                  </View>
                </View>
                <Text style={{ lineHeight: "1.3px" }}>
                  If you are involved in a road traffic accident (either in the
                  UK, EEA or certain other territories), insurers and or the MIB
                  may search the MID to obtain relevant information.
                </Text>
                <Text style={{ lineHeight: "1.3px" }}>
                  Persons (including his or her appointed representatives)
                  pursuing a claim in respect of a road traffic accident
                  (including citizens of other countries) may also obtain
                  information which is held on the MID. It is vital that the MID
                  holds your correct registration number. If it is incorrectly
                  shown on MID you are at risk of having your vehicle seized by
                  the Police.
                </Text>
              </View>
            </View>

            {/* horizontal line */}
            <View
              style={{
                marginTop: "20px",
                height: "3px",
                width: "100%",
                backgroundColor: "black",
              }}
            ></View>
            <View
              style={{
                border: "2px solid black",
                marginTop: "20px",
                padding: "6px",
                marginLeft: "5px",
              }}
            >
              <Text
                style={{
                  fontFamily: "Arial",
                  fontSize: "7.5px",
                }}
              >
                RSEMENTS - only if apply if noted in the ENDORSEMENTS APPLICABLE
                above
              </Text>
              <Text
                style={{
                  fontFamily: "Arial",
                  fontSize: "8px",
                  marginTop: "4px",
                }}
              >
                001 - ACCIDENTAL DAMAGE FIRE AND THEFT EXCESS
              </Text>
              <Text
                style={{
                  fontSize: "8px",
                  marginTop: "4px",
                  lineHeight: "1.3px",
                }}
              >
                We shall not be responsible to pay the first amount as shown on
                your schedule of insurance of any claim of or series of claims
                arising out of one event in respect of which indemnity is
                provided by Section 1 of your Policy.
              </Text>
              <Text
                style={{
                  fontFamily: "Arial",
                  fontSize: "8px",
                  marginTop: "4px",
                }}
              >
                067- REPUBLIC OF IRELAND USE
              </Text>
              <Text
                style={{
                  fontSize: "8.4px",
                  marginTop: "4px",
                  lineHeight: "1.3px",
                }}
              >
                It is agreed that the territorial limits as described in section
                9 (Territorial Limits and using your vehicle abroad) shall be
                extended to include the Republic of Ireland for the annual
                period of the policy cover. In all other respects the terms,
                general conditions and general exceptions of this policy shall
                apply.
              </Text>
            </View>
            {/* horizontal line */}
            <View
              style={{
                marginTop: "8px",
                height: "3px",
                width: "100%",
                backgroundColor: "black",
              }}
            ></View>
            <View
              style={{
                marginTop: "15px",
                border: "2px solid black",
                padding: "5px",
                marginLeft: "5px",
              }}
            >
              <Text
                style={{
                  fontFamily: "Arial",
                  fontSize: "8px",
                }}
              >
                Insurer Information
              </Text>
              <Text
                style={{
                  fontSize: "7px",
                }}
              >
                Cover has been issued and arranged by First Underwriting Limited
                under authority granted by Accredited Insurance (Europe) Limited
                who are authorised and regulated by the Malta Financial Services
                Limited. First Underwriting Limited is authorised and regulated
                by the Financial Conduct Authority under FRN 624585.
              </Text>
            </View>
            {/* horizontal line */}
            <View
              style={{
                marginTop: "5px",
                height: "3px",
                width: "100%",
                backgroundColor: "black",
              }}
            ></View>
            <View
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src="/secondLogo.png"
                style={{
                  width: "180px",
                }}
              />
              <Text
                style={{
                  fontSize: "4px",
                  marginRight: "40px",
                  marginTop: "3px",
                }}
              >
                Issued by First Underwriting Ltd for and on behalf of Accredited
                Insurance (Europe) Limited.
              </Text>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}
