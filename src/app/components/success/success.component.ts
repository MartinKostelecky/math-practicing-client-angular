import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  signal
} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-success',
  imports: [RouterLink],
  templateUrl: './success.component.html',
  styleUrl: './success.component.css'
})
export class SuccessComponent implements AfterViewInit {

  @ViewChild('accomplishedMelody')
  accomplishedMelody!: ElementRef<HTMLAudioElement>;

  accomplishedMessage = signal(
    history.state.accomplishedMessage
    ?? '!!!GRATULUJI, MÁŠ VŠECH DESET JEDNOROŽCŮ!!!'
  );

  unicorns = signal(
    Array.from({ length: 10 }, (_, index) => index)
  );

  ngAfterViewInit(): void {
    this.accomplishedMelody.nativeElement.play()
      .catch(error =>
        console.log('Error playing accomplished melody:', error)
      );
  }
}
