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
const vehicleRegistrationNumber = "444XDXX45";
const Insured = "Mohammed Hasham Iqbal";
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
                padding: "0px 20px",
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
                marginLeft: "10px",
                marginRight: "10px",
              }}
            />
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
                  fontSize: "10px",
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
                {vehicleRegistrationNumber}
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
                {Insured}
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
                (5)
              </Text>

              <Text
                style={{
                  fontSize: "10px",
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
                  fontSize: "10px",
                  fontFamily: "Arial",
                }}
              >
                (2)
              </Text>

              <Text
                style={{
                  fontSize: "10px",
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
                  fontSize: "10px",
                  fontFamily: "Arial",
                }}
              >
                (6)
              </Text>

              <Text
                style={{
                  fontSize: "10px",
                  fontFamily: "Arial",
                  paddingLeft: "10px",
                }}
              >
                Limitations to use:
              </Text>
            </View>
            <Text
              style={{
                fontSize: "10px",
                paddingTop: "10px",
                paddingLeft: "20px",
              }}
            >
              Use for social, domestic and pleasure purposes and use in person
              by the Policyholder in connection with their business or
              profession{" "}
              <Text
                style={{
                  fontFamily: "Arial",
                  fontWeight: "bold",
                }}
              >
                EXCLUDING
              </Text>{" "}
              Commercial Travelling, hiring, carriage of passengers or goods for
              hire and reward, any purpose in connection with the Motor Trade,
              racing, pace-making, speed testing or reliability testing or use
              on any race track, race circuit or toll road without a speed limit
              including the Nurburgring
            </Text>
            <Text
              style={{
                fontSize: "10px",
                paddingTop: "15px",
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
                fontSize: "10px",
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
              <View
                style={{
                  paddingRight: "26px",
                  border: "1px solid",
                }}
              >
                <Image style={{ width: "90px" }} src="/pdfsign.png" />
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
            <Text
              style={{
                fontSize: "7px",
                paddingTop: "20px",
              }}
            >
              Note: For full details of the insurance cover reference should be
              made to the Insurance Document and Schedule. {"\n"}Advice to Third
              Parties: Nothing contained in this Certificate affects your right
              as a Third Party to make
            </Text>
            <View
              style={{
                backgroundColor: "black",
                width: "100%",
                height: "3px",
                marginTop: "15px",
                padding: "0px 8px",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            />

            <View
              style={{
                width: "100%",
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                flexDirection: "row",
                position: "relative",
                marginTop: "165px",
              }}
            >
              <View>
                <Image style={{ width: "160px" }} src="/secondLogo.png" />
              </View>
              <View
                style={{
                  width: "100%",
                  position: "absolute",
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                  marginTop: "15px",
                }}
              >
                <Text
                  style={{
                    fontSize: "6px",
                  }}
                >
                  Version FRCERT1118
                </Text>
              </View>
            </View>
          </View>
        </Page>
        <Page>
          <View
            style={{
              margin: "20px",
              padding: "10px",
              border: "1px solid black",
              fontSize: "10px",
            }}
          >
            <Text
              style={{
                marginTop: "10px",
              }}
            >
              The insurance evidenced by this Certificate of Motor Insurance
              extends to include the compulsory motor insurance requirements of
            </Text>
            <Text
              style={{
                marginLeft: "20px",
                marginTop: "15px",
              }}
            >
              a) any other member country of the European Union;
            </Text>
            <Text
              style={{
                marginLeft: "20px",
                marginTop: "3px",
              }}
            >
              b) Andorra, Iceland, Liechtenstein, Norway, Serbia and
              Switzerland.
            </Text>
            <Text
              style={{
                marginTop: "10px",
              }}
            >
              La police a laquelle ce certificat d'assurance automobile est
              applicable, inclut egalement les exi-gences obligatoires en
              matiere d'assurance automobile
            </Text>
            <Text
              style={{
                marginLeft: "20px",
                marginTop: "15px",
              }}
            >
              a) des autres pays membres de la Union Europeenne;
            </Text>
            <Text
              style={{
                marginLeft: "20px",
                marginTop: "3px",
              }}
            >
              b) Andorre, I 'Islande, le Liechtenstein, la Norvege, la Serbie et
              la Suisse.
            </Text>
            <Text
              style={{
                marginTop: "10px",
              }}
            >
              Die Police, auf welche sich dieser
              Kraftfahizeugversicherungsschein bezieht, deckt ebenfalls die
              Anforderungen der obligatorischen Kraftfahizeugversicherung
            </Text>
            <Text
              style={{
                marginLeft: "20px",
                marginTop: "15px",
              }}
            >
              a) aller anderen Mitgliedsstaaten der Europaeischen Union;
            </Text>
            <Text
              style={{
                marginLeft: "20px",
                marginTop: "3px",
              }}
            >
              b) Andorra, Islandia, Liechtenstein, Norwegen, Serbien and der
              Schweiz.
            </Text>
            <Text
              style={{
                marginTop: "10px",
              }}
            >
              La polizza comprovata dal presente certificato di Assicurazione
              Automobilistica si estende ad includ-ere l'assicurazione
              auotmobilistica obbligatoria:
            </Text>
            <Text
              style={{
                marginLeft: "20px",
                marginTop: "15px",
              }}
            >
              a) di qualsiasi altro paese membro della Unione Europea;
            </Text>
            <Text
              style={{
                marginLeft: "20px",
                marginTop: "3px",
              }}
            >
              b) Andorra, Islanda, Liechtenstein, Norvegia, Serbia e Svizzera.
            </Text>
            <Text
              style={{
                marginTop: "10px",
              }}
            >
              La poliza aplicable a este Certificado de Seguro de Automovil se
              extiende pars incluir los requerim-ientos de seguro de automovil
              obligatorios en:
            </Text>
            <Text
              style={{
                marginLeft: "20px",
                marginTop: "20px",
              }}
            >
              a) Cualquier otro pais miembro de la Union Europea;
            </Text>
            <Text
              style={{
                marginLeft: "20px",
                marginTop: "3px",
              }}
            >
              b) Andorra, Islandia, Liechtenstein, Noruega, Serbia y Suiza.
            </Text>
            <Text
              style={{
                marginTop: "50px",
              }}
            >
              Advice to third parties: Nothing contained in this Certificate
              affects your right as a third party to make a claim.
            </Text>
            <Text
              style={{
                marginTop: "10px",
                fontFamily: "Arial",
                fontSize: "10px",
              }}
            >
              IMPORTANT: FOR THE FULL DETAILS OF YOUR INSURANCE, PLEASE READ THE
              CERTIFICATE OF MOTOR INSURANCE. THE SCHEDULE AND DOCUMENT OF
              INSURANCE AS ONE DOCUMENT
            </Text>
            <Text
              style={{
                marginTop: "10px",
                fontFamily: "Arial",
                fontSize: "10px",
              }}
            >
              Important - if you have an accident, please report all accidents
              to us immediately on 0333 305 8120 so we can tell you what to do
              next and help resolve any claim.
            </Text>
            <Text
              style={{
                marginTop: "220px",
                fontSize: "6px",
                textAlign: "center",
              }}
            >
              Cover has been issued and arranged by First Underwriting Limited
              under authority granted by Accredited Insurance (Europe) Limited
              who are authorised and regulated by the Malta Financial Services
              Authority. First Underwriting Limited is authorised and regulated
              by the Financial Conduct Authority under FRN 624585.
            </Text>
            <View
              style={{
                width: "100%",
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                flexDirection: "row",
                position: "relative",
              }}
            >
              <View>
                <Image style={{ width: "160px" }} src="/secondLogo.png" />
              </View>
              <View
                style={{
                  width: "100%",
                  position: "absolute",
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                  marginTop: "15px",
                }}
              >
                <Text
                  style={{
                    fontSize: "6px",
                  }}
                >
                  Version FRCERT1118
                </Text>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}
