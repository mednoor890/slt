import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function ComboBox() {
  return (
    <Autocomplete
      id="combo-box-demo"
      options={Gouvernorat}
      getOptionLabel={(option) => option.title}
      style={{ width: 350 }}
      renderInput={(params) => <TextField {...params} label="Gouvernorat" variant="outlined" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const Gouvernorat = [
  {title:"beja"},
  {title:"ariana"},
{title:"ben arous"},
{title:"bizerte"},
{title:"gabes"},
{title:"gafsa"},
{title:"jendouba"},
{title:"kairouan"},
{title:"kasserine"},
{title:"kebili"},
{title:"kef"},
{title:"mahdia"},
{title:"manouba"},
{title:"medenine"},
{title:"monastir"},
{title:"nabeul"},
{title:"sfax"},
{title:"sidi bouzid"},
{title:"siliana"},
{title:"sousse"},
{title:"tattaouine"},
{title:"tozeur"},
{title:"tunis"},
{title:"zaghouan"},
];