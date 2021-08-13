import React, { Component } from "react";
import { DraftailEditor } from "draftail";
import { EditorState, convertToRaw} from "draft-js";
import draftToHtml from 'draftjs-to-html'
import createInlineToolbarPlugin from "draft-js-inline-toolbar-plugin";
import createSideToolbarPlugin from "draft-js-side-toolbar-plugin";

import "./Editor.css";
import "draft-js/dist/Draft.css";
import "draftail/dist/draftail.css";
import "draft-js-inline-toolbar-plugin/lib/plugin.css";
import axios from '../../axios'
import "draft-js-side-toolbar-plugin/lib/plugin.css";
const inlineToolbarPlugin = createInlineToolbarPlugin();
const { InlineToolbar } = inlineToolbarPlugin;const sideToolbarPlugin = createSideToolbarPlugin();
const { SideToolbar } = sideToolbarPlugin;const plugins = [inlineToolbarPlugin, sideToolbarPlugin];

class Editor extends Component {
    state = {
            editorState: EditorState.createEmpty(),
            title: ""
        };

    componentWillUpdate () {
        // axios.post('/home', convertToRaw(this.state.editorState.getCurrentContent()))
    }

    changeState = (state) => {
        this.setState({
            editorState: state
        });
    }  
    sendpost = async () => {
        const blocks = convertToRaw(this.state.editorState.getCurrentContent())
        const markup = draftToHtml(
            blocks 
          );

        const name = JSON.parse(localStorage.getItem('user')).name;
        const title = this.state.title
        const order = {
            data: markup,
            name: name,
            title: title
        }
        try {
            await axios.post('/posts', order)
        } catch (e) {
            console.error(e)
        }
        console.log(markup)
    }
    

    render() {

        const buttonStyle={
            borderRadius: "20px",
            border: "1px solid black",
            backgroundColor: "black",
            color: "#FFFFFF",
            fontWeight: "bold",
            padding: "10px",
            margin: "5px",
            textTransform: "uppercase",
            cursor: "pointer"
          } 
        return (
            <div className="Editor">
                <input className="titleText" 
                        name="titleText" 
                        placeholder="Title"
                        onChange = {e=>this.setState({title: e.target.value})}/>
                <DraftailEditor
                    editorState={this.state.editorState}
                    onChange={this.changeState}
                    placeholder="Start writing here..."
                    plugins={plugins}
                />
                <button style={buttonStyle} onClick={this.sendpost} >Post</button>
                <InlineToolbar />
                <SideToolbar />
            </div>
        );
    }
}

export default Editor;
