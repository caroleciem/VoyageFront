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
  createClientForm;
  createParticipantForm;
  client : Persons;
  group: Group;
  groupPerson : Persons[];
  groupReservation: Reservation[];
  personRole: Role[] = [];
  participantRole: Role[] = [];
  hasOrganizer: boolean=false;
  reservationSelected: Reservation;
  roleOrga : Role;
  rolePart: Role;
  rolePay:Role;


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
    this.personService.selectAllRole().subscribe(dataList => this.personService.roleList = dataList );
  }
  onCreateClient(createClient) {

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
    //select Id for rôle
    if (createClient.isOrga){

    this.personRole.push(this.roleOrga);

    }
    if (createClient.isPart){

      this.personRole.push(this.rolePart);
    }
    if (createClient.isPay){

      this.personRole.push(this.rolePay);
    }

    this.client ={civility: createClient.civility ,name: createClient.name,firstName :createClient.firstname, email : createClient.email, zipCode :createClient.zipCode, country:createClient.country, city : createClient.city, address: createClient.address, phone:createClient.phone, roleSet:this.personRole };

    this.personService.create(this.client).subscribe(savedClient => this.createGroupe(savedClient));
    this.hasOrganizer = true;
  }

  onCreateParticipant(createParticipant){

    if (createParticipant.name2 == "") {
      alert('le nom doit être renseigné');

      return false;
    }
    if (createParticipant.firstname2 == "") {
      alert('le prénom doit être renseigné');

      return false;
    }


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
  //select Id for rôle

  if (createParticipant.isPart2){

    this.participantRole.push(this.rolePart);
  }
  if (createParticipant.isPay2){

    this.participantRole.push(this.rolePay);
  }

  this.client ={civility: '' ,name: createParticipant.name2 ,firstName :createParticipant.firstname2, email : '', zipCode :0, country: '', city : '', address: '', phone:0, roleSet:this.participantRole };

  this.personService.create(this.client).subscribe(savedClient=> console.log(savedClient));

  }

  createGroupe(client){
    this.groupPerson.push(client);
    this.groupReservation.push(this.reservationSelected);
    this.group={personSet: this.groupPerson, reservationSet: this.groupReservation};
    this.groupService.create(this.group).subscribe(savedGroup => console.log(savedGroup));
  }
}

