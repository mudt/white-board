import { NgModule } from '@angular/core';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { faArrowsAlt, faPlus } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [],
  imports: [FontAwesomeModule],
  exports: [FontAwesomeModule],
})
export class IconFontAwasomeModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faArrowsAlt, faPlus);
  }
}
