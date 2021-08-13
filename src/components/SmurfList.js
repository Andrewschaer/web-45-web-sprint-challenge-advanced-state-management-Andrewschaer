import React from 'react';
import { connect } from "react-redux";
import Smurf from './Smurf';

 const SmurfList = (props)=> {
    const isLoading = props.isFetching;

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return(<div className="listContainer">
        {props.smurfData.map(smurf => {
            return(
            <Smurf key={smurf.id} smurf={smurf}/>
        )})}
    </div>);
}

const mapStateToProps = state => {
    return {
        smurfData: state.smurfData,
        isFetching: state.isFetching,
        errorMessage: state.errorMessage
    };
}

export default connect(mapStateToProps)(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.