import fgrequest from 'request';
import cheerio from 'cheerio';


var gg = []
const URL = "https://news.ycombinator.com/news"
function scrapeWeb() {
fgrequest('http://www.google.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage.
  }
})
}

export default scrapeWeb

/*
request("https://news.ycombinator.com/news", function(error, response, body) {
  if(error) {
    console.log("Error: " + error);
  }
  console.log("Status code: " + response.statusCode);

  var $ = cheerio.load(body);

  $('tr.athing:has(td.votelinks)').each(function( index ) {
    var title = $(this).find('td.title > a').text().trim();
    var link = $(this).find('td.title > a').attr('href');
    fs.appendFileSync('hackernews.txt', title + '\n' + link + '\n');
  });

});
*/