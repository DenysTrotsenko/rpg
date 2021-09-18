(self["webpackChunkrpg"] = self["webpackChunkrpg"] || []).push([["main"],{

/***/ 5539:
/*!**********************************************************!*\
  !*** ./projects/shadowrun/src/app/5e/5e.adept-powers.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADEPT_POWERS": () => (/* binding */ ADEPT_POWERS)
/* harmony export */ });
const ADEPT_POWERS = [];


/***/ }),

/***/ 2582:
/*!********************************************************!*\
  !*** ./projects/shadowrun/src/app/5e/5e.attributes.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ATTRIBUTES": () => (/* binding */ ATTRIBUTES)
/* harmony export */ });
/* harmony import */ var _shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shadowrun/app/5e/5e.enums */ 8642);

const ATTRIBUTES = [
    {
        id: _shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.BODY,
        name: 'Body',
        type: _shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_TYPE_ID.PHYSICAL,
        labels: {
            alias: 'BOD',
            description: 'Body measures your physical health and resiliency. It affects how much damage you can take and stay on your feet, how well you resist damage coming your way, your ability to recover from poisons and diseases, and things of that nature.'
        }
    },
    {
        id: _shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.AGILITY,
        name: 'Agility',
        type: _shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_TYPE_ID.PHYSICAL,
        labels: {
            alias: 'AGI',
            description: 'Agility measures things like hand-eye coordination, flexibility, nimbleness, and balance. Agility is the most important attribute when it comes to scoring hits during combat, as you need to be coordinated to land your blows, whether you’re swinging a sword or carefully aiming a rifle. It also is critical in non-combat situations, such as sneaking quietly past security guards or smoothly lifting a keycard from its secured position.'
        }
    },
    {
        id: _shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.REACTION,
        name: 'Reaction',
        type: _shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_TYPE_ID.PHYSICAL,
        labels: {
            alias: 'REA',
            description: 'Reaction is about reflexes, awareness, and your character’s ability to respond to events happening around them. Reaction plays an important role in deciding how soon characters act in combat and how skilled they are in avoiding attacks from others. It also helps you make that quick turn down a narrow alley on your cycle to avoid the howling gangers on your tail.'
        }
    },
    {
        id: _shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.STRENGTH,
        name: 'Strength',
        type: _shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_TYPE_ID.PHYSICAL,
        labels: {
            alias: 'STR',
            description: 'Strength is an indicator of, well, how strong your character is. The higher your strength, the more damage you’ll do when you’re raining blows down on an opponent, and the more you’ll be able to move or carry when there’s stuff that needs to be moved. Or carried. Strength is also important with athletic tasks such as climbing, running, and swimming.'
        }
    },
    {
        id: _shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.WILLPOWER,
        name: 'Willpower',
        type: _shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_TYPE_ID.MENTAL,
        labels: {
            alias: 'WIL',
            description: 'Willpower is your character’s desire to push through adversity, to resist the weariness of spellcasting, and to stay upright after being nailed in the head with a sap. Whether you’re testing yourself against a toxic wilderness or a pack of leather-clad orks with crowbars, Willpower will help you make it through.'
        }
    },
    {
        id: _shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.LOGIC,
        name: 'Logic',
        type: _shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_TYPE_ID.MENTAL,
        labels: {
            alias: 'LOG',
            description: 'The Logic attribute measures the cold, calculating power of your rational mind. Whether you are attempting to repair complicated machinery or patch up an injured teammate, Logic helps you get things right. Logic is also the attribute hermetic mages use to resist Drain from the spells they rain down on their hapless foes. Deckers also find Logic extremely useful, as it helps them develop the attacks and counterattacks that are part of their online battles.'
        }
    },
    {
        id: _shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.INTUITION,
        name: 'Intuition',
        type: _shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_TYPE_ID.MENTAL,
        labels: {
            alias: 'INT',
            description: 'Intuition is the voice of your gut, the instinct that tells you things before your logical brain can figure them out. Intuition helps you anticipate ambushes, notice that something is amiss or out of place, and stay on the trail of someone you’re pursuing.'
        }
    },
    {
        id: _shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.CHARISMA,
        name: 'Charisma',
        type: _shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_TYPE_ID.MENTAL,
        labels: {
            alias: 'CHA',
            description: 'Charisma is your force of personality, the persuasiveness and charm you can call on to get people to do what you want without having to go to the trouble of pulling a gun on them. It’s not entirely about your appearance, but it’s also not entirely not about your appearance. What it’s mostly about is how you use what you have — your voice, your face, your words, and all the tools at your disposal — to charm and/or intimidate the people you encounter. Additionally, Charisma is an important attribute for shamanic mages, as it helps them resist the damaging Drain from spells they cast.'
        }
    },
    {
        id: _shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.EDGE,
        name: 'Edge',
        type: _shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_TYPE_ID.SPECIAL,
        labels: {
            alias: 'EDG',
            description: 'Edge is the ultimate intangible, that certain something that provides a boost when you need it, that gets you out of a tough spot when the chips are down. It’s not used to calculate dice pools; instead, you spend a point of Edge to acquire a certain effect. Every character has at least one point of Edge, more if they want to take more frequent advantage of the boosts it offers. The possible effects of and more details about Edge are on p. 56.'
        }
    },
    {
        id: _shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.ESSENCE,
        name: 'Essence',
        type: _shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_TYPE_ID.SPECIAL,
        labels: {
            alias: 'ESS',
            description: 'Essence is your metahumanity encapsulated in a number. In Shadowrun, you have ample opportunities to alter your body or push it beyond its normal limits. Such actions often have a cost, and they can result in a loss of a portion of your metahumanity, which means a loss of Essence points. Each character starts with an Essence rating of 6, and it acts as a cap on the amount of alterations you can adopt. When it’s gone, it doesn’t come back. It also affects the Magic and Resonance attributes, as losses in Essence are reflected by losses in Magic and Resonance. While denizens of the Sixth World are accustomed to seeing a variety of augmentations and alterations to the metahuman form, the “uncanny valley” still exists. The uncanny valley is the disconcerting effect that happens when people see something that is almost, but not quite, metahuman. An animated cartoon with exaggerated features looks fine to metahuman eyes, but a computer program that closely, but not exactly, replicates human appearance is a troubling and unpleasant sight to most viewers. This is what happens when people see others with augmentations — on some level, people notice there is something less (or more) human about that, and they respond to it negatively. The change may not be exactly visible, but it is in some way noticeable — in one way or another, a person has become less human, and on some level other people notice this. This is why a character’s Essence is included in the calculation of their Social limit.'
        }
    },
    {
        id: _shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.MAGIC,
        name: 'Magic',
        type: _shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_TYPE_ID.SPECIAL,
        labels: {
            alias: 'MAG',
            description: 'If you intend to cast spells or use magic in any way, your character needs to have the Magic attribute. Most individuals do not have this attribute, meaning their rating is zero. Mages, who cast spells, and adepts, who channel magic into enhanced physical and mental abilities, need this quality. Their Magic rating measures how capable they are in the arcane arts and how much power they can draw down to help them in their efforts.'
        }
    },
    {
        id: _shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.RESONANCE,
        name: 'Resonance',
        type: _shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_TYPE_ID.SPECIAL,
        labels: {
            alias: 'RES',
            description: 'Similar to Magic for mages and adepts, Resonance is the special attribute for technomancers. Technomancers interface with the Matrix using the power of their mind, and Resonance measures the strength of their ability to interact with and shape that environment (see Technomancers, p. 249). Non-technomancers have a zero rating for Resonance.'
        }
    }
];


/***/ }),

/***/ 419:
/*!********************************************************!*\
  !*** ./projects/shadowrun/src/app/5e/5e.awakenings.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AWAKENINGS": () => (/* binding */ AWAKENINGS)
/* harmony export */ });
/* harmony import */ var _5e_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./5e.enums */ 8642);

const AWAKENINGS = [
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.AWAKENING_ID.MUNDANE,
        name: 'Mundane',
        attributes: {
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.MAGIC]: [0, 0],
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.RESONANCE]: [0, 0]
        },
        cost: 0
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.AWAKENING_ID.ADEPT,
        name: 'Adept',
        attributes: {
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.MAGIC]: [1, 6],
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.RESONANCE]: [0, 0]
        },
        cost: 20
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.AWAKENING_ID.ASPECTED_MAGICIAN_SPELLCASTER,
        name: 'Aspected Magician (Spellcaster)',
        attributes: {
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.MAGIC]: [1, 6],
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.RESONANCE]: [0, 0]
        },
        cost: 15
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.AWAKENING_ID.ASPECTED_MAGICIAN_SUMMONER,
        name: 'Aspected Magician (Summoner)',
        attributes: {
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.MAGIC]: [1, 6],
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.RESONANCE]: [0, 0]
        },
        cost: 15
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.AWAKENING_ID.ASPECTED_MAGICIAN_ALCHEMIST,
        name: 'Aspected Magician (Alchemist)',
        attributes: {
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.MAGIC]: [1, 6],
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.RESONANCE]: [0, 0]
        },
        cost: 15
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.AWAKENING_ID.MAGICIAN,
        name: 'Magician',
        attributes: {
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.MAGIC]: [1, 6],
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.RESONANCE]: [0, 0]
        },
        cost: 30
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.AWAKENING_ID.MYSTIC_ADEPT,
        name: 'Mystic Adept',
        attributes: {
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.MAGIC]: [1, 6],
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.RESONANCE]: [0, 0]
        },
        cost: 35
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.AWAKENING_ID.TECHNOMANCER,
        name: 'Technomancer',
        attributes: {
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.MAGIC]: [0, 0],
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.RESONANCE]: [1, 6]
        },
        cost: 15
    }
];


/***/ }),

/***/ 9860:
/*!***************************************************!*\
  !*** ./projects/shadowrun/src/app/5e/5e.books.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BOOKS": () => (/* binding */ BOOKS)
/* harmony export */ });
/* harmony import */ var _5e_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./5e.enums */ 8642);

const BOOKS = [
    { id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK, name: 'Core Rulebook' }
];


/***/ }),

/***/ 471:
/*!***********************************************************!*\
  !*** ./projects/shadowrun/src/app/5e/5e.complex-forms.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COMPLEX_FORM_TARGETS": () => (/* binding */ COMPLEX_FORM_TARGETS),
/* harmony export */   "COMPLEX_FORM_DURATIONS": () => (/* binding */ COMPLEX_FORM_DURATIONS),
/* harmony export */   "COMPLEX_FORMS": () => (/* binding */ COMPLEX_FORMS)
/* harmony export */ });
/* harmony import */ var _5e_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./5e.enums */ 8642);

const COMPLEX_FORM_TARGETS = [
    { id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_TARGET_ID.DEVICE, name: 'Device' },
    { id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_TARGET_ID.FILE, name: 'File' },
    { id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_TARGET_ID.SELF, name: 'Self' },
    { id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_TARGET_ID.SPRITE, name: 'Sprite' },
    { id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_TARGET_ID.PERSONA, name: 'Persona' }
];
const COMPLEX_FORM_DURATIONS = [
    { id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_DURATION_ID.IMMEDIATE, name: 'Immediate', alias: 'I' },
    { id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_DURATION_ID.SUSTAINED, name: 'Sustained', alias: 'S' },
    { id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_DURATION_ID.PERMANENT, name: 'Permanent', alias: 'P' }
];
const COMPLEX_FORMS = [
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_ID.CLEANER,
        name: 'Cleaner',
        target: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_TARGET_ID.PERSONA,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_DURATION_ID.PERMANENT,
        fading: 1
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_ID.DIFFUSION_OF_ATTACK,
        name: 'Diffusion of Attack',
        target: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_TARGET_ID.DEVICE,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_DURATION_ID.SUSTAINED,
        fading: 1
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_ID.DIFFUSION_OF_SLEAZE,
        name: 'Diffusion of Sleaze',
        target: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_TARGET_ID.DEVICE,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_DURATION_ID.SUSTAINED,
        fading: 1
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_ID.DIFFUSION_OF_DATA_PROCESSING,
        name: 'Diffusion of Data Processing',
        target: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_TARGET_ID.DEVICE,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_DURATION_ID.SUSTAINED,
        fading: 1
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_ID.DIFFUSION_OF_FIREWALL,
        name: 'Diffusion of Firewall',
        target: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_TARGET_ID.DEVICE,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_DURATION_ID.SUSTAINED,
        fading: 1
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_ID.EDITOR,
        name: 'Editor',
        target: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_TARGET_ID.FILE,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_DURATION_ID.PERMANENT,
        fading: 2
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_ID.INFUSION_OF_ATTACK,
        name: 'Infusion of Attack',
        target: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_TARGET_ID.DEVICE,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_DURATION_ID.SUSTAINED,
        fading: 1
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_ID.INFUSION_OF_SLEAZE,
        name: 'Infusion of Sleaze',
        target: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_TARGET_ID.DEVICE,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_DURATION_ID.SUSTAINED,
        fading: 1
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_ID.INFUSION_OF_DATA_PROCESSING,
        name: 'Infusion of Data Processing',
        target: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_TARGET_ID.DEVICE,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_DURATION_ID.SUSTAINED,
        fading: 1
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_ID.INFUSION_OF_FIREWALL,
        name: 'Infusion of Firewall',
        target: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_TARGET_ID.DEVICE,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_DURATION_ID.SUSTAINED,
        fading: 1
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_ID.STATIC_VEIL,
        name: 'Static Veil',
        target: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_TARGET_ID.PERSONA,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_DURATION_ID.SUSTAINED,
        fading: -1
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_ID.PULSE_STORM,
        name: 'Pulse Storm',
        target: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_TARGET_ID.PERSONA,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_DURATION_ID.IMMEDIATE,
        fading: 0
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_ID.PUPPETEER,
        name: 'Puppeteer',
        target: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_TARGET_ID.DEVICE,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_DURATION_ID.IMMEDIATE,
        fading: 4
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_ID.RESONANCE_CHANNEL,
        name: 'Resonance Channel',
        target: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_TARGET_ID.DEVICE,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_DURATION_ID.SUSTAINED,
        fading: -1
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_ID.RESONANCE_SPIKE,
        name: 'Resonance Spike',
        target: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_TARGET_ID.DEVICE,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_DURATION_ID.IMMEDIATE,
        fading: 0
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_ID.RESONANCE_VEIL,
        name: 'Resonance Veil',
        target: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_TARGET_ID.DEVICE,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_DURATION_ID.SUSTAINED,
        fading: -1
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_ID.STATIC_BOMB,
        name: 'Static Bomb',
        target: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_TARGET_ID.SELF,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_DURATION_ID.IMMEDIATE,
        fading: 2
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_ID.STITCHES,
        name: 'Stitches',
        target: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_TARGET_ID.SPRITE,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_DURATION_ID.PERMANENT,
        fading: -2
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_ID.TRANSCENDENT_GRID,
        name: 'Transcendent Grid',
        target: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_TARGET_ID.SELF,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_DURATION_ID.IMMEDIATE,
        fading: -1
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_ID.TATTLETALE,
        name: 'Tattletale',
        target: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_TARGET_ID.PERSONA,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_DURATION_ID.PERMANENT,
        fading: -2
    }
];


/***/ }),

/***/ 8642:
/*!***************************************************!*\
  !*** ./projects/shadowrun/src/app/5e/5e.enums.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADEPT_POWER_ID": () => (/* binding */ ADEPT_POWER_ID),
/* harmony export */   "ATTRIBUTE_ID": () => (/* binding */ ATTRIBUTE_ID),
/* harmony export */   "ATTRIBUTE_TYPE_ID": () => (/* binding */ ATTRIBUTE_TYPE_ID),
/* harmony export */   "AWAKENING_ID": () => (/* binding */ AWAKENING_ID),
/* harmony export */   "BOOK_ID": () => (/* binding */ BOOK_ID),
/* harmony export */   "COMPLEX_FORM_ID": () => (/* binding */ COMPLEX_FORM_ID),
/* harmony export */   "COMPLEX_FORM_TARGET_ID": () => (/* binding */ COMPLEX_FORM_TARGET_ID),
/* harmony export */   "COMPLEX_FORM_DURATION_ID": () => (/* binding */ COMPLEX_FORM_DURATION_ID),
/* harmony export */   "CONTACT_TYPE_ID": () => (/* binding */ CONTACT_TYPE_ID),
/* harmony export */   "GEAR_ID": () => (/* binding */ GEAR_ID),
/* harmony export */   "GEAR_TYPE_ID": () => (/* binding */ GEAR_TYPE_ID),
/* harmony export */   "LIFESTYLE_ID": () => (/* binding */ LIFESTYLE_ID),
/* harmony export */   "LIFESTYLE_OPTION_ID": () => (/* binding */ LIFESTYLE_OPTION_ID),
/* harmony export */   "MAGICAL_TRADITION_ID": () => (/* binding */ MAGICAL_TRADITION_ID),
/* harmony export */   "METATYPE_ID": () => (/* binding */ METATYPE_ID),
/* harmony export */   "POWER_ID": () => (/* binding */ POWER_ID),
/* harmony export */   "POWER_ACTION_ID": () => (/* binding */ POWER_ACTION_ID),
/* harmony export */   "POWER_DURATION_ID": () => (/* binding */ POWER_DURATION_ID),
/* harmony export */   "POWER_RANGE_ID": () => (/* binding */ POWER_RANGE_ID),
/* harmony export */   "POWER_TYPE_ID": () => (/* binding */ POWER_TYPE_ID),
/* harmony export */   "QUALITY_ID": () => (/* binding */ QUALITY_ID),
/* harmony export */   "SKILL_ID": () => (/* binding */ SKILL_ID),
/* harmony export */   "SKILL_CATEGORY_ID": () => (/* binding */ SKILL_CATEGORY_ID),
/* harmony export */   "SPELL_ID": () => (/* binding */ SPELL_ID),
/* harmony export */   "SPELL_CATEGORY_ID": () => (/* binding */ SPELL_CATEGORY_ID),
/* harmony export */   "SPELL_DAMAGE_ID": () => (/* binding */ SPELL_DAMAGE_ID),
/* harmony export */   "SPELL_DURATION_ID": () => (/* binding */ SPELL_DURATION_ID),
/* harmony export */   "SPELL_KIND_ID": () => (/* binding */ SPELL_KIND_ID),
/* harmony export */   "SPELL_RANGE_ID": () => (/* binding */ SPELL_RANGE_ID),
/* harmony export */   "SPELL_TAG_ID": () => (/* binding */ SPELL_TAG_ID),
/* harmony export */   "SPELL_TYPE_ID": () => (/* binding */ SPELL_TYPE_ID),
/* harmony export */   "SPIRIT_ID": () => (/* binding */ SPIRIT_ID)
/* harmony export */ });
var ADEPT_POWER_ID;
(function (ADEPT_POWER_ID) {
})(ADEPT_POWER_ID || (ADEPT_POWER_ID = {}));
var ATTRIBUTE_ID;
(function (ATTRIBUTE_ID) {
    ATTRIBUTE_ID["BODY"] = "attribute:body";
    ATTRIBUTE_ID["AGILITY"] = "attribute:agility";
    ATTRIBUTE_ID["REACTION"] = "attribute:reaction";
    ATTRIBUTE_ID["STRENGTH"] = "attribute:strength";
    ATTRIBUTE_ID["WILLPOWER"] = "attribute:willpower";
    ATTRIBUTE_ID["LOGIC"] = "attribute:logic";
    ATTRIBUTE_ID["INTUITION"] = "attribute:intuition";
    ATTRIBUTE_ID["CHARISMA"] = "attribute:charisma";
    ATTRIBUTE_ID["EDGE"] = "attribute:edge";
    ATTRIBUTE_ID["ESSENCE"] = "attribute:essence";
    ATTRIBUTE_ID["MAGIC"] = "attribute:magic";
    ATTRIBUTE_ID["RESONANCE"] = "attribute:resonance";
})(ATTRIBUTE_ID || (ATTRIBUTE_ID = {}));
var ATTRIBUTE_TYPE_ID;
(function (ATTRIBUTE_TYPE_ID) {
    ATTRIBUTE_TYPE_ID["PHYSICAL"] = "physical";
    ATTRIBUTE_TYPE_ID["MENTAL"] = "mental";
    ATTRIBUTE_TYPE_ID["SPECIAL"] = "special";
})(ATTRIBUTE_TYPE_ID || (ATTRIBUTE_TYPE_ID = {}));
var AWAKENING_ID;
(function (AWAKENING_ID) {
    AWAKENING_ID["MUNDANE"] = "awakening:mundane";
    AWAKENING_ID["ADEPT"] = "awakening:adept";
    AWAKENING_ID["ASPECTED_MAGICIAN_SPELLCASTER"] = "awakening:aspected_magician_spellcaster";
    AWAKENING_ID["ASPECTED_MAGICIAN_SUMMONER"] = "awakening:aspected_magician_summoner";
    AWAKENING_ID["ASPECTED_MAGICIAN_ALCHEMIST"] = "awakening:aspected_magician_alchemist";
    AWAKENING_ID["MAGICIAN"] = "awakening:magician";
    AWAKENING_ID["MYSTIC_ADEPT"] = "awakening:mystic_adept";
    AWAKENING_ID["TECHNOMANCER"] = "awakening:technomancer";
})(AWAKENING_ID || (AWAKENING_ID = {}));
var BOOK_ID;
(function (BOOK_ID) {
    BOOK_ID["CORE_RULEBOOK"] = "5e:core_rulebook";
})(BOOK_ID || (BOOK_ID = {}));
var COMPLEX_FORM_ID;
(function (COMPLEX_FORM_ID) {
    COMPLEX_FORM_ID["CLEANER"] = "complex_form:cleaner";
    COMPLEX_FORM_ID["DIFFUSION_OF_ATTACK"] = "complex_form:diffusion_of_attack";
    COMPLEX_FORM_ID["DIFFUSION_OF_SLEAZE"] = "complex_form:diffusion_of_sleaze";
    COMPLEX_FORM_ID["DIFFUSION_OF_DATA_PROCESSING"] = "complex_form:diffusion_of_data_processing";
    COMPLEX_FORM_ID["DIFFUSION_OF_FIREWALL"] = "complex_form:diffusion_of_firewall";
    COMPLEX_FORM_ID["EDITOR"] = "complex_form:editor";
    COMPLEX_FORM_ID["INFUSION_OF_ATTACK"] = "complex_form:infusion_of_attack";
    COMPLEX_FORM_ID["INFUSION_OF_SLEAZE"] = "complex_form:infusion_of_sleaze";
    COMPLEX_FORM_ID["INFUSION_OF_DATA_PROCESSING"] = "complex_form:infusion_of_data_processing";
    COMPLEX_FORM_ID["INFUSION_OF_FIREWALL"] = "complex_form:infusion_of_firewall";
    COMPLEX_FORM_ID["STATIC_VEIL"] = "complex_form:static_veil";
    COMPLEX_FORM_ID["PULSE_STORM"] = "complex_form:pulse_storm";
    COMPLEX_FORM_ID["PUPPETEER"] = "complex_form:puppeteer";
    COMPLEX_FORM_ID["RESONANCE_CHANNEL"] = "complex_form:resonance_channel";
    COMPLEX_FORM_ID["RESONANCE_SPIKE"] = "complex_form:resonance_spike";
    COMPLEX_FORM_ID["RESONANCE_VEIL"] = "complex_form:resonance_veil";
    COMPLEX_FORM_ID["STATIC_BOMB"] = "complex_form:static_bomb";
    COMPLEX_FORM_ID["STITCHES"] = "complex_form:stitches";
    COMPLEX_FORM_ID["TRANSCENDENT_GRID"] = "complex_form:transcendent_grid";
    COMPLEX_FORM_ID["TATTLETALE"] = "complex_form:tattletale";
})(COMPLEX_FORM_ID || (COMPLEX_FORM_ID = {}));
var COMPLEX_FORM_TARGET_ID;
(function (COMPLEX_FORM_TARGET_ID) {
    COMPLEX_FORM_TARGET_ID[COMPLEX_FORM_TARGET_ID["SELF"] = 1] = "SELF";
    COMPLEX_FORM_TARGET_ID[COMPLEX_FORM_TARGET_ID["DEVICE"] = 2] = "DEVICE";
    COMPLEX_FORM_TARGET_ID[COMPLEX_FORM_TARGET_ID["PERSONA"] = 3] = "PERSONA";
    COMPLEX_FORM_TARGET_ID[COMPLEX_FORM_TARGET_ID["SPRITE"] = 4] = "SPRITE";
    COMPLEX_FORM_TARGET_ID[COMPLEX_FORM_TARGET_ID["FILE"] = 5] = "FILE";
})(COMPLEX_FORM_TARGET_ID || (COMPLEX_FORM_TARGET_ID = {}));
var COMPLEX_FORM_DURATION_ID;
(function (COMPLEX_FORM_DURATION_ID) {
    COMPLEX_FORM_DURATION_ID["IMMEDIATE"] = "cfd:immediate";
    COMPLEX_FORM_DURATION_ID["SUSTAINED"] = "cfd:sustained";
    COMPLEX_FORM_DURATION_ID["PERMANENT"] = "cfd:permanent";
})(COMPLEX_FORM_DURATION_ID || (COMPLEX_FORM_DURATION_ID = {}));
var CONTACT_TYPE_ID;
(function (CONTACT_TYPE_ID) {
    CONTACT_TYPE_ID["CUSTOM"] = "ct:custom";
    CONTACT_TYPE_ID["FIXER"] = "ct:fixer";
    CONTACT_TYPE_ID["JOHNSON"] = "ct:johnson";
    CONTACT_TYPE_ID["TALISMONGER"] = "ct:talismonger";
})(CONTACT_TYPE_ID || (CONTACT_TYPE_ID = {}));
var GEAR_ID;
(function (GEAR_ID) {
    GEAR_ID["ERIKA_MCD_1"] = "gear:erika_mcd_1";
    GEAR_ID["MICRODECK_SUMMIT"] = "gear:microdeck_summit";
    GEAR_ID["MICROTRONICA_AZTECA_200"] = "gear:microtronica_azteca_200";
    GEAR_ID["HERMES_CHARIOT"] = "gear:hermes_chariot";
    GEAR_ID["NOVATECH_NAVIGATOR"] = "gear:novatech_navigator";
    GEAR_ID["RENRAKU_TSURUGI"] = "gear:renraku_tsurugi";
    GEAR_ID["SONY_CIY_720"] = "gear:sony_ciy_720";
    GEAR_ID["SHIAWASE_CYBER_5"] = "gear:shiawase_cyber_5";
    GEAR_ID["FAIRLIGHT_EXCALIBUR"] = "gear:fairlight_excalibur";
    GEAR_ID["SCRATCH_BUILT_JUNK"] = "gear:scratch_built_junk";
    GEAR_ID["RADIO_SHACK_REMOTE_CONTROLLER"] = "gear:radio_shack_remote_controller";
    GEAR_ID["ESSY_MOTORS_DRONEMASTER"] = "gear:essy_motors_dronemaster";
    GEAR_ID["COMPUFORCE_TASKMASTER"] = "gear:compuforce_taskmaster";
    GEAR_ID["MAERSK_SPIDER"] = "gear:maersk_spider";
    GEAR_ID["MASER_INDUSTRIAL_ELECTRONICS"] = "gear:maser_industrial_electronics";
    GEAR_ID["VULCAN_LIEGELORD"] = "gear:vulcan_liegelord";
    GEAR_ID["PROTEUS_POSEIDON"] = "gear:proteus_poseidon";
    GEAR_ID["LONE_STAR_REMOTE_COMMANDER"] = "gear:lone_star_remote_commander";
    GEAR_ID["MCT_DRONE_WEB"] = "gear:mct_drone_web";
    GEAR_ID["TRIOX_UBERMENSCH"] = "gear:triox_ubermensch";
    GEAR_ID["ENCHANTING_FOCUS"] = "gear:enchanting_focus";
    GEAR_ID["METAMAGIC_FOCUS"] = "gear:metamagic_focus";
    GEAR_ID["POWER_FOCUS"] = "gear:power_focus";
    GEAR_ID["QI_FOCUS"] = "gear:qi_focus";
    GEAR_ID["SPELL_FOCUS"] = "gear:spell_focus";
    GEAR_ID["SPIRIT_FOCUS"] = "gear:spirit_focus";
    GEAR_ID["WEAPON_FOCUS"] = "gear:weapon_focus";
    GEAR_ID["ENCHANTING_FOCUS_FORMULA"] = "gear:enchanting_focus_formula";
    GEAR_ID["METAMAGIC_FOCUS_FORMULA"] = "gear:metamagic_focus_formula";
    GEAR_ID["POWER_FOCUS_FORMULA"] = "gear:power_focus_formula";
    GEAR_ID["QI_FOCUS_FORMULA"] = "gear:qi_focus_formula";
    GEAR_ID["SPELL_FOCUS_FORMULA"] = "gear:spell_focus_formula";
    GEAR_ID["SPIRIT_FOCUS_FORMULA"] = "gear:spirit_focus_formula";
    GEAR_ID["WEAPON_FOCUS_FORMULA"] = "gear:weapon_focus_formula";
    GEAR_ID["COMBAT_SPELL_FORMULA"] = "gear:combat_spell_formula";
    GEAR_ID["DETECTION_SPELL_FORMULA"] = "gear:detection_spell_formula";
    GEAR_ID["HEALTH_SPELL_FORMULA"] = "gear:health_spell_formula";
    GEAR_ID["ILLUSION_SPELL_FORMULA"] = "gear:illusion_spell_formula";
    GEAR_ID["MANIPULATION_SPELL_FORMULA"] = "gear:manipulation_spell_formula";
    GEAR_ID["MAGICAL_LODGE_MATERIALS"] = "gt:magical_lodge_materials";
    GEAR_ID["REAGENTS"] = "gt:reagents";
    GEAR_ID["CS_TEAR_GAS"] = "gt:cs_tear_gas";
    GEAR_ID["GAMMA_SCOPOLAMINE"] = "gt:gamma_scopolamine";
    GEAR_ID["NARCOJET"] = "gt:narcojet";
    GEAR_ID["NAUSEA_GAS"] = "gt:nausea_gas";
    GEAR_ID["NEURO_STUN_VIII"] = "gt:neuro_stun_viii";
    GEAR_ID["NEURO_STUN_IX"] = "gt:neuro_stun_ix";
    GEAR_ID["NEURO_STUN_X"] = "gt:neuro_stun_x";
    GEAR_ID["PEPPER_PUNCH"] = "gt:pepper_punch";
    GEAR_ID["SEVEN_7"] = "gt:seven_7";
    GEAR_ID["BLISS"] = "gt:bliss";
    GEAR_ID["CRAM"] = "gt:cram";
    GEAR_ID["DEEPWEED"] = "gt:deepweed";
    GEAR_ID["JAZZ"] = "gt:jazz";
    GEAR_ID["KAMIKAZE"] = "gt:kamikaze";
    GEAR_ID["LONG_HAUL"] = "gt:long_haul";
    GEAR_ID["NITRO"] = "gt:nitro";
    GEAR_ID["NOVACOKE"] = "gt:novacoke";
    GEAR_ID["PSYCHE"] = "gt:psyche";
    GEAR_ID["ZEN"] = "gt:zen";
    GEAR_ID["DREAMCHIP"] = "gt:dreamchip";
    GEAR_ID["MOODCHIP"] = "gt:moodchip";
    GEAR_ID["PERSONAFIX"] = "gt:personafix";
    GEAR_ID["TRIPCHIP"] = "gt:tripchip";
    GEAR_ID["COMBAT_AXE"] = "gt:combat_axe";
    GEAR_ID["COMBAT_KNIFE"] = "gt:combat_knife";
    GEAR_ID["FOREARM_SNAP_BLADES"] = "gt:forearm_snap_blades";
    GEAR_ID["KATANA"] = "gt:katana";
    GEAR_ID["KNIFE"] = "gt:knife";
    GEAR_ID["POLEARM"] = "gt:polearm";
    GEAR_ID["SURVIVAL_KNIFE"] = "gt:survival_knife";
    GEAR_ID["SWORD"] = "gt:sword";
    GEAR_ID["CLUB"] = "gt:club";
    GEAR_ID["EXTENDABLE_BATON"] = "gt:extendable_baton";
    GEAR_ID["SAP"] = "gt:sap";
    GEAR_ID["STAFF"] = "gt:staff";
    GEAR_ID["STUN_BATON"] = "gt:stun_baton";
    GEAR_ID["TELESCOPING_STAFF"] = "gt:telescoping_staff";
    GEAR_ID["KNUCKS"] = "gt:knucks";
    GEAR_ID["MONOFILAMENT_WHIP"] = "gt:monofilament_whip";
    GEAR_ID["SHOCK_GLOVES"] = "gt:shock_gloves";
})(GEAR_ID || (GEAR_ID = {}));
var GEAR_TYPE_ID;
(function (GEAR_TYPE_ID) {
    GEAR_TYPE_ID["CYBERDECK"] = "gt:cyberdeck";
    GEAR_TYPE_ID["RCC"] = "gt:rcc";
    GEAR_TYPE_ID["FOCUS"] = "gt:foci";
    GEAR_TYPE_ID["FORMULA"] = "gt:formula";
    GEAR_TYPE_ID["MAGIC_SUPPLIES"] = "gt:magic_supplies";
    GEAR_TYPE_ID["TOXIN"] = "gt:toxin";
    GEAR_TYPE_ID["DRUG"] = "gt:drug";
    GEAR_TYPE_ID["BTL"] = "gt:btl";
    GEAR_TYPE_ID["MELEE_WEAPONS"] = "gt:melee_weapons";
    // BTL = 'gt:btl',
})(GEAR_TYPE_ID || (GEAR_TYPE_ID = {}));
var LIFESTYLE_ID;
(function (LIFESTYLE_ID) {
    LIFESTYLE_ID["LUXURY"] = "ls:luxury";
    LIFESTYLE_ID["HIGH"] = "ls:high";
    LIFESTYLE_ID["MIDDLE"] = "ls:middle";
    LIFESTYLE_ID["LOW"] = "ls:low";
    LIFESTYLE_ID["SQUATTER"] = "ls:squatter";
    LIFESTYLE_ID["STREETS"] = "ls:streets";
    LIFESTYLE_ID["HOSPITALIZED"] = "ls:hospitalized";
})(LIFESTYLE_ID || (LIFESTYLE_ID = {}));
var LIFESTYLE_OPTION_ID;
(function (LIFESTYLE_OPTION_ID) {
    LIFESTYLE_OPTION_ID["SPECIAL_WORK_AREA"] = "lso:special_work_area";
    LIFESTYLE_OPTION_ID["EXTRA_SECURE"] = "lso:extra_secure";
    LIFESTYLE_OPTION_ID["OBSCURE_DIFFICULT_TO_FIND"] = "lso:obscure_difficult_to_find";
    LIFESTYLE_OPTION_ID["CRAMPED"] = "lso:cramped";
    LIFESTYLE_OPTION_ID["DANGEROUS_AREA"] = "lso:dangerous_area";
})(LIFESTYLE_OPTION_ID || (LIFESTYLE_OPTION_ID = {}));
var MAGICAL_TRADITION_ID;
(function (MAGICAL_TRADITION_ID) {
    MAGICAL_TRADITION_ID["HERMETIC"] = "mt:hermetic";
    MAGICAL_TRADITION_ID["SHAMAN"] = "mt:shaman";
})(MAGICAL_TRADITION_ID || (MAGICAL_TRADITION_ID = {}));
var METATYPE_ID;
(function (METATYPE_ID) {
    METATYPE_ID["HUMAN"] = "metatype:human";
    METATYPE_ID["DWARF"] = "metatype:dwarf";
    METATYPE_ID["ELF"] = "metatype:elf";
    METATYPE_ID["ORK"] = "metatype:ork";
    METATYPE_ID["TROLL"] = "metatype:troll";
})(METATYPE_ID || (METATYPE_ID = {}));
var POWER_ID;
(function (POWER_ID) {
    POWER_ID["ACCIDENT"] = "power:accident";
    POWER_ID["ANIMAL_CONTROL"] = "power:animal_control";
    POWER_ID["ARMOR"] = "power:armor";
    POWER_ID["ASTRAL_FORM"] = "power:astral_form";
    POWER_ID["BINDING"] = "power:binding";
    POWER_ID["COMPULSION"] = "power:compulsion";
    POWER_ID["CONCEALMENT"] = "power:concealment";
    POWER_ID["CONFUSION"] = "power:confusion";
    POWER_ID["CORROSIVE_SPIT"] = "power:corrosive_spit";
    POWER_ID["DRAGONSPEECH"] = "power:dragonspeech";
    POWER_ID["DUAL_NATURED"] = "power:dual_natured";
    POWER_ID["ELEMENTAL_ATTACK"] = "power:elemental_attack";
    POWER_ID["ENERGY_AURA"] = "power:energy_aura";
    POWER_ID["ENGULF"] = "power:engulf";
    POWER_ID["ENHANCED_SENSES"] = "power:enhanced_senses";
    POWER_ID["ESSENCE_DRAIN"] = "power:essence_drain";
    POWER_ID["FEAR"] = "power:fear";
    POWER_ID["GUARD"] = "power:guard";
    POWER_ID["HARDENED_ARMOR"] = "power:hardened_armor";
    POWER_ID["HARDENED_MYSTIC_ARMOR"] = "power:hardened_mystic_armor";
    POWER_ID["IMMUNITY"] = "power:immunity";
    POWER_ID["INFECTION"] = "power:infection";
    POWER_ID["INFLUENCE"] = "power:influence";
    POWER_ID["INNATE_SPELL"] = "power:INNATE_SPELL";
    POWER_ID["MATERIALIZATION"] = "power:materialization";
    POWER_ID["MIMICRY"] = "power:mimicry";
    POWER_ID["MIST_FORM"] = "power:mist_form";
    POWER_ID["MOVEMENT"] = "power:movement";
    POWER_ID["MYSTIC_ARMOR"] = "power:mystic_armor";
    POWER_ID["NATURAL_WEAPON"] = "power:natural_weapon";
    POWER_ID["NOXIOUS_BREATH"] = "power:noxious_breath";
    POWER_ID["PARALYZING_HOWL"] = "power:paralyzing_howl";
    POWER_ID["PARALYZING_TOUCH"] = "power:paralyzing_touch";
    POWER_ID["PETRIFICATION"] = "power:petrification";
    POWER_ID["PSYCHOKINESIS"] = "power:psychokinesis";
    POWER_ID["REGENERATION"] = "power:regeneration";
    POWER_ID["SAPIENCE"] = "power:sapience";
    POWER_ID["SEARCH"] = "power:search";
    POWER_ID["VENOM"] = "power:venom";
    POWER_ID["WEATHER_CONTROL"] = "power:weather_control";
})(POWER_ID || (POWER_ID = {}));
var POWER_ACTION_ID;
(function (POWER_ACTION_ID) {
    POWER_ACTION_ID["SIMPLE"] = "pa:simple";
    POWER_ACTION_ID["COMPLEX"] = "pa:complex";
    POWER_ACTION_ID["AUTO"] = "pa:auto";
})(POWER_ACTION_ID || (POWER_ACTION_ID = {}));
var POWER_DURATION_ID;
(function (POWER_DURATION_ID) {
    POWER_DURATION_ID["ALWAYS"] = "pd:always";
    POWER_DURATION_ID["INSTANT"] = "pd:instant";
    POWER_DURATION_ID["SUSTAINED"] = "pd:sustained";
    POWER_DURATION_ID["PERMANENT"] = "pd:permanent";
})(POWER_DURATION_ID || (POWER_DURATION_ID = {}));
var POWER_RANGE_ID;
(function (POWER_RANGE_ID) {
    POWER_RANGE_ID["SELF"] = "pr:self";
    POWER_RANGE_ID["TOUCH"] = "pr:touch";
    POWER_RANGE_ID["LINE_OF_SIGHT"] = "pr:line_of_sight";
    POWER_RANGE_ID["LINE_OF_SIGHT_AREA"] = "pr:line_of_sight_area";
})(POWER_RANGE_ID || (POWER_RANGE_ID = {}));
var POWER_TYPE_ID;
(function (POWER_TYPE_ID) {
    POWER_TYPE_ID["PHYSICAL"] = "pt:physical";
    POWER_TYPE_ID["MANA"] = "pt:mana";
})(POWER_TYPE_ID || (POWER_TYPE_ID = {}));
var QUALITY_ID;
(function (QUALITY_ID) {
    QUALITY_ID["RACIAL_LOW_LIGHT_VISION"] = "quality:racial_low_light_vision";
    QUALITY_ID["RACIAL_THERMOGRAPHIC_VISION"] = "quality:racial_thermographic_vision";
    QUALITY_ID["RACIAL_PATHOGENS_RESISTANCE"] = "quality:racial_pathogens_resistance";
    QUALITY_ID["RACIAL_REACH"] = "quality:racial_reach";
    QUALITY_ID["RACIAL_DERMAL_ARMOR"] = "quality:racial_dermal_armor";
    QUALITY_ID["RACIAL_LIFESTYLE"] = "quality:racial_lifestyle";
    QUALITY_ID["AMBIDEXTROUS"] = "quality:ambidextrous";
    QUALITY_ID["ANALYTICAL_MIND"] = "quality:analytical_mind";
    QUALITY_ID["APTITUDE"] = "quality:aptitude";
    QUALITY_ID["ASTRAL_CHAMELEON"] = "quality:astral_chameleon";
    QUALITY_ID["BILINGUAL"] = "quality:bilingual";
    QUALITY_ID["BLANDNESS"] = "quality:blandness";
    QUALITY_ID["CATLIKE"] = "quality:catlike";
    QUALITY_ID["CODESLINGER"] = "quality:codeslinger";
    QUALITY_ID["DOUBLE_JOINTED"] = "quality:double_jointed";
    QUALITY_ID["EXCEPTIONAL_ATTRIBUTE"] = "quality:exceptional_attribute";
    QUALITY_ID["FIRST_IMPRESSION"] = "quality:first_impression";
    QUALITY_ID["FOCUSED_CONCENTRATION"] = "quality:focused_concentration";
    QUALITY_ID["GEARHEAD"] = "quality:gearhead";
    QUALITY_ID["GUTS"] = "quality:guts";
    QUALITY_ID["HIGH_PAIN_TOLERANCE"] = "quality:high_pain_tolerance";
    QUALITY_ID["HOME_GROUND"] = "quality:home_ground";
    QUALITY_ID["HUMAN_LOOKING"] = "quality:human_looking";
    QUALITY_ID["INDOMITABLE"] = "quality:indomitable";
    QUALITY_ID["JURYRIGGER"] = "quality:juryrigger";
    QUALITY_ID["LUCKY"] = "quality:lucky";
    QUALITY_ID["MAGIC_RESISTANCE"] = "quality:magic_resistance";
    QUALITY_ID["MENTOR_SPIRIT"] = "quality:mentor_spirit";
    QUALITY_ID["NATURAL_ATHLETE"] = "quality:natural_athlete";
    QUALITY_ID["NATURAL_HARDENING"] = "quality:natural_hardening";
    QUALITY_ID["NATURAL_IMMUNITY"] = "quality:natural_immunity";
    QUALITY_ID["PHOTOGRAPHIC_MEMORY"] = "quality:photographic_memory";
    QUALITY_ID["QUICK_HEALER"] = "quality:quick_healer";
    QUALITY_ID["RESISTANCE_TO_PATHOGENS"] = "quality:resistance_to_pathogens";
    QUALITY_ID["SPIRIT_AFFINITY"] = "quality:spirit_affinity";
    QUALITY_ID["TOUGHNESS"] = "quality:toughness";
    QUALITY_ID["WILL_TO_LIVE"] = "quality:will_to_live";
    QUALITY_ID["ADDICTION"] = "quality:addiction";
    QUALITY_ID["ALLERGY"] = "quality:allergy";
    QUALITY_ID["ASTRAL_BEACON"] = "quality:astral_beacon";
    QUALITY_ID["BAD_LUCK"] = "quality:bad_luck";
    QUALITY_ID["BAD_REP"] = "quality:bad_rep";
    QUALITY_ID["CODE_OF_HONOR"] = "quality:code_of_honor";
    QUALITY_ID["CODEBLOCK"] = "quality:codeblock";
    QUALITY_ID["COMBAT_PARALYSIS"] = "quality:combat_paralyisis";
    QUALITY_ID["DEPENDENTS"] = "quality:dependents";
    QUALITY_ID["DISTINCTIVE_STYLE"] = "quality:distinctive_style";
    QUALITY_ID["ELF_POSER"] = "quality:elf_poser";
    QUALITY_ID["GREMLINS"] = "quality:gremlins";
    QUALITY_ID["INCOMPETENT"] = "quality:incompetent";
    QUALITY_ID["INSOMNIA"] = "quality:insomnia";
    QUALITY_ID["LOSS_OF_CONFIDENCE"] = "quality:loss_of_confidence";
    QUALITY_ID["LOW_PAIN_TOLERANCE"] = "quality:low_pain_tolerance";
    QUALITY_ID["ORK_POSER"] = "quality:ork_poser";
    QUALITY_ID["PREJUDICED"] = "quality:prejudiced";
    QUALITY_ID["SCORCHED"] = "quality:scorched";
    QUALITY_ID["SENSITIVE_SYSTEM"] = "quality:sensitive_system";
    QUALITY_ID["SIMSENSE_VERTIGO"] = "quality:simsense_vertigo";
    QUALITY_ID["SINNER"] = "quality:sinner";
    QUALITY_ID["SOCIAL_STRESS"] = "quality:social_stress";
    QUALITY_ID["SPIRIT_BANE"] = "quality:spirit_bane";
    QUALITY_ID["UNCOUTH"] = "quality:uncouth";
    QUALITY_ID["UNEDUCATED"] = "quality:uneducated";
    QUALITY_ID["UNSTEADY_HANDS"] = "quality:unsteady_hands";
    QUALITY_ID["WEAK_IMMUNE_SYSTEM"] = "quality:weak_immune_system";
})(QUALITY_ID || (QUALITY_ID = {}));
var SKILL_ID;
(function (SKILL_ID) {
    SKILL_ID["ARCHERY"] = "skill:archery";
    SKILL_ID["AUTOMATICS"] = "skill:automatics";
    SKILL_ID["BLADES"] = "skill:blades";
    SKILL_ID["CLUBS"] = "skill:clubs";
    SKILL_ID["EXOTIC_RANGED_WEAPON"] = "skill:exotic_ranged_weapon";
    SKILL_ID["HEAVY_WEAPONS"] = "skill:heavy_weapons";
    SKILL_ID["LONGARMS"] = "skill:longarms";
    SKILL_ID["PISTOLS"] = "skill:pistols";
    SKILL_ID["THROWING_WEAPONS"] = "skill:throwing_weapons";
    SKILL_ID["UNARMED_COMBAT"] = "skill:unarmed_combat";
    SKILL_ID["DISGUISE"] = "skill:disguise";
    SKILL_ID["DIVING"] = "skill:diving";
    SKILL_ID["ESCAPE_ARTIST"] = "skill:escape_artist";
    SKILL_ID["FREE_FALL"] = "skill:free-fall";
    SKILL_ID["GYMNASTICS"] = "skill:gymnastics";
    SKILL_ID["PALMING"] = "skill:palming";
    SKILL_ID["PERCEPTION"] = "skill:perception";
    SKILL_ID["RUNNING"] = "skill:running";
    SKILL_ID["SNEAKING"] = "skill:sneaking";
    SKILL_ID["SURVIVAL"] = "skill:survival";
    SKILL_ID["SWIMMING"] = "skill:swimming";
    SKILL_ID["TRACKING"] = "skill:tracking";
    SKILL_ID["CON"] = "skill:con";
    SKILL_ID["ETIQUETTE"] = "skill:etiquette";
    SKILL_ID["IMPERSONATION"] = "skill:impersonation";
    SKILL_ID["INSTRUCTION"] = "skill:instruction";
    SKILL_ID["INTIMIDATION"] = "skill:intimidation";
    SKILL_ID["LEADERSHIP"] = "skill:leadership";
    SKILL_ID["NEGOTIATION"] = "skill:negotiation";
    SKILL_ID["PERFORMANCE"] = "skill:performance";
    SKILL_ID["ALCHEMY"] = "skill:alchemy";
    SKILL_ID["ARCANA"] = "skill:arcana";
    SKILL_ID["ARTIFICING"] = "skill:artificing";
    SKILL_ID["ASSENSING"] = "skill:assensing";
    SKILL_ID["ASTRAL_COMBAT"] = "skill:astral_combat";
    SKILL_ID["BANISHING"] = "skill:banishing";
    SKILL_ID["BINDING"] = "skill:binding";
    SKILL_ID["COUNTERSPELLING"] = "skill:counterspelling";
    SKILL_ID["DISENCHANTING"] = "skill:disenchanting";
    SKILL_ID["RITUAL_SPELLCASTING"] = "skill:ritual_spellcasting";
    SKILL_ID["SPELLCASTING"] = "skill:spellcasting";
    SKILL_ID["SUMMONING"] = "skill:summoning";
    SKILL_ID["COMPILING"] = "skill:compiling";
    SKILL_ID["DECOMPILING"] = "skill:decompiling";
    SKILL_ID["REGISTERING"] = "skill:registering";
    SKILL_ID["AERONAUTICS_MECHANIC"] = "skill:aeronautics_mechanic";
    SKILL_ID["ANIMAL_HANDLING"] = "skill:animal_handling";
    SKILL_ID["ARMORER"] = "skill:armorer";
    SKILL_ID["ARTISAN"] = "skill:artisan";
    SKILL_ID["AUTOMOTIVE_MECHANIC"] = "skill:automotive_mechanic";
    SKILL_ID["BIOTECHNOLOGY"] = "skill:biotechnology";
    SKILL_ID["CHEMISTRY"] = "skill:chemistry";
    SKILL_ID["COMPUTER"] = "skill:computer";
    SKILL_ID["CYBERCOMBAT"] = "skill:cybercombat";
    SKILL_ID["CYBERTECHNOLOGY"] = "skill:cybertechnology";
    SKILL_ID["DEMOLITIONS"] = "skill:demolitions";
    SKILL_ID["ELECTRONIC_WARFARE"] = "skill:electronic_warfare";
    SKILL_ID["FIRST_AID"] = "skill:first_aid";
    SKILL_ID["FORGERY"] = "skill:forgery";
    SKILL_ID["HACKING"] = "skill:hacking";
    SKILL_ID["HARDWARE"] = "skill:hardware";
    SKILL_ID["INDUSTRIAL_MECHANIC"] = "skill:industrial_mechanic";
    SKILL_ID["LOCKSMITH"] = "skill:locksmith";
    SKILL_ID["MEDICINE"] = "skill:medicine";
    SKILL_ID["NAUTICAL_MECHANIC"] = "skill:nautical_mechanic";
    SKILL_ID["NAVIGATION"] = "skill:navigation";
    SKILL_ID["SOFTWARE"] = "skill:software";
    SKILL_ID["GUNNERY"] = "skill:gunnery";
    SKILL_ID["PILOT_AEROSPACE"] = "skill:pilot_aerospace";
    SKILL_ID["PILOT_AIRCRAFT"] = "skill:pilot_aircraft";
    SKILL_ID["PILOT_WALKER"] = "skill:pilot_walker";
    SKILL_ID["PILOT_EXOTIC_VEHICLE"] = "skill:pilot_exotic_vehicle";
    SKILL_ID["PILOT_GROUND_CRAFT"] = "skill:pilot_ground_craft";
    SKILL_ID["PILOT_WATERCRAFT"] = "skill:pilot_watercraft";
})(SKILL_ID || (SKILL_ID = {}));
var SKILL_CATEGORY_ID;
(function (SKILL_CATEGORY_ID) {
    SKILL_CATEGORY_ID["ACADEMIC"] = "sc:academic";
    SKILL_CATEGORY_ID["INTERESTS"] = "sc:interests";
    SKILL_CATEGORY_ID["PROFESSIONAL"] = "sc:professional";
    SKILL_CATEGORY_ID["STREET"] = "sc:street";
    SKILL_CATEGORY_ID["LANGUAGE"] = "sc:language";
})(SKILL_CATEGORY_ID || (SKILL_CATEGORY_ID = {}));
var SPELL_ID;
(function (SPELL_ID) {
    SPELL_ID["ACID_STREAM"] = "spell:acid_stream";
    SPELL_ID["TOXIC_WAVE"] = "spell:toxic_wave";
    SPELL_ID["PUNCH"] = "spell:punch";
    SPELL_ID["CLOUT"] = "spell:clout";
    SPELL_ID["BLAST"] = "spell:blast";
    SPELL_ID["DEATH_TOUCH"] = "spell:death_touch";
    SPELL_ID["MANABOLT"] = "spell:manabolt";
    SPELL_ID["MANABALL"] = "spell:manaball";
    SPELL_ID["FLAMETHROWER"] = "spell:flamethrower";
    SPELL_ID["FIREBALL"] = "spell:fireball";
    SPELL_ID["LIGHTNING_BOLT"] = "spell:lightning_bolt";
    SPELL_ID["BALL_LIGHTNING"] = "spell:ball_lightning";
    SPELL_ID["SHATTER"] = "spell:shatter";
    SPELL_ID["POWERBOLT"] = "spell:powerbolt";
    SPELL_ID["POWERBALL"] = "spell:powerball";
    SPELL_ID["KNOCKOUT"] = "spell:knockout";
    SPELL_ID["STUNBOLT"] = "spell:stunbolt";
    SPELL_ID["STUNBALL"] = "spell:stunball";
    SPELL_ID["ANALYZE_DEVICE"] = "spell:analyze_device";
    SPELL_ID["ANALYZE_MAGIC"] = "spell:analyze_magic";
    SPELL_ID["ANALYZE_TRUTH"] = "spell:analyze_truth";
    SPELL_ID["CLAIRAUDIENCE"] = "spell:clairaudience";
    SPELL_ID["CLAIRVOYANCE"] = "spell:clairvoyance";
    SPELL_ID["COMBAT_SENSE"] = "spell:combat_sense";
    SPELL_ID["DETECT_ENEMIES"] = "spell:detect_enemies";
    SPELL_ID["DETECT_ENEMIES_EXTENDED"] = "spell:detect_enemies_extended";
    SPELL_ID["DETECT_INDIVIDUAL"] = "spell:detect_individual";
    SPELL_ID["DETECT_LIFE"] = "spell:detect_life";
    SPELL_ID["DETECT_LIFE_EXTENDED"] = "spell:detect_life_extended";
    SPELL_ID["DETECT_LIFE_FORM"] = "spell:detect_life_form";
    SPELL_ID["DETECT_LIFE_FORM_EXTENDED"] = "spell:detect_life_form_extended";
    SPELL_ID["DETECT_MAGIC"] = "spell:detect_magic";
    SPELL_ID["DETECT_MAGIC_EXTENDED"] = "spell:detect_magic_extended";
    SPELL_ID["DETECT_OBJECT"] = "spell:detect_object";
    SPELL_ID["MINDLINK"] = "spell:mindlink";
    SPELL_ID["MIND_PROBE"] = "spell:mind_probe";
    SPELL_ID["ANTIDOTE"] = "spell:antidote";
    SPELL_ID["CURE_DISEASE"] = "spell:cure_disease";
    SPELL_ID["DECREASE_ATTRIBUTE"] = "spell:decrease_attribute";
    SPELL_ID["DETOX"] = "spell:detox";
    SPELL_ID["HEAL"] = "spell:heal";
    SPELL_ID["INCREASE_ATTRIBUTE"] = "spell:increase_attribute";
    SPELL_ID["INCREASE_REFLEXES"] = "spell:increase_reflexes";
    SPELL_ID["OXYGENATE"] = "spell:oxygenate";
    SPELL_ID["PROPHYLAXIS"] = "spell:prophylaxis";
    SPELL_ID["RESIST_PAIN"] = "spell:resist_pain";
    SPELL_ID["STABILIZE"] = "spell:stabilize";
    SPELL_ID["AGONY"] = "spell:agony";
    SPELL_ID["MASS_AGONY"] = "spell:mass_agony";
    SPELL_ID["BUGS"] = "spell:bugs";
    SPELL_ID["SWARM"] = "spell:swarm";
    SPELL_ID["CONFUSION"] = "spell:confusion";
    SPELL_ID["MASS_CONFUSION"] = "spell:mass_confusion";
    SPELL_ID["CHAOS"] = "spell:chaos";
    SPELL_ID["CHAOTIC_WORLD"] = "spell:chaotic_world";
    SPELL_ID["ENTERTAINMENT"] = "spell:entertainment";
    SPELL_ID["TRID_ENTERTAINMENT"] = "spell:trid_entertainment";
    SPELL_ID["INVISIBILITY"] = "spell:invisibility";
    SPELL_ID["IMPROVED_INVISIBILITY"] = "spell:improved_invisibility";
    SPELL_ID["MASK"] = "spell:mask";
    SPELL_ID["PHYSICAL_MASK"] = "spell:physical_mask";
    SPELL_ID["PHANTASM"] = "spell:phantasm";
    SPELL_ID["TRID_PHANTASM"] = "spell:trid_phantasm";
    SPELL_ID["HUSH"] = "spell:hush";
    SPELL_ID["SILENCE"] = "spell:silence";
    SPELL_ID["STEALTH"] = "spell:stealth";
    SPELL_ID["ANIMATE"] = "spell:animate";
    SPELL_ID["MASS_ANIMATE"] = "spell:mass_animate";
    SPELL_ID["ARMOR"] = "spell:armor";
    SPELL_ID["CONTROL_ACTIONS"] = "spell:control_actions";
    SPELL_ID["MOB_CONTROL"] = "spell:mob_control";
    SPELL_ID["CONTROL_THOUGHTS"] = "spell:control_thoughts";
    SPELL_ID["MOB_MIND"] = "spell:mob_mind";
    SPELL_ID["FLING"] = "spell:fling";
    SPELL_ID["ICE_SHEET"] = "spell:ice_sheet";
    SPELL_ID["IGNITE"] = "spell:ignite";
    SPELL_ID["INFLUENCE"] = "spell:influence";
    SPELL_ID["LEVITATE"] = "spell:levitate";
    SPELL_ID["LIGHT"] = "spell:light";
    SPELL_ID["MAGIC_FINGERS"] = "spell:magic_fingers";
    SPELL_ID["MANA_BARRIER"] = "spell:mana_barrier";
    SPELL_ID["PHYSICAL_BARRIER"] = "spell:physical_barrier";
    SPELL_ID["POLTERGEIST"] = "spell:poltergeist";
    SPELL_ID["SHADOW"] = "spell:shadow";
})(SPELL_ID || (SPELL_ID = {}));
var SPELL_CATEGORY_ID;
(function (SPELL_CATEGORY_ID) {
    SPELL_CATEGORY_ID[SPELL_CATEGORY_ID["COMBAT"] = 1] = "COMBAT";
    SPELL_CATEGORY_ID[SPELL_CATEGORY_ID["DETECTION"] = 2] = "DETECTION";
    SPELL_CATEGORY_ID[SPELL_CATEGORY_ID["HEALTH"] = 3] = "HEALTH";
    SPELL_CATEGORY_ID[SPELL_CATEGORY_ID["ILLUSION"] = 4] = "ILLUSION";
    SPELL_CATEGORY_ID[SPELL_CATEGORY_ID["MANIPULATION"] = 5] = "MANIPULATION";
})(SPELL_CATEGORY_ID || (SPELL_CATEGORY_ID = {}));
var SPELL_DAMAGE_ID;
(function (SPELL_DAMAGE_ID) {
    SPELL_DAMAGE_ID[SPELL_DAMAGE_ID["PHYSICAL"] = 1] = "PHYSICAL";
    SPELL_DAMAGE_ID[SPELL_DAMAGE_ID["STUN"] = 2] = "STUN";
})(SPELL_DAMAGE_ID || (SPELL_DAMAGE_ID = {}));
var SPELL_DURATION_ID;
(function (SPELL_DURATION_ID) {
    SPELL_DURATION_ID[SPELL_DURATION_ID["INSTANTANEOUS"] = 1] = "INSTANTANEOUS";
    SPELL_DURATION_ID[SPELL_DURATION_ID["SUSTAINED"] = 2] = "SUSTAINED";
    SPELL_DURATION_ID[SPELL_DURATION_ID["PERMANENT"] = 3] = "PERMANENT";
})(SPELL_DURATION_ID || (SPELL_DURATION_ID = {}));
var SPELL_KIND_ID;
(function (SPELL_KIND_ID) {
    SPELL_KIND_ID[SPELL_KIND_ID["SPELL"] = 1] = "SPELL";
    SPELL_KIND_ID[SPELL_KIND_ID["RITUAL"] = 2] = "RITUAL";
    SPELL_KIND_ID[SPELL_KIND_ID["PREPARATION"] = 3] = "PREPARATION";
    SPELL_KIND_ID[SPELL_KIND_ID["FETISH_SPELL"] = 4] = "FETISH_SPELL";
    SPELL_KIND_ID[SPELL_KIND_ID["FETISH_RITUAL"] = 5] = "FETISH_RITUAL";
})(SPELL_KIND_ID || (SPELL_KIND_ID = {}));
var SPELL_RANGE_ID;
(function (SPELL_RANGE_ID) {
    SPELL_RANGE_ID[SPELL_RANGE_ID["TOUCH"] = 1] = "TOUCH";
    SPELL_RANGE_ID[SPELL_RANGE_ID["LINE_OF_SIGHT"] = 2] = "LINE_OF_SIGHT";
    SPELL_RANGE_ID[SPELL_RANGE_ID["LINE_OF_SIGHT_AREA"] = 3] = "LINE_OF_SIGHT_AREA";
})(SPELL_RANGE_ID || (SPELL_RANGE_ID = {}));
var SPELL_TAG_ID;
(function (SPELL_TAG_ID) {
    SPELL_TAG_ID[SPELL_TAG_ID["DIRECT"] = 1] = "DIRECT";
    SPELL_TAG_ID[SPELL_TAG_ID["INDIRECT"] = 2] = "INDIRECT";
    SPELL_TAG_ID[SPELL_TAG_ID["ELEMENTAL_ACID"] = 3] = "ELEMENTAL_ACID";
    SPELL_TAG_ID[SPELL_TAG_ID["ELEMENTAL_COLD"] = 4] = "ELEMENTAL_COLD";
    SPELL_TAG_ID[SPELL_TAG_ID["ELEMENTAL_ELECTRICITY"] = 5] = "ELEMENTAL_ELECTRICITY";
    SPELL_TAG_ID[SPELL_TAG_ID["ELEMENTAL_FIRE"] = 6] = "ELEMENTAL_FIRE";
    SPELL_TAG_ID[SPELL_TAG_ID["ACTIVE"] = 7] = "ACTIVE";
    SPELL_TAG_ID[SPELL_TAG_ID["PASSIVE"] = 8] = "PASSIVE";
    SPELL_TAG_ID[SPELL_TAG_ID["DIRECTIONAL"] = 9] = "DIRECTIONAL";
    SPELL_TAG_ID[SPELL_TAG_ID["AREA"] = 10] = "AREA";
    SPELL_TAG_ID[SPELL_TAG_ID["EXTENDED_AREA"] = 11] = "EXTENDED_AREA";
    SPELL_TAG_ID[SPELL_TAG_ID["PSYCHIC"] = 12] = "PSYCHIC";
    SPELL_TAG_ID[SPELL_TAG_ID["ESSENCE"] = 13] = "ESSENCE";
    SPELL_TAG_ID[SPELL_TAG_ID["OBVIOUS"] = 14] = "OBVIOUS";
    SPELL_TAG_ID[SPELL_TAG_ID["REALISTIC"] = 15] = "REALISTIC";
    SPELL_TAG_ID[SPELL_TAG_ID["SINGLE_SENSE"] = 16] = "SINGLE_SENSE";
    SPELL_TAG_ID[SPELL_TAG_ID["MULTI_SENSE"] = 17] = "MULTI_SENSE";
    SPELL_TAG_ID[SPELL_TAG_ID["DAMAGING"] = 18] = "DAMAGING";
    SPELL_TAG_ID[SPELL_TAG_ID["ENVIRONMENTAL"] = 19] = "ENVIRONMENTAL";
    SPELL_TAG_ID[SPELL_TAG_ID["MENTAL"] = 20] = "MENTAL";
    SPELL_TAG_ID[SPELL_TAG_ID["PHYSICAL"] = 21] = "PHYSICAL";
})(SPELL_TAG_ID || (SPELL_TAG_ID = {}));
var SPELL_TYPE_ID;
(function (SPELL_TYPE_ID) {
    SPELL_TYPE_ID["PHYSICAL"] = "st:physical";
    SPELL_TYPE_ID["MANA"] = "st:mana";
})(SPELL_TYPE_ID || (SPELL_TYPE_ID = {}));
var SPIRIT_ID;
(function (SPIRIT_ID) {
    SPIRIT_ID["AIR"] = "spirit:air";
    SPIRIT_ID["BEAST"] = "spirit:beast";
    SPIRIT_ID["EARTH"] = "spirit:earth";
    SPIRIT_ID["FIRE"] = "spirit:fire";
    SPIRIT_ID["MAN"] = "spirit:man";
    SPIRIT_ID["WATER"] = "spirit:water";
})(SPIRIT_ID || (SPIRIT_ID = {}));


/***/ }),

/***/ 7804:
/*!**************************************************!*\
  !*** ./projects/shadowrun/src/app/5e/5e.gear.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GEAR_CATEGORIES": () => (/* binding */ GEAR_CATEGORIES),
/* harmony export */   "GEAR": () => (/* binding */ GEAR)
/* harmony export */ });
/* harmony import */ var _5e_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./5e.enums */ 8642);

const GEAR_CATEGORIES = [
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.CYBERDECK,
        name: 'Cyberdeck'
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.RCC,
        name: 'Rigger Command Console (RCC)'
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.FOCUS,
        name: 'Focus'
    },
];
const GEAR = [
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.ERIKA_MCD_1,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.CYBERDECK,
        name: 'Erika MCD-1',
        ratings: [1],
        formulas: {
            availability: (item) => 3,
            cost: (item) => 49500,
        },
        labels: {
            description: ''
        },
        data: { attributes: [4, 3, 2, 1], programs: 1 },
        restricted: true,
        forbidden: false
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.MICRODECK_SUMMIT,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.CYBERDECK,
        name: 'Microdeck Summit',
        ratings: [1],
        formulas: {
            availability: (item) => 3,
            cost: (item) => 58000,
        },
        labels: {
            description: ''
        },
        data: { attributes: [4, 3, 3, 1], programs: 1 },
        restricted: true,
        forbidden: false
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.MICROTRONICA_AZTECA_200,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.CYBERDECK,
        name: 'Microtronica Azteca 200',
        ratings: [2],
        formulas: {
            availability: (item) => 6,
            cost: (item) => 110250,
        },
        labels: {
            description: ''
        },
        data: { attributes: [5, 4, 3, 2], programs: 2 },
        restricted: true,
        forbidden: false
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.HERMES_CHARIOT,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.CYBERDECK,
        name: 'Hermes Chariot',
        ratings: [2],
        formulas: {
            availability: (item) => 6,
            cost: (item) => 123000,
        },
        labels: {
            description: ''
        },
        data: { attributes: [5, 4, 4, 2], programs: 2 },
        restricted: true,
        forbidden: false
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.NOVATECH_NAVIGATOR,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.CYBERDECK,
        name: 'Novatech Navigator',
        ratings: [3],
        formulas: {
            availability: (item) => 6,
            cost: (item) => 205750,
        },
        labels: {
            description: ''
        },
        data: { attributes: [6, 5, 4, 3], programs: 3 },
        restricted: true,
        forbidden: false
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.RENRAKU_TSURUGI,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.CYBERDECK,
        name: 'Renraku Tsurugi',
        ratings: [3],
        formulas: {
            availability: (item) => 9,
            cost: (item) => 214125,
        },
        labels: {
            description: ''
        },
        data: { attributes: [6, 5, 5, 3], programs: 3 },
        restricted: true,
        forbidden: false
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.SONY_CIY_720,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.CYBERDECK,
        name: 'Sony CIY-720',
        ratings: [4],
        formulas: {
            availability: (item) => 12,
            cost: (item) => 345000,
        },
        labels: {
            description: ''
        },
        data: { attributes: [7, 6, 5, 4], programs: 4 },
        restricted: true,
        forbidden: false
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.SHIAWASE_CYBER_5,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.CYBERDECK,
        name: 'Shiawase Cyber-5',
        ratings: [5],
        formulas: {
            availability: (item) => 15,
            cost: (item) => 549375,
        },
        labels: {
            description: ''
        },
        data: { attributes: [8, 7, 6, 5], programs: 5 },
        restricted: true,
        forbidden: false
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.FAIRLIGHT_EXCALIBUR,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.CYBERDECK,
        name: 'Fairlight Excalibur',
        ratings: [6],
        formulas: {
            availability: (item) => 18,
            cost: (item) => 823250,
        },
        labels: {
            description: ''
        },
        data: { attributes: [9, 8, 7, 6], programs: 6 },
        restricted: true,
        forbidden: false
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.SCRATCH_BUILT_JUNK,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.RCC,
        name: 'Scratch-Built Junk',
        ratings: [1],
        formulas: {
            availability: (item) => 2,
            cost: (item) => 1400,
        },
        labels: {
            description: ''
        },
        data: { data_processing: 3, firewall: 2 },
        restricted: true,
        forbidden: false
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.RADIO_SHACK_REMOTE_CONTROLLER,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.RCC,
        name: 'Radio Shack Remote Controller',
        ratings: [2],
        formulas: {
            availability: (item) => 6,
            cost: (item) => 8000,
        },
        labels: {
            description: ''
        },
        data: { data_processing: 3, firewall: 3 },
        restricted: true,
        forbidden: false
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.ESSY_MOTORS_DRONEMASTER,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.RCC,
        name: 'Essy Motors DroneMaster',
        ratings: [3],
        formulas: {
            availability: (item) => 6,
            cost: (item) => 16000,
        },
        labels: {
            description: ''
        },
        data: { data_processing: 4, firewall: 4 },
        restricted: true,
        forbidden: false
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.COMPUFORCE_TASKMASTER,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.RCC,
        name: 'CompuForce TaskMaster',
        ratings: [4],
        formulas: {
            availability: (item) => 8,
            cost: (item) => 32000,
        },
        labels: {
            description: ''
        },
        data: { data_processing: 5, firewall: 4 },
        restricted: true,
        forbidden: false
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.MAERSK_SPIDER,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.RCC,
        name: 'Maersk Spider',
        ratings: [4],
        formulas: {
            availability: (item) => 8,
            cost: (item) => 34000,
        },
        labels: {
            description: ''
        },
        data: { data_processing: 4, firewall: 5 },
        restricted: true,
        forbidden: false
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.MASER_INDUSTRIAL_ELECTRONICS,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.RCC,
        name: 'Maser Industrial Electronics',
        ratings: [5],
        formulas: {
            availability: (item) => 8,
            cost: (item) => 64000,
        },
        labels: {
            description: ''
        },
        data: { data_processing: 3, firewall: 4 },
        restricted: true,
        forbidden: false
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.VULCAN_LIEGELORD,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.RCC,
        name: 'Vulcan Liegelord',
        ratings: [5],
        formulas: {
            availability: (item) => 10,
            cost: (item) => 66000,
        },
        labels: {
            description: ''
        },
        data: { data_processing: 5, firewall: 6 },
        restricted: true,
        forbidden: false
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.PROTEUS_POSEIDON,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.RCC,
        name: 'Proteus Poseidon',
        ratings: [5],
        formulas: {
            availability: (item) => 12,
            cost: (item) => 68000,
        },
        labels: {
            description: ''
        },
        data: { data_processing: 5, firewall: 6 },
        restricted: true,
        forbidden: false
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.LONE_STAR_REMOTE_COMMANDER,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.RCC,
        name: 'Lone Star Remote Commander',
        ratings: [6],
        formulas: {
            availability: (item) => 14,
            cost: (item) => 75000,
        },
        labels: {
            description: ''
        },
        data: { data_processing: 6, firewall: 5 },
        restricted: true,
        forbidden: false
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.MCT_DRONE_WEB,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.RCC,
        name: 'MCT Drone Web',
        ratings: [6],
        formulas: {
            availability: (item) => 16,
            cost: (item) => 95000,
        },
        labels: {
            description: ''
        },
        data: { data_processing: 7, firewall: 6 },
        restricted: true,
        forbidden: false
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.TRIOX_UBERMENSCH,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.RCC,
        name: 'Triox UberMensch',
        ratings: [6],
        formulas: {
            availability: (item) => 18,
            cost: (item) => 140000,
        },
        labels: {
            description: ''
        },
        data: { data_processing: 8, firewall: 7 },
        restricted: true,
        forbidden: false
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.ENCHANTING_FOCUS,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.FOCUS,
        name: 'Enchanting Focus',
        ratings: [1, 12],
        formulas: {
            availability: (item) => item.rating * 3,
            cost: (item) => item.rating * 5000,
        },
        labels: {
            description: '',
            availability: 'Force x 3',
            cost: 'Force x 5000',
        },
        data: { data_processing: 8, firewall: 7 },
        restricted: true,
        forbidden: false,
        specialty: true,
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.METAMAGIC_FOCUS,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Metamagic Focus',
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.FOCUS,
        ratings: [1, 12],
        formulas: {
            availability: (item) => item.rating * 3,
            cost: (item) => item.rating * 9000
        },
        labels: {
            description: '',
            availability: 'Force x 3',
            cost: 'Force x 9000',
        },
        restricted: true,
        forbidden: false,
        specialty: true
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.POWER_FOCUS,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Power Focus',
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.FOCUS,
        ratings: [1, 12],
        formulas: {
            availability: (item) => item.rating * 4,
            cost: (item) => item.rating * 18000
        },
        labels: {
            description: 'Power foci live up to their name. They are very powerful foci that temporarily increase your effective Magic rating. That means they add to your Sorcery, Conjuring, and Enchanting dice pools, along with any other test where Magic is involved. Power foci can take any form, but for some reason, rings and amulets are quite popular.',
            availability: 'Force x 4',
            cost: 'Force x 18000',
        },
        restricted: true,
        forbidden: false
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.QI_FOCUS,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Qi Focus',
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.FOCUS,
        ratings: [1, 12],
        formulas: {
            availability: (item) => item.rating * 3,
            cost: (item) => item.rating * 3000
        },
        labels: {
            description: '',
            availability: 'Rating x 3',
            cost: 'Rating x 3000',
        },
        restricted: true,
        forbidden: false,
        specialty: true
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.SPELL_FOCUS,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Spell Focus',
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.FOCUS,
        ratings: [1, 12],
        formulas: {
            availability: (item) => item.rating * 3,
            cost: (item) => item.rating * 4000
        },
        labels: {
            description: '',
            availability: 'Rating x 3',
            cost: 'Rating x 4000',
        },
        restricted: true,
        forbidden: false,
        specialty: true
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.SPIRIT_FOCUS,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Spirit Focus',
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.FOCUS,
        ratings: [1, 12],
        formulas: {
            availability: (item) => item.rating * 3,
            cost: (item) => item.rating * 4000
        },
        labels: {
            description: '',
            availability: 'Rating x 3',
            cost: 'Rating x 4000',
        },
        restricted: true,
        forbidden: false,
        specialty: true
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.WEAPON_FOCUS,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Weapon Focus',
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.FOCUS,
        ratings: [1, 12],
        formulas: {
            availability: (item) => item.rating * 4,
            cost: (item) => item.rating * 7000
        },
        labels: {
            description: '',
            availability: 'Rating x 4',
            cost: 'Rating x 7000',
        },
        restricted: true,
        forbidden: false,
        specialty: true
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.ENCHANTING_FOCUS_FORMULA,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Focus Formula (Enchanting Focus)',
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.FOCUS,
        ratings: [1, 12],
        formulas: {
            availability: (item) => item.rating * 3,
            cost: (item) => item.rating * 1250
        },
        labels: {
            description: '',
            availability: 'Rating x 3',
            cost: 'Rating x 9000',
        },
        restricted: true,
        forbidden: false,
        specialty: true
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.METAMAGIC_FOCUS_FORMULA,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Focus Formula (Metamagic Focus)',
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.FOCUS,
        ratings: [1, 12],
        formulas: {
            availability: (item) => item.rating * 3,
            cost: (item) => item.rating * 2250
        },
        labels: {
            description: '',
            availability: 'Rating x 3',
            cost: 'Rating x 9000',
        },
        restricted: true,
        forbidden: false,
        specialty: true
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.POWER_FOCUS_FORMULA,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Focus Formula (Power Focus)',
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.FOCUS,
        ratings: [1, 12],
        formulas: {
            availability: (item) => item.rating * 4,
            cost: (item) => item.rating * 4500
        },
        labels: {
            description: '',
            availability: 'Rating x 3',
            cost: 'Rating x 9000',
        },
        restricted: true,
        forbidden: false,
        specialty: true
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.QI_FOCUS_FORMULA,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Focus Formula (Qi Focus)',
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.FOCUS,
        ratings: [1, 12],
        formulas: {
            availability: (item) => item.rating * 3,
            cost: (item) => item.rating * 750
        },
        labels: {
            description: '',
            availability: 'Rating x 3',
            cost: 'Rating x 9000',
        },
        restricted: true,
        forbidden: false,
        specialty: true
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.SPELL_FOCUS_FORMULA,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Focus Formula (Spell Focus)',
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.FOCUS,
        ratings: [1, 12],
        formulas: {
            availability: (item) => item.rating * 3,
            cost: (item) => item.rating * 1000
        },
        labels: {
            description: '',
            availability: 'Rating x 3',
            cost: 'Rating x 9000',
        },
        restricted: true,
        forbidden: false,
        specialty: true
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.SPIRIT_FOCUS_FORMULA,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Focus Formula (Spirit Focus)',
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.FOCUS,
        ratings: [1, 12],
        formulas: {
            availability: (item) => item.rating * 3,
            cost: (item) => item.rating * 1000
        },
        labels: {
            description: '',
            availability: 'Rating x 3',
            cost: 'Rating x 9000',
        },
        restricted: true,
        forbidden: false,
        specialty: true
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.WEAPON_FOCUS_FORMULA,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Focus Formula (Weapon Focus)',
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.FOCUS,
        ratings: [1, 12],
        formulas: {
            availability: (item) => item.rating * 4,
            cost: (item) => item.rating * 1750
        },
        labels: {
            description: '',
            availability: 'Rating x 3',
            cost: 'Rating x 9000',
        },
        restricted: true,
        forbidden: false,
        specialty: true
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.COMBAT_SPELL_FORMULA,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Spell Formula (Combat Spell)',
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.FOCUS,
        ratings: [1],
        formulas: {
            availability: (item) => 8,
            cost: (item) => 2000
        },
        labels: {
            description: '',
            availability: 'Rating x 3',
            cost: 'Rating x 9000',
        },
        restricted: true,
        forbidden: false,
        specialty: true
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.DETECTION_SPELL_FORMULA,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Spell Formula (Detection Spell)',
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.FOCUS,
        ratings: [1],
        formulas: {
            availability: (item) => 4,
            cost: (item) => 500
        },
        labels: {
            description: '',
            availability: 'Rating x 3',
            cost: 'Rating x 9000',
        },
        restricted: true,
        forbidden: false,
        specialty: true
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.HEALTH_SPELL_FORMULA,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Spell Formula (Health Spell)',
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.FOCUS,
        ratings: [1],
        formulas: {
            availability: (item) => 4,
            cost: (item) => 500
        },
        labels: {
            description: '',
            availability: 'Rating x 3',
            cost: 'Rating x 9000',
        },
        restricted: true,
        forbidden: false,
        specialty: true
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.ILLUSION_SPELL_FORMULA,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Spell Formula (Illusion Spell)',
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.FOCUS,
        ratings: [1],
        formulas: {
            availability: (item) => 8,
            cost: (item) => 1000
        },
        labels: {
            description: '',
            availability: 'Rating x 3',
            cost: 'Rating x 9000',
        },
        restricted: true,
        forbidden: false,
        specialty: true
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.MANIPULATION_SPELL_FORMULA,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Spell Formula (Manipulation Spell)',
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.FOCUS,
        ratings: [1],
        formulas: {
            availability: (item) => 8,
            cost: (item) => 1500
        },
        labels: {
            description: '',
            availability: 'Rating x 3',
            cost: 'Rating x 9000',
        },
        restricted: true,
        forbidden: false,
        specialty: true
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.COMBAT_SPELL_FORMULA,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Spell Formula (Combat Spell)',
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.FOCUS,
        ratings: [1, 12],
        formulas: {
            availability: (item) => item.rating * 3,
            cost: (item) => item.rating * 9000
        },
        labels: {
            description: '',
            availability: 'Rating x 3',
            cost: 'Rating x 9000',
        },
        restricted: true,
        forbidden: false,
        specialty: true
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.MAGICAL_LODGE_MATERIALS,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Magical Lodge Materials',
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.MAGIC_SUPPLIES,
        ratings: [1, 12],
        formulas: {
            availability: (item) => item.rating * 2,
            cost: (item) => item.rating * 500
        },
        labels: {
            description: '',
            availability: 'Force x 2',
            cost: 'Force x 500',
        },
        restricted: true,
        forbidden: false
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.REAGENTS,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Reagents',
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.MAGIC_SUPPLIES,
        ratings: [0],
        formulas: {
            availability: (item) => 0,
            cost: (item) => 20
        },
        labels: {
            description: '',
            availability: '-',
            cost: '20',
        },
        restricted: false,
        forbidden: false
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.CS_TEAR_GAS,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'CS / Tear Gas',
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.TOXIN,
        ratings: [0],
        formulas: {
            availability: (item) => 4,
            cost: (item) => 20
        },
        labels: {
            description: '',
            availability: '4R',
            cost: '20',
        },
        restricted: true,
        forbidden: false
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.GAMMA_SCOPOLAMINE,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Gamma-Scopolamine',
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.TOXIN,
        ratings: [0],
        formulas: {
            availability: (item) => 14,
            cost: (item) => 200
        },
        labels: {
            description: '',
            availability: '14F',
            cost: '200',
        },
        restricted: false,
        forbidden: true
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.NARCOJET,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Narcojet',
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.TOXIN,
        ratings: [0],
        formulas: {
            availability: (item) => 8,
            cost: (item) => 50
        },
        labels: {
            description: '',
            availability: '8R',
            cost: '50',
        },
        restricted: true,
        forbidden: false
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.NAUSEA_GAS,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Nausea Gas',
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.TOXIN,
        ratings: [0],
        formulas: {
            availability: (item) => 6,
            cost: (item) => 25
        },
        labels: {
            description: '',
            availability: '6R',
            cost: '25',
        },
        restricted: true,
        forbidden: false
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.NEURO_STUN_VIII,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Neuro-Stun VIII',
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.TOXIN,
        ratings: [0],
        formulas: {
            availability: (item) => 12,
            cost: (item) => 60
        },
        labels: {
            description: '',
            availability: '12',
            cost: '60'
        },
        restricted: true,
        forbidden: false
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.NEURO_STUN_IX,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Neuro-Stun IX',
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.TOXIN,
        ratings: [0],
        formulas: {
            availability: (item) => 13,
            cost: (item) => 60
        },
        labels: {
            description: '',
            availability: '13R',
            cost: '60'
        },
        restricted: true,
        forbidden: false
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.NEURO_STUN_X,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Neuro-Stun X',
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.TOXIN,
        ratings: [0],
        formulas: {
            availability: (item) => 14,
            cost: (item) => 100
        },
        labels: {
            description: '',
            availability: '14R',
            cost: '100'
        },
        restricted: true,
        forbidden: false
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.PEPPER_PUNCH,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Pepper Punch',
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.TOXIN,
        ratings: [0],
        formulas: {
            availability: (item) => 0,
            cost: (item) => 5
        },
        labels: {
            description: '',
            availability: '-',
            cost: '5'
        },
        restricted: false,
        forbidden: false
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.SEVEN_7,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Seven 7',
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.TOXIN,
        ratings: [0],
        formulas: {
            availability: (item) => 20,
            cost: (item) => 1000
        },
        labels: {
            description: '',
            availability: '20F',
            cost: '1000'
        },
        restricted: false,
        forbidden: true
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.BLISS,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Bliss',
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.DRUG,
        ratings: [0],
        formulas: {
            availability: (item) => 3,
            cost: (item) => 15
        },
        labels: {
            description: '',
            availability: '3F',
            cost: '15',
        },
        restricted: false,
        forbidden: true
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.CRAM,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Cram',
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.DRUG,
        ratings: [0],
        formulas: {
            availability: (item) => 2,
            cost: (item) => 10
        },
        labels: {
            description: '',
            availability: '2R',
            cost: '10',
        },
        restricted: true,
        forbidden: false
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.DEEPWEED,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Deepweed',
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.DRUG,
        ratings: [0],
        formulas: {
            availability: (item) => 8,
            cost: (item) => 400
        },
        labels: {
            description: '',
            availability: '8F',
            cost: '400',
        },
        restricted: false,
        forbidden: true
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.JAZZ,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Jazz',
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.DRUG,
        ratings: [0],
        formulas: {
            availability: (item) => 2,
            cost: (item) => 75
        },
        labels: {
            description: '',
            availability: '2R',
            cost: '75',
        },
        restricted: true,
        forbidden: false
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.KAMIKAZE,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Kamikaze',
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.DRUG,
        ratings: [0],
        formulas: {
            availability: (item) => 4,
            cost: (item) => 100
        },
        labels: {
            description: '',
            availability: '4R',
            cost: '100',
        },
        restricted: true,
        forbidden: false
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.LONG_HAUL,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Long Haul',
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.DRUG,
        ratings: [0],
        formulas: {
            availability: (item) => 0,
            cost: (item) => 50
        },
        labels: {
            description: '',
            availability: '-',
            cost: '50',
        },
        restricted: false,
        forbidden: false
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.NITRO,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Nitro',
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.DRUG,
        ratings: [0],
        formulas: {
            availability: (item) => 2,
            cost: (item) => 50
        },
        labels: {
            description: '',
            availability: '2R',
            cost: '50',
        },
        restricted: true,
        forbidden: false
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.NOVACOKE,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Novacoke',
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.DRUG,
        ratings: [0],
        formulas: {
            availability: (item) => 2,
            cost: (item) => 10
        },
        labels: {
            description: '',
            availability: '2R',
            cost: '10',
        },
        restricted: true,
        forbidden: false
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.PSYCHE,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Psyche',
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.DRUG,
        ratings: [0],
        formulas: {
            availability: (item) => 0,
            cost: (item) => 200
        },
        labels: {
            description: '',
            availability: '-',
            cost: '200',
        },
        restricted: false,
        forbidden: false
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.ZEN,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Zen',
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.DRUG,
        ratings: [0],
        formulas: {
            availability: (item) => 4,
            cost: (item) => 5
        },
        labels: {
            description: '',
            availability: '4R',
            cost: '5',
        },
        restricted: true,
        forbidden: false
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.DREAMCHIP,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Dreamchip',
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.BTL,
        ratings: [0],
        formulas: {
            availability: (item) => 4,
            cost: (item) => 20
        },
        labels: {
            description: 'Dreamchips are standard simsense recordings modified to produce BTL output. These might be studio-produced sims that are doctored up, or street recordings that offer a personal, intense glimpse into someone’s life. Popular themes are heroic fantasies, recorded crimes, and pornography, with hardcore violence and snuff chips serving the most jaded appetites.',
            availability: '4F',
            cost: '20',
        },
        restricted: false,
        forbidden: true
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.MOODCHIP,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Reagents',
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.BTL,
        ratings: [0],
        formulas: {
            availability: (item) => 4,
            cost: (item) => 50
        },
        labels: {
            description: '',
            availability: '4F',
            cost: '50',
        },
        restricted: false,
        forbidden: true
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.PERSONAFIX,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Personafix',
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.BTL,
        ratings: [0],
        formulas: {
            availability: (item) => 4,
            cost: (item) => 200
        },
        labels: {
            description: '',
            availability: '4F',
            cost: '200',
        },
        restricted: false,
        forbidden: true
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.TRIPCHIP,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Tripship',
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.BTL,
        ratings: [0],
        formulas: {
            availability: (item) => 4,
            cost: (item) => 100
        },
        labels: {
            description: 'Tripchips are like moodchips, primarily producing sensory output, flooding the user with interesting and unusual sensations. These can be simple effects, or they can be advanced sensations such as simulating being underwater. The latest craze is deliberately induced synaesthesia with jacked-up sensory levels and the RAS override disabled, allowing users to experience their surroundings in an entirely new way.',
            availability: '4F',
            cost: '100',
        },
        restricted: false,
        forbidden: true
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.COMBAT_AXE,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Combat Axe',
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.MELEE_WEAPONS,
        ratings: [0],
        formulas: {
            availability: (item) => 12,
            cost: (item) => 4000
        },
        labels: {
            description: '',
            availability: '12R',
            cost: '4000',
        },
        restricted: true,
        forbidden: false
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_ID.COMBAT_KNIFE,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Combat Knife',
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.GEAR_TYPE_ID.MELEE_WEAPONS,
        ratings: [0],
        formulas: {
            availability: (item) => 4,
            cost: (item) => 300
        },
        labels: {
            description: '',
            availability: '4',
            cost: '300',
        },
        restricted: false,
        forbidden: false
    },
];


/***/ }),

/***/ 8201:
/*!*******************************************************!*\
  !*** ./projects/shadowrun/src/app/5e/5e.lifestyle.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LIFESTYLES": () => (/* binding */ LIFESTYLES),
/* harmony export */   "LIFESTYLE_OPTIONS": () => (/* binding */ LIFESTYLE_OPTIONS)
/* harmony export */ });
/* harmony import */ var _5e_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./5e.enums */ 8642);

const LIFESTYLES = [
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.LIFESTYLE_ID.STREETS,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Streets',
        cost: 0
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.LIFESTYLE_ID.SQUATTER,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Squatter',
        cost: 500
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.LIFESTYLE_ID.LOW,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Low',
        cost: 2000
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.LIFESTYLE_ID.MIDDLE,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Middle',
        cost: 5000
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.LIFESTYLE_ID.HIGH,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'High',
        cost: 10000
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.LIFESTYLE_ID.LUXURY,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Luxury',
        cost: 100000
    }
];
const LIFESTYLE_OPTIONS = [
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.LIFESTYLE_OPTION_ID.SPECIAL_WORK_AREA,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Special Work Area',
        cost: (cost) => 1000
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.LIFESTYLE_OPTION_ID.EXTRA_SECURE,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Extra Secure',
        cost: (cost) => cost * 0.2
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.LIFESTYLE_OPTION_ID.OBSCURE_DIFFICULT_TO_FIND,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Obscure / Difficult to Find',
        cost: (cost) => cost * 0.1
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.LIFESTYLE_OPTION_ID.CRAMPED,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Cramped',
        cost: (cost) => -cost * 0.1
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.LIFESTYLE_OPTION_ID.DANGEROUS_AREA,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Dangerous Area',
        cost: (cost) => -cost * 0.2
    },
];


/***/ }),

/***/ 6369:
/*!*******************************************************!*\
  !*** ./projects/shadowrun/src/app/5e/5e.metamagic.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "METAMAGIC": () => (/* binding */ METAMAGIC)
/* harmony export */ });
const METAMAGIC = [];


/***/ }),

/***/ 3705:
/*!*******************************************************!*\
  !*** ./projects/shadowrun/src/app/5e/5e.metatypes.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "METATYPES": () => (/* binding */ METATYPES)
/* harmony export */ });
/* harmony import */ var _shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shadowrun/app/5e/5e.enums */ 8642);

const METATYPES = [
    {
        id: _shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.METATYPE_ID.HUMAN,
        book: _shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Human',
        qualities: [],
        attributes: {
            [_shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.BODY]: [1, 6],
            [_shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.AGILITY]: [1, 6],
            [_shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.REACTION]: [1, 6],
            [_shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.STRENGTH]: [1, 6],
            [_shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.WILLPOWER]: [1, 6],
            [_shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.LOGIC]: [1, 6],
            [_shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.INTUITION]: [1, 6],
            [_shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.CHARISMA]: [1, 6],
            [_shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.EDGE]: [2, 7],
            [_shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.ESSENCE]: [6, 6]
        },
        cost: 0
    },
    {
        id: _shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.METATYPE_ID.DWARF,
        book: _shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Dwarf',
        qualities: [
            { id: _shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.RACIAL_THERMOGRAPHIC_VISION, rating: 0, specialty: null },
            { id: _shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.RACIAL_PATHOGENS_RESISTANCE, rating: 0, specialty: null },
            { id: _shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.RACIAL_LIFESTYLE, rating: 0, specialty: null }
        ],
        attributes: {
            [_shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.BODY]: [3, 8],
            [_shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.AGILITY]: [1, 6],
            [_shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.REACTION]: [1, 5],
            [_shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.STRENGTH]: [3, 8],
            [_shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.WILLPOWER]: [2, 7],
            [_shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.LOGIC]: [1, 6],
            [_shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.INTUITION]: [1, 6],
            [_shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.CHARISMA]: [1, 6],
            [_shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.EDGE]: [1, 6],
            [_shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.ESSENCE]: [6, 6]
        },
        cost: 50
    },
    {
        id: _shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.METATYPE_ID.ELF,
        book: _shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Elf',
        qualities: [
            { id: _shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.RACIAL_LOW_LIGHT_VISION, rating: 0, specialty: null }
        ],
        attributes: {
            [_shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.BODY]: [1, 6],
            [_shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.AGILITY]: [2, 7],
            [_shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.REACTION]: [1, 6],
            [_shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.STRENGTH]: [1, 6],
            [_shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.WILLPOWER]: [1, 6],
            [_shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.LOGIC]: [1, 6],
            [_shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.INTUITION]: [1, 6],
            [_shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.CHARISMA]: [3, 8],
            [_shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.EDGE]: [1, 6],
            [_shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.ESSENCE]: [6, 6]
        },
        cost: 40
    },
    {
        id: _shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.METATYPE_ID.ORK,
        book: _shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Ork',
        qualities: [
            { id: _shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.RACIAL_LOW_LIGHT_VISION, rating: 0, specialty: null }
        ],
        attributes: {
            [_shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.BODY]: [4, 9],
            [_shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.AGILITY]: [1, 6],
            [_shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.REACTION]: [1, 6],
            [_shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.STRENGTH]: [3, 8],
            [_shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.WILLPOWER]: [1, 6],
            [_shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.LOGIC]: [1, 5],
            [_shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.INTUITION]: [1, 6],
            [_shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.CHARISMA]: [1, 5],
            [_shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.EDGE]: [1, 6],
            [_shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.ESSENCE]: [6, 6]
        },
        cost: 50
    },
    {
        id: _shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.METATYPE_ID.TROLL,
        book: _shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Troll',
        qualities: [
            { id: _shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.RACIAL_THERMOGRAPHIC_VISION, rating: 0, specialty: null },
            { id: _shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.RACIAL_REACH, rating: 0, specialty: null },
            { id: _shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.RACIAL_DERMAL_ARMOR, rating: 0, specialty: null },
            { id: _shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.RACIAL_LIFESTYLE, rating: 1, specialty: null }
        ],
        attributes: {
            [_shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.BODY]: [5, 10],
            [_shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.AGILITY]: [1, 5],
            [_shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.REACTION]: [1, 6],
            [_shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.STRENGTH]: [5, 10],
            [_shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.WILLPOWER]: [1, 6],
            [_shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.LOGIC]: [1, 5],
            [_shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.INTUITION]: [1, 5],
            [_shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.CHARISMA]: [1, 4],
            [_shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.EDGE]: [1, 6],
            [_shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.ESSENCE]: [6, 6]
        },
        cost: 90
    }
];


/***/ }),

/***/ 6060:
/*!****************************************************!*\
  !*** ./projects/shadowrun/src/app/5e/5e.models.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _5e_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./5e.enums */ 8642);



/***/ }),

/***/ 6789:
/*!****************************************************!*\
  !*** ./projects/shadowrun/src/app/5e/5e.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FifthEditionModule": () => (/* binding */ FifthEditionModule)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared */ 8454);
/* harmony import */ var _shadowrun_app_ui_ui_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shadowrun/app/ui/ui.module */ 7682);
/* harmony import */ var _5e_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./5e.service */ 9300);
/* harmony import */ var _components_create_pc_attributes_create_pc_attributes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/create-pc-attributes/create-pc-attributes.component */ 4491);
/* harmony import */ var _components_create_pc_skills_create_pc_skills_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/create-pc-skills/create-pc-skills.component */ 3252);
/* harmony import */ var _components_create_pc_knowledge_create_pc_knowledge_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/create-pc-knowledge/create-pc-knowledge.component */ 484);
/* harmony import */ var _components_create_pc_qualities_create_pc_qualities_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/create-pc-qualities/create-pc-qualities.component */ 6133);
/* harmony import */ var _components_create_pc_contacts_create_pc_contacts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/create-pc-contacts/create-pc-contacts.component */ 1467);
/* harmony import */ var _components_create_pc_spells_create_pc_spells_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/create-pc-spells/create-pc-spells.component */ 5303);
/* harmony import */ var _components_create_pc_complex_forms_create_pc_complex_forms_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/create-pc-complex-forms/create-pc-complex-forms.component */ 9571);
/* harmony import */ var _components_create_pc_adept_powers_create_pc_adept_powers_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/create-pc-adept-powers/create-pc-adept-powers.component */ 5916);
/* harmony import */ var _components_create_pc_gear_create_pc_gear_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/create-pc-gear/create-pc-gear.component */ 5748);
/* harmony import */ var _components_create_pc_ware_create_pc_ware_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/create-pc-ware/create-pc-ware.component */ 2363);
/* harmony import */ var _components_create_pc_lifestyle_create_pc_lifestyle_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/create-pc-lifestyle/create-pc-lifestyle.component */ 7183);
/* harmony import */ var _components_create_pc_final_calculations_create_pc_final_calculations_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/create-pc-final-calculations/create-pc-final-calculations.component */ 425);
/* harmony import */ var _components_view_spells_view_spells_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/view-spells/view-spells.component */ 261);
/* harmony import */ var _components_view_attributes_view_attributes_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/view-attributes/view-attributes.component */ 5849);
/* harmony import */ var _components_view_skills_view_skills_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/view-skills/view-skills.component */ 9749);
/* harmony import */ var _components_view_qualities_view_qualities_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/view-qualities/view-qualities.component */ 6625);
/* harmony import */ var _components_view_general_view_general_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/view-general/view-general.component */ 4485);
/* harmony import */ var _components_view_complex_forms_view_complex_forms_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/view-complex-forms/view-complex-forms.component */ 7582);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 2316);






















const DECLARATIONS = [
    _components_create_pc_adept_powers_create_pc_adept_powers_component__WEBPACK_IMPORTED_MODULE_10__.CreatePcAdeptPowersComponent,
    _components_create_pc_attributes_create_pc_attributes_component__WEBPACK_IMPORTED_MODULE_3__.CreatePcAttributesComponent,
    _components_create_pc_complex_forms_create_pc_complex_forms_component__WEBPACK_IMPORTED_MODULE_9__.CreatePcComplexFormsComponent,
    _components_create_pc_contacts_create_pc_contacts_component__WEBPACK_IMPORTED_MODULE_7__.CreatePcContactsComponent,
    _components_create_pc_gear_create_pc_gear_component__WEBPACK_IMPORTED_MODULE_11__.CreatePcGearComponent,
    _components_create_pc_knowledge_create_pc_knowledge_component__WEBPACK_IMPORTED_MODULE_5__.CreatePcKnowledgeComponent,
    _components_create_pc_lifestyle_create_pc_lifestyle_component__WEBPACK_IMPORTED_MODULE_13__.CreatePcLifestyleComponent,
    _components_create_pc_qualities_create_pc_qualities_component__WEBPACK_IMPORTED_MODULE_6__.CreatePcQualitiesComponent,
    _components_create_pc_skills_create_pc_skills_component__WEBPACK_IMPORTED_MODULE_4__.CreatePcSkillsComponent,
    _components_create_pc_spells_create_pc_spells_component__WEBPACK_IMPORTED_MODULE_8__.CreatePcSpellsComponent,
    _components_create_pc_ware_create_pc_ware_component__WEBPACK_IMPORTED_MODULE_12__.CreatePcWareComponent,
    _components_create_pc_final_calculations_create_pc_final_calculations_component__WEBPACK_IMPORTED_MODULE_14__.CreatePcFinalCalculationsComponent,
    _components_view_attributes_view_attributes_component__WEBPACK_IMPORTED_MODULE_16__.ViewAttributesComponent,
    _components_view_complex_forms_view_complex_forms_component__WEBPACK_IMPORTED_MODULE_20__.ViewComplexFormsComponent,
    _components_view_general_view_general_component__WEBPACK_IMPORTED_MODULE_19__.ViewGeneralComponent,
    _components_view_qualities_view_qualities_component__WEBPACK_IMPORTED_MODULE_18__.ViewQualitiesComponent,
    _components_view_skills_view_skills_component__WEBPACK_IMPORTED_MODULE_17__.ViewSkillsComponent,
    _components_view_spells_view_spells_component__WEBPACK_IMPORTED_MODULE_15__.ViewSpellsComponent
];
class FifthEditionModule {
}
FifthEditionModule.ɵfac = function FifthEditionModule_Factory(t) { return new (t || FifthEditionModule)(); };
FifthEditionModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineNgModule"]({ type: FifthEditionModule });
FifthEditionModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjector"]({ providers: [_5e_service__WEBPACK_IMPORTED_MODULE_2__.FifthEditionService], imports: [[_shared__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _shadowrun_app_ui_ui_module__WEBPACK_IMPORTED_MODULE_1__.UiModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsetNgModuleScope"](FifthEditionModule, { declarations: [_components_create_pc_adept_powers_create_pc_adept_powers_component__WEBPACK_IMPORTED_MODULE_10__.CreatePcAdeptPowersComponent,
        _components_create_pc_attributes_create_pc_attributes_component__WEBPACK_IMPORTED_MODULE_3__.CreatePcAttributesComponent,
        _components_create_pc_complex_forms_create_pc_complex_forms_component__WEBPACK_IMPORTED_MODULE_9__.CreatePcComplexFormsComponent,
        _components_create_pc_contacts_create_pc_contacts_component__WEBPACK_IMPORTED_MODULE_7__.CreatePcContactsComponent,
        _components_create_pc_gear_create_pc_gear_component__WEBPACK_IMPORTED_MODULE_11__.CreatePcGearComponent,
        _components_create_pc_knowledge_create_pc_knowledge_component__WEBPACK_IMPORTED_MODULE_5__.CreatePcKnowledgeComponent,
        _components_create_pc_lifestyle_create_pc_lifestyle_component__WEBPACK_IMPORTED_MODULE_13__.CreatePcLifestyleComponent,
        _components_create_pc_qualities_create_pc_qualities_component__WEBPACK_IMPORTED_MODULE_6__.CreatePcQualitiesComponent,
        _components_create_pc_skills_create_pc_skills_component__WEBPACK_IMPORTED_MODULE_4__.CreatePcSkillsComponent,
        _components_create_pc_spells_create_pc_spells_component__WEBPACK_IMPORTED_MODULE_8__.CreatePcSpellsComponent,
        _components_create_pc_ware_create_pc_ware_component__WEBPACK_IMPORTED_MODULE_12__.CreatePcWareComponent,
        _components_create_pc_final_calculations_create_pc_final_calculations_component__WEBPACK_IMPORTED_MODULE_14__.CreatePcFinalCalculationsComponent,
        _components_view_attributes_view_attributes_component__WEBPACK_IMPORTED_MODULE_16__.ViewAttributesComponent,
        _components_view_complex_forms_view_complex_forms_component__WEBPACK_IMPORTED_MODULE_20__.ViewComplexFormsComponent,
        _components_view_general_view_general_component__WEBPACK_IMPORTED_MODULE_19__.ViewGeneralComponent,
        _components_view_qualities_view_qualities_component__WEBPACK_IMPORTED_MODULE_18__.ViewQualitiesComponent,
        _components_view_skills_view_skills_component__WEBPACK_IMPORTED_MODULE_17__.ViewSkillsComponent,
        _components_view_spells_view_spells_component__WEBPACK_IMPORTED_MODULE_15__.ViewSpellsComponent], imports: [_shared__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _shadowrun_app_ui_ui_module__WEBPACK_IMPORTED_MODULE_1__.UiModule], exports: [_components_create_pc_adept_powers_create_pc_adept_powers_component__WEBPACK_IMPORTED_MODULE_10__.CreatePcAdeptPowersComponent,
        _components_create_pc_attributes_create_pc_attributes_component__WEBPACK_IMPORTED_MODULE_3__.CreatePcAttributesComponent,
        _components_create_pc_complex_forms_create_pc_complex_forms_component__WEBPACK_IMPORTED_MODULE_9__.CreatePcComplexFormsComponent,
        _components_create_pc_contacts_create_pc_contacts_component__WEBPACK_IMPORTED_MODULE_7__.CreatePcContactsComponent,
        _components_create_pc_gear_create_pc_gear_component__WEBPACK_IMPORTED_MODULE_11__.CreatePcGearComponent,
        _components_create_pc_knowledge_create_pc_knowledge_component__WEBPACK_IMPORTED_MODULE_5__.CreatePcKnowledgeComponent,
        _components_create_pc_lifestyle_create_pc_lifestyle_component__WEBPACK_IMPORTED_MODULE_13__.CreatePcLifestyleComponent,
        _components_create_pc_qualities_create_pc_qualities_component__WEBPACK_IMPORTED_MODULE_6__.CreatePcQualitiesComponent,
        _components_create_pc_skills_create_pc_skills_component__WEBPACK_IMPORTED_MODULE_4__.CreatePcSkillsComponent,
        _components_create_pc_spells_create_pc_spells_component__WEBPACK_IMPORTED_MODULE_8__.CreatePcSpellsComponent,
        _components_create_pc_ware_create_pc_ware_component__WEBPACK_IMPORTED_MODULE_12__.CreatePcWareComponent,
        _components_create_pc_final_calculations_create_pc_final_calculations_component__WEBPACK_IMPORTED_MODULE_14__.CreatePcFinalCalculationsComponent,
        _components_view_attributes_view_attributes_component__WEBPACK_IMPORTED_MODULE_16__.ViewAttributesComponent,
        _components_view_complex_forms_view_complex_forms_component__WEBPACK_IMPORTED_MODULE_20__.ViewComplexFormsComponent,
        _components_view_general_view_general_component__WEBPACK_IMPORTED_MODULE_19__.ViewGeneralComponent,
        _components_view_qualities_view_qualities_component__WEBPACK_IMPORTED_MODULE_18__.ViewQualitiesComponent,
        _components_view_skills_view_skills_component__WEBPACK_IMPORTED_MODULE_17__.ViewSkillsComponent,
        _components_view_spells_view_spells_component__WEBPACK_IMPORTED_MODULE_15__.ViewSpellsComponent] }); })();


/***/ }),

/***/ 4411:
/*!****************************************************!*\
  !*** ./projects/shadowrun/src/app/5e/5e.powers.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "POWERS": () => (/* binding */ POWERS)
/* harmony export */ });
/* harmony import */ var _5e_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./5e.enums */ 8642);

const POWERS = [
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.POWER_ID.ACCIDENT,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Accident',
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.POWER_TYPE_ID.PHYSICAL,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.POWER_RANGE_ID.LINE_OF_SIGHT,
        action: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.POWER_ACTION_ID.COMPLEX,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.POWER_DURATION_ID.INSTANT,
        labels: {
            description: ''
        }
    }
];


/***/ }),

/***/ 9925:
/*!*******************************************************!*\
  !*** ./projects/shadowrun/src/app/5e/5e.qualities.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RACIAL_QUALITIES": () => (/* binding */ RACIAL_QUALITIES),
/* harmony export */   "POSITIVE_QUALITIES": () => (/* binding */ POSITIVE_QUALITIES),
/* harmony export */   "NEGATIVE_QUALITIES": () => (/* binding */ NEGATIVE_QUALITIES)
/* harmony export */ });
/* harmony import */ var _5e_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./5e.enums */ 8642);
/* harmony import */ var _shadowrun_app_5e_5e_skills__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shadowrun/app/5e/5e.skills */ 9818);
/* harmony import */ var _shadowrun_app_5e_5e_attributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shadowrun/app/5e/5e.attributes */ 2582);



const RACIAL_QUALITIES = [
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.RACIAL_LOW_LIGHT_VISION,
        name: 'Low Light Vision',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [{ name: '', cost: 0 }],
        multiple: false,
        specialty: false,
        formulas: null,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.RACIAL_THERMOGRAPHIC_VISION,
        name: 'Thermographic Vision',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [{ name: '', cost: 0 }],
        multiple: false,
        specialty: false,
        formulas: null,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.RACIAL_PATHOGENS_RESISTANCE,
        name: 'Pathogen & Toxin Resistance',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [{ name: '+2 Dice', cost: 0 }],
        multiple: false,
        specialty: false,
        formulas: null,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.RACIAL_REACH,
        name: 'Reach',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [{ name: '+1', cost: 0 }],
        multiple: false,
        specialty: false,
        formulas: null,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.RACIAL_DERMAL_ARMOR,
        name: 'Dermal Armor',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [{ name: '+1', cost: 0 }],
        multiple: false,
        specialty: false,
        formulas: null,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.RACIAL_LIFESTYLE,
        name: 'Lifestyle Cost',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [
            { name: '+20%', cost: 0 },
            { name: '+100%', cost: 0 }
        ],
        multiple: false,
        specialty: false,
        formulas: null,
        labels: {
            description: ''
        }
    },
];
const POSITIVE_QUALITIES = [
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.AMBIDEXTROUS,
        name: 'Ambidextrous',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [
            { name: '', cost: 4 }
        ],
        multiple: false,
        specialty: false,
        formulas: null,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.ANALYTICAL_MIND,
        name: 'Analytical Mind',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [
            { name: '', cost: 5 }
        ],
        multiple: false,
        specialty: false,
        formulas: null,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.APTITUDE,
        name: 'Aptitude',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [
            { name: '', cost: 14 }
        ],
        multiple: false,
        specialty: true,
        formulas: {
            SPECIALTIES: (quality) => _shadowrun_app_5e_5e_skills__WEBPACK_IMPORTED_MODULE_1__.ACTIVE_SKILLS.map(i => ({ id: i.id, name: i.name })),
            SKILL_MAX: (quality, id) => quality.specialty === id ? 1 : 0
        },
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.ASTRAL_CHAMELEON,
        name: 'Astral Chameleon',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [
            { name: '', cost: 10 }
        ],
        multiple: false,
        specialty: false,
        formulas: null,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.BILINGUAL,
        name: 'Bilingual',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [
            { name: '', cost: 5 }
        ],
        multiple: false,
        specialty: false,
        formulas: null,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.BLANDNESS,
        name: 'Blandness',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [
            { name: '', cost: 8 }
        ],
        multiple: false,
        specialty: false,
        formulas: null,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.CATLIKE,
        name: 'Catlike',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [
            { name: '', cost: 7 }
        ],
        multiple: false,
        specialty: false,
        formulas: null,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.CODESLINGER,
        name: 'Codeslinger',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [
            { name: '', cost: 10 }
        ],
        multiple: false,
        specialty: false,
        formulas: null,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.DOUBLE_JOINTED,
        name: 'Double-Jointed',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [
            { name: '', cost: 6 }
        ],
        multiple: false,
        specialty: false,
        formulas: null,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.EXCEPTIONAL_ATTRIBUTE,
        name: 'Exceptional Attribute',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [
            { name: '', cost: 14 }
        ],
        multiple: false,
        specialty: true,
        formulas: {
            SPECIALTIES: (quality) => _shadowrun_app_5e_5e_attributes__WEBPACK_IMPORTED_MODULE_2__.ATTRIBUTES.filter(i => ![_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.EDGE, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.ESSENCE].includes(i.id))
                .map(i => ({ id: i.id, name: i.name })),
            ATTRIBUTE_MAX: (quality, id) => [
                _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.BODY, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.AGILITY, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.REACTION, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.STRENGTH,
                _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.WILLPOWER, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.LOGIC, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.INTUITION, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.CHARISMA,
                _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.MAGIC, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.RESONANCE
            ].includes(id) && quality.specialty === id ? 1 : 0
        },
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.FIRST_IMPRESSION,
        name: 'First Impression',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [
            { name: '', cost: 11 }
        ],
        multiple: false,
        specialty: false,
        formulas: null,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.FOCUSED_CONCENTRATION,
        name: 'Focused Concentration',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [
            { name: 'I', cost: 4 },
            { name: 'II', cost: 8 },
            { name: 'III', cost: 12 },
            { name: 'IV', cost: 16 },
            { name: 'V', cost: 20 },
            { name: 'VI', cost: 24 }
        ],
        multiple: true,
        specialty: false,
        formulas: null,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.GEARHEAD,
        name: 'Gearhead',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [
            { name: '', cost: 11 }
        ],
        multiple: false,
        specialty: false,
        formulas: null,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.GUTS,
        name: 'Guts',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [
            { name: '', cost: 10 }
        ],
        multiple: false,
        specialty: false,
        formulas: null,
        labels: {
            description: 'When a bug spirit with dripping mandibles comes calling, the character with Guts is the one most likely to stand and fight instead of freaking the hell out. Guts gives a character a +2 dice pool modifier on tests to resist fear and intimidation, including magically induced fear from spells or critter powers.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.HIGH_PAIN_TOLERANCE,
        name: 'High Pain Tolerance',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [
            { name: 'I', cost: 7 },
            { name: 'II', cost: 14 },
            { name: 'III', cost: 21 }
        ],
        multiple: false,
        specialty: false,
        formulas: null,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.HOME_GROUND,
        name: 'Home Ground',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [
            { name: '', cost: 10 }
        ],
        multiple: true,
        specialty: true,
        formulas: null,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.HUMAN_LOOKING,
        name: 'Human-Looking',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [
            { name: '', cost: 6 }
        ],
        multiple: false,
        specialty: false,
        formulas: null,
        labels: {
            description: 'A metahuman character with the Human-Looking quality can pass for human in most circumstances. Human NPCs respond with neutral attitudes toward such characters when making Social skill tests (p. 82), even those humans who are particularly biased against metahumans. The character may suffer increased animosity from metahuman NPCs who are prejudiced against humans and who either mistake him for human or distrust his motives for trying to look human. Only elves, dwarfs, and orks can take the Human-Looking quality.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.INDOMITABLE,
        name: 'Indomitable',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [
            { name: 'I', cost: 8 },
            { name: 'II', cost: 16 },
            { name: 'III', cost: 24 }
        ],
        multiple: false,
        specialty: true,
        formulas: null,
        labels: {
            description: 'Bodies and minds have limits, but some people have the will to push right through those boundaries. For each level of Indomitable, a character receives a +1 increase to an Inherent limit of his choice (Mental, Physical, or Social). He can take up to three levels and can apply them in any way he chooses (+3 to one Inherent Limit, for example; or +2 to one Inherent and +1 to another; or +1 to all three).'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.JURYRIGGER,
        name: 'Juryrigger',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [
            { name: '', cost: 10 }
        ],
        multiple: false,
        specialty: false,
        formulas: null,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.LUCKY,
        name: 'Lucky',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [
            { name: '', cost: 12 }
        ],
        multiple: false,
        specialty: false,
        formulas: {
            ATTRIBUTE_MAX: (quality, id) => _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.EDGE === id ? 1 : 0
        },
        labels: {
            description: 'The dice roll and the coin flips this character’s way more often than not, giving her the chance to drop jaws in amazement at her good fortune. Lucky allows a character to possess an Edge attribute one point higher than his metatype maximum (for example, a human character could raise her Edge to 8). Note that taking this quality does not actually increase the character’s current Edge rating, it just allows her the opportunity to do so; the Karma cost for gaining the extra point must still be paid. This quality may only be taken once and must be approved by the gamemaster. The Lucky quality cannot be combined with Exceptional Attribute.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.MAGIC_RESISTANCE,
        name: 'Magic Resistance',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [
            { name: 'I', cost: 6 },
            { name: 'II', cost: 12 },
            { name: 'III', cost: 18 },
            { name: 'IV', cost: 24 }
        ],
        multiple: false,
        specialty: false,
        formulas: null,
        labels: {
            description: 'This is the wonderful ability to potentially make a Fireball bounce away. For every 6 Karma spent on Magic Resistance, a character receives 1 additional die for Spell Resistance Tests. The Magical Resistance quality, however, is always “on” — the character cannot lower it to receive beneficial spells such as Heal. A character with Magic Resistance cannot take part in spells that require a voluntary subject; such spells automatically fail when used on magic-resistant characters. Characters with a Magic rating cannot take this quality.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.MENTOR_SPIRIT,
        name: 'Mentor Spirit',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [
            { name: '', cost: 5 }
        ],
        multiple: false,
        specialty: true,
        formulas: null,
        labels: {
            description: 'Everyone needs some help in life, even if it comes from someone relatively filmy and insubstantial. Mentor Spirit means the character follows a patron spirit (see Mentor Spirits, p. 320) that guides him in his practice of magic and provides certain advantages and disadvantages to his natural abilities. A character may change mentor spirits, but he may have only one mentor spirit at a time. To change mentor spirits, the character must first buy off the current mentor spirit as if it were a Negative quality. He can then purchase the quality again to follow a different mentor spirit. This cost represents the toll of divorcing from one mentor spirit and bonding with a new one. Each tradition has a different name for a mentor spirit. Hermetic mages prefer the term “mentor spirit,” while shamans use the word “totem” for the spirit that they follow. While the names may vary, the way the mentor works is consistent. This quality is only available to characters that pos- sess a Magic attribute rating.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.NATURAL_ATHLETE,
        name: 'Natural Athlete',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [
            { name: '', cost: 7 }
        ],
        multiple: false,
        specialty: false,
        formulas: null,
        labels: {
            description: 'A character with this quality has an innate combination of physical fitness, spatial awareness, and natural athletic or gymnastic talent. While the character may not be a world-class athlete and may require training to achieve peak performance, he is in prime physical shape for his size and weight class. The Natural Athlete adds a +2 dice pool modifier for Running and Gymnastics skill tests.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.NATURAL_HARDENING,
        name: 'Natural Hardening',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [
            { name: '', cost: 10 }
        ],
        multiple: false,
        specialty: false,
        formulas: null,
        labels: {
            description: 'This quality makes the character’s neural structure resistant to feedback. This gives her 1 point of natural biofeedback filtering, which is cumulative with a Biofeedback Filter program or a technomancer’s firewall (p. 251).'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.NATURAL_IMMUNITY,
        name: 'Natural Immunity',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [
            { name: 'I', cost: 4 },
            { name: 'II', cost: 10 }
        ],
        multiple: false,
        specialty: true,
        formulas: null,
        labels: {
            description: 'The ability to casually sip poison can never be overrated. A character with Natural Immunity has an innate or developed immunity to one single disease or toxin. This quality is available at two levels. If purchased at the 4 Karma level, the character is immune to a single natural disease or toxin. If Natural Immunity is purchased at the full 10 Karma level, the character is immune to a single, synthetic (artificially created) disease or toxin. Natural Immunity does not affect diseases or toxins that are magically based, such as HMHVV. The player and gamemaster must agree on the disease, drug, or poison to which the character is immune. The character can take one dose of the drug or poison and experience one exposure to the disease every six hours with no ill effects. Any subsequent dosing or exposure during the next six hours causes normal damage, but the character’s recovery time is halved. Note that characters with Natural Immunity to a disease can be a carrier, infecting other characters while suffering no ill effects.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.PHOTOGRAPHIC_MEMORY,
        name: 'Photographic Memory',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [
            { name: '', cost: 6 }
        ],
        multiple: false,
        specialty: false,
        formulas: null,
        labels: {
            description: 'A character with Photographic Memory can instantly recall facts, dates, numbers, or anything else he has seen or heard. The character gains a +2 dice pool modifier to all Memory Tests.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.QUICK_HEALER,
        name: 'Quick Healer',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [
            { name: '', cost: 3 }
        ],
        multiple: false,
        specialty: false,
        formulas: null,
        labels: {
            description: 'A character with the Quick Healer quality receives a +2 dice pool modifier to all Healing Tests made on/for/by her, including magical healing.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.RESISTANCE_TO_PATHOGENS,
        name: 'Resistance to Pathogens/Toxins',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [
            { name: 'I', cost: 4 },
            { name: 'II', cost: 8 }
        ],
        multiple: false,
        specialty: false,
        formulas: null,
        labels: {
            description: 'A character with Resistance to Pathogens/Toxins can fight off diseases and drugs more easily than other characters and receives a +1 dice pool modifier to Resistance Tests. This quality comes at two levels: at 4 Karma the character is resistant to either pathogens or toxins, not both. If the character purchases this quality at 8 Karma, she receives the +1 modifier for resisting both.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.SPIRIT_AFFINITY,
        name: 'Spirit Affinity',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [
            { name: '', cost: 7 }
        ],
        multiple: true,
        specialty: true,
        formulas: null,
        labels: {
            description: 'Available only to magic users, the Spirit Affinity quality allows a character to be attuned to one type of spirit (see Spirits, p. 303). These spirits find the character interesting, are drawn to her, and are more inclined to assist her. They may be reluctant to attack the character, and if forced to do so they are likely to use nonlethal power. Watchers and minions do not count for this quality as they are constructed and are not summoned like normal spirits. Spirit Affinity provides magicians with 1 additional spirit service for each spirit of that type, and it also provides a +1 dice pool modifier for Binding Tests. Magic users may possess this quality for a type of spirit that is not part of their magical tradition.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.TOUGHNESS,
        name: 'Toughness',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [
            { name: '', cost: 9 }
        ],
        multiple: false,
        specialty: false,
        formulas: null,
        labels: {
            description: 'Characters with the Toughness quality shrug off damage more easily than others. Such characters gain a +1 dice pool modifier to their Body when making Damage Resistance tests.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.WILL_TO_LIVE,
        name: 'Will To Live',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [
            { name: 'I', cost: 3 },
            { name: 'II', cost: 6 },
            { name: 'III', cost: 9 }
        ],
        multiple: false,
        specialty: false,
        formulas: null,
        labels: {
            description: 'For each rating point in Will to Live, the character gains 1 additional Damage Overflow Box (p. 101). These additional boxes only allow the character to sustain additional damage before dying; they do not raise the threshold at which the character becomes unconscious or incapacitated, nor do they affect modifiers from the damage the character has taken.'
        }
    },
];
const NEGATIVE_QUALITIES = [
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.ADDICTION,
        name: 'Addiction',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [
            { name: 'Mild', cost: -4 },
            { name: 'Moderate', cost: -9 },
            { name: 'Severe', cost: -20 },
            { name: 'Burnout', cost: -25 }
        ],
        multiple: true,
        specialty: true,
        formulas: null,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.ALLERGY,
        name: 'Allergy',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [
            { name: 'Uncommon Mild', cost: -5 },
            { name: 'Uncommon Moderate', cost: -10 },
            { name: 'Uncommon Severe', cost: -15 },
            { name: 'Uncommon Extreme', cost: -20 },
            { name: 'Common Mild', cost: -10 },
            { name: 'Common Moderate', cost: -15 },
            { name: 'Common Severe', cost: -20 },
            { name: 'Common Extreme', cost: -25 }
        ],
        multiple: true,
        specialty: true,
        formulas: null,
        labels: {
            description: 'A character with the Allergy quality is allergic to a substance or condition found in their environment. The value of this quality depends on two factors. The first is whether the substance or condition is Uncommon (2 Karma) or Common (7 Karma). Next, determine the severity of the symptoms: Mild (3 Karma), Moderate (8 Karma), Severe (13 Karma), or Extreme (18 Karma). Add the appropriate point values together to find the final value. For example, the value of an Uncommon Moderate Allergy (Silver) is 10 Karma (2+8 Karma). If a character is attacked with a substance to which they are allergic, they lose 1 die from their Resistance Test for each stage of severity of the Allergy (e.g., 1 die for a Mild allergy, 2 dice for a Moderate allergy, etc.).'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.ASTRAL_BEACON,
        name: 'Astral Beacon',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [
            { name: '', cost: -10 },
        ],
        multiple: false,
        specialty: false,
        formulas: null,
        labels: {
            description: 'The astral signature of a character with the Astral Beacon quality is like, well, a beacon—highly visible on the astral plane. The signature also lasts twice as long as it would without the Astral Beacon quality and others assensing it receive a –1 to the threshold of their Assensing Test for gathering information about it. Only characters with a Magic rating may take this quality.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.BAD_LUCK,
        name: 'Bad Luck',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [
            { name: '', cost: -12 },
        ],
        multiple: false,
        specialty: false,
        formulas: null,
        labels: {
            description: 'This character is cursed—his own luck often turns against him. When the character uses Edge, roll 1D6. On a result of 1, the point of Edge is spent, but it has the exact opposite effect intended. For example, if a character hopes to gain additional dice he loses that many dice from his dice pool. If a character spends Edge to go first in an Initiative Pass, he ends up going last. If a character spent Edge to negate a glitch, Bad Luck turns it into a critical glitch. The character suffers Bad Luck on only one Edge roll per game session. After the character has suffered his Bad Luck, he does not need to roll the test for Bad Luck for any more expenditures of Edge for the duration of that game session.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.BAD_REP,
        name: 'Bad Rep',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [
            { name: '', cost: -7 },
        ],
        multiple: false,
        specialty: false,
        formulas: null,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.CODE_OF_HONOR,
        name: 'Code of Honor',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [
            { name: '', cost: -15 },
        ],
        multiple: false,
        specialty: true,
        formulas: null,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.CODEBLOCK,
        name: 'Codeblock',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [
            { name: '', cost: -10 },
        ],
        multiple: false,
        specialty: false,
        formulas: null,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.COMBAT_PARALYSIS,
        name: 'Combat Paralysis',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [
            { name: 'Mild', cost: -12 },
        ],
        multiple: false,
        specialty: false,
        formulas: null,
        labels: {
            description: 'A character with Combat Paralysis freezes in combat. On the character’s first Initiative Test, the character divides their Initiative Score for that round in half (rounded up). In subsequent Combat Turns, the character may roll their normal Initiative. Combat Paralysis also gives the character a –3 dice pool modifier on Surprise Tests. If the character must make a Composure Test while under fire or in a similar combat situation, the gamemaster applies a +1 threshold modifier.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.DEPENDENTS,
        name: 'Dependends',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [
            { name: 'I', cost: -3 },
            { name: 'II', cost: -6 },
            { name: 'III', cost: -9 }
        ],
        multiple: false,
        specialty: true,
        formulas: null,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.DISTINCTIVE_STYLE,
        name: 'Distinctive Style',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [
            { name: '', cost: -5 },
        ],
        multiple: false,
        specialty: false,
        formulas: null,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.ELF_POSER,
        name: 'Elf Poser',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [
            { name: '', cost: -6 },
        ],
        multiple: false,
        specialty: false,
        formulas: null,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.GREMLINS,
        name: 'Gremlins',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [
            { name: 'I', cost: -4 },
            { name: 'II', cost: -8 },
            { name: 'III', cost: -12 },
            { name: 'IV', cost: -16 }
        ],
        multiple: false,
        specialty: false,
        formulas: null,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.INCOMPETENT,
        name: 'Incompetent',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [
            { name: '', cost: -5 },
        ],
        multiple: false,
        specialty: true,
        formulas: null,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.INSOMNIA,
        name: 'Insomnia',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [
            { name: 'I', cost: -10 },
            { name: 'II', cost: -15 },
        ],
        multiple: false,
        specialty: false,
        formulas: null,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.LOSS_OF_CONFIDENCE,
        name: 'Loss of Confidence',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [
            { name: '', cost: -10 }
        ],
        multiple: true,
        specialty: true,
        formulas: null,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.LOW_PAIN_TOLERANCE,
        name: 'Low Pain Tolerance',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [
            { name: '', cost: -9 },
        ],
        multiple: false,
        specialty: false,
        formulas: null,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.ORK_POSER,
        name: 'Ork Poser',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [
            { name: '', cost: -6 }
        ],
        multiple: false,
        specialty: false,
        formulas: null,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.PREJUDICED,
        name: 'Prejudiced',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [
            { name: 'Common Biased', cost: -5 },
            { name: 'Common Outspoken', cost: -7 },
            { name: 'Common Radical', cost: -10 },
            { name: 'Specific Biased', cost: -3 },
            { name: 'Specific Outspoken', cost: -5 },
            { name: 'Specific Radical', cost: -8 }
        ],
        multiple: true,
        specialty: true,
        formulas: null,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.SCORCHED,
        name: 'Scorched',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [
            { name: '', cost: -10 }
        ],
        multiple: false,
        specialty: true,
        formulas: null,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.SENSITIVE_SYSTEM,
        name: 'Sensitive System',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [
            { name: '', cost: -12 }
        ],
        multiple: false,
        specialty: false,
        formulas: null,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.SIMSENSE_VERTIGO,
        name: 'Simsense Vertigo',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [
            { name: '', cost: -5 }
        ],
        multiple: false,
        specialty: false,
        formulas: null,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.SINNER,
        name: 'Sinner',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [
            { name: 'National SIN', cost: -5 },
            { name: 'Criminal SIN', cost: -10 },
            { name: 'Corporate Limited SIN', cost: -15 },
            { name: 'Corporate SIN', cost: -25 }
        ],
        multiple: false,
        specialty: true,
        formulas: null,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.SOCIAL_STRESS,
        name: 'Social Stress',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [
            { name: '', cost: -8 }
        ],
        multiple: false,
        specialty: false,
        formulas: null,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.SPIRIT_BANE,
        name: 'Spirit Bane',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [
            { name: '', cost: -7 }
        ],
        multiple: true,
        specialty: true,
        formulas: null,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.UNCOUTH,
        name: 'Uncouth',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [
            { name: '', cost: -14 }
        ],
        multiple: false,
        specialty: false,
        formulas: null,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.UNEDUCATED,
        name: 'Uneducated',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [
            { name: '', cost: -8 }
        ],
        multiple: false,
        specialty: false,
        formulas: null,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.UNSTEADY_HANDS,
        name: 'Unsteady Hands',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [
            { name: '', cost: -7 }
        ],
        multiple: false,
        specialty: false,
        formulas: null,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.QUALITY_ID.WEAK_IMMUNE_SYSTEM,
        name: 'Weak Immune System',
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        ratings: [
            { name: '', cost: -10 }
        ],
        multiple: false,
        specialty: false,
        formulas: null,
        labels: {
            description: ''
        }
    },
];


/***/ }),

/***/ 9300:
/*!*****************************************************!*\
  !*** ./projects/shadowrun/src/app/5e/5e.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FifthEditionService": () => (/* binding */ FifthEditionService)
/* harmony export */ });
/* harmony import */ var _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shadowrun/app/5e */ 9022);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


class FifthEditionService {
    getId() {
        return (Date.now() + Math.random()).toString(36).replace('.', '');
    }
    getLifestylesCost(lifestyles) {
        return lifestyles.reduce((sum, cur) => {
            var _a;
            const lifestyle = _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_0__.LIFESTYLES.find(i => i.id === cur.id);
            const options = _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_0__.LIFESTYLE_OPTIONS.filter(i => { var _a; return ((_a = cur.options) !== null && _a !== void 0 ? _a : []).includes(i.id); });
            const month = lifestyle.cost + options.map(i => i.cost(lifestyle.cost)).reduce((a, b) => a + b, 0);
            return sum + (month * ((_a = cur.term) !== null && _a !== void 0 ? _a : 0));
        }, 0);
    }
    getAttributeView(value) {
        var _a, _b, _c;
        const attribute = _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTES.find(i => i.id === value.id);
        const name = (_a = attribute === null || attribute === void 0 ? void 0 : attribute.name) !== null && _a !== void 0 ? _a : '';
        const rating = (_b = value === null || value === void 0 ? void 0 : value.rating) !== null && _b !== void 0 ? _b : 1;
        const description = (_c = attribute === null || attribute === void 0 ? void 0 : attribute.labels) === null || _c === void 0 ? void 0 : _c.description;
        const tooltip = [
            `${name.toLocaleUpperCase()}\n`,
            `Base: ${rating}`,
            `Bonus:`,
            `\n${description}`
        ].filter(i => !!i).join('\n');
        return { name, rating, tooltip };
    }
    getComplexFormView(value) {
        var _a;
        const form = _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORMS.find(i => i.id === value.id);
        const name = form === null || form === void 0 ? void 0 : form.name;
        const target = _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_TARGETS.find(i => i.id === form.target);
        const duration = _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_0__.COMPLEX_FORM_DURATIONS.find(i => i.id === form.duration);
        const fading = `L${!!(form === null || form === void 0 ? void 0 : form.fading) ? (form.fading > 0 ? ` + ${form.fading}` : ` - ${Math.abs(form.fading)}`) : ''}`;
        const description = (_a = form === null || form === void 0 ? void 0 : form.labels) === null || _a === void 0 ? void 0 : _a.description;
        const tooltip = [
            `${name.toLocaleUpperCase()}\n`,
            `Target: ${target === null || target === void 0 ? void 0 : target.name}`,
            `Duration: ${duration === null || duration === void 0 ? void 0 : duration.name}`,
            `Fading: ${fading}`,
            `\n${description}`
        ].filter(i => !!i).join('\n');
        return { name, target, duration, fading, description, tooltip };
    }
    getGeneralView(value) {
        var _a, _b, _c;
        const portrait = value === null || value === void 0 ? void 0 : value.portrait;
        const name = value === null || value === void 0 ? void 0 : value.name;
        const gender = (_a = value === null || value === void 0 ? void 0 : value.miscellaneous) === null || _a === void 0 ? void 0 : _a.gender;
        const metatype = (_b = _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_0__.METATYPES.find(i => i.id === (value === null || value === void 0 ? void 0 : value.metatype))) === null || _b === void 0 ? void 0 : _b.name;
        const awakening = (_c = _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_0__.AWAKENINGS.find(i => i.id === (value === null || value === void 0 ? void 0 : value.awakening))) === null || _c === void 0 ? void 0 : _c.name;
        // const biography: string = value?.miscellaneous?.biography;
        // const tooltip: string = [
        //   `${name.toLocaleUpperCase()}\n`,
        //   `${description}`
        // ].filter(i => !!i).join('\n');
        return { portrait, name, gender, metatype, awakening };
    }
    getQualityView(value) {
        var _a, _b, _c, _d, _e, _f;
        const QUALITIES = [..._shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_0__.RACIAL_QUALITIES, ..._shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_0__.POSITIVE_QUALITIES, ..._shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_0__.NEGATIVE_QUALITIES];
        const quality = QUALITIES.find(i => i.id === value.id);
        const name = quality === null || quality === void 0 ? void 0 : quality.name;
        const rating = (_c = ((_a = quality === null || quality === void 0 ? void 0 : quality.ratings) !== null && _a !== void 0 ? _a : [])[(_b = value === null || value === void 0 ? void 0 : value.rating) !== null && _b !== void 0 ? _b : 0]) === null || _c === void 0 ? void 0 : _c.name;
        const specialty = !!((_d = quality === null || quality === void 0 ? void 0 : quality.formulas) === null || _d === void 0 ? void 0 : _d.SPECIALTIES)
            ? (_e = quality.formulas.SPECIALTIES.find(i => i.id === (value === null || value === void 0 ? void 0 : value.specialty))) === null || _e === void 0 ? void 0 : _e.name
            : value === null || value === void 0 ? void 0 : value.specialty;
        const description = (_f = quality === null || quality === void 0 ? void 0 : quality.labels) === null || _f === void 0 ? void 0 : _f.description;
        const tooltip = [
            `${name.toLocaleUpperCase()}\n`,
            `${description}`
        ].filter(i => !!i).join('\n');
        return { name, rating, specialty, description, tooltip };
    }
    getSkillView(value) {
        var _a, _b, _c;
        const skill = _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_0__.ACTIVE_SKILLS.find(i => i.id === value.id);
        const name = (_a = skill === null || skill === void 0 ? void 0 : skill.name) !== null && _a !== void 0 ? _a : '';
        const rating = (_b = value === null || value === void 0 ? void 0 : value.rating) !== null && _b !== void 0 ? _b : 0;
        const specializations = ((_c = value === null || value === void 0 ? void 0 : value.specializations) !== null && _c !== void 0 ? _c : []).join(', ');
        // const description: string = skill?.labels?.description;
        const tooltip = [
            `${name.toLocaleUpperCase()}\n`,
            `Base: ${rating}`,
            `Specializations: ${specializations}`,
            // `\n${description}`
        ].filter(i => !!i).join('\n');
        return { name, rating, specializations, tooltip };
    }
    getSpellView(cspell) {
        var _a, _b, _c, _d;
        const spell = _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_0__.SPELLS.find(i => i.id === cspell.id);
        const category = _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORIES.find(i => (spell === null || spell === void 0 ? void 0 : spell.category) === i.id);
        const name = (_a = spell === null || spell === void 0 ? void 0 : spell.name) !== null && _a !== void 0 ? _a : '';
        const specialty = (_b = cspell.specialty) !== null && _b !== void 0 ? _b : '';
        const tags = _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAGS.filter(i => { var _a; return ((_a = spell.tags) !== null && _a !== void 0 ? _a : []).includes(i.id); });
        const type = _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPES.find(i => (spell === null || spell === void 0 ? void 0 : spell.type) === i.id);
        const range = _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGES.find(i => (spell === null || spell === void 0 ? void 0 : spell.range) === i.id);
        const duration = _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATIONS.find(i => (spell === null || spell === void 0 ? void 0 : spell.duration) === i.id);
        const damage = _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_0__.SPELL_DAMAGE.find(i => (spell === null || spell === void 0 ? void 0 : spell.damage) === i.id);
        const drain = `F${!!(spell === null || spell === void 0 ? void 0 : spell.drain) ? (spell.drain > 0 ? ` + ${spell.drain}` : ` - ${Math.abs(spell.drain)}`) : ''}`;
        const description = (_c = spell === null || spell === void 0 ? void 0 : spell.labels) === null || _c === void 0 ? void 0 : _c.description;
        const tooltip = [
            `${name.toLocaleUpperCase()}${!!specialty ? ' [' + specialty + ']' : ''}`,
            `(${tags === null || tags === void 0 ? void 0 : tags.map(tag => tag.name).join(', ')})\n`,
            `Type: ${(_d = type === null || type === void 0 ? void 0 : type.labels) === null || _d === void 0 ? void 0 : _d.alias}`,
            `Range: ${range === null || range === void 0 ? void 0 : range.alias}`,
            `Duration: ${duration === null || duration === void 0 ? void 0 : duration.alias}`,
            damage ? `Damage: ${damage === null || damage === void 0 ? void 0 : damage.alias}` : null,
            `Drain: ${drain}`,
            `\n${description}`
        ].filter(i => !!i).join('\n');
        return {
            category, name, specialty, tags, damage, type, range, duration, drain, description, tooltip
        };
    }
}
FifthEditionService.ɵfac = function FifthEditionService_Factory(t) { return new (t || FifthEditionService)(); };
FifthEditionService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FifthEditionService, factory: FifthEditionService.ɵfac });


/***/ }),

/***/ 9818:
/*!****************************************************!*\
  !*** ./projects/shadowrun/src/app/5e/5e.skills.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SKILL_CATEGORIES": () => (/* binding */ SKILL_CATEGORIES),
/* harmony export */   "ACTIVE_SKILLS": () => (/* binding */ ACTIVE_SKILLS),
/* harmony export */   "KNOWLEDGE": () => (/* binding */ KNOWLEDGE)
/* harmony export */ });
/* harmony import */ var _5e_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./5e.enums */ 8642);

const SKILL_CATEGORIES = [
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_CATEGORY_ID.ACADEMIC,
        name: 'Academic',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.LOGIC
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_CATEGORY_ID.INTERESTS,
        name: 'Interests',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.INTUITION
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_CATEGORY_ID.PROFESSIONAL,
        name: 'Professional',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.LOGIC
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_CATEGORY_ID.STREET,
        name: 'Street',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.INTUITION
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_CATEGORY_ID.LANGUAGE,
        name: 'Language',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.INTUITION
    },
];
const ACTIVE_SKILLS = [
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.ARCHERY,
        name: 'Archery',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.AGILITY,
        default: true,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.AUTOMATICS,
        name: 'Automatics',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.AGILITY,
        default: true,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.BLADES,
        name: 'Blades',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.AGILITY,
        default: true,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.CLUBS,
        name: 'Clubs',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.AGILITY,
        default: true,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.EXOTIC_RANGED_WEAPON,
        name: 'Exotic Ranged Weapon',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.AGILITY,
        default: false,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.HEAVY_WEAPONS,
        name: 'Heavy Weapons',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.AGILITY,
        default: true,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.LONGARMS,
        name: 'Longarms',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.AGILITY,
        default: true,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.PISTOLS,
        name: 'Pistols',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.AGILITY,
        default: true,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.THROWING_WEAPONS,
        name: 'Throwing Weapons',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.AGILITY,
        default: true,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.UNARMED_COMBAT,
        name: 'Unarmed Combat',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.AGILITY,
        default: true,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.DISGUISE,
        name: 'Disguise',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.INTUITION,
        default: true,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.DIVING,
        name: 'Diving',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.BODY,
        default: true,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.ESCAPE_ARTIST,
        name: 'Escape Artist',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.AGILITY,
        default: true,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.FREE_FALL,
        name: 'Free-Fall',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.BODY,
        default: true,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.GYMNASTICS,
        name: 'Gymnastics',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.AGILITY,
        default: true,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.PALMING,
        name: 'Palming',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.AGILITY,
        default: false,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.PERCEPTION,
        name: 'Perception',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.INTUITION,
        default: true,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.RUNNING,
        name: 'Running',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.STRENGTH,
        default: true,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.SNEAKING,
        name: 'Sneaking',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.AGILITY,
        default: true,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.SURVIVAL,
        name: 'Survival',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.WILLPOWER,
        default: true,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.SWIMMING,
        name: 'Swimming',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.STRENGTH,
        default: true,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.TRACKING,
        name: 'Tracking',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.INTUITION,
        default: true,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.CON,
        name: 'Con',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.CHARISMA,
        default: true,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.ETIQUETTE,
        name: 'Etiquette',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.CHARISMA,
        default: true,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.IMPERSONATION,
        name: 'Impersonation',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.CHARISMA,
        default: true,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.INSTRUCTION,
        name: 'Instruction',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.CHARISMA,
        default: true,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.INTIMIDATION,
        name: 'Intimidation',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.CHARISMA,
        default: true,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.LEADERSHIP,
        name: 'Leadership',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.CHARISMA,
        default: true,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.NEGOTIATION,
        name: 'Negotiation',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.CHARISMA,
        default: true,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.PERFORMANCE,
        name: 'Performance',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.CHARISMA,
        default: true,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.ALCHEMY,
        name: 'Alchemy',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.MAGIC,
        default: false,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.ARCANA,
        name: 'Arcana',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.LOGIC,
        default: false,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.ARTIFICING,
        name: 'Artificing',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.MAGIC,
        default: false,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.ASSENSING,
        name: 'Assensing',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.INTUITION,
        default: false,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.ASTRAL_COMBAT,
        name: 'Astral Combat',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.WILLPOWER,
        default: false,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.BANISHING,
        name: 'Banishing',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.MAGIC,
        default: false,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.BINDING,
        name: 'Binding',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.MAGIC,
        default: false,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.COUNTERSPELLING,
        name: 'Counterspelling',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.MAGIC,
        default: false,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.DISENCHANTING,
        name: 'Disenchanting',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.MAGIC,
        default: false,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.RITUAL_SPELLCASTING,
        name: 'Ritual Spellcasting',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.MAGIC,
        default: false,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.SPELLCASTING,
        name: 'Spellcasting',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.MAGIC,
        default: false,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.SUMMONING,
        name: 'Summoning',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.MAGIC,
        default: false,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.COMPILING,
        name: 'Compiling',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.RESONANCE,
        default: false,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.DECOMPILING,
        name: 'Decompiling',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.RESONANCE,
        default: false,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.REGISTERING,
        name: 'Registering',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.RESONANCE,
        default: false,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.AERONAUTICS_MECHANIC,
        name: 'Aeronautics Mechanic',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.LOGIC,
        default: false,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.ANIMAL_HANDLING,
        name: 'Animal Handling',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.CHARISMA,
        default: true,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.ARMORER,
        name: 'Armorer',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.LOGIC,
        default: true,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.ARTISAN,
        name: 'Artisan',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.INTUITION,
        default: false,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.AUTOMOTIVE_MECHANIC,
        name: 'Automotive Mechanic',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.LOGIC,
        default: false,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.BIOTECHNOLOGY,
        name: 'Biotechnology',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.LOGIC,
        default: false,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.CHEMISTRY,
        name: 'Chemistry',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.LOGIC,
        default: false,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.COMPUTER,
        name: 'Computer',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.LOGIC,
        default: true,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.CYBERCOMBAT,
        name: 'Cybercombat',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.LOGIC,
        default: true,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.CYBERTECHNOLOGY,
        name: 'Cybertechnology',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.LOGIC,
        default: false,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.DEMOLITIONS,
        name: 'Demolitions',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.LOGIC,
        default: true,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.ELECTRONIC_WARFARE,
        name: 'Electronic Warfare',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.LOGIC,
        default: false,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.FIRST_AID,
        name: 'First Aid',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.LOGIC,
        default: true,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.FORGERY,
        name: 'Forgery',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.LOGIC,
        default: true,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.HACKING,
        name: 'Hacking',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.LOGIC,
        default: true,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.HARDWARE,
        name: 'Hardware',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.LOGIC,
        default: false,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.INDUSTRIAL_MECHANIC,
        name: 'Industrial Mechanic',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.LOGIC,
        default: false,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.LOCKSMITH,
        name: 'Locksmith',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.LOGIC,
        default: false,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.MEDICINE,
        name: 'Medicine',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.LOGIC,
        default: false,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.NAUTICAL_MECHANIC,
        name: 'Nautical Mechanic',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.LOGIC,
        default: false,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.NAVIGATION,
        name: 'Navigation',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.INTUITION,
        default: true,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.SOFTWARE,
        name: 'Software',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.LOGIC,
        default: false,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.GUNNERY,
        name: 'Gunnery',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.AGILITY,
        default: true,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.PILOT_AEROSPACE,
        name: 'Pilot Aerospace',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.REACTION,
        default: false,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.PILOT_AIRCRAFT,
        name: 'Pilot Aircraft',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.REACTION,
        default: false,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.PILOT_WALKER,
        name: 'Pilot Walker',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.REACTION,
        default: false,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.PILOT_EXOTIC_VEHICLE,
        name: 'Ritual Spellcasting',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.REACTION,
        default: false,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.PILOT_GROUND_CRAFT,
        name: 'Pilot Ground Craft',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.REACTION,
        default: true,
        specializations: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.PILOT_WATERCRAFT,
        name: 'Pilot Watercraft',
        attribute: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.REACTION,
        default: true,
        specializations: []
    }
];
const KNOWLEDGE = [
    { category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_CATEGORY_ID.ACADEMIC, name: 'Biology' },
    { category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_CATEGORY_ID.ACADEMIC, name: 'Medicine' },
    { category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_CATEGORY_ID.ACADEMIC, name: 'Magic Theory' },
    { category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_CATEGORY_ID.ACADEMIC, name: 'Politics' },
    { category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_CATEGORY_ID.ACADEMIC, name: 'Philosophy' },
    { category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_CATEGORY_ID.ACADEMIC, name: 'Literature' },
    { category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_CATEGORY_ID.ACADEMIC, name: 'History' },
    { category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_CATEGORY_ID.ACADEMIC, name: 'Music' },
    { category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_CATEGORY_ID.ACADEMIC, name: 'Parabotany' },
    { category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_CATEGORY_ID.ACADEMIC, name: 'Parazoology' },
    { category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_CATEGORY_ID.INTERESTS, name: 'Current Simsense movies' },
    { category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_CATEGORY_ID.INTERESTS, name: 'popular trideo shows' },
    { category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_CATEGORY_ID.INTERESTS, name: '20th Century trivia' },
    { category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_CATEGORY_ID.INTERESTS, name: 'Elven Wine' },
    { category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_CATEGORY_ID.INTERESTS, name: 'Urban Brawl' },
    { category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_CATEGORY_ID.INTERESTS, name: 'Combat Biking' },
    { category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_CATEGORY_ID.INTERESTS, name: 'Pop music' },
    { category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_CATEGORY_ID.PROFESSIONAL, name: 'Journalism' },
    { category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_CATEGORY_ID.PROFESSIONAL, name: 'Business' },
    { category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_CATEGORY_ID.PROFESSIONAL, name: 'Law' },
    { category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_CATEGORY_ID.PROFESSIONAL, name: 'Military Service' },
    { category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_CATEGORY_ID.STREET, name: 'Gang Identification' },
    { category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_CATEGORY_ID.STREET, name: 'Criminal Organizations' },
    { category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_CATEGORY_ID.STREET, name: 'Smuggling Routes' },
    { category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_CATEGORY_ID.STREET, name: 'Fences' },
    { category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_CATEGORY_ID.LANGUAGE, name: 'Sperethiel' },
    { category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_CATEGORY_ID.LANGUAGE, name: 'Or’zet' },
    { category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_CATEGORY_ID.LANGUAGE, name: 'English' },
    { category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_CATEGORY_ID.LANGUAGE, name: 'Japanese' },
    { category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_CATEGORY_ID.LANGUAGE, name: 'Mandarin' },
    { category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_CATEGORY_ID.LANGUAGE, name: 'Russian' },
    { category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_CATEGORY_ID.LANGUAGE, name: 'French' },
    { category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_CATEGORY_ID.LANGUAGE, name: 'Italian' },
    { category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_CATEGORY_ID.LANGUAGE, name: 'German' },
    { category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_CATEGORY_ID.LANGUAGE, name: 'Aztlaner Spanish' },
    { category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_CATEGORY_ID.LANGUAGE, name: 'Spanish' },
    { category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_CATEGORY_ID.LANGUAGE, name: 'Lakota' },
    { category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_CATEGORY_ID.LANGUAGE, name: 'Dakota' },
    { category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_CATEGORY_ID.LANGUAGE, name: 'Diné (Navajo)' }
];


/***/ }),

/***/ 2916:
/*!****************************************************!*\
  !*** ./projects/shadowrun/src/app/5e/5e.spells.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SPELL_CATEGORIES": () => (/* binding */ SPELL_CATEGORIES),
/* harmony export */   "SPELL_DAMAGE": () => (/* binding */ SPELL_DAMAGE),
/* harmony export */   "SPELL_DURATIONS": () => (/* binding */ SPELL_DURATIONS),
/* harmony export */   "SPELL_KINDS": () => (/* binding */ SPELL_KINDS),
/* harmony export */   "SPELL_RANGES": () => (/* binding */ SPELL_RANGES),
/* harmony export */   "SPELL_TAGS": () => (/* binding */ SPELL_TAGS),
/* harmony export */   "SPELL_TYPES": () => (/* binding */ SPELL_TYPES),
/* harmony export */   "SPELLS": () => (/* binding */ SPELLS)
/* harmony export */ });
/* harmony import */ var _5e_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./5e.enums */ 8642);

const SPELL_CATEGORIES = [
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.COMBAT,
        name: 'Combat',
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.DETECTION,
        name: 'Detection',
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.HEALTH,
        name: 'Health',
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.ILLUSION,
        name: 'Illusion',
        labels: {
            description: 'No matter how realistic they are, illusions cannot directly cause physical harm. They can cause distractions, loss of balance or orientation, and even symptoms like nausea or pain. All such effects vanish, though, as soon as the magician drops the illusion. Illusions can certainly cause harm by manipulating the senses so a victim walks into traffic or off a high building, for example, but they cannot directly cause damage.\nMana-based Illusion spells affect the mind and are ineffective against technological viewing systems like cameras. Mana illusions are resisted by Logic + Willpower. Some mana illusions affect the target’s senses directly; others affect the senses of anyone perceiving the subject of the spell (though you’re never affected by your own illusion spell). Though mana-based illusions can be created on the astral plane, their magical auras give them away as illusions to anyone who makes a successful Assensing Test — illusions can’t fool Assensing and cannot be used to disguise or create auras.\nPhysical illusion spells create actual images or alter physical properties, such as light or sound. Physical illusions can be used on both living and technological systems. They are resisted by Intuition + Logic; non-living devices resist with their Object Resistance. The magician must generate more hits than the observer for the illusion to be considered real. If the spell is not completely resisted, the target is fully affected by the illusion.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.MANIPULATION,
        name: 'Manipulation',
        labels: {
            description: ''
        }
    }
];
const SPELL_DAMAGE = [
    { id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DAMAGE_ID.PHYSICAL, name: 'Physical', alias: 'P' },
    { id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DAMAGE_ID.STUN, name: 'Stun', alias: 'S' }
];
const SPELL_DURATIONS = [
    { id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.INSTANTANEOUS, name: 'Instantaneous', alias: 'I' },
    { id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.SUSTAINED, name: 'Sustained', alias: 'S' },
    { id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.PERMANENT, name: 'Permanent', alias: 'P' },
];
const SPELL_KINDS = [
    { id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_KIND_ID.SPELL, name: 'Spell' },
    { id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_KIND_ID.RITUAL, name: 'Ritual' },
    { id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_KIND_ID.PREPARATION, name: 'Preparation' },
    { id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_KIND_ID.FETISH_SPELL, name: 'Fetish Spell' },
    { id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_KIND_ID.FETISH_RITUAL, name: 'Fetish Ritual' }
];
const SPELL_RANGES = [
    { id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.TOUCH, name: 'Touch', alias: 'T' },
    { id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.LINE_OF_SIGHT, name: 'Line of Sight', alias: 'LOS' },
    { id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.LINE_OF_SIGHT_AREA, name: 'Line of Sight (Area)', alias: 'LOS(A)' }
];
const SPELL_TAGS = [
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.DIRECT,
        name: 'Direct',
        labels: {
            description: 'When your direct combat spell is successfully cast, it inflicts a number of boxes of damage equal to your net hits on the opposed test. The opposed test generally pits your Spellcasting + Magic [Force] against either Body (for physical spells) or Willpower (for mana spells). The target does not get to resist the damage, only the Spellcasting test.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.INDIRECT,
        name: 'Indirect',
        labels: {
            description: 'All indirect combat spells originate near the magician’s body (most magicians use their hands or eyes, but some use their feet for “power kicks” or emanate power from the entire body for a kind of an aura-throwing effect). The spell then is launched with an Opposed Test that pits the magician’s Spellcasting + Magic [Force] versus the target’s Reaction + Intuition, kind of like shooting a gun (in this case with bullets made of acid, or fire, or something equally unpleasant to be hit by). So you don’t really need to be able to see the target — you can cast these spells blindfolded or with artificial image enhancement — as long as you’ve got a clear line of fire. The Damage Value of a successful indirect combat spell is Force + net hits, with an AP equal to –(Force). Damage from an indirect combat spell is resisted with Body + Armor (adjusted for the spell’s AP). Area indirect spells travel from the magician to the point of detonation and then go boom. The test is like that for grenades (p. 181): a Spellcasting + Magic [Force] (3) Test with scatter of 2D6 meters. Unlike grenades, you get to add your net hits on this test to the Damage Value of the spell, but only if you beat the threshold; otherwise the spell still detonates, but the hits are used to reduce scatter by one meter per hit.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.ELEMENTAL_ACID,
        name: 'Acid',
        labels: {
            description: 'Acid damage is Physical. In addition to its normal damage, it also reduces the rating of any Armor it hits by 1. If the acid isn’t removed from the target (by washing it off, or because the acid is from a spell and evaporates into mana after the spell ends), then the acid continues to burn. Each Combat Turn the base DV of the acid is decreased by 1 and damage is applied again. The acid also continues to burn through armor reducing the target’s Armor rating by 1 until the acid is removed, neutralized, or loses all its base DV. The Armor reduction should be applied to worn Armor first but could be applied to Armor accessories (+Armor items) if the gamemaster allows. At the gamemaster’s discretion, acid can also create Light Smoke conditions in an area around the target.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.ELEMENTAL_COLD,
        name: 'Cold',
        labels: {
            description: 'Cold is just the absence of heat, but it hurts when too much heat is absent, and calling cold “absent heat” doesn’t make it any less painful. Cold damage is Physical. Additionally, cold damage can make armor brittle, liquids freeze, lubricants gum up, etc. Make a simple Armor Test for anything directly hit. If the armor gets no hits, it breaks and cannot be used as armor. It can be repaired with the Building & Repairing rules, p. 145. In the case of a glitch, it’s destroyed irreparably. With a critical glitch the armor breaks irreparably in a dangerous way.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.ELEMENTAL_ELECTRICITY,
        name: 'Electricity',
        labels: {
            description: 'A wide variety of nonlethal weapons are designed to incapacitate targets with electrical shock attacks, including stun batons, tasers, cyberware shock hands, and similar electrically charged weapons. These weapons rely on a contact discharge of electricity rather than kinetic energy. Spells and critter powers such as Lightning Bolt and Energy Aura cause similar effects.\nElectrical damage is treated as Stun or Physical damage depending on the source and/or target. The Non-conductivity armor upgrade (p. 438) adds its full rating to the Armor value. The gamemaster can also decide which (if any) other factors may modify the target’s damage, such as extra conductivity for a character covered in water.\nAn Electricity attack that does damage can stun and incapacitate the target as well, though if there is no damage, there is no secondary effect at all.\nSecondary effects for characters injured by Electricity damage include a –1 dice pool penalty on all actions and Defense Tests, but not Damage Resistance Tests, for 1 Combat Turn and an immediate Initiative Score reduction of 5. The dice pool penalty and Initiative Score reduction do not accumulate with multiple attacks, but the length of the penalty is extended by 1 Combat Turn for each successful damaging attack while a character is affected. If the character’s Initiative Score is reduced to 0 or below, they lose their last action. If they have no Initiative Score left the reduction comes on the start of the next Combat Turn.\nElectronic equipment and drones can also be affected by Electricity damage. They never suffer Stun damage so Electricity damage is Physical when used against electronics and drones. They resist damage as usual and suffer a secondary effect if they take even a single box of damage.\nThe secondary effect for electronics and drones damaged by Electricity damage is shorting out or overloading. In game terms this is reflected as secondary Matrix damage equal to half the Physical damage rounded down.\nVehicles can be damaged by Electricity attacks but do not suffer any secondary effects. Specific systems of vehicles can be targeted by a Called Shots (p. 195).'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.ELEMENTAL_FIRE,
        name: 'Fire',
        labels: {
            description: 'Fire damage is Physical. It can also make things catch fire. To determine if something catches fire, roll Armor Value + Fire Resistance – Fire AP (see Fire Armor Piercing Ratings table, below). The threshold on this test is the net hits rolled on the fire-based attack. If the item succeeds, it is not on fire (for now). Armor accessories are excluded from the test but the gamemaster may require them to make their own test.\n' +
                'When something catches fire, the fire has an initial Damage Value of 3. This damage is caused at the end of each Combat Turn, and the DV increases by 1 at the start of each subsequent Combat Turn until the item is completely destroyed or the fire is put out. You can fight the fire a number of ways (water, smothering, etc.), making an Agility + Intuition Test and reducing the fire’s DV by 1 for each hit. Remember, as long as the fire is burning it can ignite any nearby flammables, including furniture, vehicles, foliage, and elves.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.ACTIVE,
        name: 'Active',
        labels: {
            description: 'Active detection spells involve an Opposed Test between the caster’s Spellcasting + Magic [Force] and either Willpower + Logic (+ Counterspelling if available) [Mental] for living things with auras, (Force x 2) for magical objects, or the object resistance for mundane objects (p. 295). Counterspelling may be used to defend against active detection spells, even if the target is unaware of them being cast (for example, if they walk within range of an active Detect Enemies spell). When a spell affects multiple targets, either because it has an area effect or because it is sustained and may be encountered by multiple people, you should only make a single Spellcasting Test. Every potential target then makes an individual Spell Resistance Test and compares their result to yours. New targets may be detected as they enter the range of the spell, and they must make a Spell Resistance Test against your original Spellcasting Test.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.PASSIVE,
        name: 'Passive',
        labels: {
            description: 'A passive sense is simply “on” and feeds sensory input to the subject’s brain like other senses—no interpretation necessary. While the spell is sustained, Per- ception Tests using this sense have a limit equal to the net successes from casting of the spell instead of the subject’s Mental limit. Counterspelling cannot be used to defend against a passive sense, but once an opposing spellcaster realizes there is an active sustained spell, she can try dispelling it (see Dispelling, p. 295).'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.DIRECTIONAL,
        name: 'Directional',
        labels: {
            description: 'Works in one direction, like normal sense (ex: sight).'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.AREA,
        name: 'Area',
        labels: {
            description: 'The standard range of the sense a Detection spell grants is the spell’s Force x caster’s Magic in meters as a radius from the target of the spell.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.EXTENDED_AREA,
        name: 'Extended Area',
        labels: {
            description: 'Extended-range detection spells have a Force x Magic x 10 meter range. '
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.PSYCHIC,
        name: 'Psychic',
        labels: {
            description: 'Psychic spells providing some other special sense such as telepathy or precognition.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.ESSENCE,
        name: 'Essence',
        labels: {
            description: 'Low-Essence characters are more difficult to affect with some health spells. It’s hard to put the body back into its natural state when that state has been unnaturally altered. In game terms, this means you take a dice pool modifier equal to the target’s actual Essence minus his maximum Essence (which will turn out to be 0 or a negative number), rounded up.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.OBVIOUS,
        name: 'Obvious',
        labels: {
            description: 'illusions are used solely for entertainment and cannot fool subjects into believing they are real.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.REALISTIC,
        name: 'Realistic',
        labels: {
            description: 'Illusions seem completely real.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.SINGLE_SENSE,
        name: 'Single-Sense',
        labels: {
            description: 'illusions affect only one sense.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.MULTI_SENSE,
        name: 'Multi-Sense',
        labels: {
            description: 'Illusions affect all senses.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.DAMAGING,
        name: 'Damaging',
        labels: {
            description: 'Manipulation spells that cause damage have a Damage Value equal to their Force (unaltered by hits on the Spellcasting test) and 0 AP. The damage is resisted with Body + Armor.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.ENVIRONMENTAL,
        name: 'Environmental',
        labels: {
            description: 'These spells don’t really have a target, and they don’t really affect targets directly. They just affect an area.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.PHYSICAL,
        name: 'Physical',
        labels: {
            description: 'These spells affect physical forms and are usually defended against with a living target’s Body + Strength or an inanimate object’s Object Resistance dice pool.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.MENTAL,
        name: 'Mental',
        labels: {
            description: 'Targets resist these spells with Logic + Willpower. Keep track of your net hits, as they determine how long you can sustain the spell. While the spell is sustained, the target may take a Complex Action on their turn to resist by making a Logic + Willpower Test with a dice pool penalty equal to the spell’s Force; every hit the target gets reduces the caster’s net hits by 1. The one being controlled can take this action even if they wouldn’t get an action because of the spell. The spell ends when your net hits are reduced to zero. A victim of mental manipulation spell may roll to notice the magical effect according to the usual rules for Perceiving Magic (p. 280). Some of the less subtle mental spells (Control Actions) are pretty obvious, but more subtle spells (like Control Thoughts) can be pretty insidious.'
        }
    }
];
const SPELL_TYPES = [
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.PHYSICAL,
        name: 'Physical',
        labels: {
            alias: 'P',
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.ILLUSION]: 'Physical illusion spells create actual images or alter physical properties, such as light or sound. Physical illusions can be used on both living and technological systems. They are resisted by Intuition + Logic; non-living devices resist with their Object Resistance. The magician must generate more hits than the observer for the illusion to be considered real. If the spell is not completely resisted, the target is fully affected by the illusion.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.MANA,
        name: 'Mana',
        labels: {
            alias: 'M',
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.ILLUSION]: 'Mana-based Illusion spells affect the mind and are ineffective against technological viewing systems like cameras. Mana illusions are resisted by Logic + Willpower. Some mana illusions affect the target’s senses directly; others affect the senses of anyone perceiving the subject of the spell (though you’re never affected by your own illusion spell). Though mana-based illusions can be created on the astral plane, their magical auras give them away as illusions to anyone who makes a successful Assensing Test — illusions can’t fool Assensing and cannot be used to disguise or create auras.'
        }
    }
];
const SPELLS = [
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.ACID_STREAM,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Acid Stream',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.COMBAT,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.INDIRECT, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.ELEMENTAL_ACID],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.PHYSICAL,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.LINE_OF_SIGHT,
        damage: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DAMAGE_ID.PHYSICAL,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.INSTANTANEOUS,
        drain: -3,
        specialty: false,
        labels: {
            description: 'This spell create a powerful corrosive that sprays the target, causing terrible burns and eating away organic and metallic material—treat it as Acid damage (p. 170), with appropriate effects on the affected area and any objects therein. The acid quickly evaporates, but the damage it inflicts remains. Acid Stream is a single-target spell.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.TOXIC_WAVE,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Toxic Wave',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.COMBAT,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.INDIRECT, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.ELEMENTAL_ACID],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.PHYSICAL,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.LINE_OF_SIGHT_AREA,
        damage: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DAMAGE_ID.PHYSICAL,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.INSTANTANEOUS,
        drain: -1,
        specialty: false,
        labels: {
            description: 'This spell create a powerful corrosive that sprays the target, causing terrible burns and eating away organic and metallic material—treat it as Acid damage (p. 170), with appropriate effects on the affected area and any objects therein. The acid quickly evaporates, but the damage it inflicts remains. Toxic Wave is an area spell.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.PUNCH,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Punch',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.COMBAT,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.INDIRECT],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.PHYSICAL,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.TOUCH,
        damage: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DAMAGE_ID.STUN,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.INSTANTANEOUS,
        drain: -6,
        specialty: false,
        labels: {
            description: 'This spell smack the target with invisible psychokinetic force, similar to a bruising punch, that inflicts Stun damage. Punch requires you to touch the target.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.CLOUT,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Clout',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.COMBAT,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.INDIRECT],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.PHYSICAL,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.LINE_OF_SIGHT,
        damage: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DAMAGE_ID.PHYSICAL,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.INSTANTANEOUS,
        drain: -3,
        specialty: false,
        labels: {
            description: 'This spell smack the target with invisible psychokinetic force, similar to a bruising punch, that inflicts Stun damage. Clout affects a single target.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.BLAST,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Blast',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.COMBAT,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.INDIRECT],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.PHYSICAL,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.LINE_OF_SIGHT_AREA,
        damage: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DAMAGE_ID.PHYSICAL,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.INSTANTANEOUS,
        drain: 0,
        specialty: false,
        labels: {
            description: 'This spell smack the targets with invisible psychokinetic force, similar to a bruising punch, that inflicts Stun damage. Blast is an area spell.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.DEATH_TOUCH,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Death Touch',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.COMBAT,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.DIRECT],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.MANA,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.TOUCH,
        damage: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DAMAGE_ID.PHYSICAL,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.INSTANTANEOUS,
        drain: -6,
        specialty: false,
        labels: {
            description: 'Death Touch channel destructive magical power into the target, doing Physical damage. The damage inflicted is similar to massive cellular die off from radiation or necrotizing fasciitis, but without the continuing effects. But still, ick. Since they are mana spells, spells in this group only affect living and magical targets and are resisted with Willpower. Death Touch requires the magician to touch the target.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.MANABOLT,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Manabolt',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.COMBAT,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.DIRECT],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.MANA,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.LINE_OF_SIGHT,
        damage: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DAMAGE_ID.PHYSICAL,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.INSTANTANEOUS,
        drain: -3,
        specialty: false,
        labels: {
            description: 'Manabolt channel destructive magical power into the target, doing Physical damage. The damage inflicted is similar to massive cellular die off from radiation or necrotizing fasciitis, but without the continuing effects. But still, ick. Since they are mana spells, spells in this group only affect living and magical targets and are resisted with Willpower. Manabolt affects a single target.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.MANABALL,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Manaball',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.COMBAT,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.DIRECT],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.MANA,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.LINE_OF_SIGHT_AREA,
        damage: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DAMAGE_ID.PHYSICAL,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.INSTANTANEOUS,
        drain: 0,
        specialty: false,
        labels: {
            description: 'Manaball channel destructive magical power into the target, doing Physical damage. The damage inflicted is similar to massive cellular die off from radiation or necrotizing fasciitis, but without the continuing effects. But still, ick. Since they are mana spells, spells in this group only affect living and magical targets and are resisted with Willpower. Manaball is an area-effect spell.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.FLAMETHROWER,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Flamethrower',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.COMBAT,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.INDIRECT, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.ELEMENTAL_FIRE],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.PHYSICAL,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.LINE_OF_SIGHT,
        damage: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DAMAGE_ID.PHYSICAL,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.INSTANTANEOUS,
        drain: -3,
        specialty: false,
        labels: {
            description: 'This spell create an explosion of flames that flash into existence and scorch the target, giving them the double benefit of causing pain and being intimidating as hell. These spells deal Fire damage (p.171).These flames burn out after striking the target, but their secondary effects may ignite flammable materials that continue to burn after the spell is exhausted. Flamethrower is a single-target spell.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.FIREBALL,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Fireball',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.COMBAT,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.INDIRECT, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.ELEMENTAL_FIRE],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.PHYSICAL,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.LINE_OF_SIGHT_AREA,
        damage: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DAMAGE_ID.PHYSICAL,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.INSTANTANEOUS,
        drain: -1,
        specialty: false,
        labels: {
            description: 'This spell create an explosion of flames that flash into existence and scorch the targets, giving them the double benefit of causing pain and being intimidating as hell. These spells deal Fire damage (p.171).These flames burn out after striking the target, but their secondary effects may ignite flammable materials that continue to burn after the spell is exhausted. Fireball is an area spell.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.LIGHTNING_BOLT,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Lightning Bolt',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.COMBAT,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.INDIRECT, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.ELEMENTAL_ELECTRICITY],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.PHYSICAL,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.LINE_OF_SIGHT,
        damage: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DAMAGE_ID.PHYSICAL,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.INSTANTANEOUS,
        drain: -3,
        specialty: false,
        labels: {
            description: 'This spell create and direct vicious strikes of electricity that cause Electricity damage (p. 170). Lightning Bolt is a single target spell.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.BALL_LIGHTNING,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Ball Lightning',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.COMBAT,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.INDIRECT, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.ELEMENTAL_ELECTRICITY],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.PHYSICAL,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.LINE_OF_SIGHT_AREA,
        damage: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DAMAGE_ID.PHYSICAL,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.INSTANTANEOUS,
        drain: -1,
        specialty: false,
        labels: {
            description: 'This spell create and direct vicious strikes of electricity that cause Electricity damage (p. 170). Ball Lightning is an area spell.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.SHATTER,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Shatter',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.COMBAT,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.DIRECT],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.PHYSICAL,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.TOUCH,
        damage: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DAMAGE_ID.PHYSICAL,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.INSTANTANEOUS,
        drain: -6,
        specialty: false,
        labels: {
            description: 'This spell channel destructive magical power into the targets causing Physical damage. The target is cooked from the inside, like magically microwaving a hot dog. As physical energies, they can affect both living and non-living targets and are resisted by the target’s Body. Shatter requires you to touch the target.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.POWERBOLT,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'PowerBolt',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.COMBAT,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.DIRECT],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.PHYSICAL,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.LINE_OF_SIGHT,
        damage: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DAMAGE_ID.PHYSICAL,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.INSTANTANEOUS,
        drain: -3,
        specialty: false,
        labels: {
            description: 'This spell channel destructive magical power into the targets causing Physical damage. The target is cooked from the inside, like magically microwaving a hot dog. As physical energies, they can affect both living and non-living targets and are resisted by the target’s Body. Powerbolt affects a single target.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.POWERBALL,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'PowerBall',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.COMBAT,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.DIRECT],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.PHYSICAL,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.LINE_OF_SIGHT_AREA,
        damage: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DAMAGE_ID.PHYSICAL,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.INSTANTANEOUS,
        drain: 0,
        specialty: false,
        labels: {
            description: 'This spell channel destructive magical power into the targets causing Physical damage. The target is cooked from the inside, like magically microwaving a hot dog. As physical energies, they can affect both living and non-living targets and are resisted by the target’s Body. Powerball is an area spell.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.KNOCKOUT,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Knockout',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.COMBAT,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.DIRECT],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.MANA,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.TOUCH,
        damage: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DAMAGE_ID.STUN,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.INSTANTANEOUS,
        drain: -6,
        specialty: false,
        labels: {
            description: 'This spell channel magical energy directly into the target, causing Stun damage. It is sometimes referred to as “sleep” spell because it can render targets unconscious but keep them alive, in the cases where you’d prefer more polite violence. Knockout requires the magician to touch the target.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.STUNBOLT,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'StunBolt',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.COMBAT,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.DIRECT],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.MANA,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.LINE_OF_SIGHT,
        damage: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DAMAGE_ID.STUN,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.INSTANTANEOUS,
        drain: -3,
        specialty: false,
        labels: {
            description: 'This spell channel magical energy directly into the target, causing Stun damage. It is sometimes referred to as “sleep” spell because it can render targets unconscious but keep them alive, in the cases where you’d prefer more polite violence. Stunbolt affects a single target.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.STUNBALL,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'StunBall',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.COMBAT,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.DIRECT],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.MANA,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.LINE_OF_SIGHT_AREA,
        damage: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DAMAGE_ID.STUN,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.INSTANTANEOUS,
        drain: 0,
        specialty: false,
        labels: {
            description: 'This spell channel magical energy directly into the target, causing Stun damage. It is sometimes referred to as “sleep” spell because it can render targets unconscious but keep them alive, in the cases where you’d prefer more polite violence. Stunball is an area spell.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.ANALYZE_DEVICE,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Analyze Device',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.DETECTION,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.ACTIVE, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.DIRECTIONAL],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.PHYSICAL,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.TOUCH,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.SUSTAINED,
        drain: -3,
        specialty: false,
        labels: {
            description: 'This spell allows the subject to analyze the purpose and operation of a device or piece of equipment within range of the sense. The casting of the spell is opposed by the object’s resistance (p. 295). Each net hit can be used to provide a piece of information about the device that would not be readily apparent (for example, it would not give the information that it is a Renraku-manufactured device if the thing is emblazoned with a huge Renraku logo, but it might say what the basic function of the thing is). Each net hit also gives the subject a bonus die while operating the device and allows the subject to ignore any skill-defaulting modifiers for using it as long as the spell is sustained.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.ANALYZE_MAGIC,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Analyze Magic',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.DETECTION,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.ACTIVE, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.DIRECTIONAL],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.PHYSICAL,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.TOUCH,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.SUSTAINED,
        drain: -3,
        specialty: false,
        labels: {
            description: 'This spell allows the subject to analyze the purpose of a magical object (e.g., foci, alchemical preparations, magical lodges, active rituals). Treat the net hits from the Spellcasting Test as hits on the Assensing Table (p. 313), except the subject isn’t required to be perceiving astrally.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.ANALYZE_TRUTH,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Analyze Truth',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.DETECTION,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.ACTIVE, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.DIRECTIONAL],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.MANA,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.TOUCH,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.SUSTAINED,
        drain: -2,
        specialty: false,
        labels: {
            description: 'The subject can tell whether a target’s statements are the truth (or at least if the subject honestly believes them to be true).The spell needs at least 1 net hit to determine validity of a selected statement. The spell does not work on written materials or items recorded through any sort of technological medium. The subject must hear a statement in person (with the target within range) to be able to judge its truth.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.CLAIRAUDIENCE,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Clairaudience',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.DETECTION,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.PASSIVE, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.DIRECTIONAL],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.MANA,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.TOUCH,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.SUSTAINED,
        drain: -3,
        specialty: false,
        labels: {
            description: 'The subject can hear distant sounds as if physically present at a chosen point within the sensory range of the spell. The listening point may be moved to any other point within range of the spell as a Complex Action. While using Clairaudience, the subject cannot use her normal hearing. This spell doesn’t translate visual images, only sounds (and only sounds within the subject’s natural range of hearing; augmented hearing does not apply).'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.CLAIRVOYANCE,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Clairvoyance',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.DETECTION,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.PASSIVE, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.DIRECTIONAL],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.MANA,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.TOUCH,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.SUSTAINED,
        drain: -3,
        specialty: false,
        labels: {
            description: 'The subject can see distant scenes as if physically present at a chosen point within the sensory range of the spell. The visual point may be moved to any other point within range of the spell as a Complex Action. The subject can’t use normal vision or astral perception while using Clairvoyance. This spell doesn’t translate sound, only vision, and it doesn’t work with augmented vision. You can’t target spells through Clairvoyance.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.COMBAT_SENSE,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Combat Sense',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.DETECTION,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.PASSIVE, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.PSYCHIC],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.MANA,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.TOUCH,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.SUSTAINED,
        drain: 0,
        specialty: false,
        labels: {
            description: 'The subject can subconsciously analyze combat and other dangerous situations within range, sensing events a split-second before they happen. Every hit on the Spellcasting Test adds 1 die for Reaction on Surprise Tests, and also to rolls made when defending against ranged and melee attacks as long as the spell remains in effect.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.DETECT_ENEMIES,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Detect Enemies',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.DETECTION,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.ACTIVE, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.AREA],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.MANA,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.TOUCH,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.SUSTAINED,
        drain: -2,
        specialty: false,
        labels: {
            description: 'The subject can detect living targets within range who have hostile intentions toward him. The spell does not detect traps (since they aren’t alive), nor can it detect someone about to shoot into a crowd at random (since the hostility is not directed at the subject of the spell). The spell can detect targets preparing an ambush or other surprise attack directed at the subject.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.DETECT_ENEMIES_EXTENDED,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Detect Enemies, Extended',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.DETECTION,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.ACTIVE, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.EXTENDED_AREA],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.MANA,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.TOUCH,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.SUSTAINED,
        drain: 0,
        specialty: false,
        labels: {
            description: 'The subject can detect living targets within range who have hostile intentions toward him. The spell does not detect traps (since they aren’t alive), nor can it detect someone about to shoot into a crowd at random (since the hostility is not directed at the subject of the spell). The spell can detect targets preparing an ambush or other surprise attack directed at the subject.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.DETECT_INDIVIDUAL,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Detect Individual',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.DETECTION,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.ACTIVE, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.AREA],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.MANA,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.TOUCH,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.SUSTAINED,
        drain: -3,
        specialty: false,
        labels: {
            description: 'The subject can detect the presence of a particular individual anywhere within range of the sense. You need to specify the individual during casting, someone you know or at least have met in the past.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.DETECT_LIFE,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Detect Life',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.DETECTION,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.ACTIVE, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.AREA],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.MANA,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.TOUCH,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.SUSTAINED,
        drain: -3,
        specialty: false,
        labels: {
            description: 'The subject detects all living beings (but not spirits) within range of the sense and knows their number and relative location. In a crowded area, the spell is virtually useless, picking up a blurred mass of traces of life.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.DETECT_LIFE_EXTENDED,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Detect Life, Extended',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.DETECTION,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.ACTIVE, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.EXTENDED_AREA],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.MANA,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.TOUCH,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.SUSTAINED,
        drain: -1,
        specialty: false,
        labels: {
            description: 'The subject detects all living beings (but not spirits) within range of the sense and knows their number and relative location. In a crowded area, the spell is virtually useless, picking up a blurred mass of traces of life.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.DETECT_LIFE_FORM,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Detect [Life Form]',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.DETECTION,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.ACTIVE, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.AREA],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.MANA,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.TOUCH,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.SUSTAINED,
        drain: -2,
        specialty: true,
        labels: {
            description: 'The subject detects all of a specified type of life form within the range of the sense and knows their number and relative location. This is actually several different spells that must be learned separately, one for each type of life form that a caster might like to detect (Detect Orks, Detect Elves, Detect Dragons, and so forth), which are learned separately.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.DETECT_LIFE_FORM_EXTENDED,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Detect [Life Form], Extended',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.DETECTION,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.ACTIVE, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.EXTENDED_AREA],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.MANA,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.TOUCH,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.SUSTAINED,
        drain: 0,
        specialty: true,
        labels: {
            description: 'The subject detects all of a specified type of life form within the range of the sense and knows their number and relative location. This is actually several different spells that must be learned separately, one for each type of life form that a caster might like to detect (Detect Orks, Detect Elves, Detect Dragons, and so forth), which are learned separately.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.DETECT_MAGIC,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Detect Magic',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.DETECTION,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.ACTIVE, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.AREA],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.MANA,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.TOUCH,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.SUSTAINED,
        drain: -2,
        specialty: false,
        labels: {
            description: 'The subject can detect the presence of all foci, spells, wards, magical lodges, alchemical preparations, active rituals, and spirits within range of the sense. It does not detect Awakened characters or critters, astral signatures, alchemical preparations that that have expired or already triggered, or the effects of permanent spells once they have become permanent.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.DETECT_MAGIC_EXTENDED,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Detect Magic, Extended',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.DETECTION,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.ACTIVE, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.EXTENDED_AREA],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.MANA,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.TOUCH,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.SUSTAINED,
        drain: 0,
        specialty: false,
        labels: {
            description: 'The subject can detect the presence of all foci, spells, wards, magical lodges, alchemical preparations, active rituals, and spirits within range of the sense. It does not detect Awakened characters or critters, astral signatures, alchemical preparations that that have expired or already triggered, or the effects of permanent spells once they have become permanent.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.DETECT_OBJECT,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Detect [Object]',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.DETECTION,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.ACTIVE, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.AREA],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.PHYSICAL,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.TOUCH,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.SUSTAINED,
        drain: -2,
        specialty: true,
        labels: {
            description: 'The subject detects all of a specified type of object within range of the sense and knows their number and relative location. Each type of object requires a separate spell (Detect Guns, Detect Computers, Detect Explosives, and so forth). These spells must all be learned and cast separately.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.MINDLINK,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'MindLink',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.DETECTION,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.ACTIVE, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.PSYCHIC],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.MANA,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.TOUCH,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.SUSTAINED,
        drain: -1,
        specialty: false,
        labels: {
            description: 'Mindlink allows the magician and one voluntary subject to communicate mentally, exchanging conversation, emotions, and mental images. One hit on the Spellcasting Test is enough to establish the link. The subject must remain within range of the magician for the Mindlink to work.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.MIND_PROBE,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Mind Probe',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.DETECTION,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.ACTIVE, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.DIRECTIONAL],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.MANA,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.TOUCH,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.SUSTAINED,
        drain: 0,
        specialty: false,
        labels: {
            description: 'This spell allows the subject to telepathically probe the mind of a specific target within range of the sense (chosen when the spell is cast). The target is aware of the probing, though they may not know the source of the spell. The number of net hits you get on the spell determines what kind of information the subject can read, given on the table. The subject may probe for one piece of information per Complex Action while the spell is sustained. Additional uses of Mind Probe against the same target within a number of hours equal to the target’s Willpower inflict a –2 dice pool modifier on the Spellcasting attempt.\n\nNet Hits / Results\n1-2 - The subject can read the target’s surface thoughts only.\n3-4 - The subject can find out anything the target consciously knows and view the target’s recent memories (up to 72 hours).\n5+ - The subject can probe the target’s subconscious, gaining information the target may not even be consciously aware of, like psychological quirks, deep fears, or hidden memories.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.ANTIDOTE,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Antidote',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.HEALTH,
        tags: [],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.MANA,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.TOUCH,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.PERMANENT,
        drain: -3,
        specialty: false,
        labels: {
            description: 'This spell helps a poisoned subject overcome a toxin. Casters use it after the target has been poisoned, but be- fore the target needs to make her Toxin Resistance Test, based on the Speed of the toxin. Add the hits from this spell directly to the hits from the Toxin Resistance Test.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.CURE_DISEASE,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Cure Disease',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.HEALTH,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.ESSENCE],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.MANA,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.TOUCH,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.PERMANENT,
        drain: -4,
        specialty: false,
        labels: {
            description: 'This spell is used at any point after infection to help a patient overcome illness. The infected character receives a number of additional dice on her Disease Resistance Test equal to the spell’s net hits until the patient recovers (or dies). It does not heal any damage already inflicted by the disease (that requires a separate Healing spell).'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.DECREASE_ATTRIBUTE,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Decrease [Attribute]',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.HEALTH,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.ESSENCE],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.PHYSICAL,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.TOUCH,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.SUSTAINED,
        drain: -2,
        specialty: true,
        labels: {
            description: 'This spell weakens the target by decreasing a designated Attribute. A version of this spell exists for each Physical and Mental attribute, but not for Special attributes (Initiative, Edge, Essence, Magic, or Resonance). It affects both natural and augmented Attributes. This spell is cast with an Opposed Spellcasting + Magic [Force] v. (targeted Attribute) + Willpower Test. If the magician wins, the Attribute is reduced by the spell’s net hits. If a Physical Attribute is reduced to 0, the victim is incapacitated and paralyzed. If a Mental Attribute is reduced to 0, the victim stands still, mindlessly confused. Decreasing an Attribute also affects any other derived statistics that use it (for example, if Reaction or Intuition is lowered, Initiative is lowered as well) as long as the spell is sustained.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.DETOX,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Detox',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.HEALTH,
        tags: [],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.MANA,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.TOUCH,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.PERMANENT,
        drain: -6,
        specialty: false,
        labels: {
            description: 'Detox relieves the side effects of a drug or poison. The Force of the spell must equal or exceed the toxin’s base DV. A single hit is sufficient to eliminate all symp- toms. Detox does not heal or prevent damage done by toxins, but it eliminates any side effects they may have on the victim (dizziness, hallucinations, nausea, pain, and so forth). Detox is the hangover cure of choice among those who can afford it.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.HEAL,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Heal',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.HEALTH,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.ESSENCE],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.MANA,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.TOUCH,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.PERMANENT,
        drain: -4,
        specialty: false,
        labels: {
            description: 'Heal repairs physical injuries. It heals a number of boxes of Physical damage equal to the spell’s hits from the Spellcasting Test. Hits can also be used to reduce the base time for the spell to become permanent; each hit spent this way shaves off 1 Combat Turn (you can split hits between healing and reducing time). Any boxes of Physical damage your target still has after any boxes are healed magically can only be healed by time and rest.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.INCREASE_ATTRIBUTE,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Increase [Attribute]',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.HEALTH,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.ESSENCE],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.PHYSICAL,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.TOUCH,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.SUSTAINED,
        drain: -3,
        specialty: true,
        labels: {
            description: 'This spell increases an Attribute (natural or augmented) on a voluntary subject. A version of this spell exists for each Physical and Mental attribute, but not for Special Attributes (Initiative, Edge, Essence, Magic, or Resonance). The Force of the spell must equal or exceed the (augmented) value of the Attribute being affected. The Attribute is increased by an amount equal to the hits scored, up to the target’s augmented maximum (any hits that would increase the Attribute beyond its augmented maximum are ignored). Each Attribute can only be affected by a single Increase Attribute spell at a time. Note that increasing an Attribute may affect other derived statistics (Increase Reaction also affects Initiative, for example, while Increase Body adds extra boxes to the character’s Physical Condition Monitor for as long as the spell lasts).'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.INCREASE_REFLEXES,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Increase Reflexes',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.HEALTH,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.ESSENCE],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.PHYSICAL,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.TOUCH,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.SUSTAINED,
        drain: 0,
        specialty: false,
        labels: {
            description: 'This spell increases the initiative of a subject. Each hit rolled on the Spellcasting Test adds +1 to the target’s Initiative, and every two hits adds one Initiative Die. A character can only be affected by a single Increase Reflexes spell at a time, and the maximum Initiative Dice anyone can have is +5D6.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.OXYGENATE,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Oxygenate',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.HEALTH,
        tags: [],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.PHYSICAL,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.TOUCH,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.SUSTAINED,
        drain: -5,
        specialty: false,
        labels: {
            description: 'This spell oxygenates the blood of a voluntary subject, providing extra Body dice (1 die for every hit) to resist suffocation, strangulation, the effects of inhaled gas, or any other effect of oxygen deprivation. The spell also allows the subject to breathe underwater.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.PROPHYLAXIS,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Prophylaxis',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.HEALTH,
        tags: [],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.MANA,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.TOUCH,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.SUSTAINED,
        drain: -4,
        specialty: false,
        labels: {
            description: 'This spell provides an extra die per hit for a subject to resist infection, drugs, or toxins. The spell does not discriminate between harmful and beneficial drugs, so the subject also resists medicines and other helpful drugs while under its effects. Reduce the bonuses of a beneficial drug by 1 for every hit rolled in the casting; three or more hits block effects that do not have a bonus or penalty associated with them.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.RESIST_PAIN,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Resist Pain',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.HEALTH,
        tags: [],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.MANA,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.TOUCH,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.PERMANENT,
        drain: -4,
        specialty: false,
        labels: {
            description: 'Resist Pain allows the subject to ignore the pain of injuries, reducing penalties from Physical or Stun damage. Each hit on the Spellcasting Test removes the effect of one box of damage from each of the subject’s Condition Monitor tracks. It does not remove the damage itself; it only eliminates the modifiers. If all of the boxes on the track are filled, the character still falls unconscious. The spell is permanent in that the boost to the patient’s endorphin levels does not wear off. If the subject’s damage rises above the level at which the patient is resisting pain or if the existing injuries heal, the spell dissipates. A person can only be under the effects of one Resist Pain spell at a time (the one with the most hits).'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.STABILIZE,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Stabilize',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.HEALTH,
        tags: [],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.MANA,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.TOUCH,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.PERMANENT,
        drain: -4,
        specialty: false,
        labels: {
            description: 'When applied to a character with a filled Physical damage track, this spell stabilizes all vital functions and prevents the character from dying. The spell’s Force must equal or exceed the overflow damage already taken when the spell starts. The full time must be taken for the spell to become permanent before the character is truly stabilized; hits reduce the time it takes by 1 Combat Turn each. If successful, the spell prevents the character from taking further damage from Physical Damage Overflow (p. 209).'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.AGONY,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Agony',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.ILLUSION,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.REALISTIC, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.SINGLE_SENSE],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.MANA,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.LINE_OF_SIGHT,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.SUSTAINED,
        drain: -4,
        specialty: false,
        labels: {
            description: 'A favorite of mages going through bad break-ups, Agony inflicts an illusion of terrible pain on the target. Each net hit scored by the magician temporarily inflicts 1 box of Physical and 1 box of Stun damage on the target. It is not actual damage, only a measure of the effect of the spell. The target is affected the same as if the damage were real, with the usual injury penalties. If the target’s damage boxes are completely filled, he is racked with pain, unable to move or act. Once the spell is ended, the pain and damage boxes immediately go away. Agony affects a single target.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.MASS_AGONY,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Mass Agony',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.ILLUSION,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.REALISTIC, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.SINGLE_SENSE],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.MANA,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.LINE_OF_SIGHT_AREA,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.SUSTAINED,
        drain: -2,
        specialty: false,
        labels: {
            description: 'A favorite of mages going through bad break-ups, Agony inflicts an illusion of terrible pain on the target. Each net hit scored by the magician temporarily inflicts 1 box of Physical and 1 box of Stun damage on the target. It is not actual damage, only a measure of the effect of the spell. The target is affected the same as if the damage were real, with the usual injury penalties. If the target’s damage boxes are completely filled, he is racked with pain, unable to move or act. Once the spell is ended, the pain and damage boxes immediately go away. Mass Agony is an area spell.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.BUGS,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Bugs',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.ILLUSION,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.REALISTIC, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.MULTI_SENSE],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.MANA,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.LINE_OF_SIGHT,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.SUSTAINED,
        drain: -3,
        specialty: false,
        labels: {
            description: 'This spell make the target believe that small bugs of various persuasions are crawling over their entire body, biting them, scurrying about, and crawling into assorted orifices. The bugs look, feel, smell, and even taste real. The illusion is usually enough to make any target who fails to resist freak out. For each net hit you get, the target loses 2 from their Initiative Score. If you sustain the spell, they lose the same amount from their Initiative Score at the beginning of each Combat Turn. Bugs affects a single target.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.SWARM,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Swarm',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.ILLUSION,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.REALISTIC, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.MULTI_SENSE],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.MANA,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.LINE_OF_SIGHT_AREA,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.SUSTAINED,
        drain: -1,
        specialty: false,
        labels: {
            description: 'This spell make the target believe that small bugs of various persuasions are crawling over their entire body, biting them, scurrying about, and crawling into assorted orifices. The bugs look, feel, smell, and even taste real. The illusion is usually enough to make any target who fails to resist freak out. For each net hit you get, the target loses 2 from their Initiative Score. If you sustain the spell, they lose the same amount from their Initiative Score at the beginning of each Combat Turn. Swarm is an area spell.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.CONFUSION,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Confusion',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.ILLUSION,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.REALISTIC, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.MULTI_SENSE],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.MANA,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.LINE_OF_SIGHT,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.SUSTAINED,
        drain: -3,
        specialty: false,
        labels: {
            description: 'This spell produce a storm of conflicting sensations and images to confuse the senses. For each net hit on the Spellcasting Test, the target suffers a –1 dice pool modifier to all tests due to the distraction. Confusion affects a single target.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.MASS_CONFUSION,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Mass Confusion',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.ILLUSION,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.REALISTIC, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.MULTI_SENSE, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.AREA],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.MANA,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.LINE_OF_SIGHT_AREA,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.SUSTAINED,
        drain: -1,
        specialty: false,
        labels: {
            description: 'This spell produce a storm of conflicting sensations and images to confuse the senses. For each net hit on the Spellcasting Test, the target suffers a –1 dice pool modifier to all tests due to the distraction. Mass Confusion is an area spell.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.CHAOS,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Chaos',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.ILLUSION,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.REALISTIC, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.MULTI_SENSE],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.PHYSICAL,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.LINE_OF_SIGHT,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.SUSTAINED,
        drain: -2,
        specialty: false,
        labels: {
            description: 'This spell produce a storm of conflicting sensations and images to confuse the senses. For each net hit on the Spellcasting Test, the target suffers a –1 dice pool modifier to all tests due to the distraction. The Chaos spell is a physical version of Confusion (affects a single target), so it also affects technological systems and sensing devices.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.CHAOTIC_WORLD,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Chaotic World',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.ILLUSION,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.REALISTIC, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.MULTI_SENSE, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.AREA],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.PHYSICAL,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.LINE_OF_SIGHT_AREA,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.SUSTAINED,
        drain: 0,
        specialty: false,
        labels: {
            description: 'This spell produce a storm of conflicting sensations and images to confuse the senses. For each net hit on the Spellcasting Test, the target suffers a –1 dice pool modifier to all tests due to the distraction. The Chaotic World spell is a physical version of Mass Confusion (an area spell), so it also affects technological systems and sensing devices.'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.ENTERTAINMENT,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Entertainment',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.ILLUSION,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.OBVIOUS, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.MULTI_SENSE, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.AREA],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.MANA,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.LINE_OF_SIGHT_AREA,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.SUSTAINED,
        drain: -3,
        specialty: false,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.TRID_ENTERTAINMENT,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Trid Entertainment',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.ILLUSION,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.OBVIOUS, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.MULTI_SENSE, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.AREA],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.PHYSICAL,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.LINE_OF_SIGHT_AREA,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.SUSTAINED,
        drain: -2,
        specialty: false,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.INVISIBILITY,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Invisibility',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.ILLUSION,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.REALISTIC, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.SINGLE_SENSE],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.MANA,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.LINE_OF_SIGHT,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.SUSTAINED,
        drain: -2,
        specialty: false,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.IMPROVED_INVISIBILITY,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Improved Invisibility',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.ILLUSION,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.REALISTIC, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.SINGLE_SENSE],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.PHYSICAL,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.LINE_OF_SIGHT,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.SUSTAINED,
        drain: -1,
        specialty: false,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.MASK,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Mask',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.ILLUSION,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.REALISTIC, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.MULTI_SENSE],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.MANA,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.TOUCH,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.SUSTAINED,
        drain: -2,
        specialty: false,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.PHYSICAL_MASK,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Physical Mask',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.ILLUSION,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.REALISTIC, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.MULTI_SENSE],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.PHYSICAL,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.TOUCH,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.SUSTAINED,
        drain: -1,
        specialty: false,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.PHANTASM,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Phantasm',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.ILLUSION,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.REALISTIC, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.MULTI_SENSE, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.AREA],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.MANA,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.LINE_OF_SIGHT_AREA,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.SUSTAINED,
        drain: -1,
        specialty: false,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.TRID_PHANTASM,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Trid Phantasm',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.ILLUSION,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.REALISTIC, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.MULTI_SENSE, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.AREA],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.PHYSICAL,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.LINE_OF_SIGHT_AREA,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.SUSTAINED,
        drain: 0,
        specialty: false,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.HUSH,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Hush',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.ILLUSION,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.REALISTIC, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.SINGLE_SENSE, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.AREA],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.MANA,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.LINE_OF_SIGHT_AREA,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.SUSTAINED,
        drain: -2,
        specialty: false,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.SILENCE,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Silence',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.ILLUSION,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.REALISTIC, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.SINGLE_SENSE, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.AREA],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.PHYSICAL,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.LINE_OF_SIGHT_AREA,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.SUSTAINED,
        drain: -1,
        specialty: false,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.STEALTH,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Stealth',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.ILLUSION,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.REALISTIC, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.SINGLE_SENSE],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.PHYSICAL,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.LINE_OF_SIGHT,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.SUSTAINED,
        drain: -2,
        specialty: false,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.ANIMATE,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Animate',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.MANIPULATION,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.PHYSICAL],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.PHYSICAL,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.LINE_OF_SIGHT,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.SUSTAINED,
        drain: -1,
        specialty: false,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.MASS_ANIMATE,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Mass Animate',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.MANIPULATION,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.PHYSICAL, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.AREA],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.PHYSICAL,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.LINE_OF_SIGHT_AREA,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.SUSTAINED,
        drain: 1,
        specialty: false,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.ARMOR,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Armor',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.MANIPULATION,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.PHYSICAL],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.PHYSICAL,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.LINE_OF_SIGHT,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.SUSTAINED,
        drain: -2,
        specialty: false,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.CONTROL_ACTIONS,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Control Actions',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.MANIPULATION,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.MENTAL],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.MANA,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.LINE_OF_SIGHT,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.SUSTAINED,
        drain: -1,
        specialty: false,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.MOB_CONTROL,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Mob Control',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.MANIPULATION,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.MENTAL, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.AREA],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.MANA,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.LINE_OF_SIGHT_AREA,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.SUSTAINED,
        drain: 1,
        specialty: false,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.CONTROL_THOUGHTS,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Control Thoughts',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.MANIPULATION,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.MENTAL],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.MANA,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.LINE_OF_SIGHT,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.SUSTAINED,
        drain: -1,
        specialty: false,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.MOB_MIND,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Mob Mind',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.MANIPULATION,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.MENTAL, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.AREA],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.MANA,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.LINE_OF_SIGHT,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.SUSTAINED,
        drain: 1,
        specialty: false,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.FLING,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Fling',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.MANIPULATION,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.PHYSICAL, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.DAMAGING],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.PHYSICAL,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.LINE_OF_SIGHT,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.INSTANTANEOUS,
        drain: -2,
        specialty: false,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.ICE_SHEET,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Ice Sheet',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.MANIPULATION,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.ENVIRONMENTAL, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.AREA],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.PHYSICAL,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.LINE_OF_SIGHT_AREA,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.INSTANTANEOUS,
        drain: 0,
        specialty: false,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.IGNITE,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Ignite',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.MANIPULATION,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.PHYSICAL],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.PHYSICAL,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.LINE_OF_SIGHT,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.PERMANENT,
        drain: -1,
        specialty: false,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.INFLUENCE,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Influence',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.MANIPULATION,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.MENTAL],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.MANA,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.LINE_OF_SIGHT,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.PERMANENT,
        drain: -1,
        specialty: false,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.LEVITATE,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Levitate',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.MANIPULATION,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.PHYSICAL],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.PHYSICAL,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.LINE_OF_SIGHT,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.SUSTAINED,
        drain: -2,
        specialty: false,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.LIGHT,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Light',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.MANIPULATION,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.ENVIRONMENTAL, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.AREA],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.PHYSICAL,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.LINE_OF_SIGHT_AREA,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.SUSTAINED,
        drain: -4,
        specialty: false,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.MAGIC_FINGERS,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Magic Fingers',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.MANIPULATION,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.PHYSICAL],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.PHYSICAL,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.LINE_OF_SIGHT,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.SUSTAINED,
        drain: -2,
        specialty: false,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.MANA_BARRIER,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Mana Barrier',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.MANIPULATION,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.ENVIRONMENTAL, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.AREA],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.MANA,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.LINE_OF_SIGHT_AREA,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.SUSTAINED,
        drain: -2,
        specialty: false,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.PHYSICAL_BARRIER,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Physical Barrier',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.MANIPULATION,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.ENVIRONMENTAL, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.AREA],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.PHYSICAL,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.LINE_OF_SIGHT_AREA,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.SUSTAINED,
        drain: -1,
        specialty: false,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.POLTERGEIST,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Poltergeist',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.MANIPULATION,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.ENVIRONMENTAL, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.AREA],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.PHYSICAL,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.LINE_OF_SIGHT_AREA,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.SUSTAINED,
        drain: -2,
        specialty: false,
        labels: {
            description: ''
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_ID.SHADOW,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Shadow',
        category: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_CATEGORY_ID.MANIPULATION,
        tags: [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.ENVIRONMENTAL, _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TAG_ID.AREA],
        type: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_TYPE_ID.PHYSICAL,
        range: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_RANGE_ID.LINE_OF_SIGHT_AREA,
        duration: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPELL_DURATION_ID.SUSTAINED,
        drain: -3,
        specialty: false,
        labels: {
            description: ''
        }
    },
];


/***/ }),

/***/ 2254:
/*!*****************************************************!*\
  !*** ./projects/shadowrun/src/app/5e/5e.spirits.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SPIRITS": () => (/* binding */ SPIRITS)
/* harmony export */ });
/* harmony import */ var _5e_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./5e.enums */ 8642);

const SPIRITS = [
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPIRIT_ID.AIR,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Air',
        attributes: {
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.BODY]: (force) => Math.max(1, force - 2),
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.AGILITY]: (force) => Math.max(1, force + 3),
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.REACTION]: (force) => Math.max(1, force + 4),
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.STRENGTH]: (force) => Math.max(1, force - 3),
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.WILLPOWER]: (force) => Math.max(1, force),
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.LOGIC]: (force) => Math.max(1, force),
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.INTUITION]: (force) => Math.max(1, force),
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.CHARISMA]: (force) => Math.max(1, force),
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.EDGE]: (force) => Math.max(1, force / 2),
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.ESSENCE]: (force) => Math.max(1, force),
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.MAGIC]: (force) => Math.max(1, force),
        },
        initiative: (force) => force,
        astral_initiative: (force) => force,
        skills: [
            _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.ASSENSING,
            _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.ASTRAL_COMBAT,
            _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.EXOTIC_RANGED_WEAPON,
            _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.PERCEPTION,
            _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.RUNNING,
            _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SKILL_ID.UNARMED_COMBAT
        ],
        powers: [],
        optional_powers: [],
        special: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPIRIT_ID.AIR,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Air',
        attributes: {
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.BODY]: (force) => Math.max(1, force),
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.AGILITY]: (force) => Math.max(1, force),
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.REACTION]: (force) => Math.max(1, force),
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.STRENGTH]: (force) => Math.max(1, force),
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.WILLPOWER]: (force) => Math.max(1, force),
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.LOGIC]: (force) => Math.max(1, force),
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.INTUITION]: (force) => Math.max(1, force),
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.CHARISMA]: (force) => Math.max(1, force),
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.EDGE]: (force) => Math.max(1, force / 2),
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.ESSENCE]: (force) => Math.max(1, force),
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.MAGIC]: (force) => Math.max(1, force),
        },
        initiative: (force) => force,
        astral_initiative: (force) => force,
        skills: [],
        powers: [],
        optional_powers: [],
        special: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPIRIT_ID.AIR,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Air',
        attributes: {
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.BODY]: (force) => Math.max(1, force),
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.AGILITY]: (force) => Math.max(1, force),
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.REACTION]: (force) => Math.max(1, force),
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.STRENGTH]: (force) => Math.max(1, force),
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.WILLPOWER]: (force) => Math.max(1, force),
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.LOGIC]: (force) => Math.max(1, force),
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.INTUITION]: (force) => Math.max(1, force),
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.CHARISMA]: (force) => Math.max(1, force),
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.EDGE]: (force) => Math.max(1, force / 2),
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.ESSENCE]: (force) => Math.max(1, force),
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.MAGIC]: (force) => Math.max(1, force),
        },
        initiative: (force) => force,
        astral_initiative: (force) => force,
        skills: [],
        powers: [],
        optional_powers: [],
        special: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPIRIT_ID.AIR,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Air',
        attributes: {
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.BODY]: (force) => Math.max(1, force),
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.AGILITY]: (force) => Math.max(1, force),
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.REACTION]: (force) => Math.max(1, force),
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.STRENGTH]: (force) => Math.max(1, force),
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.WILLPOWER]: (force) => Math.max(1, force),
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.LOGIC]: (force) => Math.max(1, force),
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.INTUITION]: (force) => Math.max(1, force),
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.CHARISMA]: (force) => Math.max(1, force),
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.EDGE]: (force) => Math.max(1, force / 2),
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.ESSENCE]: (force) => Math.max(1, force),
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.MAGIC]: (force) => Math.max(1, force),
        },
        initiative: (force) => force,
        astral_initiative: (force) => force,
        skills: [],
        powers: [],
        optional_powers: [],
        special: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPIRIT_ID.AIR,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Air',
        attributes: {
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.BODY]: (force) => Math.max(1, force),
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.AGILITY]: (force) => Math.max(1, force),
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.REACTION]: (force) => Math.max(1, force),
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.STRENGTH]: (force) => Math.max(1, force),
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.WILLPOWER]: (force) => Math.max(1, force),
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.LOGIC]: (force) => Math.max(1, force),
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.INTUITION]: (force) => Math.max(1, force),
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.CHARISMA]: (force) => Math.max(1, force),
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.EDGE]: (force) => Math.max(1, force / 2),
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.ESSENCE]: (force) => Math.max(1, force),
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.MAGIC]: (force) => Math.max(1, force),
        },
        initiative: (force) => force,
        astral_initiative: (force) => force,
        skills: [],
        powers: [],
        optional_powers: [],
        special: []
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPIRIT_ID.AIR,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'Air',
        attributes: {
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.BODY]: (force) => Math.max(1, force),
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.AGILITY]: (force) => Math.max(1, force),
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.REACTION]: (force) => Math.max(1, force),
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.STRENGTH]: (force) => Math.max(1, force),
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.WILLPOWER]: (force) => Math.max(1, force),
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.LOGIC]: (force) => Math.max(1, force),
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.INTUITION]: (force) => Math.max(1, force),
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.CHARISMA]: (force) => Math.max(1, force),
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.EDGE]: (force) => Math.max(1, force / 2),
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.ESSENCE]: (force) => Math.max(1, force),
            [_5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.MAGIC]: (force) => Math.max(1, force),
        },
        initiative: (force) => force,
        astral_initiative: (force) => force,
        skills: [],
        powers: [],
        optional_powers: [],
        special: []
    },
];


/***/ }),

/***/ 9041:
/*!********************************************************!*\
  !*** ./projects/shadowrun/src/app/5e/5e.traditions.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAGIC_TRADITIONS": () => (/* binding */ MAGIC_TRADITIONS)
/* harmony export */ });
/* harmony import */ var _5e_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./5e.enums */ 8642);

const MAGIC_TRADITIONS = [
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.MAGICAL_TRADITION_ID.HERMETIC,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'The Hermetic Mage',
        spirits: {
            combat: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPIRIT_ID.FIRE,
            health: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPIRIT_ID.MAN,
            manipulation: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPIRIT_ID.EARTH,
            detection: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPIRIT_ID.AIR,
            illusion: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPIRIT_ID.WATER,
        },
        formulas: {
            drain: (unit) => {
                const willpower = unit.attributes.find(i => i.id === _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.WILLPOWER);
                const logic = unit.attributes.find(i => i.id === _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.LOGIC);
                return willpower.rating + logic.rating;
            }
        },
        labels: {
            drain: 'Logic + Willpower'
        }
    },
    {
        id: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.MAGICAL_TRADITION_ID.SHAMAN,
        book: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.BOOK_ID.CORE_RULEBOOK,
        name: 'The Shaman',
        spirits: {
            combat: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPIRIT_ID.BEAST,
            health: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPIRIT_ID.EARTH,
            manipulation: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPIRIT_ID.MAN,
            detection: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPIRIT_ID.WATER,
            illusion: _5e_enums__WEBPACK_IMPORTED_MODULE_0__.SPIRIT_ID.AIR,
        },
        formulas: {
            drain: (unit) => {
                const willpower = unit.attributes.find(i => i.id === _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.WILLPOWER);
                const charisma = unit.attributes.find(i => i.id === _5e_enums__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.CHARISMA);
                return willpower.rating + charisma.rating;
            }
        },
        labels: {
            drain: 'Charisma + Willpower'
        }
    }
];


/***/ }),

/***/ 2084:
/*!*******************************************************!*\
  !*** ./projects/shadowrun/src/app/5e/5e.variables.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_ATTRIBUTE_RANGE": () => (/* binding */ DEFAULT_ATTRIBUTE_RANGE),
/* harmony export */   "KARMA_PER_ATTRIBUTE": () => (/* binding */ KARMA_PER_ATTRIBUTE),
/* harmony export */   "KARMA_PER_ACTIVE_SKILL": () => (/* binding */ KARMA_PER_ACTIVE_SKILL),
/* harmony export */   "KARMA_PER_KNOWLEDGE": () => (/* binding */ KARMA_PER_KNOWLEDGE),
/* harmony export */   "KARMA_PER_SPECIALIZATION": () => (/* binding */ KARMA_PER_SPECIALIZATION),
/* harmony export */   "KARMA_PER_COMPLEX_FORM": () => (/* binding */ KARMA_PER_COMPLEX_FORM),
/* harmony export */   "KARMA_PER_SPELL": () => (/* binding */ KARMA_PER_SPELL),
/* harmony export */   "KARMA_PER_INITIATE": () => (/* binding */ KARMA_PER_INITIATE),
/* harmony export */   "MAX_KNOWN_SPELLS": () => (/* binding */ MAX_KNOWN_SPELLS),
/* harmony export */   "FREE_KNOWLEDGE": () => (/* binding */ FREE_KNOWLEDGE),
/* harmony export */   "FREE_CONTACTS": () => (/* binding */ FREE_CONTACTS),
/* harmony export */   "POSITIVE_QUALITIES_MAX_COST": () => (/* binding */ POSITIVE_QUALITIES_MAX_COST),
/* harmony export */   "NEGATIVE_QUALITIES_MAX_COST": () => (/* binding */ NEGATIVE_QUALITIES_MAX_COST),
/* harmony export */   "SKILL_MIN": () => (/* binding */ SKILL_MIN),
/* harmony export */   "SKILL_MAX_ON_CREATION": () => (/* binding */ SKILL_MAX_ON_CREATION),
/* harmony export */   "SKILL_MAX_ON_UPGRADE": () => (/* binding */ SKILL_MAX_ON_UPGRADE),
/* harmony export */   "SPECIALIZATIONS_MIN_SKILL_RANK": () => (/* binding */ SPECIALIZATIONS_MIN_SKILL_RANK),
/* harmony export */   "SPECIALIZATIONS_MAX": () => (/* binding */ SPECIALIZATIONS_MAX)
/* harmony export */ });
const DEFAULT_ATTRIBUTE_RANGE = [1, 6];
const KARMA_PER_ATTRIBUTE = 5;
const KARMA_PER_ACTIVE_SKILL = 2;
const KARMA_PER_KNOWLEDGE = 1;
const KARMA_PER_SPECIALIZATION = 7;
const KARMA_PER_COMPLEX_FORM = 4;
const KARMA_PER_SPELL = 5;
const KARMA_PER_INITIATE = (grade) => 10 + (grade * 3);
const MAX_KNOWN_SPELLS = (magic) => magic * 2;
const FREE_KNOWLEDGE = (intuiton, logic) => (intuiton + logic) * 2;
const FREE_CONTACTS = (charisma) => charisma * 3;
const POSITIVE_QUALITIES_MAX_COST = 25;
const NEGATIVE_QUALITIES_MAX_COST = -25;
const SKILL_MIN = 0;
const SKILL_MAX_ON_CREATION = 6;
const SKILL_MAX_ON_UPGRADE = 12;
const SPECIALIZATIONS_MIN_SKILL_RANK = 3;
const SPECIALIZATIONS_MAX = 3;


/***/ }),

/***/ 5916:
/*!*************************************************************************************************************!*\
  !*** ./projects/shadowrun/src/app/5e/components/create-pc-adept-powers/create-pc-adept-powers.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreatePcAdeptPowersComponent": () => (/* binding */ CreatePcAdeptPowersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared */ 8454);
/* harmony import */ var _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shadowrun/app/5e */ 9022);





class CreatePcAdeptPowersComponent extends _shared__WEBPACK_IMPORTED_MODULE_0__.UnsubscribeDirective {
    constructor() {
        super();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormArray([]);
        this.spells = _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.SPELLS;
        this.onChange = (_) => { };
    }
    ngOnInit() {
        this.subscriptions = this.form.valueChanges.subscribe(() => {
            this.form.valid ? this.onChange(this.form.getRawValue()) : this.onChange(null);
        });
    }
    writeValue(obj) { }
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { }
    onAddClick() {
        const spell = _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.SPELLS.find(s => !this.form.value.find(i => i.id === s.id && !s.specialty));
        const group = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(spell.id, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(spell.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
            specialty: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, !!spell.specialty ? [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required] : [])
        });
        this.form.push(group);
    }
    onRemoveClick(id) {
        this.form.removeAt(this.form.getRawValue().map(i => i.id).indexOf(id));
    }
    isOptionDisabled(id) {
        return !!this.form.value.find(i => i.id === id) && !_shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.SPELLS.find(i => i.id === id).specialty;
    }
}
CreatePcAdeptPowersComponent.ɵfac = function CreatePcAdeptPowersComponent_Factory(t) { return new (t || CreatePcAdeptPowersComponent)(); };
CreatePcAdeptPowersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CreatePcAdeptPowersComponent, selectors: [["s5e-create-pc-adept-powers"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(() => CreatePcAdeptPowersComponent),
                multi: true
            }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 0, template: function CreatePcAdeptPowersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "create-pc-adept-powers works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtcGMtYWRlcHQtcG93ZXJzLmNvbXBvbmVudC5zY3NzIn0= */"], changeDetection: 0 });


/***/ }),

/***/ 4491:
/*!*********************************************************************************************************!*\
  !*** ./projects/shadowrun/src/app/5e/components/create-pc-attributes/create-pc-attributes.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreatePcAttributesComponent": () => (/* binding */ CreatePcAttributesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 6491);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 1486);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 8636);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared */ 8454);
/* harmony import */ var _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shadowrun/app/5e */ 9022);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _ui_components_number_input_number_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/number-input/number-input.component */ 3850);
/* harmony import */ var _shared_library_src_lib_shared_pipes_map_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared-library/src/lib/shared/pipes/map.pipe */ 1277);
/* harmony import */ var _shared_library_src_lib_shared_pipes_find_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared-library/src/lib/shared/pipes/find.pipe */ 9255);













function CreatePcAttributesComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "number-input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "map");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "find");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", i_r1.get("rating"))("min", i_r1.get("min").value)("max", i_r1.get("max").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](3, 6, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](4, 9, ctx_r0.attributes, "id", i_r1.get("id").value), "name"), " (Min: ", i_r1.get("min").value, ", Max: ", i_r1.get("max").value, ") ");
} }
class CreatePcAttributesComponent extends _shared__WEBPACK_IMPORTED_MODULE_0__.UnsubscribeDirective {
    constructor() {
        super();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormArray([]);
        this.attributes = _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.ATTRIBUTES;
        this.character$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(null);
        this.awakening$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(null);
        this.metatype$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(null);
        this.qualities$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(null);
        this.dependencies$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([
            this.awakening$.asObservable(),
            this.metatype$.asObservable(),
            this.qualities$.asObservable(),
            this.character$.asObservable()
        ]);
        this.attributes$ = this.dependencies$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(res => this.setAttributes(res[0], res[1], res[2], res[3])));
        this.onChange = (_) => { };
    }
    set initial(value) { this.character$.next(value); }
    set awakening(value) { this.awakening$.next(value); }
    set metatype(value) { this.metatype$.next(value); }
    set qualities(value) { this.qualities$.next(value); }
    ngOnInit() {
        this.subscriptions = this.attributes$.subscribe();
        this.subscriptions = this.form.valueChanges.subscribe(() => {
            if (this.form.valid) {
                const allowed = ['id', 'rating'];
                const value = this.form.getRawValue().map(res => (0,_shared__WEBPACK_IMPORTED_MODULE_0__.getFilteredObject)(res, allowed));
                this.onChange(value);
            }
            else {
                this.onChange(null);
            }
        });
    }
    writeValue(arr) { }
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { }
    setAttributes(awakeningId, metatypeId, qualities, character) {
        const AWAKENING = _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.AWAKENINGS.find(i => i.id === awakeningId);
        const METATYPE = _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.METATYPES.find(i => i.id === metatypeId);
        const values = this.form.value;
        const QUALITIES = [
            ..._shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.POSITIVE_QUALITIES, ..._shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.NEGATIVE_QUALITIES, ..._shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.RACIAL_QUALITIES
        ].filter(i => (qualities !== null && qualities !== void 0 ? qualities : []).map(q => q.id).includes(i.id));
        this.form.clear();
        _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.ATTRIBUTES.forEach(attribute => {
            var _a, _b;
            const previous = ((_a = character === null || character === void 0 ? void 0 : character.attributes) !== null && _a !== void 0 ? _a : []).find(i => i.id === attribute.id);
            const range = !!AWAKENING && !!METATYPE
                ? (_b = METATYPE.attributes[attribute.id]) !== null && _b !== void 0 ? _b : AWAKENING.attributes[attribute.id]
                : _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_ATTRIBUTE_RANGE;
            const min = !!previous ? previous.rating : range[0];
            const max = range[1] + QUALITIES
                .filter(i => { var _a; return !!((_a = i.formulas) === null || _a === void 0 ? void 0 : _a.ATTRIBUTE_MAX); })
                .reduce((acc, cur) => {
                return acc + cur.formulas.ATTRIBUTE_MAX(qualities.find(i => i.id === cur.id), attribute.id);
            }, 0);
            const value = values.find(i => i.id === attribute.id);
            const rating = !!value
                ? value.rating - value.min + min
                : min;
            const clamp = Math.min(Math.max(rating, min), max);
            this.form.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
                id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(attribute.id),
                min: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(min),
                max: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(max),
                rating: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(clamp, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(min), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.max(max)
                ])
            }));
        });
    }
}
CreatePcAttributesComponent.ɵfac = function CreatePcAttributesComponent_Factory(t) { return new (t || CreatePcAttributesComponent)(); };
CreatePcAttributesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CreatePcAttributesComponent, selectors: [["s5e-create-pc-attributes"]], inputs: { initial: "initial", awakening: "awakening", metatype: "metatype", qualities: "qualities" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.forwardRef)(() => CreatePcAttributesComponent),
                multi: true
            }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 1, consts: [[1, "mb-15"], ["class", "d-f ai-b", 4, "ngFor", "ngForOf"], [1, "d-f", "ai-b"], [3, "formControl", "min", "max"]], template: function CreatePcAttributesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Attributes");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, CreatePcAttributesComponent_div_5_Template, 5, 13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.form.controls);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardContent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _ui_components_number_input_number_input_component__WEBPACK_IMPORTED_MODULE_2__.NumberInputComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlDirective], pipes: [_shared_library_src_lib_shared_pipes_map_pipe__WEBPACK_IMPORTED_MODULE_3__.MapPipe, _shared_library_src_lib_shared_pipes_find_pipe__WEBPACK_IMPORTED_MODULE_4__.FindPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtcGMtYXR0cmlidXRlcy5jb21wb25lbnQuc2NzcyJ9 */"], changeDetection: 0 });


/***/ }),

/***/ 9571:
/*!***************************************************************************************************************!*\
  !*** ./projects/shadowrun/src/app/5e/components/create-pc-complex-forms/create-pc-complex-forms.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreatePcComplexFormsComponent": () => (/* binding */ CreatePcComplexFormsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6491);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8636);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared */ 8454);
/* harmony import */ var _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shadowrun/app/5e */ 9022);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 7007);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 2220);















function CreatePcComplexFormsComponent_div_9_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", i_r3.id)("disabled", ctx_r2.isOptionDisabled(i_r3.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", i_r3.name, " ");
} }
function CreatePcComplexFormsComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Complex Form");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-select", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, CreatePcComplexFormsComponent_div_9_mat_option_5_Template, 2, 3, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreatePcComplexFormsComponent_div_9_Template_button_click_7_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const group_r1 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.onRemoveClick(ctx_r4.getId(group_r1).value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r0.getId(group_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r0.isDeletable(group_r1));
} }
class CreatePcComplexFormsComponent extends _shared__WEBPACK_IMPORTED_MODULE_0__.UnsubscribeDirective {
    constructor() {
        super();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormArray([]);
        this.items = _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.COMPLEX_FORMS;
        this.character$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(null);
        this.initial$ = this.character$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(res => this.setInitial(res)));
        this.onChange = (_) => { };
    }
    set initial(value) { this.character$.next(value); }
    ngOnInit() {
        this.subscriptions = this.initial$.subscribe();
        this.subscriptions = this.form.valueChanges.subscribe(() => {
            this.form.valid ? this.onChange(this.form.getRawValue()) : this.onChange(null);
        });
    }
    writeValue(obj) { }
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { }
    getId(group) {
        return group.get('id');
    }
    isAddDisabled(value) {
        return _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.COMPLEX_FORMS.every(cf => value.find(i => i.id === cf.id));
    }
    isDeletable(i) {
        return !i.get('readonly').value;
    }
    isOptionDisabled(id) {
        return !!this.form.value.find(i => i.id === id);
    }
    onAddClick() {
        const cf = _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.COMPLEX_FORMS.find(s => !this.form.value.find(i => i.id === s.id));
        const group = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(cf.id),
            readonly: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(false)
        });
        this.form.push(group);
    }
    onRemoveClick(id) {
        this.form.removeAt(this.form.getRawValue().map(i => i.id).indexOf(id));
    }
    setInitial(character) {
        var _a;
        const starting = (_a = character === null || character === void 0 ? void 0 : character.complex_forms) !== null && _a !== void 0 ? _a : [];
        starting.forEach(cf => {
            const group = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
                id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(cf.id),
                readonly: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(true)
            });
            this.form.push(group);
            group.disable();
        });
    }
}
CreatePcComplexFormsComponent.ɵfac = function CreatePcComplexFormsComponent_Factory(t) { return new (t || CreatePcComplexFormsComponent)(); };
CreatePcComplexFormsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CreatePcComplexFormsComponent, selectors: [["s5e-create-pc-complex-forms"]], inputs: { initial: "initial" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => CreatePcComplexFormsComponent),
                multi: true
            }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 10, vars: 2, consts: [[1, "mb-15"], [1, "ai-fs"], ["mat-button", "", "type", "button", 3, "disabled", "click"], ["class", "d-f ai-b fw-nw", 4, "ngFor", "ngForOf"], [1, "d-f", "ai-b", "fw-nw"], ["appearance", "outline", 1, "mr-5"], [3, "formControl"], [3, "value", "disabled", 4, "ngFor", "ngForOf"], [1, "f-1"], ["mat-icon-button", "", "type", "button", 3, "disabled", "click"], [3, "value", "disabled"]], template: function CreatePcComplexFormsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Complex Forms");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreatePcComplexFormsComponent_Template_button_click_4_listener() { return ctx.onAddClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, CreatePcComplexFormsComponent_div_9_Template, 10, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.isAddDisabled(ctx.form.value));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.form.controls);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardContent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtcGMtY29tcGxleC1mb3Jtcy5jb21wb25lbnQuc2NzcyJ9 */"], changeDetection: 0 });


/***/ }),

/***/ 1467:
/*!*****************************************************************************************************!*\
  !*** ./projects/shadowrun/src/app/5e/components/create-pc-contacts/create-pc-contacts.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreatePcContactsComponent": () => (/* binding */ CreatePcContactsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared */ 8454);
/* harmony import */ var _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shadowrun/app/5e */ 9022);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6491);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 8636);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _ui_components_number_input_number_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/number-input/number-input.component */ 3850);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 4742);















function CreatePcContactsComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "number-input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Connection ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "number-input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Loyalty ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreatePcContactsComponent_div_9_Template_button_click_14_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const i_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.onRemoveContactClick(i_r1.get("id").value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("min", i_r1.get("minC").value)("formControl", i_r1.get("connection"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("min", i_r1.get("minL").value)("formControl", i_r1.get("loyalty"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", i_r1.get("name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", i_r1.get("details"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r0.isDeletable(i_r1));
} }
class CreatePcContactsComponent extends _shared__WEBPACK_IMPORTED_MODULE_0__.UnsubscribeDirective {
    constructor() {
        super();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormArray([]);
        this.previous$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(null);
        this.initial$ = this.previous$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(res => this.setInitialValue(res)));
        this.onChange = (_) => { };
    }
    set initial(value) { this.previous$.next(value); }
    ngOnInit() {
        this.subscriptions = this.initial$.subscribe();
        this.subscriptions = this.form.valueChanges.subscribe(() => {
            if (this.form.valid) {
                const allowed = ['id', 'connection', 'loyalty', 'type', 'name', 'details'];
                const value = this.form.getRawValue().map(res => (0,_shared__WEBPACK_IMPORTED_MODULE_0__.getFilteredObject)(res, allowed));
                this.onChange(value);
            }
            else {
                this.onChange(null);
            }
        });
    }
    writeValue(obj) { }
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { }
    isDeletable(i) {
        return !i.get('readonly').value;
    }
    onAddContactClick() {
        this.form.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(`contact:${Date.now()}`),
            connection: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(1, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.max(6)]),
            loyalty: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(1, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.max(6)]),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(_shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.CONTACT_TYPE_ID.CUSTOM, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            details: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            /* *** */
            readonly: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(false),
            minC: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(1),
            minL: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(1)
        }));
    }
    onRemoveContactClick(id) {
        this.form.removeAt(this.form.getRawValue().map(i => i.id).indexOf(id));
    }
    setInitialValue(character) {
        var _a;
        this.form.clear();
        const starting = (_a = character === null || character === void 0 ? void 0 : character.contacts) !== null && _a !== void 0 ? _a : [];
        starting.forEach(i => {
            const group = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
                id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(i.id),
                connection: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(i.connection, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(i.connection), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.max(6)]),
                loyalty: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(i.loyalty, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(i.connection), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.max(6)]),
                type: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(i.type),
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(i.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
                details: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(i.details),
                /* *** */
                readonly: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(true),
                minC: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(i.connection),
                minL: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(i.loyalty)
            });
            this.form.push(group);
            group.get('name').disable();
            group.get('type').disable();
        });
    }
}
CreatePcContactsComponent.ɵfac = function CreatePcContactsComponent_Factory(t) { return new (t || CreatePcContactsComponent)(); };
CreatePcContactsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CreatePcContactsComponent, selectors: [["s5e-create-pc-contacts"]], inputs: { initial: "initial" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(() => CreatePcContactsComponent),
                multi: true
            }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 10, vars: 1, consts: [[1, "mb-15"], [1, "ai-fs"], ["mat-button", "", "type", "button", 3, "click"], ["class", "d-f ai-b fw-nw", 4, "ngFor", "ngForOf"], [1, "d-f", "ai-b", "fw-nw"], ["max", "6", 1, "mr-5", 3, "min", "formControl"], ["appearance", "outline", "floatLabel", "always", 1, "mr-5"], ["matInput", "", "type", "text", 3, "formControl"], ["appearance", "outline", "floatLabel", "always"], [1, "f-1"], ["mat-icon-button", "", "type", "button", 3, "disabled", "click"]], template: function CreatePcContactsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-card-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreatePcContactsComponent_Template_button_click_4_listener() { return ctx.onAddContactClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, CreatePcContactsComponent_div_9_Template, 17, 7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.form.controls);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardContent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _ui_components_number_input_number_input_component__WEBPACK_IMPORTED_MODULE_2__.NumberInputComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtcGMtY29udGFjdHMuY29tcG9uZW50LnNjc3MifQ== */"], changeDetection: 0 });


/***/ }),

/***/ 425:
/*!*************************************************************************************************************************!*\
  !*** ./projects/shadowrun/src/app/5e/components/create-pc-final-calculations/create-pc-final-calculations.component.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreatePcFinalCalculationsComponent": () => (/* binding */ CreatePcFinalCalculationsComponent)
/* harmony export */ });
/* harmony import */ var _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shadowrun/app/5e */ 9022);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ 298);





function CreatePcFinalCalculationsComponent_tr_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", i_r1.labels.tooltip);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r1.value());
} }
class CreatePcFinalCalculationsComponent {
    constructor() {
        this.CALCULATIONS = [
            {
                name: 'Initiative',
                labels: {
                    tooltip: '(INT + REA) + 1D6'
                },
                value: () => this.initiative
            },
            {
                name: 'Astral Initiative',
                labels: {
                    tooltip: '(INT x 2) + 2D6'
                },
                value: () => this.astralInitiative
            },
            {
                name: 'Matrix AR Initiative',
                labels: {
                    tooltip: '(INT + REA) + 1D6'
                },
                value: () => this.matrixArInitiative
            },
            {
                name: 'Matrix VR Initiative (Cold Sim)',
                labels: {
                    tooltip: '(Data Processing + INT) + 3D6'
                },
                value: () => this.matrixVrColdInitiative
            },
            {
                name: 'Matrix VR Initiative (Hot Sim)',
                labels: {
                    tooltip: '(Data Processing + INT) + 4D6'
                },
                value: () => this.matrixVrHotInitiative
            },
            {
                name: 'Mental Limit',
                labels: {
                    tooltip: '[(LOG x 2) + INT + WIL] / 3 (round up)'
                },
                value: () => this.mentalLimit
            },
            {
                name: 'Physical Limit',
                labels: {
                    tooltip: '[(STR x 2) + BOD + REA] / 3 (round up)'
                },
                value: () => this.physicalLimit
            },
            {
                name: 'Social Limit',
                labels: {
                    tooltip: '[(CHA x 2) + WIL + ESS] / 3 (round up)'
                },
                value: () => this.socialLimit
            },
            {
                name: 'Physical Condition Monitor',
                labels: {
                    tooltip: '[(BOD + Augmentations) / 2] + 8 (round up)'
                },
                value: () => this.physicalConditionMonitor
            },
            {
                name: 'Stun Condition Monitor',
                labels: {
                    tooltip: '[(WIL + Augmentations) / 2] + 8 (round up)'
                },
                value: () => this.stunConditionMonitor
            },
            {
                name: 'Overflow',
                labels: {
                    tooltip: 'BOD + Augmentation bonuses'
                },
                value: () => this.overflow
            },
            {
                name: 'Composure',
                labels: {
                    tooltip: 'CHA + WIL'
                },
                value: () => this.composure
            },
            {
                name: 'Judge Intentions',
                labels: {
                    tooltip: 'CHA + INT'
                },
                value: () => this.judgeIntentions
            },
            {
                name: 'Lifting / Carrying',
                labels: {
                    tooltip: 'BOD + STR'
                },
                value: () => this.lifting
            },
            {
                name: 'Memory',
                labels: {
                    tooltip: 'LOG + WIL'
                },
                value: () => this.memory
            },
            {
                name: 'Walk Movement Rate',
                labels: {
                    tooltip: 'AGI x 2'
                },
                value: () => this.walkMovementRate
            },
            {
                name: 'Run Movement Rate',
                labels: {
                    tooltip: 'AGI x 4'
                },
                value: () => this.runMovementRate
            }
        ];
    }
    get attributes() { var _a, _b; return (_b = (_a = this.character) === null || _a === void 0 ? void 0 : _a.attributes) !== null && _b !== void 0 ? _b : []; }
    get str() { var _a, _b; return (_b = (_a = this.attributes.find(i => i.id === _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.STRENGTH)) === null || _a === void 0 ? void 0 : _a.rating) !== null && _b !== void 0 ? _b : 0; }
    get agi() { var _a, _b; return (_b = (_a = this.attributes.find(i => i.id === _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.AGILITY)) === null || _a === void 0 ? void 0 : _a.rating) !== null && _b !== void 0 ? _b : 0; }
    get rea() { var _a, _b; return (_b = (_a = this.attributes.find(i => i.id === _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.REACTION)) === null || _a === void 0 ? void 0 : _a.rating) !== null && _b !== void 0 ? _b : 0; }
    get bod() { var _a, _b; return (_b = (_a = this.attributes.find(i => i.id === _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.BODY)) === null || _a === void 0 ? void 0 : _a.rating) !== null && _b !== void 0 ? _b : 0; }
    get wil() { var _a, _b; return (_b = (_a = this.attributes.find(i => i.id === _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.WILLPOWER)) === null || _a === void 0 ? void 0 : _a.rating) !== null && _b !== void 0 ? _b : 0; }
    get log() { var _a, _b; return (_b = (_a = this.attributes.find(i => i.id === _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.LOGIC)) === null || _a === void 0 ? void 0 : _a.rating) !== null && _b !== void 0 ? _b : 0; }
    get int() { var _a, _b; return (_b = (_a = this.attributes.find(i => i.id === _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.INTUITION)) === null || _a === void 0 ? void 0 : _a.rating) !== null && _b !== void 0 ? _b : 0; }
    get cha() { var _a, _b; return (_b = (_a = this.attributes.find(i => i.id === _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.CHARISMA)) === null || _a === void 0 ? void 0 : _a.rating) !== null && _b !== void 0 ? _b : 0; }
    get ess() { var _a, _b; return (_b = (_a = this.attributes.find(i => i.id === _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ID.ESSENCE)) === null || _a === void 0 ? void 0 : _a.rating) !== null && _b !== void 0 ? _b : 0; }
    get augmentations() { return 0; }
    get dataProcessing() { return 0; }
    get initiative() { return `${this.int + this.rea} + 1d6`; }
    get astralInitiative() { return `${this.int * 2} + 2d6`; }
    get matrixArInitiative() { return `${this.int + this.rea} + 1d6`; }
    get matrixVrColdInitiative() { return `${this.int + this.dataProcessing} + 3d6`; }
    get matrixVrHotInitiative() { return `${this.int + this.dataProcessing} + 4d6`; }
    get mentalLimit() { return `${Math.ceil((this.log * 2 + this.int + this.wil) / 3)}`; }
    get physicalLimit() { return `${Math.ceil((this.str * 2 + this.bod + this.rea) / 3)}`; }
    get socialLimit() { return `${Math.ceil((this.cha * 2 + this.wil + this.ess) / 3)}`; }
    get physicalConditionMonitor() { return `${Math.ceil(8 + (this.bod + this.augmentations) / 2)}`; }
    get stunConditionMonitor() { return `${Math.ceil(8 + (this.wil + this.augmentations) / 2)}`; }
    get overflow() { return `${this.bod + this.augmentations}`; }
    get composure() { return `${this.cha + this.wil}`; }
    get judgeIntentions() { return `${this.cha + this.int}`; }
    get lifting() { return `${this.bod + this.str}`; }
    get memory() { return `${this.log + this.int}`; }
    get walkMovementRate() { return `${this.agi * 2}`; }
    get runMovementRate() { return `${this.agi * 4}`; }
}
CreatePcFinalCalculationsComponent.ɵfac = function CreatePcFinalCalculationsComponent_Factory(t) { return new (t || CreatePcFinalCalculationsComponent)(); };
CreatePcFinalCalculationsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CreatePcFinalCalculationsComponent, selectors: [["s5e-create-pc-final-calculations"]], inputs: { character: "character" }, decls: 8, vars: 1, consts: [[1, "mb-15"], [1, "ai-fs"], [1, "mat-table"], ["class", "mat-row", 4, "ngFor", "ngForOf"], [1, "mat-row"], [1, "mat-cell", 3, "matTooltip"], [1, "mat-cell"]], template: function CreatePcFinalCalculationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Final Calculations");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CreatePcFinalCalculationsComponent_tr_7_Template, 5, 3, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.CALCULATIONS);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardContent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltip], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtcGMtZmluYWwtY2FsY3VsYXRpb25zLmNvbXBvbmVudC5zY3NzIn0= */"], changeDetection: 0 });


/***/ }),

/***/ 5748:
/*!*********************************************************************************************!*\
  !*** ./projects/shadowrun/src/app/5e/components/create-pc-gear/create-pc-gear.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreatePcGearComponent": () => (/* binding */ CreatePcGearComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared */ 8454);
/* harmony import */ var _shadowrun_app_5e_5e_gear__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shadowrun/app/5e/5e.gear */ 7804);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 7007);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 2220);













function CreatePcGearComponent_div_9_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", item_r4.id)("disabled", ctx_r3.isOptionDisabled(item_r4.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r4.name, " ");
} }
function CreatePcGearComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Gear");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-select", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, CreatePcGearComponent_div_9_mat_option_5_Template, 2, 3, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreatePcGearComponent_div_9_Template_button_click_7_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const group_r1 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.onRemoveClick(ctx_r5.getId(group_r1).value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r0.getId(group_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.items);
} }
class CreatePcGearComponent extends _shared__WEBPACK_IMPORTED_MODULE_0__.UnsubscribeDirective {
    constructor() {
        super();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormArray([]);
        this.items = _shadowrun_app_5e_5e_gear__WEBPACK_IMPORTED_MODULE_1__.GEAR;
        this.onChange = (_) => { };
    }
    ngOnInit() {
        this.subscriptions = this.form.valueChanges.subscribe(() => {
            this.form.valid ? this.onChange(this.form.getRawValue()) : this.onChange(null);
        });
    }
    writeValue(obj) { }
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { }
    getId(group) {
        return group.get('id');
    }
    isAddDisabled(value) {
        return false;
    }
    isOptionDisabled(id) {
        return false;
    }
    onAddClick() {
        const item = _shadowrun_app_5e_5e_gear__WEBPACK_IMPORTED_MODULE_1__.GEAR.find(s => !this.form.value.find(i => i.id === s.id));
        const group = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(item.id, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])
        });
        this.form.push(group);
    }
    onRemoveClick(id) {
        this.form.removeAt(this.form.getRawValue().map(i => i.id).indexOf(id));
    }
}
CreatePcGearComponent.ɵfac = function CreatePcGearComponent_Factory(t) { return new (t || CreatePcGearComponent)(); };
CreatePcGearComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CreatePcGearComponent, selectors: [["s5e-create-pc-gear"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => CreatePcGearComponent),
                multi: true
            }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 10, vars: 2, consts: [[1, "mb-15"], [1, "ai-fs"], ["mat-button", "", "type", "button", 3, "disabled", "click"], ["class", "d-f ai-b fw-nw", 4, "ngFor", "ngForOf"], [1, "d-f", "ai-b", "fw-nw"], ["appearance", "outline", 1, "mr-5"], [3, "formControl"], [3, "value", "disabled", 4, "ngFor", "ngForOf"], [1, "f-1"], ["mat-icon-button", "", "type", "button", 3, "click"], [3, "value", "disabled"]], template: function CreatePcGearComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Gear");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreatePcGearComponent_Template_button_click_4_listener() { return ctx.onAddClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, CreatePcGearComponent_div_9_Template, 10, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.isAddDisabled(ctx.form.value));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.form.controls);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardContent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtcGMtZ2Vhci5jb21wb25lbnQuc2NzcyJ9 */"], changeDetection: 0 });


/***/ }),

/***/ 484:
/*!*******************************************************************************************************!*\
  !*** ./projects/shadowrun/src/app/5e/components/create-pc-knowledge/create-pc-knowledge.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreatePcKnowledgeComponent": () => (/* binding */ CreatePcKnowledgeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/keycodes */ 84);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 6491);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 8636);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared */ 8454);
/* harmony import */ var _shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shadowrun/app/5e/5e.enums */ 8642);
/* harmony import */ var _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shadowrun/app/5e */ 9022);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 7007);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _ui_components_number_input_number_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/number-input/number-input.component */ 3850);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ 9243);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ 2220);




















function CreatePcKnowledgeComponent_div_9_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", category_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", category_r5.name, " ");
} }
function CreatePcKnowledgeComponent_div_9_mat_chip_17_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CreatePcKnowledgeComponent_div_9_mat_chip_17_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-chip", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("removed", function CreatePcKnowledgeComponent_div_9_mat_chip_17_Template_mat_chip_removed_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9); const specialization_r6 = restoredCtx.$implicit; const i_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r8.onRemoveSpecialization(specialization_r6, i_r1.get("specializations")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, CreatePcKnowledgeComponent_div_9_mat_chip_17_mat_icon_2_Template, 2, 0, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const specialization_r6 = ctx.$implicit;
    const i_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r4.isSpecializationDisabled(i_r1, specialization_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", specialization_r6, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", true);
} }
function CreatePcKnowledgeComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-select", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, CreatePcKnowledgeComponent_div_9_mat_option_5_Template, 2, 2, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "number-input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " Rating ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "mat-form-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Specializations");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "mat-chip-list", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, CreatePcKnowledgeComponent_div_9_mat_chip_17_Template, 3, 3, "mat-chip", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("matChipInputTokenEnd", function CreatePcKnowledgeComponent_div_9_Template_input_matChipInputTokenEnd_18_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13); const i_r1 = restoredCtx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r12.onAddSpecialization($event, i_r1.get("specializations")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreatePcKnowledgeComponent_div_9_Template_button_click_19_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13); const i_r1 = restoredCtx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r14.onRemoveKnowledgeClick(i_r1.get("id").value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r1 = ctx.$implicit;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](16);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", i_r1.get("category"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", i_r1.get("name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", i_r1.get("rating"))("min", i_r1.get("min").value)("max", i_r1.get("max").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.getSpecializations(i_r1.get("specializations")));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", i_r1.get("rating").value < 3)("matChipInputFor", _r3)("matChipInputSeparatorKeyCodes", ctx_r0.separatorKeysCodes)("matChipInputAddOnBlur", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r0.isDeletable(i_r1));
} }
class CreatePcKnowledgeComponent extends _shared__WEBPACK_IMPORTED_MODULE_0__.UnsubscribeDirective {
    constructor() {
        super();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormArray([]);
        this.categories = _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_2__.SKILL_CATEGORIES;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__.ENTER, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__.COMMA];
        this.character$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(null);
        this.knowledge$ = this.character$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(res => this.setInitialValue(res)));
        this.onChange = (_) => { };
    }
    set initial(value) { this.character$.next(value); }
    ngOnInit() {
        this.subscriptions = this.knowledge$.subscribe();
        this.subscriptions = this.form.valueChanges.subscribe(() => {
            if (this.form.valid) {
                const allowed = ['id', 'category', 'name', 'rating', 'specializations'];
                const value = this.form.getRawValue().map(res => (0,_shared__WEBPACK_IMPORTED_MODULE_0__.getFilteredObject)(res, allowed));
                this.onChange(value);
            }
            else {
                this.onChange(null);
            }
        });
    }
    writeValue(obj) { }
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { }
    getSpecializations(control) {
        var _a;
        return (_a = control.value) !== null && _a !== void 0 ? _a : [];
    }
    onAddSpecialization(event, control) {
        var _a, _b;
        const value = ((_a = event.value) !== null && _a !== void 0 ? _a : '').trim();
        const specializations = (_b = control.value) !== null && _b !== void 0 ? _b : [];
        if (value && specializations.length < _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_2__.SPECIALIZATIONS_MAX) {
            control.setValue([...specializations, value]);
        }
        event.input.value = '';
    }
    onRemoveSpecialization(specialization, control) {
        var _a;
        control.setValue(((_a = control.value) !== null && _a !== void 0 ? _a : []).filter(i => i !== specialization));
    }
    isDeletable(i) {
        return !i.get('readonly').value;
    }
    isSpecializationDisabled(control, specialization) {
        var _a;
        return ((_a = control.get('initialSpecializations').value) !== null && _a !== void 0 ? _a : []).includes(specialization);
    }
    onAddKnowledgeClick() {
        this.form.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(`knowledge:${Date.now()}`),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(_shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_1__.SKILL_CATEGORY_ID.ACADEMIC, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
            min: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(1),
            max: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(6),
            rating: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(1, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.max(6)]),
            specializations: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null),
            initialSpecializations: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null),
            readonly: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(false)
        }));
    }
    onRemoveKnowledgeClick(id) {
        this.form.removeAt(this.form.getRawValue().map(i => i.id).indexOf(id));
    }
    setInitialValue(character) {
        var _a;
        this.form.clear();
        if (!!character) {
            const knowledge = (_a = character === null || character === void 0 ? void 0 : character.knowledge) !== null && _a !== void 0 ? _a : [];
            knowledge.forEach(i => {
                const group = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
                    id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(i.id),
                    name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(i.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
                    category: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(i.category, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
                    min: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(i.rating),
                    max: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(6),
                    rating: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(i.rating, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
                    specializations: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(i.specializations),
                    initialSpecializations: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(i.specializations),
                    readonly: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(true)
                });
                this.form.push(group);
                group.disable({ emitEvent: false });
                group.get('rating').enable();
            });
        }
        else {
            const readonly = true;
            const group = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
                id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(`knowledge:${Date.now()}`),
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
                category: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(_shadowrun_app_5e_5e_enums__WEBPACK_IMPORTED_MODULE_1__.SKILL_CATEGORY_ID.LANGUAGE, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
                min: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(6),
                max: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(6),
                rating: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(6, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.min(6), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.max(6)]),
                specializations: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null),
                initialSpecializations: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null),
                readonly: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(readonly)
            });
            this.form.push(group);
            group.get('category').disable();
            group.get('rating').disable();
        }
    }
}
CreatePcKnowledgeComponent.ɵfac = function CreatePcKnowledgeComponent_Factory(t) { return new (t || CreatePcKnowledgeComponent)(); };
CreatePcKnowledgeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CreatePcKnowledgeComponent, selectors: [["s5e-create-pc-knowledge"]], inputs: { initial: "initial" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(() => CreatePcKnowledgeComponent),
                multi: true
            }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 10, vars: 1, consts: [[1, "mb-15"], [1, "ai-fs"], ["mat-button", "", "type", "button", 3, "click"], ["class", "d-f ai-b fw-nw", 4, "ngFor", "ngForOf"], [1, "d-f", "ai-b", "fw-nw"], ["appearance", "outline", 1, "mr-5"], [3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "type", "text", 3, "formControl"], [1, "mr-5", 3, "formControl", "min", "max"], ["appearance", "outline", "floatLabel", "always", 1, "f-1"], ["aria-label", "Fruit selection"], ["chipList", ""], ["class", "specialization-chip", 3, "disabled", "removed", 4, "ngFor", "ngForOf"], [3, "disabled", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur", "matChipInputTokenEnd"], ["mat-icon-button", "", "type", "button", 3, "disabled", "click"], [3, "value"], [1, "specialization-chip", 3, "disabled", "removed"], ["matChipRemove", "", 4, "ngIf"], ["matChipRemove", ""]], template: function CreatePcKnowledgeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-card-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Knowledge");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreatePcKnowledgeComponent_Template_button_click_4_listener() { return ctx.onAddKnowledgeClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, CreatePcKnowledgeComponent_div_9_Template, 22, 12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.form.controls);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardContent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlDirective, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _ui_components_number_input_number_input_component__WEBPACK_IMPORTED_MODULE_3__.NumberInputComponent, _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__.MatChipList, _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__.MatChipInput, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatOption, _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__.MatChip, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__.MatChipRemove], styles: [".specialization-chip[_ngcontent-%COMP%] {\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n  min-height: 23px !important;\n}\n\n  .mat-chip-input.mat-input-element {\n  min-width: 5px !important;\n  flex: 1 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1wYy1rbm93bGVkZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBR0U7RUFDRSx5QkFBQTtFQUNBLG9CQUFBO0FBQUoiLCJmaWxlIjoiY3JlYXRlLXBjLWtub3dsZWRnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGVjaWFsaXphdGlvbi1jaGlwIHtcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IDIzcHggIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIHtcbiAgLm1hdC1jaGlwLWlucHV0Lm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBtaW4td2lkdGg6IDVweCAhaW1wb3J0YW50O1xuICAgIGZsZXg6IDEgMCAhaW1wb3J0YW50O1xuICB9XG59XG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ 7183:
/*!*******************************************************************************************************!*\
  !*** ./projects/shadowrun/src/app/5e/components/create-pc-lifestyle/create-pc-lifestyle.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreatePcLifestyleComponent": () => (/* binding */ CreatePcLifestyleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared */ 8454);
/* harmony import */ var _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shadowrun/app/5e */ 9022);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6491);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 8636);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 7007);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _ui_components_number_input_number_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/number-input/number-input.component */ 3850);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 2220);

















function CreatePcLifestyleComponent_div_9_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", i_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", i_r4.name, " ");
} }
function CreatePcLifestyleComponent_div_9_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", i_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", i_r5.name, " ");
} }
function CreatePcLifestyleComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Lifestyle");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-select", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, CreatePcLifestyleComponent_div_9_mat_option_5_Template, 2, 2, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Options");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-select", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, CreatePcLifestyleComponent_div_9_mat_option_10_Template, 2, 2, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "number-input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, " Term (Months) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreatePcLifestyleComponent_div_9_Template_button_click_17_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const group_r1 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r6.onRemoveClick(group_r1.get("id").value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx_r0.getFormControl(group_r1, "id"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.LIFESTYLES);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx_r0.getFormControl(group_r1, "options"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.LIFESTYLE_OPTIONS);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx_r0.getFormControl(group_r1, "details"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx_r0.getFormControl(group_r1, "term"))("min", 1)("max", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r0.isDeletable(group_r1));
} }
class CreatePcLifestyleComponent extends _shared__WEBPACK_IMPORTED_MODULE_0__.UnsubscribeDirective {
    constructor() {
        super();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormArray([]);
        this.LIFESTYLES = _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.LIFESTYLES;
        this.LIFESTYLE_OPTIONS = _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.LIFESTYLE_OPTIONS;
        this.previous$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(null);
        this.initial$ = this.previous$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(res => this.setInitial(res)));
        this.onChange = (_) => { };
    }
    set previous(value) { this.previous$.next(value); }
    ngOnInit() {
        this.subscriptions = this.initial$.subscribe();
        this.subscriptions = this.form.valueChanges.subscribe(() => {
            if (this.form.valid) {
                const allowed = ['id', 'options', 'details', 'term'];
                const value = this.form.getRawValue().map(res => (0,_shared__WEBPACK_IMPORTED_MODULE_0__.getFilteredObject)(res, allowed));
                this.onChange(value);
            }
            else {
                this.onChange(null);
            }
        });
    }
    writeValue(obj) { }
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { }
    getFormControl(abstract, name) {
        return abstract.get(name);
    }
    isDeletable(i) {
        return !i.get('readonly').value;
    }
    onAddClick() {
        const lifestyle = _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.LIFESTYLES[0];
        const group = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(lifestyle.id, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            options: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
            details: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
            term: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(1, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.max(100)]),
            readonly: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(false)
        });
        this.form.push(group);
    }
    onRemoveClick(id) {
        this.form.removeAt(this.form.getRawValue().map(i => i.id).indexOf(id));
    }
    setInitial(previous) {
        var _a;
        const lifestyles = (_a = previous === null || previous === void 0 ? void 0 : previous.lifestyles) !== null && _a !== void 0 ? _a : [];
        this.form.clear();
        lifestyles.forEach(i => {
            const group = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
                id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(i.id),
                options: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(i.options),
                details: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(i.details),
                term: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(i.term),
                readonly: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(true)
            });
            this.form.push(group);
            group.disable();
        });
    }
}
CreatePcLifestyleComponent.ɵfac = function CreatePcLifestyleComponent_Factory(t) { return new (t || CreatePcLifestyleComponent)(); };
CreatePcLifestyleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CreatePcLifestyleComponent, selectors: [["s5e-create-pc-lifestyle"]], inputs: { previous: "previous" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(() => CreatePcLifestyleComponent),
                multi: true
            }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 10, vars: 1, consts: [[1, "mb-15"], [1, "ai-fs"], ["mat-button", "", "type", "button", 3, "click"], ["class", "d-f ai-b fw-nw", 4, "ngFor", "ngForOf"], [1, "d-f", "ai-b", "fw-nw"], ["appearance", "outline", 1, "mr-5"], [3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], ["multiple", "", 3, "formControl"], ["appearance", "outline", "floatLabel", "always", 1, "mr-5", "f-1"], ["matInput", "", "type", "text", 3, "formControl"], [3, "formControl", "min", "max"], ["mat-icon-button", "", "type", "button", 3, "disabled", "click"], [3, "value"]], template: function CreatePcLifestyleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-card-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Lifestyles");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreatePcLifestyleComponent_Template_button_click_4_listener() { return ctx.onAddClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, CreatePcLifestyleComponent_div_9_Template, 20, 9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.form.controls);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardContent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _ui_components_number_input_number_input_component__WEBPACK_IMPORTED_MODULE_2__.NumberInputComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtcGMtbGlmZXN0eWxlLmNvbXBvbmVudC5zY3NzIn0= */"], changeDetection: 0 });


/***/ }),

/***/ 6133:
/*!*******************************************************************************************************!*\
  !*** ./projects/shadowrun/src/app/5e/components/create-pc-qualities/create-pc-qualities.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreatePcQualitiesComponent": () => (/* binding */ CreatePcQualitiesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 6491);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 1134);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 8636);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared */ 8454);
/* harmony import */ var _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shadowrun/app/5e */ 9022);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 7007);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ 2220);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _shared_library_src_lib_shared_pipes_map_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../shared-library/src/lib/shared/pipes/map.pipe */ 1277);
/* harmony import */ var _shared_library_src_lib_shared_pipes_find_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared-library/src/lib/shared/pipes/find.pipe */ 9255);


















function CreatePcQualitiesComponent_div_9_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const quality_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", quality_r7.id)("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", quality_r7.name, " ");
} }
function CreatePcQualitiesComponent_div_9_mat_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rating_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", i_r9)("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", rating_r8.name, " ");
} }
function CreatePcQualitiesComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Quality");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-select", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, CreatePcQualitiesComponent_div_9_mat_option_5_Template, 2, 3, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-select", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, CreatePcQualitiesComponent_div_9_mat_option_11_Template, 2, 3, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "map");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "find");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const quality_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", quality_r4.id)("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 6, ctx_r0.racial$));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", quality_r4.rating)("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](12, 8, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](13, 11, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 15, ctx_r0.racial$), "id", quality_r4.id), "ratings"));
} }
function CreatePcQualitiesComponent_div_12_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const quality_r16 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", quality_r16.id)("disabled", ctx_r12.isOptionDisabled(quality_r16.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", quality_r16.name, " ");
} }
function CreatePcQualitiesComponent_div_12_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const quality_r17 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", quality_r17.id)("disabled", ctx_r13.isOptionDisabled(quality_r17.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", quality_r17.name, " ");
} }
function CreatePcQualitiesComponent_div_12_mat_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rating_r18 = ctx.$implicit;
    const i_r19 = ctx.index;
    const control_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r14.isRatingOptionDisabled(i_r19, control_r10))("value", i_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", rating_r18.name, " (", rating_r18.cost, ") ");
} }
function CreatePcQualitiesComponent_div_12_ng_container_19_mat_form_field_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-form-field", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Specialty");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const control_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", control_r10.get("specialty"));
} }
function CreatePcQualitiesComponent_div_12_ng_container_19_mat_form_field_2_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", s_r26.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](s_r26.name);
} }
function CreatePcQualitiesComponent_div_12_ng_container_19_mat_form_field_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Specialty");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-select", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, CreatePcQualitiesComponent_div_12_ng_container_19_mat_form_field_2_mat_option_4_Template, 2, 2, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const quality_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngIf;
    const control_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", control_r10.get("specialty"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", quality_r21.formulas == null ? null : quality_r21.formulas.SPECIALTIES(control_r10.value));
} }
function CreatePcQualitiesComponent_div_12_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CreatePcQualitiesComponent_div_12_ng_container_19_mat_form_field_1_Template, 4, 1, "mat-form-field", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, CreatePcQualitiesComponent_div_12_ng_container_19_mat_form_field_2_Template, 5, 2, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const quality_r21 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !!quality_r21.specialty && !(quality_r21.formulas == null ? null : quality_r21.formulas.SPECIALTIES));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !!quality_r21.specialty && !!(quality_r21.formulas == null ? null : quality_r21.formulas.SPECIALTIES));
} }
function CreatePcQualitiesComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Quality");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-select", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-optgroup", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, CreatePcQualitiesComponent_div_12_mat_option_6_Template, 2, 3, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-optgroup", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, CreatePcQualitiesComponent_div_12_mat_option_9_Template, 2, 3, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-select", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, CreatePcQualitiesComponent_div_12_mat_option_15_Template, 2, 4, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](16, "map");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "find");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, CreatePcQualitiesComponent_div_12_ng_container_19_Template, 3, 2, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](20, "find");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreatePcQualitiesComponent_div_12_Template_button_click_23_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r30); const j_r11 = restoredCtx.index; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r29.onRemoveQualityClick(j_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const control_r10 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", control_r10.get("id"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 7, ctx_r1.positive$));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 9, ctx_r1.negative$));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", control_r10.get("rating"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](16, 11, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](17, 14, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](18, 18, ctx_r1.qualities$), "id", control_r10.get("id").value), "ratings"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](20, 20, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](21, 24, ctx_r1.qualities$), "id", control_r10.get("id").value));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r1.isDeletable(control_r10));
} }
function CreatePcQualitiesComponent_mat_error_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Negative qualities give no more than ", -ctx_r2.negativeQualitiesMaxCost, " bonus karma. ");
} }
function CreatePcQualitiesComponent_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Positive qualities cost can't exceed ", ctx_r3.positiveQualitiesMaxCost, " karma. ");
} }
class CreatePcQualitiesComponent extends _shared__WEBPACK_IMPORTED_MODULE_0__.UnsubscribeDirective {
    constructor() {
        super();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormArray([]);
        this.initial$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(null);
        this.awakening$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(null);
        this.metatype$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(null);
        this.fromMetatype$ = this.metatype$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(metatypeId => {
            var _a;
            const metatype = _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.METATYPES.find(i => i.id === metatypeId);
            const qualities = (_a = metatype === null || metatype === void 0 ? void 0 : metatype.qualities) !== null && _a !== void 0 ? _a : [];
            return qualities.map(quality => {
                return {
                    id: quality.id,
                    rating: quality.rating,
                    specialty: quality.specialty
                };
            });
        }));
        this.qualities$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)([..._shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.POSITIVE_QUALITIES, ..._shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.NEGATIVE_QUALITIES]);
        this.racial$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.RACIAL_QUALITIES);
        this.positive$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.POSITIVE_QUALITIES);
        this.negative$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.NEGATIVE_QUALITIES);
        this.onChange = (_) => { };
    }
    set initial(value) { this.initial$.next(value); }
    set awakening(value) { this.awakening$.next(value); }
    set metatype(value) { this.metatype$.next(value); }
    get negativeQualitiesMaxCost() { return -25; } // TODO: change magic numbers
    get positiveQualitiesMaxCost() { return 25; } // TODO: change magic numbers
    get negativeQualitiesCost() {
        const costs = this.form.value.map(i => { var _a, _b; return (_b = (_a = i.rating) === null || _a === void 0 ? void 0 : _a.cost) !== null && _b !== void 0 ? _b : 0; });
        const negative = costs.filter(i => i < 0);
        return negative.reduce((acc, cur) => acc + cur, 0);
    }
    ngOnInit() {
        this.subscriptions = this.initial$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(res => { this.setInitialValue(res); })).subscribe();
        this.subscriptions = this.form.valueChanges.subscribe(() => {
            if (this.form.valid) {
                const allowed = ['id', 'rating', 'specialty'];
                const value = this.form.getRawValue().map(res => (0,_shared__WEBPACK_IMPORTED_MODULE_0__.getFilteredObject)(res, allowed));
                this.onChange(value);
            }
            else {
                this.onChange(null);
            }
        });
    }
    writeValue(obj) { }
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { }
    isOptionDisabled(id) {
        const qualities = [..._shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.POSITIVE_QUALITIES, ..._shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.NEGATIVE_QUALITIES];
        return !!this.form.value.find(i => i.id === id) && !qualities.find(i => i.id === id).specialty;
    }
    isRatingOptionDisabled(i, control) {
        var _a;
        return i < ((_a = control.get('initialRating').value) !== null && _a !== void 0 ? _a : 0);
    }
    isDeletable(i) {
        return !i.get('readonly').value;
    }
    onAddQualityClick() {
        const qualities = [..._shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.POSITIVE_QUALITIES, ..._shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.NEGATIVE_QUALITIES];
        const quality = qualities.find(q => !this.form.value.find(i => i.id === q.id && !q.specialty));
        this.form.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(quality.id, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
            rating: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(0, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
            specialty: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null, !!quality.specialty ? [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required] : []),
            readonly: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(false),
            initialRating: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(0)
        }));
    }
    onRemoveQualityClick(index) {
        this.form.removeAt(index);
    }
    setInitialValue(initial) {
        var _a;
        const qualities = (_a = initial === null || initial === void 0 ? void 0 : initial.qualities) !== null && _a !== void 0 ? _a : [];
        this.form.clear();
        qualities.forEach(quality => {
            const group = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
                id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(quality.id),
                rating: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(quality.rating, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
                specialty: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(quality.specialty),
                readonly: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(true),
                initialRating: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(quality.rating),
            });
            this.form.push(group);
            group.disable({ emitEvent: false });
            group.get('rating').enable();
        });
    }
}
CreatePcQualitiesComponent.ɵfac = function CreatePcQualitiesComponent_Factory(t) { return new (t || CreatePcQualitiesComponent)(); };
CreatePcQualitiesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CreatePcQualitiesComponent, selectors: [["s5e-create-pc-qualities"]], inputs: { initial: "initial", awakening: "awakening", metatype: "metatype" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(() => CreatePcQualitiesComponent),
                multi: true
            }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 16, vars: 6, consts: [[1, "mb-15"], [1, "ai-fs"], ["mat-button", "", "type", "button", 3, "click"], ["class", "d-f ai-b fw-nw", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "d-f", "ai-b", "fw-nw"], ["appearance", "outline", 1, "mr-5"], [3, "value", "disabled"], [3, "value", "disabled", 4, "ngFor", "ngForOf"], [3, "formControl"], ["label", "Positive Qualities"], ["label", "Negative Qualities"], [3, "disabled", "value", 4, "ngFor", "ngForOf"], [1, "f-1"], ["mat-icon-button", "", "type", "button", 3, "disabled", "click"], [3, "disabled", "value"], ["appearance", "outline", "floatLabel", "always", 4, "ngIf"], ["appearance", "outline", "class", "mr-5", 4, "ngIf"], ["appearance", "outline", "floatLabel", "always"], ["matInput", "", "type", "text", 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function CreatePcQualitiesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-card-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Qualities");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreatePcQualitiesComponent_Template_button_click_4_listener() { return ctx.onAddQualityClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, CreatePcQualitiesComponent_div_9_Template, 15, 17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, CreatePcQualitiesComponent_div_12_Template, 26, 26, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, CreatePcQualitiesComponent_mat_error_14_Template, 2, 1, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, CreatePcQualitiesComponent_mat_error_15_Template, 2, 1, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 4, ctx.fromMetatype$));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.form.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.negativeQualitiesCost < ctx.negativeQualitiesMaxCost);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.form.hasError("positiveQualitiesMaxCost"));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardContent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatOptgroup, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatError], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe, _shared_library_src_lib_shared_pipes_map_pipe__WEBPACK_IMPORTED_MODULE_2__.MapPipe, _shared_library_src_lib_shared_pipes_find_pipe__WEBPACK_IMPORTED_MODULE_3__.FindPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtcGMtcXVhbGl0aWVzLmNvbXBvbmVudC5zY3NzIn0= */"], changeDetection: 0 });


/***/ }),

/***/ 3252:
/*!*************************************************************************************************!*\
  !*** ./projects/shadowrun/src/app/5e/components/create-pc-skills/create-pc-skills.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreatePcSkillsComponent": () => (/* binding */ CreatePcSkillsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/keycodes */ 84);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 6491);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 1486);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 8636);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared */ 8454);
/* harmony import */ var _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shadowrun/app/5e */ 9022);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _ui_components_number_input_number_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/number-input/number-input.component */ 3850);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/chips */ 9243);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _shared_library_src_lib_shared_pipes_map_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared-library/src/lib/shared/pipes/map.pipe */ 1277);
/* harmony import */ var _shared_library_src_lib_shared_pipes_find_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared-library/src/lib/shared/pipes/find.pipe */ 9255);

















function CreatePcSkillsComponent_div_5_mat_chip_10_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function CreatePcSkillsComponent_div_5_mat_chip_10_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-chip", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("removed", function CreatePcSkillsComponent_div_5_mat_chip_10_Template_mat_chip_removed_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const specialization_r4 = restoredCtx.$implicit; const i_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r6.onRemoveSpecialization(specialization_r4, i_r1.get("specializations")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, CreatePcSkillsComponent_div_5_mat_chip_10_mat_icon_2_Template, 2, 0, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const specialization_r4 = ctx.$implicit;
    const i_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r3.isSpecializationDisabled(i_r1, specialization_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", specialization_r4, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", true);
} }
function CreatePcSkillsComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "number-input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "map");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "find");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-form-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Specializations");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-chip-list", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, CreatePcSkillsComponent_div_5_mat_chip_10_Template, 3, 3, "mat-chip", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("matChipInputTokenEnd", function CreatePcSkillsComponent_div_5_Template_input_matChipInputTokenEnd_11_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const i_r1 = restoredCtx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r10.onAddSpecialization($event, i_r1.get("specializations")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r1 = ctx.$implicit;
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](9);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", i_r1.get("rating"))("min", i_r1.get("min").value)("max", i_r1.get("max").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](3, 9, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](4, 12, ctx_r0.skills, "id", i_r1.get("id").value), "name"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.getSpecializations(i_r1.get("specializations")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", i_r1.get("rating").value < 3)("matChipInputFor", _r2)("matChipInputSeparatorKeyCodes", ctx_r0.separatorKeysCodes)("matChipInputAddOnBlur", true);
} }
class CreatePcSkillsComponent extends _shared__WEBPACK_IMPORTED_MODULE_0__.UnsubscribeDirective {
    constructor() {
        super();
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__.ENTER, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__.COMMA];
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormArray([]);
        this.skills = _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.ACTIVE_SKILLS;
        this.character$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(null);
        this.awakening$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(null);
        this.qualities$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(null);
        this.skills$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([
            this.awakening$.asObservable(),
            this.qualities$.asObservable(),
            this.character$.asObservable()
        ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(res => {
            this.setInitialValue(res[0], res[1], res[2]);
        }));
        this.onChange = (_) => { };
    }
    set initial(value) { this.character$.next(value); }
    set awakening(value) { this.awakening$.next(value); }
    set qualities(value) { this.qualities$.next(value); }
    ngOnInit() {
        this.subscriptions = this.skills$.subscribe();
        this.subscriptions = this.form.valueChanges.subscribe(() => {
            if (this.form.valid) {
                const allowed = ['id', 'rating', 'specializations'];
                const value = this.form.getRawValue().map(res => (0,_shared__WEBPACK_IMPORTED_MODULE_0__.getFilteredObject)(res, allowed));
                this.onChange(value);
            }
            else {
                this.onChange(null);
            }
        });
    }
    writeValue(obj) { }
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { }
    getSpecializations(control) {
        var _a;
        return (_a = control.value) !== null && _a !== void 0 ? _a : [];
    }
    isSpecializationDisabled(control, specialization) {
        var _a;
        return ((_a = control.get('initialSpecializations').value) !== null && _a !== void 0 ? _a : []).includes(specialization);
    }
    onAddSpecialization(event, control) {
        var _a, _b;
        const value = ((_a = event.value) !== null && _a !== void 0 ? _a : '').trim();
        const specializations = (_b = control.value) !== null && _b !== void 0 ? _b : [];
        if (!!value && specializations.length < _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.SPECIALIZATIONS_MAX) {
            control.setValue([...specializations, value]);
        }
        event.input.value = '';
    }
    onRemoveSpecialization(specialization, control) {
        var _a;
        control.setValue(((_a = control.value) !== null && _a !== void 0 ? _a : []).filter(i => i !== specialization));
    }
    setInitialValue(awakeningId, qualities, character) {
        const AWAKENING = _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.AWAKENINGS.find(i => i.id === awakeningId);
        const QUALITIES = [
            ..._shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.POSITIVE_QUALITIES, ..._shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.NEGATIVE_QUALITIES, ..._shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.RACIAL_QUALITIES
        ].filter(i => (qualities !== null && qualities !== void 0 ? qualities : []).map(q => q.id).includes(i.id));
        this.form.clear();
        _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.ACTIVE_SKILLS.filter(skill => {
            if (skill.attribute === _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.ATTRIBUTE_ID.MAGIC || [_shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.SKILL_ID.ARCANA, _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.SKILL_ID.ASSENSING, _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.SKILL_ID.ASTRAL_COMBAT].includes(skill.id)) {
                return AWAKENING.attributes[_shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.ATTRIBUTE_ID.MAGIC][0] > 0;
            }
            else if (skill.attribute === _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.ATTRIBUTE_ID.RESONANCE) {
                return AWAKENING.attributes[_shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.ATTRIBUTE_ID.RESONANCE][0] > 0;
            }
            else {
                return true;
            }
        })
            .forEach(skill => {
            var _a;
            const previous = ((_a = character === null || character === void 0 ? void 0 : character.skills) !== null && _a !== void 0 ? _a : []).find(i => i.id === skill.id);
            const min = !!previous ? previous.rating : _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.SKILL_MIN;
            const max = (!!previous ? _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.SKILL_MAX_ON_UPGRADE : _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.SKILL_MAX_ON_CREATION) + QUALITIES
                .filter(i => { var _a; return !!((_a = i.formulas) === null || _a === void 0 ? void 0 : _a.SKILL_MAX); })
                .reduce((acc, cur) => acc + cur.formulas.SKILL_MAX(qualities.find(i => i.id === cur.id), skill.id), 0);
            const rating = !!previous ? previous.rating : min;
            const specializations = !!previous ? previous.specializations : null;
            this.form.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
                id: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(skill.id),
                rating: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(rating, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.min(min), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.max(max)]),
                specializations: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(specializations),
                min: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(min),
                max: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(max),
                initialSpecializations: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(specializations),
            }));
        });
    }
}
CreatePcSkillsComponent.ɵfac = function CreatePcSkillsComponent_Factory(t) { return new (t || CreatePcSkillsComponent)(); };
CreatePcSkillsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CreatePcSkillsComponent, selectors: [["s5e-create-pc-skills"]], inputs: { initial: "initial", awakening: "awakening", qualities: "qualities" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.forwardRef)(() => CreatePcSkillsComponent),
                multi: true
            }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 1, consts: [[1, "mb-15"], ["class", "d-f ai-b", 4, "ngFor", "ngForOf"], [1, "d-f", "ai-b"], [1, "mr-5", 3, "formControl", "min", "max"], ["appearance", "outline", "floatLabel", "always", 1, "f-1"], ["aria-label", "Fruit selection"], ["chipList", ""], ["class", "specialization-chip", 3, "disabled", "removed", 4, "ngFor", "ngForOf"], [3, "disabled", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur", "matChipInputTokenEnd"], [1, "specialization-chip", 3, "disabled", "removed"], ["matChipRemove", "", 4, "ngIf"], ["matChipRemove", ""]], template: function CreatePcSkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, CreatePcSkillsComponent_div_5_Template, 12, 16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.form.controls);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardContent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _ui_components_number_input_number_input_component__WEBPACK_IMPORTED_MODULE_2__.NumberInputComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLabel, _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__.MatChipList, _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__.MatChipInput, _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__.MatChip, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__.MatChipRemove], pipes: [_shared_library_src_lib_shared_pipes_map_pipe__WEBPACK_IMPORTED_MODULE_3__.MapPipe, _shared_library_src_lib_shared_pipes_find_pipe__WEBPACK_IMPORTED_MODULE_4__.FindPipe], styles: [".specialization-chip[_ngcontent-%COMP%] {\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n  min-height: 23px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1wYy1za2lsbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0FBQ0YiLCJmaWxlIjoiY3JlYXRlLXBjLXNraWxscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGVjaWFsaXphdGlvbi1jaGlwIHtcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IDIzcHggIWltcG9ydGFudDtcbn1cbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 5303:
/*!*************************************************************************************************!*\
  !*** ./projects/shadowrun/src/app/5e/components/create-pc-spells/create-pc-spells.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreatePcSpellsComponent": () => (/* binding */ CreatePcSpellsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared */ 8454);
/* harmony import */ var _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shadowrun/app/5e */ 9022);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 6491);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 8636);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 7007);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 2220);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _shared_library_src_lib_shared_pipes_filter_by_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../shared-library/src/lib/shared/pipes/filter-by.pipe */ 1889);
/* harmony import */ var _shared_library_src_lib_shared_pipes_map_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared-library/src/lib/shared/pipes/map.pipe */ 1277);
/* harmony import */ var _shared_library_src_lib_shared_pipes_find_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared-library/src/lib/shared/pipes/find.pipe */ 9255);



















function CreatePcSpellsComponent_div_9_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r8 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", i_r8.id)("disabled", ctx_r2.isOptionDisabled(i_r8.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", i_r8.name, " ");
} }
function CreatePcSpellsComponent_div_9_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r9 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", i_r9.id)("disabled", ctx_r3.isOptionDisabled(i_r9.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", i_r9.name, " ");
} }
function CreatePcSpellsComponent_div_9_mat_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r10 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", i_r10.id)("disabled", ctx_r4.isOptionDisabled(i_r10.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", i_r10.name, " ");
} }
function CreatePcSpellsComponent_div_9_mat_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r11 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", i_r11.id)("disabled", ctx_r5.isOptionDisabled(i_r11.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", i_r11.name, " ");
} }
function CreatePcSpellsComponent_div_9_mat_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r12 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", i_r12.id)("disabled", ctx_r6.isOptionDisabled(i_r12.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", i_r12.name, " ");
} }
function CreatePcSpellsComponent_div_9_mat_form_field_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Specialty");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", group_r1.get("specialty"));
} }
function CreatePcSpellsComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Spell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-select", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-optgroup", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, CreatePcSpellsComponent_div_9_mat_option_6_Template, 2, 3, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "filterBy");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-optgroup", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, CreatePcSpellsComponent_div_9_mat_option_9_Template, 2, 3, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "filterBy");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mat-optgroup", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, CreatePcSpellsComponent_div_9_mat_option_12_Template, 2, 3, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](13, "filterBy");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "mat-optgroup", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, CreatePcSpellsComponent_div_9_mat_option_15_Template, 2, 3, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "filterBy");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "mat-optgroup", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, CreatePcSpellsComponent_div_9_mat_option_18_Template, 2, 3, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](19, "filterBy");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, CreatePcSpellsComponent_div_9_mat_form_field_20_Template, 4, 1, "mat-form-field", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](21, "map");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](22, "find");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CreatePcSpellsComponent_div_9_Template_button_click_24_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15); const group_r1 = restoredCtx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r14.onRemoveClick(group_r1.get("id").value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", group_r1.get("id"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](7, 8, ctx_r0.spells, "category", 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](10, 12, ctx_r0.spells, "category", 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](13, 16, ctx_r0.spells, "category", 3));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](16, 20, ctx_r0.spells, "category", 4));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](19, 24, ctx_r0.spells, "category", 5));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](21, 28, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](22, 31, ctx_r0.spells, "id", group_r1.get("id").value), "specialty"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r0.isDeletable(group_r1));
} }
class CreatePcSpellsComponent extends _shared__WEBPACK_IMPORTED_MODULE_0__.UnsubscribeDirective {
    constructor() {
        super();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormArray([]);
        this.spells = _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.SPELLS;
        this.character$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(null);
        this.initial$ = this.character$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(res => this.setInitial(res)));
        this.onChange = (_) => { };
    }
    set initial(value) { this.character$.next(value); }
    ngOnInit() {
        this.subscriptions = this.initial$.subscribe();
        this.subscriptions = this.form.valueChanges.subscribe(() => {
            if (this.form.valid) {
                const allowed = ['id', 'specialty'];
                const value = this.form.getRawValue().map(res => (0,_shared__WEBPACK_IMPORTED_MODULE_0__.getFilteredObject)(res, allowed));
                this.onChange(value);
            }
            else {
                this.onChange(null);
            }
        });
    }
    writeValue(obj) { }
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { }
    onAddClick() {
        const spell = _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.SPELLS.find(s => !this.form.value.find(i => i.id === s.id && !s.specialty));
        const group = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(spell.id, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
            specialty: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null, !!spell.specialty ? [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required] : []),
            readonly: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(false, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])
        });
        this.form.push(group);
    }
    onRemoveClick(id) {
        this.form.removeAt(this.form.getRawValue().map(i => i.id).indexOf(id));
    }
    isDeletable(i) {
        return !i.get('readonly').value;
    }
    isOptionDisabled(id) {
        return !!this.form.value.find(i => i.id === id) && !_shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.SPELLS.find(i => i.id === id).specialty;
    }
    setInitial(character) {
        var _a;
        const starting = (_a = character === null || character === void 0 ? void 0 : character.spells) !== null && _a !== void 0 ? _a : [];
        this.form.clear();
        starting.forEach(spell => {
            const group = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
                id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(spell.id),
                specialty: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(spell.specialty),
                readonly: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(true)
            });
            this.form.push(group);
            group.disable();
        });
    }
}
CreatePcSpellsComponent.ɵfac = function CreatePcSpellsComponent_Factory(t) { return new (t || CreatePcSpellsComponent)(); };
CreatePcSpellsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CreatePcSpellsComponent, selectors: [["s5e-create-pc-spells"]], inputs: { initial: "initial" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.forwardRef)(() => CreatePcSpellsComponent),
                multi: true
            }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 10, vars: 1, consts: [[1, "mb-15"], [1, "ai-fs"], ["mat-button", "", "type", "button", 3, "click"], ["class", "d-f ai-b fw-nw", 4, "ngFor", "ngForOf"], [1, "d-f", "ai-b", "fw-nw"], ["appearance", "outline", 1, "mr-5"], [3, "formControl"], ["label", "Combat Spells"], [3, "value", "disabled", 4, "ngFor", "ngForOf"], ["label", "Detection Spells"], ["label", "Health Spells"], ["label", "Illusion Spells"], ["label", "Manipulation Spells"], ["appearance", "outline", 4, "ngIf"], [1, "f-1"], ["mat-icon-button", "", "type", "button", 3, "disabled", "click"], [3, "value", "disabled"], ["appearance", "outline"], ["matInput", "", "type", "text", 3, "formControl"]], template: function CreatePcSpellsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-card-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Spells");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CreatePcSpellsComponent_Template_button_click_4_listener() { return ctx.onAddClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, CreatePcSpellsComponent_div_9_Template, 27, 35, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.form.controls);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardContent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOptgroup, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOption, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor], pipes: [_shared_library_src_lib_shared_pipes_filter_by_pipe__WEBPACK_IMPORTED_MODULE_2__.FilterByPipe, _shared_library_src_lib_shared_pipes_map_pipe__WEBPACK_IMPORTED_MODULE_3__.MapPipe, _shared_library_src_lib_shared_pipes_find_pipe__WEBPACK_IMPORTED_MODULE_4__.FindPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtcGMtc3BlbGxzLmNvbXBvbmVudC5zY3NzIn0= */"], changeDetection: 0 });


/***/ }),

/***/ 2363:
/*!*********************************************************************************************!*\
  !*** ./projects/shadowrun/src/app/5e/components/create-pc-ware/create-pc-ware.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreatePcWareComponent": () => (/* binding */ CreatePcWareComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared */ 8454);
/* harmony import */ var _shadowrun_app_5e_5e_complex_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shadowrun/app/5e/5e.complex-forms */ 471);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 7007);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 2220);













function CreatePcWareComponent_div_9_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", i_r3.id)("disabled", ctx_r2.isOptionDisabled(i_r3.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", i_r3.name, " ");
} }
function CreatePcWareComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Complex Form");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-select", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, CreatePcWareComponent_div_9_mat_option_5_Template, 2, 3, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreatePcWareComponent_div_9_Template_button_click_7_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const group_r1 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.onRemoveClick(ctx_r4.getId(group_r1).value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r0.getId(group_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.items);
} }
class CreatePcWareComponent extends _shared__WEBPACK_IMPORTED_MODULE_0__.UnsubscribeDirective {
    constructor() {
        super();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormArray([]);
        this.items = _shadowrun_app_5e_5e_complex_forms__WEBPACK_IMPORTED_MODULE_1__.COMPLEX_FORMS;
        this.onChange = (_) => { };
    }
    ngOnInit() {
        this.subscriptions = this.form.valueChanges.subscribe(() => {
            const value = this.form.getRawValue();
            this.onChange(value);
        });
    }
    writeValue(obj) { }
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { }
    getId(group) {
        return group.get('id');
    }
    isAddDisabled(value) {
        return _shadowrun_app_5e_5e_complex_forms__WEBPACK_IMPORTED_MODULE_1__.COMPLEX_FORMS.every(cf => value.find(i => i.id === cf.id));
    }
    isOptionDisabled(id) {
        return !!this.form.value.find(i => i.id === id);
    }
    onAddClick() {
        const cf = _shadowrun_app_5e_5e_complex_forms__WEBPACK_IMPORTED_MODULE_1__.COMPLEX_FORMS.find(s => !this.form.value.find(i => i.id === s.id));
        const group = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(cf.id, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])
        });
        this.form.push(group);
    }
    onRemoveClick(id) {
        this.form.removeAt(this.form.getRawValue().map(i => i.id).indexOf(id));
    }
}
CreatePcWareComponent.ɵfac = function CreatePcWareComponent_Factory(t) { return new (t || CreatePcWareComponent)(); };
CreatePcWareComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CreatePcWareComponent, selectors: [["s5e-create-pc-ware"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => CreatePcWareComponent),
                multi: true
            }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 10, vars: 2, consts: [[1, "mb-15"], [1, "ai-fs"], ["mat-button", "", "type", "button", 3, "disabled", "click"], ["class", "d-f ai-b fw-nw", 4, "ngFor", "ngForOf"], [1, "d-f", "ai-b", "fw-nw"], ["appearance", "outline", 1, "mr-5"], [3, "formControl"], [3, "value", "disabled", 4, "ngFor", "ngForOf"], [1, "f-1"], ["mat-icon-button", "", "type", "button", 3, "click"], [3, "value", "disabled"]], template: function CreatePcWareComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Complex Forms");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreatePcWareComponent_Template_button_click_4_listener() { return ctx.onAddClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, CreatePcWareComponent_div_9_Template, 10, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.isAddDisabled(ctx.form.value));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.form.controls);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardContent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtcGMtd2FyZS5jb21wb25lbnQuc2NzcyJ9 */"], changeDetection: 0 });


/***/ }),

/***/ 5849:
/*!***********************************************************************************************!*\
  !*** ./projects/shadowrun/src/app/5e/components/view-attributes/view-attributes.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewAttributesComponent": () => (/* binding */ ViewAttributesComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6491);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shadowrun/app/5e */ 9022);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ 298);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 2118);






function ViewAttributesComponent_p_0_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", i_r3.tooltip);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", i_r3.name, " ", i_r3.rating, " ");
} }
function ViewAttributesComponent_p_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Attributes:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ViewAttributesComponent_p_0_span_3_Template, 2, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 1, ctx_r0.attributes$));
} }
function ViewAttributesComponent_mat_card_1_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", i_r5.tooltip);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r5.rating);
} }
function ViewAttributesComponent_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-header", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Attributes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ViewAttributesComponent_mat_card_1_tr_13_Template, 6, 3, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 1, ctx_r1.attributes$));
} }
class ViewAttributesComponent {
    constructor(service) {
        this.service = service;
        this.view = 'full';
        this.attributes$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
    }
    set character(value) {
        var _a;
        this.attributes$.next(((_a = value === null || value === void 0 ? void 0 : value.attributes) !== null && _a !== void 0 ? _a : []).filter(i => !!i.rating).map(i => this.service.getAttributeView(i)));
    }
}
ViewAttributesComponent.ɵfac = function ViewAttributesComponent_Factory(t) { return new (t || ViewAttributesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_0__.FifthEditionService)); };
ViewAttributesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ViewAttributesComponent, selectors: [["s5e-view-attributes"]], inputs: { view: "view", character: "character" }, decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "mb-15", 4, "ngIf"], ["class", "comma-separated ws-pw", 3, "matTooltip", 4, "ngFor", "ngForOf"], [1, "comma-separated", "ws-pw", 3, "matTooltip"], [1, "mb-15"], [1, "ai-fs"], [1, "mat-table"], [1, "mat-header-row"], [1, "mat-header-cell"], ["class", "mat-row", 4, "ngFor", "ngForOf"], [1, "mat-row"], [1, "mat-cell"], [3, "matTooltip"]], template: function ViewAttributesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ViewAttributesComponent_p_0_Template, 5, 3, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ViewAttributesComponent_mat_card_1_Template, 15, 3, "mat-card", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.view === "concise");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.view === "full");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltip, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardContent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LWF0dHJpYnV0ZXMuY29tcG9uZW50LnNjc3MifQ== */"], changeDetection: 0 });


/***/ }),

/***/ 7582:
/*!*****************************************************************************************************!*\
  !*** ./projects/shadowrun/src/app/5e/components/view-complex-forms/view-complex-forms.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewComplexFormsComponent": () => (/* binding */ ViewComplexFormsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6491);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shadowrun/app/5e */ 9022);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ 298);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 2118);






function ViewComplexFormsComponent_p_0_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", i_r4.tooltip);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", i_r4.name, " ");
} }
function ViewComplexFormsComponent_p_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Complex Forms:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ViewComplexFormsComponent_p_0_span_3_Template, 2, 2, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const forms_r2 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", forms_r2);
} }
function ViewComplexFormsComponent_mat_card_2_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", i_r7.tooltip);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r7 == null ? null : i_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", i_r7.target == null ? null : i_r7.target.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r7 == null ? null : i_r7.target == null ? null : i_r7.target.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", i_r7.duration == null ? null : i_r7.duration.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r7.duration == null ? null : i_r7.duration.alias);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r7 == null ? null : i_r7.fading);
} }
function ViewComplexFormsComponent_mat_card_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-header", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Complex Forms");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Target");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Fading");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ViewComplexFormsComponent_mat_card_2_tr_18_Template, 10, 7, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const forms_r5 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", forms_r5);
} }
class ViewComplexFormsComponent {
    constructor(service) {
        this.service = service;
        this.view = 'full';
        this.forms$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
    }
    set character(value) {
        var _a;
        const forms = ((_a = value === null || value === void 0 ? void 0 : value.complex_forms) !== null && _a !== void 0 ? _a : []).map(i => this.service.getComplexFormView(i));
        this.forms$.next(forms);
    }
}
ViewComplexFormsComponent.ɵfac = function ViewComplexFormsComponent_Factory(t) { return new (t || ViewComplexFormsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_0__.FifthEditionService)); };
ViewComplexFormsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ViewComplexFormsComponent, selectors: [["s5e-view-complex-forms"]], inputs: { view: "view", character: "character" }, decls: 4, vars: 6, consts: [[4, "ngIf"], ["class", "mb-15", 4, "ngIf"], ["class", "comma-separated ws-pw", 3, "matTooltip", 4, "ngFor", "ngForOf"], [1, "comma-separated", "ws-pw", 3, "matTooltip"], [1, "mb-15"], [1, "ai-fs"], [1, "mat-table"], [1, "mat-header-row"], [1, "mat-header-cell"], ["class", "mat-row", 4, "ngFor", "ngForOf"], [1, "mat-row"], [1, "mat-cell"], [3, "matTooltip"], [1, "mat-cell", 3, "matTooltip"]], template: function ViewComplexFormsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ViewComplexFormsComponent_p_0_Template, 4, 1, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ViewComplexFormsComponent_mat_card_2_Template, 19, 1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, ctx.view === "concise" && ctx.forms$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, ctx.view === "full" && ctx.forms$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltip, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardContent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LWNvbXBsZXgtZm9ybXMuY29tcG9uZW50LnNjc3MifQ== */"], changeDetection: 0 });


/***/ }),

/***/ 4485:
/*!*****************************************************************************************!*\
  !*** ./projects/shadowrun/src/app/5e/components/view-general/view-general.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewGeneralComponent": () => (/* binding */ ViewGeneralComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6491);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shadowrun/app/5e */ 9022);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 2118);





function ViewGeneralComponent_p_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.ngIf;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](((tmp_0_0 = i_r2 == null ? null : i_r2.name) !== null && tmp_0_0 !== undefined ? tmp_0_0 : "").toLocaleUpperCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" (", i_r2 == null ? null : i_r2.gender, " ", i_r2 == null ? null : i_r2.metatype, ", ", i_r2 == null ? null : i_r2.awakening, ")\n");
} }
function ViewGeneralComponent_mat_card_2_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 9);
} if (rf & 2) {
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/images/portraits/" + (i_r3 == null ? null : i_r3.portrait), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ViewGeneralComponent_mat_card_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "General");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-content", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ViewGeneralComponent_mat_card_2_img_5_Template, 1, 1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Metatype");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Awakening");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !!(i_r3 == null ? null : i_r3.portrait));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r3 == null ? null : i_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r3 == null ? null : i_r3.gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r3 == null ? null : i_r3.metatype);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r3 == null ? null : i_r3.awakening);
} }
class ViewGeneralComponent {
    constructor(service) {
        this.service = service;
        this.view = 'full';
        this.general$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
    }
    set character(value) {
        this.general$.next(this.service.getGeneralView({
            portrait: value === null || value === void 0 ? void 0 : value.portrait,
            name: value === null || value === void 0 ? void 0 : value.name,
            miscellaneous: value === null || value === void 0 ? void 0 : value.miscellaneous,
            awakening: value === null || value === void 0 ? void 0 : value.awakening,
            metatype: value === null || value === void 0 ? void 0 : value.metatype
        }));
    }
}
ViewGeneralComponent.ɵfac = function ViewGeneralComponent_Factory(t) { return new (t || ViewGeneralComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_0__.FifthEditionService)); };
ViewGeneralComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ViewGeneralComponent, selectors: [["s5e-view-general"]], inputs: { view: "view", character: "character" }, decls: 4, vars: 6, consts: [[4, "ngIf"], ["class", "mb-15", 4, "ngIf"], [1, "mb-15"], [1, "ai-fs"], [1, "d-f", "ai-fs"], ["class", "portrait", "alt", "Character Portrait", 3, "src", 4, "ngIf"], [1, "mat-table", "ml-10"], [1, "mat-row"], [1, "mat-cell"], ["alt", "Character Portrait", 1, "portrait", 3, "src"]], template: function ViewGeneralComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ViewGeneralComponent_p_0_Template, 4, 4, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ViewGeneralComponent_mat_card_2_Template, 28, 5, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, ctx.view === "concise" && ctx.general$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, ctx.view === "full" && ctx.general$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardContent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe], styles: [".portrait[_ngcontent-%COMP%] {\n  width: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctZ2VuZXJhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFZLFdBQUE7QUFFWiIsImZpbGUiOiJ2aWV3LWdlbmVyYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9ydHJhaXQgeyB3aWR0aDogODBweDsgfVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 6625:
/*!*********************************************************************************************!*\
  !*** ./projects/shadowrun/src/app/5e/components/view-qualities/view-qualities.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewQualitiesComponent": () => (/* binding */ ViewQualitiesComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6491);
/* harmony import */ var _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shadowrun/app/5e */ 9022);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ 298);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 2118);







function ViewQualitiesComponent_p_0_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", i_r3.tooltip);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", i_r3.name, "", !!i_r3.specialty ? " (" + i_r3.specialty + ")" : "", "", !!i_r3.rating ? " " + i_r3.rating : "", " ");
} }
function ViewQualitiesComponent_p_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Qualities:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ViewQualitiesComponent_p_0_span_3_Template, 2, 4, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 1, ctx_r0.qualities$));
} }
function ViewQualitiesComponent_mat_card_1_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", i_r5.tooltip);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", i_r5.name, "", !!i_r5.specialty ? " (" + i_r5.specialty + ")" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r5.rating);
} }
function ViewQualitiesComponent_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-header", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Qualities");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ViewQualitiesComponent_mat_card_1_tr_13_Template, 6, 4, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 1, ctx_r1.qualities$));
} }
class ViewQualitiesComponent {
    constructor(service) {
        this.service = service;
        this.view = 'full';
        this.qualities$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
    }
    set character(value) {
        var _a, _b;
        const metatype = _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_0__.METATYPES.find(i => i.id === (value === null || value === void 0 ? void 0 : value.metatype));
        const qualities = [
            ...((_a = metatype === null || metatype === void 0 ? void 0 : metatype.qualities) !== null && _a !== void 0 ? _a : []),
            ...((_b = value === null || value === void 0 ? void 0 : value.qualities) !== null && _b !== void 0 ? _b : [])
        ];
        this.qualities$.next(qualities.map(i => this.service.getQualityView(i)));
    }
}
ViewQualitiesComponent.ɵfac = function ViewQualitiesComponent_Factory(t) { return new (t || ViewQualitiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_0__.FifthEditionService)); };
ViewQualitiesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ViewQualitiesComponent, selectors: [["s5e-view-qualities"]], inputs: { view: "view", character: "character" }, decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "mb-15", 4, "ngIf"], ["class", "comma-separated ws-pw", 3, "matTooltip", 4, "ngFor", "ngForOf"], [1, "comma-separated", "ws-pw", 3, "matTooltip"], [1, "mb-15"], [1, "ai-fs"], [1, "mat-table"], [1, "mat-header-row"], [1, "mat-header-cell"], ["class", "mat-row", 4, "ngFor", "ngForOf"], [1, "mat-row"], [1, "mat-cell"], [3, "matTooltip"]], template: function ViewQualitiesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ViewQualitiesComponent_p_0_Template, 5, 3, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ViewQualitiesComponent_mat_card_1_Template, 15, 3, "mat-card", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.view === "concise");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.view === "full");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltip, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardContent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LXF1YWxpdGllcy5jb21wb25lbnQuc2NzcyJ9 */"], changeDetection: 0 });


/***/ }),

/***/ 9749:
/*!***************************************************************************************!*\
  !*** ./projects/shadowrun/src/app/5e/components/view-skills/view-skills.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewSkillsComponent": () => (/* binding */ ViewSkillsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6491);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shadowrun/app/5e */ 9022);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ 298);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 2118);






function ViewSkillsComponent_p_0_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", i_r3.tooltip);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", i_r3.name, " ", i_r3.rating, "", i_r3.specializations ? " (+2 " + i_r3.specializations + ")" : "", " ");
} }
function ViewSkillsComponent_p_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Skills:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ViewSkillsComponent_p_0_span_3_Template, 2, 4, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 1, ctx_r0.skills$));
} }
function ViewSkillsComponent_mat_card_1_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", i_r5.tooltip);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r5.rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r5.specializations);
} }
function ViewSkillsComponent_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-header", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Skills");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Specializations");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ViewSkillsComponent_mat_card_1_tr_15_Template, 8, 4, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 1, ctx_r1.skills$));
} }
class ViewSkillsComponent {
    constructor(service) {
        this.service = service;
        this.view = 'full';
        this.skills$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
    }
    set character(value) {
        var _a;
        this.skills$.next(((_a = value === null || value === void 0 ? void 0 : value.skills) !== null && _a !== void 0 ? _a : []).filter(i => !!i.rating).map(i => this.service.getSkillView(i)));
    }
}
ViewSkillsComponent.ɵfac = function ViewSkillsComponent_Factory(t) { return new (t || ViewSkillsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_0__.FifthEditionService)); };
ViewSkillsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ViewSkillsComponent, selectors: [["s5e-view-skills"]], inputs: { view: "view", character: "character" }, decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "mb-15", 4, "ngIf"], ["class", "comma-separated ws-pw", 3, "matTooltip", 4, "ngFor", "ngForOf"], [1, "comma-separated", "ws-pw", 3, "matTooltip"], [1, "mb-15"], [1, "ai-fs"], [1, "mat-table"], [1, "mat-header-row"], [1, "mat-header-cell"], ["class", "mat-row", 4, "ngFor", "ngForOf"], [1, "mat-row"], [1, "mat-cell"], [3, "matTooltip"]], template: function ViewSkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ViewSkillsComponent_p_0_Template, 5, 3, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ViewSkillsComponent_mat_card_1_Template, 17, 3, "mat-card", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.view === "concise");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.view === "full");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltip, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardContent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LXNraWxscy5jb21wb25lbnQuc2NzcyJ9 */"], changeDetection: 0 });


/***/ }),

/***/ 261:
/*!***************************************************************************************!*\
  !*** ./projects/shadowrun/src/app/5e/components/view-spells/view-spells.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewSpellsComponent": () => (/* binding */ ViewSpellsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6491);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shadowrun/app/5e */ 9022);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ 298);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 2118);






function ViewSpellsComponent_p_0_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", i_r4.tooltip);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", i_r4.name, "", i_r4.specialty ? " (" + i_r4.specialty + ")" : "", " ");
} }
function ViewSpellsComponent_p_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Spells:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ViewSpellsComponent_p_0_span_3_Template, 2, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const spells_r2 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", spells_r2);
} }
function ViewSpellsComponent_mat_card_2_tr_20_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", tag_r9.labels.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tag_r9.name);
} }
function ViewSpellsComponent_mat_card_2_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ViewSpellsComponent_mat_card_2_tr_20_span_6_Template, 2, 2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", i_r7.category == null ? null : i_r7.category.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r7.category == null ? null : i_r7.category.name[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", i_r7.tooltip);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", i_r7.name, "", i_r7.specialty ? " (" + i_r7.specialty + ")" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", i_r7.tags);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", ctx_r6.getTypeTooltip(i_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r7.type == null ? null : i_r7.type.labels == null ? null : i_r7.type.labels.alias);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", i_r7.range == null ? null : i_r7.range.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r7.range == null ? null : i_r7.range.alias);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", i_r7.duration == null ? null : i_r7.duration.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r7.duration == null ? null : i_r7.duration.alias);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r7.drain);
} }
function ViewSpellsComponent_mat_card_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-header", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Spells");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Range");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Drain");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ViewSpellsComponent_mat_card_2_tr_20_Template, 15, 13, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const spells_r5 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", spells_r5);
} }
class ViewSpellsComponent {
    constructor(service) {
        this.service = service;
        this.view = 'full';
        this.spells$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
    }
    set character(value) {
        var _a;
        const spells = ((_a = value === null || value === void 0 ? void 0 : value.spells) !== null && _a !== void 0 ? _a : []).map(i => this.service.getSpellView(i));
        this.spells$.next(spells);
    }
    getTypeTooltip(i) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return ((_b = (_a = i.type) === null || _a === void 0 ? void 0 : _a.labels) !== null && _b !== void 0 ? _b : {}).hasOwnProperty((_c = i.category) === null || _c === void 0 ? void 0 : _c.id)
            ? ((_e = (_d = i.type) === null || _d === void 0 ? void 0 : _d.labels) !== null && _e !== void 0 ? _e : {})[(_f = i.category) === null || _f === void 0 ? void 0 : _f.id]
            : (_h = (_g = i.type) === null || _g === void 0 ? void 0 : _g.labels) === null || _h === void 0 ? void 0 : _h.alias;
    }
}
ViewSpellsComponent.ɵfac = function ViewSpellsComponent_Factory(t) { return new (t || ViewSpellsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_0__.FifthEditionService)); };
ViewSpellsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ViewSpellsComponent, selectors: [["s5e-view-spells"]], inputs: { view: "view", character: "character" }, decls: 4, vars: 6, consts: [[4, "ngIf"], ["class", "mb-15", 4, "ngIf"], ["class", "comma-separated ws-pw", 3, "matTooltip", 4, "ngFor", "ngForOf"], [1, "comma-separated", "ws-pw", 3, "matTooltip"], [1, "mb-15"], [1, "ai-fs"], [1, "mat-table"], [1, "mat-header-row"], [1, "mat-header-cell"], ["class", "mat-row", 4, "ngFor", "ngForOf"], [1, "mat-row"], [1, "mat-cell", 3, "matTooltip"], [1, "mat-cell"], [3, "matTooltip"], ["class", "ml-5 c-gray", 3, "matTooltip", 4, "ngFor", "ngForOf"], [1, "ml-5", "c-gray", 3, "matTooltip"]], template: function ViewSpellsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ViewSpellsComponent_p_0_Template, 4, 1, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ViewSpellsComponent_mat_card_2_Template, 21, 1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, ctx.view === "concise" && ctx.spells$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, ctx.view === "full" && ctx.spells$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltip, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardContent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LXNwZWxscy5jb21wb25lbnQuc2NzcyJ9 */"], changeDetection: 0 });


/***/ }),

/***/ 9022:
/*!************************************************!*\
  !*** ./projects/shadowrun/src/app/5e/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADEPT_POWERS": () => (/* reexport safe */ _5e_adept_powers__WEBPACK_IMPORTED_MODULE_0__.ADEPT_POWERS),
/* harmony export */   "ATTRIBUTES": () => (/* reexport safe */ _5e_attributes__WEBPACK_IMPORTED_MODULE_1__.ATTRIBUTES),
/* harmony export */   "AWAKENINGS": () => (/* reexport safe */ _5e_awakenings__WEBPACK_IMPORTED_MODULE_2__.AWAKENINGS),
/* harmony export */   "BOOKS": () => (/* reexport safe */ _5e_books__WEBPACK_IMPORTED_MODULE_3__.BOOKS),
/* harmony export */   "COMPLEX_FORMS": () => (/* reexport safe */ _5e_complex_forms__WEBPACK_IMPORTED_MODULE_4__.COMPLEX_FORMS),
/* harmony export */   "COMPLEX_FORM_DURATIONS": () => (/* reexport safe */ _5e_complex_forms__WEBPACK_IMPORTED_MODULE_4__.COMPLEX_FORM_DURATIONS),
/* harmony export */   "COMPLEX_FORM_TARGETS": () => (/* reexport safe */ _5e_complex_forms__WEBPACK_IMPORTED_MODULE_4__.COMPLEX_FORM_TARGETS),
/* harmony export */   "ADEPT_POWER_ID": () => (/* reexport safe */ _5e_enums__WEBPACK_IMPORTED_MODULE_5__.ADEPT_POWER_ID),
/* harmony export */   "ATTRIBUTE_ID": () => (/* reexport safe */ _5e_enums__WEBPACK_IMPORTED_MODULE_5__.ATTRIBUTE_ID),
/* harmony export */   "ATTRIBUTE_TYPE_ID": () => (/* reexport safe */ _5e_enums__WEBPACK_IMPORTED_MODULE_5__.ATTRIBUTE_TYPE_ID),
/* harmony export */   "AWAKENING_ID": () => (/* reexport safe */ _5e_enums__WEBPACK_IMPORTED_MODULE_5__.AWAKENING_ID),
/* harmony export */   "BOOK_ID": () => (/* reexport safe */ _5e_enums__WEBPACK_IMPORTED_MODULE_5__.BOOK_ID),
/* harmony export */   "COMPLEX_FORM_DURATION_ID": () => (/* reexport safe */ _5e_enums__WEBPACK_IMPORTED_MODULE_5__.COMPLEX_FORM_DURATION_ID),
/* harmony export */   "COMPLEX_FORM_ID": () => (/* reexport safe */ _5e_enums__WEBPACK_IMPORTED_MODULE_5__.COMPLEX_FORM_ID),
/* harmony export */   "COMPLEX_FORM_TARGET_ID": () => (/* reexport safe */ _5e_enums__WEBPACK_IMPORTED_MODULE_5__.COMPLEX_FORM_TARGET_ID),
/* harmony export */   "CONTACT_TYPE_ID": () => (/* reexport safe */ _5e_enums__WEBPACK_IMPORTED_MODULE_5__.CONTACT_TYPE_ID),
/* harmony export */   "GEAR_ID": () => (/* reexport safe */ _5e_enums__WEBPACK_IMPORTED_MODULE_5__.GEAR_ID),
/* harmony export */   "GEAR_TYPE_ID": () => (/* reexport safe */ _5e_enums__WEBPACK_IMPORTED_MODULE_5__.GEAR_TYPE_ID),
/* harmony export */   "LIFESTYLE_ID": () => (/* reexport safe */ _5e_enums__WEBPACK_IMPORTED_MODULE_5__.LIFESTYLE_ID),
/* harmony export */   "LIFESTYLE_OPTION_ID": () => (/* reexport safe */ _5e_enums__WEBPACK_IMPORTED_MODULE_5__.LIFESTYLE_OPTION_ID),
/* harmony export */   "MAGICAL_TRADITION_ID": () => (/* reexport safe */ _5e_enums__WEBPACK_IMPORTED_MODULE_5__.MAGICAL_TRADITION_ID),
/* harmony export */   "METATYPE_ID": () => (/* reexport safe */ _5e_enums__WEBPACK_IMPORTED_MODULE_5__.METATYPE_ID),
/* harmony export */   "POWER_ACTION_ID": () => (/* reexport safe */ _5e_enums__WEBPACK_IMPORTED_MODULE_5__.POWER_ACTION_ID),
/* harmony export */   "POWER_DURATION_ID": () => (/* reexport safe */ _5e_enums__WEBPACK_IMPORTED_MODULE_5__.POWER_DURATION_ID),
/* harmony export */   "POWER_ID": () => (/* reexport safe */ _5e_enums__WEBPACK_IMPORTED_MODULE_5__.POWER_ID),
/* harmony export */   "POWER_RANGE_ID": () => (/* reexport safe */ _5e_enums__WEBPACK_IMPORTED_MODULE_5__.POWER_RANGE_ID),
/* harmony export */   "POWER_TYPE_ID": () => (/* reexport safe */ _5e_enums__WEBPACK_IMPORTED_MODULE_5__.POWER_TYPE_ID),
/* harmony export */   "QUALITY_ID": () => (/* reexport safe */ _5e_enums__WEBPACK_IMPORTED_MODULE_5__.QUALITY_ID),
/* harmony export */   "SKILL_CATEGORY_ID": () => (/* reexport safe */ _5e_enums__WEBPACK_IMPORTED_MODULE_5__.SKILL_CATEGORY_ID),
/* harmony export */   "SKILL_ID": () => (/* reexport safe */ _5e_enums__WEBPACK_IMPORTED_MODULE_5__.SKILL_ID),
/* harmony export */   "SPELL_CATEGORY_ID": () => (/* reexport safe */ _5e_enums__WEBPACK_IMPORTED_MODULE_5__.SPELL_CATEGORY_ID),
/* harmony export */   "SPELL_DAMAGE_ID": () => (/* reexport safe */ _5e_enums__WEBPACK_IMPORTED_MODULE_5__.SPELL_DAMAGE_ID),
/* harmony export */   "SPELL_DURATION_ID": () => (/* reexport safe */ _5e_enums__WEBPACK_IMPORTED_MODULE_5__.SPELL_DURATION_ID),
/* harmony export */   "SPELL_ID": () => (/* reexport safe */ _5e_enums__WEBPACK_IMPORTED_MODULE_5__.SPELL_ID),
/* harmony export */   "SPELL_KIND_ID": () => (/* reexport safe */ _5e_enums__WEBPACK_IMPORTED_MODULE_5__.SPELL_KIND_ID),
/* harmony export */   "SPELL_RANGE_ID": () => (/* reexport safe */ _5e_enums__WEBPACK_IMPORTED_MODULE_5__.SPELL_RANGE_ID),
/* harmony export */   "SPELL_TAG_ID": () => (/* reexport safe */ _5e_enums__WEBPACK_IMPORTED_MODULE_5__.SPELL_TAG_ID),
/* harmony export */   "SPELL_TYPE_ID": () => (/* reexport safe */ _5e_enums__WEBPACK_IMPORTED_MODULE_5__.SPELL_TYPE_ID),
/* harmony export */   "SPIRIT_ID": () => (/* reexport safe */ _5e_enums__WEBPACK_IMPORTED_MODULE_5__.SPIRIT_ID),
/* harmony export */   "GEAR": () => (/* reexport safe */ _5e_gear__WEBPACK_IMPORTED_MODULE_6__.GEAR),
/* harmony export */   "GEAR_CATEGORIES": () => (/* reexport safe */ _5e_gear__WEBPACK_IMPORTED_MODULE_6__.GEAR_CATEGORIES),
/* harmony export */   "LIFESTYLES": () => (/* reexport safe */ _5e_lifestyle__WEBPACK_IMPORTED_MODULE_7__.LIFESTYLES),
/* harmony export */   "LIFESTYLE_OPTIONS": () => (/* reexport safe */ _5e_lifestyle__WEBPACK_IMPORTED_MODULE_7__.LIFESTYLE_OPTIONS),
/* harmony export */   "METAMAGIC": () => (/* reexport safe */ _5e_metamagic__WEBPACK_IMPORTED_MODULE_8__.METAMAGIC),
/* harmony export */   "METATYPES": () => (/* reexport safe */ _5e_metatypes__WEBPACK_IMPORTED_MODULE_9__.METATYPES),
/* harmony export */   "POWERS": () => (/* reexport safe */ _5e_powers__WEBPACK_IMPORTED_MODULE_11__.POWERS),
/* harmony export */   "NEGATIVE_QUALITIES": () => (/* reexport safe */ _5e_qualities__WEBPACK_IMPORTED_MODULE_12__.NEGATIVE_QUALITIES),
/* harmony export */   "POSITIVE_QUALITIES": () => (/* reexport safe */ _5e_qualities__WEBPACK_IMPORTED_MODULE_12__.POSITIVE_QUALITIES),
/* harmony export */   "RACIAL_QUALITIES": () => (/* reexport safe */ _5e_qualities__WEBPACK_IMPORTED_MODULE_12__.RACIAL_QUALITIES),
/* harmony export */   "ACTIVE_SKILLS": () => (/* reexport safe */ _5e_skills__WEBPACK_IMPORTED_MODULE_13__.ACTIVE_SKILLS),
/* harmony export */   "KNOWLEDGE": () => (/* reexport safe */ _5e_skills__WEBPACK_IMPORTED_MODULE_13__.KNOWLEDGE),
/* harmony export */   "SKILL_CATEGORIES": () => (/* reexport safe */ _5e_skills__WEBPACK_IMPORTED_MODULE_13__.SKILL_CATEGORIES),
/* harmony export */   "FifthEditionService": () => (/* reexport safe */ _5e_service__WEBPACK_IMPORTED_MODULE_14__.FifthEditionService),
/* harmony export */   "SPELLS": () => (/* reexport safe */ _5e_spells__WEBPACK_IMPORTED_MODULE_15__.SPELLS),
/* harmony export */   "SPELL_CATEGORIES": () => (/* reexport safe */ _5e_spells__WEBPACK_IMPORTED_MODULE_15__.SPELL_CATEGORIES),
/* harmony export */   "SPELL_DAMAGE": () => (/* reexport safe */ _5e_spells__WEBPACK_IMPORTED_MODULE_15__.SPELL_DAMAGE),
/* harmony export */   "SPELL_DURATIONS": () => (/* reexport safe */ _5e_spells__WEBPACK_IMPORTED_MODULE_15__.SPELL_DURATIONS),
/* harmony export */   "SPELL_KINDS": () => (/* reexport safe */ _5e_spells__WEBPACK_IMPORTED_MODULE_15__.SPELL_KINDS),
/* harmony export */   "SPELL_RANGES": () => (/* reexport safe */ _5e_spells__WEBPACK_IMPORTED_MODULE_15__.SPELL_RANGES),
/* harmony export */   "SPELL_TAGS": () => (/* reexport safe */ _5e_spells__WEBPACK_IMPORTED_MODULE_15__.SPELL_TAGS),
/* harmony export */   "SPELL_TYPES": () => (/* reexport safe */ _5e_spells__WEBPACK_IMPORTED_MODULE_15__.SPELL_TYPES),
/* harmony export */   "SPIRITS": () => (/* reexport safe */ _5e_spirits__WEBPACK_IMPORTED_MODULE_16__.SPIRITS),
/* harmony export */   "MAGIC_TRADITIONS": () => (/* reexport safe */ _5e_traditions__WEBPACK_IMPORTED_MODULE_17__.MAGIC_TRADITIONS),
/* harmony export */   "DEFAULT_ATTRIBUTE_RANGE": () => (/* reexport safe */ _5e_variables__WEBPACK_IMPORTED_MODULE_18__.DEFAULT_ATTRIBUTE_RANGE),
/* harmony export */   "FREE_CONTACTS": () => (/* reexport safe */ _5e_variables__WEBPACK_IMPORTED_MODULE_18__.FREE_CONTACTS),
/* harmony export */   "FREE_KNOWLEDGE": () => (/* reexport safe */ _5e_variables__WEBPACK_IMPORTED_MODULE_18__.FREE_KNOWLEDGE),
/* harmony export */   "KARMA_PER_ACTIVE_SKILL": () => (/* reexport safe */ _5e_variables__WEBPACK_IMPORTED_MODULE_18__.KARMA_PER_ACTIVE_SKILL),
/* harmony export */   "KARMA_PER_ATTRIBUTE": () => (/* reexport safe */ _5e_variables__WEBPACK_IMPORTED_MODULE_18__.KARMA_PER_ATTRIBUTE),
/* harmony export */   "KARMA_PER_COMPLEX_FORM": () => (/* reexport safe */ _5e_variables__WEBPACK_IMPORTED_MODULE_18__.KARMA_PER_COMPLEX_FORM),
/* harmony export */   "KARMA_PER_INITIATE": () => (/* reexport safe */ _5e_variables__WEBPACK_IMPORTED_MODULE_18__.KARMA_PER_INITIATE),
/* harmony export */   "KARMA_PER_KNOWLEDGE": () => (/* reexport safe */ _5e_variables__WEBPACK_IMPORTED_MODULE_18__.KARMA_PER_KNOWLEDGE),
/* harmony export */   "KARMA_PER_SPECIALIZATION": () => (/* reexport safe */ _5e_variables__WEBPACK_IMPORTED_MODULE_18__.KARMA_PER_SPECIALIZATION),
/* harmony export */   "KARMA_PER_SPELL": () => (/* reexport safe */ _5e_variables__WEBPACK_IMPORTED_MODULE_18__.KARMA_PER_SPELL),
/* harmony export */   "MAX_KNOWN_SPELLS": () => (/* reexport safe */ _5e_variables__WEBPACK_IMPORTED_MODULE_18__.MAX_KNOWN_SPELLS),
/* harmony export */   "NEGATIVE_QUALITIES_MAX_COST": () => (/* reexport safe */ _5e_variables__WEBPACK_IMPORTED_MODULE_18__.NEGATIVE_QUALITIES_MAX_COST),
/* harmony export */   "POSITIVE_QUALITIES_MAX_COST": () => (/* reexport safe */ _5e_variables__WEBPACK_IMPORTED_MODULE_18__.POSITIVE_QUALITIES_MAX_COST),
/* harmony export */   "SKILL_MAX_ON_CREATION": () => (/* reexport safe */ _5e_variables__WEBPACK_IMPORTED_MODULE_18__.SKILL_MAX_ON_CREATION),
/* harmony export */   "SKILL_MAX_ON_UPGRADE": () => (/* reexport safe */ _5e_variables__WEBPACK_IMPORTED_MODULE_18__.SKILL_MAX_ON_UPGRADE),
/* harmony export */   "SKILL_MIN": () => (/* reexport safe */ _5e_variables__WEBPACK_IMPORTED_MODULE_18__.SKILL_MIN),
/* harmony export */   "SPECIALIZATIONS_MAX": () => (/* reexport safe */ _5e_variables__WEBPACK_IMPORTED_MODULE_18__.SPECIALIZATIONS_MAX),
/* harmony export */   "SPECIALIZATIONS_MIN_SKILL_RANK": () => (/* reexport safe */ _5e_variables__WEBPACK_IMPORTED_MODULE_18__.SPECIALIZATIONS_MIN_SKILL_RANK)
/* harmony export */ });
/* harmony import */ var _5e_adept_powers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./5e.adept-powers */ 5539);
/* harmony import */ var _5e_attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./5e.attributes */ 2582);
/* harmony import */ var _5e_awakenings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./5e.awakenings */ 419);
/* harmony import */ var _5e_books__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./5e.books */ 9860);
/* harmony import */ var _5e_complex_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./5e.complex-forms */ 471);
/* harmony import */ var _5e_enums__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./5e.enums */ 8642);
/* harmony import */ var _5e_gear__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./5e.gear */ 7804);
/* harmony import */ var _5e_lifestyle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./5e.lifestyle */ 8201);
/* harmony import */ var _5e_metamagic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./5e.metamagic */ 6369);
/* harmony import */ var _5e_metatypes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./5e.metatypes */ 3705);
/* harmony import */ var _5e_models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./5e.models */ 6060);
/* harmony import */ var _5e_powers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./5e.powers */ 4411);
/* harmony import */ var _5e_qualities__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./5e.qualities */ 9925);
/* harmony import */ var _5e_skills__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./5e.skills */ 9818);
/* harmony import */ var _5e_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./5e.service */ 9300);
/* harmony import */ var _5e_spells__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./5e.spells */ 2916);
/* harmony import */ var _5e_spirits__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./5e.spirits */ 2254);
/* harmony import */ var _5e_traditions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./5e.traditions */ 9041);
/* harmony import */ var _5e_variables__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./5e.variables */ 2084);





















/***/ }),

/***/ 747:
/*!**********************************************************!*\
  !*** ./projects/shadowrun/src/app/app-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);



const routes = [
    { path: '', loadChildren: () => __webpack_require__.e(/*! import() */ "projects_shadowrun_src_app_index_index_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./index/index.module */ 4195)).then(m => m.IndexModule) },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 338:
/*!*****************************************************!*\
  !*** ./projects/shadowrun/src/app/app.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);



class AppComponent {
    constructor(icons) {
        icons.setDefaultFontSetClass('material-icons-outlined');
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconRegistry)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 1975:
/*!**************************************************!*\
  !*** ./projects/shadowrun/src/app/app.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ 718);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/compat */ 5908);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared */ 8454);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 747);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 338);
/* harmony import */ var _shadowrun_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shadowrun/environments/environment */ 9952);
/* harmony import */ var _shadowrun_app_5e_5e_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shadowrun/app/5e/5e.module */ 6789);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);










class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_fire_compat__WEBPACK_IMPORTED_MODULE_8__.AngularFireModule.initializeApp(_shadowrun_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.firebase, 'shadowrun'),
            _shared__WEBPACK_IMPORTED_MODULE_0__.CoreModule,
            _shadowrun_app_5e_5e_module__WEBPACK_IMPORTED_MODULE_4__.FifthEditionModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_fire_compat__WEBPACK_IMPORTED_MODULE_8__.AngularFireModule, _shared__WEBPACK_IMPORTED_MODULE_0__.CoreModule,
        _shadowrun_app_5e_5e_module__WEBPACK_IMPORTED_MODULE_4__.FifthEditionModule] }); })();


/***/ }),

/***/ 3850:
/*!*****************************************************************************************!*\
  !*** ./projects/shadowrun/src/app/ui/components/number-input/number-input.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NumberInputComponent": () => (/* binding */ NumberInputComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 2529);








const _c0 = ["*"];
class NumberInputComponent {
    constructor() {
        this.min = 0;
        this.max = 99;
        this.value = 0;
        this.touched = false;
        this.disabled = false;
        this.onChange = (_) => { };
        this.onTouched = () => { };
    }
    writeValue(value) { this.value = value; }
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { }
    isRemoveDisabled() { return (this.value <= this.min) || this.disabled; }
    isAddDisabled() { return (this.value >= this.max) || this.disabled; }
    onRemoveClick() {
        this.markAsTouched();
        this.value -= 1;
        this.onChange(this.value);
    }
    onAddClick() {
        this.markAsTouched();
        this.value += 1;
        this.onChange(this.value);
    }
    markAsTouched() {
        if (!this.touched) {
            this.onTouched();
            this.touched = true;
        }
    }
    setDisabledState(disabled) { this.disabled = disabled; }
}
NumberInputComponent.ɵfac = function NumberInputComponent_Factory(t) { return new (t || NumberInputComponent)(); };
NumberInputComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NumberInputComponent, selectors: [["number-input"]], inputs: { min: "min", max: "max" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NumberInputComponent),
                multi: true
            }
        ])], ngContentSelectors: _c0, decls: 10, vars: 4, consts: [["appearance", "outline", "floatLabel", "always", 2, "max-width", "200px"], ["matInput", "", "type", "number", "readonly", "", 3, "ngModel", "disabled", "ngModelChange"], ["type", "button", "mat-icon-button", "", "matPrefix", "", 3, "disabled", "click"], ["type", "button", "mat-icon-button", "", "matSuffix", "", 3, "disabled", "click"]], template: function NumberInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NumberInputComponent_Template_input_ngModelChange_3_listener($event) { return ctx.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberInputComponent_Template_button_click_4_listener() { return ctx.onRemoveClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberInputComponent_Template_button_click_7_listener() { return ctx.onAddClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value)("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isRemoveDisabled());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isAddDisabled());
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatPrefix, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatSuffix], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJudW1iZXItaW5wdXQuY29tcG9uZW50LnNjc3MifQ== */"], changeDetection: 0 });


/***/ }),

/***/ 7780:
/*!******************************************************************************************************!*\
  !*** ./projects/shadowrun/src/app/ui/components/portrait-select/portrait-select-dialog.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortraitSelectDialogComponent": () => (/* binding */ PortraitSelectDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _shadowrun_app_ui_ui_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shadowrun/app/ui/ui.models */ 2645);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 781);






function PortraitSelectDialogComponent_img_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PortraitSelectDialogComponent_img_3_Template_img_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const i_r2 = restoredCtx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.value = i_r2; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const src_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("selected", ctx_r0.value === i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/images/portraits/" + src_r1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
class PortraitSelectDialogComponent {
    constructor(data) {
        this.data = data;
        this.portraits = _shadowrun_app_ui_ui_models__WEBPACK_IMPORTED_MODULE_0__.PORTRAITS;
        this.value = this.data;
    }
}
PortraitSelectDialogComponent.ɵfac = function PortraitSelectDialogComponent_Factory(t) { return new (t || PortraitSelectDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA)); };
PortraitSelectDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PortraitSelectDialogComponent, selectors: [["ng-component"]], decls: 9, vars: 2, consts: [["mat-dialog-title", ""], [1, "lh-0"], [3, "selected", "src", "click", 4, "ngFor", "ngForOf"], ["mat-button", "", "mat-dialog-close", "", 1, "mr-15"], ["mat-flat-button", "", "color", "primary", 3, "mat-dialog-close"], [3, "src", "click"]], template: function PortraitSelectDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Choose a portrait");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-dialog-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PortraitSelectDialogComponent_img_3_Template, 1, 3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.portraits);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", ctx.value);


/***/ }),

/***/ 3758:
/*!***********************************************************************************************!*\
  !*** ./projects/shadowrun/src/app/ui/components/portrait-select/portrait-select.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortraitSelectComponent": () => (/* binding */ PortraitSelectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6491);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9170);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8636);
/* harmony import */ var _portrait_select_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./portrait-select-dialog.component */ 7780);
/* harmony import */ var _shadowrun_app_ui_ui_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shadowrun/app/ui/ui.models */ 2645);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared */ 8454);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4364);











class PortraitSelectComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.portraits = _shadowrun_app_ui_ui_models__WEBPACK_IMPORTED_MODULE_1__.PORTRAITS;
        this.value = 0;
        this.src$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(this.getPortrait());
        this.touched = false;
        this.disabled = false;
        this.onChange = (_) => { };
        this.onTouched = () => { };
    }
    writeValue(value) {
        var _a;
        this.value = (_a = _shadowrun_app_ui_ui_models__WEBPACK_IMPORTED_MODULE_1__.PORTRAITS.indexOf(value)) !== null && _a !== void 0 ? _a : 0;
        this.src$.next(this.getPortrait());
    }
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { }
    isDisabled() { return this.disabled; }
    getPortrait() {
        return 'assets/images/portraits/' + this.portraits[this.value];
    }
    onBackClick() {
        this.markAsTouched();
        this.value = this.value - 1 < 0 ? _shadowrun_app_ui_ui_models__WEBPACK_IMPORTED_MODULE_1__.PORTRAITS.length - 1 : this.value - 1;
        this.onChange(this.portraits[this.value]);
        this.src$.next(this.getPortrait());
    }
    onForwardClick() {
        this.markAsTouched();
        this.value = this.value + 1 > _shadowrun_app_ui_ui_models__WEBPACK_IMPORTED_MODULE_1__.PORTRAITS.length - 1 ? 0 : this.value + 1;
        this.onChange(this.portraits[this.value]);
        this.src$.next(this.getPortrait());
    }
    onListClick() {
        this.markAsTouched();
        this.dialog
            .open(_portrait_select_dialog_component__WEBPACK_IMPORTED_MODULE_0__.PortraitSelectDialogComponent, { data: this.value })
            .afterClosed()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(res => !!res), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(res => {
            this.value = res;
            this.onChange(this.portraits[this.value]);
            this.src$.next(this.getPortrait());
        }))
            .subscribe();
    }
    markAsTouched() {
        if (!this.touched) {
            this.onTouched();
            this.touched = true;
        }
    }
    setDisabledState(disabled) { this.disabled = disabled; }
}
PortraitSelectComponent.ɵfac = function PortraitSelectComponent_Factory(t) { return new (t || PortraitSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared__WEBPACK_IMPORTED_MODULE_2__.DialogService)); };
PortraitSelectComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: PortraitSelectComponent, selectors: [["portrait-select"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.forwardRef)(() => PortraitSelectComponent),
                multi: true
            }
        ])], decls: 11, vars: 6, consts: [[3, "src"], ["type", "button", "mat-icon-button", "", 1, "btn", "back", 3, "disabled", "click"], ["type", "button", "mat-icon-button", "", 1, "btn", "forward", 3, "disabled", "click"], ["type", "button", "mat-icon-button", "", 1, "btn", "list", 3, "disabled", "click"]], template: function PortraitSelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PortraitSelectComponent_Template_button_click_2_listener() { return ctx.onBackClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "arrow_back_ios");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PortraitSelectComponent_Template_button_click_5_listener() { return ctx.onForwardClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "arrow_forward_ios");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PortraitSelectComponent_Template_button_click_8_listener() { return ctx.onListClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "apps");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 4, ctx.src$), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.isDisabled());
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.isDisabled());
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.isDisabled());
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe], styles: ["[_nghost-%COMP%] {\n  position: relative;\n  display: inline-block;\n  line-height: 0;\n}\n[_nghost-%COMP%]   .btn[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  z-index: 1;\n}\n[_nghost-%COMP%]   .back[_ngcontent-%COMP%] {\n  left: 0;\n}\n[_nghost-%COMP%]   .forward[_ngcontent-%COMP%] {\n  right: 0;\n}\n[_nghost-%COMP%]   .list[_ngcontent-%COMP%] {\n  left: 50%;\n  transform: translate(-50%, 0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcnRyYWl0LXNlbGVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBQ0Y7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFDSjtBQUNFO0VBQ0UsT0FBQTtBQUNKO0FBQ0U7RUFDRSxRQUFBO0FBQ0o7QUFDRTtFQUNFLFNBQUE7RUFDQSw2QkFBQTtBQUNKIiwiZmlsZSI6InBvcnRyYWl0LXNlbGVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuXG4gIC5idG4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgei1pbmRleDogMTtcbiAgfVxuICAuYmFjayB7XG4gICAgbGVmdDogMDtcbiAgfVxuICAuZm9yd2FyZCB7XG4gICAgcmlnaHQ6IDA7XG4gIH1cbiAgLmxpc3Qge1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbiAgfVxufVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 2645:
/*!****************************************************!*\
  !*** ./projects/shadowrun/src/app/ui/ui.models.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PORTRAITS": () => (/* binding */ PORTRAITS)
/* harmony export */ });
const PORTRAITS = [
    'backer_dwarfmale_chrisvangraas.png',
    'backer_dwarfmale_matthewto.png',
    'backer_dwarfmale_paulthorgrimson.png',
    'backer_elffemale_christinamitton.png',
    'backer_elffemale_endrevarga.png',
    'backer_elffemale_ericclough.png',
    'backer_elffemale_jamesyoon.png',
    'backer_elfmale_andygoolsby.png',
    'backer_elfmale_brentshirkey.png',
    'backer_elfmale_chrisdietsch.png',
    'backer_elfmale_haldorzaake-hertling.png',
    'backer_elfmale_joneverist.png',
    'backer_elfmale_matthendrickson.png',
    'backer_elfmale_michaelpiantedosi.png',
    'backer_elfmale_rowynshoremaker.png',
    'backer_humanfemale_alisonmcgregor.png',
    'backer_humanfemale_ameliavonhaden.png',
    'backer_humanfemale_chastityblackwell.png',
    'backer_humanfemale_estherzinn.png',
    'backer_humanfemale_izzygilikin.png',
    'backer_humanfemale_wren.png',
    'backer_humanmale_adamdettman.png',
    'backer_humanmale_adamdoochin.png',
    'backer_humanmale_alexanderbrown.png',
    'backer_humanmale_andrewlukianoff.png',
    'backer_humanmale_davidjarl.png',
    'backer_humanmale_denniscochise.png',
    'backer_humanmale_dennisjandt.png',
    'backer_humanmale_evansperrin.png',
    'backer_humanmale_jasonflythe.png',
    'backer_humanmale_jeffreysampson.png',
    'backer_humanmale_matthewdimalanta.png',
    'backer_humanmale_moealjneibi.png',
    'backer_humanmale_opti.png',
    'backer_humanmale_rc.png',
    'backer_humanmale_rickardjohansson.png',
    'backer_humanmale_victorvergara.png',
    'backer_humanmale_zizhuangyang.png',
    'backer_malehuman_levicstolls.png',
    'backer_orkmale_briancoats.png',
    'backer_orkmale_coryringdahl.png',
    'backer_orkmale_eddynahas.png',
    'backer_orkmale_karstenchu.png',
    'backer_orkmale_kiluminatialabrad.png',
    'backer_orkmale_stevemitton.png',
    'backer_orkmale_stevenratkovich.png',
    'backer_trollmale_ericeccher.png',
    'backer_trollmale_jamesherbert.png',
    'backer_trollmale_joshferguson.png',
    'backer_trollmale_nathandanner.png',
    'backer_trollmale_nicholasganjei.png',
    'backerpc_dwarffemale_fiona.png',
    'backerpc_dwarfmale_adamdettman.png',
    'backerpc_dwarfmale_adrianlaforest.png',
    'backerpc_dwarfmale_chrisking.png',
    'backerpc_dwarfmale_endrevarga.png',
    'backerpc_dwarfmale_matthewto.png',
    'backerpc_dwarfmale_shadows_andrewborelli.png',
    'backerpc_dwarfmale_shadows_corybrown.png',
    'backerpc_dwarfmale_shadows_michaelheimann.png',
    'backerpc_dwarfmale_victorluft.png',
    'backerpc_elffemale_alisonmcgregor.png',
    'backerpc_elffemale_angel.png',
    'backerpc_elffemale_christiangolten.png',
    'backerpc_elffemale_christinamitton.png',
    'backerpc_elffemale_elenanamira.png',
    'backerpc_elffemale_ericmersmann_nixie.png',
    'backerpc_elffemale_estherzinn.png',
    'backerpc_elffemale_jamesyoon.png',
    'backerpc_elffemale_maitzimaka.png',
    'backerpc_elffemale_tuckrufficon.png',
    'backerpc_elfmale_alanedens.png',
    'backerpc_elfmale_andrewwhite.png',
    'backerpc_elfmale_andygoolsby.png',
    'backerpc_elfmale_chrisdietsch.png',
    'backerpc_elfmale_chrisschneider.png',
    'backerpc_elfmale_eddynahas-pierre.png',
    'backerpc_elfmale_haldorzaake-hertling.png',
    'backerpc_elfmale_jimiademola.png',
    'backerpc_elfmale_johnhouchins.png',
    'backerpc_elfmale_johnpaulsmith_malekcreid.png',
    'backerpc_elfmale_matthendrickson.png',
    'backerpc_elfmale_michaelkrell_akumaishibara.png',
    'backerpc_elfmale_michaelkrell_krell.png',
    'backerpc_elfmale_michaelpiantedosi.png',
    'backerpc_elfmale_paulbounds.png',
    'backerpc_elfmale_samgaramy.png',
    'backerpc_elfmale_stevenbakker.png',
    'backerpc_elfmale_timwinter.png',
    'backerpc_elfmale_wolfgangbochar.png',
    'backerpc_humanfemale_izzy.png',
    'backerpc_humanfemale_izzygilikin.png',
    'backerpc_humanfemale_luckystrike.png',
    'backerpc_humanmale_adamdoochin.png',
    'backerpc_humanmale_adamdoochin_stephenwatashima.png',
    'backerpc_humanmale_alexanderchan.png',
    'backerpc_humanmale_andresguillermoaguirre.png',
    'backerpc_humanmale_briancoats.png',
    'backerpc_humanmale_dandavalero.png',
    'backerpc_humanmale_davidfry_joshuamorgan.png',
    'backerpc_humanmale_davidjarl.png',
    'backerpc_humanmale_denniscoschise.png',
    'backerpc_humanmale_drewcredico.png',
    'backerpc_humanmale_ericdahlman_alnur.png',
    'backerpc_humanmale_gonzalez_lathammarcelo.png',
    'backerpc_humanmale_harryfielding.png',
    'backerpc_humanmale_jakeganor.png',
    'backerpc_humanmale_jamesherbert_okanodaemontamashiro.png',
    'backerpc_humanmale_jasonflythe.png',
    'backerpc_humanmale_joemartin.png',
    'backerpc_humanmale_joshuarlawford_rayquandary.png',
    'backerpc_humanmale_justinragan.png',
    'backerpc_humanmale_kennyroot.png',
    'backerpc_humanmale_levicstolls.png',
    'backerpc_humanmale_matthewdimalanta.png',
    'backerpc_humanmale_matthewpalsson_ashtonwoods.png',
    'backerpc_humanmale_moealjneibi.png',
    'backerpc_humanmale_nathanstock.png',
    'backerpc_humanmale_oliverwagner.png',
    'backerpc_humanmale_rc_greymitigator.png',
    'backerpc_humanmale_rickardjohansson.png',
    'backerpc_humanmale_robertbowling_dashyoung.png',
    'backerpc_humanmale_ryandurand.png',
    'backerpc_humanmale_seanmcdonough.png',
    'backerpc_humanmale_shadows_baenam.png',
    'backerpc_humanmale_shadows_jeffreykuether.png',
    'backerpc_humanmale_stevenratkovich.png',
    'backerpc_humanmale_timweickerlein.png',
    'backerpc_humanmale_torinkuether.png',
    'backerpc_humanmale_tylerendorf.png',
    'backerpc_humanmale_urosanderlic.png',
    'backerpc_humanmale_zizhuangyang.png',
    'backerpc_orkfemale_ameliavonhaden.png',
    'backerpc_orkfemale_zainahalrujaib.png',
    'backerpc_orkmale_coryringdahl.png',
    'backerpc_orkmale_karstonchu.png',
    'backerpc_orkmale_maury.png',
    'backerpc_orkmale_michaelwall.png',
    'backerpc_orkmale_shadows_wonder.png',
    'backerpc_orkmale_stevemitton.png',
    'backerpc_trollmale_andresguillermoaguirre.png',
    'backerpc_trollmale_isaacnagel_bryanlitelightner.png',
    'backerpc_trollmale_jamesherbert.png',
    'backerpc_trollmale_karstenchu.png',
    'backerpc_trollmale_nathandanner.png',
    'backerpc_trollmale_nicholasganjei.png',
    'generic_creature_demonrat.png',
    'generic_creature_devilrat.png',
    'generic_drone_apex.png',
    'generic_drone_corporate.png',
    'generic_drone_crawler.png',
    'generic_drone_doberman.png',
    'generic_drone_dobermanpistol.png',
    'generic_drone_dobermanshotgun.png',
    'generic_drone_guardian.png',
    'generic_drone_guardianbase.png',
    'generic_drone_guardiansmg.png',
    'generic_drone_hover.png',
    'generic_drone_medic.png',
    'generic_drone_robodoc.png',
    'generic_drone_roto.png',
    'generic_drone_scout.png',
    'generic_drone_smoker.png',
    'generic_drone_steellynxpistol.png',
    'generic_drone_steellynxsmg.png',
    'generic_drone_strat9.png',
    'generic_drone_strato9base.png',
    'generic_drone_strato9smg.png',
    'generic_drone_strato9sniper.png',
    'generic_drone_sundownerassault.png',
    'generic_drone_sundownermortar.png',
    'generic_drone_wheeled.png',
    'generic_drone_wolfhound.png',
    'generic_elfmale_tirghost.png',
    'generic_esp_assassin.png',
    'generic_esp_attacker.png',
    'generic_esp_kamikaze.png',
    'generic_esp_shield.png',
    'generic_humanmale_courier.png',
    'generic_humanmale_knighterrant.png',
    'generic_humanmale_lonestarguard01.png',
    'generic_humanmale_rent-a-cop.png',
    'generic_humanmale_scientist01.png',
    'generic_humanmale_urbanpoor01.png',
    'generic_machine.png',
    'generic_orkfemale_drummer.png',
    'generic_shrinespirit_air.png',
    'generic_shrinespirit_earth.png',
    'generic_shrinespirit_fire.png',
    'generic_shrinespirit_nature.png',
    'generic_shrinespirit_toxic.png',
    'generic_shrinespirit_water.png',
    'generic_spirit_abomination.png',
    'generic_spirit_air.png',
    'generic_spirit_earth.png',
    'generic_spirit_fire.png',
    'generic_spirit_forgottensoul.png',
    'generic_spirit_insect.png',
    'generic_spirit_nature.png',
    'generic_spirit_toxic.png',
    'generic_spirit_walledcityvictim.png',
    'generic_spirit_water.png',
    'npc_creature_01hk_qianyachi.png',
    'npc_creature_02hk_malvina.png',
    'npc_creature_02hk_qianyachi.png',
    'npc_creature_museum_mummy.png',
    'npc_creature_museum_mummyking.png',
    'npc_dog_dante.png',
    'npc_dog_dantecombat.png',
    'npc_drone_koschei.png',
    'npc_dwarffemale_01.png',
    'npc_dwarffemale_02.png',
    'npc_dwarffemale_electrician.png',
    'npc_dwarffemale_is0bel.png',
    'npc_dwarffemale_is0bel_02.png',
    'npc_dwarffemale_is0bel_03.png',
    'npc_dwarffemale_maliit.png',
    'npc_dwarffemale_mira.png',
    'npc_dwarffemale_pummelo.png',
    'npc_dwarfmale_badrigger.png',
    'npc_dwarfmale_bannik.png',
    'npc_dwarfmale_coroner.png',
    'npc_dwarfmale_gobbettrust_cadmus.png',
    'npc_dwarfmale_gobbettrust_patrick.png',
    'npc_dwarfmale_shadows_peng.png',
    'npc_elffemale_absinthe.png',
    'npc_elffemale_cherrybomb.png',
    'npc_elffemale_danni.png',
    'npc_elffemale_dianesilverstar.png',
    'npc_elffemale_feliciaday.png',
    'npc_elffemale_gobbettrust_kara.png',
    'npc_elffemale_lynnetelestrian.png',
    'npc_elffemale_marielouisetelestrian.png',
    'npc_elffemale_marta.png',
    'npc_elffemale_shadows_fiona.png',
    'npc_elfmale_01.png',
    'npc_elfmale_02.png',
    'npc_elfmale_artfuldodger.png',
    'npc_elfmale_badqi_geoleader.png',
    'npc_elfmale_docxabier.png',
    'npc_elfmale_ehranthescribe.png',
    'npc_elfmale_greenlucifer.png',
    'npc_elfmale_grendel_eldertang.png',
    'npc_elfmale_harlequin.png',
    'npc_elfmale_holmes.png',
    'npc_elfmale_holmessilhouetted.png',
    'npc_elfmale_jamestelelstrian.png',
    'npc_elfmale_longhair.png',
    'npc_elfmale_magicdealer.png',
    'npc_elfmale_shangrila_rooster.png',
    'npc_elfmale_zakkflash.png',
    'npc_humanfemale_01.png',
    'npc_humanfemale_01hk_josephine.png',
    'npc_humanfemale_02.png',
    'npc_humanfemale_03.png',
    'npc_humanfemale_alice.png',
    'npc_humanfemale_alicesim.png',
    'npc_humanfemale_coyotehealed.png',
    'npc_humanfemale_coyoteugly.png',
    'npc_humanfemale_docks_newsanchor.png',
    'npc_humanfemale_exitstageleft_kufeng.png',
    'npc_humanfemale_exitstageleft_kufeng02.png',
    'npc_humanfemale_exitstageleft_penwong.png',
    'npc_humanfemale_extraction_emilie.png',
    'npc_humanfemale_feuerschwinge.png',
    'npc_humanfemale_gaichutrust_samuraimage.png',
    'npc_humanfemale_glory.png',
    'npc_humanfemale_gobbettrust_yasmin.png',
    'npc_humanfemale_goldfish.png',
    'npc_humanfemale_grendel_galina.png',
    'npc_humanfemale_grendel_wingkeikwok.png',
    'npc_humanfemale_hub_krait.png',
    'npc_humanfemale_hub_yuanpei.png',
    'npc_humanfemale_is0beltrust_securityguard.png',
    'npc_humanfemale_jessicawatts.png',
    'npc_humanfemale_jessicawattsub.png',
    'npc_humanfemale_kami.png',
    'npc_humanfemale_kindlycheng.png',
    'npc_humanfemale_madamesinful.png',
    'npc_humanfemale_militiacaptain.png',
    'npc_humanfemale_monika.png',
    'npc_humanfemale_monikaapex.png',
    'npc_humanfemale_monikadying.png',
    'npc_humanfemale_muller.png',
    'npc_humanfemale_newsreporter2.png',
    'npc_humanfemale_nixie.png',
    'npc_humanfemale_shadows_aaasuperhero.png',
    'npc_humanfemale_shadows_janet.png',
    'npc_humanfemale_shadows_lily.png',
    'npc_humanfemale_shamaninvestigator.png',
    'npc_humanfemale_silke.png',
    'npc_humanfemale_simmy.png',
    'npc_humanfemale_tsangtower_mage.png',
    'npc_humanfemale_valerietelestrian.png',
    'npc_humanfemale_weaponstechdealer.png',
    'npc_humanmale_01.png',
    'npc_humanmale_01hk_raymond.png',
    'npc_humanmale_02hk_raymond.png',
    'npc_humanmale_03hk_raymond.png',
    'npc_humanmale_alexander.png',
    'npc_humanmale_alnur.png',
    'npc_humanmale_altug.png',
    'npc_humanmale_amsel.png',
    'npc_humanmale_attacksurvivor.png',
    'npc_humanmale_baronsamedi.png',
    'npc_humanmale_blister.png',
    'npc_humanmale_blitz.png',
    'npc_humanmale_bloodmage.png',
    'npc_humanmale_bloodofficer.png',
    'npc_humanmale_calmscientist.png',
    'npc_humanmale_clone.png',
    'npc_humanmale_dietrich.png',
    'npc_humanmale_enemeydeckeravatar.png',
    'npc_humanmale_exitstageleft_nevillema.png',
    'npc_humanmale_exitstageleft_shenyang.png',
    'npc_humanmale_exitstageleft_waiter.png',
    'npc_humanmale_extraction_plasticfacedman.png',
    'npc_humanmale_falseflag_receptionist.png',
    'npc_humanmale_feralscientist.png',
    'npc_humanmale_frank.png',
    'npc_humanmale_gaichu.png',
    'npc_humanmale_gaichutrust_redsamurai.png',
    'npc_humanmale_gaichutrust_samuraicaptain.png',
    'npc_humanmale_ghoulleader.png',
    'npc_humanmale_gino.png',
    'npc_humanmale_grendel_elderip.png',
    'npc_humanmale_grendel_porterlam.png',
    'npc_humanmale_grizzlevet.png',
    'npc_humanmale_grizzlevet_ghost.png',
    'npc_humanmale_gunari.png',
    'npc_humanmale_hansbrackhaus.png',
    'npc_humanmale_harrow.png',
    'npc_humanmale_hasenkamp.png',
    'npc_humanmale_heimerich.png',
    'npc_humanmale_hub_ambrose.png',
    'npc_humanmale_hub_gin.png',
    'npc_humanmale_hub_lau.png',
    'npc_humanmale_hub_law.png',
    'npc_humanmale_hub_lawpuppet.png',
    'npc_humanmale_hub_matthew.png',
    'npc_humanmale_hub_shyu.png',
    'npc_humanmale_hub_spidershen.png',
    'npc_humanmale_humanis.png',
    'npc_humanmale_is0beltrust_caterer.png',
    'npc_humanmale_is0beltrust_rhombus.png',
    'npc_humanmale_is0beltrust_securitycaptain.png',
    'npc_humanmale_jakearmitage.png',
    'npc_humanmale_jan.png',
    'npc_humanmale_jessicawatts_reddress.png',
    'npc_humanmale_jessicawatts_redreddress.png',
    'npc_humanmale_lodgerep.png',
    'npc_humanmale_magicalsecurityexpert.png',
    'npc_humanmale_maintenanceworker.png',
    'npc_humanmale_mulvihill.png',
    'npc_humanmale_newsreporter1.png',
    'npc_humanmale_okano.png',
    'npc_humanmale_paco.png',
    'npc_humanmale_parsons.png',
    'npc_humanmale_quorin.png',
    'npc_humanmale_racter.png',
    'npc_humanmale_samwatts.png',
    'npc_humanmale_samwattspresent.png',
    'npc_humanmale_shadows_andy.png',
    'npc_humanmale_shadows_andycrispy.png',
    'npc_humanmale_shadows_lee.png',
    'npc_humanmale_shadows_wallacekoo.png',
    'npc_humanmale_showdown_tsangcomleader.png',
    'npc_humanmale_stranglerbao.png',
    'npc_humanmale_tsangtower_businessman.png',
    'npc_humanmale_vauclair.png',
    'npc_humanmale_vauclair40.png',
    'npc_humanmale_vauclair50.png',
    'npc_humanmale_vauclairyoung.png',
    'npc_humanmale_whistleblower_hwangjaemin.png',
    'npc_humanmale_winters.png',
    'npc_humanmale_winterstired.png',
    'npc_humanmale_wintersyoung.png',
    'npc_maletroll_pitezel.png',
    'npc_orkfemale_01.png',
    'npc_orkfemale_gobbet.png',
    'npc_orkfemale_grendel_elderng.png',
    'npc_orkfemale_grendel_vasilisa.png',
    'npc_orkfemale_sangoma.png',
    'npc_orkfemale_showdown_triadredpole.png',
    'npc_orkfemale_silke.png',
    'npc_orkmale_01.png',
    'npc_orkmale_02.png',
    'npc_orkmale_audran.png',
    'npc_orkmale_engineer.png',
    'npc_orkmale_engineerinjured1.png',
    'npc_orkmale_engineerinjured2.png',
    'npc_orkmale_macklusky.png',
    'npc_orkmale_samuel.png',
    'npc_orkmale_shangrila_talon.png',
    'npc_orkmale_shangrila_talon_02.png',
    'npc_orkmale_tsangscientist.png',
    'npc_orkmale_ulrike.png',
    'npc_orkmale_whistleblower_capjomo.png',
    'npc_orkmale_wu.png',
    'npc_orkmale_wu_02.png',
    'npc_orkmale_wu_03.png',
    'npc_program_apex.png',
    'npc_spirit_adversary.png',
    'npc_spirit_adversarycorrupted.png',
    'npc_trollfemale_eiger.png',
    'npc_trollfemale_hub_ermine.png',
    'npc_trollfemale_is0beltrust_drunktroll.png',
    'npc_trollfemale_shadows_utama.png',
    'npc_trollmale_bouncer.png',
    'npc_trollmale_cyberzombie.png',
    'npc_trollmale_docks_nightjar.png',
    'npc_trollmale_grendel_breakerhui.png',
    'npc_trollmale_laine.png',
    'npc_trollmale_meatgrinder.png',
    'npc_trollmale_pitezel.png',
    'npc_trollmale_pitezelsilhouetted.png',
    'npc_trollmale_shadows_interrogator.png',
    'npc_trollmale_shadows_interrogatorsil.png',
    'pc_dwarffemale_00_faceless.png',
    'pc_dwarffemale_00b.png',
    'pc_dwarffemale_01_techie.png',
    'pc_dwarffemale_01b_techie.png',
    'pc_dwarffemale_01c_techie.png',
    'pc_dwarffemale_01hk_rigger.png',
    'pc_dwarffemale_01hk_shaman.png',
    'pc_dwarffemale_02_samurai.png',
    'pc_dwarffemale_02a_samurai.png',
    'pc_dwarffemale_02b_samurai.png',
    'pc_dwarffemale_02c_samurai.png',
    'pc_dwarffemale_03a_soldier.png',
    'pc_dwarffemale_03b_soldier.png',
    'pc_dwarffemale_03c_soldier.png',
    'pc_dwarffemale_04_visseral.png',
    'pc_dwarffemale_04a_visseral.png',
    'pc_dwarffemale_04b_visseral.png',
    'pc_dwarffemale_04c_visseral.png',
    'pc_dwarffemale_05_sexy.png',
    'pc_dwarffemale_05a_sexy.png',
    'pc_dwarffemale_05b_sexy.png',
    'pc_dwarffemale_05c_sexy.png',
    'pc_dwarffemale_06.png',
    'pc_dwarffemale_06a.png',
    'pc_dwarffemale_excl_gnome.png',
    'pc_dwarfmale_00_faceless.png',
    'pc_dwarfmale_00b.png',
    'pc_dwarfmale_01_punk.png',
    'pc_dwarfmale_01a_punk.png',
    'pc_dwarfmale_01b_punk.png',
    'pc_dwarfmale_01c_punk.png',
    'pc_dwarfmale_01hk_rigger.png',
    'pc_dwarfmale_01hk_shaman.png',
    'pc_dwarfmale_02_beardie.png',
    'pc_dwarfmale_02a_beardie.png',
    'pc_dwarfmale_02b_beardie.png',
    'pc_dwarfmale_02c_beardie.png',
    'pc_dwarfmale_02d_beardie.png',
    'pc_dwarfmale_03_eastasian.png',
    'pc_dwarfmale_03a_eastasian.png',
    'pc_dwarfmale_03b_eastasian.png',
    'pc_dwarfmale_03c_eastasian.png',
    'pc_dwarfmale_03d_eastasian.png',
    'pc_dwarfmale_04_fantasybeard.png',
    'pc_dwarfmale_04a_fantasybeard.png',
    'pc_dwarfmale_04b_fantasybeard.png',
    'pc_dwarfmale_05_dashing.png',
    'pc_dwarfmale_05a_dashing.png',
    'pc_dwarfmale_05b_dashing.png',
    'pc_dwarfmale_05c_dashing.png',
    'pc_dwarfmale_06_blackbeard.png',
    'pc_dwarfmale_06a_blackbeard.png',
    'pc_dwarfmale_07_maxwellomdahl.png',
    'pc_dwarfmale_09.png',
    'pc_dwarfmale_09a.png',
    'pc_dwarfmale_11_rogue.png',
    'pc_dwarfmale_11a_rogue.png',
    'pc_dwarfmale_chrisvangraas.png',
    'pc_dwarfmale_davidklingenberg.png',
    'pc_dwarfmale_excl_gnome.png',
    'pc_dwarfmale_paulthorgrimson.png',
    'pc_elffemale_00_faceless.png',
    'pc_elffemale_00b.png',
    'pc_elffemale_01_mage.png',
    'pc_elffemale_01a_mage.png',
    'pc_elffemale_01b_mage.png',
    'pc_elffemale_01hk_rigger.png',
    'pc_elffemale_01hk_shaman.png',
    'pc_elffemale_02_samurai.png',
    'pc_elffemale_02_whitehair.png',
    'pc_elffemale_02a_samurai.png',
    'pc_elffemale_02b_samurai.png',
    'pc_elffemale_02c_samurai.png',
    'pc_elffemale_03_magebraids.png',
    'pc_elffemale_03a_magebraids.png',
    'pc_elffemale_03b_magebraids.png',
    'pc_elffemale_04_psychopath.png',
    'pc_elffemale_04a_psychopath.png',
    'pc_elffemale_05_hairstreaks.png',
    'pc_elffemale_05a_hairstreaks.png',
    'pc_elffemale_05b_hairstreaks.png',
    'pc_elffemale_05c_hairstreaks.png',
    'pc_elffemale_05d_hairstreaks.png',
    'pc_elffemale_06_platinum.png',
    'pc_elffemale_06a_platinum.png',
    'pc_elffemale_06b_platinum.png',
    'pc_elffemale_06c_platinum.png',
    'pc_elffemale_07_isaacnagel.png',
    'pc_elffemale_07b_isaacnagel.png',
    'pc_elffemale_09_sorceress.png',
    'pc_elffemale_09a_sorceress.png',
    'pc_elffemale_10_punkdecker.png',
    'pc_elffemale_10a_punkdecker.png',
    'pc_elffemale_11.png',
    'pc_elffemale_11a.png',
    'pc_elffemale_12.png',
    'pc_elffemale_12a.png',
    'pc_elffemale_13_rebecca.png',
    'pc_elffemale_excl_greeneyes.png',
    'pc_elffemale_nephelebjorn-andreringstad.png',
    'pc_elfmale_00_faceless.png',
    'pc_elfmale_00b.png',
    'pc_elfmale_01_shaman.png',
    'pc_elfmale_01hk_rigger.png',
    'pc_elfmale_01hk_shaman.png',
    'pc_elfmale_02_decker.png',
    'pc_elfmale_02a_decker.png',
    'pc_elfmale_02b_decker.png',
    'pc_elfmale_02c_decker.png',
    'pc_elfmale_03_slick.png',
    'pc_elfmale_03a_slick.png',
    'pc_elfmale_03b_slick.png',
    'pc_elfmale_03d_slick.png',
    'pc_elfmale_04_assassin.png',
    'pc_elfmale_04a_assassin.png',
    'pc_elfmale_04b_assassin.png',
    'pc_elfmale_05_platpunk.png',
    'pc_elfmale_05a_platpunk.png',
    'pc_elfmale_05b_platpunk.png',
    'pc_elfmale_06_dreads.png',
    'pc_elfmale_06a_dreads.png',
    'pc_elfmale_06b_dreads.png',
    'pc_elfmale_07_hoodmage.png',
    'pc_elfmale_07a_hoodmage.png',
    'pc_elfmale_08_michaelpatrick.png',
    'pc_elfmale_08a_michaelpatrick.png',
    'pc_elfmale_09_seanmcdonough.png',
    'pc_elfmale_09a_seanmcdonough.png',
    'pc_elfmale_10_scoundrel.png',
    'pc_elfmale_10a_scoundrel.png',
    'pc_elfmale_11_rogue.png',
    'pc_elfmale_11a_rogue.png',
    'pc_elfmale_12.png',
    'pc_elfmale_12a.png',
    'pc_elfmale_13.png',
    'pc_elfmale_andrewwhite.png',
    'pc_elfmale_brentshirkey.png',
    'pc_elfmale_excl_orangeeyes.png',
    'pc_elfmale_florianmosleh.png',
    'pc_elfmale_jamesrapkins.png',
    'pc_elfmale_julianferaud.png',
    'pc_elfmale_marcotonuit.png',
    'pc_elfmale_martinpollard.png',
    'pc_elftrans_andrewpatterson.png',
    'pc_humanfemale_00_faceless.png',
    'pc_humanfemale_00b.png',
    'pc_humanfemale_01_shavedhead.png',
    'pc_humanfemale_01a_shavedhead.png',
    'pc_humanfemale_01b_shavedhead.png',
    'pc_humanfemale_01c_shavedhead.png',
    'pc_humanfemale_01d_shavedhead.png',
    'pc_humanfemale_01hk_rigger.png',
    'pc_humanfemale_01hk_shaman.png',
    'pc_humanfemale_02_detective.png',
    'pc_humanfemale_02a_detective.png',
    'pc_humanfemale_02b_detective.png',
    'pc_humanfemale_02c_detective.png',
    'pc_humanfemale_03_educated.png',
    'pc_humanfemale_03a_educated.png',
    'pc_humanfemale_04_whitebob.png',
    'pc_humanfemale_04a_whitebob.png',
    'pc_humanfemale_04b_whitebob.png',
    'pc_humanfemale_04c_whitebob.png',
    'pc_humanfemale_05_goth.png',
    'pc_humanfemale_05a_goth.png',
    'pc_humanfemale_06_pixie.png',
    'pc_humanfemale_06a_pixie.png',
    'pc_humanfemale_06c_pixie.png',
    'pc_humanfemale_06d_pixie.png',
    'pc_humanfemale_07_darkskin.png',
    'pc_humanfemale_07b_darkskin.png',
    'pc_humanfemale_07c_darkskin.png',
    'pc_humanfemale_07d_darkskin.png',
    'pc_humanfemale_08_whitehair.png',
    'pc_humanfemale_08a_whitehair.png',
    'pc_humanfemale_08b_whitehair.png',
    'pc_humanfemale_09_camo.png',
    'pc_humanfemale_09a_camo.png',
    'pc_humanfemale_10_combatmage.png',
    'pc_humanfemale_10a_combatmage.png',
    'pc_humanfemale_11.png',
    'pc_humanfemale_11a.png',
    'pc_humanfemale_chastityblackwell.png',
    'pc_humanfemale_damianszydlo.png',
    'pc_humanfemale_excl_mm.png',
    'pc_humanfemale_jeffreysampson.png',
    'pc_humanfemale_joshferguson.png',
    'pc_humanmale_00_faceless.png',
    'pc_humanmale_00b.png',
    'pc_humanmale_01_roadwarrior.png',
    'pc_humanmale_01a_roadwarrior.png',
    'pc_humanmale_01b_roadwarrior.png',
    'pc_humanmale_01hk_rigger.png',
    'pc_humanmale_01hk_shaman.png',
    'pc_humanmale_02_topknot.png',
    'pc_humanmale_02a_topknot.png',
    'pc_humanmale_02b_topknot.png',
    'pc_humanmale_02c_topknot.png',
    'pc_humanmale_03_african.png',
    'pc_humanmale_03a_african.png',
    'pc_humanmale_03b_african.png',
    'pc_humanmale_03c_african.png',
    'pc_humanmale_04_brawler.png',
    'pc_humanmale_04a_brawler.png',
    'pc_humanmale_04b_brawler.png',
    'pc_humanmale_04c_brawler.png',
    'pc_humanmale_04d_brawler.png',
    'pc_humanmale_05_dreads.png',
    'pc_humanmale_05a_dreads.png',
    'pc_humanmale_05b_dreads.png',
    'pc_humanmale_05c_dreads.png',
    'pc_humanmale_06_shavedhead.png',
    'pc_humanmale_06a_shavedhead.png',
    'pc_humanmale_06c_shavedhead.png',
    'pc_humanmale_07_danielmaddox.png',
    'pc_humanmale_07a_danielmaddox.png',
    'pc_humanmale_08_victorvergara.png',
    'pc_humanmale_09_jarrodpowell.png',
    'pc_humanmale_10_beserker.png',
    'pc_humanmale_10a_beserker.png',
    'pc_humanmale_10b_beserker.png',
    'pc_humanmale_11_hoodie.png',
    'pc_humanmale_11a_hoodie.png',
    'pc_humanmale_12_techhead.png',
    'pc_humanmale_12a_techhead.png',
    'pc_humanmale_13_dallas.png',
    'pc_humanmale_14_flockofseagulls.png',
    'pc_humanmale_15.png',
    'pc_humanmale_andrewknight.png',
    'pc_humanmale_bradythomes.png',
    'pc_humanmale_caseykarner.png',
    'pc_humanmale_christopherschaefer.png',
    'pc_humanmale_elpolodelacroix.png',
    'pc_humanmale_ericclough.png',
    'pc_humanmale_excl_ja.png',
    'pc_humanmale_jaredhansen.png',
    'pc_humanmale_johnburman.png',
    'pc_humanmale_joshuarogers.png',
    'pc_humanmale_justinmiller.png',
    'pc_humanmale_kyleoksiuta.png',
    'pc_humanmale_marcelvillamor.png',
    'pc_humanmale_markmatthews.png',
    'pc_humanmale_michaelschwartz.png',
    'pc_humanmale_nikolauspoenisch.png',
    'pc_humanmale_opti.png',
    'pc_humanmale_robertrush.png',
    'pc_humanmale_timhall.png',
    'pc_humanmale_tomcallahan.png',
    'pc_orkfemale_00_faceless.png',
    'pc_orkfemale_00b.png',
    'pc_orkfemale_01a_punk.png',
    'pc_orkfemale_01b_punk.png',
    'pc_orkfemale_01c_punk.png',
    'pc_orkfemale_01d_punk.png',
    'pc_orkfemale_01hk_rigger.png',
    'pc_orkfemale_01hk_shaman.png',
    'pc_orkfemale_02_shaman.png',
    'pc_orkfemale_02a_shaman.png',
    'pc_orkfemale_03_brutal.png',
    'pc_orkfemale_03a_brutal.png',
    'pc_orkfemale_03b_brutal.png',
    'pc_orkfemale_03c_brutal.png',
    'pc_orkfemale_04_biker.png',
    'pc_orkfemale_04a_biker.png',
    'pc_orkfemale_04b_biker.png',
    'pc_orkfemale_05_blondedreads.png',
    'pc_orkfemale_05a_blondedreads.png',
    'pc_orkfemale_05b_blondedreads.png',
    'pc_orkfemale_06.png',
    'pc_orkfemale_06a.png',
    'pc_orkfemale_07.png',
    'pc_orkfemale_excl_oni.png',
    'pc_orkmale_00_faceless.png',
    'pc_orkmale_00b.png',
    'pc_orkmale_01_soldier.png',
    'pc_orkmale_01a_soldier.png',
    'pc_orkmale_01b_soldier.png',
    'pc_orkmale_01c_soldier.png',
    'pc_orkmale_01hk_rigger.png',
    'pc_orkmale_01hk_shaman.png',
    'pc_orkmale_02_biker.png',
    'pc_orkmale_02a_biker.png',
    'pc_orkmale_03_baldtrouble.png',
    'pc_orkmale_03a_baldtrouble.png',
    'pc_orkmale_03b_baldtrouble.png',
    'pc_orkmale_04_slick.png',
    'pc_orkmale_04a_slick.png',
    'pc_orkmale_04b_slick.png',
    'pc_orkmale_04c_slick.png',
    'pc_orkmale_05_punk.png',
    'pc_orkmale_05a_punk.png',
    'pc_orkmale_06_blondetusks.png',
    'pc_orkmale_06a_blondetusks.png',
    'pc_orkmale_06b_blondetusks.png',
    'pc_orkmale_06c_blondetusks.png',
    'pc_orkmale_07_shotgun.png',
    'pc_orkmale_07_shotgunb.png',
    'pc_orkmale_07a_shotgun.png',
    'pc_orkmale_07d_shotgun.png',
    'pc_orkmale_08_modhead.png',
    'pc_orkmale_08a_modhead.png',
    'pc_orkmale_09_dragonmage.png',
    'pc_orkmale_09a_dragonmage.png',
    'pc_orkmale_10_blue.png',
    'pc_orkmale_andrewlukianoff.png',
    'pc_orkmale_excl_oni.png',
    'pc_orkmale_liamallman.png',
    'pc_orkmale_patrikswedman.png',
    'pc_orkmale_simoncanback.png',
    'pc_trollfemale_00_faceless.png',
    'pc_trollfemale_00b.png',
    'pc_trollfemale_01_detective.png',
    'pc_trollfemale_01a_detective.png',
    'pc_trollfemale_01b_detective.png',
    'pc_trollfemale_01hk_rigger.png',
    'pc_trollfemale_01hk_shaman.png',
    'pc_trollfemale_02_mage.png',
    'pc_trollfemale_02a_mage.png',
    'pc_trollfemale_02b_mage.png',
    'pc_trollfemale_02c_mage.png',
    'pc_trollfemale_02d_mage.png',
    'pc_trollfemale_03_oracle.png',
    'pc_trollfemale_03a_oracle.png',
    'pc_trollfemale_03b_oracle.png',
    'pc_trollfemale_03c_oracle.png',
    'pc_trollfemale_04_devil.png',
    'pc_trollfemale_04a_devil.png',
    'pc_trollfemale_04b_devil.png',
    'pc_trollfemale_04d_devil.png',
    'pc_trollfemale_04e_devil.png',
    'pc_trollfemale_05_beauty.png',
    'pc_trollfemale_05a_beauty.png',
    'pc_trollfemale_05b_beauty.png',
    'pc_trollfemale_05c_beauty.png',
    'pc_trollfemale_06a_beauty.png',
    'pc_trollfemale_06b_beauty.png',
    'pc_trollfemale_06c_beauty.png',
    'pc_trollfemale_07_aboriginal.png',
    'pc_trollfemale_07a_aboriginal.png',
    'pc_trollfemale_08.png',
    'pc_trollfemale_08a.png',
    'pc_trollfemale_09_blue.png',
    'pc_trollfemale_excl_fomori.png',
    'pc_trollmale_00_faceless.png',
    'pc_trollmale_00b.png',
    'pc_trollmale_01_hooknose.png',
    'pc_trollmale_01a_hooknose.png',
    'pc_trollmale_01b_hooknose.png',
    'pc_trollmale_01hk_rigger.png',
    'pc_trollmale_01hk_shaman.png',
    'pc_trollmale_02_cigar.png',
    'pc_trollmale_02a_cigar.png',
    'pc_trollmale_02b_cigar.png',
    'pc_trollmale_02c_cigar.png',
    'pc_trollmale_03_biker.png',
    'pc_trollmale_03a_biker.png',
    'pc_trollmale_03b_biker.png',
    'pc_trollmale_04_shaman.png',
    'pc_trollmale_04a_shaman.png',
    'pc_trollmale_04b_shaman.png',
    'pc_trollmale_04c_shaman.png',
    'pc_trollmale_05_brawler.png',
    'pc_trollmale_05a_brawler.png',
    'pc_trollmale_05b_brawler.png',
    'pc_trollmale_06_strategist.png',
    'pc_trollmale_06a_strategist.png',
    'pc_trollmale_06b_strategist.png',
    'pc_trollmale_07_pipemage.png',
    'pc_trollmale_07a_pipemage.png',
    'pc_trollmale_07b_pipemage.png',
    'pc_trollmale_08_slick.png',
    'pc_trollmale_08a_slick.png',
    'pc_trollmale_08c_slick.png',
    'pc_trollmale_08d_slick.png',
    'pc_trollmale_09_joachimsteppke.png',
    'pc_trollmale_09a_joachimsteppke.png',
    'pc_trollmale_10.png',
    'pc_trollmale_10a.png',
    'pc_trollmale_11.png',
    'pc_trollmale_12_blue.png',
    'pc_trollmale_alexanderbrown.png',
    'pc_trollmale_davidlucardie.png',
    'pc_trollmale_excl_minotaur.png'
];


/***/ }),

/***/ 7682:
/*!****************************************************!*\
  !*** ./projects/shadowrun/src/app/ui/ui.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UiModule": () => (/* binding */ UiModule)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared */ 8454);
/* harmony import */ var _components_number_input_number_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/number-input/number-input.component */ 3850);
/* harmony import */ var _components_portrait_select_portrait_select_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/portrait-select/portrait-select.component */ 3758);
/* harmony import */ var _components_portrait_select_portrait_select_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/portrait-select/portrait-select-dialog.component */ 7780);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);





const DECLARATIONS = [
    _components_number_input_number_input_component__WEBPACK_IMPORTED_MODULE_1__.NumberInputComponent,
    _components_portrait_select_portrait_select_component__WEBPACK_IMPORTED_MODULE_2__.PortraitSelectComponent
];
class UiModule {
}
UiModule.ɵfac = function UiModule_Factory(t) { return new (t || UiModule)(); };
UiModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: UiModule });
UiModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_shared__WEBPACK_IMPORTED_MODULE_0__.SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](UiModule, { declarations: [_components_number_input_number_input_component__WEBPACK_IMPORTED_MODULE_1__.NumberInputComponent,
        _components_portrait_select_portrait_select_component__WEBPACK_IMPORTED_MODULE_2__.PortraitSelectComponent, _components_portrait_select_portrait_select_dialog_component__WEBPACK_IMPORTED_MODULE_3__.PortraitSelectDialogComponent], imports: [_shared__WEBPACK_IMPORTED_MODULE_0__.SharedModule], exports: [_components_number_input_number_input_component__WEBPACK_IMPORTED_MODULE_1__.NumberInputComponent,
        _components_portrait_select_portrait_select_component__WEBPACK_IMPORTED_MODULE_2__.PortraitSelectComponent] }); })();


/***/ }),

/***/ 9952:
/*!************************************************************!*\
  !*** ./projects/shadowrun/src/environments/environment.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyBgZtYa5BgujI6FPwrPA8Ebpr_vb4ulYww',
        authDomain: 'shadowrun-681be.firebaseapp.com',
        projectId: 'shadowrun-681be',
        storageBucket: 'shadowrun-681be.appspot.com',
        messagingSenderId: '1077965973609',
        appId: '1:1077965973609:web:269b78a7b2b6fe7b03daf8'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 3222:
/*!****************************************!*\
  !*** ./projects/shadowrun/src/main.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 1975);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 9952);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 9623:
/*!***********************************************************!*\
  !*** ./projects/shared-library/src/lib/cdk/cdk.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CdkModule": () => (/* binding */ CdkModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/clipboard */ 3841);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 395);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);



class CdkModule {
}
CdkModule.ɵfac = function CdkModule_Factory(t) { return new (t || CdkModule)(); };
CdkModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CdkModule });
CdkModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_1__.ClipboardModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__.DragDropModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CdkModule, { exports: [_angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_1__.ClipboardModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__.DragDropModule] }); })();


/***/ }),

/***/ 5925:
/*!************************************************************!*\
  !*** ./projects/shared-library/src/lib/core/auth.guard.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 8636);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 7281);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);




class AuthGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate(next, state) {
        return this.auth.logged$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(logged => {
            if (!logged) {
                this.router.navigate(['/auth/sign-in']);
            }
        }));
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac });


/***/ }),

/***/ 7281:
/*!**************************************************************!*\
  !*** ./projects/shared-library/src/lib/core/auth.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6491);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 4361);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 1134);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3720);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 2597);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8636);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 8293);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/compat/auth */ 7018);
/* harmony import */ var _snackbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../snackbar */ 3759);





class AuthService {
    constructor(afa, snackbar) {
        this.afa = afa;
        this.snackbar = snackbar;
        this.authSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(JSON.parse(localStorage.getItem('user')));
        this.authObservable = this.authSource.asObservable()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.shareReplay)(1));
        this.afa.authState
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((user) => {
            localStorage.setItem('user', user ? JSON.stringify(user) : null);
            this.authSource.next(user);
        }))
            .subscribe();
    }
    get auth$() { return this.authObservable; }
    get logged$() { return this.auth$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(res => !!res)); }
    signIn(data) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.from)(this.afa.signInWithEmailAndPassword(data.email, data.password)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)((err) => {
            this.snackbar.error(err.message);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(null);
        }));
    }
    signOut() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.from)(this.afa.signOut()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)((err) => {
            this.snackbar.error(err.message);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(null);
        }));
    }
    signUp(data) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.from)(this.afa.createUserWithEmailAndPassword(data.email, data.password)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)((err) => {
            this.snackbar.error(err.message);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(null);
        }));
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_10__.AngularFireAuth), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_snackbar__WEBPACK_IMPORTED_MODULE_0__.SnackbarService)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac });


/***/ }),

/***/ 1693:
/*!***************************************************************!*\
  !*** ./projects/shared-library/src/lib/core/cache.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CacheService": () => (/* binding */ CacheService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class CacheService {
    constructor() {
        this.cache = new Map();
    }
    delete(key) {
        return this.cache.delete(key);
    }
    get(key) {
        return this.cache.get(key);
    }
    has(key) {
        return this.cache.has(key);
    }
    set(key, value) {
        return this.cache.set(key, value);
    }
}
CacheService.ɵfac = function CacheService_Factory(t) { return new (t || CacheService)(); };
CacheService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CacheService, factory: CacheService.ɵfac });


/***/ }),

/***/ 6554:
/*!*************************************************************!*\
  !*** ./projects/shared-library/src/lib/core/core.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/compat/auth */ 7018);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 6303);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ 5925);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 7281);
/* harmony import */ var _cache_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cache.service */ 1693);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ 8989);
/* harmony import */ var _firestore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./firestore.service */ 1658);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storage.service */ 1385);
/* harmony import */ var _dialog_dialog_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dialog/dialog.module */ 7028);
/* harmony import */ var _snackbar_snackbar_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../snackbar/snackbar.module */ 4658);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);













class CoreModule {
}
CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(); };
CoreModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [
        _auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard,
        _auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService,
        _cache_service__WEBPACK_IMPORTED_MODULE_2__.CacheService,
        _http_service__WEBPACK_IMPORTED_MODULE_3__.HttpService,
        _firestore_service__WEBPACK_IMPORTED_MODULE_4__.FirestoreService,
        _storage_service__WEBPACK_IMPORTED_MODULE_5__.StorageService
    ], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
        _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_11__.AngularFireAuthModule,
        _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_12__.AngularFirestoreModule,
        _dialog_dialog_module__WEBPACK_IMPORTED_MODULE_6__.DialogModule,
        _snackbar_snackbar_module__WEBPACK_IMPORTED_MODULE_7__.SnackbarModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](CoreModule, { exports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
        _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_11__.AngularFireAuthModule,
        _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_12__.AngularFirestoreModule,
        _dialog_dialog_module__WEBPACK_IMPORTED_MODULE_6__.DialogModule,
        _snackbar_snackbar_module__WEBPACK_IMPORTED_MODULE_7__.SnackbarModule] }); })();


/***/ }),

/***/ 1658:
/*!*******************************************************************!*\
  !*** ./projects/shared-library/src/lib/core/firestore.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirestoreService": () => (/* binding */ FirestoreService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4361);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 6303);



class FirestoreService {
    constructor(afs) {
        this.afs = afs;
    }
    collection(path) {
        return this.afs.collection(path).valueChanges();
    }
    doc(path) {
        return this.afs.doc(path).valueChanges();
    }
    delete(path) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.from)(this.afs.doc(path).delete());
    }
    update(path, data) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.from)(this.afs.doc(path).set(data, { merge: true }));
    }
}
FirestoreService.ɵfac = function FirestoreService_Factory(t) { return new (t || FirestoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_2__.AngularFirestore)); };
FirestoreService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FirestoreService, factory: FirestoreService.ɵfac });


/***/ }),

/***/ 8989:
/*!**************************************************************!*\
  !*** ./projects/shared-library/src/lib/core/http.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpService": () => (/* binding */ HttpService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 3882);


class HttpService {
    constructor(http) {
        this.http = http;
    }
    get(url, options = {}) {
        return this.http.get(url, options);
    }
    post(url, body, options = {}) {
        return this.http.post(url, body, options);
    }
    put(url, body, options = {}) {
        return this.http.put(url, body, options);
    }
    delete(url, options = {}) {
        return this.http.delete(url, options);
    }
}
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
HttpService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac });


/***/ }),

/***/ 6750:
/*!*******************************************************!*\
  !*** ./projects/shared-library/src/lib/core/index.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* reexport safe */ _core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule),
/* harmony export */   "AuthGuard": () => (/* reexport safe */ _auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard),
/* harmony export */   "AuthService": () => (/* reexport safe */ _auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService),
/* harmony export */   "CacheService": () => (/* reexport safe */ _cache_service__WEBPACK_IMPORTED_MODULE_3__.CacheService),
/* harmony export */   "HttpService": () => (/* reexport safe */ _http_service__WEBPACK_IMPORTED_MODULE_4__.HttpService),
/* harmony export */   "FirestoreService": () => (/* reexport safe */ _firestore_service__WEBPACK_IMPORTED_MODULE_5__.FirestoreService),
/* harmony export */   "StorageService": () => (/* reexport safe */ _storage_service__WEBPACK_IMPORTED_MODULE_6__.StorageService)
/* harmony export */ });
/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.module */ 6554);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.guard */ 5925);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ 7281);
/* harmony import */ var _cache_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cache.service */ 1693);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http.service */ 8989);
/* harmony import */ var _firestore_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./firestore.service */ 1658);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./storage.service */ 1385);









/***/ }),

/***/ 1385:
/*!*****************************************************************!*\
  !*** ./projects/shared-library/src/lib/core/storage.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageService": () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9441);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 9902);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1435);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http.service */ 8989);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/compat/storage */ 4416);





class StorageService {
    constructor(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    download(path) {
        return this.storage
            .ref(path)
            .getDownloadURL()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)(url => this.http.get('/storage/' + url.split('/').slice(-1)[0], { responseType: 'json' })));
    }
    upload(path, content) {
        const task = this.storage.upload(path, content);
        const result$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        task.snapshotChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.finalize)(() => result$.next())).subscribe();
        return result$.asObservable()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)(() => this.storage.ref(path).getDownloadURL()));
    }
}
StorageService.ɵfac = function StorageService_Factory(t) { return new (t || StorageService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_6__.AngularFireStorage)); };
StorageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: StorageService, factory: StorageService.ɵfac });


/***/ }),

/***/ 8594:
/*!*************************************************************************!*\
  !*** ./projects/shared-library/src/lib/dialog/alert/alert.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertComponent": () => (/* binding */ AlertComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 781);




class AlertComponent {
    constructor(data) {
        this.data = data;
    }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA)); };
AlertComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertComponent, selectors: [["lib-alert"]], decls: 7, vars: 4, consts: [["mat-dialog-title", ""], [1, "actions"], ["mat-flat-button", "", "color", "primary", 3, "mat-dialog-close"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-dialog-actions", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title || "Alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.ok || "Ok", " ");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose], styles: [".actions[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsZXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7QUFDekIiLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3Rpb25zIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iXX0= */"] });


/***/ }),

/***/ 3437:
/*!*****************************************************************************!*\
  !*** ./projects/shared-library/src/lib/dialog/confirm/confirm.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmComponent": () => (/* binding */ ConfirmComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 781);




class ConfirmComponent {
    constructor(data) {
        this.data = data;
    }
}
ConfirmComponent.ɵfac = function ConfirmComponent_Factory(t) { return new (t || ConfirmComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA)); };
ConfirmComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmComponent, selectors: [["lib-confirm"]], decls: 9, vars: 6, consts: [["mat-dialog-title", ""], [1, "actions"], ["mat-stroked-button", "", "color", "primary", 1, "mr-5", 3, "mat-dialog-close"], ["mat-flat-button", "", "color", "primary", 1, "ml-5", 3, "mat-dialog-close"]], template: function ConfirmComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-dialog-actions", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title || "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.description || "Are you sure?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.cancel || "Cancel", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.ok || "Ok", " ");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose], styles: [".actions[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJjb25maXJtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aW9ucyB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuIl19 */"] });


/***/ }),

/***/ 4833:
/*!*****************************************************************!*\
  !*** ./projects/shared-library/src/lib/dialog/dialog.models.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 7028:
/*!*****************************************************************!*\
  !*** ./projects/shared-library/src/lib/dialog/dialog.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogModule": () => (/* binding */ DialogModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dialog.service */ 290);
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert/alert.component */ 8594);
/* harmony import */ var _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./confirm/confirm.component */ 3437);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);







class DialogModule {
}
DialogModule.ɵfac = function DialogModule_Factory(t) { return new (t || DialogModule)(); };
DialogModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: DialogModule });
DialogModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [
        _dialog_service__WEBPACK_IMPORTED_MODULE_0__.DialogService
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DialogModule, { declarations: [_alert_alert_component__WEBPACK_IMPORTED_MODULE_1__.AlertComponent,
        _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogModule] }); })();


/***/ }),

/***/ 290:
/*!******************************************************************!*\
  !*** ./projects/shared-library/src/lib/dialog/dialog.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogService": () => (/* binding */ DialogService)
/* harmony export */ });
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert/alert.component */ 8594);
/* harmony import */ var _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirm/confirm.component */ 3437);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 2213);




class DialogService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    alert(config) {
        return this.dialog.open(_alert_alert_component__WEBPACK_IMPORTED_MODULE_0__.AlertComponent, config);
    }
    confirm(config) {
        return this.dialog.open(_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmComponent, config);
    }
    open(componentOrTemplateRef, config) {
        return this.dialog.open(componentOrTemplateRef, config);
    }
}
DialogService.ɵfac = function DialogService_Factory(t) { return new (t || DialogService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialog)); };
DialogService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DialogService, factory: DialogService.ɵfac });


/***/ }),

/***/ 9168:
/*!*********************************************************!*\
  !*** ./projects/shared-library/src/lib/dialog/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogModule": () => (/* reexport safe */ _dialog_module__WEBPACK_IMPORTED_MODULE_0__.DialogModule),
/* harmony export */   "DialogService": () => (/* reexport safe */ _dialog_service__WEBPACK_IMPORTED_MODULE_2__.DialogService)
/* harmony export */ });
/* harmony import */ var _dialog_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dialog.module */ 7028);
/* harmony import */ var _dialog_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialog.models */ 4833);
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog.service */ 290);





/***/ }),

/***/ 5639:
/*!*********************************************************************!*\
  !*** ./projects/shared-library/src/lib/material/material.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/autocomplete */ 5924);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/badge */ 330);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button-toggle */ 3894);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ 4058);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/chips */ 9243);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ 2323);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/grid-list */ 5937);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ 8417);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ 221);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/paginator */ 8021);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-bar */ 365);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-spinner */ 181);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/radio */ 5644);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ 7007);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/sidenav */ 6608);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/slide-toggle */ 2080);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/slider */ 3616);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/snack-bar */ 8456);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/stepper */ 8210);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/table */ 4302);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/tabs */ 9348);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/toolbar */ 4106);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/tooltip */ 298);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);






























class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__.MatAutocompleteModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_2__.MatBadgeModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__.MatChipsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__.MatExpansionModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_14__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__.MatProgressSpinnerModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__.MatRadioModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_20__.MatSelectModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__.MatSidenavModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_22__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__.MatSlideToggleModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__.MatSnackBarModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__.MatStepperModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_26__.MatTableModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__.MatTooltipModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { exports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__.MatAutocompleteModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_2__.MatBadgeModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__.MatChipsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__.MatExpansionModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_14__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__.MatProgressSpinnerModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__.MatRadioModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_20__.MatSelectModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__.MatSidenavModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_22__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__.MatSlideToggleModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__.MatSnackBarModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__.MatStepperModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_26__.MatTableModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__.MatTooltipModule] }); })();


/***/ }),

/***/ 2274:
/*!***************************************************!*\
  !*** ./projects/shared-library/src/lib/models.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 4731:
/*!************************************************************************************!*\
  !*** ./projects/shared-library/src/lib/shared/directives/unsubscribe.directive.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnsubscribeDirective": () => (/* binding */ UnsubscribeDirective)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4283);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


class UnsubscribeDirective {
    constructor() {
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subscription();
    }
    set subscriptions(subscription) { this.subscription.add(subscription); }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
UnsubscribeDirective.ɵfac = function UnsubscribeDirective_Factory(t) { return new (t || UnsubscribeDirective)(); };
UnsubscribeDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: UnsubscribeDirective, selectors: [["", "libUnsubscribe", ""]] });


/***/ }),

/***/ 3955:
/*!*********************************************************!*\
  !*** ./projects/shared-library/src/lib/shared/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* reexport safe */ _shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule),
/* harmony export */   "UnsubscribeDirective": () => (/* reexport safe */ _directives_unsubscribe_directive__WEBPACK_IMPORTED_MODULE_1__.UnsubscribeDirective)
/* harmony export */ });
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.module */ 4626);
/* harmony import */ var _directives_unsubscribe_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives/unsubscribe.directive */ 4731);




/***/ }),

/***/ 1889:
/*!************************************************************************!*\
  !*** ./projects/shared-library/src/lib/shared/pipes/filter-by.pipe.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterByPipe": () => (/* binding */ FilterByPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class FilterByPipe {
    transform(value, property, comparator) {
        return value.filter(i => i[property] === comparator);
    }
}
FilterByPipe.ɵfac = function FilterByPipe_Factory(t) { return new (t || FilterByPipe)(); };
FilterByPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filterBy", type: FilterByPipe, pure: true });


/***/ }),

/***/ 9255:
/*!*******************************************************************!*\
  !*** ./projects/shared-library/src/lib/shared/pipes/find.pipe.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FindPipe": () => (/* binding */ FindPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class FindPipe {
    transform(value, property, comparator) {
        return value.find(i => i[property] === comparator);
    }
}
FindPipe.ɵfac = function FindPipe_Factory(t) { return new (t || FindPipe)(); };
FindPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "find", type: FindPipe, pure: true });


/***/ }),

/***/ 97:
/*!*******************************************************************!*\
  !*** ./projects/shared-library/src/lib/shared/pipes/join.pipe.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JoinPipe": () => (/* binding */ JoinPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class JoinPipe {
    transform(value, separator) {
        return value.join(separator);
    }
}
JoinPipe.ɵfac = function JoinPipe_Factory(t) { return new (t || JoinPipe)(); };
JoinPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "join", type: JoinPipe, pure: true });


/***/ }),

/***/ 1277:
/*!******************************************************************!*\
  !*** ./projects/shared-library/src/lib/shared/pipes/map.pipe.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapPipe": () => (/* binding */ MapPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class MapPipe {
    transform(value, property) {
        return Array.isArray(value) ? value.map(i => i[property]) : value[property];
    }
}
MapPipe.ɵfac = function MapPipe_Factory(t) { return new (t || MapPipe)(); };
MapPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "map", type: MapPipe, pure: true });


/***/ }),

/***/ 4626:
/*!*****************************************************************!*\
  !*** ./projects/shared-library/src/lib/shared/shared.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _cdk_cdk_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cdk/cdk.module */ 9623);
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../material/material.module */ 5639);
/* harmony import */ var _pipes_join_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pipes/join.pipe */ 97);
/* harmony import */ var _pipes_map_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipes/map.pipe */ 1277);
/* harmony import */ var _pipes_filter_by_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes/filter-by.pipe */ 1889);
/* harmony import */ var _pipes_find_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes/find.pipe */ 9255);
/* harmony import */ var _directives_unsubscribe_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/unsubscribe.directive */ 4731);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);










const DECLARATIONS = [
    _pipes_join_pipe__WEBPACK_IMPORTED_MODULE_2__.JoinPipe,
    _pipes_map_pipe__WEBPACK_IMPORTED_MODULE_3__.MapPipe,
    _pipes_filter_by_pipe__WEBPACK_IMPORTED_MODULE_4__.FilterByPipe,
    _pipes_find_pipe__WEBPACK_IMPORTED_MODULE_5__.FindPipe,
    _directives_unsubscribe_directive__WEBPACK_IMPORTED_MODULE_6__.UnsubscribeDirective
];
const IMPORTS = [
    _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
    _cdk_cdk_module__WEBPACK_IMPORTED_MODULE_0__.CdkModule,
    _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
    _material_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule,
    _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule
];
class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[...IMPORTS], _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _cdk_cdk_module__WEBPACK_IMPORTED_MODULE_0__.CdkModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _material_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_pipes_join_pipe__WEBPACK_IMPORTED_MODULE_2__.JoinPipe,
        _pipes_map_pipe__WEBPACK_IMPORTED_MODULE_3__.MapPipe,
        _pipes_filter_by_pipe__WEBPACK_IMPORTED_MODULE_4__.FilterByPipe,
        _pipes_find_pipe__WEBPACK_IMPORTED_MODULE_5__.FindPipe,
        _directives_unsubscribe_directive__WEBPACK_IMPORTED_MODULE_6__.UnsubscribeDirective], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _cdk_cdk_module__WEBPACK_IMPORTED_MODULE_0__.CdkModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _material_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _cdk_cdk_module__WEBPACK_IMPORTED_MODULE_0__.CdkModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _material_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _pipes_join_pipe__WEBPACK_IMPORTED_MODULE_2__.JoinPipe,
        _pipes_map_pipe__WEBPACK_IMPORTED_MODULE_3__.MapPipe,
        _pipes_filter_by_pipe__WEBPACK_IMPORTED_MODULE_4__.FilterByPipe,
        _pipes_find_pipe__WEBPACK_IMPORTED_MODULE_5__.FindPipe,
        _directives_unsubscribe_directive__WEBPACK_IMPORTED_MODULE_6__.UnsubscribeDirective] }); })();


/***/ }),

/***/ 3759:
/*!***********************************************************!*\
  !*** ./projects/shared-library/src/lib/snackbar/index.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SnackbarModule": () => (/* reexport safe */ _snackbar_module__WEBPACK_IMPORTED_MODULE_0__.SnackbarModule),
/* harmony export */   "SnackbarService": () => (/* reexport safe */ _snackbar_service__WEBPACK_IMPORTED_MODULE_1__.SnackbarService)
/* harmony export */ });
/* harmony import */ var _snackbar_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snackbar.module */ 4658);
/* harmony import */ var _snackbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./snackbar.service */ 489);




/***/ }),

/***/ 4658:
/*!*********************************************************************!*\
  !*** ./projects/shared-library/src/lib/snackbar/snackbar.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SnackbarModule": () => (/* binding */ SnackbarModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 8456);
/* harmony import */ var _snackbar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snackbar.service */ 489);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




class SnackbarModule {
}
SnackbarModule.ɵfac = function SnackbarModule_Factory(t) { return new (t || SnackbarModule)(); };
SnackbarModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SnackbarModule });
SnackbarModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [
        _snackbar_service__WEBPACK_IMPORTED_MODULE_0__.SnackbarService
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBarModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SnackbarModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBarModule] }); })();


/***/ }),

/***/ 489:
/*!**********************************************************************!*\
  !*** ./projects/shared-library/src/lib/snackbar/snackbar.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SnackbarService": () => (/* binding */ SnackbarService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ 8456);


const SNACKBAR_DEFAULT_DURATION = 5000;
const SNACKBAR_ERROR_CLASS = 'snackbar-error';
const SNACKBAR_INFO_CLASS = 'snackbar-info';
class SnackbarService {
    constructor(snack) {
        this.snack = snack;
    }
    info(message) {
        return this.snack.open(message, 'OK', {
            duration: SNACKBAR_DEFAULT_DURATION,
            panelClass: SNACKBAR_INFO_CLASS
        });
    }
    error(message) {
        return this.snack.open(message, 'OK', {
            duration: SNACKBAR_DEFAULT_DURATION,
            panelClass: SNACKBAR_ERROR_CLASS
        });
    }
}
SnackbarService.ɵfac = function SnackbarService_Factory(t) { return new (t || SnackbarService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.MatSnackBar)); };
SnackbarService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SnackbarService, factory: SnackbarService.ɵfac });


/***/ }),

/***/ 2564:
/*!**************************************************!*\
  !*** ./projects/shared-library/src/lib/utils.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFilteredObject": () => (/* binding */ getFilteredObject),
/* harmony export */   "getParsedJson": () => (/* binding */ getParsedJson)
/* harmony export */ });
function getFilteredObject(obj, allowed) {
    const keys = Object.keys(obj).filter(i => allowed.includes(i));
    const filtered = keys.reduce((acc, key) => {
        acc[key] = obj[key];
        return acc;
    }, {});
    return filtered;
}
function getParsedJson(value) {
    try {
        return JSON.parse(value);
    }
    catch (r) {
        return null;
    }
}


/***/ }),

/***/ 8454:
/*!***************************************************!*\
  !*** ./projects/shared-library/src/public-api.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* reexport safe */ _lib_core__WEBPACK_IMPORTED_MODULE_0__.AuthGuard),
/* harmony export */   "AuthService": () => (/* reexport safe */ _lib_core__WEBPACK_IMPORTED_MODULE_0__.AuthService),
/* harmony export */   "CacheService": () => (/* reexport safe */ _lib_core__WEBPACK_IMPORTED_MODULE_0__.CacheService),
/* harmony export */   "CoreModule": () => (/* reexport safe */ _lib_core__WEBPACK_IMPORTED_MODULE_0__.CoreModule),
/* harmony export */   "FirestoreService": () => (/* reexport safe */ _lib_core__WEBPACK_IMPORTED_MODULE_0__.FirestoreService),
/* harmony export */   "HttpService": () => (/* reexport safe */ _lib_core__WEBPACK_IMPORTED_MODULE_0__.HttpService),
/* harmony export */   "StorageService": () => (/* reexport safe */ _lib_core__WEBPACK_IMPORTED_MODULE_0__.StorageService),
/* harmony export */   "DialogModule": () => (/* reexport safe */ _lib_dialog__WEBPACK_IMPORTED_MODULE_1__.DialogModule),
/* harmony export */   "DialogService": () => (/* reexport safe */ _lib_dialog__WEBPACK_IMPORTED_MODULE_1__.DialogService),
/* harmony export */   "SnackbarModule": () => (/* reexport safe */ _lib_snackbar__WEBPACK_IMPORTED_MODULE_2__.SnackbarModule),
/* harmony export */   "SnackbarService": () => (/* reexport safe */ _lib_snackbar__WEBPACK_IMPORTED_MODULE_2__.SnackbarService),
/* harmony export */   "SharedModule": () => (/* reexport safe */ _lib_shared__WEBPACK_IMPORTED_MODULE_3__.SharedModule),
/* harmony export */   "UnsubscribeDirective": () => (/* reexport safe */ _lib_shared__WEBPACK_IMPORTED_MODULE_3__.UnsubscribeDirective),
/* harmony export */   "getFilteredObject": () => (/* reexport safe */ _lib_utils__WEBPACK_IMPORTED_MODULE_5__.getFilteredObject),
/* harmony export */   "getParsedJson": () => (/* reexport safe */ _lib_utils__WEBPACK_IMPORTED_MODULE_5__.getParsedJson)
/* harmony export */ });
/* harmony import */ var _lib_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/core */ 6750);
/* harmony import */ var _lib_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/dialog */ 9168);
/* harmony import */ var _lib_snackbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/snackbar */ 3759);
/* harmony import */ var _lib_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/shared */ 3955);
/* harmony import */ var _lib_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/models */ 2274);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/utils */ 2564);
/*
 * Public API Surface of shared-library
 */








/***/ }),

/***/ 3876:
/*!**************************************************************************!*\
  !*** ./projects/shadowrun/$_lazy_route_resources/ lazy namespace object ***!
  \**************************************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 3876;
module.exports = webpackEmptyAsyncContext;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(3222)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map