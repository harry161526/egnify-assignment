import React, { Component } from 'react';
import editor from '../images/editor.jpg';
import prize from '../images/prize.png'
import phone from '../images/phone-call.png';
import mail from '../images/envelope.png';
import signature from '../images/signature.png'
import './Editor.css';
class Editor extends Component {
    render() {
        return (
            <div className="editor">
                <div className="editor-info">
                    <div>
                        <div className="editor-imgbox">
                            <img src={prize} alt="badge" />
                        </div>
                        <h2>JEREMY SCOTT</h2>
                        <h4 className="occupation">Realtor</h4>
                    </div>

                    
                    <div className="note">
                        Ut cupidatat eiusmod labore deserunt ex. Nostrud occaecat commodo aliqua deserunt ex amet sint minim.
                         Aliquip et pariatur in quis eu nisi cupidatat ullamco ullamco laborum id. Pariatur ea id laboris ullamco.
                          Qui laborum dolore ipsum Lorem consectetur dolore esse cillum pariatur ea adipisicing ullamco cupidatat. 
                          oluptate tempor sit aliquip eiusmod amet exercitation occaecat fugiat proident aliqua.
                    </div>
                    <div>
                        <div className="wrapper">
                            <div className="editor-imgbox">
                                <img src={phone} alt="badge" />
                            </div>
                            &nbsp;&nbsp;+45 6778993000 223
                        </div>
                        <div className="wrapper">
                            <div className="editor-imgbox">
                                <img src={mail} alt="badge" />
                            </div>
                            &nbsp;&nbsp;office@template.com
                        </div>
                    </div>
                    
                    <div className="editor-imgbox">
                        <img src={signature} alt="badge" />
                    </div>
                </div>
                <div className="editor-img">
                    <img src={editor} alt="Editor" />
                </div>
            </div>
        )
    }
}

export default Editor;
