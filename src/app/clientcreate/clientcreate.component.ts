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
  group;
  PersonGroup : Group[] = [];
  groupReservation: Reservation[] = [];
  personRole: Role[] = [];
  participantRole: Role[] = [];
  hasOrganizer: boolean=false;
  reservationSelected;
  roleOrga : Role;
  rolePart: Role;
  rolePay:Role;
  clientGroup;
  reservationGroup;
  reservationToUpdate;
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
    this.personService.selectAllRole().subscribe(dataList => this.personService.roleList = dataList );
    this.createGroupe();
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
    console.log("this.groupSaved" + this.groupSaved);
    this.PersonGroup.push(this.groupSaved);
    this.client ={civility: createClient.civility ,name: createClient.name,firstName :createClient.firstname, email : createClient.email, zipCode :createClient.zipCode, country:createClient.country, city : createClient.city, address: createClient.address, phone:createClient.phone, roleSet:this.personRole, groupList:this.PersonGroup };
    this.personService.create(this.client).subscribe(savedClient => console.log(savedClient));
    this.updateReservation(this.groupSaved);
    this.hasOrganizer = true;
  }

  onCreateParticipant(createParticipant){
    this.participantRole = [];
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

  this.client ={civility: '' ,name: createParticipant.name2 ,firstName :createParticipant.firstname2, email : '', zipCode :0, country: '', city : '', address: '', phone:0, roleSet:this.participantRole, groupList:this.PersonGroup };

  this.personService.create(this.client).subscribe(savedClient=> console.log(savedClient));

  }

  createGroupe(){

    this.reservationGroup= {id: this.reservationSelected.id, bedroomNumber: this.reservationSelected.bedroomNumber, globalPrice: this.reservationSelected.globalPrice, date : this.reservationSelected.date, pensionType: this.reservationSelected.pensionType ,trip: this.reservationSelected.trip};
    console.log("reservationselected avant push" + this.reservationSelected.id);
    this.groupReservation.push(this.reservationGroup);
    this.group={reservationSet: this.groupReservation};
    this.groupService.create(this.group).subscribe(savedGroup => this.groupSaved = savedGroup);
  }
  updateReservation(group){
    console.log("passage dans l'update");
    this.reservationToUpdate = {id: this.reservationSelected.id, bedRoomNumber: this.reservationSelected.bedroomNumber, globalPrice: this.reservationSelected.globalPrice, date : this.reservationSelected.date, pensionType: this.reservationSelected.pensionType ,trip: this.reservationSelected.trip, groupM : group.id}
    this.reservationService.update(this.reservationToUpdate.id,this.reservationToUpdate).subscribe(reserveretour => console.log("ICi c'est le retour vers le front" + reserveretour));
  }

}

