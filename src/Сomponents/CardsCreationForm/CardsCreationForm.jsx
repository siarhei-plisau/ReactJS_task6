import React from 'react';
import styles from './CardsCreationForm.module.scss';
import FormError from '../FormError';

export default class CardsCreationForm extends React.Component {
  constructor(props) {
    super(props);
    this.price = React.createRef();
    this.title = React.createRef();
    this.imageUrl = React.createRef();
    this.about = React.createRef();

    this.state = {
      price: '',
      title: '',
      imageUrl: '',
      about: '',
      errorForm: {
        price: false,
        title: false,
        imageUrl: false,
        about: false,
      }, 
    }
    this.handleChangePrice = this.handleChangePrice.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeImageUrl = this.handleChangeImageUrl.bind(this);
    this.handleChangeAbout = this.handleChangeAbout.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkError = this.checkError.bind(this);
  }

  checkError() {
    this.errorLabel = false;
    const copyState = Object.assign({}, this.state);
    for (const key in copyState.errorForm) {
       copyState.errorForm[key] = false;
    }
    for (const key in copyState) {
      if( key === 'errorForm' ) continue;
      if ( !copyState[key] ) {
        copyState.errorForm[key] = true;
        this.setState( state => ({ copyState }));
        this[key].current.focus();
        this.errorLabel = true;
        break;
      }
    }
    return this.errorLabel ? true : false;
  }

  handleSubmit(event) {
    event.preventDefault();
    if ( this.checkError() ) return;
    const id = new Date();
    const {price, title, imageUrl, about} = this.state;
    const {addNewCard} = this.props;
    addNewCard({id, price, title, imageUrl, about});
    this.setState( state => ({
      price: '',
      title: '',
      imageUrl: '',
      about: '',
      errorForm: {
        price: false,
        title: false,
        imageUrl: false,
        about: false,
      },
    }));
  }

  handleChangePrice(event) {
    this.setState({price: event.target.value});
  }
  handleChangeTitle(event) {
    this.setState({title: event.target.value});
  }
  handleChangeImageUrl(event) {
    this.setState({imageUrl: event.target.value});
  }
  handleChangeAbout(event) {
    this.setState({about: event.target.value})
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <label>
          Price:
          <input
            ref={this.price}
            type="number"
            className={styles.inputPrice}
            value={this.state.price}
            onChange={this.handleChangePrice}
            />
          { this.state.errorForm.price && !this.state.price ? <FormError /> : null}
        </label>

        <label>
          Title:
          <input
            ref={this.title}
            type="text"
            className={styles.inputTitle}
            value={this.state.title}
            onChange={this.handleChangeTitle}
          />
          { this.state.errorForm.title && !this.state.title ? <FormError /> : null}
        </label>

        <label>
        Image url:
          <input
            ref={this.imageUrl}
            type="text"
            value={this.state.imageUrl}
            onChange={this.handleChangeImageUrl}
          />
          {this.state.errorForm.imageUrl && !this.state.imageUrl ? <FormError /> : null}
        </label>

        <label>
        Description:
          <input
            ref={this.about}
            type="text"
            value={this.state.about}
            onChange={this.handleChangeAbout}
          />
          {this.state.errorForm.about && !this.state.about ? <FormError /> : null}
        </label>
        <button type="submit">creat card</button> 
      </form>
    );
  }
}