import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[color-type]',
})
export class ColorTypeDirective implements AfterViewInit {
  @Input() type!: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  private getTypeColor(type: string): string {
    const typeColors: { [key: string]: string } = {
      Normal: 'gray',
      Feu: 'red',
      Eau: 'blue',
      Plante: 'green',
      Électrik: '#FFD808',
      Glace: 'lightblue',
      Combat: 'orange',
      Poison: 'purple',
      Sol: 'brown',
      Vol: 'skyblue',
      Psy: 'pink',
      Insecte: 'limegreen',
      Roche: 'tan',
      Spectre: 'indigo',
      Dragon: 'darkviolet',
      Ténèbres: 'black',
      Acier: 'silver',
      Fée: 'pink',
    };

    return typeColors[type] || 'white';
  }

  ngAfterViewInit() {
    this.setBackgroundColor(this.type);
  }

  setBackgroundColor(type: string) {
    this.renderer.setStyle(
      this.el.nativeElement,
      'background-color',
      this.getTypeColor(type)
    );
  }
}
