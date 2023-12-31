import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proba12-т-ч-рег-результ', 'Unit | Model | i-i-s-proba12-т-ч-рег-результ', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-proba12-должности',
    'model:i-i-s-proba12-организация',
    'model:i-i-s-proba12-планир-собес',
    'model:i-i-s-proba12-рег-результ',
    'model:i-i-s-proba12-регист-анкеты',
    'model:i-i-s-proba12-сотрудники',
    'model:i-i-s-proba12-т-ч-рег-результ',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
