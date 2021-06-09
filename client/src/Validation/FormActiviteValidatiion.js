import * as yup from "yup";

export const form1Schema = yup.object().shape({
Titre:yup.string().required,
ageMin:yup.number().required.positive().integer(),
ageMax:yup.number().required.positive().integer(),
description:yup.string().required(),
ville:yup.string().required(),
tel:yup.number.min(8).max(8).required(),
categorie:yup.string().required(),
isAssociation:yup.string().required,
Gouvernorat:yup.string().required(),
Datederoulement:yup.string().required,
temps:yup.string().required(),
})
//const initState= { Titre:"",ageMin:"",ageMax:"",description:"" ,ville:"",tel:'',categorie:"",isAssociation:"", Gouvernorat:"" ,Photo:"",Datederoulement:"",createur:"",temps:"" }
