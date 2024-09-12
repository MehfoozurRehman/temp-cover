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
      <Container style={{ margin: "0 auto", maxWidth: "1000px", padding: 10 }}>
        <Section style={{ width: "100%" }}>
          <Text
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              backgroundColor: "rgb(35, 67, 151)",
              fontSize: "16px",
              padding: "10px ",
            }}
          >
            Tempcover.com policy confirmation
            <Link
              href="https://secure.tempcover.com/"
              target="_blank"
              style={{ color: "white" }}
            >
              View in browser
            </Link>
          </Text>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              fontSize: "16px",
              alignItems: "center",
            }}
          >
            <Img
              src={`${baseURl}/tempcover.png`}
              alt="Vercel"
              className="my-0 mx-auto"
              style={{
                flex: "1",
                maxWidth: "250px",
              }}
            />

            <Text
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: "17px",
              }}
            >
              <Link
                href="https://uk.trustpilot.com/review/tempcover.com?utm_medium=Trustbox&utm_source=EmailNewsletter2"
                target="_blank"
              >
                <Img
                  src={`${baseURl}/tpstar.png`}
                  alt="Vercel"
                  className="my-0 mx-auto"
                  width="80"
                />
              </Link>
              <Link
                href="https://uk.trustpilot.com/review/tempcover.com?utm_medium=Trustbox&utm_source=EmailNewsletter2"
                target="_blank"
              >
                <Img
                  src={`${baseURl}/stars.png`}
                  alt="Vercel"
                  className="my-0 mx-auto"
                  width="120"
                />
              </Link>
              <Link
                href="https://uk.trustpilot.com/review/tempcover.com?utm_medium=Trustbox&utm_source=EmailNewsletter2"
                target="_blank"
              >
                <Img
                  src={`${baseURl}/reviews.png`}
                  alt="Vercel"
                  className="my-0 mx-auto"
                  width="160"
                />
              </Link>
            </Text>
          </div>
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
          Hi Mohammed,
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
          Thanks again for choosing{" "}
          <Link
            href={baseURl}
            target="_blank"
            style={{ color: "#1155cc", padding: "0 3px 0 4px" }}
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
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <Link
            href={link}
            style={{
              backgroundColor: "rgb(107, 161, 37)",
              padding: "12px 16px",
              borderRadius: "3px",
              color: "white",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            View your policy documents
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            border: "2px solid rgb(35, 67, 151)",
            borderRadius: "5px",
            margin: "10px auto 20px",
            padding: "12px 0",
            maxWidth: "100%",
            width: "600px",
          }}
        >
          <div
            style={{
              color: "rgb(35,67,151)",
              fontSize: "18px",
              padding: "0 10px 0px",
              fontWeight: "bold",
            }}
          >
            Policy summary
          </div>
          <span
            style={{
              fontSize: "18px",
              padding: "0 10px",
              fontWeight: "bold",
              marginTop: "8px",
              display: "flex",
            }}
          >
            <span style={{ width: "50%", paddingRight: "10px" }}>
              Policy number:
            </span>
            <span
              style={{
                fontSize: "13px",
                width: "50%",
                fontWeight: "normal",
                color: "rgb(35,67,151)",
                paddingLeft: "10px",
              }}
            >
              {policy.number}
            </span>
          </span>
          <span
            style={{
              fontSize: "18px",
              padding: "0 10px",
              fontWeight: "bold",
              marginTop: "8px",
              display: "flex",
            }}
          >
            <span style={{ width: "50%", paddingRight: "10px" }}>
              Policy holder:
            </span>
            <span
              style={{
                fontSize: "13px",
                width: "50%",
                fontWeight: "normal",
                color: "rgb(35,67,151)",
                paddingLeft: "10px",
              }}
            >
              {policy.insured}
            </span>
          </span>
          <span
            style={{
              fontSize: "18px",
              padding: "0 10px",
              fontWeight: "bold",
              marginTop: "8px",
              display: "flex",
            }}
          >
            <span style={{ width: "50%", paddingRight: "10px" }}>
              Vehicle type:
            </span>
            <span
              style={{
                fontSize: "13px",
                width: "50%",
                fontWeight: "normal",
                color: "rgb(35,67,151)",
                paddingLeft: "10px",
              }}
            >
              {policy.vehicleDetails}
            </span>
          </span>
          <span
            style={{
              fontSize: "18px",
              padding: "0 10px",
              fontWeight: "bold",
              marginTop: "8px",
              display: "flex",
            }}
          >
            <span style={{ width: "50%", paddingRight: "10px" }}>
              Vehicle registration:
            </span>
            <span
              style={{
                fontSize: "13px",
                width: "50%",
                fontWeight: "normal",
                color: "rgb(35,67,151)",
                paddingLeft: "10px",
              }}
            >
              {policy.registrationNo}
            </span>
          </span>
          <span
            style={{
              fontSize: "18px",
              padding: "0 10px",
              fontWeight: "bold",
              marginTop: "8px",
              display: "flex",
            }}
          >
            <span style={{ width: "50%", paddingRight: "10px" }}>
              Duration:
            </span>
            <span
              style={{
                fontSize: "13px",
                width: "50%",
                fontWeight: "normal",
                color: "rgb(35,67,151)",
                paddingLeft: "10px",
              }}
            >
              {email.duration}
            </span>
          </span>
          <span
            style={{
              fontSize: "18px",
              padding: "0 10px",
              fontWeight: "bold",
              marginTop: "8px",
              display: "flex",
            }}
          >
            <span style={{ width: "50%", paddingRight: "10px" }}>
              Start date/time:
            </span>
            <span
              style={{
                fontSize: "13px",
                width: "50%",
                fontWeight: "normal",
                color: "rgb(35,67,151)",
                paddingLeft: "10px",
              }}
            >
              {dayjs(email.startDate).format("DD MMMM YYYY HH:mm")}
            </span>
          </span>
          <span
            style={{
              fontSize: "18px",
              padding: "0 10px",
              fontWeight: "bold",
              marginTop: "8px",
              display: "flex",
            }}
          >
            <span style={{ width: "50%", paddingRight: "10px" }}>
              End date/time:
            </span>
            <span
              style={{
                fontSize: "13px",
                width: "50%",
                fontWeight: "normal",
                color: "rgb(35,67,151)",
                paddingLeft: "10px",
              }}
            >
              {dayjs(email.endDate).format("DD MMMM YYYY HH:mm")}
            </span>
          </span>
          <Text
            style={{
              fontSize: "18px",
              padding: "8px 10px 0px",
              fontWeight: "bold",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              color: "#333333",
            }}
          >
            You have been charged
            <span style={{ color: "rgb(35,67,151)", padding: "0 3px 0 4px" }}>
              £{email.totalCharged ? email.totalCharged.toFixed(2) : "0.00"}
            </span>{" "}
            and a breakdown of the cost is
          </Text>
          <span
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              color: "#333333",
              marginBottom: "16px",
            }}
          >
            below:
          </span>
          <span
            style={{
              fontSize: "18px",
              padding: "0 10px",
              fontWeight: "bold",
              marginTop: "8px",
              display: "flex",
            }}
          >
            <span style={{ width: "50%", paddingRight: "10px" }}>
              First Underwriting insurer premium:
            </span>
            <span
              style={{
                fontSize: "13px",
                width: "50%",
                fontWeight: "normal",
                color: "rgb(35,67,151)",
                paddingLeft: "10px",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              £
              {email.firstUnderwritingInsurerPremium
                ? email.firstUnderwritingInsurerPremium.toFixed(2)
                : "0.00"}
            </span>
          </span>
          <span
            style={{
              fontSize: "18px",
              padding: "0 10px",
              fontWeight: "bold",
              marginTop: "8px",
              display: "flex",
            }}
          >
            <span style={{ width: "50%", paddingRight: "10px" }}>
              Insurance premium tax:
            </span>
            <span
              style={{
                fontSize: "13px",
                width: "50%",
                fontWeight: "normal",
                color: "rgb(35,67,151)",
                paddingLeft: "10px",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              £
              {email.insurancePremium
                ? email.insurancePremium.toFixed(2)
                : "0.00"}
            </span>
          </span>
          <span
            style={{
              fontSize: "18px",
              padding: "0 10px",
              fontWeight: "bold",
              marginTop: "8px",
              display: "flex",
            }}
          >
            <span style={{ width: "50%", paddingRight: "10px" }}>
              Tempcover admin fee:
            </span>
            <span
              style={{
                fontSize: "13px",
                width: "50%",
                fontWeight: "normal",
                color: "rgb(35,67,151)",
                paddingLeft: "10px",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              £{email.adminFee ? email.adminFee.toFixed(2) : "0.00"}
            </span>
          </span>
          <span
            style={{
              fontSize: "18px",
              padding: "0 10px",
              fontWeight: "bold",
              marginTop: "8px",
              display: "flex",
            }}
          >
            <span style={{ width: "50%", paddingRight: "10px" }}>
              Total charged:
            </span>
            <span
              style={{
                fontSize: "13px",
                width: "50%",
                fontWeight: "normal",
                color: "rgb(35,67,151)",
                paddingLeft: "10px",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              £{email.totalCharged ? email.totalCharged.toFixed(2) : "0.00"}
            </span>
          </span>
        </div>
        <span
          style={{
            backgroundColor: "rgb(2, 33, 112)",
            color: "white",
            fontSize: "16px",
            padding: "20px 15px",
            display: "flex",
            flexDirection: "column",
            borderRadius: "5px",
            margin: "80px auto 20px",
            maxWidth: "100%",
            width: "600px",
          }}
        >
          <span style={{ paddingBottom: "5px" }}>
            Compare full annual van insurance and save up to
            <span style={{ padding: "0 3px", fontWeight: "bold" }}>
              £263*
            </span>{" "}
            plus
          </span>
          <span style={{ fontWeight: "bold" }}>
            enjoy a whole year of rewards**
          </span>
          <span
            style={{ display: "flex", padding: "5px 0", alignItems: "center" }}
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
                width: "fit-content",
                margin: "0 12px",
              }}
            >
              Start a quote
            </Button>
            <Img
              src={`${baseURl}/compare.png`}
              alt="Vercel"
              className="my-0 mx-auto"
              style={{ height: "32px" }}
            />
          </span>
          <span style={{ fontSize: "8px", lineHeight: "18px" }}>
            *Based on online independent research by Consumer Intelligence
            during May 2020 50% of customers could achieve this saving on their
            van insurance with Compare the Market.. **T’s & C’s apply
          </span>
        </span>
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
        <span
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
        </span>
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
        <span
          style={{
            width: "100%",
            fontSize: "13px",
            color: "#333333",
          }}
        >
          You are receiving this email as part of our quote service. This
          service does not relate to the marketing communication preferences you
          set when obtaining a quote.
        </span>
        <Text
          style={{
            width: "100%",
            fontSize: "16px",
            padding: "0 0 5px",
            fontWeight: "bold",
            color: "rgb(35,67,151)",
          }}
        >
          temcover
        </Text>
        <span
          style={{
            textAlign: "center",
            width: "100%",
            fontSize: "14px",
            padding: "20px 0",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Get the updates
        </span>
        <span
          style={{
            textAlign: "center",
            width: "100%",
            fontSize: "14px",
            padding: "0px 0 30px",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <Link href="https://twitter.com/tempcover" target="_blank">
            <Img
              src={`${baseURl}/twiter.png`}
              alt="Vercel"
              className="my-0 mx-auto"
            />
          </Link>
          <Link href="https://www.facebook.com/tempcover" target="_blank">
            <Img
              src={`${baseURl}/facebook.png`}
              alt="Vercel"
              className="my-0 mx-auto"
            />
          </Link>
          <Link href="https://www.youtube.com/user/tempcover" target="_blank">
            <Img
              src={`${baseURl}/youtube.png`}
              alt="Vercel"
              className="my-0 mx-auto"
            />{" "}
          </Link>
          <Link
            href="https://www.linkedin.com/company/temporary-cover-ltd/?trk=tyah"
            target="_blank"
          >
            <Img
              src={`${baseURl}/linkedin.png`}
              alt="Vercel"
              className="my-0 mx-auto"
            />
          </Link>
          <Link href="https://www.tempcover.com/contact-us" target="_blank">
            <Img
              src={`${baseURl}/email.png`}
              alt="Vercel"
              className="my-0 mx-auto"
            />
          </Link>
        </span>
        <span
          style={{
            width: "100%",
            fontSize: "13px",
            display: "flex",
            textAlign: "center",
            color: "#333333",
          }}
        >
          IMPORTANT CONFIDENTIALITY NOTICE: this email and the information it
          contains may be confidential, legally privileged and protected by law.
          Access by the intended recipient only is authorised. Any liability (in
          negligence or otherwise) arising from any third party acting, or
          refraining from acting, on any information contained in this e-mail is
          hereby excluded. If you are not the intended recipient, please notify
          the sender immediately and do not disclose the contents of this e-mail
          or any attachment to any other person, use it for any purpose, or
          store or copy the information in any medium. Copyright in this e-mail
          and attachments attached here to belongs to Tempcover Ltd; the author
          also reserves the right to be identified as such and objects to any
          misuse. Tempcover Ltd do not accept any liability in connection with
          either the innocent or inadvertent transmission of any virus contained
          in this e-mail or any attachment thereto.
        </span>
        <span
          style={{
            color: "rgb(35,67,151)",
            textAlign: "center",
            width: "100%",
            fontSize: "14px",
            padding: "16px 0 2px",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
          }}
        >
          TEMPCOVER LTD
        </span>
        <span
          style={{
            color: "rgb(35,67,151)",
            textAlign: "center",
            width: "100%",
            fontSize: "14px",
            padding: "2px 0",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
          }}
        >
          REGISTERED IN ENGLAND NO.9923259
        </span>
        <span
          style={{
            color: "rgb(35,67,151)",
            textAlign: "center",
            width: "100%",
            fontSize: "14px",
            padding: "2px 0",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
          }}
        >
          REGISTERED OFFICE: 2ndFLOOR ADMIRAL HOUSE, HARLINGTON WAY, FLEET,
        </span>
        <span
          style={{
            color: "rgb(35,67,151)",
            textAlign: "center",
            width: "100%",
            fontSize: "14px",
            padding: "2px 0",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
          }}
        >
          HAMPSHIRE, GU51 4BB
        </span>
        <span
          style={{
            color: "rgb(35,67,151)",
            textAlign: "center",
            width: "100%",
            fontSize: "14px",
            padding: "2px 0 5px",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
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
        </span>
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
  fontFamily: "Roboto, Fira Sans, Helvetica Neue, sans-serif",
};
