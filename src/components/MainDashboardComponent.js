import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Toolbar, Typography, Button, Grid, AppBar } from '@material-ui/core';
import cx from 'classnames';
import * as Actions from '../store/actions';
import CountryListComponent from './List/CountryListComponent';
import LogoComponent from './LogoComponent';
import Cards from './Cards/Cards';
import Chart from './Charts/Chart';
import Heading from './Heading/Heading';
import CountryPicker from './CountryPicker/CountryPicker';
import 'typeface-roboto';

import styles from './App.module.css';

class MainDashboardComponent extends PureComponent {
  onGlobalButtonClick = () => {
    const { actions } = this.props;
    actions.getTotalCases();
    actions.getTimeLine('Global');
  };

  render() {
    const { cases, totalCases, selectedCountry } = this.props;
    return (
      <div className={styles.root}>
        <AppBar position='sticky'>
          <Toolbar>
            <LogoComponent />
            <Typography className={styles.title} variant='h5' noWrap>
              COVID-19 Cases Tracker
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={styles.extraToolbar1}>
          <Toolbar />
        </div>
        <div className={styles.extraToolbar2}>
          <Toolbar />
        </div>
        <div className={styles.main}>
          <Grid container className={styles.gridContainer}>
            <Grid item xs={6} sm={2} className={styles.countryList}>
              <div className={styles.globalButton}>
                <Button
                  onClick={() => this.onGlobalButtonClick()}
                  variant='outlined'
                  color='primary'
                  className={cx(styles.globalButton)}
                >
                  Global Cases
                </Button>
              </div>
              <CountryListComponent data={cases} />
            </Grid>
            <Grid item xs={12} sm={10}>
              <div className={styles.container}>
                <div className={styles.countryPicker}>
                  <CountryPicker data={cases} />
                </div>
                <Heading title={selectedCountry} />
                <Cards data={totalCases} />
                <Chart />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

MainDashboardComponent.propTypes = {
  // cases: PropTypes.number,
};

MainDashboardComponent.defaultProps = {
  cases: 0
};

MainDashboardComponent.propTypes = {
  cases: PropTypes.instanceOf(Object),
  totalCases: PropTypes.instanceOf(Object)
};

MainDashboardComponent.defaultProps = {
  cases: {},
  totalCases: {}
};

const mapStateToProps = state => {
  return {
    totalCases: state.feedReducers.totalCases,
    cases: state.feedReducers.cases,
    selectedCountry: state.feedReducers.selectedCountry
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainDashboardComponent);
