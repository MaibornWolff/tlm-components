import { Component, Element, Host, Prop, h } from '@stencil/core';
import { HTMLStencilElement } from '@stencil/core/internal';
import classnames from 'classnames';

@Component({
  tag: 'mw-card-image',
  styleUrl: 'mw-card-image.css',
  shadow: true,
})
export class MwCardImage {
  @Element() hostElement: HTMLStencilElement;
  // TODO: support more img props, srcset...
  /**
   * Image source
   */
  @Prop() src: string;
  /**
   * Alt text for the image
   */
  @Prop() alt: string;

  private isFirstChild: boolean;
  private isLastChild: boolean;
  private isOnlyChild: boolean;

  componentWillLoad() {
    const card = this.hostElement.parentNode;
    this.isOnlyChild = card.childElementCount === 1;
    this.isFirstChild = !this.isOnlyChild && this.hostElement.isSameNode(card.firstElementChild);
    this.isLastChild = !this.isOnlyChild && this.hostElement.isSameNode(card.lastElementChild);
  }

  render() {
    return (
      <Host>
        <div class={classnames('card-image', { top: this.isFirstChild, bottom: this.isLastChild, single: this.isOnlyChild })}>
          <img src={this.src} alt={this.alt} />
        </div>
      </Host>
    );
  }
}
