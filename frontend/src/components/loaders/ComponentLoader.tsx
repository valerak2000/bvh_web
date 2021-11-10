import * as React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

const CustomInput = ({children, value, onChange}: CustomInputProps) => {
    return 
      <div>
        <label htmlFor="search">{children}</label>
        <input id="search" type="text" value={value} onChange={onChange} />
      </div>
  }

const loading = () => <LinearProgress style = {{ color: '#4caf50' }} />;
export default loading;
