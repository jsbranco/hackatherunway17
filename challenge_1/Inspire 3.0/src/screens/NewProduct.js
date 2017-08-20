import React from 'react';
import {View, Text, Dimensions, ScrollView, TouchableOpacity, Image, Share} from 'react-native';
import  {Icon, Header, Left, Body, Right, Title, Button, Content, Container, Badge,Footer, Switch} from 'native-base';
import Camera from './Camera';
let {height, width}   = Dimensions.get("window");
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.selectActivity = this.selectActivity.bind(this);
        this.state = {activitiesIndex: 0, showUser: false};
    }

    selectActivity(index) {
        this.setState({...this.state, activitiesIndex: index});
    }

    toggleUser() {
        this.setState({...this.state, showUser: !this.state.showUser});
    }

    static navigationOptions = ({navigation})=> {
        return {
            header: null
        }
    }

    render() {
            console.log(this.props.navigation.state.params.tags);
        let tags;
        if(this.props.navigation.state.params  &&  this.props.navigation.state.params.tags)
        {
            tags=this.props.navigation.state.params.tags.map((tag, key)=>{
                return  <View key={key} style={{flex:1, margin:5, textWrap:"ellipsis"}}><Badge style={{ backgroundColor: '#333' }}><Text numberOfLines={1} ellipsizeMode="tail" style={{color:"#fff"}}>{tag.replace(/" "/g,"")}</Text></Badge></View>;
            })

        }
        return <Container >
            <Header>
                <Left><Button onPress={()=>{this.props.navigation.goBack()}} transparent><Icon
                    name="arrow-back"></Icon></Button></Left>
                <Body>
                <Title style={{fontSize:20}}></Title>
                </Body>
                <Right><Button transparent onPress={()=>{this.toggleUser()}}><Icon name="trash"/></Button></Right>
            </Header>
            <Content style={{backgroundColor:"#fff", flex:1}}>
                <View style={{alignItems:"center", flex:1, padding:15, flexDirection:"column"}}>
                    <Image style={{height:250, width:195}} source={{uri:"https://lorempixel.com/350/350/sports/"}}/>
                    <View style={{flexDirection:"row", alignItems:"center", height:50, flexWrap:"wrap"}}>
                        {tags}
                    </View>
                </View>
            </Content>
            <View
                style={{ position:"absolute",height:40, zIndex:999,flex:1, bottom:0, width, flexDirection:"row", alignItems:"flex-end",backgroundColor:"rgba(0,0,0,0.8)"}}>
                <View style={{justifyContent:"flex-end", flexDirection:"row", flex:1, paddingRight:15}}>
                    <Button transparent  style={{width:55}}><Icon style={{paddingRight:25, color:"#fff"}} name="download"/></Button>
                    <Button transparent onPress={()=>{Share.share("Share your new post")}} style={{width:55}}><Icon style={{paddingRight:25, color:"#fff"}} name="md-share"/></Button>
                </View>
            </View>
        </Container>
    }
}

export default Home;