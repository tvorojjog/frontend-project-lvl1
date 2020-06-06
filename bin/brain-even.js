#!/usr/bin/env node

import { findEvenNumber, rules } from '../games/even.js';
import startGame from '../src/index.js';

startGame(findEvenNumber, rules);
