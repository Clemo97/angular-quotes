import { Component, OnInit } from '@angular/core';
import { Quote } from '../../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(
      1,
      'I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times.',
      0,
      0,
      'Bruce Lee',
      'Clement Lumumba'
    ),
    new Quote(
      2,
      'Education is the most powerful weapon which you can use to change the world.',
      0,
      0,
      'Nelson Mandela',
      'Myra Bernadette'
    ),
    new Quote(
      3,
      'Equipped with his five senses, man explores the universe around him and calls the adventure Science.',
      0,
      0,
      'Edwin Hubble',
      'Australian Gregory'
    ),
    new Quote(
      4,
      'I do not always know what I want, but I do know what I don\'t want.',
      0,
      0,
      'Stanley Kubrick',
      'Jim Nelson'
    ),
  ];

  findHighestUpvote(arr: any[]) {
    arr.forEach((item: { maxUpvote: boolean }) => {
      item.maxUpvote = false;
    });
    let newArr = arr.map((item: { upvote: any }) => {
      return item.upvote;
    });
    let highestVoteIndex = newArr.indexOf(Math.max(...newArr));
    return arr.forEach((item: { maxUpvote: boolean }, index: any) => {
      if (index === highestVoteIndex) {
        item.maxUpvote = true;
      }
    });
  }
  newQuote(quote: Quote) {
    this.quotes.push(quote);
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 250);
  }

  constructor() {}

  ngOnInit(): void {}
}
