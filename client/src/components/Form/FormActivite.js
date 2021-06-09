import React from 'react';
import styled,{keyframes} from 'styled-components'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from '../../actions/posts';
import {FormButton} from '../Auth/Auth'
import useStyles from './styles';
import { useHistory } from 'react-router-dom';
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
 export const Wrapper=styled.div`
width:105%;
margin-top:80px;
margin-left:-30px;
height:50vh;
background-color:#001111;
opacity:0.9;
border-radius:2px;
display:flex;
align-items:center;
font-family:"Courier New";
`
export const textAnimation=keyframes`
0%
{
  transform: scale( .75 );
  color:white;
  
}
20%
{
  transform: scale( 1 );
  color:orange;

}
40%
{
  transform: scale( .75 );
 color:tomato;
}
60%
{
  transform: scale( 1 );
  color:red;
}
80%
{
  transform: scale( .75 );
  color:red;
}
100%
{
  transform: scale( .75 );
  color:red;
}
}
`
export const Name=styled.h1`
font-size:42px;
text-align:center;
padding:30px;
border-radius:35px;
animation-name:${textAnimation};
animation-duration:10s;
animation-iteration-count:infinite;
font-family:font-family:"cursive";
`
export const Select = styled.select`
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
toast.configure()
const initState= { Titre:"",ageMin:"",ageMax:"",description:"" ,ville:"",tel:'',categorie:"",isAssociation:"", Gouvernorat:"" ,Photo:"",Datederoulement:"",temps:"" }
function FormActivite({ currentId, setCurrentId }){
 
  const classes = useStyles();
 // const Form = () => {
        const [postData, setPostData] = useState(initState);
        const user = JSON.parse(localStorage.getItem('profile'));
        const history = useHistory();
        const userData=useSelector((state)=>state.auth)
        
       const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
      useEffect(() => {
        if (post) setPostData(post);
      }, [post]);  
      const dispatch = useDispatch();
        const handleSubmit1 = async (e) => {
            e.preventDefault();
            //const isValid=formValidation()
              dispatch(createPost({...postData,name: user?.result?.Nom ,Avatar: user.result?.selectedFile}, history) );
          };

         const notify=()=>{
           if((postData.Titre.length==0)||(postData.ageMax > "100" )||(postData.ageMin< "6")||(postData.description.length==0)||(postData.category.length==0)||(postData.Gouvernorat.length==0)) {
           toast('veuillez verifier les informations saisie')
         }
         else{
         toast('activite ajouté')
        }}
        if (!user?.result?.Nom) {
          return (
            <>
            <Wrapper>
              <Name variant="h6" align="center">
                Pour creer des activites et plus de fonctionalites veuillez creer un compte ou connecter si vous avez deja un compte ⚠️⚠️
              </Name>
              </Wrapper>
            </>
          );
        }
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
<Input  type="date" placeholder="saisir la date de deroulement" name="birthday" value={postData.Datederoulement} onChange={(e) => setPostData({...postData,Datederoulement: e.target.value})} />
<Input  type="time" placeholder="saisir le temps de rendez-vous" name="birthday1" value={postData.temps} onChange={(e) => setPostData({...postData,temps: e.target.value})} />

<Select name="categorie" value={postData.categorie} onChange={(e) => setPostData({ ...postData, categorie: e.target.value })}>
<option value="" > Categorie</option>
<option value="Sport" >Sport</option>
<option value="Politique">Politique</option>
<option value="Sante">Sante</option>
<option value="culture">Culture</option>
         </Select>
         <Select name="isAssociation" value={postData.isAssociation} onChange={(e) => setPostData({ ...postData, isAssociation: e.target.value })} >
<option value=" ">Cadre de l'activite</option>
<option value="associative ">Associative</option>
<option value="personnelle">Personnelle</option>
         </Select>
        
         <Select name="Gouvernorat" value={postData.Gouvernorat} onChange={(e) => setPostData({ ...postData, Gouvernorat: e.target.value })} >
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
         


         </Select>
          
         <FileBase placeholder="entrer une image correspendante" multiple={false} onDone={({ base64 }) => setPostData ({ ...postData,Photo: base64 })} />




<FormButton    style={{ marginLeft: '2px'}} onClick={notify} size="large" type="submit" >Publier</FormButton>

</ModalContent>

</ModalWrapper>


</Background>

        
        

        </>
    )
}
export default FormActivite
{{/*<CloseModalButton arial-label="Close modal" onClick={()=>setShowModal(prev=>!prev)} />*/}}