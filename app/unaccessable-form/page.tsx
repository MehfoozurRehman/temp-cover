"use client";

import "@/app/style/form.scss";

import Image from "next/image";
import { baseURl } from "@/constants/config";
import { toast } from "react-toastify";
import { useState } from "react";

const steps = {
  auth: 0,
  form: 1,
  generated: 2,
  email: 3,
  success: 4,
};

export default function Form() {
  const [formId, setFormId] = useState("");
  const [password, setPassword] = useState("");
  const [toEmail, setToEmail] = useState("");
  const [activeStep, setActiveStep] = useState(steps.auth);
  const [formProcessing, setFormProcessing] = useState(false);
  const [emailProcessing, setEmailProcessing] = useState(false);

  const [formData, setFormData] = useState({
    policy: {
      number: "",
      dateIssued: "",
      effectiveDate: "",
      expirationDate: "",
      reasonForIssue: "",
      premium: "",
      registrationNo: "",
      vehicleValue: "",
      vehicleDetails: "",
      compulsoryExcessFee: "",
      voluntaryExcessFee: "",
      totalExcessFee: "",
      description: "",
      insured: "",
    },
    certificate: {
      number: "",
      insured: "",
      effectiveDate: "",
      expirationDate: "",
      registrationNo: "",
    },
    email: {
      duration: "",
      startDate: "",
      endDate: "",
      firstUnderwritingInsurerPremium: "",
      insurancePremium: "",
      adminFee: "",
      totalCharged: "",
    },
  });

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      setFormProcessing(true);

      const finalFormData = {
        policy: {
          ...formData.policy,
          dateIssued: new Date(formData.policy.dateIssued).toISOString(),
          effectiveDate: new Date(formData.policy.effectiveDate).toISOString(),
          expirationDate: new Date(
            formData.policy.expirationDate
          ).toISOString(),
          premium: parseFloat(formData.policy.premium),
          vehicleValue: formData.policy.vehicleValue,
          compulsoryExcessFee: parseFloat(formData.policy.compulsoryExcessFee),
          voluntaryExcessFee: parseFloat(formData.policy.voluntaryExcessFee),
          totalExcessFee: parseFloat(formData.policy.totalExcessFee),
        },
        certificate: {
          ...formData.certificate,
          effectiveDate: new Date(
            formData.certificate.effectiveDate
          ).toISOString(),
          expirationDate: new Date(
            formData.certificate.expirationDate
          ).toISOString(),
        },
        email: {
          ...formData.email,
          startDate: new Date(formData.email.startDate).toISOString(),
          endDate: new Date(formData.email.endDate).toISOString(),
          firstUnderwritingInsurerPremium: parseFloat(
            formData.email.firstUnderwritingInsurerPremium
          ),
          insurancePremium: parseFloat(formData.email.insurancePremium),
          adminFee: parseFloat(formData.email.adminFee),
          totalCharged: parseFloat(formData.email.totalCharged),
        },
      };

      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalFormData),
      });

      if (response.ok) {
        toast.success("Form saved");

        setFormData({
          policy: {
            number: "",
            dateIssued: "",
            effectiveDate: "",
            expirationDate: "",
            reasonForIssue: "",
            premium: "",
            registrationNo: "",
            vehicleValue: "",
            vehicleDetails: "",
            compulsoryExcessFee: "",
            voluntaryExcessFee: "",
            totalExcessFee: "",
            description: "",
            insured: "",
          },
          certificate: {
            number: "",
            insured: "",
            effectiveDate: "",
            expirationDate: "",
            registrationNo: "",
          },
          email: {
            duration: "",
            startDate: "",
            endDate: "",
            firstUnderwritingInsurerPremium: "",
            insurancePremium: "",
            adminFee: "",
            totalCharged: "",
          },
        });

        setActiveStep(steps.generated);

        const json = await response.json();

        setFormId(json.id);
      } else {
        toast.error("Form not saved");
      }
    } catch (e) {
      toast.error("Form not saved");
    } finally {
      setFormProcessing(false);
    }
  };

  const handleDownloadCertificate = async () => {
    window.open(baseURl + `/pdfs/certificate?id=${formId}`);
  };

  const handleDownloadPolicy = async () => {
    window.open(baseURl + `/pdfs/policy?id=${formId}`);
  };

  const handleSwitchToEmail = async () => {
    setActiveStep(steps.email);
  };

  const handleSendEmail = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      setEmailProcessing(true);
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: toEmail, formId }),
      });

      if (response.ok) {
        toast.success("Email sent");

        setToEmail("");
        setActiveStep(steps.success);
      } else {
        toast.error("Email not sent");
      }
    } catch (e) {
      toast.error("Email not sent");
    } finally {
      setEmailProcessing(false);
    }
  };

  const handleBackToHome = async () => {
    setActiveStep(steps.auth);
    setFormId("");
    setToEmail("");
  };

  const [authProcessing, setAuthProcessing] = useState(false);

  const handleAuth = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      setAuthProcessing(true);

      const response = await fetch("/api/password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.error) {
          toast.error(data.error);
        } else {
          toast.success("Password is correct");
          setActiveStep(steps.form);
        }
      } else {
        toast.error("Invalid password");
      }
    } catch (e) {
      toast.error("Invalid password");
    } finally {
      setAuthProcessing(false);
    }
  };

  return (
    <div className="from__main__container">
      <div className="from__main__container__upper">
        {activeStep === steps.auth && (
          <form className="form__warper popup" onSubmit={handleAuth}>
            <div
              className="form__warper__logo"
              style={{
                marginBottom: -50,
              }}
            >
              <Image width={250} height={70} src="/secondLogo.png" alt="logo" />
            </div>
            <div className="form__input__warper">
              <div className="input__entry">
                <div className="input__entry__label">Password</div>
                <input
                  className="input__entry__label__input"
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <button
              className="register__button"
              type="submit"
              disabled={authProcessing}
            >
              {authProcessing ? "Processing..." : "Submit"}
            </button>
          </form>
        )}
        {activeStep === steps.form && (
          <form className="form__warper" onSubmit={handleSubmit}>
            <div className="form__warper__logo">
              <Image width={250} height={70} src="/secondLogo.png" alt="logo" />
            </div>
            <div className="form__input__heading">Policy</div>
            <div className="form__input__warper">
              <div className="input__entry">
                <div className="input__entry__label">Policy Number</div>
                <input
                  className="input__entry__label__input"
                  type="text"
                  placeholder="Enter number"
                  value={formData.policy.number}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      policy: {
                        ...formData.policy,
                        number: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div className="input__entry">
                <div className="input__entry__label">Insured To</div>
                <input
                  className="input__entry__label__input"
                  type="text"
                  placeholder="Enter Insured To"
                  value={formData.policy.insured}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      policy: {
                        ...formData.policy,
                        insured: e.target.value,
                      },
                    })
                  }
                />
              </div>
            </div>
            <div className="form__input__warper">
              <div className="input__entry">
                <div className="input__entry__label">Issue Date</div>
                <input
                  className="input__entry__label__input"
                  type="datetime-local"
                  value={formData.policy.dateIssued}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      policy: {
                        ...formData.policy,
                        dateIssued: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div className="input__entry">
                <div className="input__entry__label">Effective Date</div>
                <input
                  className="input__entry__label__input"
                  type="datetime-local"
                  value={formData.policy.effectiveDate}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      policy: {
                        ...formData.policy,
                        effectiveDate: e.target.value,
                      },
                    })
                  }
                />
              </div>
            </div>
            <div className="form__input__warper">
              <div className="input__entry">
                <div className="input__entry__label">Expiration Date</div>
                <input
                  className="input__entry__label__input"
                  type="datetime-local"
                  value={formData.policy.expirationDate}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      policy: {
                        ...formData.policy,
                        expirationDate: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div className="input__entry">
                <div className="input__entry__label">Premium</div>
                <input
                  className="input__entry__label__input"
                  type="number"
                  value={formData.policy.premium}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      policy: {
                        ...formData.policy,
                        premium: e.target.value,
                      },
                    })
                  }
                />
              </div>
            </div>
            <div className="form__input__warper">
              <div className="input__entry">
                <div className="input__entry__label">Registration No</div>
                <input
                  className="input__entry__label__input"
                  type="text"
                  placeholder="Enter Register no"
                  value={formData.policy.registrationNo}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      policy: {
                        ...formData.policy,
                        registrationNo: e.target.value,
                      },
                    })
                  }
                />
              </div>
            </div>
            <div className="form__input__warper">
              <div className="input__entry">
                <div className="input__entry__label">Vehicle Value</div>
                <input
                  className="input__entry__label__input"
                  type="text"
                  placeholder="Enter Vehicle Value "
                  value={formData.policy.vehicleValue}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      policy: {
                        ...formData.policy,
                        vehicleValue: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div className="input__entry">
                <div className="input__entry__label">Vehicle Details</div>
                <input
                  className="input__entry__label__input"
                  type="text"
                  placeholder="Enter Vehicle Details"
                  value={formData.policy.vehicleDetails}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      policy: {
                        ...formData.policy,
                        vehicleDetails: e.target.value,
                      },
                    })
                  }
                />
              </div>
            </div>
            <div className="form__input__warper">
              <div className="input__entry">
                <div className="input__entry__label">Compulsory Excess Fee</div>
                <input
                  className="input__entry__label__input"
                  type="number"
                  placeholder="Enter Vehicle Value"
                  value={formData.policy.compulsoryExcessFee}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      policy: {
                        ...formData.policy,
                        compulsoryExcessFee: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div className="input__entry">
                <div className="input__entry__label">Voluntary Excess Fee</div>
                <input
                  className="input__entry__label__input"
                  type="number"
                  placeholder="Enter Voluntary Excess Fee"
                  value={formData.policy.voluntaryExcessFee}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      policy: {
                        ...formData.policy,
                        voluntaryExcessFee: e.target.value,
                      },
                    })
                  }
                />
              </div>
            </div>
            <div className="form__input__warper">
              <div className="input__entry">
                <div className="input__entry__label">Total Excess Fee</div>
                <input
                  className="input__entry__label__input"
                  type="number"
                  placeholder="Enter Voluntary Excess Fee"
                  value={formData.policy.totalExcessFee}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      policy: {
                        ...formData.policy,
                        totalExcessFee: e.target.value,
                      },
                    })
                  }
                />
              </div>
            </div>
            <div className="form__input__warper">
              <div className="input__entry">
                <div className="input__entry__label">Reason For Issue</div>
                <textarea
                  className="input__entry__label__input__text__area"
                  placeholder="Enter Reason For Issue"
                  value={formData.policy.reasonForIssue}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      policy: {
                        ...formData.policy,
                        reasonForIssue: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div className="input__entry">
                <div className="input__entry__label">Description</div>
                <textarea
                  className="input__entry__label__input__text__area"
                  placeholder="Enter Description"
                  value={formData.policy.description}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      policy: {
                        ...formData.policy,
                        description: e.target.value,
                      },
                    })
                  }
                />
              </div>
            </div>
            <div className="form__input__heading" style={{ marginTop: "20px" }}>
              Certificate
            </div>
            <div className="form__input__warper">
              <div className="input__entry">
                <div className="input__entry__label">Certificate Number</div>
                <input
                  className="input__entry__label__input"
                  type="text"
                  placeholder="Enter number"
                  value={formData.certificate.number}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      certificate: {
                        ...formData.certificate,
                        number: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div className="input__entry">
                <div className="input__entry__label">Insured To</div>
                <input
                  className="input__entry__label__input"
                  type="text"
                  placeholder="Enter Insured To"
                  value={formData.certificate.insured}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      certificate: {
                        ...formData.certificate,
                        insured: e.target.value,
                      },
                    })
                  }
                />
              </div>
            </div>
            <div className="form__input__warper">
              <div className="input__entry">
                <div className="input__entry__label">Effective Date</div>
                <input
                  className="input__entry__label__input"
                  type="datetime-local"
                  value={formData.certificate.effectiveDate}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      certificate: {
                        ...formData.certificate,
                        effectiveDate: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div className="input__entry">
                <div className="input__entry__label">Expiration Date</div>
                <input
                  className="input__entry__label__input"
                  type="datetime-local"
                  value={formData.certificate.expirationDate}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      certificate: {
                        ...formData.certificate,
                        expirationDate: e.target.value,
                      },
                    })
                  }
                />
              </div>
            </div>
            <div className="form__input__warper">
              <div className="input__entry">
                <div className="input__entry__label">Registration No</div>
                <input
                  className="input__entry__label__input"
                  type="text"
                  placeholder="Enter Register no"
                  value={formData.certificate.registrationNo}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      certificate: {
                        ...formData.certificate,
                        registrationNo: e.target.value,
                      },
                    })
                  }
                />
              </div>
            </div>
            <div className="form__input__heading" style={{ marginTop: "20px" }}>
              Email
            </div>
            <div className="form__input__warper">
              <div className="input__entry">
                <div className="input__entry__label">Duration: </div>
                <input
                  className="input__entry__label__input"
                  type="text"
                  placeholder="Enter duration"
                  value={formData.email.duration}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: {
                        ...formData.email,
                        duration: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div className="input__entry">
                <div className="input__entry__label">Start Date</div>
                <input
                  className="input__entry__label__input"
                  type="datetime-local"
                  value={formData.email.startDate}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: {
                        ...formData.email,
                        startDate: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div className="input__entry">
                <div className="input__entry__label">End Date</div>
                <input
                  className="input__entry__label__input"
                  type="datetime-local"
                  value={formData.email.endDate}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: {
                        ...formData.email,
                        endDate: e.target.value,
                      },
                    })
                  }
                />
              </div>
            </div>
            <div className="form__input__warper">
              <div className="input__entry">
                <div className="input__entry__label">
                  First Underwriting insurer premium:
                </div>
                <input
                  className="input__entry__label__input"
                  type="number"
                  placeholder="Enter First Underwriting insurer premium"
                  value={formData.email.firstUnderwritingInsurerPremium}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: {
                        ...formData.email,
                        firstUnderwritingInsurerPremium: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div className="input__entry">
                <div className="input__entry__label">
                  Insurance premium tax:
                </div>
                <input
                  className="input__entry__label__input"
                  type="number"
                  placeholder="Enter Insurance premium tax"
                  value={formData.email.insurancePremium}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: {
                        ...formData.email,
                        insurancePremium: e.target.value,
                      },
                    })
                  }
                />
              </div>
            </div>
            <div className="form__input__warper">
              <div className="input__entry">
                <div className="input__entry__label">Tempcover admin fee:</div>
                <input
                  className="input__entry__label__input"
                  type="number"
                  placeholder="Enter Tempcover admin fee"
                  value={formData.email.adminFee}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: {
                        ...formData.email,
                        adminFee: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div className="input__entry">
                <div className="input__entry__label">Total charged:</div>
                <input
                  className="input__entry__label__input"
                  type="number"
                  placeholder="Enter Total charged"
                  value={formData.email.totalCharged}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: {
                        ...formData.email,
                        totalCharged: e.target.value,
                      },
                    })
                  }
                />
              </div>
            </div>
            <button
              className="register__button"
              type="submit"
              disabled={formProcessing}
            >
              {formProcessing ? "Processing..." : "Generate"}
            </button>
          </form>
        )}
        {activeStep === steps.generated && (
          <form className="form__warper popup" onSubmit={handleSwitchToEmail}>
            <div className="form__warper__icon">
              <svg
                width="77"
                height="62"
                viewBox="0 0 77 62"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M75.1349 11.7625L27.5459 59.3369C26.4306 60.4516 24.9181 61.0777 23.341 61.0777C21.7639 61.0777 20.2514 60.4516 19.1362 59.3369L2.57909 42.785C-0.0199296 40.1898 -0.0804274 35.8786 2.56649 33.3311C3.80328 32.1443 5.45608 31.4892 7.17048 31.5061C8.88489 31.5231 10.5244 32.2108 11.7374 33.4218L23.3335 45.0125L65.8632 2.50264C67.1047 1.34005 68.75 0.705566 70.451 0.733294C72.1521 0.761022 73.7757 1.44879 74.9787 2.65123C76.1817 3.85366 76.8698 5.47654 76.8976 7.17682C76.9253 8.87709 76.2905 10.5215 75.1274 11.7625H75.1349Z"
                  fill="#5F6A9A"
                />
              </svg>
            </div>
            <div className="form__warper__buttons">
              <div className="form__warper__row">
                <button
                  type="button"
                  onClick={handleDownloadCertificate}
                  className="form__warper__btn btn__secondary"
                >
                  Download Certificate
                </button>
                <button
                  type="button"
                  onClick={handleDownloadPolicy}
                  className="form__warper__btn btn__secondary"
                >
                  Download Policy
                </button>
              </div>
              <button className="form__warper__btn">Send Email</button>
            </div>
          </form>
        )}
        {activeStep === steps.email && (
          <form className="form__warper popup" onSubmit={handleSendEmail}>
            <div className="form__input__warper">
              <div className="input__entry">
                <div className="input__entry__label">Email</div>
                <input
                  className="input__entry__label__input"
                  type="email"
                  placeholder="Enter email"
                  value={toEmail}
                  onChange={(e) => setToEmail(e.target.value)}
                />
              </div>
            </div>
            <button className="form__warper__btn" disabled={emailProcessing}>
              {emailProcessing ? "Processing..." : "Send"}
            </button>
          </form>
        )}
        {activeStep === steps.success && (
          <form className="form__warper popup" onSubmit={handleBackToHome}>
            <div className="form__warper__icon">
              <svg
                width="77"
                height="62"
                viewBox="0 0 77 62"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M75.1349 11.7625L27.5459 59.3369C26.4306 60.4516 24.9181 61.0777 23.341 61.0777C21.7639 61.0777 20.2514 60.4516 19.1362 59.3369L2.57909 42.785C-0.0199296 40.1898 -0.0804274 35.8786 2.56649 33.3311C3.80328 32.1443 5.45608 31.4892 7.17048 31.5061C8.88489 31.5231 10.5244 32.2108 11.7374 33.4218L23.3335 45.0125L65.8632 2.50264C67.1047 1.34005 68.75 0.705566 70.451 0.733294C72.1521 0.761022 73.7757 1.44879 74.9787 2.65123C76.1817 3.85366 76.8698 5.47654 76.8976 7.17682C76.9253 8.87709 76.2905 10.5215 75.1274 11.7625H75.1349Z"
                  fill="#5F6A9A"
                />
              </svg>
            </div>
            <div>Your email has been sent successfully</div>
            <button className="form__warper__btn">Go to Home</button>
          </form>
        )}
      </div>
    </div>
  );
}
