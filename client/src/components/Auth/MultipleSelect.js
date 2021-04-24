/*import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function CheckboxesTags() {
  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={top100Films}
      disableCloseOnSelect
      getOptionLabel={(option) => option.title}
      renderOption={(option, { selected }) => (
        <React.Fragment>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.title}
        </React.Fragment>
      )}
      style={{ paddingBottom:"10px",paddingTop:"10px",width: 810 }}
      renderInput={(params) => (
        <TextField {...params} variant="outlined" label="Catégorie" placeholder="Catégorie" />
      )}
    />
  );
}
const top100Films = [
  { title: 'sports' },
  { title: 'culture' },
  { title: 'musique' },
  
  { title: 'cinema' },
  { title: 'dance'},
  { title: 'travel'},
  { title: 'hiking'},
  { title: '5arja'},
  { title: 'camping',},
  { title: 'a3mal ela t7eb web3edni barka',}
];
  */