import React from 'react'
import {getTwentyEntries, getWebPage} from '../utils/stackOverFlowHelpers'
import Results from '../components/Results'
import store from './BindContainer'
import {CHECK_LIST, OPACITY_LIST} from '../utils/Constant'
import {localTags, updateOpacityList, appendLink } from '../utils/helpers'

class ResultsContainer extends React.Component {
    constructor(){
        super()
        this.state = {entries: [], checked: [] , webpage: '', webpagelist: {},
                     opacityList: OPACITY_LIST};
        this.update = this.update.bind(this);
        this.fetchData = this.fetchData.bind(this);
        this.fetchPage = this.fetchPage.bind(this);
    }

   componentDidMount(){
        //_scrapeWeb()
        const storeVal = localTags() 
        this.setState({checked: storeVal })
        storeVal.forEach(function(item){
            store.dispatch({type: 'ADD', value: item})
            
        })
        
    }
    
    async   fetchData(event ){
        event.preventDefault();
        store.dispatch({type:'GET', value: true});
        let lStore = store.getState();
        store.dispatch({type:'OPACITY', value: OPACITY_LIST})
        const dataArr = Object.keys(lStore).filter(key => {
            if(CHECK_LIST[key] && lStore[key] ){return key}});  
        try {
            let resultData = await getTwentyEntries(dataArr);
            store.dispatch({type:'FETCHED', value: resultData});
            lStore = store.getState();
            this.setState(lStore);
        } catch(error) {
            console.warn("Error in fetchData", error)
        }

    }
    
    async  fetchPage(event){
        event.preventDefault();
        let lStore, link, mid, opac;
        store.dispatch({type:'GETPAGE', value: true});
        link = event.target.getAttribute('href');  
        mid = event.target.getAttribute('data-id');
        opac = updateOpacityList(mid);
        store.dispatch({type:'OPACITY', value: opac});
        if(this.state.webpagelist[mid] !== undefined){
            let cachedValue = this.state.webpagelist[mid];
            cachedValue = appendLink(cachedValue, link)
            store.dispatch({type:'PAGEFETCHED', value: cachedValue})
            opac = updateOpacityList(mid);
            store.dispatch({type:'OPACITY', value: opac});
            lStore = store.getState();   
            this.setState(lStore);
        } else {
            try {
                let resultData = await getWebPage(link);
                resultData = appendLink(resultData, link);
                store.dispatch({type:'PAGEFETCHED', value: resultData}) ;
                let dstore = {};
                dstore[mid] = resultData;
                let newResult = Object.assign({}, this.state.webpagelist, dstore);
                store.dispatch({type:'CACHED', value: newResult})
                lStore = store.getState()
                this.setState(lStore);
        } catch(error) {
            console.warn("Error in fetchPage", error)
        }
            
        }   
    }
    

    update(event) {
        //event.preventDefault();
        event.stopPropagation();
        store.dispatch({type: 'ADD', value: event.target.value});
        let lStore = store.getState()
        let dataArr = Object.keys(lStore).filter(key => {
            if(CHECK_LIST[key] && lStore[key]){return key }});
        localStorage.setItem('tags', JSON.stringify(dataArr));
        this.setState({checked: localTags() })
        
    }
    
    render(){
        return (
            <Results
               entries = {this.state.entries} webpage = {this.state.webpage} fetchPage={this.fetchPage} 
              opacityList = {this.state.opacityList} checks={this.state.checked}
             fetchDataFn={this.fetchData} updateFn={this.update} /> 
        )
    }
}



export default ResultsContainer