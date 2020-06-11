#!/usr/bin/env node

import { raundPrime, rules } from '../games/prime.js';
import startGame from '../src/index.js';

startGame(raundPrime, rules);
