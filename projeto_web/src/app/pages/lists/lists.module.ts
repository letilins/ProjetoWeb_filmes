import { NgModule } from '@angular/core';
import { SafePipe } from 'src/pipes/pipe.module';
import { CommonModule } from '@angular/common';
import { ListsComponent } from './lists.component';

@NgModule({
  declarations: [ListsComponent],
  exports: [ListsComponent],
  imports: [SafePipe]
})
export class ListsModule {}
