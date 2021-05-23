import React from 'react'

import Image from '../Image'

import Arrow from 'assets/Arrow.png'
import Close from 'assets/Close.png'
import styles from './styles.module.css'

type Recipe = {
  title: string
  cover?: string
  steps: string[]
  totalIngredients: number
  matchedIngredients: number
}

export type RecipeCardProps = {
  isSelected?: boolean
  recipe: Recipe
}

const RecipeCard = ({ isSelected, recipe }: RecipeCardProps) => {
  return (
    <div className={isSelected ? styles.selected : styles.container}>
      <div>
        <Image src={recipe.cover} alt={recipe.title} />
      </div>
      <div className={styles.contentInfo}>
        <h2>{recipe.title}</h2>
        <div>
          <span>Ingredientes</span>
          <span />
          <span>
            {recipe.matchedIngredients}/{recipe.totalIngredients} ingredientes
          </span>
        </div>
        <ul>
          {recipe.steps.slice(0, 3).map(step => (
            <li>{step}</li>
          ))}
        </ul>
      </div>
      {isSelected
        ? <Image src={Close} alt='close' />
        : <Image src={Arrow} alt='arrow' />}
    </div>
  )
}

export default RecipeCard
