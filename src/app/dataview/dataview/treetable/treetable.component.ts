import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { TreeTableModule } from 'primeng/treetable';
import { NodeService } from '../../../../services/nodeservice';


interface Column {
    field: string;
    header: string;
}
@Component({
  selector: 'app-treetable',
  standalone: true,
  imports: [TreeTableModule, ButtonModule, CommonModule],
  templateUrl: './treetable.component.html',
  styleUrl: './treetable.component.css',
      providers: [NodeService]

})
export class TreetableComponent implements OnInit {
    files!: TreeNode[];

    cols!: Column[];

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFilesystem().then((files) => (this.files = files));
        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' },
            { field: '', header: '' }
        ];
    }
}
