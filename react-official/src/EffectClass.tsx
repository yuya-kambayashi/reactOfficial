import React, { Component } from 'react'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

class EffectClass extends Component<{}, {count: number} > {
  constructor(props: any){
    super(props);
    this.state = {
      count: 0,
    }
  }

  componentDidMount(){
    document.title =`${this.state.count}回クリックされました`
  }

  componentDidUpdate(){
    document.title =`${this.state.count}回クリックされました`
  }

  render() {
    return (
      <>
        <p>{`${this.state.count}回クリックされました`}</p>
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button onClick={()=> this.setState({count: this.state.count + 1})} >
            ボタン
          </Button>
          <Button onClick={()=> this.setState({count: 0})}>
            リセット
          </Button>
        </ButtonGroup>
      </>
    )
  }
}

export default EffectClass