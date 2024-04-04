import React from 'react';
import { Component} from 'react';
import VerTodasTop from '../../Components/VerTodasTop/VerTodasTop';
class ScreenVerTodasTop extends Component {
    constructor (props){
        super(props);
        this.state = {/* data:null */}
    }
    
    render(){
        return(
            <div>
                <VerTodasTop />
            </div>
        )
    }
}

export default ScreenVerTodasTop