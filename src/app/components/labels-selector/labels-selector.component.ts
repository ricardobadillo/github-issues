// Angular.
import { NgStyle } from '@angular/common';
import { Component, inject, input } from '@angular/core';

// Modelos.
import { GitHubLabel } from '../../core/models';

// Servicios.
import { IssuesService } from '../../core/services/issues.service';

@Component({
  imports: [NgStyle],
  selector: 'issues-labels-selector',
  standalone: true,
  templateUrl: './labels-selector.component.html',
})
export class LabelsSelectorComponent {
  public labels = input.required<Array<GitHubLabel>>();
  public issuesService = inject(IssuesService);

  public isSelected(labelName: string): boolean {
    return this.issuesService.selectedLabels().has(labelName);
  }

  public onToggleLabel(labelName: string): void {
    this.issuesService.toggleLabel(labelName);
  }
}
