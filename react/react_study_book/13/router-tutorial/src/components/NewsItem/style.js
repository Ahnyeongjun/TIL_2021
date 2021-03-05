import styled from 'styled-components';

export const NewsItemBlock = styled.div`
grid-column-start:1;
grid-column-end:3;
&+&{
    margin-top:3rem;
}
`
export const Thumbnail = styled.div`
margin-right:1rem;
img{
    display:block;
    width:160px;
    height:100px;
    object-fit:cover;
}
`
export const Contents = styled.div`
h2{
    margin:0;
    a{
        color:black;
    }

}
p{
    margin:0;
    line-height:1.5;
    margin-top:0.5rem;
    white-space:normal;

}
`