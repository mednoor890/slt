import React,{useState} from 'react'
import styled,{keyframes} from 'styled-components';

const Wrapper=styled.div`
width:105%;

margin-left:-30px;
height:25vh;
background-color:#000013;
border-radius:2px;
display:flex;
align-items:center;
`
const textAnimation=keyframes`
0%   {background-color:black;color:red; left:0px; top:80px;transform:translateX(100px)}
25%  {background-color:white;color:coral; left:200px; top:80px;}
50%  {background-color:black;color:#f50057; left:200px; top:200px;}
75%  {background-color:white;color:turquoise; left:850px; top:200px;}
100% {background-color:black;color:red; left:20px; top:10px;}
`
const Name=styled.h1`
font-size:42px;
text-align:center;
margin-left:30%;
padding:30px;
border-radius:35px;
animation-name:${textAnimation};
animation-duration:10s;
animation-iteration-count:infinite;
font-family:font-family:"cursive";
`
const ImageWrapper=styled.div`
height:200px;
width:250px;

border-radius:90%;
margin-left:40%;
`
const Image=styled.img`
height:180px;
width:200px;
border:2px groove black;
border-radius:50px;
margin-top:-18px;
`
const Button=styled.button`
display: block;
width: 20%;
padding: 12px 0;
font-family: inherit;
font-size: 22px;
font-weight: 700;
color: coral;
background-color: black;
border: 0;
border-radius: 35px;
box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
cursor: pointer;
transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
margin-left:25%;
&:hover {
  box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
  transform: translate(0, -5px);
  background-color:coral;
  font-size:22px;
color:black;
}
`
const Button2=styled.button`
display: block;
width: 20%;
padding: 12px 0;
font-family: inherit;
font-size: 22px;
font-weight: 700;
color: coral;
background-color: black;
border: 0;
border-radius: 35px;
box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
cursor: pointer;
transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
margin-left:25%;
&:hover {
  box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
  transform: translate(0, -5px);
  background-color:coral;
  font-size:22px;
color:black;
}
`
const ButtonWrapper=styled.div`
display:flex;
width:50%;
margin-left:20%;
`
const KtibaWrapper=styled.div`
display:flex;
width:50%;
margin-left:20%;
`
const Ktiba1=styled.h1`
font-size:22px;
`
const Ktiba2=styled.h1`
font-size:22px;
`
function Profil() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    return (
        <>
        <Wrapper>
                       <Name>bienvenue dans le profil de {user?.result.Nom} {user?.result.Prenom}</Name> 
                       
        </Wrapper>
        
        <ImageWrapper> 
        <Image  alt={user?.result.Nom} src={user?.result.selectedFile}/>    

        </ImageWrapper>
              
    
    
    
    
    </>
    )
}

export default Profil
