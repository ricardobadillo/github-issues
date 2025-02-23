// Angular.
import { NgStyle } from '@angular/common';
import { Component, input } from '@angular/core';

// Modelos.
import { GitHubLabel } from '../../core/models';

@Component({
  imports: [NgStyle],
  selector: 'issues-labels-selector',
  standalone: true,
  templateUrl: './labels-selector.component.html',
})
export class LabelsSelectorComponent {
  public labels = input.required<Array<GitHubLabel>>();
}
