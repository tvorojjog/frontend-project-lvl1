#!/usr/bin/env node

import { raundCalc, rules } from '../games/calc.js';
import startGame from '../src/index.js';

startGame(raundCalc, rules);
