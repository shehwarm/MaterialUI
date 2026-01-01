import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

function App(){
  let handleClick = () => {
    alert("Button clicked!");
  }

  return (
    <>
       <h1>Hello World</h1>
       <Button 
       variant="contained" 
       onClick={handleClick} 
       startIcon={<DeleteIcon />} 
       color="error" 
       size="small">
       delete
       </Button>
    </>
  );
}

export default App; 