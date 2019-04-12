/* globals test, expect */
import React from 'react'
import renderer from 'react-test-renderer'
import Counter from './counter';

test('Navbar snapshot', () => {
 const component = renderer.create(<Counter/>)

 let tree = component.toJSON()

 // Vérifier que le composant n'a pas changé depuis le dernier
 // snapshot.
 // Voir https://facebook.github.io/jest/docs/en/snapshot-testing.html
 // pour plus d'informations
 expect(tree).toMatchSnapshot()

 // L'API expect() de Jest est disponible à l'adresse
 // https://facebook.github.io/jest/docs/en/expect.html

 // Il est possible d'effectuer des vérifications plus avancées
 // grâce au projet Enzyme (vérification du DOM, etc)
 // Voir http://airbnb.io/enzyme/ et
 // https://facebook.github.io/jest/docs/en/tutorial-react.html#dom-testing
})