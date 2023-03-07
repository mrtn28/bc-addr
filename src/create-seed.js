#!/usr/bin/env node

import { cancel, intro, isCancel, outro, select } from '@clack/prompts'
import bip39 from 'bip39'

intro('Generate mnemonic')

const strength = await select({
  message: 'Pick a number of words',
  options: [
    { value: '128', label: '12' },
    { value: '256', label: '24' }
  ]
})

if (isCancel(strength)) {
  cancel('Operation cancelled')
  process.exit(0)
}

const mnemonic = bip39.generateMnemonic(strength)

outro(mnemonic)
