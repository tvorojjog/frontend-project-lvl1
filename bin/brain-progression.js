#!/usr/bin/env node
import { raundProgression, rules } from '../games/progression.js';
import startGame from '../src/index.js';

startGame(raundProgression, rules);
