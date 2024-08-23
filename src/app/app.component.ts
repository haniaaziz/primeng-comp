import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AutocompleteComponent } from './forms/autocomplete/autocomplete.component';
import { CalenderComponent } from './forms/autocomplete/calender/calender.component';
import { CascadeSelectComponent } from './forms/autocomplete/cascade-select/cascade-select.component';
import { CheckboxComponent } from './forms/autocomplete/checkbox/checkbox.component';
import { ChipsComponent } from './forms/autocomplete/chips/chips.component';
import { ColorpickerComponent } from './forms/autocomplete/colorpicker/colorpicker.component';
import { DropdownComponent } from './forms/autocomplete/dropdown/dropdown.component';
import { FloatlabelComponent } from './forms/autocomplete/floatlabel/floatlabel.component';
import { IconfieldComponent } from './forms/autocomplete/iconfield/iconfield.component';
import { InputgroupComponent } from './forms/autocomplete/inputgroup/inputgroup.component';
import { InputmaskComponent } from './forms/autocomplete/inputmask/inputmask.component';
import { InputnumberComponent } from './forms/autocomplete/inputnumber/inputnumber.component';
import { InputotpComponent } from './forms/autocomplete/inputotp/inputotp.component';
import { KnobComponent } from './forms/autocomplete/knob/knob.component';
import { ListboxComponent } from './forms/autocomplete/listbox/listbox.component';
import { MultiselectComponent } from './forms/autocomplete/multiselect/multiselect.component';
import { PasswordComponent } from './forms/autocomplete/password/password.component';
import { RadiobuttonComponent } from './forms/autocomplete/radiobutton/radiobutton.component';
import { RatingComponent } from './forms/autocomplete/rating/rating.component';
import { SelectbuttonComponent } from './forms/autocomplete/selectbutton/selectbutton.component';
import { SliderComponent } from './forms/autocomplete/slider/slider.component';
import { TreeselectComponent } from './forms/autocomplete/treeselect/treeselect.component';
import { ButtonComponent } from './buttons/button/button.component';
import { DataviewComponent } from './dataview/dataview/dataview.component';
import { OrgchartComponent } from './dataview/dataview/orgchart/orgchart.component';
import { PaginatorsComponent } from './dataview/dataview/paginators/paginators.component';
import { TableComponent } from './dataview/dataview/table/table.component';
import { Table2Component } from './dataview/dataview/table2/table2.component';
import { TimelineComponent } from './dataview/dataview/timeline/timeline.component';
import { TreeComponent } from './dataview/dataview/tree/tree.component';
import { TreetableComponent } from './dataview/dataview/treetable/treetable.component';
import { AccordionComponent } from './Panel/accordion/accordion.component';
import { DividerComponent } from './Panel/accordion/divider/divider.component';
import { StepperComponent } from './Panel/accordion/stepper/stepper.component';
import { TabviewComponent } from './Panel/accordion/tabview/tabview.component';
import { ToolbarComponent } from './Panel/accordion/toolbar/toolbar.component';
import { ConfirmdialogComponent } from './overlay/confirmdialog/confirmdialog.component';
import { ConfirmpopupComponent } from './overlay/confirmpopup/confirmpopup.component';
import { DialogComponent } from './overlay/dialog/dialog.component';
import { OverlaypanelComponent } from './overlay/overlaypanel/overlaypanel.component';
import { SidebarComponent } from './overlay/sidebar/sidebar.component';
import { BreadcrumbComponent } from './menu/breadcrumb/breadcrumb.component';
import { MenuComponent } from './menu/menu/menu.component';
import { MegamenuComponent } from './menu/megamenu/megamenu.component';
import { BlockUIModule } from 'primeng/blockui';
import { BlockUIComponent } from './misc/block-ui/block-ui.component';
import { ProgressbarComponent } from './misc/progressbar/progressbar.component';
import { CarouselComponent } from './media/carousel/carousel.component';
import { GalleriaComponent } from './media/carousel/galleria/galleria.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,AutocompleteComponent,CalenderComponent,CascadeSelectComponent,CheckboxComponent,ChipsComponent,ColorpickerComponent,DropdownComponent,FloatlabelComponent,IconfieldComponent,InputgroupComponent,InputmaskComponent,InputnumberComponent,InputotpComponent,KnobComponent,ListboxComponent,MultiselectComponent,PasswordComponent,RadiobuttonComponent,RatingComponent,SelectbuttonComponent,SliderComponent,RadiobuttonComponent,TreeselectComponent,ButtonComponent,DataviewComponent,OrgchartComponent,PaginatorsComponent,TableComponent,Table2Component,TimelineComponent,TreeComponent,TreetableComponent,AccordionComponent,DividerComponent,StepperComponent,TabviewComponent,ToolbarComponent,ConfirmdialogComponent,ConfirmpopupComponent,DialogComponent,OverlaypanelComponent,SidebarComponent,BreadcrumbComponent,MenuComponent,MegamenuComponent,BlockUIComponent,ProgressbarComponent,CarouselComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primeng-components';
}
