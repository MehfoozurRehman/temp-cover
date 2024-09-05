import "@/app/style/form.scss";

import Image from "next/image";
import { useState } from "react";

export default function Form() {
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

  return (
    <div className="from__main__container">
      <div className="from__main__container__upper">
        <form className="form__warper">
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
                    policy: { ...formData.policy, dateIssued: e.target.value },
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
                    policy: { ...formData.policy, dateIssued: e.target.value },
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
          <div className="register__button">Save</div>
        </form>
      </div>
    </div>
  );
}
