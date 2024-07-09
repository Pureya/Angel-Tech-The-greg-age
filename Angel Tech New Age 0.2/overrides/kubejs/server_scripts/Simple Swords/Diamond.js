ServerEvents.recipes(event => {
    // Longsword
    event.shaped(
        Item.of('simplyswords:diamond_longsword', 1),
        [
          'A  ',
          ' BE',
          ' DC'
        ],
        {
          A: '#forge:rods/wooden',
          B: '#forge:gems/diamond', 
          C: '#forge:plates/diamond',
          D: '#forge:tools/hammers',
          E: '#forge:tools/files'
        }
      )
    console.log('Hello! The recipe event has fired!')
    event.remove({ id: 'simplyswords:diamond_longsword' })

    //twinblade
    event.shaped(
        Item.of('simplyswords:diamond_twinblade', 1),
        [
          '  C',
          'DAE',
          'C  '
        ],
        {
          A: '#forge:rods/wooden',
          C: '#forge:plates/diamond',
          D: '#forge:tools/hammers',
          E: '#forge:tools/files'
        }
      )
    event.remove({ id: 'simplyswords:diamond_twinblade' })

    //Rapier
    event.shaped(
        Item.of('simplyswords:diamond_rapier', 1),
        [
          ' EC',
          ' BD',
          'A  '
        ],
        {
          A: '#forge:rods/wooden',
          B: '#forge:gems/diamond', 
          C: '#forge:plates/diamond',
          D: '#forge:tools/hammers',
          E: '#forge:tools/files'
        }
      )
      event.remove({id: 'simplyswords:diamond_rapier' })

      //Katana
      event.shaped(
        Item.of('simplyswords:diamond_katana', 1),
        [
          '  E',
          'ABC',
          '  D'
        ],
        {
          A: '#forge:rods/wooden',
          B: '#forge:gems/diamond', 
          C: '#forge:plates/diamond',
          D: '#forge:tools/hammers',
          E: '#forge:tools/files'
        }
      )
      event.remove({ id: 'simplyswords:diamond_katana' })

      //Sai
      event.shaped(
        Item.of('simplyswords:diamond_sai', 1),
        [
          'ECD',
          'A  ',
          '   '
        ],
        {
          A: '#forge:rods/wooden', 
          C: '#forge:plates/diamond',
          D: '#forge:tools/hammers',
          E: '#forge:tools/files'
        }
      )
      event.remove({ id: 'simplyswords:diamond_sai' })

      //Spear
      event.shaped(
        Item.of('simplyswords:diamond_spear', 1),
        [
          ' EC',
          ' AD',
          'A  '
        ],
        {
          A: '#forge:rods/wooden', 
          C: '#forge:plates/diamond',
          D: '#forge:tools/hammers',
          E: '#forge:tools/files'
        }
      )
      event.remove({ id: 'simplyswords:diamond_spear' })

      //Glaive
      event.shaped(
        Item.of('simplyswords:diamond_glaive', 1),
        [
          ' EC',
          ' AB',
          'A D'
        ],
        {
          A: '#forge:rods/wooden', 
          B: '#forge:gems/diamond',
          C: '#forge:plates/diamond',
          D: '#forge:tools/hammers',
          E: '#forge:tools/files'
        }
      )
      event.remove({ id: 'simplyswords:diamond_glaive' })

      //WarGlaive
      event.shaped(
        Item.of('simplyswords:diamond_warglaive', 1),
        [
          'EBD',
          'CAC',
          '   '
        ],
        {
          A: '#forge:rods/wooden', 
          B: '#forge:bolts/diamond',
          C: '#forge:plates/diamond',
          D: '#forge:tools/hammers',
          E: '#forge:tools/files'
        }
      )
      event.remove({ id: 'simplyswords:diamond_warglaive' })

      //Cutlass
      event.shaped(
        Item.of('simplyswords:diamond_cutlass', 1),
        [
          'EBD',
          'CC ',
          'A  '
        ],
        {
          A: '#forge:rods/wooden', 
          B: '#forge:gems/diamond',
          C: '#forge:plates/diamond',
          D: '#forge:tools/hammers',
          E: '#forge:tools/files'
        }
      )
      event.remove({ id: 'simplyswords:diamond_cutlass' })

      //Claymore
      event.shaped(
        Item.of('simplyswords:diamond_claymore', 1),
        [
          'EBC',
          'BCB',
          'ABD'
        ],
        {
          A: '#forge:rods/wooden', 
          B: '#forge:gems/diamond',
          C: '#forge:plates/diamond',
          D: '#forge:tools/hammers',
          E: '#forge:tools/files'
        }
      )
      event.remove({ id: 'simplyswords:diamond_claymore' })

      //Greathammer
      event.shaped(
        Item.of('simplyswords:diamond_greathammer', 1),
        [
          'CCC',
          'BBB',
          'EAD'
        ],
        {
          A: '#forge:rods/wooden', 
          B: '#forge:gems/diamond',
          C: '#forge:plates/diamond',
          D: '#forge:tools/hammers',
          E: '#forge:tools/files'
        }
      )
      event.remove({ id: 'simplyswords:diamond_greathammer' })

      //GreatAxe
      event.shaped(
        Item.of('simplyswords:diamond_greataxe', 1),
        [
          'CCC',
          'BAB',
          'EAD'
        ],
        {
          A: '#forge:rods/wooden', 
          B: '#forge:gems/diamond',
          C: '#forge:plates/diamond',
          D: '#forge:tools/hammers',
          E: '#forge:tools/files'
        }
      )
      event.remove({ id: 'simplyswords:diamond_greataxe' })

      //Chakram
      event.shaped(
        Item.of('simplyswords:diamond_chakram', 1),
        [
          'BCB',
          'CAC',
          'EBD'
        ],
        {
          A: '#forge:rods/wooden', 
          B: '#forge:bolts/diamond',
          C: '#forge:plates/diamond',
          D: '#forge:tools/hammers',
          E: '#forge:tools/files'
        }
      )
      event.remove({ id: 'simplyswords:diamond_chakram' })

      //Scythe
      event.shaped(
        Item.of('simplyswords:diamond_scythe', 1),
        [
          'CCA',
          'EAD',
          'A  '
        ],
        {
          A: '#forge:rods/wooden', 
          C: '#forge:plates/diamond',
          D: '#forge:tools/hammers',
          E: '#forge:tools/files'
        }
      )
      event.remove({ id: 'simplyswords:diamond_scythe' })

      //Halberd
      //GreatAxe
      event.shaped(
        Item.of('simplyswords:diamond_halberd', 1),
        [
          'ECB',
          'CAC',
          'A D'
        ],
        {
          A: '#forge:rods/wooden', 
          B: '#forge:gems/diamond',
          C: '#forge:plates/diamond',
          D: '#forge:tools/hammers',
          E: '#forge:tools/files'
        }
      )
      event.remove({ id: 'simplyswords:diamond_halberd' })
  })