export interface Shadowrunner {
  id: string;
  name: string;
  portrait: string;
  street_cred: { value: number; };
  notoriety: { value: number; };
  public_awareness: { value: number; };
}
