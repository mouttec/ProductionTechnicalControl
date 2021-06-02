import { ProfilPartnerPassword } from 'src/app/models/profilPartner.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PartnerService } from 'src/app/services/partner.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {

  updatePassword: FormGroup;
  partners: ProfilPartnerPassword[];
  partnerSubscription: Subscription;
  idPartner = JSON.parse(localStorage.getItem('idPartner'));
  constructor(private partnerService: PartnerService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.partnerSubscription = this.partnerService.partnerSubject.subscribe(
      (partners: ProfilPartnerPassword[]) => {
        this.partners = partners;
      }
    );
    this.partnerService.ReadListPartner();
    this.initFormUpdatePassword();
  }

  initFormUpdatePassword() {
    this.updatePassword = this.formBuilder.group(
      {
        password: ['', Validators.required]
      }
    );
  }

  onSubmitFormUpdatePassword(){
    const formValue = this.updatePassword.value;
    const updatePassword = new ProfilPartnerPassword(
      formValue['password']
    );
    updatePassword.idPartner = this.idPartner;
    this.partnerService.updatePartnerPassword(updatePassword);
    this.router.navigate(['/booking']);
  }
}
