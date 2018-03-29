import React from 'react'

import { Button } from 'antd';
import { NavLink } from 'react-router-dom'


export default ({ entities, onDeletePost }) => {

  return (
    <div className="menu-page-grids">
    	{
	        entities.map((item) => (
				<div className="menu-grids-info-out" key={ item.id }>
					<div className="menu-grids-info">
		              	<img src={item.gourmetPic} alt="" title=""/>
		              	<h4>{item.gourmetArea}</h4>
		              	<p className="hid">{item.tasteDescri}</p>
		              	<p className="cook">做法：{item.gourmetPrac}</p>
		              	<p className="hid">注意事项：{item.mattersAtt}</p>
		              	<div className="menu-rate">
		                	<h5>{item.gourmetName}</h5>
		              	</div>
		            </div>
		            <Button onClick={ () => onDeletePost(item.id) } type="danger">删除</Button>
		            <Button><NavLink to='/home/itemlist' exact>编辑</NavLink></Button>
	            </div>
	        	)
	        	
	        )
	    }
    </div>
  )
}
