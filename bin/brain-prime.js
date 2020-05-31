#!/usr/bin/env node

import { findPrimeNum, rules } from '../games/primeNumber.js';
import { startGame } from '../src/index.js';

startGame(findPrimeNum, rules);