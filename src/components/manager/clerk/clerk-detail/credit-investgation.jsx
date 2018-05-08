import React, {Component} from 'react';

import BarChartComponent from './bar-chart';
import CreditReturnComponent from './credit-return';
import CreditFillComponent from './credit-fill';

//redux
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from 'actions';

 class CreditInvestgation extends Component {
    componentDidMount(){
        const {searchCreditInvestgation , data={} , creditData} = this.props,
            {resumeid="",rid=""} = data.resumeoff;
            if(resumeid){
                searchCreditInvestgation({resumeid:resumeid});
            }else if(rid){
                searchCreditInvestgation({rid:rid+''});
            }
    }
    render() {
       const {creditData,searchCredit, creditInfoData, isFill , data , queryEmployeeList} = this.props;
       return(
        <div className="credit-investgation clerk-tab-container">
            <ul>
                {(isFill || creditData.flag) ? <CreditReturnComponent/> : <CreditFillComponent/>}
            </ul>
        </div>    
       )    
    }
}
const mapStateToProps = state => ({
    creditData: state.Manage.creditData,
    creditInfoData: state.Manage.creditInfoData,
    isFill: state.Manage.isFill,
    searchLoading: state.Manage.searchLoading,
    queryEmployeeList: state.Manage.queryEmployeeList,
})

const mapDispatchToProps = dispatch => ({
    showcredit:bindActionCreators(Actions.ManageActions.showcredit, dispatch),
    searchCredit: bindActionCreators(Actions.ManageActions.searchCredit, dispatch)   
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreditInvestgation)