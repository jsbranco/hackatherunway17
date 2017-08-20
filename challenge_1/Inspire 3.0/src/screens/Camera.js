import React from 'react';
import {View, StyleSheet, Text, Dimensions, Image} from 'react-native';
import {Button, Icon, Switch} from 'native-base';
import Camera from 'react-native-camera';
let {height, width}   = Dimensions.get("window");
import Modal from 'react-native-simple-modal';
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

            fetch("http://localhost:3000/upload", {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data;'
                },

                method: 'POST',
                body
            }).then((res)=> {
                return res.json();
            }).then((reply)=> {
            this.setState({...this.state, uploadPicture: true, tags: reply, image: response.uri});
                console.log(JSON.stringify(reply))
            }).catch((error)=> {
                console.error(error)
            })
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
                <Modal open={this.state.uploadPicture} modalStyle={{
	   borderRadius: 2,
	   top:0,
	   position:"absolute",
	   backgroundColor: '#F5F5F5'
	}}>
                    <View style={{alignItems:"center", flex:1}}>
                        <View
                            style={{height:400, width:width*0.8, }}>
                            <View style={{flexDirection:"row", height:50, justifyContent:"center"}}>
                                <Button transparent onPress={()=>{this.hideModal()}}
                                        style={{flex:1, justifyContent:"center", borderRightWidth:1, borderBottomWidth:1, borderRadius:0, borderColor:"#999"}}><Text
                                    style={{color:"#333"}}>CANCEL</Text></Button>
                                <Button transparent
                                        style={{flex:1, justifyContent:"center",  borderBottomWidth:1, borderColor:"#999",  borderRadius:0,}}><Text
                                    style={{color:"#333"}} onPress={()=>{
                                    this.hideModal();
                                    this.props.navigation.navigate("NewProduct", {tags:this.state.tags.filter(tag=>tag.confidence>0.4).map(tag=>tag.tag)})}}>SEND</Text></Button>
                            </View>
                            <View
                                style={{flexDirection:"row", height:170,  padding:5,width:width*0.8, borderBottomWidth:1, borderColor:"#999"}}>
                                {this.state.tags && <View
                                    style={{height:150, width:200, padding:10, backgroundColor:"#fff", borderColor:"#f3f3f3", borderWidth:1}}><TagInput
                                    value={this.state.tags.filter(tag=>tag.confidence>0.4).map(tag=>tag.tag)}
                                    onChange={() => {}}  inputProps={{placeholder:""}}/></View>}
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