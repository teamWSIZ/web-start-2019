export class User {
  imie: string;
  nazwisko: string;
  adres: string;


  constructor(imie: string = '', nazwisko: string = '', adres: string = '') {
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.adres = adres;
  }


}
