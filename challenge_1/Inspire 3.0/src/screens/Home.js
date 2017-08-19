import React from 'react';
import {View, Text, Dimensions, ScrollView, TouchableOpacity, Image} from 'react-native';
import  {Icon, Header, Left, Body, Right, Title, Button, Content, Container, Footer, Switch} from 'native-base';
import Modal from 'react-native-modal'

let {height, width}   = Dimensions.get("window");
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.toggleNotifications = this.toggleNotifications.bind(this);
        this.selectActivity = this.selectActivity.bind(this);
        this.state = {activitiesIndex: 0};
    }
    selectActivity(index){
        this.setState({...this.state, activitiesIndex:index});
    }
    toggleNotifications() {
        this.setState({...this.state, showNotifications: !this.state.showNotifications});
    }

    componentDidMount() {
        this.props.navigation.setParams({toggleNotifications: this.toggleNotifications});
    }

    static navigationOptions = ({navigation})=> {
        return {
            header: <Header>
                <Left><Button onPress={()=>{navigation.state.params.toggleNotifications()}} transparent><Icon
                    name="flash"></Icon></Button></Left>
                <Body>
                <Title style={{fontSize:20}}>BOUNCE</Title>
                </Body>
                <Right><Button transparent><Icon name="person"/></Button></Right>
            </Header>
        }
    }

    render() {
        return <Container >
            <Content style={{position:"relative", flex:1}}>
                <ScrollView >
                    <View style={{flexDirection:"row", padding:10, width,flexWrap: "wrap", justifyContent:"center"
}}>
                        <Collection label="COLLECTION"/>
                        <Collection shared/>
                        <Collection label="COLLECTION"/>
                        <Collection shared/>
                        <Collection label="COLLECTION"/>
                        <Collection shared/>
                        <Collection label="COLLECTION"/>
                        <Collection shared/>
                        <Collection label="COLLECTION"/>
                        <Collection label="COLLECTION"/>
                        <Collection shared/>
                        <Collection label="COLLECTION"/>
                        <Collection shared/>
                        <Collection label="COLLECTION"/>
                        <Collection shared/>
                        <Collection shared/>
                        <Collection shared/>
                        <Collection shared/>
                    </View>
                </ScrollView>
            </Content>
            <View
                style={{ position:"absolute",height:40, flex:1, bottom:0, width, flexDirection:"row", alignItems:"center",backgroundColor:"rgba(0,0,0,0.8)"}}>
                <Text style={{paddingLeft:15, color:"#fff"}}>CREATE MOOD BOARD</Text>
                <View style={{alignItems:"flex-end", flex:1}}>
                    <Switch value={false}/>
                </View>
            </View>
            <Modal isVisible={this.state.showNotifications}>
                <View
                    style={{ flex: 1, backgroundColor:"#fff", position:"absolute", width, left:0,height, marginLeft:-20}}>
                    <View style={{flexDirection:"row",  paddingTop:25}}>
                        <TouchableOpacity  style={{flex:1, padding:10, flexDirection:"column", borderTopWidth:1, borderStyle:"solid", borderColor:"#666", backgroundColor:this.state.activitiesIndex==0 ? "#333" :"#fff", }} onPress={()=>{this.selectActivity(0)}}>
                            <View style={{justifyContent:"center", alignItems:"center",  }} >
                            <Icon style={{color:this.state.activitiesIndex==0? "#fff" :"#333"}} name="person"/>
                            <Text style={{color:this.state.activitiesIndex==0? "#fff" :"#333"}}>MY ACTIVITY</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity  style={{flex:1, padding:10, flexDirection:"column", borderTopWidth:1, borderStyle:"solid", borderColor:"#666", justifyContent:"center", alignItems:"center", backgroundColor:this.state.activitiesIndex==1? "#333" :"#fff" }} onPress={()=>{this.selectActivity(1)}}>
                            <View style={{justifyContent:"center", alignItems:"center", }} >
                            <Icon style={{color:this.state.activitiesIndex==1? "#fff" :"#333"}} name="contacts"/>
                            <Text  style={{color:this.state.activitiesIndex==1? "#fff" :"#333"}}>COLLABORATIONS</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                </View>
                {this.state.activitiesIndex==0 && <View style={{flexDirection:"column"}}>
                    <View style={{flexDirection:"row", marginBottom:10}}>
                        <Image style={{width:50, height:50}} source={{uri:"http://lorempixel.com/150/150/sports/"}}/>
                        <View style={{alignItems:"center", marginLeft:10, flexDirection:"row"}}><Text>You posted this to </Text><Text style={{fontWeight:"bold"}}>Collection 1</Text></View>
                    </View>
                    <View style={{flexDirection:"row", marginBottom:10}}>
                        <Image style={{width:50, height:50}}  source={{uri:"http://lorempixel.com/150/150/sports/"}}/>
                        <View style={{alignItems:"center", marginLeft:10, flexDirection:"row"}}><Text>You posted this to </Text><Text style={{fontWeight:"bold"}}>SHARED COLLECTION 3</Text></View>
                    </View>
                    <View style={{flexDirection:"row", marginBottom:10}}>
                        <Image  style={{width:50, height:50}} source={{uri:"http://lorempixel.com/150/150/sports/"}}/>
                        <View style={{alignItems:"center", marginLeft:10, flexDirection:"row"}}><Text>You posted this to </Text><Text style={{fontWeight:"bold"}}>Collection 1</Text></View>
                    </View>
                    <View style={{flexDirection:"row", marginBottom:10}}>
                        <Image style={{width:50, height:50}}  source={{uri:"http://lorempixel.com/150/150/sports/"}}/>
                        <View style={{alignItems:"center", marginLeft:10, flexDirection:"row"}}><Text>You posted this to </Text><Text style={{fontWeight:"bold"}}>Collection 1</Text></View>
                    </View>
                </View>}
                {this.state.activitiesIndex==1 && <View style={{flexDirection:"column"}}>
                    <View style={{flexDirection:"row", marginBottom:10}}>
                        <Image style={{width:50, height:50}} source={{uri:"http://lorempixel.com/150/150/sports/"}}/>
                        <View style={{alignItems:"center", marginLeft:10, flexDirection:"row"}}><Text>@ANDRE posted this to </Text><Text style={{fontWeight:"bold"}}>Collection 1</Text></View>
                    </View>
                    <View style={{flexDirection:"row", marginBottom:10}}>
                        <Image style={{width:50, height:50}}  source={{uri:"http://lorempixel.com/150/150/sports/"}}/>
                        <View style={{alignItems:"center", marginLeft:10, flexDirection:"row"}}><Text>@CERSEI added the tag</Text><Text style={{fontWeight:"bold"}}>"Wine glasses"</Text></View>
                    </View>
                    <View style={{flexDirection:"row", marginBottom:10}}>
                        <Image style={{width:50, height:50}}  source={{uri:"http://lorempixel.com/150/150/sports/"}}/>
                        <View style={{alignItems:"center", marginLeft:10, flexDirection:"row"}}><Text>@CERSEI added the tag</Text><Text style={{fontWeight:"bold"}}>"Wine glasses"</Text></View>
                    </View>
                    <View style={{flexDirection:"row", marginBottom:10}}>
                        <Image style={{width:50, height:50}}  source={{uri:"http://lorempixel.com/150/150/sports/"}}/>
                        <View style={{alignItems:"center", marginLeft:10, flexDirection:"row", flexWrap:"wrap"}}><Text>@TYWIN changed</Text><Text style={{fontWeight:"bold"}}> SHARED COLLECTION 2</Text><Text> to </Text><Text style={{fontWeight:"bold"}}>WESTEROS 2017</Text></View>
                    </View>
                </View>}
            </Modal>
        </Container>;
    }
}

const Collection = ({onClick, label, shared})=> {
    if (shared) {
        label = "SHARED COLLECTION";
    }
    return <View>
        <TouchableOpacity onPress={onClick}>
            <View style={{
            width: 110,
            height: 110,
            position: "relative",
            margin: 5
        }}>
                <View>
                    <Image style={{position:"absolute", width:110, height:110}}
                           source={{uri:"http://lorempixel.com/150/150/sports/"}}/>
                    <View
                        style={{position:"absolute", backgroundColor:"rgba(0,0,0,0.4)", width:110, height:110, justifyContent:"center", alignItems:"center"}}
                    ><Text style={{color:"#fff", textAlign:"center"}}>{label}</Text></View>
                    {shared &&
                    <View style={{justifyContent:"flex-end", alignItems:"flex-end", height:110, paddingRight:5}}>
                        <Icon name="md-contacts" style={{color:"#fff"}}/>
                    </View>}
                </View>
            </View>
        </TouchableOpacity>
    </View>
}
export default Home;