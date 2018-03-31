import React, {Component} from 'react'
import { Input, Upload,message, Button, Icon } from 'antd';

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






class ItemEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      foodTitle: '',
      foodSalary:'',
      foodDetails: ''
    }
  }

  handleFoodTitle(e) {
    this.setState({
      foodTitle: e.target.value
    })
  }

  handleFoodSalary(e) {
    this.setState({
      foodSalary: e.target.value
    })
  }

  handleFoodDetails(e) {
    this.setState({
      foodDetails: e.target.value
    })
  }

  handleSubmit() {
    console.log(this.state.foodTitle,this.state.foodSalary,this.state.foodDetails)
    this.setState({
      foodTitle: '',
      foodSalary:'',
      foodDetails: ''
    })
  }

 
  render() {
    return (
      <div className="ItemEdit">
        <div className="example-input">
          <div>
            <span>菜品名称：</span>
            <Input value={this.state.foodTitle} onChange={(e) => this.handleFoodTitle(e)} placeholder="请输入菜品名称" />
          </div>
          <div>
            <span>菜品图片：</span>
            <Upload {...props}>
              <Button type="ghost">
                <Icon type="upload" /> 点击上传菜品图片
              </Button>
            </Upload>
            <br />
          </div>
          <div>
            <span>菜品价格：</span>
            <Input value={this.state.foodSalary} onChange={(e) => this.handleFoodSalary(e)} placeholder="请输入菜品价格" />
          </div>
          <div>
            <span>菜品详情：</span>
            <Input value={this.state.foodDetails} onChange={(e) => this.handleFoodDetails(e)} placeholder="请输入菜品详情" />
          </div>
          <Button>返回</Button>
          <Button onClick={()=>this.handleSubmit()} type="primary">确定</Button>
        </div>
      </div>
    )
  }
}

export default ItemEdit;

