import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './CardsCreationForm.module.scss';
import FormError from '../FormError';

import {
  changePrice,
  changeTitle,
  changeImageUrl,
  changeAbout,
  addNewCard,
  setErrorForm,
 } from '../../redux/actions';

class CardsCreationForm extends React.Component {
    constructor(props) {
    super(props);
    this.price = React.createRef();
    this.title = React.createRef();
    this.imageUrl = React.createRef();
    this.about = React.createRef();
  }
  checkError= () => {
    this.errorLabel = false;
    const {setErrorForm, valueOfInputs} = this.props;
    const objectOfError = {
      price: false,
      title: false,
      imageUrl: false,
      about: false 
    }
    setErrorForm(objectOfError);
    for (const key in valueOfInputs) {
      if ( !valueOfInputs[key] ) {
        objectOfError[key] = true;
        setErrorForm(objectOfError);
        this[key].current.focus();
        this.errorLabel = true;
        break;
      }
    }
    return this.errorLabel;
  }
    
  handleSubmit = (e) => {
    e.preventDefault();
    if ( this.checkError() ) return;
    const { addNewCard,
            handleChangePrice,
            handleChangeTitle,
            handleChangeImageUrl,
            handleChangeAbout
    } = this.props;
    const objectOfError = {
      price: false,
      title: false,
      imageUrl: false,
      about: false 
    }
    const {price, title, imageUrl, about} = this.props.valueOfInputs;
    const id = new Date();
    addNewCard(price, title, imageUrl, about, id);
    setErrorForm(objectOfError);
    handleChangePrice('');
    handleChangeTitle('');
    handleChangeImageUrl('');
    handleChangeAbout('');
  }

  render() {
    const { valueOfInputs,
            errorForm,
            handleChangePrice,
            handleChangeTitle,
            handleChangeImageUrl,
            handleChangeAbout,
          } = this.props;
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <label>
          Price:
          <input
            ref={this.price}
            type="number"
            className={styles.inputPrice}
            value={valueOfInputs.price}
            onChange={ (e) => handleChangePrice(e.target.value) }
          />
          { errorForm.price && !valueOfInputs.price ? <FormError /> : null}
        </label>

        <label>
          Title:
          <input
            ref={this.title}
            type="text"
            className={styles.inputTitle}
            value={valueOfInputs.title}
            onChange={ (e) => handleChangeTitle(e.target.value) }
          />
          { errorForm.title && !valueOfInputs.title ? <FormError /> : null}
        </label>

        <label>
        Image url:
          <input
            ref={this.imageUrl}
            type="text"
            value={valueOfInputs.imageUrl}
            onChange={ (e) => handleChangeImageUrl(e.target.value) }
          />
          {errorForm.imageUrl && !valueOfInputs.imageUrl ? <FormError /> : null}
        </label>

        <label>
        Description:
          <input
            ref={this.about}
            type="text"
            value={valueOfInputs.about}
            onChange={ (e) => handleChangeAbout(e.target.value) }
          />
          {errorForm.about && !valueOfInputs.about ? <FormError /> : null}
        </label>
        <button type="submit">creat card</button> 
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    valueOfInputs: {
      price: state.operationsWithCards.price,
      title: state.operationsWithCards.title,
      imageUrl: state.operationsWithCards.imageUrl,
      about: state.operationsWithCards.about,
    },
    errorForm: {
      price: state.operationsWithCards.errorForm.price,
      title: state.operationsWithCards.errorForm.title,
      imageUrl: state.operationsWithCards.errorForm.imageUrl,
      about: state.operationsWithCards.errorForm.about,
      }
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangePrice: bindActionCreators(changePrice, dispatch),
    handleChangeTitle: bindActionCreators(changeTitle, dispatch),
    handleChangeImageUrl: bindActionCreators(changeImageUrl, dispatch),
    handleChangeAbout: bindActionCreators(changeAbout, dispatch),
    addNewCard: bindActionCreators(addNewCard, dispatch),
    setErrorForm: bindActionCreators(setErrorForm, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardsCreationForm);
