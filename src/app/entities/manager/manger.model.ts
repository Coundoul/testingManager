import { Type } from "../enum/Type.model";


export interface ITesteur {
    id?: number;
    testeurMatricule?: string;
    testeurPrenom?: string;
    testeurNom?: string;
}

export interface IRelease {
  id?: number;
  releaseNumRelease?: string;
  releaseDateLivraison?: Date;
  releaseDatePrevision?: Date;
  releaseDateReelle?: Date;
}

export interface ITicket {
  id?: number;
  ticketRefTicket?: string;
  ticketTitreTicket?: string;
  ticketType?: Type;
  ticketTesteur?: ITesteur | null;
}




  
export class Testeur implements ITesteur {
  constructor(public id?: number, public testeurMatricule?: string, public testeurPrenom?: string, public testeurNom?: string) {}
}
  
export function getTesteurIdentifier(testeur: ITesteur): number | undefined {
  return testeur.id;
}

export class Release implements IRelease {
  constructor(public id?: number, public releaseNumRelease?: string, public releaseDateLivraison?: Date, public releaseDatePrevision?: Date, public releaseDateReelle?: Date) {}
}
  
export function getReleaseIdentifier(release: IRelease): number | undefined {
  return release.id;
}

export class Ticket implements ITicket {
  constructor(public id?: number, public ticketRefTicket?: string, public ticketTitreTicket?: string, public ticketType?: Type, public ticketTesteur?: ITesteur | null) {}
}
  
export function getTicketIdentifier(ticket: ITicket): number | undefined {
  return ticket.id;
}