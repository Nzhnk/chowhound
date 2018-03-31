import React, {Component} from 'react'

import { Table, Button } from 'antd';

import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        storeList: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        listItem: () => {
            dispatch(() => {
                fetch('/api/cuisine/area/37')
                .then(response => response.json())
                .then(result => {
                    console.log(result.data)
                    dispatch({
                        type: 'GET_DATA',
                        dataList: result.data.map(({_id, gourmetPic, gourmetName, gourmetPrac, tasteDescri,gourmetArea,uploadTime,mattersAtt}) => ({
                            key: _id,
                            gourmetPic:<img src={'http://10.9.163.109:3100/imgUploads/'+gourmetPic} width="70" height="70"/>,
                            gourmetName,
                            gourmetPrac,
                            tasteDescri,
                            gourmetArea,
                            uploadTime,
                            mattersAtt
                        }))
                    })
                })
            })
        },
        onClickButton:(text)=>{
            console.log(text)
            // fetch('/api/cuisine/remove/'+text.key)
            // .then(response => response.json())
            // .then(res => {           
            //     dispatch({
            //         type:'DELETE',
            //         id:text.key
            //     })
            // })
        }
    }
}

class Shandong extends Component {
    constructor(props) {
        super(props)
        this.state={
            columns:[{
                title: '美食图片',
                dataIndex: 'gourmetPic',
                key: 'gourmetPic',
            }, {
                title: '美食名称',
                dataIndex: 'gourmetName',
                key: 'gourmetName',
            }, {
                title:'美食地区',
                dataIndex:'gourmetArea',
                key:'gourmetArea'
            },{
                title: '美食做法',
                dataIndex: 'gourmetPrac',
                key: 'gourmetPrac',
            }, {
                title: '口味描述',
                dataIndex: 'tasteDescri',
                key: 'tasteDescri',
            }, {
                title: '上传时间',
                dataIndex: 'uploadTime',
                key: 'uploadTime',
            }, {
                title: '操作',
                dataIndex: 'ation',
                render: (text, record) => (
                    <div>
                        <Button type="danger" onClick={() => this.props.onClickButton(text,record)} className="positionChange">删除</Button>
                        <Button type="primary" className="positionChange" ghost>编辑</Button>
                    </div>
                ),
            }]
        }
    }
    componentDidMount() {
        this.props.listItem()
    }
    render() {
        return (
            <Table
                columns={this.state.columns}
                bordered
                expandedRowRender={record => <p>注意事项：{record.mattersAtt}</p>}
                pagination={{
                defaultPageSize: 5
                }}
                dataSource={this.props.storeList} 
            />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shandong)
