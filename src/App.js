<<<<<<< HEAD
import React from 'react';
import './App.css';
import Login from './Login';
import Registration from './Registration';

function App() {


  return (
    <div className="App">
      <div class="login-page">
        <Login />
      </div>
    </div>
  );
}

export default App;
=======
import React, { Component, handleSubmit } from 'react';
import { Box, Text, Grommet,Tab,Tabs, Button, Heading, TextInput, Form, Main, FormField } from 'grommet';
import { Search as SearchIcon, Hpe } from 'grommet-icons';
 


export default class App extends Component {
    documentData;
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            Device1: '',
            Device2: '',
            Device3: '',
            Device4: '',
            Device5: '',
            Device6: ''
        }
    }
 
handleChange= (e)=> {
    this.setState({[e.target.name]:e.target.value});
}

//button 

handleFormSubmit(e) {
    e.preventDefault()
   localStorage.setItem('document',JSON.stringify(this.state));
}
 
componentDidMount() {
    this.documentData = JSON.parse(localStorage.getItem('document'));
}

handleSubmit=() => {
    alert("Resert clicked")
}

AppBar = (props) => (
    <Box
      tag='header'
      direction='row'
      align='center'
      justify='between'
      background='brand'
      pad='small'
      elevation='medium'
      style={{ zIndex: '1' }}
      {...props}
    />
  );

  theme = {
    global: {
      colors: {
            brand: '#01A982',
          },
      font: {
        family: 'Roboto',
        size: '18px',
        height: '20px',
      },
    },
  };


 
render() {
    return (
        <Grommet theme={this.theme}>
            <this.AppBar>
                <Box direction="row" gap="small" >
                    <Hpe color="white"/>
                    <Text color="text-strong" weight="bold"> HPE </Text>
                </Box>
                <Button icon={<SearchIcon />} onClick={() => {} }/>
            </this.AppBar>
            
        <Main pad="large">
            <Heading>Asset Database</Heading>
            <Tabs justify="start">
                <Tab title="Primary Device">
                    <Box justify="center">
                        <Form gap="small" >
                            <FormField label="Device Class"  width='large'>
                                <TextInput placeholder="Enter Device Class" type="text" name="Device1"  value={this.state.Device1} onChange={this.handleChange} />
                            </FormField>
                            <FormField label="Adapter Serial No." width='large'>
                                <TextInput placeholder="Enter Adapter Serial No."  type="text" name="Device2" value={this.state.Device2} onChange={this.handleChange} />
                            </FormField>
                            <FormField label="Adapter in System" width='large'>
                                <TextInput placeholder="Enter Adapter in System" type="text" name="Device3" value={this.state.Device3} onChange={this.handleChange} />
                            </FormField>
                            <Box direction="row" gap="medium" >
                                <Button type="submit" alignSelf="center" primary label="Submit" onClick={this.handleFormSubmit} />
                                <Button type="reset" alignSelf="center" primary label="Reset" onClick={this.handleSubmit}/>
                            </Box>                   
                        </Form>
                    </Box>
                </Tab>
                <Tab title="Processor Device">
                    <Box justify="center">
                        <Form gap="small" pad="small">
                            <FormField label="Processor Serial No."  width='large'>
                                <TextInput placeholder="Enter Processor Serial No." type="text" name="Device4"  value={this.state.Device4} onChange={this.handleChange} />
                            </FormField>
                            <FormField label="Processor Model" width='large'>
                                <TextInput placeholder="Enter Processor Model"  type="text" name="Device5"  value={this.state.Device5} onChange={this.handleChange} />
                            </FormField>
                            <FormField label="Processor frequency" width='large'>
                                <TextInput placeholder="Enter Processor frequency" type="text" name="Device6" value={this.state.Device6} onChange={this.handleChange} />
                            </FormField>
                            <Box direction="row" gap="medium" >
                                <Button type="submit" alignSelf="center" primary label="Submit" onClick={this.handleFormSubmit} />
                                <Button type="reset" alignSelf="center" primary label="Reset" />
                            </Box>                   
                        </Form>
                    </Box>
                </Tab>
            </Tabs>
            <Button type="Add" alignSelf="end" primary label="Add Asset" background="brand" />
        </Main>

        <Box background="brand" pad="small">
            <small>@ 2021 Hewlett Packard Enterprise </small> 
        </Box>
        </Grommet>
    )
}
}
>>>>>>> 2c4f88abab0e70bc19e395d769fe89211c38bead
