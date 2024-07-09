ServerEvents.recipes(event => {
    // Propeller
    event.shaped(
        Item.of('immersive_aircraft:propeller', 1),
        [
          'AA ',
          'DBE',
          ' AA'
        ],
        {
          A: '#forge:plates/steel',
          B: '#forge:rotors/steel', 
          D: '#forge:tools/hammers',
          E: '#forge:tools/files'
        }
      )
    console.log('Hello! The recipe event has fired!')
    event.remove({ id: 'immersive_aircraft:propeller' })

    event.recipes.gtceu.assembler('immersive_aircraft:propeller')
    .itemInputs('2x #forge:plates/steel', '#forge:rotors/steel')
    .itemOutputs('immersive_aircraft:propeller')
    .EUt(32)
    .duration(500)

    //hull
    event.recipes.gtceu.assembler('immersive_aircraft:hull')
    .itemInputs('6x #minecraft:logs', '3x #forge:plates/steel', '6x #forge:screws/steel')
    .itemOutputs('immersive_aircraft:hull')
    .EUt(32)
    .duration(700)
    .circuit(2)
    event.remove({id: 'immersive_aircraft:hull'})


    //Engine
    event.shaped(
      Item.of('immersive_aircraft:engine', 1),
      [
        'DAE',
        'CCC',
        'ABA'
      ],
      {
        A: '#forge:plates/steel',
        B: 'gtceu:hp_steam_solid_boiler', 
        C: '#forge:gears/steel',
        D: '#forge:tools/hammers',
        E: '#forge:tools/screwdrivers'
      }
    )
    event.recipes.gtceu.assembler('immersive_aircraft:engine')
    .itemInputs('3x #forge:gears/steel', '1x #forge:plates/steel', 'gtceu:hp_steam_solid_boiler')
    .itemOutputs('immersive_aircraft:engine')
    .EUt(32)
    .duration(1600)
    .circuit(1)
    event.remove({id: 'immersive_aircraft:engine'})


})