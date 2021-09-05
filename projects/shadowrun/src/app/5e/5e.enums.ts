export enum ADEPT_POWER_ID {}

export enum ATTRIBUTE_ID {
  BODY = 'attribute:body',
  AGILITY = 'attribute:agility',
  REACTION = 'attribute:reaction',
  STRENGTH = 'attribute:strength',
  WILLPOWER = 'attribute:willpower',
  LOGIC = 'attribute:logic',
  INTUITION = 'attribute:intuition',
  CHARISMA = 'attribute:charisma',
  EDGE = 'attribute:edge',
  ESSENCE = 'attribute:essence',
  MAGIC = 'attribute:magic',
  RESONANCE = 'attribute:resonance'
}

export enum ATTRIBUTE_TYPE_ID {
  PHYSICAL = 'physical',
  MENTAL = 'mental',
  SPECIAL = 'special'
}

export enum AWAKENING_ID {
  MUNDANE = 'awakening:mundane',
  ADEPT = 'awakening:adept',
  ASPECTED_MAGICIAN = 'awakening:aspected_magician',
  MAGICIAN = 'awakening:magician',
  MYSTIC_ADEPT = 'awakening:mystic_adept',
  TECHNOMANCER = 'awakening:technomancer'
}

export enum BOOK_ID {
  CORE_RULEBOOK = '5e:core_rulebook'
}

export enum COMPLEX_FORM_ID {
  CLEANER = 'complex_form:cleaner',
  DIFFUSION_OF_ATTACK = 'complex_form:diffusion_of_attack',
  DIFFUSION_OF_SLEAZE = 'complex_form:diffusion_of_sleaze',
  DIFFUSION_OF_DATA_PROCESSING = 'complex_form:diffusion_of_data_processing',
  DIFFUSION_OF_FIREWALL = 'complex_form:diffusion_of_firewall',
  EDITOR = 'complex_form:editor',
  INFUSION_OF_ATTACK = 'complex_form:infusion_of_attack',
  INFUSION_OF_SLEAZE = 'complex_form:infusion_of_sleaze',
  INFUSION_OF_DATA_PROCESSING = 'complex_form:infusion_of_data_processing',
  INFUSION_OF_FIREWALL = 'complex_form:infusion_of_firewall',
  STATIC_VEIL = 'complex_form:static_veil',
  PULSE_STORM = 'complex_form:pulse_storm',
  PUPPETEER = 'complex_form:puppeteer',
  RESONANCE_CHANNEL = 'complex_form:resonance_channel',
  RESONANCE_SPIKE = 'complex_form:resonance_spike',
  RESONANCE_VEIL = 'complex_form:resonance_veil',
  STATIC_BOMB = 'complex_form:static_bomb',
  STITCHES = 'complex_form:stitches',
  TRANSCENDENT_GRID = 'complex_form:transcendent_grid',
  TATTLETALE = 'complex_form:tattletale'
}

export enum COMPLEX_FORM_TARGET_ID {
  SELF = 1,
  DEVICE,
  PERSONA,
  SPRITE,
  FILE
}

export enum COMPLEX_FORM_DURATION_ID {
  IMMEDIATE = 1,
  SUSTAINED,
  PERMANENT
}

export enum GEAR_ID {
  CYBERDECK = 'gear:cyberdeck',
  RCC = 'gear:rcc'
}

export enum GEAR_TYPE_ID {
  CYBERDECK = 'gt:cyberdeck',
  RCC = 'gt:rcc'
}

export enum METATYPE_ID {
  HUMAN = 'metatype:human',
  DWARF = 'metatype:dwarf',
  ELF = 'metatype:elf',
  ORK = 'metatype:ork',
  TROLL = 'metatype:troll'
}

export enum QUALITY_ID {
  RACIAL_LOW_LIGHT_VISION = 'quality:racial_low_light_vision',
  RACIAL_THERMOGRAPHIC_VISION = 'quality:racial_thermographic_vision',
  RACIAL_PATHOGENS_RESISTANCE = 'quality:racial_pathogens_resistance',
  RACIAL_REACH = 'quality:racial_reach',
  RACIAL_DERMAL_ARMOR = 'quality:racial_dermal_armor',
  RACIAL_LIFESTYLE = 'quality:racial_lifestyle',
  AMBIDEXTROUS = 'quality:ambidextrous',
  ANALYTICAL_MIND = 'quality:analytical_mind',
  APTITUDE = 'quality:aptitude',
  ASTRAL_CHAMELEON = 'quality:astral_chameleon',
  BILINGUAL = 'quality:bilingual',
  BLANDNESS = 'quality:blandness',
  CATLIKE = 'quality:catlike',
  CODESLINGER = 'quality:codeslinger',
  DOUBLE_JOINTED = 'quality:double_jointed',
  EXCEPTIONAL_ATTRIBUTE = 'quality:exceptional_attribute',
  FIRST_IMPRESSION = 'quality:first_impression',
  FOCUSED_CONCENTRATION = 'quality:focused_concentration',
  GEARHEAD = 'quality:gearhead',
  GUTS = 'quality:guts',
  HIGH_PAIN_TOLERANCE = 'quality:high_pain_tolerance',
  HOME_GROUND = 'quality:home_ground',
  HUMAN_LOOKING = 'quality:human_looking',
  INDOMITABLE = 'quality:indomitable',
  JURYRIGGER = 'quality:juryrigger',
  LUCKY = 'quality:lucky',
  MAGIC_RESISTANCE = 'quality:magic_resistance',
  MENTOR_SPIRIT = 'quality:mentor_spirit',
  NATURAL_ATHLETE = 'quality:natural_athlete',
  NATURAL_HARDENING = 'quality:natural_hardening',
  NATURAL_IMMUNITY = 'quality:natural_immunity',
  PHOTOGRAPHIC_MEMORY = 'quality:photographic_memory',
  QUICK_HEALER = 'quality:quick_healer',
  RESISTANCE_TO_PATHOGENS = 'quality:resistance_to_pathogens',
  SPIRIT_AFFINITY = 'quality:spirit_affinity',
  TOUGHNESS = 'quality:toughness',
  WILL_TO_LIVE = 'quality:will_to_live',
  ADDICTION = 'quality:addiction',
  ALLERGY = 'quality:allergy',
  ASTRAL_BEACON = 'quality:astral_beacon',
  BAD_LUCK = 'quality:bad_luck',
  BAD_REP = 'quality:bad_rep',
  CODE_OF_HONOR = 'quality:code_of_honor',
  CODEBLOCK = 'quality:codeblock',
  COMBAT_PARALYSIS = 'quality:combat_paralyisis',
  DEPENDENTS = 'quality:dependents',
  DISTINCTIVE_STYLE = 'quality:distinctive_style',
  ELF_POSER = 'quality:elf_poser',
  GREMLINS = 'quality:gremlins',
  INCOMPETENT = 'quality:incompetent',
  INSOMNIA = 'quality:insomnia',
  LOSS_OF_CONFIDENCE = 'quality:loss_of_confidence',
  LOW_PAIN_TOLERANCE = 'quality:low_pain_tolerance',
  ORK_POSER = 'quality:ork_poser',
  PREJUDICED = 'quality:prejudiced',
  SCORCHED = 'quality:scorched',
  SENSITIVE_SYSTEM = 'quality:sensitive_system',
  SIMSENSE_VERTIGO = 'quality:simsense_vertigo',
  SINNER = 'quality:sinner',
  SOCIAL_STRESS = 'quality:social_stress',
  SPIRIT_BANE = 'quality:spirit_bane',
  UNCOUTH = 'quality:uncouth',
  UNEDUCATED = 'quality:uneducated',
  UNSTEADY_HANDS = 'quality:unsteady_hands',
  WEAK_IMMUNE_SYSTEM = 'quality:weak_immune_system'
}

export enum SKILL_ID {
  ARCHERY = 'skill:archery',
  AUTOMATICS = 'skill:automatics',
  BLADES = 'skill:blades',
  CLUBS = 'skill:clubs',
  EXOTIC_RANGED_WEAPON = 'skill:exotic_ranged_weapon',
  HEAVY_WEAPONS = 'skill:heavy_weapons',
  LONGARMS = 'skill:longarms',
  PISTOLS = 'skill:pistols',
  THROWING_WEAPONS = 'skill:throwing_weapons',
  UNARMED_COMBAT = 'skill:unarmed_combat',
  DISGUISE = 'skill:disguise',
  DIVING = 'skill:diving',
  ESCAPE_ARTIST = 'skill:escape_artist',
  FREE_FALL = 'skill:free-fall',
  GYMNASTICS = 'skill:gymnastics',
  PALMING = 'skill:palming',
  PERCEPTION = 'skill:perception',
  RUNNING = 'skill:running',
  SNEAKING = 'skill:sneaking',
  SURVIVAL = 'skill:survival',
  SWIMMING = 'skill:swimming',
  TRACKING = 'skill:tracking',
  CON = 'skill:con',
  ETIQUETTE = 'skill:etiquette',
  IMPERSONATION = 'skill:impersonation',
  INSTRUCTION = 'skill:instruction',
  INTIMIDATION = 'skill:intimidation',
  LEADERSHIP = 'skill:leadership',
  NEGOTIATION = 'skill:negotiation',
  PERFORMANCE = 'skill:performance',
  ALCHEMY = 'skill:alchemy',
  ARCANA = 'skill:arcana',
  ARTIFICING = 'skill:artificing',
  ASSENSING = 'skill:assensing',
  ASTRAL_COMBAT = 'skill:astral_combat',
  BANISHING = 'skill:banishing',
  BINDING = 'skill:binding',
  COUNTERSPELLING = 'skill:counterspelling',
  DISENCHANTING = 'skill:disenchanting',
  RITUAL_SPELLCASTING = 'skill:ritual_spellcasting',
  SPELLCASTING = 'skill:spellcasting',
  SUMMONING = 'skill:summoning',
  COMPILING = 'skill:compiling',
  DECOMPILING = 'skill:decompiling',
  REGISTERING = 'skill:registering',
  AERONAUTICS_MECHANIC = 'skill:aeronautics_mechanic',
  ANIMAL_HANDLING = 'skill:animal_handling',
  ARMORER = 'skill:armorer',
  ARTISAN = 'skill:artisan',
  AUTOMOTIVE_MECHANIC = 'skill:automotive_mechanic',
  BIOTECHNOLOGY = 'skill:biotechnology',
  CHEMISTRY = 'skill:chemistry',
  COMPUTER = 'skill:computer',
  CYBERCOMBAT = 'skill:cybercombat',
  CYBERTECHNOLOGY = 'skill:cybertechnology',
  DEMOLITIONS = 'skill:demolitions',
  ELECTRONIC_WARFARE = 'skill:electronic_warfare',
  FIRST_AID = 'skill:first_aid',
  FORGERY = 'skill:forgery',
  HACKING = 'skill:hacking',
  HARDWARE = 'skill:hardware',
  INDUSTRIAL_MECHANIC = 'skill:industrial_mechanic',
  LOCKSMITH = 'skill:locksmith',
  MEDICINE = 'skill:medicine',
  NAUTICAL_MECHANIC = 'skill:nautical_mechanic',
  NAVIGATION = 'skill:navigation',
  SOFTWARE = 'skill:software',
  GUNNERY = 'skill:gunnery',
  PILOT_AEROSPACE = 'skill:pilot_aerospace',
  PILOT_AIRCRAFT = 'skill:pilot_aircraft',
  PILOT_WALKER = 'skill:pilot_walker',
  PILOT_EXOTIC_VEHICLE = 'skill:pilot_exotic_vehicle',
  PILOT_GROUND_CRAFT = 'skill:pilot_ground_craft',
  PILOT_WATERCRAFT = 'skill:pilot_watercraft'
}

export enum SKILL_CATEGORY_ID {
  ACADEMIC = 'sc:academic',
  INTERESTS = 'sc:interests',
  PROFESSIONAL = 'sc:professional',
  STREET = 'sc:street',
  LANGUAGE = 'sc:language'
}

export enum SPELL_ID {
  ACID_STREAM = 'spell:acid_stream',
  TOXIC_WAVE = 'spell:toxic_wave',
  PUNCH = 'spell:punch',
  CLOUT = 'spell:clout',
  BLAST = 'spell:blast',
  DEATH_TOUCH = 'spell:death_touch',
  MANABOLT = 'spell:manabolt',
  MANABALL = 'spell:manaball',
  FLAMETHROWER = 'spell:flamethrower',
  FIREBALL = 'spell:fireball',
  LIGHTNING_BOLT = 'spell:lightning_bolt',
  BALL_LIGHTNING = 'spell:ball_lightning',
  SHATTER = 'spell:shatter',
  POWERBOLT = 'spell:powerbolt',
  POWERBALL = 'spell:powerball',
  KNOCKOUT = 'spell:knockout',
  STUNBOLT = 'spell:stunbolt',
  STUNBALL = 'spell:stunball',
  ANALYZE_DEVICE = 'spell:analyze_device',
  ANALYZE_MAGIC = 'spell:analyze_magic',
  ANALYZE_TRUTH = 'spell:analyze_truth',
  CLAIRAUDIENCE = 'spell:clairaudience',
  CLAIRVOYANCE = 'spell:clairvoyance',
  COMBAT_SENSE = 'spell:combat_sense',
  DETECT_ENEMIES = 'spell:detect_enemies',
  DETECT_ENEMIES_EXTENDED = 'spell:detect_enemies_extended',
  DETECT_INDIVIDUAL = 'spell:detect_individual',
  DETECT_LIFE = 'spell:detect_life',
  DETECT_LIFE_EXTENDED = 'spell:detect_life_extended',
  DETECT_LIFE_FORM = 'spell:detect_life_form',
  DETECT_LIFE_FORM_EXTENDED = 'spell:detect_life_form_extended',
  DETECT_MAGIC = 'spell:detect_magic',
  DETECT_MAGIC_EXTENDED = 'spell:detect_magic_extended',
  DETECT_OBJECT = 'spell:detect_object',
  MINDLINK = 'spell:mindlink',
  MIND_PROBE = 'spell:mind_probe',
  ANTIDOTE = 'spell:antidote',
  CURE_DISEASE = 'spell:cure_disease',
  DECREASE_ATTRIBUTE = 'spell:decrease_attribute',
  DETOX = 'spell:detox',
  HEAL = 'spell:heal',
  INCREASE_ATTRIBUTE = 'spell:increase_attribute',
  INCREASE_REFLEXES = 'spell:increase_reflexes',
  OXYGENATE = 'spell:oxygenate',
  PROPHYLAXIS = 'spell:prophylaxis',
  RESIST_PAIN = 'spell:resist_pain',
  STABILIZE = 'spell:stabilize',
  AGONY = 'spell:agony',
  MASS_AGONY = 'spell:mass_agony',
  BUGS = 'spell:bugs',
  SWARM = 'spell:swarm',
  CONFUSION = 'spell:confusion',
  MASS_CONFUSION = 'spell:mass_confusion',
  CHAOS = 'spell:chaos',
  CHAOTIC_WORLD = 'spell:chaotic_world',
  ENTERTAINMENT = 'spell:entertainment',
  TRID_ENTERTAINMENT = 'spell:trid_entertainment',
  INVISIBILITY = 'spell:invisibility',
  IMPROVED_INVISIBILITY = 'spell:improved_invisibility',
  MASK = 'spell:mask',
  PHYSICAL_MASK = 'spell:physical_mask',
  PHANTASM = 'spell:phantasm',
  TRID_PHANTASM = 'spell:trid_phantasm',
  HUSH = 'spell:hush',
  SILENCE = 'spell:silence',
  STEALTH = 'spell:stealth',
  ANIMATE = 'spell:animate',
  MASS_ANIMATE = 'spell:mass_animate',
  ARMOR = 'spell:armor',
  CONTROL_ACTIONS = 'spell:control_actions',
  MOB_CONTROL = 'spell:mob_control',
  CONTROL_THOUGHTS = 'spell:control_thoughts',
  MOB_MIND = 'spell:mob_mind',
  FLING = 'spell:fling',
  ICE_SHEET = 'spell:ice_sheet',
  IGNITE = 'spell:ignite',
  INFLUENCE = 'spell:influence',
  LEVITATE = 'spell:levitate',
  LIGHT = 'spell:light',
  MAGIC_FINGERS = 'spell:magic_fingers',
  MANA_BARRIER = 'spell:mana_barrier',
  PHYSICAL_BARRIER = 'spell:physical_barrier',
  POLTERGEIST = 'spell:poltergeist',
  SHADOW = 'spell:shadow'
}

export enum SPELL_CATEGORY_ID {
  COMBAT = 1,
  DETECTION,
  HEALTH,
  ILLUSION,
  MANIPULATION
}

export enum SPELL_DAMAGE_ID {
  PHYSICAL = 1,
  STUN
}

export enum SPELL_DURATION_ID {
  INSTANTANEOUS = 1,
  SUSTAINED,
  PERMANENT
}

export enum SPELL_KIND_ID {
  SPELL = 1,
  RITUAL,
  PREPARATION,
  FETISH_SPELL,
  FETISH_RITUAL
}

export enum SPELL_RANGE_ID {
  TOUCH = 1,
  LINE_OF_SIGHT,
  LINE_OF_SIGHT_AREA
}

export enum SPELL_SUBCATEGORY_ID {
  DIRECT = 1,
  INDIRECT,
  ELEMENTAL,
  ACTIVE,
  PASSIVE,
  DIRECTIONAL,
  AREA,
  EXTENDED_AREA,
  PSYCHIC,
  ESSENCE,
  OBVIOUS,
  REALISTIC,
  SINGLE_SENSE,
  MULTI_SENSE,
  MENTAL,
  PHYSICAL,
  ENVIRONMENTAL,
  DAMAGING
}

export enum SPELL_TYPE_ID {
  PHYSICAL = 1,
  MANA
}
