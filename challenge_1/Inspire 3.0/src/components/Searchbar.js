import React from 'react';
import {View, Dimensions, TouchableOpacity} from 'react-native';
import {Icon, Input, Text} from 'native-base';
let {width, height} = Dimensions.get("window");
export default class Searchbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let {results}  = this.props;
        let suggestionsText;
        if (results) {
            suggestionsText = results.map( (tag, key) =>{
                return <TouchableOpacity  key={key}  onPress={()=>{this.props.selectSuggestion(tag.key)}}><View style={{height:30,flex:1, justifyContent:"center"}}><Text>{tag.key}</Text></View></TouchableOpacity>
            });

        }
        return <View style={{flexDirection:"row",flex:1, alignItems:"center", position:"relative", zIndex:999}}>
            <Icon name="search"/>
            <Input onChangeText={(value)=>{this.props.query(value)}}/>
            {this.props.showSuggestions && this.props.searchCriteria!="" && this.props.results && this.props.results.length>0 && <View style={{flex:1, width, position:"absolute",top:40, left:-10, zIndex:999, justifyContent:"center", padding:10, alignItems:"center",}}>
                <View style={{backgroundColor:"#fff",  width:width*0.95, padding:10}}>
                    {suggestionsText}
                </View>
            </View>}
        </View>
    }
}
