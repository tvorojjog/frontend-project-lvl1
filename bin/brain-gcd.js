#!/usr/bin/env node

import { findGCD, rules } from '../games/grandCentralDispatch.js';
import startGame from '../src/index.js';

startGame(findGCD, rules);
