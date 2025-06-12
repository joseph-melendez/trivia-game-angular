import { Component, input } from '@angular/core';
import { Difficulty as DifficultyType } from '../../types/Difficulty';

@Component({
  selector: 'app-difficulty',
  imports: [],
  templateUrl: './difficulty.html',
  styleUrl: './difficulty.scss'
})
export class Difficulty {
  difficulty = input<DifficultyType>(DifficultyType.any);

  formattedDifficulty(difficulty: DifficultyType) {
    let colors = '';

    if (difficulty === DifficultyType.easy) {
        colors = 'background-color-green color-white';
    } else if (difficulty === DifficultyType.medium) {
        colors = 'background-color-orange color-white';
    } else {
        // Hard or an issue of some sort
        colors = 'background-color-red color-white';
    }

    return 'pill ' + colors;
  }
}