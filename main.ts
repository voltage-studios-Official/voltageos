function comvoltagestore() {
    game.showLongText("voltage!store is unfinished. Please check back soon! -voltage!studios", DialogLayout.Center);
    homeScreen();
}

function loginScreen() {
    myMenu2 = miniMenu.createMenu(
        miniMenu.createMenuItem("User1", assets.image`userPic0`)
    );
    myMenu2.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Background, -1);
    myMenu2.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 2);
    myMenu2.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.Foreground, 0);
    myMenu2.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.Background, -1);
    myMenu2.onButtonPressed(controller.A, function (selection, selectedIndex) {
        UserID = selectedIndex;
        myMenu2.close();
        homeScreen();
    });
}

function homeScreen() {
    appList = [
        miniMenu.createMenuItem("Logout", assets.image`logoutIcon`),
        miniMenu.createMenuItem("voltage!store", assets.image`voltageStoreIcon`)
    ];
    homeMenu = miniMenu.createMenuFromArray(appList);
    homeMenu.setBounceOnWall(true);
    homeMenu.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.IconOnly, 1);
    homeMenu.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Background, -1);
    homeMenu.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 2);
    homeMenu.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.Foreground, 0);
    homeMenu.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.Background, -1);
    homeMenu.onSelectionChanged(function (selection, selectedIndex) {
        homeMenu.setTitle(`${selection} (#${selectedIndex + 1})`);
    });
    homeMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
        if (selection === "voltage!store") {
            homeMenu.close();
            comvoltagestore();
        } else if (selection === "Logout") {
            homeMenu.close();
            loginScreen();
        }
    });
    homeMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Columns, Math.floor(scene.screenWidth() / 20));
    homeMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Rows, Math.floor(scene.screenHeight() / 20));
    homeMenu.setDimensions(scene.screenWidth(), scene.screenHeight());
    homeMenu.setPosition(0, 0);
}

let homeMenu = null;
let appList = [];
let UserID = 0;
let myMenu2 = null;
let background_images = [assets.image`wallpaper0`, assets.image`wallpaper1`];
let background_names = ["Mountains", "Paint"];

scene.setBackgroundImage(assets.image`BootSplash`);
pause(500);
loginScreen();
