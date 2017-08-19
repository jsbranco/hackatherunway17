import React from 'react';
import {View, StyleSheet, Text, Dimensions, Image} from 'react-native';
import {Button, Icon, Switch} from 'native-base';
import Camera from 'react-native-camera';
let {height, width}   = Dimensions.get("window");
import Modal from 'react-native-modal';
import ImagePicker  from 'react-native-image-picker';
import TagInput from 'react-native-tag-input';

class CameraContainer extends React.Component {
    constructor(props) {
        super(props);
        this.selectFromGallery = this.selectFromGallery.bind(this);
        this.takePicture = this.takePicture.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.state = {uploadPicture: false};
    }

    hideModal() {
        this.setState({...this.state, uploadPicture: false})
    }

    takePicture() {
        const options = {};
        this.setState({...this.state, uploadPicture: true});
        this.camera.capture({metadata: options})
            .then((data) => console.log(data))
            .catch(err => console.error(err));
    }

    selectFromGallery() {
        ImagePicker.launchImageLibrary({}, (response) => {
            const file = {
                uri: response.uri,             // e.g. 'file:///path/to/file/image123.jpg'
                name: response.fileName,            // e.g. 'image123.jpg',
                type: response.type             // e.g. 'image/jpg'
            }

            const body = new FormData();
            body.append('file', file)

            // fetch("http://localhost:3000/upload", {
            //     headers: {
            //         'Accept': 'application/json',
            //         'Content-Type': 'multipart/form-data;'
            //     },
            //
            //     method: 'POST',
            //     body
            // }).then((res)=> {
            //     return res.json();
            // }).then((reply)=> {
            let reply = [{"tag": "canyon", "confidence": 0.9538}, {
                "tag": "valley",
                "confidence": 0.8098
            }, {"tag": "ravine", "confidence": 0.5362}, {
                "tag": "landscape",
                "confidence": 0.4579
            }, {"tag": "natural depression", "confidence": 0.4002}, {
                "tag": "rock",
                "confidence": 0.3919
            }, {"tag": "mountain", "confidence": 0.357}, {"tag": "park", "confidence": 0.3464}, {
                "tag": "national",
                "confidence": 0.338
            }, {"tag": "desert", "confidence": 0.3145}, {"tag": "travel", "confidence": 0.3068}, {
                "tag": "sky",
                "confidence": 0.2999
            }, {"tag": "usa", "confidence": 0.2948}, {"tag": "mountains", "confidence": 0.2569}, {
                "tag": "scenic",
                "confidence": 0.2276
            }, {"tag": "stone", "confidence": 0.2256}, {"tag": "america", "confidence": 0.225}, {
                "tag": "scenery",
                "confidence": 0.2199
            }, {"tag": "utah", "confidence": 0.2164}, {"tag": "sand", "confidence": 0.2154}, {
                "tag": "wilderness",
                "confidence": 0.2136
            }, {"tag": "vacation", "confidence": 0.2132}, {"tag": "tourism", "confidence": 0.2106}, {
                "tag": "outdoor",
                "confidence": 0.2077
            }, {"tag": "river", "confidence": 0.2021}, {"tag": "erosion", "confidence": 0.1988}, {
                "tag": "tree",
                "confidence": 0.1987
            }, {"tag": "clouds", "confidence": 0.1909}, {"tag": "rocks", "confidence": 0.189}, {
                "tag": "cliff",
                "confidence": 0.1797
            }, {"tag": "tourist", "confidence": 0.1591}, {"tag": "sun", "confidence": 0.1417}, {
                "tag": "sandstone",
                "confidence": 0.1404
            }, {"tag": "west", "confidence": 0.1391}, {"tag": "outdoors", "confidence": 0.1374}, {
                "tag": "southwest",
                "confidence": 0.1323
            }, {"tag": "environment", "confidence": 0.1322}, {"tag": "arizona", "confidence": 0.1321}, {
                "tag": "forest",
                "confidence": 0.1319
            }, {"tag": "water", "confidence": 0.1316}, {"tag": "landmark", "confidence": 0.1287}, {
                "tag": "sunrise",
                "confidence": 0.1272
            }, {"tag": "natural", "confidence": 0.1239}, {"tag": "scenics", "confidence": 0.1213}, {
                "tag": "american",
                "confidence": 0.1186
            }, {"tag": "hill", "confidence": 0.1185}, {
                "tag": "waterfall",
                "confidence": 0.1163
            }, {"tag": "geological formation", "confidence": 0.1162}, {
                "tag": "scene",
                "confidence": 0.1152
            }, {"tag": "orange", "confidence": 0.1147}, {"tag": "rim", "confidence": 0.1083}, {
                "tag": "geology",
                "confidence": 0.1076
            }, {"tag": "hiking", "confidence": 0.1063}, {"tag": "wonder", "confidence": 0.1003}, {
                "tag": "trees",
                "confidence": 0.0985
            }, {"tag": "autumn", "confidence": 0.0974}, {"tag": "adventure", "confidence": 0.0963}, {
                "tag": "summer",
                "confidence": 0.0953
            }, {"tag": "mesa", "confidence": 0.0925}, {"tag": "hot", "confidence": 0.0924}, {
                "tag": "arid",
                "confidence": 0.0906
            }, {"tag": "panoramic", "confidence": 0.0902}, {"tag": "grand", "confidence": 0.0901}, {
                "tag": "rocky",
                "confidence": 0.0895
            }, {"tag": "cloud", "confidence": 0.0874}, {"tag": "south", "confidence": 0.0872}, {
                "tag": "plant",
                "confidence": 0.0864
            }, {"tag": "dam", "confidence": 0.0823}, {"tag": "vista", "confidence": 0.0821}, {
                "tag": "point",
                "confidence": 0.082
            }, {"tag": "sunny", "confidence": 0.0811}, {"tag": "dawn", "confidence": 0.0811}, {
                "tag": "area",
                "confidence": 0.0804
            }, {"tag": "wild", "confidence": 0.0801}, {"tag": "dry", "confidence": 0.0781}, {
                "tag": "fall",
                "confidence": 0.0773
            }, {"tag": "horizon", "confidence": 0.0769}, {"tag": "world", "confidence": 0.0758}, {
                "tag": "sunset",
                "confidence": 0.0758
            }, {"tag": "slope", "confidence": 0.0756}, {"tag": "formation", "confidence": 0.0745}, {
                "tag": "panorama",
                "confidence": 0.0734
            }, {"tag": "spain", "confidence": 0.0723}]
            this.setState({...this.state, uploadPicture: true, tags: reply, image: response.uri});
            //     console.log(JSON.stringify(reply))
            // }).catch((error)=> {
            //     console.error(error)
            // })
        });
    }

    render() {
        return <View style={styles.container}>
            <Camera
                ref={(cam) => {
            this.camera = cam;
          }}
                style={styles.preview}
                aspect={Camera.constants.Aspect.fill}>
                <View
                    style={{height:80, flexDirection:"row",  paddingLeft:15, paddingRight:15,justifyContent:"space-between", alignItems:"center", backgroundColor:"#fff", width}}>
                    <Button transparent onPress={()=>{this.selectFromGallery()}} style={{height:80}}><Icon
                        style={{fontSize:48}} name="images"/></Button>
                    <Button transparent style={{height:80}} onPress={this.takePicture.bind(this)}><Icon
                        style={{fontSize:48}} name="camera"/></Button>
                    <Button transparent style={{height:80}}><Icon style={{fontSize:48}} name="link"/></Button>
                </View>
                <Modal isVisible={this.state.uploadPicture}>
                    <View style={{alignItems:"center", flex:1, top:60}}>
                        <View
                            style={{height:400, width:width*0.8, backgroundColor:"rgba(255,255,255,0.9)", borderRadius:10}}>
                            <View style={{flexDirection:"row", height:50, justifyContent:"center"}}>
                                <Button transparent onPress={()=>{this.hideModal()}}
                                        style={{flex:1, justifyContent:"center", borderRightWidth:1, borderBottomWidth:1, borderRadius:0, borderColor:"#999"}}><Text
                                    style={{color:"#333"}}>CANCEL</Text></Button>
                                <Button transparent
                                        style={{flex:1, justifyContent:"center",  borderBottomWidth:1, borderColor:"#999",  borderRadius:0,}}><Text
                                    style={{color:"#333"}} onPress={()=>{this.hideModal();this.props.navigation.navigate("NewProduct")}}>SEND</Text></Button>
                            </View>
                            <View
                                style={{flexDirection:"row", height:170,  padding:5,width:width*0.8, borderBottomWidth:1, borderColor:"#999"}}>
                                {this.state.tags && <View
                                    style={{height:150, width:200, padding:10, backgroundColor:"#fff", borderColor:"#f3f3f3", borderWidth:1}}><TagInput
                                    value={this.state.tags.filter(tag=>tag.confidence>0.4).map(tag=>tag.tag)}
                                    onChange={(emails) => this.onEmailChange(emails)}  inputProps={{placeholder:""}}/></View>}
                                <View style={{justifyContent:"center", flex:1,alignItems:"center"}}><Image
                                    style={{height:110, width:80}} source={{uri:this.state.image}}/></View>
                            </View>
                            <View
                                style={{flexDirection:"column", height:80, top:10, padding:5,width:width*0.8, borderBottomWidth:1, borderColor:"#999"}}>
                                <View style={{flexDirection:"row", flex:1, alignItems:"center"}}>
                                    <Text style={{flex:1, color:"#999"}}>SHARE WITH</Text><View
                                    style={{flex:1, backgroundColor:"#fff", height:25}}>
                                    <TagInput value={[]}  inputProps={{placeholder:""}}/></View>
                                </View>
                                <View style={{flexDirection:"row", flex:1, alignItems:"center"}}>
                                    <Text style={{flex:1, color:"#999"}}>MAKE IT PUBLIC?</Text><View
                                    style={{flex:1, alignItems:"flex-end",height:25}}>
                                    <Switch/>
                                </View>
                                </View>
                            </View>
                            <View
                                style={{flexDirection:"column", height:80, top:10, padding:5,width:width*0.8}}>
                                <View style={{flexDirection:"row", flex:1, alignItems:"center"}}>
                                    <Text style={{flex:1, color:"#999"}}>ADD TO</Text><View
                                    style={{flex:1, backgroundColor:"#fff", height:25}}>
                                    <TagInput value={[]} inputProps={{placeholder:""}}/></View>
                                </View>
                                <View style={{flexDirection:"row", flex:1, alignItems:"center"}}>
                                    <Text style={{flex:1, color:"#999"}}>MAKE IT PUBLIC?</Text><View
                                    style={{flex:1, alignItems:"flex-end",height:25}}>
                                    <Switch/>
                                </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
            </Camera>
        </View>
    }
}
export default CameraContainer;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        height: height,
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000',
        padding: 10,
        margin: 40
    }
});