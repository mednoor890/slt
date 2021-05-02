import React from 'react';
import styled from 'styled-components'
import {MdClose} from 'react-icons/md'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from '../../actions/posts';
import {  Button } from '@material-ui/core';
import useStyles from './styles';
import FileBase from 'react-file-base64';

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

const initState= { Titre:"",ageMin:"",ageMax:"",description:"" ,ville:"",tel:'',Categorie:"",isAssociative:"", Gouvernorat:"" ,Photo:"" }
function FormActivite(){
 
  const classes = useStyles();
 // const Form = ({ currentId, setCurrentId }) => {
        const [postData, setPostData] = useState(initState);
       //const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
        const dispatch = useDispatch();
        const handleSubmit1 = async (e) => {
            e.preventDefault();
              dispatch(createPost({...postData}));
          };
         
    return(
        <>
       
        <Title> Ajout D'acitivité </Title>
<Background>
<ModalWrapper onSubmit={handleSubmit1}>
<ModalContent>
<Input  type="text" name="Titre" placeholder="saisir un titre" value={postData.Titre} onChange={(e) => setPostData({ ...postData, Titre: e.target.value })}/>
       
<Input type="number" name="ageMin" placeholder="saisir l'age minimal" value={postData.ageMin} onChange={(e) => setPostData({ ...postData, ageMin: e.target.value })}/>
<Input type="number" name="ageMax" placeholder="sasir l'age maximal" value={postData.ageMax} onChange={(e) => setPostData({ ...postData, ageMax: e.target.value })} />
<Input type="text" name="description"  placeholder="decrire l'acitivité et ses detailles" value={postData.description} onChange={(e) => setPostData({ ...postData, description: e.target.value })}/>
<Input type="text" name="ville" placeholder="sasir la ville ou adresse de deroulement" value={postData.ville} onChange={(e) => setPostData({ ...postData, ville: e.target.value })}/>
<Input type="number" name="tel" placeholder=" saisir ton numero de telephone" value={postData.tel} onChange={(e) => setPostData({ ...postData, tel: e.target.value })}/>
<Select name="Categorie">
<option value="" > Categorie</option>
<option value="Sport" >Sport</option>
<option value="Politique">Politique</option>
<option value="Sante">Sante</option>
<option value="culture">Culture</option>
         </Select>
         <Select name="isAssociative">
<option value=" ">Cadre de l'activite</option>
<option value="associative ">Associative</option>
<option value="personnelle">Personnelle</option>
         </Select>
         <Select name="Gouvernorat">
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

         <FileBase placeholder="entrer une image correspendante" multiple={false} onDone={({ base64 }) => setPostData ({ ...postData,Photo: base64 })} />




<Button className={classes.buttonSubmit} variant="contained"  size="large" type="submit" >Publier</Button>

</ModalContent>

</ModalWrapper>


</Background>

        
        
        
        </>
    )
}
export default FormActivite
{{/*<CloseModalButton arial-label="Close modal" onClick={()=>setShowModal(prev=>!prev)} />*/}}