import React, { Component } from 'react';
import PropTypes from 'prop-types';
import I18n from 'i18n-js';
import { compose } from 'recompose';
import { spinningIf, hideIf } from 'common/utils';
import {
  widgetViewTracking,
  widgetStayTimeTracking,
} from 'common/components/tracking';
import { withWidgetContainer } from 'common/components/widget/WidgetContainer';
import Spinner from 'common/components/spinners/WidgetSpinner';
import Space from 'common/components/Space';

import { connect } from 'react-redux';

import styles from './Main.less';

import sprite from '../Assets/charlie.gif'

const enhance = compose(
  connect(),
  //spinningIf(({ loading }) => loading, Spinner),
  //hideIf(({ data }) => data == null),
  widgetViewTracking(),
  widgetStayTimeTracking(),
  withWidgetContainer({
    title: 'Strokebeard',
  }),
);

class Pet extends Component {
  constructor(props) {
    super(props);
    this.inventory = {
      toys: [],
      foods: [],
      treats: []
    };
    this.status = {
      health: 50,
      love: 50,
    }
  };

  render() {
    return (
      <div className='view-box'>
        
        <div className={styles['pet-display'] + ' ' + styles['view-bar']}>
          
        </div>
        <Space h={4.5} />

        <div className={styles['action-bar'] + ' ' + styles['view-bar']}>
          <ClothesAction name='Dress Up'/> 
          <TreatAction name='Treat'/>
          <ToysAction name='Toys'/>
          <SpaAction name='Doggy Spa'/>
        </div>
        <Space h={4.5} />

        <div className={styles['status-bar'] + ' ' + styles['view-bar']}>
          <StatusBar />
        </div>
      </div>
    )
  }
}

class Action extends Component {
  constructor(props){
    super(props);
    this.handleClick  = this.handleClick.bind(this)
  }

  handleClick() { console.log('abc')}

  render() {
    return (
      <button className={styles['action-button']} onClick={this.handleClick}>
        {this.props.name}
      </button>
    )
  }
}

class TreatAction extends Action {
  constructor(props){
    super(props);
    this.handleClick  = this.handleClick.bind(this)
  }

  handleClick() { console.log('Giving Treats') }
}

class ToysAction extends Action {
  constructor(props){
    super(props);
    this.handleClick  = this.handleClick.bind(this)
  }

  handleClick() { console.log('Giving Toys') }
}

class ClothesAction extends Action {
  constructor(props){
    super(props);
    this.handleClick  = this.handleClick.bind(this)
  }

  handleClick() { console.log('Dressing Up') }
}

class SpaAction extends Action {
  constructor(props){
    super(props);
    this.handleClick  = this.handleClick.bind(this)
  }

  handleClick() { console.log('Purr') }
}

class StatusBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      health: 30
    };

  this.adjustHealth = this.adjustHealth.bind(this)
  }

  adjustHealth(amount) {
    this.setState({health: prevState.health + amount})
  }

  render() {
    return [
      <p key='charlie-health-bar'> Health : {this.state.health} </p>
    ]
  }
}

export class Main extends Component {

  render() {

    return (
      <Pet name='Charlie'/>
    );
  }
}

Main.displayName = 'Main';

export default enhance(Main);
