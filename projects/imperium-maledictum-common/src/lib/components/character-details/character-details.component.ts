import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { DataService } from '@im-common';
import {
  getCharacteristicBonus,
  ImperiumMaledictumCharacter
} from '@imperium-maledictum-1e/models/character';
import { Characteristic, Faction, Origin, Role } from '@imperium-maledictum-1e/models/common';

@Component({
    selector: 'character-details',
    templateUrl: './character-details.component.html',
    styleUrls: ['./character-details.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class CharacterDetailsComponent {
  readonly data = inject(DataService);
  @Input() view = 'short';
  @Input() set character(character: ImperiumMaledictumCharacter) {
    this.image = character?.image;
    this.origin = this.data.get<Origin>(character?.origin);
    this.faction = this.data.get<Faction>(character?.faction);
    this.role = this.data.get<Role>(character?.role);
    this.fate = character?.fate ?? 3;
    this.wounds = character?.wounds ?? 0;
    this.corruption = character?.corruption ?? 0;
    this.encumbrance = 0;
    this.woundsMax = this.getMaxWounds(character);
    this.corruptionMax = this.getMaxCorruption(character);
    this.encumbranceMax = this.getMaxEncumbrance(character);
    this.criticalsMax = this.getMaxCriticalWounds(character);
    this.initiative = this.getInitiative(character);
  }

  image: string = null;
  origin: Origin = null;
  faction: Faction = null;
  role: Role = null;
  fate: number = null;
  wounds: number = null;
  corruption: number = null;
  encumbrance: number = null;
  woundsMax: number = null;
  corruptionMax: number = null;
  encumbranceMax: number = null;
  initiative: number = null;
  criticalsMax: number = null;

  private getMaxWounds(character: ImperiumMaledictumCharacter): number {
    const fromCharacteristics = character.characteristics?.reduce((acc, cur) => {
      const system = this.data.get<Characteristic>(cur.id)?.system;
      const coefficient = system?.MAXIMUM_WOUNDS_CHARACTERISTIC_BONUS_TIMES;
      const value = !!coefficient ? coefficient * getCharacteristicBonus(cur) : 0;
      return acc + value;
    }, 0);
    const fromTalents = 0;

    return fromCharacteristics + fromTalents;
  }

  private getMaxCriticalWounds(character: ImperiumMaledictumCharacter): number {
    const fromCharacteristics = character.characteristics?.reduce((acc, cur) => {
      const system = this.data.get<Characteristic>(cur.id)?.system;
      const coefficient = system?.MAXIMUM_CRITICAL_WOUNDS_CHARACTERISTIC_BONUS_TIMES;
      const value = !!coefficient ? coefficient * getCharacteristicBonus(cur) : 0;
      return acc + value;
    }, 0);
    const fromTalents = 0;

    return fromCharacteristics + fromTalents;
  }

  private getMaxCorruption(character: ImperiumMaledictumCharacter): number {
    const fromCharacteristics = character.characteristics?.reduce((acc, cur) => {
      const system = this.data.get<Characteristic>(cur.id)?.system;
      const coefficient = system?.MAXIMUM_CORRUPTION_CHARACTERISTIC_BONUS_TIMES;
      const value = !!coefficient ? coefficient * getCharacteristicBonus(cur) : 0;
      return acc + value;
    }, 0);
    const fromTalents = 0;

    return fromCharacteristics + fromTalents;
  }

  private getMaxEncumbrance(character: ImperiumMaledictumCharacter): number {
    const fromCharacteristics = character.characteristics?.reduce((acc, cur) => {
      const system = this.data.get<Characteristic>(cur.id)?.system;
      const coefficient = system?.MAXIMUM_ENCUMBRANCE_CHARACTERISTIC_BONUS_TIMES;
      const value = !!coefficient ? coefficient * getCharacteristicBonus(cur) : 0;
      return acc + value;
    }, 0);
    const fromTalents = 0;

    return fromCharacteristics + fromTalents;
  }

  private getInitiative(character: ImperiumMaledictumCharacter): number {
    const fromCharacteristics = character.characteristics?.reduce((acc, cur) => {
      const system = this.data.get<Characteristic>(cur.id)?.system;
      const coefficient = system?.INITIATIVE_CHARACTERISTIC_BONUS_TIMES;
      const value = !!coefficient ? coefficient * getCharacteristicBonus(cur) : 0;
      return acc + value;
    }, 0);
    const fromTalents = 0;

    return fromCharacteristics + fromTalents;
  }
}
