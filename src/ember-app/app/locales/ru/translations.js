import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Proba12',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Proba12',
          title: 'Proba12'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
