ServerEvents.recipes(event => {
    event.shaped(
        Item.of('pointblank:printer', 1),
        [
          'AAA',
          'BBC',
          'AAA'
        ],
        {
          A: 'gtceu:steel_plate',
          B: '#forge:glass_panes', 
          C: 'gtceu:lv_robot_arm'
        }
      )
    console.log('Hello! The recipe event has fired!')
    event.remove({ id: 'pointblank:printer' })
})