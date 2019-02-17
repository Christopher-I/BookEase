import React,{Component} from 'react';
import { Form,Label,Button,Checkbox,TextArea,Input,Message} from 'semantic-ui-react';
import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router} from '../../routes';

class CreateContract extends Component{
  state = {
  bidAmount: '',
  day: '',
  month: '',
  year: '',
  teamPick: '',
  homeTeam:'',
  awayTeam: '',
  handicap:''
  };

onSubmit = async (event) =>{
  event.preventDefault();


this.setState({loading:true});
try{
  const accounts = await web3.eth.getAccounts();
  await factory.methods
  .createContract(this.state.bidAmount,this.state.teamPick, this.state.day,this.state.month,this.state.year, this.state.homeTeam,this.state.awayTeam,this.state.handicap)
  .send({
    value: this.state.bidAmount,
    from:accounts[0]
  });
  Router.pushRoute('/');//redirect user back to Open Bids page(index)
}catch (err) {
  this.setState({errorMessage: err.message});
}
this.setState({loading:false});
};


  render(){
    const {Input, Group,Field} = Form;
    return (
      <Layout>
    <h3>Create New Bet</h3>
    <Form onSubmit = {this.onSubmit} error={!!this.state.errorMessage}>

      <Group widths='equal'>
      <Input fluid label='Day' placeholder=''
      value = {this.state.day} onChange={event =>this.setState({day: event.target.value})}/>

      <Input fluid label='Month' placeholder=''
      value = {this.state.month} onChange={event =>this.setState({month: event.target.value})}/>

      <Input fluid label='Year' placeholder=''
      value = {this.state.year} onChange={event =>this.setState({year: event.target.value})}/>
        </Group>

      <Group widths='equal'>
      <Input fluid label='Bid Amount' placeholder='100Wei'
      value = {this.state.bidAmount} onChange={event =>this.setState({bidAmount: event.target.value})} />
      <Input fluid label='Home Team Name' placeholder='Milwaukee Bucks'
      value = {this.state.homeTeam} onChange={event =>this.setState({homeTeam: event.target.value})}/>
      <Input fluid label='Away Team Name' placeholder='Houston Rockets'
      value = {this.state.awayTeam} onChange={event =>this.setState({awayTeam: event.target.value})}/>
    </Group>

      <Group widths='equal'>
      <Input fluid label='Pick a Team(0 for home and 1 for away)' placeholder=''
      value = {this.state.teamPick} onChange={event =>this.setState({teamPick: event.target.value})}/>
      <Input fluid label='Handicap' placeholder=''
      value = {this.state.handicap} onChange={event =>this.setState({handicap: event.target.value})}/>
    </Group>


    <Message error header = "Error, please ensure your entries are correct" content = {this.state.errorMessage}/>
    <Button loading = {this.state.loading} type='submit'>Deploy</Button>

    </Form>
    </Layout>
  )
  }
}

export default CreateContract;
