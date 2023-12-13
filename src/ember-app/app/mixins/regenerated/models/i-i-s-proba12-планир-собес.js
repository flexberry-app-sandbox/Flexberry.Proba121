import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаПланСобес: DS.attr('date'),
  иметьПриСебе: DS.attr('string'),
  организация: DS.belongsTo('i-i-s-proba12-организация', { inverse: null, async: false }),
  регистАнкеты: DS.belongsTo('i-i-s-proba12-регист-анкеты', { inverse: null, async: false })
});

export let ValidationRules = {
  датаПланСобес: {
    descriptionKey: 'models.i-i-s-proba12-планир-собес.validations.датаПланСобес.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  иметьПриСебе: {
    descriptionKey: 'models.i-i-s-proba12-планир-собес.validations.иметьПриСебе.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-proba12-планир-собес.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  регистАнкеты: {
    descriptionKey: 'models.i-i-s-proba12-планир-собес.validations.регистАнкеты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПланирСобесE', 'i-i-s-proba12-планир-собес', {
    датаПланСобес: attr('Дата план собес', { index: 0 }),
    иметьПриСебе: attr('Иметь при себе', { index: 1 }),
    организация: belongsTo('i-i-s-proba12-организация', 'Организация', {
      наименование: attr('Наименование', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'наименование' }),
    регистАнкеты: belongsTo('i-i-s-proba12-регист-анкеты', 'Регист анкеты', {
      фИОКандидата: attr('Ф и о кандидата', { index: 5, hidden: true }),
      серНомПаспорта: attr('', { index: 6 }),
      номерТелефона: attr('', { index: 7 }),
      снилс: attr('', { index: 8 }),
      элПочта: attr('', { index: 9 }),
      должности: belongsTo('i-i-s-proba12-должности', '', {
        должности: attr('', { index: 10 })
      }, { index: -1, hidden: true }),
      организация: belongsTo('i-i-s-proba12-организация', '', {
        наименование: attr('', { index: 11 }),
        адрес: attr('', { index: 12 }),
        телОрганиз: attr('', { index: 13 })
      }, { index: -1, hidden: true })
    }, { index: 4, displayMemberPath: 'фИОКандидата' })
  });

  modelClass.defineProjection('ПланирСобесL', 'i-i-s-proba12-планир-собес', {
    датаПланСобес: attr('Дата план собес', { index: 0 }),
    иметьПриСебе: attr('Иметь при себе', { index: 1 }),
    организация: belongsTo('i-i-s-proba12-организация', 'Наименование', {
      наименование: attr('Наименование', { index: 2 })
    }, { index: -1, hidden: true }),
    регистАнкеты: belongsTo('i-i-s-proba12-регист-анкеты', 'Ф и о кандидата', {
      фИОКандидата: attr('Ф и о кандидата', { index: 3 }),
      серНомПаспорта: attr('', { index: 4 }),
      снилс: attr('', { index: 5 }),
      номерТелефона: attr('', { index: 6 }),
      элПочта: attr('', { index: 7 }),
      должности: belongsTo('i-i-s-proba12-должности', '', {
        должности: attr('', { index: 8 })
      }, { index: -1, hidden: true }),
      организация: belongsTo('i-i-s-proba12-организация', '', {
        наименование: attr('', { index: 9 }),
        адрес: attr('', { index: 10 }),
        телОрганиз: attr('', { index: 11 })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true })
  });
};
