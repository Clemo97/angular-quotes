import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { QuoteComponent } from './components/quote/quote.component';
import { QuoteDetailsComponent } from './components/quote-details/quote-details.component';
import { QuoteFormComponent } from './components/quote-form/quote-form.component';
import { VoteComponent } from './components/vote/vote.component';
import { HighestVoteDirective } from './directives/highest-vote.directive';
import { TimePassedPipe } from './pipes/time-passed.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuoteComponent,
    QuoteDetailsComponent,
    QuoteFormComponent,
    VoteComponent,
    HighestVoteDirective,
    TimePassedPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
