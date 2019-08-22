import React, { Component } from "react";
import LoaderWrapper from '../../Components/LoaderWrapper/index';
import Overview from '../../Components/Overview/index';
import Form from '../../Components/Form/index';

import { SEND_NEW_LEVEL } from '../../../Constants/Api/index';

import './index.css';

export default class SplashScreen extends Component {
  
  state = {
    isOverview: true,
    loading: false,
    email: {
      value: "",
      isValid: false
    },
    description: {
      value: "",
      isValid: false
    }
  };
  
  changeOverview = () => {
    this.setState(state => ({ ...state, isOverview: false }))
  };
  
  onChangeDescriptionField = async (value) => {
    if (value === '' || value === null || value === " " || value.length < 500) {
      this.setState(state => ({ ...state, description: { value: value, isValid: false } }));

      return false;
    }

    this.setState(state => ({ ...state, description: { value: value, isValid: true } }))
  };
  
  validateEmail = email => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  
  onChangeEmailField = value => {
    if (this.validateEmail(value)) {
      this.setState(state => ({
        ...state,
        email: {
          value,
          isValid: true
        }
      }));
    } else {
      this.setState(state => ({
        ...state,
        email: {
          value,
          isValid: false
        }
      }));
    }
  };
  
  onFormSubmitAsync = async e => {
    e.preventDefault();
    
    let confirmation = window.confirm("Вы действительно хотите отправить данную форму?");
    
    if (!confirmation) {
      return false;
    }
    
    this.setState(state => ({ ...state, loading: true }));
  
    let { email, description } = this.state;
    
    const body = {
      email: email.value,
      description: description.value
    };
    
    const settings = {
      method: "POST",
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    };
  
    (async () => {
  
      const rawResponse = await fetch(SEND_NEW_LEVEL, settings);
  
      if (rawResponse.status > 205 && rawResponse.status < 500) {
  
        this.setState(state => ({ ...state, loading: false }));
        
        window.alert("Что то пошло не так. Пожалуйста, попробуйте еще раз");
        
        return false;
      }
  
      this.setState(state => ({ ...state, loading: false, isOverview: true }));
  
      window.alert("Ваша заявка успешно отправлена на проверку. ожидайте ответа на Ваш email. Спасибо, что работаете вместе с нами!");
    })();
  };
  
  render(){
  
    if (this.state.loading) {
      return <LoaderWrapper/>;
    }
    
    return (
      <div className="splash-screen-wrapper">
        {this.state.isOverview ?
          <Overview onChangeOverview={this.changeOverview}/> :
          <Form
            onValidateEmail={this.onChangeEmailField}
            onValidateDescription={this.onChangeDescriptionField}
            stateIsValid={this.state.email.isValid && this.state.description.isValid}
            descriptionLength={this.state.description.value.length}
            onFormSubmitAsync={this.onFormSubmitAsync}
          />
        }
      </div>
    )
  }
}