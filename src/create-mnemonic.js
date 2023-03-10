"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompts_1 = require("@clack/prompts");
const bip39_1 = require("bip39");
void (() => __awaiter(void 0, void 0, void 0, function* () {
    (0, prompts_1.intro)('Generate mnemonic');
    const strength = yield (0, prompts_1.select)({
        message: 'Pick a number of words',
        options: [
            { value: '128', label: '12' },
            { value: '256', label: '24' }
        ]
    });
    if ((0, prompts_1.isCancel)(strength)) {
        (0, prompts_1.cancel)('Operation cancelled');
        process.exit(0);
    }
    const mnemonic = (0, bip39_1.generateMnemonic)(strength);
    (0, prompts_1.outro)(mnemonic);
}))();
