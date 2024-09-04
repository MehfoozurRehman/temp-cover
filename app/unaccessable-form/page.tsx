import Image from "next/image";
import secondLogo from "../../public/secondLogo.png";
import "../style/form.scss";
export default function Form() {
  return (
    <>
      <div className="from__main__container">
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
        </form>
      </div>
    </>
  );
}
