import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PojectOneSharedModule } from 'app/shared/shared.module';
import { JobComponent } from './job.component';
import { JobDetailComponent } from './job-detail.component';
import { JobUpdateComponent } from './job-update.component';
import { JobDeleteDialogComponent } from './job-delete-dialog.component';
import { jobRoute } from './job.route';

@NgModule({
  imports: [PojectOneSharedModule, RouterModule.forChild(jobRoute)],
  declarations: [JobComponent, JobDetailComponent, JobUpdateComponent, JobDeleteDialogComponent],
  entryComponents: [JobDeleteDialogComponent]
})
export class PojectOneJobModule {}
