#!/usr/bin/env node

import { calculate, rules } from '../games/calculator.js';
import { startGame } from '../src/index.js';

startGame(calculate, rules);
