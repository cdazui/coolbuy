import React, { Component, Fragment } from 'react'
import { HeaderContainer, SearchContainer,StyledContainer,SortContainer } from "./styled"
class Home extends Component {
    render() {
        return (
            <Fragment>
                <HeaderContainer color="white">
                    <div>
                        <span>送至：华润大厦(东门)</span>
                        <span className="iconfont down">&#xe614;</span>
                    </div>
                </HeaderContainer>
                {/* 搜索 */}
                <SearchContainer>
                    <div className="search">
                        <span className="iconfont">&#xe62f;</span>
                        <span>大家都在搜：麻辣烫</span>
                    </div>
                </SearchContainer>
                {/* styles */}
                <StyledContainer>
                    <li>
                        <div>
                            <img src="https://image-star.elemecdn.com/pb/0968f0ff603484d17a507ee5fbf09cb8ac" alt=""/>
                        </div>
                        <p>餐饮</p>
                    </li>
                    <li>
                        <div>
                            <img src="https://image-star.elemecdn.com/pb/0968f0ff603484d17a507ee5fbf09cb8ac" alt=""/>
                        </div>
                        <p>餐饮</p>
                    </li>
                    <li>
                        <div>
                            <img src="https://image-star.elemecdn.com/pb/0968f0ff603484d17a507ee5fbf09cb8ac" alt=""/>
                        </div>
                        <p>餐饮</p>
                    </li>
                    <li>
                        <div>
                            <img src="https://image-star.elemecdn.com/pb/0968f0ff603484d17a507ee5fbf09cb8ac" alt=""/>
                        </div>
                        <p>餐饮</p>
                    </li>
                    <li>
                        <div>
                            <img src="https://image-star.elemecdn.com/pb/0968f0ff603484d17a507ee5fbf09cb8ac" alt=""/>
                        </div>
                        <p>餐饮</p>
                    </li>
                    <li>
                        <div>
                            <img src="https://image-star.elemecdn.com/pb/0968f0ff603484d17a507ee5fbf09cb8ac" alt=""/>
                        </div>
                        <p>餐饮</p>
                    </li>
                    <li>
                        <div>
                            <img src="https://image-star.elemecdn.com/pb/0968f0ff603484d17a507ee5fbf09cb8ac" alt=""/>
                        </div>
                        <p>餐饮</p>
                    </li>
                </StyledContainer>
                {/* sort */}
                <SortContainer>
                    <div className="left">
                        <div>
                            <span>综合排序</span>
                            <span className="iconfont down">&#xe614;</span>
                        </div>
                        <span>销量</span>
                        <span>距离</span>
                    </div>
                    <div className="right">
                        <span>筛选</span>
                        <span className="iconfont down">&#xe614;</span>
                    </div>
                </SortContainer>
            </Fragment>

        )
    }
}


export default Home