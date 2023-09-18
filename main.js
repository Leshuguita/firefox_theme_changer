let port = browser.runtime.connectNative("themechanger")

port.onMessage.addListener((response) => {
  console.log(`Received: ${response}`);
  changeTheme(response);
});

console.log(port)

async function changeTheme(new_theme) {
		if (!new_theme) {
		console.log("Theme changed to nothing!");
		return;
	}
	
	var themes = await getThemes();
	var matching_theme = themes.find((t) => t.name == new_theme);
	
	if (!matching_theme) {
		console.log(`The theme "${new_theme}" does not exist! Available themes are: "${themes.map((t)=>t.name).join('", "')}"`)
		return;
	}
	
	// matching_theme is the theme that matches
	// the one requested in managed storage
	// so we enable it
	await browser.management.setEnabled(matching_theme.id, true);
	console.log(`changed theme to ${matching_theme.name}`)
}

async function getThemes() {
	var extensions = await browser.management.getAll();
	var themes = extensions.filter((e) => e.type == "theme");
	return themes
}