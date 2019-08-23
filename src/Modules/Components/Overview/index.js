import React, { Component } from "react";
import './index.css';

export default class Overview extends Component {
  
  render(){
    
    let { onChangeOverview } = this.props;
    
    return(
      <div className="splash-screen-wrapper-header">
        <img
          className="splash-screen-wrapper-header-logo"
          src="https://res.cloudinary.com/beneficio/image/upload/v1566472988/beneficio-ui-materials/xvt5aug27e7mhl98r7mk.png"
          alt="logo"
        />
        <h3 className="splash-screen-wrapper-header-title">
          Добро пожаловать в <b>beneficio-salary!</b>
        </h3>
        <p className="splash-screen-wrapper-header-subtitle">
          Зарабатывайте и станьте частью нашей команды!
        </p>
        <p className="splash-screen-wrapper-header-paragraph">
          <b>Как это работает?</b>
        </p>
        <ul className="splash-screen-wrapper-header-list">
          <li className="splash-screen-wrapper-header-list-item">
            <b>1.</b> Вы заполняете форму с детальным описанием предложения по интернет заработку.
          </li>
          <li className="splash-screen-wrapper-header-list-item">
            <b>2.</b> Наша команда занимается тестированием и оценивает ресурс.
          </li>
          <li className="splash-screen-wrapper-header-list-item">
            <b>3.</b> Если предложение уникально и работоспособно - мы свяжемся с Вами для уточнения данных по выплате и Вы получаете <b>$5</b>.
          </li>
        </ul>
        <p className="splash-screen-wrapper-header-paragraph">
          Все очень просто!
        </p>
        <p className="splash-screen-wrapper-header-paragraph">
          Количество заявок в день - <b>НЕОГРАНИЧЕНО</b>.
        </p>
        <p className="splash-screen-wrapper-header-paragraph">
          Быстрая проверка Вашей заявки от наших специалистов!
        </p>
        <p className="splash-screen-wrapper-header-paragraph">
          Сделали <b>20</b> заявок в день - получили <b>$100</b>
        </p>
        <p className="splash-screen-wrapper-header-paragraph">
          <b>5</b> самым активным участникам марафона выпадет возможность попасть в <b>beneficio data-search team!</b>
        </p>
        <p className="splash-screen-wrapper-header-paragraph">
          Каждые <b>20 успешных заявок</b>, увеличивают последующуую стоимость одной Вашей заявки!
          Таким образом, сделали <b>20 заявок</b> по <b>$5</b> - все последующие автоматически будут по <b>$7</b> и на повышение!
        </p>
        <p className="splash-screen-wrapper-header-paragraph">
          Оставайтесь с нами, Вас ждет еще очень много плюшек! :)
        </p>
        <p className="splash-screen-wrapper-header-paragraph">
          <b>Текущие:</b> <a className="splash-screen-wrapper-header-paragraph-link" href="https://t.me/bsalary">Telegram</a>
        </p>
        <button
          onClick={() => onChangeOverview()}
          className="splash-screen-wrapper-header-btn"
        >
          Добавить заявку!
        </button>
      </div>
    )
  }
}