import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proba12-должности', 'Unit | Serializer | i-i-s-proba12-должности', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-proba12-должности',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-proba12-итог-собес',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
