import test from 'node:test';
import assert from 'node:assert/strict';
import { calculate } from '../lib/tax.ts';

const net = (s: number, ded = 0, sac = 0) =>
  Math.round(calculate(s, true, false, true, ded, sac).netIncome);

test('base and scenarios apply Medicare to taxable income', () => {
  assert.equal(net(80_000), 63_880);
  assert.equal(net(80_000, 1_000), 64_200);
  assert.equal(net(80_000, 0, 5_000), 60_480);
  assert.equal(net(50_000, 1_000), 44_065);
  assert.equal(net(30_000, 1_000), 28_981);
  assert.equal(net(140_000, 0, 5_000), 101_280);
});

test('MLS ignores salary sacrifice reduction', () => {
  const a = calculate(110_000, true, false, false).medicareLevySurcharge;
  const b = calculate(110_000, true, false, false, 0, 10_000).medicareLevySurcharge;
  assert.ok(a > 0 && b > 0);
});
