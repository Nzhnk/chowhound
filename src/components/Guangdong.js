import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Button } from 'antd';
import GuangdongFoodList from './GuangdongFoodList'
import { NavLink } from 'react-router-dom'


const mapStateToProps = (state) => {
  return {
    entities: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadData: () => {
      dispatch(() => {
        fetch('/api/cuisine/area/44')
          .then(response => response.json())
          .then(result => {
            dispatch({
              type: 'NICE',
              list: result.data
            })
          })
      })
    },
    onDeletePost: (_id) => {
      dispatch({
        type: 'GUANGDONG_DELETE',
        _id
      })
    }
  }
}
// /api/cuisine/area/51
class Guangdong extends Component {
  static contextTypes= {
    store:PropTypes.object
  }
  constructor(props,context) {
    super(props)
    this.store=context.store
    this.store.subscribe(()=>{
      this.setState({})
    })
  }

  componentDidMount() {
    this.props.loadData()

  }


  render() {
    console.log(this.props.onEditList)
    const { entities ,onDeletePost ,onEditList } = this.props
    return (

      <div className="container">
        <div className="menu-title">
          <h3>粤菜</h3>
          <div className="line">
          </div>
          <p className="proident">粤菜即广东菜，是中国传统四大菜系、八大菜系之一，发源于岭南。粤菜由广州菜（也称广府菜）、潮州菜（也称潮汕菜）、东江菜（也称客家菜）三种地方风味组成，三种风味各具特色。在世界各地粤菜与法国大餐齐名，由于广东海外华侨数量占全国六成，因此世界各国的中菜馆多数是以粤菜为主。</p>
        </div>
        <Button type="primary"><NavLink to='/home/add'  exact>添加</NavLink></Button>
        <GuangdongFoodList
          entities={entities}
          onDeletePost={ onDeletePost }
        />
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Guangdong)
