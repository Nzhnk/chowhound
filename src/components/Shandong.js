import React, { Component } from 'react';
import { Layout, Breadcrumb, Row, Col, Button, Icon } from 'antd';
const { Content } = Layout;

class Shandong extends Component{
    constructor(props){
        super(props)
        this.state={
            list:[]
        }
    }
    render(){
        return (
            <Layout style={{ padding: '0 24px 24px 8px' }}>
                <Breadcrumb style={{ margin: '12px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>鲁菜</Breadcrumb.Item>
                </Breadcrumb>
                <Content style={{ background: '#fae8c8', padding: 24, margin: 0, minHeight: 280 }}>
                    <div calss="ls-food">
                        <Row type="flex" justify="start"> 
                            {
                                this.state.list.map((item,index)=>{
                                    return(
                                        <Col span={6} style={{marginBottom:'10px',}}>
                                        <div style={{width:'232px',background:'#fff',borderRadius:'5px'}}>
                                            <img style={{width:'232px',height:'232px'}} src={'http://10.9.163.109:3100/imgUploads/'+item.gourmetPic} />
                                            <h3 style={{height:'24px', lineHeight:'24px'}}>{item.gourmetName}</h3>
                                            <p style={{minHeight:'22px', lineHeight:'22px',overflow:'hidden','text-overflow':'ellipsis',display: '-webkit-box','-webkit-line-clamp': 2,'-webkit-box-orient': 'vertical'}}>{item.mattersAtt}</p>
                                            <div style={{height:'22px',lineHeight:'22px'}}><Icon type="pushpin" />{item.tasteDescri}</div>
                                            <div style={{display:'flex', 'align-items': 'center','justify-content':'space-between'}}>
                                                <Button type="danger">删除</Button>
                                                <Button type="primary" style={{marginTop: 0}}>编辑</Button>                                
                                            </div>
                                        </div>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </div>
                </Content>
            </Layout>         
        )
    }
    componentDidMount(){
        fetch('/api/cuisine/area/51')
        .then(response=>response.json())
        .then(result=>{
            console.log(JSON.stringify(result))
            this.setState({
                list:result.data
            })
        })
    }
}


export default Shandong;