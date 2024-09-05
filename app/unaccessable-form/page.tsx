import Image from "next/image";
import secondLogo from "../../public/secondLogo.png";
import "../style/form.scss";
export default function Form() {
  return (
    <>
      <div className="from__main__container">
        <div className="from__main__container__upper">
          <form className="form__warper">
            <div className="form__warper__logo">
              <Image width={250} height={70} src={secondLogo} alt="logo" />
            </div>
            <div className="form__input__warper">
              <div className="input__entry">
                <div className="input__entry__label">Enter Number</div>
                <input
                  className="input__entry__label__input"
                  type="text"
                  placeholder="Enter number"
                />
                <div className="input__entry__error">fill the input filed</div>
              </div>
              <div className="input__entry">
                <div className="input__entry__label">Enter insured</div>
                <input
                  className="input__entry__label__input"
                  type="text"
                  placeholder="Enter  insured"
                />
                <div className="input__entry__error">fill the input filed</div>
              </div>
            </div>
            <div className="form__input__warper">
              <div className="input__entry">
                <div className="input__entry__label">Date Issued</div>
                <input className="input__entry__label__input" type="date" />
                <div className="input__entry__error">fill the input filed</div>
              </div>
              <div className="input__entry">
                <div className="input__entry__label">Affective Date</div>
                <input className="input__entry__label__input" type="date" />
                <div className="input__entry__error">fill the input filed</div>
              </div>
            </div>
            <div className="form__input__warper">
              <div className="input__entry">
                <div className="input__entry__label">Expiration Date</div>
                <input className="input__entry__label__input" type="date" />
                <div className="input__entry__error">fill the input filed</div>
              </div>
              <div className="input__entry">
                <div className="input__entry__label">Reason For Issue</div>
                <input
                  className="input__entry__label__input"
                  type="text"
                  placeholder="Reason For Issue
"
                />
                <div className="input__entry__error">fill the input filed</div>
              </div>
            </div>
            <div className="form__input__warper">
              <div className="input__entry">
                <div className="input__entry__label">premimum</div>
                <input
                  className="input__entry__label__input"
                  type="text"
                  placeholder="Enter "
                />
                <div className="input__entry__error">fill the input filed</div>
              </div>
              <div className="input__entry">
                <div className="input__entry__label"> Registration No</div>
                <input
                  className="input__entry__label__input"
                  type="text"
                  placeholder="Enter Register no"
                />
                <div className="input__entry__error">fill the input filed</div>
              </div>
            </div>
            <div className="form__input__warper">
              <div className="input__entry">
                <div className="input__entry__label">Vehicle Value</div>
                <input
                  className="input__entry__label__input"
                  type="text"
                  placeholder="Enter Vehicle Value "
                />
                <div className="input__entry__error">fill the input filed</div>
              </div>
              <div className="input__entry">
                <div className="input__entry__label"> Vehicle Details</div>
                <input
                  className="input__entry__label__input"
                  type="text"
                  placeholder="Enter Vehicle Details"
                />
                <div className="input__entry__error">fill the input filed</div>
              </div>
            </div>
            <div className="form__input__warper">
              <div className="input__entry">
                <div className="input__entry__label">Compulsory Excess Fee</div>
                <input
                  className="input__entry__label__input"
                  type="text"
                  placeholder="Enter Vehicle Value"
                />
                <div className="input__entry__error">fill the input filed</div>
              </div>
              <div className="input__entry">
                <div className="input__entry__label"> Voluntary Excess Fee</div>
                <input
                  className="input__entry__label__input"
                  type="text"
                  placeholder="Enter Voluntary Excess Fee"
                />
                <div className="input__entry__error">fill the input filed</div>
              </div>
            </div>
            <div className="form__input__warper">
              <div className="input__entry">
                <div className="input__entry__label">Description</div>
                <textarea
                  className="input__entry__label__input__text__area"
                  placeholder="Write here..."
                />
                <div className="input__entry__error">fill the input filed</div>
              </div>
            </div>
            <div className="register__button">Save</div>
          </form>
        </div>
      </div>
    </>
  );
}
