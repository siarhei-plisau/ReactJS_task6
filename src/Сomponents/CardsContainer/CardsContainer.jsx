import React from 'react';
import styles from './CardsContainer.module.scss';
import { apiCall } from '../../api/mockedApi';
import Card from '../Card';
import Preloader from '../Preloader';
import CardsCreationForm from '../CardsCreationForm';

export default class CardContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: [],
      isLoading: true,
    }
    this.handleDeleteCard = this.handleDeleteCard.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.addNewCard = this.addNewCard.bind(this);
  }
  handleDeleteCard(id) {
    const resultCards = this.state.cards.filter( item => item.id !== id);
    this.setState({ cards: resultCards });
  }
  addNewCard({id, price, title, imageUrl, about}) {
    const resultArrayOfCards = this.state.cards.slice();
    resultArrayOfCards.push({id, price, title, imageUrl, about});
    console.log(resultArrayOfCards);
    this.setState({ cards: resultArrayOfCards});
  }
  fetchData() {
    apiCall().then( response => {
      const cards = response ? response : [];
      this.setState({cards, isLoading: false})
    })
  }
  componentDidMount() {
    this.fetchData();
  }  
    
  render() {
    const { cards, isLoading } = this.state;
    return isLoading ? ( <Preloader/>) :
     (
      <div className={styles.container}>
      <CardsCreationForm addNewCard={this.addNewCard} />
        { 
          cards.length === 0 ? <div>No cards yet</div> : cards.map( props => (
            <Card key={props.id} handleDeleteCard={this.handleDeleteCard} {...props} />
            ))
        }
      </div>
    );
  }
}