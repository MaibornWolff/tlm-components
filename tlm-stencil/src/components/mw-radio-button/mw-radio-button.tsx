import { Component, Element, h, Prop } from '@stencil/core';
import { HTMLStencilElement } from '@stencil/core/internal';

@Component({
  tag: 'mw-radio-button',
  styleUrl: 'mw-radio-button.css',
  shadow: false,
})
export class MwRadioButton {
  @Element() hostElement: HTMLStencilElement;
  @Prop() disabled?: boolean;
  @Prop({ mutable: true }) checked?: boolean;
  @Prop() value: string;
  @Prop() name: string;

  render() {
    return (
      <label class="container">
        <input id="radio-input" type="radio" value={this.value} name={this.name} checked={this.checked} disabled={this.disabled} />
        <span class="mw-radio-button"></span>
        <slot></slot>
      </label>
    );
  }

}
