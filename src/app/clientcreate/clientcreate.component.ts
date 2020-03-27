import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { Persons } from '../persons';
import {PersonService} from '../person.service';
import { ReservationService } from '../reservation.service';
import { GroupService } from '../group.service';
import { Role } from '../role';
import { subscribeOn } from 'rxjs/operators';
import { Reservation } from '../interfaceReservation';
import { Group } from '../group';

@Component({
  selector: 'app-clientcreate',
  templateUrl: './clientcreate.component.html',
  styleUrls: ['./clientcreate.component.css']
})
export class ClientcreateComponent implements OnInit {
  /* formulaire de création du client*/
  createClientForm;
  /* formulaire de création du participant*/
  createParticipantForm;
  /*client -> organisateur*/
  client : Persons;
  /*groupe servant à la créationdu groupe*/
  group;
  /* liste de group pour créer person*/
  PersonGroup : Group[] = [];
  /*liste de reservation pour créerle group*/
  groupReservation: Reservation[] = [];
  /*liste de role pour créer l'organisateur*/
  personRole: Role[] = [];
   /*liste de role pour créer le participant*/
  participantRole: Role[] = [];
  /* boolean de création de organisateur pour affichage formulaire participant*/
  hasOrganizer: boolean=false;
  /* réservation sauvegardée en provenance de reservationadd*/
  reservationSelected;
  /*objet rôleOrga récupérer de la table role*/
  roleOrga : Role;
  /*objet rôle participant récupérer de la table role*/
  rolePart: Role;
  /*objet rôle payeur récupérer de la table role*/
  rolePay:Role;
  /*reservation crée pour mettre dans la liste de reservation du group*/
  reservationGroup;
  /*reservation crééepour faire l'update pour mettre à jour le groupe*/
  reservationToUpdate;
  /*groupe créé*/
  groupSaved;


  constructor(private personService: PersonService,
              private reservationService: ReservationService,
              private groupService: GroupService,
              private formBuilder: FormBuilder) {
    this.createClientForm = this.formBuilder.group({
      civility: '',
      name:'',
      firstname:'',
      email:'',
      confirm:'',
      country:'',
      zipCode:'',
      city:'',
      address:'',
      phone:'',
      isPart:'',
      isPay:'',
      isOrga:'true'

    })
    this.createParticipantForm = this.formBuilder.group({
      name2:'',
      firstname2:'',
      isPart2:'true',
      isPay2:''
   })
  }
  ngOnInit() {
    this.reservationSelected = this.reservationService.reservationSelected;
    //récupération de la liste de role dans la table role
    this.personService.selectAllRole().subscribe(dataList => this.personService.roleList = dataList );
    //creation du groupe
    this.createGroupe();
  }
  //fonction de création de l'organisateur
  onCreateClient(createClient) {
    //contrôle du formulaire

    if ((createClient.civility == "civilité")||(createClient.civility == "")){
      alert('la civilité doit être renseignée');
      return false;
    }


    if (createClient.name == "") {
      alert('le nom doit être renseigné');

      return false;
    }
    if (createClient.firstname == "") {
      alert('le prénom doit être renseigné');

      return false;
    }
    if (createClient.email == "") {
      alert('l\'email doit être renseigné');

      return false;
    }
    if (createClient.confirm == "") {
      alert('la confirmation email doit être renseignée');

      return false;
    } else if (createClient.confirm !== createClient.email){
      alert('les champs email et confirmation email doivent être identiques')
    }
    if (createClient.zipCode == "") {
      alert('le code postal doit être renseigné');

      return false;
    }
    if (createClient.country == "") {
      alert('le pays doit être renseigné');

      return false;
    }
    if (createClient.city == "") {
      alert('la ville doit être renseignée');

      return false;
    }
    if (createClient.address == "") {
      alert('l\'adresse doit être renseignée');

      return false;
    }
    //création des objets role
    for (let role  of this.personService.roleList){
        if (role.roleType === 'ORGANIZER'){
          this.roleOrga= role;
        }
        if (role.roleType === 'PAYEUR'){
          this.rolePay= role;
        }
        if (role.roleType === 'PARTICIPANT'){
          this.rolePart= role;
        }
    }
    //ajout des role cochés dans la liste de role de la personne à créer
    if (createClient.isOrga){

    this.personRole.push(this.roleOrga);

    }
    if (createClient.isPart){

      this.personRole.push(this.rolePart);
    }
    if (createClient.isPay){

      this.personRole.push(this.rolePay);
    }
    //ajout du groupe créé dans la liste de groupe de la personne
    this.PersonGroup.push(this.groupSaved);
    //création de la personà inserée
    this.client ={civility: createClient.civility ,name: createClient.name,firstName :createClient.firstname, email : createClient.email, zipCode :createClient.zipCode, country:createClient.country, city : createClient.city, address: createClient.address, phone:createClient.phone, roleSet:this.personRole, groupList:this.PersonGroup };
    //creation du client dans la table person
    this.personService.create(this.client).subscribe(savedClient => console.log(savedClient));
    //mise à jour de la réservation avecle groupe créé
    this.updateReservation(this.groupSaved);
    //organisateur créé, mise à jour du flag pour affichage du formulaire
    this.hasOrganizer = true;
  }
//fonction de création du participant
  onCreateParticipant(createParticipant){
    //initialisation de la liste de role pour le participant
    this.participantRole = [];
    //controle du formulaire participant
    if (createParticipant.name2 == "") {
      alert('le nom doit être renseigné');

      return false;
    }
    if (createParticipant.firstname2 == "") {
      alert('le prénom doit être renseigné');

      return false;
    }

//création des objets role
    for (let role  of this.personService.roleList){
      if (role.roleType === 'ORGANIZER'){
        this.roleOrga= role;
      }
      if (role.roleType === 'PAYEUR'){
        this.rolePay= role;
      }
      if (role.roleType === 'PARTICIPANT'){
        this.rolePart= role;
      }

  }
  //ajout des role cochés dans la liste de role duparticipant à créer

  if (createParticipant.isPart2){

    this.participantRole.push(this.rolePart);
  }
  if (createParticipant.isPay2){

    this.participantRole.push(this.rolePay);
  }

  this.client ={civility: '' ,name: createParticipant.name2 ,firstName :createParticipant.firstname2, email : '', zipCode :0, country: '', city : '', address: '', phone:0, roleSet:this.participantRole, groupList:this.PersonGroup };

  this.personService.create(this.client).subscribe(savedClient=> console.log(savedClient));

  }
  //fonction de création du groupe
  createGroupe(){

    this.reservationGroup= {id: this.reservationSelected.id, bedroomNumber: this.reservationSelected.bedroomNumber, globalPrice: this.reservationSelected.globalPrice, date : this.reservationSelected.date, pensionType: this.reservationSelected.pensionType ,trip: this.reservationSelected.trip};
    this.groupReservation.push(this.reservationGroup);
    this.group={reservationSet: this.groupReservation};
    this.groupService.create(this.group).subscribe(savedGroup => this.groupSaved = savedGroup);
  }
  //fonction de mise à jour de la réservation pour mettre le groupe
  updateReservation(group){
    this.reservationToUpdate = {id: this.reservationSelected.id, bedRoomNumber: this.reservationSelected.bedRoomNumber, globalPrice: this.reservationSelected.globalPrice, date : this.reservationSelected.date, pensionType: this.reservationSelected.pensionType , paymentSet: this.reservationSelected.paymentSet,trip: this.reservationSelected.trip, groupM : group}
    this.reservationService.update(this.reservationToUpdate.id,this.reservationToUpdate).subscribe(reserveretour => console.log("ICi c'est le retour vers le front" + reserveretour));

  }

  //sauvegarde de la réservationavantchangementd'écran
  transfertReservation(reservation){
    this.reservationService.reservationToUpdate = this.reservationToUpdate;
  }

}

