import {Component, ElementRef, OnInit, signal, ViewChild} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {HttpClient} from '@angular/common/http';

interface ExampleDTO {
  id: number;
  category: string;
  exampleTitle: string;
  rightAnswer: string;
  answer: string | null;
  isCorrect: boolean | null;
}

interface UnicornBadgeDTO {
  name: string;
}

interface ResultResponse {
  success: boolean;
  isAccomplished: boolean;
  unicornBadges: UnicornBadgeDTO[];
  category: string;
  message?: string;
}

@Component({
  selector: 'app-addition',
  imports: [FormsModule, RouterLink],
  templateUrl: './addition.component.html',
  styleUrl: './addition.component.css'
})
export class AdditionComponent implements OnInit {

  private readonly apiUrl = 'http://localhost:8080/api';

  @ViewChild('successSound')
  successSound!: ElementRef<HTMLAudioElement>;

  @ViewChild('failureSound')
  failureSound!: ElementRef<HTMLAudioElement>;

  example = signal<ExampleDTO | null>(null);

  answer = signal('');

  successMessage = signal<string | null>(null);
  failureMessage = signal<string | null>(null);

  unicorns = signal<UnicornBadgeDTO[]>([]);

  isLoading = signal(true);

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.loadExample();
  }

  loadExample(): void {
    this.isLoading.set(true);

    this.http.get<ExampleDTO>(`${this.apiUrl}/addition`)
      .subscribe({
        next: (example) => {
          this.example.set(example);
          this.answer.set('');
          this.isLoading.set(false);
        },

        error: (error) => {
          console.error('Error loading addition example:', error);
          this.isLoading.set(false);
        }
      });
  }

  checkAnswer(): void {
    const currentExample = this.example();
    const currentAnswer = this.answer();

    if (!currentExample || !currentAnswer.trim()) {
      return;
    }

    this.successMessage.set(null);
    this.failureMessage.set(null);

    const request: ExampleDTO = {
      ...currentExample,
      answer: currentAnswer
    };

    this.http.post<ResultResponse>(
      `${this.apiUrl}/result`,
      request
    ).subscribe({
      next: (result) => {

        this.unicorns.set(result.unicornBadges);

        if (result.success) {

          this.successMessage.set(
            result.message ?? 'JUPÍ, SPRÁVNĚ! :)'
          );

          this.successSound.nativeElement.play()
            .catch(error =>
              console.log('Error playing success sound:', error)
            );

          if (result.isAccomplished) {

            // All unicorns accomplished.
            // This corresponds to the old redirect to /success.
            // Navigate there here if you have a success page.

          } else {

            // Equivalent of the old redirect back to /addition.
            this.loadExample();
          }

        } else {

          this.failureMessage.set(
            result.message ?? 'ZKUS TO ZNOVU! :('
          );

          this.failureSound.nativeElement.play()
            .catch(error =>
              console.log('Error playing failure sound:', error)
            );
        }
      },

      error: (error) => {
        console.error('Error checking answer:', error);
      }
    });
  }

  removeRainbowBorder(): void {
    this.successMessage.set(null);
  }
}
