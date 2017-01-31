const app = require('express')();
const x = require('x-ray')();

app.get('/dv', (req, res) => {
  res.header("Content-Type", "application/json; charset=utf-8");
  const mblStream = x('http://www.dv.is', '.featured_story, .headlines, .story', [{
    label: '.section_banner',
    title: 'h1',
    link: 'a@href',
    picture: 'img@src',
    teaser: 'h2',
    details: x('a@href', '.text_body')
  }]).stream();
  mblStream.pipe(res);
});

app.get('/guardian', (req, res) => {
  res.header("Content-Type", "application/json; charset=utf-8");
  const guardianStream = x('https://www.theguardian.com', '.fc-item__container', [{
    title: 'h3 a.fc-sublink__link',
    link: 'h3 a.fc-sublink__link@href',
    details: x('h3 a.fc-sublink__link@href', '.content__article-body')
  }]).stream();
  guardianStream.pipe(res);
});

app.get('/ruv', function(req, res) {
  res.header("Content-Type", "application/json; charset=utf-8");
  var stream = x('http://www.ruv.is', '.article-summary', [{
    title: '.article-summary-link a@title',
    link: '.article-summary-link a@href',
    picture: 'img@src',
    details: x('.article-summary-link a@href', ['div.field-item.even'])
  }])
  .stream();
  stream.pipe(res);
});

app.get('/tix', (req, res) => {
  res.header("Content-Type", "application/json; charset=utf-8");
  const mblStream = x('http://www.tix.is', '.o1o3, .o1o4', [{
    title: 'h1',
    link: 'li[data-short="Nánar"] a@href',
    buy: 'li[data-short="Kaupa"] a@href',
    picture: '.image@data-original',
    date: 'h2',
    venue: 'h3',
    details: x('a@href', '.details')
  }]).stream();
  mblStream.pipe(res);
});

app.get('/mbl', (req, res) => {
  res.header('Content-Type', 'application/json; charset=utf-8');
  const mblStream = x('http://www.mbl.is', '.topnews, .teaser', [{
    title: 'h1 a.fgc',
    link: 'h1 a.fgc@href',
    picture: 'img@src',
    teaser: '.texti',
    details: x('h1 a.fgc@href', '.main-layout')
  }]).stream();
  mblStream.pipe(res);
});

app.get('/visir', (req, res) => {
  res.header('Content-Type', 'application/json; charset=utf-8');
  const visirStream = x('http://www.visir.is', '.df-article-content', [{
    title: 'h3 a span',
    link: 'h3 a@href',
    picture: 'img@src',
    details: x('h3 a@href', '.paragraph')
  }]).stream();
  visirStream.pipe(res);
});
app.get('/tskoliMenu', (req, res) => {
  res.header('Content-Type', 'application/json; charset=utf-8');
  const tskoliStream = x('http://www.tskoli.is/thjonusta/motuneyti/matsedill', 'tr', [{
    week: 'th',
    day: 'td:nth-child(1)',
    menu: 'td:nth-child(2)'
  }]).stream();
  tskoliStream.pipe(res);
});
app.get('/flightArrivals', (req, res) => {
  res.header('Content-Type', 'application/json; charset=utf-8');
  const arrivalsStream = x('http://www.kefairport.is/Flugaaetlun/Komur/', 'tr', [{
    Day: 'td:nth-child(1)',
    FlightNr: 'td:nth-child(2)',
    Airline: 'td:nth-child(3)',
    From: 'td:nth-child(4)',
    Arrival: 'td:nth-child(5)',
    Status: 'td:nth-child(6)'
  }]).stream();
  arrivalsStream.pipe(res);
});
app.get('/flightDeparture', (req, res) => {
  res.header('Content-Type', 'application/json; charset=utf-8');
  const departStream = x('http://www.kefairport.is/Flugaaetlun/Brottfarir/', 'tr', [{
    Day: 'td:nth-child(1)',
    FlightNr: 'td:nth-child(2)',
    Airline: 'td:nth-child(3)',
    To: 'td:nth-child(4)',
    Deparures: 'td:nth-child(5)',
    Status: 'td:nth-child(6)'
  }]).stream();
  departStream.pipe(res);
});

app.get('/vedur', (req, res) => {
  res.header("Content-Type", "application/json; charset=utf-8");
  const vedurStream = x('http://www.vedur.is', '#fpf_ecol', [{
    title: '#fpf_txttit',
    details: 'p span',
    date: '.detailinfo'
  }]).stream();
  vedurStream.pipe(res);
});

app.get('/bleikt', (req, res) => {
  res.header("Content-Type", "application/json; charset=utf-8" );
  const bleiktStream = x('http://www.bleikt.is', 'article',  [{
    title: '.entry-header',
    link: '.entry-header a@href',
    picture: 'img@src',
    teaser: '.entry-content, .entry-excerpt',
    details: x('a@href', '.entry-content')
  }]).stream();
  bleiktStream.pipe(res);
});

app.listen(3001, () => {
  console.log('server running on port 3001');
});
