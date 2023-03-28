import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg'];

    const changeHandler = (e) => {
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {
            setFile(selected);  
            setError('')
        } else {
            setFile(null);
            setError('Please select an image (png or jpeg)');
        }
    };

    return (
    //   <form>
    //     <label>
    //         <input type="file" onChange={changeHandler} />
    //         <span>+</span>
    //     </label>
    //     <div className='output'></div>
    //         { error && <div className='error'>{ error }</div> }
    //         { file && <div>{ file.name }</div> }
    //         { file && <ProgressBar file={file} setFile={setFile}/> }
    //   </form>

    <View>
      <TouchableOpacity onPress={changeHandler} >
        <Text>+</Text>
      </TouchableOpacity>
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
      {file && <Text>{file.name}</Text>}
      {file && <ProgressBar file={file} setFile={setFile} />}
    </View>
    )
  }
  
  export default UploadForm;