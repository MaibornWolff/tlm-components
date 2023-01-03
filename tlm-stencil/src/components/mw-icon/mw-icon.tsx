import { Build, Component, Element, h, Host, Prop, State, Watch } from '@stencil/core';
import { fetchIcon } from './utils';
import { Size } from '../mw-avatar/mw-avatar';

const getDimensionForSize = (size: Size) =>
  ({
    'large': 27,
    'medium': 18,
    'small': 12,
    'x-small': 9,
  }[size]);

@Component({
  assetsDirs: ['./assets'],
  tag: 'mw-icon',
  styleUrl: 'mw-icon.css',
  shadow: true,
})
export class LibraryNameIcon {
  @Element() el: HTMLElement;
  /**
   * The icon name to be rendered
   */
  @Prop() icon: string = null;
  /**
   * Size variant
   */
  @Prop() size: Size = 'medium';
  /**
   * Overwrite default color
   */
  @Prop() color?: string;

  @State() private pathData: string;
  @State() private visible = false;
  @State() private baseDimension = getDimensionForSize('medium');
  private intersectionObserver: IntersectionObserver;
  private dimension: number;
  private scale: number;

  connectedCallback(): void {
    this.waitUntilVisible(() => {
      this.visible = true;
      this.loadIconPathData();
    });
  }

  disconnectedCallback(): void {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
      this.intersectionObserver = null;
    }
  }

  async componentWillLoad(): Promise<void> {
    this.loadIconPathData();
    this.dimension = getDimensionForSize(this.size);
    this.scale = this.dimension / this.baseDimension;
  }

  render() {
    return (
      <Host style={{ height: `${this.dimension}px` }}>
        <svg
          style={this.color && { color: this.color }}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          height={this.dimension}
          width={this.dimension}
          viewBox={`0 0 ${this.dimension} ${this.dimension}`}
        >
          <path style={{ transform: `scale(${this.scale})` }} d={this.pathData || ''} />
        </svg>
      </Host>
    );
  }

  @Watch('icon') private async loadIconPathData(): Promise<void> {
    const { icon, visible } = this;

    if (!Build.isBrowser || !icon || !visible) {
      return;
    }

    this.pathData = await fetchIcon({ icon });
  }

  private waitUntilVisible(callback: () => void): void {
    if (!Build.isBrowser || typeof window === 'undefined' || !(window as any).IntersectionObserver) {
      callback();
      return;
    }

    this.intersectionObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.intersectionObserver.disconnect();
            this.intersectionObserver = null;
            callback();
          }
        });
      },
      { rootMargin: '50px' },
    );

    this.intersectionObserver.observe(this.el);
  }
}