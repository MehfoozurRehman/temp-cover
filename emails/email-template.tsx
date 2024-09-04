import * as React from "react";

import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface NotionMagicLinkEmailProps {
  pdflink?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const NotionMagicLinkEmail = ({
  pdflink,
}: NotionMagicLinkEmailProps) => (
  <Html>
    <Body style={main}>
      <Container style={{ margin: "0 auto", maxWidth: "1000px", padding: 10 }}>
        <span style={{ width: "100%" }}>
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
            <span>Tempcover.com policy confirmation</span>
            <Link
              href="https://notion.so"
              target="_blank"
              style={{ color: "white" }}
            >
              View in browser
            </Link>
          </Text>
          <Text
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
              src="/static/tempcover.png"
              alt="Vercel"
              className="my-0 mx-auto"
              style={{
                flex: "1",
                maxWidth: "250px",
              }}
            />
            <span
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: "17px",
              }}
            >
              <Img
                src="/static/tpstar.png"
                alt="Vercel"
                className="my-0 mx-auto"
                width="80"
              />
              <Img
                src="/static/stars.png"
                alt="Vercel"
                className="my-0 mx-auto"
                width="120"
              />
              <Img
                src="/static/reviews.png"
                alt="Vercel"
                className="my-0 mx-auto"
                width="160"
              />
            </span>
          </Text>
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
              href="https://notion.so"
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
            insurance policy is in place and will begin at the time you
            selected.
          </Text>
          <Text
            style={{
              width: "100%",
              fontSize: "18px",
              padding: "0 0 5px",

              color: "#333333",
            }}
          >
            Check out the summary of your policy and a link to view and print
            your policy documents below.
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
              href="https://notion.so"
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
              href="https://notion.so"
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
          <span
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <Button
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
            </Button>
          </span>
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              border: "2px solid rgb(35, 67, 151)",
              borderRadius: "5px",
              margin: "10px 10px 20px",
              padding: "12px 0",
              width: "100%",
            }}
          >
            <span
              style={{
                color: "rgb(35,67,151)",

                width: "100%",
                fontSize: "18px",
                padding: "0 10px 0px",
                fontWeight: "bold",
              }}
            >
              Policy summary
            </span>
            <span
              style={{
                width: "100%",
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
                TCV-MOT-1739398
              </span>
            </span>
            <span
              style={{
                width: "100%",
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
                Mohammed Hasham Iqbal
              </span>
            </span>
            <span
              style={{
                width: "100%",
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
                MERCEDES-BENZ A 45 AMG 4MATIC
              </span>
            </span>
            <span
              style={{
                width: "100%",
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
                T444XDX
              </span>
            </span>
            <span
              style={{
                width: "100%",
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
                7 Days
              </span>
            </span>
            <span
              style={{
                width: "100%",
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
                10 August 2024 22:03
              </span>
            </span>
            <span
              style={{
                width: "100%",
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
                17 August 2024 22:03
              </span>
            </span>
            <Text
              style={{
                width: "100%",
                fontSize: "18px",
                padding: "0 5px 5px",
                fontWeight: "bold",
                textAlign: "center",
                color: "#333333",
              }}
            >
              You have been charged
              <span style={{ color: "rgb(35,67,151)", padding: "0 3px 0 4px" }}>
                £198.55
              </span>{" "}
              and a breakdown of the cost is below:
            </Text>
          </span>
        </span>
      </Container>
    </Body>
  </Html>
);

NotionMagicLinkEmail.PreviewProps = {
  pdflink: "sparo-ndigo-amurt-secan",
} as NotionMagicLinkEmailProps;

export default NotionMagicLinkEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily: "Roboto, Fira Sans, Helvetica Neue, sans-serif",
};
