import axios from 'axios'
//var Xray = require('x-ray');
//var cheerio = require('cheerio')

    

function extractStringFromTimeStamp(timeStamp){
    let dateValue = "" + new Date(timeStamp * 1000);
    const len = dateValue.length;
    return dateValue.substr(0, (len - 11));
}
    
/*    
 function compare(first, second){
     if(first.creation_date < second.creation_date){
         return 1;
     } else if (first.creation_date > second.creation_date){
         return -1;
     } else {
         return 0;
     }
         
 } 
*/
function getLatestEntries(){
   return axios.get(`https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=stackoverflow`);
}

/*
@ Takes a string such as javascript
@ Returns a JSON
*/
function getLatestEntriesByTag(tag){
   return axios.get(`https://api.stackexchange.com/2.2/search?order=desc&sort=activity&tagged=${tag}&site=stackoverflow`);
}

//Simply check if an item is in array

function matchTags(fetchedTags, givenTags){
    return  givenTags.every((tag) => fetchedTags.indexOf(tag.toLowerCase()) !== -1);
}

function _getWebPage(link) {
    return axios.get(link);
}


async function getWebPage(link) {
    try{
        let page = await _getWebPage(link);
        let pageData = page.data.split('<div class=\"post-text\" itemprop=\"text\">');
        let extractQuestion = pageData[1].split('</div');
        return extractQuestion[0];
    } catch(error) {
        console.warn("Error in getWebPage", error);
    }
}
/*
@Takes an array of tags or none
@ Returns list of objects
*/
async function getTwentyEntries(taggs=[]){
   let entries;
    try{
       if(taggs.length > 0){
           let tagGets =  taggs.map(tag => getLatestEntriesByTag(tag))
           entries = await Promise.all(tagGets);
           let filteredEntries = entries.reduce((init, item) => init.concat(
             item.data.items.filter((val) => {if(matchTags(val['tags'], taggs)){return val}})), [])
           //Filters out entries based on given tags
           return filteredEntries.slice(0,20);
       } else {
           entries = await getLatestEntries();
           return entries.data.items.slice(0,20)
       }
        
    } catch(error) {
        console.warn("Error in getTwentyEntries ", error);
    }
}

export  {getTwentyEntries, extractStringFromTimeStamp, getWebPage}