#!/usr/bin/env node

import { raundGCD, rules } from '../games/gcd.js';
import startGame from '../src/index.js';

startGame(raundGCD, rules);
