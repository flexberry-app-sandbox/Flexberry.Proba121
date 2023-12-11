import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISProba12ДолжностиLForm from './forms/i-i-s-proba12-должности-l';
import IISProba12ОрганизацияLForm from './forms/i-i-s-proba12-организация-l';
import IISProba12ПланирСобесLForm from './forms/i-i-s-proba12-планир-собес-l';
import IISProba12РегРезультLForm from './forms/i-i-s-proba12-рег-результ-l';
import IISProba12РегистАнкетыLForm from './forms/i-i-s-proba12-регист-анкеты-l';
import IISProba12СотрудникиLForm from './forms/i-i-s-proba12-сотрудники-l';
import IISProba12ДолжностиEForm from './forms/i-i-s-proba12-должности-e';
import IISProba12ОрганизацияEForm from './forms/i-i-s-proba12-организация-e';
import IISProba12ПланирСобесEForm from './forms/i-i-s-proba12-планир-собес-e';
import IISProba12РегРезультEForm from './forms/i-i-s-proba12-рег-результ-e';
import IISProba12РегистАнкетыEForm from './forms/i-i-s-proba12-регист-анкеты-e';
import IISProba12СотрудникиEForm from './forms/i-i-s-proba12-сотрудники-e';
import IISProba12ДолжностиModel from './models/i-i-s-proba12-должности';
import IISProba12ОрганизацияModel from './models/i-i-s-proba12-организация';
import IISProba12ПланирСобесModel from './models/i-i-s-proba12-планир-собес';
import IISProba12РегРезультModel from './models/i-i-s-proba12-рег-результ';
import IISProba12РегистАнкетыModel from './models/i-i-s-proba12-регист-анкеты';
import IISProba12СотрудникиModel from './models/i-i-s-proba12-сотрудники';
import IISProba12ТЧРегРезультModel from './models/i-i-s-proba12-т-ч-рег-результ';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-proba12-должности': IISProba12ДолжностиModel,
    'i-i-s-proba12-организация': IISProba12ОрганизацияModel,
    'i-i-s-proba12-планир-собес': IISProba12ПланирСобесModel,
    'i-i-s-proba12-рег-результ': IISProba12РегРезультModel,
    'i-i-s-proba12-регист-анкеты': IISProba12РегистАнкетыModel,
    'i-i-s-proba12-сотрудники': IISProba12СотрудникиModel,
    'i-i-s-proba12-т-ч-рег-результ': IISProba12ТЧРегРезультModel
  },

  'application-name': 'Proba12',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Proba12',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Proba12',
          title: 'Proba12'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        proba12: {
          caption: 'Proba12',
          title: 'Proba12',
          'i-i-s-proba12-организация-l': {
            caption: 'Организация',
            title: ''
          },
          'i-i-s-proba12-должности-l': {
            caption: 'Должности',
            title: ''
          },
          'i-i-s-proba12-рег-результ-l': {
            caption: 'Рег результ',
            title: ''
          },
          'i-i-s-proba12-планир-собес-l': {
            caption: 'Планир собес',
            title: ''
          },
          'i-i-s-proba12-регист-анкеты-l': {
            caption: 'Регист анкеты',
            title: ''
          },
          'i-i-s-proba12-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-proba12-должности-l': IISProba12ДолжностиLForm,
    'i-i-s-proba12-организация-l': IISProba12ОрганизацияLForm,
    'i-i-s-proba12-планир-собес-l': IISProba12ПланирСобесLForm,
    'i-i-s-proba12-рег-результ-l': IISProba12РегРезультLForm,
    'i-i-s-proba12-регист-анкеты-l': IISProba12РегистАнкетыLForm,
    'i-i-s-proba12-сотрудники-l': IISProba12СотрудникиLForm,
    'i-i-s-proba12-должности-e': IISProba12ДолжностиEForm,
    'i-i-s-proba12-организация-e': IISProba12ОрганизацияEForm,
    'i-i-s-proba12-планир-собес-e': IISProba12ПланирСобесEForm,
    'i-i-s-proba12-рег-результ-e': IISProba12РегРезультEForm,
    'i-i-s-proba12-регист-анкеты-e': IISProba12РегистАнкетыEForm,
    'i-i-s-proba12-сотрудники-e': IISProba12СотрудникиEForm
  },

});

export default translations;
