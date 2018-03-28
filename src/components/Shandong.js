// export default Shandong;

import React, {Component} from 'react'

import { Table, Icon, Button } from 'antd';

import { connect } from 'react-redux'

const columns = [{
    title: '美食图片',
    dataIndex: 'gourmetPic',
    key: 'gourmetPic',
}, {
    title: '美食名称',
    dataIndex: 'gourmetName',
    key: 'gourmetName',
}, {
    title: '美食做法',
    dataIndex: 'gourmetPrac',
    key: 'gourmetPrac',
}, {
    title: '口味描述',
    dataIndex: 'tasteDescri',
    key: 'tasteDescri',
}, {
    title: '操作',
    key: 'action',
    render: (text, record) => (
        <span>
        <Button type="primary">编辑</Button>
        <Button type="danger">删除</Button>
        </span>
    ),
}];

const mapStateToProps = (state) => {
  return {
    storeList: state
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadData: () => {
            dispatch(() => {
                fetch('/api/cuisine/area/51')
                .then(response => response.json())
                .then(result => {
                    console.log(result.data)
                    dispatch({
                        type: 'NICE',
                        list: result.data.map(({id, gourmetPic, gourmetName, gourmetPrac, tasteDescri}) => ({
                            key: id,
                            gourmetPic:<img src={'http://10.9.163.109:3100/imgUploads/'+gourmetPic} width="70"/>,
                            gourmetName,
                            gourmetPrac,
                            tasteDescri
                        }))
                    })
                })
            })
        }
    }
}

class Shandong extends Component {
  constructor(props) {
    super(props)
    this.state={
        list:''
    }
  }
  componentDidMount() {
    this.props.loadData()
  }

  render() {
    return (
      <Table
        columns={columns}
        pagination={{
          defaultPageSize: 5
        }}
        dataSource={this.props.storeList} />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shandong)
