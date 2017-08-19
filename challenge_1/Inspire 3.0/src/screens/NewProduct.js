import React from 'react';
import {View, Text, Dimensions, ScrollView, TouchableOpacity, Image, Share} from 'react-native';
import  {Icon, Header, Left, Body, Right, Title, Button, Content, Container, Footer, Switch} from 'native-base';
import Modal from 'react-native-modal'
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

    componentDidMount() {
        this.props.navigation.setParams({toggleUser: this.toggleUser});
    }

    static navigationOptions = ({navigation})=> {
        return {
            header: null
        }
    }

    render() {
        return <Container >
            <Header>
                <Left><Button onPress={()=>{this.refs.pages.scrollTo(0)}} transparent><Icon
                    name="arrow-back"></Icon></Button></Left>
                <Body>
                <Title style={{fontSize:20}}></Title>
                </Body>
                <Right><Button transparent onPress={()=>{this.toggleUser()}}><Icon name="trash"/></Button></Right>
            </Header>
            <Content style={{backgroundColor:"#fff", flex:1}}>
                <View style={{alignItems:"center", flex:1, padding:15, flexDirection:"column"}}>
                    <Image style={{height:250, width:195}} source={{uri:"https://lorempixel.com/350/350/sports/"}}/>
                    <View></View>
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

const Collection = ({onClick, label, shared})=> {
    if (shared) {
        label = "SHARED COLLECTION";
    }
    let maxWidth = width * 0.28;
    return <View>
        <TouchableOpacity onPress={onClick}>
            <View style={{
            width: maxWidth,
            height: maxWidth,
            position: "relative",

            margin: 5
        }}>
                <View>
                    <Image style={{position:"absolute", width:maxWidth, height:maxWidth}}
                           source={{uri:"https://lorempixel.com/150/150/sports/"}}/>
                    <View
                        style={{position:"absolute", backgroundColor:"rgba(0,0,0,0.4)", width:maxWidth, height:maxWidth, justifyContent:"center", alignItems:"center"}}
                    ><Text style={{color:"#fff", textAlign:"center"}}>{label}</Text></View>
                    {shared &&
                    <View style={{justifyContent:"flex-end", alignItems:"flex-end", height:maxWidth, paddingRight:5}}>
                        <Icon name="md-contacts" style={{color:"#fff"}}/>
                    </View>}
                </View>
            </View>
        </TouchableOpacity>
    </View>
}
export default Home;