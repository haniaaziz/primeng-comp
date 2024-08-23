import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TreeSelectModule } from 'primeng/treeselect';
import { NodeService } from '../../../../services/nodeservice';

@Component({
  selector: 'app-treeselect',
  standalone: true,
  imports: [FormsModule, TreeSelectModule],
  templateUrl: './treeselect.component.html',
  styleUrl: './treeselect.component.css',
 providers: [NodeService]

})
export class TreeselectComponent {
    nodes!: any[];

    selectedNodes: any;

    constructor(private nodeService: NodeService) {
        this.nodeService.getFiles().then((files) => (this.nodes = files));
    }
}
