import * as React from "react";

import {
  Body,
  Button,
  Column,
  Container,
  Html,
  Img,
  Link,
  Section,
  Text,
} from "@react-email/components";

import { baseURl } from "@/constants/config";
import dayjs from "dayjs";

interface NotionMagicLinkEmailProps {
  link: string;
  policy: {
    number: string | null;
    insured: string | null;
    registrationNo: string | null;
    vehicleDetails: string | null;
  };
  email: {
    duration: string | null;
    startDate: Date | null;
    endDate: Date | null;
    firstUnderwritingInsurerPremium: number | null;
    insurancePremium: number | null;
    adminFee: number | null;
    totalCharged: number | null;
  };
}

export const NotionMagicLinkEmail = ({
  link,
  policy,
  email,
}: NotionMagicLinkEmailProps) => (
  <Html>
    <Body style={main}>
      <Container style={{ margin: "0 auto", maxWidth: "580px", padding: 10 }}>
        <Section style={{ width: "100%" }}>
          <Section
            style={{
              width: "100%",
              backgroundColor: "rgb(35, 67, 151)",
              fontSize: "16px",
              padding: "10px",
              color: "white",
            }}
          >
            <table
              role="presentation"
              cellPadding="0"
              cellSpacing="0"
              width="100%"
              style={{ tableLayout: "fixed" }}
            >
              <tr>
                <td
                  style={{
                    textAlign: "left",
                    fontSize: "16px",
                    color: "black",
                  }}
                >
                  Tempcover.com policy confirmation
                </td>
                <td style={{ textAlign: "right", fontSize: "16px" }}>
                  <Link
                    href="https://secure.tempcover.com/"
                    target="_blank"
                    style={{ color: "white" }}
                  >
                    View in browser
                  </Link>
                </td>
              </tr>
            </table>
          </Section>

          <table
            role="presentation"
            style={{
              width: "100%",
              fontSize: "16px",
              borderSpacing: 0,
              padding: "10px",
            }}
          >
            <tr>
              <td
                style={{ textAlign: "left", width: "250px", padding: "10px" }}
              >
                <Img
                  src={`${baseURl}/tempcover.png`}
                  alt="Vercel"
                  style={{ maxWidth: "250px", display: "block" }}
                />
              </td>

              <td style={{ textAlign: "right", padding: "10px" }}>
                <table
                  role="presentation"
                  style={{
                    width: "100%",
                    textAlign: "right",
                    borderSpacing: "0",
                  }}
                >
                  <tr>
                    <td style={{ paddingBottom: "17px" }}>
                      <Link
                        href="https://uk.trustpilot.com/review/tempcover.com?utm_medium=Trustbox&utm_source=EmailNewsletter2"
                        target="_blank"
                      >
                        <Img
                          src={`${baseURl}/tpstar.png`}
                          alt="Vercel"
                          style={{
                            display: "block",
                            marginLeft: "auto",
                            width: "80px",
                          }}
                        />
                      </Link>
                    </td>
                  </tr>

                  <tr>
                    <td style={{ paddingBottom: "17px" }}>
                      <Link
                        href="https://uk.trustpilot.com/review/tempcover.com?utm_medium=Trustbox&utm_source=EmailNewsletter2"
                        target="_blank"
                      >
                        <Img
                          src={`${baseURl}/stars.png`}
                          alt="Vercel"
                          style={{
                            display: "block",
                            marginLeft: "auto",
                            width: "120px",
                          }}
                        />
                      </Link>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <Link
                        href="https://uk.trustpilot.com/review/tempcover.com?utm_medium=Trustbox&utm_source=EmailNewsletter2"
                        target="_blank"
                      >
                        <Img
                          src={`${baseURl}/reviews.png`}
                          alt="Vercel"
                          style={{
                            display: "block",
                            marginLeft: "auto",
                            width: "160px",
                          }}
                        />
                      </Link>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </Section>
        <Text
          style={{
            color: "rgb(35,67,151)",
            textAlign: "center",
            width: "100%",
            fontSize: "20px",
            padding: "16px 0 5px",
            fontWeight: "bold",
          }}
        >
          Thanks for choosing
          <Link
            href="https://www.tempcover.com/claims"
            target="_blank"
            style={{ color: "#1155cc", padding: "0 0 0 8px" }}
          >
            tempcover.com
          </Link>
        </Text>
        <Text
          style={{
            color: "rgb(35,67,151)",
            textAlign: "center",
            width: "100%",
            fontSize: "20px",
            padding: "0 0 16px",
            fontWeight: "bold",
          }}
        >
          Your temporary insurance is all ready to go!
        </Text>
        <Text
          style={{
            width: "100%",
            fontSize: "18px",
            padding: "0 0 5px",
            fontWeight: "bold",
            color: "#333333",
          }}
        >
          Hi {policy.insured},
        </Text>
        <Text
          style={{
            width: "100%",
            fontSize: "18px",
            padding: "0 0 5px",
            color: "#333333",
          }}
        >
          You can relax now, everything is taken care of. Your temporary
          insurance policy is in place and will begin at the time you selected.
        </Text>
        <Text
          style={{
            width: "100%",
            fontSize: "18px",
            padding: "0 0 5px",
            color: "#333333",
          }}
        >
          Check out the summary of your policy and a link to view and print your
          policy documents below.
        </Text>
        <Text
          style={{
            width: "100%",
            fontSize: "18px",
            padding: "0 0 5px",
            color: "#333333",
          }}
        >
          Should you need to make a claim at any point, please{" "}
          <Link
            href="https://www.tempcover.com/claims"
            target="_blank"
            style={{ color: "#1155cc", padding: "0 2px" }}
          >
            Click here
          </Link>{" "}
          for more information.
        </Text>
        <Text
          style={{
            width: "100%",
            fontSize: "18px",
            padding: "0 0 5px",
            color: "#333333",
          }}
        >
          Thanks again for choosing
          <Link
            href="https://www.tempcover.com/"
            target="_blank"
            style={{ color: "#1155cc", padding: "0 3px" }}
          >
            tempcover.com
          </Link>
          for your temporary insurance needs - we hope to see you again soon.
        </Text>
        <Text
          style={{
            color: "rgb(35,67,151)",
            textAlign: "center",
            width: "100%",
            fontSize: "14px",
            padding: "0 0 3px",
          }}
        >
          This policy meets the Demands and Needs of a customer who wishes to
          insure a vehicle for a short period.
        </Text>
        <table
          role="presentation"
          style={{ width: "100%", textAlign: "center", margin: "0 auto" }}
        >
          <tr>
            <td>
              <Link
                href={link}
                style={{
                  backgroundColor: "rgb(107, 161, 37)",
                  padding: "12px 16px",
                  borderRadius: "3px",
                  color: "white",
                  fontSize: "16px",
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                View your policy documents
              </Link>
            </td>
          </tr>
        </table>

        <Container
          style={{
            border: "2px solid rgb(35, 67, 151)",
            borderRadius: "5px",
            margin: "10px auto 20px",
            padding: "2%",
            maxWidth: "100%",
            width: "600px",
          }}
        >
          <Section>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                marginTop: "8px",
              }}
            >
              <tbody>
                <tr>
                  <td
                    style={{
                      width: "50%",
                      paddingRight: "10px",
                      paddingBottom: "5px",
                      fontSize: "17px",
                      fontWeight: "bold",
                      color: "rgb(35,67,151)",
                    }}
                  >
                    Policy summary
                  </td>
                  <td
                    style={{
                      fontSize: "13px",
                      width: "50%",
                      fontWeight: "normal",
                      color: "rgb(35,67,151)",
                      paddingLeft: "10px",
                      paddingBottom: "10px",
                      textAlign: "right",
                    }}
                  ></td>
                </tr>
                <tr>
                  <td
                    style={{
                      width: "50%",
                      paddingRight: "10px",
                      paddingBottom: "5px",
                      fontSize: "18px",
                      fontWeight: "bold",
                    }}
                  >
                    Policy number:
                  </td>
                  <td
                    style={{
                      fontSize: "14px",
                      width: "50%",
                      fontWeight: "normal",
                      color: "rgb(35,67,151)",
                      paddingLeft: "10px",
                      paddingBottom: "10px",
                      textAlign: "left",
                    }}
                  >
                    {policy.number}
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      width: "50%",
                      paddingRight: "10px",
                      paddingBottom: "5px",
                      fontSize: "18px",
                      fontWeight: "bold",
                    }}
                  >
                    Policy holder:
                  </td>
                  <td
                    style={{
                      fontSize: "14px",
                      width: "50%",
                      fontWeight: "normal",
                      color: "rgb(35,67,151)",
                      paddingLeft: "10px",
                      paddingBottom: "10px",
                      textAlign: "left",
                    }}
                  >
                    {policy.insured}
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      width: "50%",
                      paddingRight: "10px",
                      paddingBottom: "5px",
                      fontSize: "18px",
                      fontWeight: "bold",
                    }}
                  >
                    Vehicle type:
                  </td>
                  <td
                    style={{
                      fontSize: "14px",
                      width: "50%",
                      fontWeight: "normal",
                      color: "rgb(35,67,151)",
                      paddingLeft: "10px",
                      paddingBottom: "10px",
                      textAlign: "left",
                    }}
                  >
                    {policy.vehicleDetails}
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      width: "50%",
                      paddingRight: "10px",
                      paddingBottom: "5px",
                      fontSize: "18px",
                      fontWeight: "bold",
                    }}
                  >
                    Vehicle registration:
                  </td>
                  <td
                    style={{
                      fontSize: "14px",
                      width: "50%",
                      fontWeight: "normal",
                      color: "rgb(35,67,151)",
                      paddingLeft: "10px",
                      paddingBottom: "10px",
                      textAlign: "left",
                    }}
                  >
                    {policy.registrationNo}
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      width: "50%",
                      paddingRight: "10px",
                      paddingBottom: "5px",
                      fontSize: "18px",
                      fontWeight: "bold",
                    }}
                  >
                    Duration:
                  </td>
                  <td
                    style={{
                      fontSize: "14px",
                      width: "50%",
                      fontWeight: "normal",
                      color: "rgb(35,67,151)",
                      paddingLeft: "10px",
                      paddingBottom: "10px",
                      textAlign: "left",
                    }}
                  >
                    {email.duration}
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      width: "50%",
                      paddingRight: "10px",
                      paddingBottom: "5px",
                      fontSize: "18px",
                      fontWeight: "bold",
                    }}
                  >
                    Start date/time:
                  </td>
                  <td
                    style={{
                      fontSize: "14px",
                      width: "50%",
                      fontWeight: "normal",
                      color: "rgb(35,67,151)",
                      paddingLeft: "10px",
                      paddingBottom: "10px",
                      textAlign: "left",
                    }}
                  >
                    {dayjs(email.startDate).format("DD MMMM YYYY HH:mm")}
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      width: "50%",
                      paddingRight: "10px",
                      paddingBottom: "10px",
                      fontSize: "16px",
                      fontWeight: "bold",
                    }}
                  >
                    End date/time:
                  </td>
                  <td
                    style={{
                      fontSize: "14px",
                      width: "50%",
                      fontWeight: "normal",
                      color: "rgb(35,67,151)",
                      paddingLeft: "10px",
                      paddingBottom: "10px",
                      textAlign: "left",
                    }}
                  >
                    {dayjs(email.endDate).format("DD MMMM YYYY HH:mm")}
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>

          <Section>
            <Text
              style={{
                fontSize: "18px",
                padding: "8px 5px 0px",
                fontWeight: "bold",
                textAlign: "center",
                color: "#333333",
              }}
            >
              You have been charged
              <span style={{ color: "rgb(35,67,151)", padding: "0 3px 0 4px" }}>
                £{email.totalCharged ? email.totalCharged.toFixed(2) : "0.00"}
              </span>{" "}
              and a breakdown of the cost is below:
            </Text>
          </Section>

          <Section>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                marginTop: "8px",
              }}
            >
              <tbody>
                <tr>
                  <td
                    style={{
                      width: "50%",
                      paddingRight: "10px",
                      paddingBottom: "5px",
                      fontSize: "18px",
                      fontWeight: "bold",
                    }}
                  >
                    First Underwriting insurer premium:
                  </td>
                  <td
                    style={{
                      fontSize: "14px",
                      width: "50%",
                      fontWeight: "normal",
                      color: "rgb(35,67,151)",
                      paddingLeft: "10px",
                      paddingBottom: "10px",
                      textAlign: "right",
                    }}
                  >
                    £
                    {email.firstUnderwritingInsurerPremium
                      ? email.firstUnderwritingInsurerPremium.toFixed(2)
                      : "0.00"}
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      width: "50%",
                      paddingRight: "10px",
                      paddingBottom: "5px",
                      fontSize: "18px",
                      fontWeight: "bold",
                    }}
                  >
                    Insurance premium tax:
                  </td>
                  <td
                    style={{
                      fontSize: "14px",
                      width: "50%",
                      fontWeight: "normal",
                      color: "rgb(35,67,151)",
                      paddingLeft: "10px",
                      paddingBottom: "10px",
                      textAlign: "right",
                    }}
                  >
                    £
                    {email.insurancePremium
                      ? email.insurancePremium.toFixed(2)
                      : "0.00"}
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      width: "50%",
                      paddingRight: "10px",
                      paddingBottom: "5px",
                      fontSize: "18px",
                      fontWeight: "bold",
                    }}
                  >
                    Tempcover admin fee:
                  </td>
                  <td
                    style={{
                      fontSize: "14px",
                      width: "50%",
                      fontWeight: "normal",
                      color: "rgb(35,67,151)",
                      paddingLeft: "10px",
                      paddingBottom: "10px",
                      textAlign: "right",
                    }}
                  >
                    £{email.adminFee ? email.adminFee.toFixed(2) : "0.00"}
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      width: "50%",
                      paddingRight: "10px",
                      paddingBottom: "5px",
                      fontSize: "18px",
                      fontWeight: "bold",
                    }}
                  >
                    Total charged:
                  </td>
                  <td
                    style={{
                      fontSize: "14px",
                      width: "50%",
                      fontWeight: "normal",
                      color: "rgb(35,67,151)",
                      paddingLeft: "10px",
                      paddingBottom: "10px",
                      textAlign: "right",
                    }}
                  >
                    £
                    {email.totalCharged
                      ? email.totalCharged.toFixed(2)
                      : "0.00"}
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>
        </Container>

        <Container
          style={{
            backgroundColor: "rgb(2, 33, 112)",
            color: "white",
            fontSize: "16px",
            padding: "20px 15px",
            borderRadius: "5px",
            margin: "80px auto 20px",
            maxWidth: "100%",
            width: "600px",
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            <tr>
              <td
                style={{
                  paddingBottom: "5px",
                  color: "white",
                  fontSize: "16px",
                }}
              >
                Compare full annual van insurance and save up to{" "}
                <span style={{ fontWeight: "bold" }}>£263*</span> plus
              </td>
            </tr>
            <tr>
              <td
                style={{
                  fontWeight: "bold",
                  color: "white",
                  paddingBottom: "10px",
                }}
              >
                enjoy a whole year of rewards**
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: "5px 0",
                  display: "flex",
                }}
              >
                <Button
                  href="https://motor.tempcover.com/AnnualInsurance/Confirmation?q=JQyAYNJoscoHI309GCmeXQ==&s=5&e=0"
                  style={{
                    backgroundColor: "rgb(14, 194, 40)",
                    padding: "10px 16px",
                    borderRadius: "3px",
                    color: "white",
                    fontSize: "16px",
                    cursor: "pointer",
                    margin: "0 12px",
                  }}
                >
                  Start a quote
                </Button>
                <Img
                  src={`${baseURl}/compare.png`}
                  alt="Compare"
                  style={{ height: "32px", verticalAlign: "middle" }}
                />
              </td>
            </tr>
            <tr>
              <td
                style={{
                  fontSize: "8px",
                  lineHeight: "18px",
                  color: "white",
                  paddingTop: "10px",
                }}
              >
                *Based on online independent research by Consumer Intelligence
                during May 2020, 50% of customers could achieve this saving on
                their van insurance with Compare the Market. **T’s & C’s apply.
              </td>
            </tr>
          </table>
        </Container>

        <Text
          style={{
            width: "100%",
            fontSize: "16px",
            fontWeight: "bold",
            color: "rgb(35,67,151)",
          }}
        >
          Updating the MID
        </Text>
        <Text
          style={{
            width: "100%",
            fontSize: "13px",
            color: "#333333",
          }}
        >
          Your insurance details will shortly be passed to the{" "}
          <Link href="https://ownvehicle.askmid.com/" target="_blank">
            {" "}
            Motor Insurance Database (MID){" "}
          </Link>
          within the timescales required by the MID. However, due to the
          short-term nature of your policy, it is possible your policy may have
          expired before the details are loaded into the database.
        </Text>
        <Text
          style={{
            width: "100%",
            fontSize: "13px",
            color: "#333333",
          }}
        >
          We recommend that you print your insurance certificate and have this
          with you whilst you drive the vehicle as this remains valid proof of
          your insurance and legal entitlement to drive the vehicle. If you need
          to get in touch with us, please{" "}
          <Link href="https://www.tempcover.com/contact-us" target="_blank">
            Contact Us
          </Link>
        </Text>
        <Text
          style={{
            width: "100%",
            fontSize: "13px",
            color: "#333333",
          }}
        >
          We hope to see you again soon,
        </Text>
        <Text
          style={{
            width: "100%",
            fontSize: "13px",
            color: "#333333",
          }}
        >
          You are receiving this email as part of our quote service. This
          service does not relate to the marketing communication preferences you
          set when obtaining a quote.
        </Text>
        <Text
          style={{
            width: "100%",
            fontSize: "16px",
            padding: "0 0 5px",
            fontWeight: "bold",
            color: "rgb(35,67,151)",
          }}
        >
          tempcover
        </Text>
        <Container style={{ width: "100%", fontSize: "14px", color: "#333" }}>
          <table
            style={{ width: "100%", textAlign: "center", margin: "0 auto" }}
          >
            <tr>
              <td style={{ padding: "20px 0", fontWeight: "bold" }}>
                Get the updates
              </td>
            </tr>
            <tr>
              <td style={{ padding: "0 0 30px", fontWeight: "bold" }}>
                <table style={{ margin: "0 auto", display: "inline-block" }}>
                  <tr>
                    <td>
                      <Link
                        href="https://twitter.com/tempcover"
                        target="_blank"
                      >
                        <Img
                          src={`${baseURl}/twiter.png`}
                          alt="Twitter"
                          width="24"
                          height="24"
                        />
                      </Link>
                    </td>
                    <td>
                      <Link
                        href="https://www.facebook.com/tempcover"
                        target="_blank"
                      >
                        <Img
                          src={`${baseURl}/facebook.png`}
                          alt="Facebook"
                          width="24"
                          height="24"
                        />
                      </Link>
                    </td>
                    <td>
                      <Link
                        href="https://www.youtube.com/user/tempcover"
                        target="_blank"
                      >
                        <Img
                          src={`${baseURl}/youtube.png`}
                          alt="YouTube"
                          width="24"
                          height="24"
                        />
                      </Link>
                    </td>
                    <td>
                      <Link
                        href="https://www.linkedin.com/company/temporary-cover-ltd/?trk=tyah"
                        target="_blank"
                      >
                        <Img
                          src={`${baseURl}/linkedin.png`}
                          alt="LinkedIn"
                          width="24"
                          height="24"
                        />
                      </Link>
                    </td>
                    <td>
                      <Link
                        href="https://www.tempcover.com/contact-us"
                        target="_blank"
                      >
                        <Img
                          src={`${baseURl}/email.png`}
                          alt="Email"
                          width="24"
                          height="24"
                        />
                      </Link>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  fontSize: "13px",
                  padding: "10px 0",
                  color: "#333333",
                }}
              >
                IMPORTANT CONFIDENTIALITY NOTICE: this email and the information
                it contains may be confidential, legally privileged and
                protected by law. Access by the intended recipient only is
                authorised. Any liability (in negligence or otherwise) arising
                from any third party acting, or refraining from acting, on any
                information contained in this e-mail is hereby excluded. If you
                are not the intended recipient, please notify the sender
                immediately and do not disclose the contents of this e-mail or
                any attachment to any other person, use it for any purpose, or
                store or copy the information in any medium. Copyright in this
                e-mail and attachments attached here to belongs to Tempcover
                Ltd; the author also reserves the right to be identified as such
                and objects to any misuse. Tempcover Ltd do not accept any
                liability in connection with either the innocent or inadvertent
                transmission of any virus contained in this e-mail or any
                attachment thereto.
              </td>
            </tr>
            <tr>
              <td
                style={{
                  color: "rgb(35,67,151)",
                  fontSize: "14px",
                  padding: "16px 0 2px",
                  fontWeight: "bold",
                }}
              >
                TEMPCOVER LTD
              </td>
            </tr>
            <tr>
              <td
                style={{
                  color: "rgb(35,67,151)",
                  fontSize: "14px",
                  padding: "2px 0",
                  fontWeight: "bold",
                }}
              >
                REGISTERED IN ENGLAND NO. 9923259
              </td>
            </tr>
            <tr>
              <td
                style={{
                  color: "rgb(35,67,151)",
                  fontSize: "14px",
                  padding: "2px 0",
                  fontWeight: "bold",
                }}
              >
                REGISTERED OFFICE: 2<sup>nd</sup> FLOOR ADMIRAL HOUSE,
                HARLINGTON WAY, FLEET,
              </td>
            </tr>
            <tr>
              <td
                style={{
                  color: "rgb(35,67,151)",
                  fontSize: "14px",
                  padding: "2px 0",
                  fontWeight: "bold",
                }}
              >
                HAMPSHIRE, GU51 4BB
              </td>
            </tr>
            <tr>
              <td
                style={{
                  color: "rgb(35,67,151)",
                  fontSize: "14px",
                  padding: "2px 0 5px",
                  fontWeight: "bold",
                }}
              >
                <Link
                  href="https://www.tempcover.com/terms-conditions"
                  target="_blank"
                  style={{ color: "#1155cc", padding: "0 4px" }}
                >
                  Terms
                </Link>
                |
                <Link
                  href="https://www.tempcover.com/privacy-notice"
                  target="_blank"
                  style={{ color: "#1155cc", padding: "0 4px" }}
                >
                  Privacy
                </Link>
              </td>
            </tr>
          </table>
        </Container>
      </Container>
    </Body>
  </Html>
);

NotionMagicLinkEmail.PreviewProps = {
  link: "https://notion.so",
  policy: {
    number: "123456",
    insured: "Mohammed Hasham Iqbal",
    registrationNo: "T444XDX",
    vehicleDetails: "MERCEDES-BENZ A 45 AMG 4MATIC",
  },
  email: {
    duration: "7 Days",
    startDate: new Date(),
    endDate: new Date(),
    firstUnderwritingInsurerPremium: 172.99,
    insurancePremium: 20.76,
    adminFee: 4.8,
    totalCharged: 198.55,
  },
} as NotionMagicLinkEmailProps;

export default NotionMagicLinkEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily: "Arial, Fira Sans, Helvetica Neue, sans-serif",
};
