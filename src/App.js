import { Widget } from '@covalenthq/dex-widget-react-library';


function App() {
  return (
    <Widget 
      chain_id='1'
      dex_name='sushiswap'
      api_key= {process.env.REACT_APP_APIKEY}
      bg_color='black'
      text_color='white'
    /> 
  );
}

export default App;
