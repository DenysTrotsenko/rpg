import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { BestiaryFaction, BestiaryRole, BestiaryTrait, BestiaryType, Size } from '@imperium-maledictum-1e/models/common';
import { DataService } from '@im-common';

@Injectable()
export class BestiaryFactionResolver implements Resolve<BestiaryFaction[]> {
  constructor(private readonly data: DataService) {}
  resolve(): Observable<BestiaryFaction[]> { return this.data.bestiaryFactions$; }
}

@Injectable()
export class BestiaryRoleResolver implements Resolve<BestiaryRole[]> {
  constructor(private readonly data: DataService) {}
  resolve(): Observable<BestiaryRole[]> { return this.data.bestiaryRoles$; }
}

@Injectable()
export class SizeResolver implements Resolve<Size[]> {
  constructor(private readonly data: DataService) {}
  resolve(): Observable<Size[]> { return this.data.sizes$; }
}

@Injectable()
export class BestiaryTraitResolver implements Resolve<BestiaryTrait[]> {
  constructor(private readonly data: DataService) {}
  resolve(): Observable<BestiaryTrait[]> { return this.data.bestiaryTraits$; }
}

@Injectable()
export class BestiaryTypeResolver implements Resolve<BestiaryType[]> {
  constructor(private readonly data: DataService) {}
  resolve(): Observable<BestiaryType[]> { return this.data.bestiaryTypes$; }
}
