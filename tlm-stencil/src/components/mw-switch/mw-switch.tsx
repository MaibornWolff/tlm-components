import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'mw-switch',
  styleUrl: 'mw-switch.css',
  shadow: true,
})
export class MwSwitch {
  checkbox: HTMLInputElement;
  /**
   * Must be provided for automated testing
   */
  @Prop() testId!: string;
  /**
   * Visually and functionally disable switch
   */
  @Prop() disabled?: boolean;
  /**
   * Fixed label to be displayed next to the toggle switch
   */
  @Prop() label?: string;
  /**
   * Label to be shown when switch state is checked. Overrides label prop
   */
  @Prop() onText?: string;
  /**
   * Label to be shown when switch state is unchecked. Overrides label prop
   */
  @Prop() offText?: string;
  /**
   * Switch state
   */
  @Prop({ mutable: true }) checked: boolean = false;

  toggleSwitch(event: Event) {
    (event.target as HTMLInputElement).blur();
    // @ts-ignore
    (event.path[1] as HTMLInputElement).blur();
    this.checked = this.checkbox.checked;
  }

  hasLabel: boolean;
  hasOnOffLabel: boolean;

  componentWillLoad() {
    this.hasLabel = !!this.label;
    this.hasOnOffLabel = !!this.onText && !!this.offText;
  }

  render() {
    return (
      <Host>
        <label test-id={this.testId} onClick={this.toggleSwitch.bind(this)} class="switch">
          <input disabled={this.disabled} ref={(el: HTMLInputElement) => (this.checkbox = el)} type="checkbox" checked={this.checked} />
          <span class="slider round"></span>
        </label>
        {this.hasLabel && <span class="label">{this.label}</span>}
        {this.hasOnOffLabel && <span class="label">{this.checked ? this.onText : this.offText}</span>}
      </Host>
    );
  }
}
