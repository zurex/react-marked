/**
* @Author: zhujianchao <SuitRabbit>
* @Date:   2016-06-03T15:41:43+08:00
* @Email:  lifereduce@gmail.com
* @Last modified by:   SuitRabbit
* @Last modified time: 2016-06-04T13:01:31+08:00
*/

import React, {Component, PropTypes} from 'react'
import {render} from 'react-dom'
import MarkDown from '../react-marked'

class App extends Component{
  render(){
    return(
      <div>
        <h1>react-marked</h1>
        <MarkDown editorClass="col-md-6" previewClass="col-md-6"/>
      </div>
    )
  }
}

render(
  <App/>,
  document.getElementById('app')
)
