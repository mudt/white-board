import { NgModule } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowsAlt, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [],
  imports: [FontAwesomeModule],
  exports: [FontAwesomeModule],
})
export class IconFontAwasomeModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faArrowsAlt, faPlus, faTrash);
  }
}
