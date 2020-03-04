import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { Persons } from '../persons';
import {PersonService} from '../person.service';

@Component({
  selector: 'app-clientcreate',
  templateUrl: './clientcreate.component.html',
  styleUrls: ['./clientcreate.component.css']
})
export class ClientcreateComponent implements OnInit {
  createClientForm;
  client : Persons;

  constructor(private personService: PersonService,private formBuilder: FormBuilder) {
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
      isOrga:'true',
      name2:'',
      firstname2:'',
      isPart2:'true',
      isPay2:'',
      name3:'',
      firstname3:'',
      isPart3:'true',
      isPay3:'',
      name4:'',
      firstname4:'',
      isPart4:'true',
      isPay4:''
    })
   }

  ngOnInit() {
  }
  onSubmit(createClient) {
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
    this.client ={civility: createClient.civility ,name: createClient.name,firstName :createClient.firstname, email : createClient.email, zipCode :createClient.zipCode, country:createClient.country, city : createClient.city, address: createClient.address, phone:createClient.phone };
    console.log(createClient.civility);
    console.log(createClient.name);
    console.log(this.client);
    this.personService.create(this.client).subscribe(savedClient=> console.log(savedClient));

  }

}

