/**
* @Author: zhujianchao <SuitRabbit>
* @Date:   2016-06-03T15:37:02+08:00
* @Email:  lifereduce@gmail.com
* @Last modified by:   SuitRabbit
* @Last modified time: 2016-06-04T13:00:45+08:00
*/



import React, {Component, PropTypes} from'react'
import {findDOMNode} from 'react-dom'
import marked from 'marked'

export default class MarkDown extends Component{
  constructor(props){
    super(props);
    // mode: edit | split
    this.state = {
      mode: 'split', html: marked(this.props.source || '')
    }
  }
  static propsTypes = {
    source: PropTypes.string,
  }
  componentDidMount(){
    // cache dom node
    this.editor = findDOMNode(this.refs.editor);
    //this.previewControl = React.findDOMNode(this.refs.preview)
  }
  handleChange=(e)=>{
    this.setState({html: marked(this.editor.value)});
  }
  render(){
    let {panelClass, editorClass, previewClass, ...others} = this.props;
    return(
      <div className={panelClass}>
        <div className={editorClass}>
          <textarea ref="editor" name="content" onChange={this.handleChange}></textarea>
        </div>
        <div className={previewClass} dangerouslySetInnerHTML={{ __html: this.state.html }}></div>
      </div>
    )
  }
}
