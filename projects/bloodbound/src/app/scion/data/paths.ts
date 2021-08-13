import {PATH_ID, PATH_TYPE_ID, SKILL_ID} from '../scion.enums';

export const PATHS = [
  {
    id: PATH_ID.ADVENTURER,
    name: 'Adventurer',
    type: PATH_TYPE_ID.ORIGIN,
    skills: [SKILL_ID.FIREARMS, SKILL_ID.ATHLETICS, SKILL_ID.PILOT, SKILL_ID.SURVIVAL]
  },
  {
    id: PATH_ID.CHOSEN,
    name: 'Chosen',
    type: PATH_TYPE_ID.ORIGIN,
    skills: [SKILL_ID.CULTURE, SKILL_ID.INTEGRITY, SKILL_ID.OCCULT, SKILL_ID.SUBTERFUGE]
  },
  {
    id: PATH_ID.CREATED,
    name: 'Created',
    type: PATH_TYPE_ID.ORIGIN,
    skills: [SKILL_ID.ATHLETICS, SKILL_ID.EMPATHY, SKILL_ID.SURVIVAL]
  },
  {
    id: PATH_ID.LIFE_OF_PRIVILEGE,
    name: 'Life of Privilege',
    type: PATH_TYPE_ID.ORIGIN,
    skills: [SKILL_ID.LEADERSHIP, SKILL_ID.CULTURE, SKILL_ID.PERSUASION]
  },
  {
    id: PATH_ID.MILITARY_BRAT,
    name: 'Military Brat',
    type: PATH_TYPE_ID.ORIGIN,
    skills: [SKILL_ID.CULTURE, SKILL_ID.LEADERSHIP, SKILL_ID.TECHNOLOGY]
  },
  {
    id: PATH_ID.POTEMKIN_WORLD,
    name: 'Potemkin World',
    type: PATH_TYPE_ID.ORIGIN,
    skills: [SKILL_ID.OCCULT, SKILL_ID.CULTURE, SKILL_ID.INTEGRITY, SKILL_ID.SURVIVAL]
  },
  {
    id: PATH_ID.CHILD_OF_THE_STREETS,
    name: 'Child of the Streets',
    type: PATH_TYPE_ID.ORIGIN,
    skills: [SKILL_ID.ATHLETICS, SKILL_ID.SUBTERFUGE, SKILL_ID.SURVIVAL]
  },
  {
    id: PATH_ID.SUBURBIA,
    name: 'Suburbia',
    type: PATH_TYPE_ID.ORIGIN,
    skills: [SKILL_ID.CULTURE, SKILL_ID.EMPATHY, SKILL_ID.TECHNOLOGY]
  },
  {
    id: PATH_ID.SURVIVALIST,
    name: 'Survivalist',
    type: PATH_TYPE_ID.ORIGIN,
    skills: [SKILL_ID.FIREARMS, SKILL_ID.CLOSE_COMBAT, SKILL_ID.MEDICINE, SKILL_ID.SURVIVAL]
  },
  {
    id: PATH_ID.TERRA_INCOGNITA,
    name: 'Terra Incognita',
    type: PATH_TYPE_ID.ORIGIN,
    skills: [SKILL_ID.CULTURE, SKILL_ID.SURVIVAL, SKILL_ID.OCCULT, SKILL_ID.ATHLETICS]
  },
  {
    id: PATH_ID.WAR_TORN,
    name: 'War-Torn',
    type: PATH_TYPE_ID.ORIGIN,
    skills: [SKILL_ID.ATHLETICS, SKILL_ID.EMPATHY, SKILL_ID.SUBTERFUGE, SKILL_ID.SURVIVAL]
  },
  {
    id: PATH_ID.CHARISMATIC_LEADER,
    name: 'Charismatic Leader',
    type: PATH_TYPE_ID.ROLE,
    skills: [SKILL_ID.LEADERSHIP, SKILL_ID.EMPATHY, SKILL_ID.CULTURE, SKILL_ID.PERSUASION]
  },
  {
    id: PATH_ID.COMBAT_SPECIALIST,
    name: 'Combat Specialist',
    type: PATH_TYPE_ID.ROLE,
    skills: [SKILL_ID.FIREARMS, SKILL_ID.ATHLETICS, SKILL_ID.CLOSE_COMBAT, SKILL_ID.PILOT]
  },
  {
    id: PATH_ID.DETECTIVE,
    name: 'Detective',
    type: PATH_TYPE_ID.ROLE,
    skills: [SKILL_ID.FIREARMS, SKILL_ID.INTEGRITY, SKILL_ID.PERSUASION]
  },
  {
    id: PATH_ID.MEDICAL_PRACTITIONER,
    name: 'Medical Practitioner',
    type: PATH_TYPE_ID.ROLE,
    skills: [SKILL_ID.EMPATHY, SKILL_ID.MEDICINE, SKILL_ID.SCIENCE, SKILL_ID.SURVIVAL]
  },
  {
    id: PATH_ID.PILOT,
    name: 'Pilot',
    type: PATH_TYPE_ID.ROLE,
    skills: [SKILL_ID.FIREARMS, SKILL_ID.CLOSE_COMBAT, SKILL_ID.PILOT, SKILL_ID.TECHNOLOGY]
  },
  {
    id: PATH_ID.SNEAK,
    name: 'Sneak',
    type: PATH_TYPE_ID.ROLE,
    skills: [SKILL_ID.ATHLETICS, SKILL_ID.SUBTERFUGE, SKILL_ID.TECHNOLOGY]
  },
  {
    id: PATH_ID.TECHNOLOGY_EXPERT,
    name: 'Technology Expert',
    type: PATH_TYPE_ID.ROLE,
    skills: [SKILL_ID.CULTURE, SKILL_ID.SCIENCE, SKILL_ID.TECHNOLOGY]
  }
];
