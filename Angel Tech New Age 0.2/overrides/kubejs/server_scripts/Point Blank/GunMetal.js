ServerEvents.recipes(event => {

    event.recipes.gtceu.alloy_smelter('pointblank:gunmetal_ingot')
    .itemInputs('2x #forge:ingots/steel', 'minecraft:copper_ingot')
    .itemOutputs('3x pointblank:gunmetal_ingot')
    .EUt(32)
    .duration(500)

    event.recipes.gtceu.compressor('pointblank:gunmetal_ingot')
    .itemInputs('9x pointblank:gunmetal_nugget')
    .itemOutputs('1x pointblank:gunmetal_ingot')
    .EUt(2)
    .duration(400)

    event.recipes.gtceu.alloy_smelter('pointblank:gunmetal_nugget')
    .itemInputs('1x pointblank:gunmetal_ingot')
    .itemOutputs('9x pointblank:gunmetal_nugget')
    .notConsumable('gtceu:nugget_casting_mold')
    .EUt(4)
    .duration(500)

    event.remove({id: 'pointblank:gunmetal_mesh'})
    event.remove({id: 'pointblank:gunmetal_ingot_from_nuggets'})
    event.remove({id: 'pointblank:gunmetal_ingot_from_smelting_gunmetal_mesh'})
    event.remove({id: 'pointblank:gunmetal_ingot_from_blasting_gunmetal_mesh'})
    event.remove({id: 'pointblank:gunmetal_nugget'})

})