import React from 'react';
import styled from 'styled-components'
import {MdClose} from 'react-icons/md'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPostASS } from '../../actions/associations';
import {  Button } from '@material-ui/core';
import FileBase from 'react-file-base64';
import {Wrapper,Name } from '../Form/FormActivite'

const Background=styled.div`
width:100%;
height:100%;
position:relative;
display:flex;
justify-content:center;
align-items:center;
`
const Title=styled.h3`
color:black;
margin-Top:8px;
margin-left:500px;
font-size:24px;
`
const ModalWrapper=styled.form`
width:500px;
margin-bottom:25px;
padding:5px 5px 5px 5px;
height:100%;
box-shadow: 0 5px 16px rgba(30, 120, 50, 1.2);
  background: white;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`
const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #14141A;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: black;
    color: coral;
    border: none;
  }
`;

/*const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;*/
const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  width:450px;
  background: whitesmoke;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: black;
  }
`;
const Select = styled.select`
  width: 470px;
  height: 35px;
  background: whitesmoke;
  color: black;
  margin-top:18px;
  padding-left: 5px;
  font-size: 18px;
  border: none;
  border-radius:3px;
  margin-left: 10px;

  option {
    color: black;
    background: whitesmoke;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 20px 1px;
    ::placeholder {
      color: ;
    }
  }
`
/* Nom, email , categorie , ville  ,description,Gouvernorat , Photo*/



const initState= { Nom:"",email:"",description:"" ,ville:"",Categorie:"", Gouvernorat:"" ,Photo:"" }
function FormAss(){
  
 // const Form = ({ currentId, setCurrentId }) => {
        const [postDataas, setpostDataas] = useState(initState);
        const user = JSON.parse(localStorage.getItem('profile'));
       //const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
        const dispatch = useDispatch();
        const handleSubmit1 = async (e) => {
            e.preventDefault();
              dispatch(createPostASS({...postDataas}));
          };
         
         if (!user?.result?.Nom) {
           return (
             <>
             <Wrapper>
               <Name variant="h6" align="center">
                 Pour creer des associations et plus de fonctionalites veuillez creer un compte ou connecter si vous avez deja un compte ⚠️⚠️
               </Name>
               </Wrapper>
             </>
           );
         }
    return(
        <>
<Title> Ajout D'association </Title>
       
<Background>

<ModalWrapper onSubmit={handleSubmit1}>
<ModalContent>
<Input  type="text" name="Nom" placeholder="saisir un nom d'association" value={postDataas.Nom} onChange={(e) => setpostDataas({ ...postDataas, Nom: e.target.value })}/>
       
<Input type="text" name="email" placeholder="saisir un email" value={postDataas.email} onChange={(e) => setpostDataas({ ...postDataas, email: e.target.value })}/>
<Input type="text" name="description"  placeholder="decrire l'association et ses detailles" value={postDataas.description} onChange={(e) => setpostDataas({ ...postDataas, description: e.target.value })}/>
<Input type="text" name="ville" placeholder="sasir la ville ou adresse de deroulement" value={postDataas.ville} onChange={(e) => setpostDataas({ ...postDataas, ville: e.target.value })}/>
<Select name="Categorie" 
name="Categorie" fullWidth value={postDataas.categorie} onChange={(e) => setpostDataas({ ...postDataas, categorie: e.target.value.split(',') })}
inputProps={{
 name: "categorie",
 id: "categorie"
 
}}
>
<option value="" > Categorie</option>
<option value="Sport" >Sport</option>
<option value="Politique">Politique</option>
<option value="Sante">Sante</option>
<option value="culture">Culture</option>
         </Select>
         <Select name="Gouvernorat" fullWidth value={postDataas.Gouvernorat} onChange={(e) => setpostDataas({ ...postDataas, Gouvernorat: e.target.value.split(',') })}
                         inputProps={{
                          name: "Gouvernorat",
                          id: "Gouvernorat"
                          
                        }}
        
         >
         <option value="">Gouvernorat</option>
         <option value="ariana ">Ariana</option>
         <option value="Beja ">Beja</option>
         <option value="BenArous ">BenArous</option>
         <option value="Bizerte ">Bizerte</option>
         <option value="Gabes ">Gabes</option>
         <option value="Jendouba ">Jendouba</option>
         <option value="Kairouan ">Kairouan</option>
         <option value="kasserine ">kasserine</option>
         <option value="Kebili ">Kebili</option>
         <option value="Lekef ">Lekef</option>
         <option value="Mahdia ">Mahdia</option>
         <option value="Manouba ">Manouba</option>
         <option value="Medenine ">Medenine</option>
         <option value="Monastir ">Monastir</option>
         <option value="Nabeul ">Nabeul</option>
         <option value="Sfax ">Sfax</option>
         <option value="Sidi bouzid ">Sidi bouzid</option>
         <option value="Silliana ">Silliana</option>
         <option value="Sousse ">Sousse</option>
         <option value="Tattaouine ">Tattaouine</option>
         <option value="Tozeur ">Tozeur</option>
         <option value="Tunis ">Tunis</option>
         <option value="Zaghouan ">Zaghouan</option>
         <option value="associative ">Associative</option>



         </Select>

         <FileBase placeholder="entrer une image correspendante" multiple={false} onDone={({ base64 }) => setpostDataas ({ ...postDataas,Photo: base64 })}/>
         



<Button  variant="contained"  size="large" type="submit" color="primary" >Publier</Button>

</ModalContent>

</ModalWrapper>


</Background>

        
        
        
        </>
    )
}
export default FormAss