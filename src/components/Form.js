import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <fieldset>
        <label htmlFor="name" data-testid="name-input">
          Nome
          <input
            id="name"
            type="text"
            name="name"
          />
        </label>
        <label htmlFor="description" data-testid="description-input">
          Descrição
          <textarea
            name="description"
            id="description"
          />
        </label>
        <label htmlFor="attr1" data-testid="attr1-input">
          Attr01
          <input
            id="attr1"
            type="number"
            name="attr1"
          />
        </label>
        <label htmlFor="attr2" data-testid="attr2-input">
          Attr2
          <input
            id="attr2"
            type="number"
            name="attr2"
          />
        </label>
        <label htmlFor="attr3" data-testid="attr3-input">
          Attr3
          <input
            id="attr3"
            type="number"
            name="attr3"
          />
        </label>
        <label htmlFor="image" data-testid="image-input">
          Imagem
          <input
            id="image"
            type="text"
            name="image"
          />
        </label>
        <label htmlFor="rare">
          Raridade
          <select name="rare" id="rare" data-testid="rare-input">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="rare" data-testid="trunfo-input">
          Super Trybe Trunfo
          <input
            type="checkbox"
            name="isTrunfo"
          />
        </label>
        <button data-testid="save-button">Salvar</button>
      </fieldset>
    );
  }
}

export default Form;
