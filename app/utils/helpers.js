import {DATA_ID} from './Constant'

const localTags = ()=> JSON.parse(localStorage.getItem('tags')) || [];   

const savedTag = function(item,tags){
    return tags.indexOf(item) !== -1 ? true : false;
    
};


const updateOpacityList = function(id){
    let opacList = [];
    DATA_ID.forEach((listId)=> {
        if(id === listId) {
            opacList.push(1);
        }else {
            opacList.push(0.6)
        }
    });
    return opacList;
};


const appendLink = (message, link) => (message  + "<div class=\"info\"><a href=" + link + " target=\"_blank>\" >" + "Link to Question" + "</a></div>")

export {localTags, savedTag, updateOpacityList, appendLink}