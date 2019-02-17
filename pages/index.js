import React,{Component} from 'react';
import Layout from '../components/Layout';
import { Button,Icon, Card, Image,Label,Input  } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import getFactorySummary from '../ethereum/getFactorySummary';
import getContractSummary from '../ethereum/getContractSummary';
import deployedContracts from '../ethereum/deployedContracts';
import { Link, Router} from '../routes';



class ContractIndex extends Component{
  static async getInitialProps(){
    
    const deployedContractsLength = await factory.methods.getDeployedContractsLength().call();

    const summary = await Promise.all(
      Array(parseInt(deployedContractsLength))
      .fill()
      .map((element, index) =>{
        return factory.methods.deployedContracts(index).call();
      })
    );

    // const homeTeam = await Promise.all(
    //   Array(parseInt(deployedContractsLength))
    //   .fill()
    //   .map((element, index) =>{
    //     return deployedContracts(summary[0]).methods.homeTeam(index).call();
    //   })
    // );
  

    return{summary,deployedContractsLength};
  }

renderHeader(){
  const LabelExampleDetail = () => (
  <Label style = {{marginBottom: '10px'}}>
    Deployed Contracts
    <Label.Detail>{this.props.deployedContractsLength}</Label.Detail>
  </Label>
)

return <LabelExampleDetail/>;
}


  renderContracts(){
    //

   const CardExampleGroups = () => (
  <Card.Group>
  {this.props.summary.map(summary =>{


    return(
    <Card  style={{width:'400px',height:'200px'}}>

      <Card.Content>
        <Image floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
        <Card.Header></Card.Header>
        <Card.Meta style={{fontSize:'15px'}} >
        Home :<strong style={{fontSize:'15px',color:'black'}}>{ summary[1] } Wei</strong> Away: <strong style={{fontSize:'15px',color:'black'}}>{ summary[1] } Wei</strong>
        <br></br>
        { summary[6] }  <strong style={{fontSize:'15px',color:'black'}}>VS</strong> { summary[7] }.
        <br></br>
        Date { summary[3] }/{ summary[4] }/{ summary[5] }. 
        <br></br>
        <br></br>
        Enter Bet: <Input style = {{height: '25px'}}></Input>
        </Card.Meta>
        <Card.Description>

        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
        <Link route = {`/contracts/${summary[2]}`}>
          <Button basic color='green' style = {{font: '10px', width : '180px',height: '40px'}}>
            Bet on { summary[6] }
          </Button>
          </Link>
          <Link route = {`/contracts/${summary[2]}/bid`}>
          <Button basic color='red' style = {{font: '10px', width : '180px',height: '40px'}}>
            Bet on { summary[7] }
          </Button>
          </Link>
        </div>
      </Card.Content>
    </Card>
)
    })
  }
        </Card.Group>
)
  return <CardExampleGroups/>;
  }

  render(){
      return(
        <Layout>
        <div>
        {this.renderHeader()}
        {this.renderContracts()}
        </div>
        </Layout>
      );

  }
}
export default ContractIndex;
