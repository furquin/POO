import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Necromancer extends Archetype {
  private _EnergyType: EnergyType;
  private static _instanceArch = 0;

  constructor(name: string) {
    super(name);
      
    this._EnergyType = 'mana';
  }

  get energyType(): EnergyType {
    return this._EnergyType;
  }

  static createdArchetypeInstances(): number {
    this._instanceArch += 1;
    return this._instanceArch;
  }
} 