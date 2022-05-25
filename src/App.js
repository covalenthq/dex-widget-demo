import { Widget } from '@covalenthq/dex-widget-react-library';

function App() {
  return (
    <Widget 
      chain_id='1'
      dex_name='sushiswap'
      api_key='ckey_4e73d56514984838ab3206fbaf4'
      bg_color='grey'
      text_color='white'
    /> 
  );
}

export default App;
