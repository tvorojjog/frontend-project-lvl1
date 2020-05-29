#!/usr/bin/env node
import { buildАrProgression, rules } from '../games/arProgression.js';
import { startGame } from '../src/index.js';

startGame(buildАrProgression, rules);
