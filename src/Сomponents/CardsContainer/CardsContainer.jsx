import React from 'react';
import styles from './CardsContainer.module.scss';
import Card from '../Card';
import Preloader from '../Preloader';
import CardsCreationForm from '../CardsCreationForm';
import {
  deleteCard,
  fetchDataCards,
 } from '../../redux/actions';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class CardContainer extends React.Component {
  componentDidMount() {
    this.props.fetchDataCards();
  }
  render() {
    const {cards, deleteCard, isLoading} = this.props;
      return (
        isLoading ?
          <Preloader />:
          ( <div className={styles.container}>
              <CardsCreationForm />  
              { cards.length === 0 ?
                <div>No cards yet</div> :
                cards.map( card => ( <Card key={card.id} deleteCard={deleteCard} {...card} /> ))
              } 
            </div> )
      )
  }  
} 

const mapStateToProps = state => {
  return {
    cards: state.operationsWithCards.cards,
    isLoading: state.operationsWithCards.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCard: bindActionCreators(deleteCard, dispatch),
    fetchDataCards: bindActionCreators(fetchDataCards, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
