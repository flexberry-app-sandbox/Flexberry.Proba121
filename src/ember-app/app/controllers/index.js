import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.proba12.caption'),
          title: i18n.t('forms.application.sitemap.proba12.title'),
          children: [{
            link: 'i-i-s-proba12-организация-l',
            caption: i18n.t('forms.application.sitemap.proba12.i-i-s-proba12-организация-l.caption'),
            title: i18n.t('forms.application.sitemap.proba12.i-i-s-proba12-организация-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-proba12-должности-l',
            caption: i18n.t('forms.application.sitemap.proba12.i-i-s-proba12-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.proba12.i-i-s-proba12-должности-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-proba12-рег-результ-l',
            caption: i18n.t('forms.application.sitemap.proba12.i-i-s-proba12-рег-результ-l.caption'),
            title: i18n.t('forms.application.sitemap.proba12.i-i-s-proba12-рег-результ-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-proba12-планир-собес-l',
            caption: i18n.t('forms.application.sitemap.proba12.i-i-s-proba12-планир-собес-l.caption'),
            title: i18n.t('forms.application.sitemap.proba12.i-i-s-proba12-планир-собес-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-proba12-регист-анкеты-l',
            caption: i18n.t('forms.application.sitemap.proba12.i-i-s-proba12-регист-анкеты-l.caption'),
            title: i18n.t('forms.application.sitemap.proba12.i-i-s-proba12-регист-анкеты-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-proba12-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.proba12.i-i-s-proba12-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.proba12.i-i-s-proba12-сотрудники-l.title'),
            icon: 'edit',
            children: null
          }]
        }
      ]
    };
  }),
})