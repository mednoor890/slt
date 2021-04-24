/*mport React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function RadioButtonsGroup() {
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div style={{alignItems:"center"}}>
    <FormControl component="fieldset">
      <FormLabel component="legend">sexe</FormLabel>
      <RadioGroup aria-label="gender" name="gender" value={value} onChange={handleChange}>
        <FormControlLabel value="femme" control={<Radio />} label="Femme" />
        <FormControlLabel value="homme" control={<Radio />} label="homme" />
       
        
      </RadioGroup>
    </FormControl>
    </div>  
  );
}*/
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function ComboBox() {
  return (
    <Autocomplete
      id="combo-box-demo"
      options={top100Films}
      getOptionLabel={(option) => option.title}
      style={{ width: 350 }}
      renderInput={(params) => <TextField {...params} label="Sexe" variant="outlined" />}
    />
  );
}

const top100Films = [
  {title:"Homme"},
  {title:"Femme"}]