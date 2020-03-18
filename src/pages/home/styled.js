import styled from "styled-components"

export const HeaderContainer =styled.div`
    width: 100%;
    height: .8rem;
    background: ${props=>props.color};
    div{
        height: 100%;
        display: flex;
        padding: 0 .3rem;
        align-items: center;
        font-size: .28rem;
        color: #333;
    }
    .down{
        margin-left:.05rem;
        margin-top:.1rem;
        font-size:.12rem;
        color:#333;
    }
`

export const SearchContainer=styled.div`
    width: 100%;
    height: .74rem;
    padding:0 .3rem;
    background:#fff;
    .search{
        width: 100%;
        height: 100%;
        background: #f5f5f5;
        border-radius: .37rem;
        display: flex;
        align-items: center;
        font-size: .28rem;
        color: #999;
        span:nth-of-type(1){
            width:.74rem;
            height: 100%;
            text-align:center;
            line-height:.74rem;
        }
        span:nth-of-type(2){
            height: 100%;
            line-height: .74rem;
        }
    }

`

export const StyledContainer=styled.ul`
    width: 120%;
    padding:.31rem 0 0;
    background: #fff;
    display:flex;
    /* justify-content:space-around; */
    flex-wrap:wrap;
    li{ 
        /* flex-shrink:0; */
        margin: 0 .35rem;
        width:.8rem;
        height: 1.6rem;
       
        div{
            margin: 0 auto;
            width: .8rem;
            height: .8rem;
            img{
                width: 100%;
                height:100%;
            }
        }
        p{  
            text-align:center;
            font-size:.16rem;
            margin-top:.1rem;
        }

    }

`

export const SortContainer=styled.div`
    width: 100%;
    height: .88rem;
    background: #fff;
    padding:.3rem;
    font-size:.28rem;
    line-height:1;
    .left{
        float:left;
        display:flex;
        align-items: center;
        &>span{
            margin-right:.2rem;
        }
    }
    .right{
        float:right;
    }
    .down{
        font-size:.1rem;
    }
`