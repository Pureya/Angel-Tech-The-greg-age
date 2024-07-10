ServerEvents.recipes(event => {
    // Longsword
    event.shaped(
        Item.of('simplyswords:iron_longsword', 1),
        [
          'A  ',
          ' BE',
          ' DC'
        ],
        {
          A: '#forge:rods/wooden',
          B: '#forge:ingots/iron', 
          C: '#forge:plates/iron',
          D: '#forge:tools/hammers',
          E: '#forge:tools/files'
        }
      )
    console.log('Hello! The recipe event has fired!')
    event.remove({ id: 'simplyswords:iron_longsword' })

    //twinblade
    event.shaped(
        Item.of('simplyswords:iron_twinblade', 1),
        [
          '  C',
          'DAE',
          'C  '
        ],
        {
          A: '#forge:rods/wooden',
          C: '#forge:plates/iron',
          D: '#forge:tools/hammers',
          E: '#forge:tools/files'
        }
      )
    event.remove({ id: 'simplyswords:iron_twinblade' })

    //Rapier
    event.shaped(
        Item.of('simplyswords:iron_rapier', 1),
        [
          ' EC',
          ' BD',
          'A  '
        ],
        {
          A: '#forge:rods/wooden',
          B: '#forge:ingots/iron', 
          C: '#forge:plates/iron',
          D: '#forge:tools/hammers',
          E: '#forge:tools/files'
        }
      )
      event.remove({id: 'simplyswords:iron_rapier' })

      //Katana
      event.shaped(
        Item.of('simplyswords:iron_katana', 1),
        [
          '  E',
          'ABC',
          '  D'
        ],
        {
          A: '#forge:rods/wooden',
          B: '#forge:ingots/iron', 
          C: '#forge:plates/iron',
          D: '#forge:tools/hammers',
          E: '#forge:tools/files'
        }
      )
      event.remove({ id: 'simplyswords:iron_katana' })

      //Sai
      event.shaped(
        Item.of('simplyswords:iron_sai', 1),
        [
          'ECD',
          'A  ',
          '   '
        ],
        {
          A: '#forge:rods/wooden', 
          C: '#forge:plates/iron',
          D: '#forge:tools/hammers',
          E: '#forge:tools/files'
        }
      )
      event.remove({ id: 'simplyswords:iron_sai' })

      //Spear
      event.shaped(
        Item.of('simplyswords:iron_spear', 1),
        [
          ' EC',
          ' AD',
          'A  '
        ],
        {
          A: '#forge:rods/wooden', 
          C: '#forge:plates/iron',
          D: '#forge:tools/hammers',
          E: '#forge:tools/files'
        }
      )
      event.remove({ id: 'simplyswords:iron_spear' })

      //Glaive
      event.shaped(
        Item.of('simplyswords:iron_glaive', 1),
        [
          ' EC',
          ' AB',
          'A D'
        ],
        {
          A: '#forge:rods/wooden', 
          B: '#forge:ingots/iron',
          C: '#forge:plates/iron',
          D: '#forge:tools/hammers',
          E: '#forge:tools/files'
        }
      )
      event.remove({ id: 'simplyswords:iron_glaive' })

      //WarGlaive
      event.shaped(
        Item.of('simplyswords:iron_warglaive', 1),
        [
          'EBD',
          'CAC',
          '   '
        ],
        {
          A: '#forge:rods/wooden', 
          B: '#forge:bolts/iron',
          C: '#forge:plates/iron',
          D: '#forge:tools/hammers',
          E: '#forge:tools/files'
        }
      )
      event.remove({ id: 'simplyswords:iron_warglaive' })

      //Cutlass
      event.shaped(
        Item.of('simplyswords:iron_cutlass', 1),
        [
          'EBD',
          'CC ',
          'A  '
        ],
        {
          A: '#forge:rods/wooden', 
          B: '#forge:ingots/iron',
          C: '#forge:plates/iron',
          D: '#forge:tools/hammers',
          E: '#forge:tools/files'
        }
      )
      event.remove({ id: 'simplyswords:iron_cutlass' })

      //Claymore
      event.shaped(
        Item.of('simplyswords:iron_claymore', 1),
        [
          'EBC',
          'BCB',
          'ABD'
        ],
        {
          A: '#forge:rods/wooden', 
          B: '#forge:ingots/iron',
          C: '#forge:plates/iron',
          D: '#forge:tools/hammers',
          E: '#forge:tools/files'
        }
      )
      event.remove({ id: 'simplyswords:iron_claymore' })

      //Greathammer
      event.shaped(
        Item.of('simplyswords:iron_greathammer', 1),
        [
          'CCC',
          'BBB',
          'EAD'
        ],
        {
          A: '#forge:rods/wooden', 
          B: '#forge:ingots/iron',
          C: '#forge:plates/iron',
          D: '#forge:tools/hammers',
          E: '#forge:tools/files'
        }
      )
      event.remove({ id: 'simplyswords:iron_greathammer' })

      //GreatAxe
      event.shaped(
        Item.of('simplyswords:iron_greataxe', 1),
        [
          'CCC',
          'BAB',
          'EAD'
        ],
        {
          A: '#forge:rods/wooden', 
          B: '#forge:ingots/iron',
          C: '#forge:plates/iron',
          D: '#forge:tools/hammers',
          E: '#forge:tools/files'
        }
      )
      event.remove({ id: 'simplyswords:iron_greataxe' })

      //Chakram
      event.shaped(
        Item.of('simplyswords:iron_chakram', 1),
        [
          'BCB',
          'CAC',
          'EBD'
        ],
        {
          A: '#forge:rods/wooden', 
          B: '#forge:bolts/iron',
          C: '#forge:plates/iron',
          D: '#forge:tools/hammers',
          E: '#forge:tools/files'
        }
      )
      event.remove({ id: 'simplyswords:iron_chakram' })

      //Scythe
      event.shaped(
        Item.of('simplyswords:iron_scythe', 1),
        [
          'CCA',
          'EAD',
          'A  '
        ],
        {
          A: '#forge:rods/wooden', 
          C: '#forge:plates/iron',
          D: '#forge:tools/hammers',
          E: '#forge:tools/files'
        }
      )
      event.remove({ id: 'simplyswords:iron_scythe' })

      //Halberd
      //GreatAxe
      event.shaped(
        Item.of('simplyswords:iron_halberd', 1),
        [
          'ECB',
          'CAC',
          'A D'
        ],
        {
          A: '#forge:rods/wooden', 
          B: '#forge:ingots/iron',
          C: '#forge:plates/iron',
          D: '#forge:tools/hammers',
          E: '#forge:tools/files'
        }
      )
      event.remove({ id: 'simplyswords:iron_halberd' })
  })