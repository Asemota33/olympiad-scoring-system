import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, HostListener, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';

@Component({
    selector: 'app-edit-score-progression',
    templateUrl: './edit-score-progression.component.html',
    styleUrls: ['./edit-score-progression.component.scss'],
    // standalone: true,
    // imports: [CommonModule, FormsModule, ReactiveFormsModule, MatDialogModule, MatProgressBarModule, MatButtonModule],
})
export class EditScoreProgressionComponent implements OnInit {
    tournamentForm!: FormGroup;
    formInitialized = false;

    bronzeTeamANameControl!: FormControl;
    bronzeTeamBNameControl!: FormControl;
    bronzeTeamAScoreControl!: FormControl;
    bronzeTeamBScoreControl!: FormControl;

    finalTeamANameControl!: FormControl;
    finalTeamBNameControl!: FormControl;
    finalTeamAScoreControl!: FormControl;
    finalTeamBScoreControl!: FormControl;

    modalOpen: boolean = false;

    constructor(private fb: FormBuilder,  private el: ElementRef,private dialog: MatDialog
     ) { }

    ngOnInit() {
        this.tournamentForm = this.fb.group({
            quarterFinals: this.fb.array([
                this.createMatch(),
                this.createMatch(),
                this.createMatch(),
                this.createMatch(),
            ]),
            semiFinals: this.fb.array([
                this.createMatch(),
                this.createMatch(),
            ]),
            bronze: this.createMatch(),
            final: this.createMatch(),
        });

        this.bronzeTeamANameControl = this.getControl('bronze.teamA.name');
        this.bronzeTeamBNameControl = this.getControl('bronze.teamB.name');
        this.bronzeTeamAScoreControl = this.getControl('bronze.teamA.score');
        this.bronzeTeamBScoreControl = this.getControl('bronze.teamB.score');

        this.finalTeamANameControl = this.getControl('final.teamA.name');
        this.finalTeamBNameControl = this.getControl('final.teamB.name');
        this.finalTeamAScoreControl = this.getControl('final.teamA.score');
        this.finalTeamBScoreControl = this.getControl('final.teamB.score');
        this.formInitialized = true;
    }

    getControlArrayPath( formName: string, index: number, path: string) {
        return this.getControlArray(formName, `${index}.${path}`);
    }

    getFormArray(form: FormArray, index: number): FormGroup {
        return form.controls[index] as FormGroup;
    }

    getControlArray(formName: string, path: string): FormControl {
        const paths = path.split('.');
        const form = this.tournamentForm?.get(formName) as FormArray;
        const control = form?.controls.at(parseInt(paths[0]))?.get(paths[1]);
        const value = control?.get(paths[2]);

        return value as FormControl;
    }

    getControl(path: string): FormControl {
        const paths = path.split('.');
        const form = this.tournamentForm?.get(paths[0]);
        const control = form?.get(paths[1]);
        const value = control?.get(paths[2]);

        return value as FormControl;
    }

    createMatch() {
        return this.fb.group({
            teamA: this.fb.group({
                name: ['', Validators.required],
                score: ['', [Validators.required, Validators.min(0)]],
            }),
            teamB: this.fb.group({
                name: ['', Validators.required],
                score: ['', [Validators.required, Validators.min(0)]],
            }),
        });
    }

    // Method to submit the form
    submitForm() {
        if (this.tournamentForm.valid) {
            console.log(this.tournamentForm.value); // Process form data
        } else {
            console.log('Form is invalid');
        }
    }


    closeModal() {
        // Check if form is dirty and ask for confirmation before closing
        if (this.tournamentForm.dirty) {
          const confirmClose = window.confirm('You have unsaved changes. Are you sure you want to close?');
          if (confirmClose) {
            this.dialog.closeAll();
          }
        } else{
            this.dialog.closeAll();
        }
      }

    get quarterFinals() {
        return this.tournamentForm.get('quarterFinals') as FormArray;
    }

    // Getter for semiFinals FormArray to avoid null issues
    get semiFinals() {
        return this.tournamentForm.get('semiFinals') as FormArray;
    }

    // Getter for bronze FormGroup to avoid null issues
    get bronze() {
        return this.tournamentForm.get('bronze') as FormGroup;
    }

    // Getter for final FormGroup to avoid null issues
    get final() {
        return this.tournamentForm.get('final') as FormGroup;
    }
}
