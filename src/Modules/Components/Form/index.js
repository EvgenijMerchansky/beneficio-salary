import React, { Component } from "react";
import './index.css';

const Minimum = ({ descriptionLength }) => {
  return (
    <span>
      {" "}(минимум: <span className="splash-screen-wrapper-body-form-label-span">{500 - descriptionLength}</span>)
    </span>
  )
};

export default class Form extends Component {
  render() {
    let {
      onValidateEmail,
      onValidateDescription,
      stateIsValid,
      descriptionLength,
      onFormSubmitAsync
    } = this.props;
  
    return(
      <div className="splash-screen-wrapper-body">
        <h1 className="splash-screen-wrapper-body-title">
          Заполни свою заявку!
        </h1>
        <p className="splash-screen-wrapper-body-paragraph">
          В форме ниже опишите способ/ресурс заработка в интернете, чтобы он соответствовал этим критериям:
        </p>
        <ul className="splash-screen-wrapper-body-list">
          <li className="splash-screen-wrapper-body-list-item">
            <b>1.</b> <b>УНИКАЛЬНОСТЬ</b>.
          </li>
          <li className="splash-screen-wrapper-body-list-item">
            <b>2.</b> Достаточно долгая временная <b>РАБОТОСПОСОБНОСТЬ.</b>
          </li>
          <li className="splash-screen-wrapper-body-list-item">
            <b>3.</b> Описание должно содержать весь путь - до шага вывода заработанных средств на <b>ЛИЧНЫЙ</b> счет/карту.
          </li>
        </ul>
        <div className="splash-screen-wrapper-body-form-wrapper">
          <form
            onSubmit={e => onFormSubmitAsync(e)}
            className="splash-screen-wrapper-body-form"
          >
            <label
              htmlFor="email-input"
              className="splash-screen-wrapper-body-form-label"
            >
              <b>Email</b> - для обратной связи
            </label>
            <span className="splash-screen-wrapper-body-form-field-wrapper">
              <input
                className="splash-screen-wrapper-body-form-text field"
                type="text"
                placeholder="Ваш email:"
                id="email-input"
                autoCapitalize="none"
                onChange={e => onValidateEmail(e.target.value)}
              />
            </span>
  
            <label
              htmlFor="description-text-area"
              className="splash-screen-wrapper-body-form-label"
            >
              <b>Описание способа заработка{descriptionLength < 500 ? <Minimum descriptionLength={descriptionLength}/> : ":"}</b>
            </label>
            <span className="splash-screen-wrapper-body-form-text-area-wrapper">
              <textarea
                className="splash-screen-wrapper-body-form-text-area field"
                type="text"
                placeholder="Описание:"
                id="description-text-area"
                autoCapitalize="none"
                onChange={e => onValidateDescription(e.target.value)}
                minLength="500"
              />
            </span>
            <button
              type="submit"
              className={stateIsValid ? "submit-form-btn" : "submit-form-btn-disable"}
              disabled={!stateIsValid}
            >
              Отправить
            </button>
          </form>
        </div>
      </div>
    )
  }
}