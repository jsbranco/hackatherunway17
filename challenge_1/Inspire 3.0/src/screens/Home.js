import React from 'react';
import {View, Text, Dimensions, ScrollView, TouchableOpacity, Image,RefreshControl} from 'react-native';
import  {Icon, Header, Left, Body, Right, Title, Button, Content, Container, Footer, Switch} from 'native-base';
import Modal from 'react-native-modal'
import Camera from './Camera';
let {height, width}   = Dimensions.get("window");
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.selectActivity = this.selectActivity.bind(this);
        this._onRefresh = this._onRefresh.bind(this);
        this.state = {activitiesIndex: 0, showUser: false, refreshing:false};
    }

    selectActivity(index) {
        this.setState({...this.state, activitiesIndex: index});
    }
    _onRefresh()
    {
        this.setState({...this.state,refreshing:true},()=>{
            // setTimeout(()=>{
            //     this.setState({...this.state,refreshing:false});
            // },2000)
        });

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
        return <ScrollView pagingEnabled style={{height:height*3}} contentOffset={{x:0,y:height}} ref="pages">
            <Container>
                <View
                    style={{flexDirection:"row",  paddingTop:25, height:60,flex:0.10, borderBottomWidth:1, borderColor:"#f1f1f1"}}>
                    <TouchableOpacity
                        style={{flex:1, padding:10, flexDirection:"column", borderTopWidth:1, borderStyle:"solid", borderColor:"#666", backgroundColor:this.state.activitiesIndex!=0 ? "#f3f3f3" :"#fff", }}
                        onPress={()=>{this.selectActivity(0)}}>
                        <View style={{justifyContent:"center", alignItems:"center",  }}>
                            <Icon style={{color:this.state.activitiesIndex!=0? "#333" :"#000"}} name="person"/>
                            <Text style={{color:this.state.activitiesIndex!=0? "#333" :"#000"}}>MY
                                ACTIVITY</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{flex:1, padding:10, flexDirection:"column", borderTopWidth:1, borderStyle:"solid", borderColor:"#666", justifyContent:"center", alignItems:"center", backgroundColor:this.state.activitiesIndex!=1? "#f3f3f3" :"#fff" }}
                        onPress={()=>{this.selectActivity(1)}}>
                        <View style={{justifyContent:"center", alignItems:"center", }}>
                            <Icon style={{color:this.state.activitiesIndex!=1? "#333" :"#000"}}
                                  name="contacts"/>
                            <Text
                                style={{color:this.state.activitiesIndex!=1? "#333" :"#000"}}>COLLABORATIONS</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                {this.state.activitiesIndex == 0 &&
                <View style={{flexDirection:"column", flex:1, padding:15, backgroundColor:"#fff"}}>
                    <View style={{flexDirection:"row", marginBottom:10}}>
                        <Image style={{width:50, height:50}}
                               source={{uri:"https://lorempixel.com/150/150/sports/"}}/>
                        <View style={{alignItems:"center", marginLeft:10, flexDirection:"row"}}><Text>You posted
                            this to </Text><Text style={{fontWeight:"bold"}}>Collection 1</Text></View>
                    </View>
                    <View style={{flexDirection:"row", marginBottom:10}}>
                        <Image style={{width:50, height:50}}
                               source={{uri:"https://lorempixel.com/150/150/sports/"}}/>
                        <View style={{alignItems:"center", marginLeft:10, flexDirection:"row"}}><Text>You posted
                            this to </Text><Text style={{fontWeight:"bold"}}>SHARED COLLECTION 3</Text></View>
                    </View>
                    <View style={{flexDirection:"row", marginBottom:10}}>
                        <Image style={{width:50, height:50}}
                               source={{uri:"https://lorempixel.com/150/150/sports/"}}/>
                        <View style={{alignItems:"center", marginLeft:10, flexDirection:"row"}}><Text>You posted
                            this to </Text><Text style={{fontWeight:"bold"}}>Collection 1</Text></View>
                    </View>
                    <View style={{flexDirection:"row", marginBottom:10}}>
                        <Image style={{width:50, height:50}}
                               source={{uri:"https://lorempixel.com/150/150/sports/"}}/>
                        <View style={{alignItems:"center", marginLeft:10, flexDirection:"row"}}><Text>You posted
                            this to </Text><Text style={{fontWeight:"bold"}}>Collection 1</Text></View>
                    </View>
                </View>}
                {this.state.activitiesIndex == 1 &&
                <View style={{flexDirection:"column", flex:1, padding:15, backgroundColor:"#fff"}}>
                    <View style={{flexDirection:"row", marginBottom:10}}>
                        <Image style={{width:50, height:50}}
                               source={{uri:"https://lorempixel.com/150/150/sports/"}}/>
                        <View style={{alignItems:"center", marginLeft:10, flexDirection:"row"}}><Text>@ANDRE posted
                            this to </Text><Text style={{fontWeight:"bold"}}>Collection 1</Text></View>
                    </View>
                    <View style={{flexDirection:"row", marginBottom:10}}>
                        <Image style={{width:50, height:50}}
                               source={{uri:"https://lorempixel.com/150/150/sports/"}}/>
                        <View style={{alignItems:"center", marginLeft:10, flexDirection:"row"}}><Text>@CERSEI added
                            the tag</Text><Text style={{fontWeight:"bold"}}>"Wine glasses"</Text></View>
                    </View>
                    <View style={{flexDirection:"row", marginBottom:10}}>
                        <Image style={{width:50, height:50}}
                               source={{uri:"https://lorempixel.com/150/150/sports/"}}/>
                        <View style={{alignItems:"center", marginLeft:10, flexDirection:"row"}}><Text>@CERSEI added
                            the tag</Text><Text style={{fontWeight:"bold"}}>"Wine glasses"</Text></View>
                    </View>
                    <View style={{flexDirection:"row", marginBottom:10}}>
                        <Image style={{width:50, height:50}}
                               source={{uri:"https://lorempixel.com/150/150/sports/"}}/>
                        <View
                            style={{alignItems:"center", marginLeft:10, flexDirection:"row", flexWrap:"wrap"}}><Text>@TYWIN
                            changed</Text><Text style={{fontWeight:"bold"}}> SHARED COLLECTION 2</Text><Text>
                            to </Text><Text style={{fontWeight:"bold"}}>WESTEROS 2017</Text></View>
                    </View>
                </View>}
            </Container>
            <ScrollView style={{flexDirection:"row", width:width}} pagingEnabled horizontal>
                <Container >
                    <Header>
                        <Left><Button onPress={()=>{this.refs.pages.scrollTo(0)}} transparent><Icon
                            name="flash"></Icon></Button></Left>
                        <Body>
                        <Title style={{fontSize:20}}>BOUNCE</Title>
                        </Body>
                        <Right><Button transparent onPress={()=>{this.toggleUser()}}><Icon
                            name="person"/></Button></Right>
                    </Header>
                    <Content>
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
                        {this.state.showUser && <Modal hideOnBackdropPress isVisible={this.state.showUser}>
                            <View
                                style={{ flex: 1, alignItems:"center", top:120, height:200}}>
                                <View
                                    style={{ backgroundColor:"#fff", borderRadius:5, width:width*0.8, height:200, position:"relative",  alignItems:"center",flexDirection:"column"}}>
                                    <View
                                        style={{borderRadius:100, width:80, height:80, borderWidth:1, top:-40, justifyContent:"center", alignItems:"center",backgroundColor:"#f3f3f3"}}>
                                        <Icon name="person" style={{fontSize:94, backgroundColor:"transparent"}}/>
                                        <View transparent
                                              style={{position:"absolute", right:-10, bottom:-10, backgroundColor:"rgba(0,0,0,0.6)", borderRadius:25, width:40,height:40, justifyContent:"center", alignItems:"center", margin:0}}><Icon
                                            name="image"
                                            style={{padding:0,fontSize:24, backgroundColor:"transparent", color:"#fff"}}/></View>
                                    </View>
                                    <View>
                                        <Text style={{fontSize:18, fontWeight:"bold"}}>JANE BOND</Text>
                                        <Text style={{fontSize:14 }}>@JANE_007</Text>
                                    </View>
                                    <View style={{ width:width*0.8,  flex:1,justifyContent:"flex-end"}}>
                                        <Button block transparent onPress={()=>{this.toggleUser()}}
                                                style={{borderRadius:0, borderTopWidth:1, borderTopColor:"#999"}}><Text
                                            style={{color:"#999"}}>Back</Text></Button>
                                    </View>
                                </View>
                            </View>
                        </Modal>}
                    </Content>
                    <View
                        style={{ position:"absolute",height:40, flex:1, bottom:0, width, flexDirection:"row", alignItems:"center",backgroundColor:"rgba(0,0,0,0.8)"}}>
                        <Text style={{paddingLeft:15, color:"#fff"}}>CREATE MOOD BOARD</Text>
                        <View style={{alignItems:"flex-end", flex:1}}>
                            <Switch value={false}/>
                        </View>
                    </View>
                </Container>
                <Container  >
                    <Header>
                        <Left></Left>
                        <Body>
                        <Title style={{fontSize:20}}>EXPLORE</Title>
                        </Body>
                        <Right></Right>
                    </Header>
                    <Content>
                        <View style={{flexDirection:"row", padding:10, width,flexWrap: "wrap", justifyContent:"center"
}}>
                            <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh.bind(this)}
                        />
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
                    </Content>
                    <View
                        style={{ position:"absolute",height:40, flex:1, bottom:0, width, flexDirection:"row", alignItems:"center",backgroundColor:"rgba(0,0,0,0.8)"}}>
                        <Text style={{paddingLeft:15, color:"#fff"}}>CREATE MOOD BOARD</Text>
                        <View style={{alignItems:"flex-end", flex:1}}>
                            <Switch value={false}/>
                        </View>
                    </View>
                </Container>
            </ScrollView>
            <Camera navigation={this.props.navigation}/>
        </ScrollView>;
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