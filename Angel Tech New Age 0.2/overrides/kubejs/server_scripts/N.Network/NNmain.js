ServerEvents.recipes(event => {

    event.recipes.gtceu.circuit_assembler('hostilenetworks:blank_data_model')
    .itemInputs('2x #gtceu:circuits/lv', '#gtceu:circuits/mv', '2x #forge:fine_wires/red_alloy', 'gtceu:phenolic_printed_circuit_board')
    .inputFluids(Fluid.of('gtceu:tin', 50))
    .itemOutputs('hostilenetworks:blank_data_model')
    .EUt(64)
    .duration(1200)
    console.log('Circuits')

    event.recipes.gtceu.circuit_assembler('hostilenetworks:blank_data_model_soldering')
    .itemInputs('2x #gtceu:circuits/lv', '#gtceu:circuits/mv', '2x #forge:fine_wires/red_alloy', 'gtceu:phenolic_printed_circuit_board')
    .inputFluids(Fluid.of('gtceu:soldering_alloy', 50))
    .itemOutputs('hostilenetworks:blank_data_model')
    .EUt(64)
    .duration(1200)
    event.remove({ id: 'hostilenetworks:framework' })

    event.recipes.gtceu.assembler('hostilenetworks:sim_chamber')
    .itemInputs('hostilenetworks:blank_data_model', '#forge:glass_panes', 'gtceu:mv_machine_hull', '4x #forge:plates/black_steel')
    .itemOutputs('hostilenetworks:sim_chamber')
    .EUt(64)
    .duration(1700)
    .circuit(4)

    event.remove({id: 'hostilenetworks:sim_chamber'})

    event.recipes.gtceu.assembler('hostilenetworks:loot_fabricator')
    .itemInputs('hostilenetworks:blank_data_model', 'gtceu:mv_assembler', '#forge:glass_panes', '4x #forge:plates/black_steel')
    .itemOutputs('hostilenetworks:loot_fabricator')
    .EUt(64)
    .duration(2100)
    .circuit(5)

    event.remove({id: 'hostilenetworks:loot_fabricator'})

})