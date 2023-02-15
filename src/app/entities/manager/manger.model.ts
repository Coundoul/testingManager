import { Type } from "../enum/Type.model";


export interface ITesteur {
    idTesteur?: number;
    matricule?: string;
    prenom?: string;
    nom?: string;
}

export interface IRelease {
  refRelease?: number;
  dateLivraison?: Date;
  datePrevision?: Date;
  dateReelle?: Date;
}

export interface ITicket {
  refTicket?: number;
  titre?: string;
  type?: Type;
  testeur?: ITesteur | null;
}




  
export class Testeur implements ITesteur {
  constructor(public idTesteur?: number, public matricule?: string, public prenom?: string, public nom?: string) {}
}
  
export function getTesteurIdentifier(testeur: ITesteur): number | undefined {
  return testeur.idTesteur;
}

export class Release implements IRelease {
  constructor(public refRelease?: number, public dateLivraison?: Date, public datePrevision?: Date, public dateReelle?: Date) {}
}
  
export function getReleaseIdentifier(release: IRelease): number | undefined {
  return release.refRelease;
}

export class Ticket implements ITicket {
  constructor(public refTicket?: number, public titre?: string, public type?: Type, public Testeur?: ITesteur | null) {}
}
  
export function getTicketIdentifier(ticket: ITicket): number | undefined {
  return ticket.refTicket;
}