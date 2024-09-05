"use client";
import "@/app/style/form.scss";

import Image from "next/image";
import { toast } from "react-toastify";
import { useState } from "react";

export default function Form() {
  const [activeStep, setActiveStep] = useState(2);
  const [formData, setFormData] = useState({
    policy: {
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
    },
    certificate: {
      number: "",
      insured: "",
      effectiveDate: "",
      expirationDate: "",
      registrationNo: "",
    },
  });
  const handleNextStep = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };
  const handleGoToForm = () => {
    setActiveStep(1);
  };
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Form saved");
      } else {
        toast.error("Form not saved");
      }

      setFormData({
        policy: {
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
        },
        certificate: {
          number: "",
          insured: "",
          effectiveDate: "",
          expirationDate: "",
          registrationNo: "",
        },
      });
    } catch (e) {
      toast.error("Form not saved");
    }
  };

  return (
    <div className="from__main__container">
      <div className="from__main__container__upper">
        {activeStep === 1 && (
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
                <div className="input__entry__label">Issue Date</div>
                <input
                  className="input__entry__label__input"
                  type="date"
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
                  type="date"
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
                  type="date"
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
            <div className="form__input__warper">
              <div className="input__entry">
                <div className="input__entry__label">Vehicle Value</div>
                <input
                  className="input__entry__label__input"
                  type="number"
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
                  type="date"
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
                  type="date"
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
            <button className="register__button">Save</button>
          </form>
        )}
        {
          activeStep === 2 && (
            <form className="form__warper popup" >
              <div className="form__warper__icon">
                <svg width="77" height="62" viewBox="0 0 77 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M75.1349 11.7625L27.5459 59.3369C26.4306 60.4516 24.9181 61.0777 23.341 61.0777C21.7639 61.0777 20.2514 60.4516 19.1362 59.3369L2.57909 42.785C-0.0199296 40.1898 -0.0804274 35.8786 2.56649 33.3311C3.80328 32.1443 5.45608 31.4892 7.17048 31.5061C8.88489 31.5231 10.5244 32.2108 11.7374 33.4218L23.3335 45.0125L65.8632 2.50264C67.1047 1.34005 68.75 0.705566 70.451 0.733294C72.1521 0.761022 73.7757 1.44879 74.9787 2.65123C76.1817 3.85366 76.8698 5.47654 76.8976 7.17682C76.9253 8.87709 76.2905 10.5215 75.1274 11.7625H75.1349Z" fill="#5F6A9A" />
                </svg>

              </div>
              <div className="form__warper__buttons">
                <div className="form__warper__row">
                  <button className="form__warper__btn btn__secondary">Download Certificate</button>
                  <button className="form__warper__btn btn__secondary">Download Policy</button>
                </div>
                <button onClick={handleNextStep} className="form__warper__btn">Send Us Email</button>
              </div>
            </form>
          )
        }
        {
          activeStep === 3 && (
            <form className="form__warper popup" >

              <div className="form__input__warper">
                <div className="input__entry">
                  <div className="input__entry__label">Your Email</div>
                  <input
                    className="input__entry__label__input"
                    type="email"
                    placeholder="Enter email"
                  />
                </div>
              </div>
              <button onClick={handleNextStep} className="form__warper__btn">Send</button>

            </form>
          )
        }
        {
          activeStep === 4 && (
            <form className="form__warper popup" >

              <div className="form__warper__icon">
                <svg width="77" height="62" viewBox="0 0 77 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M75.1349 11.7625L27.5459 59.3369C26.4306 60.4516 24.9181 61.0777 23.341 61.0777C21.7639 61.0777 20.2514 60.4516 19.1362 59.3369L2.57909 42.785C-0.0199296 40.1898 -0.0804274 35.8786 2.56649 33.3311C3.80328 32.1443 5.45608 31.4892 7.17048 31.5061C8.88489 31.5231 10.5244 32.2108 11.7374 33.4218L23.3335 45.0125L65.8632 2.50264C67.1047 1.34005 68.75 0.705566 70.451 0.733294C72.1521 0.761022 73.7757 1.44879 74.9787 2.65123C76.1817 3.85366 76.8698 5.47654 76.8976 7.17682C76.9253 8.87709 76.2905 10.5215 75.1274 11.7625H75.1349Z" fill="#5F6A9A" />
                </svg>
              </div>
              <div>Your email has been sent sucessfully</div>
              <button onClick={handleGoToForm} className="form__warper__btn">Go to Home</button>

            </form>
          )
        }
      </div>
    </div >
  );
}
