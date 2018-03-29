import React, {Component} from 'react'
import { Input, Upload,message, Button, Icon, Form, Select, Radio } from 'antd';


const Option = Select.Option;

const props = {
  action: '/api/position/add',
  listType: 'picture',
  multiple:false,
  onChange(info) {
    console.log(info.file)
    if (info.file.status === 'done') {
      message.success(`${info.file.name} 图片上传成功。`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} 图片上传失败。`);
    }
  },
  
};





class GuangdongItemEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gourmetName:'',
      gourmetPic:'',
      gourmetArea:'',
      gourmetPrac:'',
      tasteDescri:'',
      mattersAtt:''
    }
  }

  handleGourmetName(e) {
    this.setState({
      gourmetName: e.target.value
    })
  }

  handleGourmetArea(e) {
    this.setState({
      gourmetArea: e.target.value
    })
  }

  handleGourmetPrac(e) {
    this.setState({
      gourmetPrac: e.target.value
    })
  }

  handleTasteDescri(e) {
    this.setState({
      tasteDescri: e.target.value
    })
  }

  handleSubmit() {
    console.log(this.state.foodTitle,this.state.foodSalary,this.state.foodDetails)
    this.setState({
      gourmetName:'',
      gourmetPic:'',
      gourmetArea:'',
      gourmetPrac:'',
      tasteDescri:'',
      mattersAtt:''
    })
  }
// 美食名称  gourmetName
// 美食图片  gourmetPic
// 美食地区  gourmetArea
// 美食做法  gourmetPrac
// 口味描述  tasteDescri
// 注意事项  mattersAtt
// 上传时间  uploadTime
 
  render() {
    return (
      <div className="ItemEdit">
        <div className="example-input">
          <div>
            <span>美食名称：</span>
            <Input value={this.state.gourmetName} onChange={(e) => this.handleGourmetName(e)} placeholder="请输入菜品名称" />
          </div>
          <div>
            <span>美食图片：</span>
            <Upload {...props}>
              <Button type="ghost">
                <Icon type="upload" /> 点击上传菜品图片
              </Button>
            </Upload>
            <br />
          </div>
          <div>
            <span>美食地区：</span>
            <Input value={this.state.gourmetArea} onChange={(e) => this.handleGourmetArea(e)} placeholder="请输入菜品价格" />
          </div>
          <div>
            <span>美食做法：</span>
            <Input value={this.state.gourmetPrac} onChange={(e) => this.handleGourmetPrac(e)} placeholder="请输入菜品价格" />
          </div>
          <div>
            <span>口味描述：</span>
            <Input value={this.state.tasteDescri} onChange={(e) => this.handleTasteDescri(e)} placeholder="请输入菜品价格" />
          </div>
          <div>
            <span>注意事项：</span>
            <Input value={this.state.mattersAtt} onChange={(e) => this.handleMattersAtt(e)} placeholder="请输入菜品价格" />
          </div>
          <Button>返回</Button>
          <Button onClick={()=>this.handleSubmit()} type="primary">确定</Button>
        </div>
      </div>
    )
  }
}

export default GuangdongItemEdit;

