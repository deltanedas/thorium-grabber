var ui = require("ui-lib/library");

ui.addButton("thorium-grabber", Items.thorium, () => {
	const core = Vars.state.teams.playerCores().first().tile;
	Call.requestItem(Vars.player, core, Items.thorium, 15);
});
