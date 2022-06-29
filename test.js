import test from 'node:test';
import assert from 'node:assert';
import factory from './index.js';

test('Reglas vacias deben retornar vacio', () => {
  const rules = [];

  assert.equal(factory.build(rules), '');
});

test('Debe convertir un numero especifico y ponerlo directamente', () => {
  const simpleRules = [
    {
      type: 'number',
      condition: 'specific',
      value: '2022',
    },
  ];
  const multipleRules = [
    {
      type: 'number',
      condition: 'specific',
      value: '2022',
    },
    {
      type: 'number',
      condition: 'specific',
      value: '304',
    },
  ];
  assert.equal(factory.build(simpleRules), '2022');
  assert.equal(factory.build(multipleRules), '2022304');
});

test('Debe agregar un rango numerico', () => {
  const simpleRules = [
    {
      type: 'number',
      condition: 'variable',
      value: '0-9',
    },
  ];

  const multipleRules = [
    {
      type: 'number',
      condition: 'variable',
      value: '0-9',
    },
    {
      type: 'number',
      condition: 'specific',
      value: '304',
    },
  ];

  assert.equal(factory.build(simpleRules), '[0-9]');
  assert.equal(factory.build(multipleRules), '[0-9]304');
});

const rules = [
  {
    type: '',
    condition: '',
    value: '',
  },
  {
    type: '',
    condition: '',
    value: '',
  },
  {
    type: '',
    condition: '',
    value: '',
  },
  {
    type: '',
    condition: '',
    value: '',
  },
  {
    type: '',
    condition: '',
    value: '',
  },
];

factory.build(rules); // ''
