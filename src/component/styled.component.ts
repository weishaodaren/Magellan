import styled from "styled-components"

const Button = styled.button`
    border-radius: 3px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 11rem;
    color: #126;
    border: 2px solid #000;
    float:right;
    margin-right: 40px;

    ::before{
        content:'“'
    }::after{
        content:'”'
    }

    :hover{
        background-image: linear-gradient(#e66465, #9198e5);
        color:#fff
    }
`

const Paragraph = styled.p`
    margin: 0 auto;
    text-align:left;
    width:80vw;
    text-indent:20px;
    span{
        display:block;
        padding:20px;
        line-height:30px
    }
    :nth-child(1){
           background-color: yellow;
           color:red
    }

    .specialSpan{
        color:blue;
        font-size:16px;
        display:inline;
    }
    &.specialSpan{
        color:blue;
        font-size:20px
    }
    & + &{
        color: orange
    }
    @media (max-width: 400px) {
         background-color:  red;
        }
`

interface AvatarInterface {
    size?: number
    color?: string
}
const Avatar = styled.div`
    width:${(props: AvatarInterface) => props.size}px;
    height:${(props: AvatarInterface) => props.size}px;
    line-height:${(props: AvatarInterface) => props.size}px;
    text-align:center;
    background-color: ${(props: AvatarInterface) => props.color};
    position:absolute;
    top:1px;
    right:1px;
    border-radius:50%;
    color:#fff;
    transform:scale(.7)
`

export {
    Button,
    Paragraph,
    Avatar
}
