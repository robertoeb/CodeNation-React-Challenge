import React from 'react'

const highlights = (textProperty, term) => {
    if( !textProperty ) return;
    if( term == '' ) return textProperty;

    let regex = new RegExp(`(${term})`, "i");
    let textParts = textProperty.split(regex);

    return textParts.map(( item, index ) => {
        if( regex.test( item ) ) return <mark key = { index }>{ item }</mark>
        return item;
    });
}

const RecipeItem = ({ thumbnail, title, ingredients, term }) => (
    <div className="col-sm-3 mt-4">
        <div className="card">
            <img className="card-img-top img-fluid" src={ thumbnail } alt={ title } />
            <div className="card-body">
                <h5 className="card-title">{ highlights( title, term ) }</h5>
                <p className="card-text">
                    <strong>Ingredients: </strong> {
                        highlights( ingredients, term )
                    }
                </p>
            </div>
        </div>
    </div>
)

export default RecipeItem;