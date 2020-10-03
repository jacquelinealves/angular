import { Component } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css'],
})
export class TicTacToeComponent {
  currentPlayer: string = 'O';
  winner: string = '';

  board: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];

  processPlay(line: number, col: number) {
    // verifica quais são as linhas e colunas e quais estão vazias
    if (this.board[line][col] === ''&& this.winner === '') {
      this.board[line][col] = this.currentPlayer;

      // verifica o vencedor
      if (this.checkWinner(this.currentPlayer)) {
        this.winner = this.currentPlayer;
      }

      // verifica se o jogador é X ou O
      if (this.currentPlayer == 'O') {
        this.currentPlayer = 'X';
      } else {
        this.currentPlayer = 'O';
      }
    }
  }

  // função da verificação do vencedor
  checkWinner(player: string): boolean {
    for (let i = 0; i < this.board.length; i++) {
      if (this.board[i][0] == player && this.board[i][1] == player && this.board[i][2]) {
        return true;
      }
    }
    for (let i = 0; i < this.board.length; i++) {
      if (this.board[0][i] == player && this.board[1][i] == player && this.board[2][i]) {
        return true;
      }
    }
    if (this.board[0][0] == player && this.board[1][1] == player && this.board[2][2]) {
      return true;
    }
    if (this.board[0][2] == player && this.board[1][1] == player && this.board[2][0]) {
      return true;
    }
  }

  // reiniciar a partida
  reset() {
    this.currentPlayer = 'O';
    this.winner = '';

    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
  }

}
