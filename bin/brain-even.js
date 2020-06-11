#!/usr/bin/env node

import { raundEven, rules } from '../games/even.js';
import startGame from '../src/index.js';

startGame(raundEven, rules);
