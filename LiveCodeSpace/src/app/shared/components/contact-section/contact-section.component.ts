// Angular imports
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// Services
import { EmailService } from '../../services/email.service';
import { ToastService } from '../../services/toast.service';

// Interfaces
import { IEmail } from '../../interfaces/interfaces';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-section.component.html'
})
export class ContactSectionComponent {

  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: EmailService, 
    private toastService: ToastService
  ){
    // Initialize the form group with form controls and validators
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.maxLength(100)]],
      message: ['', [Validators.required, Validators.maxLength(500)]],
    });
  }

  sendEmail(){

    if (this.contactForm.invalid) {
      this.toastService.showToast('Please fill the form correctly.', 'warning');
      return;
    }

    const body: IEmail = this.contactForm.value

    // Comment line code test
    // let body: IEmail = {
    //   "subject": "Test from frontend",
    //   "email": "santiago_vp_25@hotmail.com",
    //   "message": "Test from frontend static"
    // }
    this.service.sendEmail(body).subscribe({
      next: (res) =>{
        console.log(res)
        this.toastService.showToast(res.message, 'success')
      },
      error: (error) =>{
        console.error(error)
        this.toastService.showToast(error.message, 'error')
      }
    })
  }

  // Helper method for template to check form control errors
  hasError(controlName: string, errorType: string): boolean {
    const control = this.contactForm.get(controlName);
    return !!((control?.touched && control.hasError(errorType)));
  }

}
