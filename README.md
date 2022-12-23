# Nigerian-states-and-lgas
This is a minimalistic package that has a collection of all Nigerian states and all their respective local governments. This package was inspired by [naija-state-local-government](https://www.npmjs.com/package/naija-state-local-government) which was already existing but had incomplete information, So I made it a similar as the earlier mentioned packages for it's users to easily migrate and still maintain their code-base

## How to use

```javascript
//ES5
const nigerianStates = require('nigerian-states-and-lgas');

//ES6
import * as nigerianStates from 'nigerian-states-and-lgas';

const allStatesAndLGAs = nigerianStates.all()
/*
 [
  {
    state: 'Abia',
    lgas: [
      'Aba North',         'Aba South',
      'Arochukwu',         'Bende',
      'Ikwuano',           'Isiala Ngwa North',
      'Isiala Ngwa South', 'Isuikwuato',
      'Obi Ngwa',          'Ohafia',
      'Osisioma',          'Ugwunagbo',
      'Ukwa East',         'Ukwa West',
      'Umuahia North',     'Umuahia South',
      'Umu Nneochi'
    ]
  },
  ....
  ]
*/

const allStates = nigerianStates.state()
/*
[
  'Abia',     'Adamawa', 'Akwa Ibom',
  'Anambra',  'Bauchi',  'Bayelsa',
  'Benue',    'Borno',   'Cross River',
  'Delta',    'Ebonyi',  'Edo',
  'Ekiti',    'Enugu',   'Gombe',
  'Imo',      'Jigawa',  'Kaduna',
  'Kano',     'Kastina', 'Kebbi',
  'Kogi',     'Kwara',   'Lagos',
  'Nasarawa', 'Niger',   'Ogun',
  'Ondo',     'Osun',    'Oyo',
  'Plateau',  'Rivers',  'Sokoto',
  'Taraba',   'Yobe',    'Zamfara',
  'FCT'
]
*/

const allLGAsinAState = nigerianStates.lga("Oyo")
/*
[
  'Afijio',            'Akinyele',
  'Atiba',             'Atisbo',
  'Egbeda',            'Ibadan North',
  'Ibadan North-East', 'Ibadan North-West',
  'Ibadan South-East', 'Ibadan South-West',
  'Ibarapa Central',   'Ibarapa East',
  'Ibarapa North',     'Ido',
  'Irepo',             'Iseyin',
  'Itesiwaju',         'Iwajowa',
  'Kajola',            'Lagelu',
  'Ogbomosho North',   'Ogbomosho South',
  'Ogo Oluwa',         'Olorunsogo',
  'Oluyole',           'Ona Ara',
  'Orelope',           'Ori Ire',
  'Oyo East',          'Oyo West',
  'Saki East',         'Saki West',
  'Surulere'
]
*/
```
#### Warning:
Please this package was put together by a human and is not void of error, Please reach out to me on [Twitter](https://twitter.com/csdimgba) if there is a need to. 

## Enjoy every byte!!